package org.babyfish.jimmer.sql.association.spi;

import org.babyfish.jimmer.meta.ImmutableProp;
import org.babyfish.jimmer.runtime.DraftSpi;
import org.babyfish.jimmer.runtime.ImmutableSpi;
import org.babyfish.jimmer.runtime.Internal;
import org.babyfish.jimmer.sql.SqlClient;
import org.babyfish.jimmer.sql.association.meta.AssociationType;
import org.babyfish.jimmer.sql.ast.Expression;
import org.babyfish.jimmer.sql.ast.Selection;
import org.babyfish.jimmer.sql.ast.impl.query.AbstractMutableQueryImpl;
import org.babyfish.jimmer.sql.ast.impl.query.Queries;
import org.babyfish.jimmer.sql.ast.query.MutableQuery;
import org.babyfish.jimmer.sql.ast.query.Sortable;
import org.babyfish.jimmer.sql.ast.table.Table;
import org.babyfish.jimmer.sql.ast.tuple.Tuple2;
import org.babyfish.jimmer.sql.cache.Cache;
import org.babyfish.jimmer.sql.cache.QueryCacheEnvironment;
import org.babyfish.jimmer.sql.fetcher.Fetcher;
import org.babyfish.jimmer.sql.fetcher.Filter;
import org.babyfish.jimmer.sql.fetcher.impl.FetcherImpl;
import org.babyfish.jimmer.sql.fetcher.impl.FilterArgsImpl;
import org.babyfish.jimmer.sql.meta.Column;
import org.babyfish.jimmer.sql.meta.MiddleTable;
import org.babyfish.jimmer.sql.meta.Storage;

import java.sql.Connection;
import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;

public abstract class AbstractDataLoader {

    private final SqlClient sqlClient;

    private final Connection con;

    private final ImmutableProp prop;

    private final Fetcher<ImmutableSpi> fetcher;

    private final Filter<Table<ImmutableSpi>> filter;

    private final ImmutableProp thisIdProp;

    private final ImmutableProp targetIdProp;

    private final int limit;

    private final int offset;

    @SuppressWarnings("unchecked")
    protected AbstractDataLoader(
            SqlClient sqlClient,
            Connection con,
            ImmutableProp prop,
            Fetcher<?> fetcher,
            Filter<?> filter,
            int limit,
            int offset
    ) {
        if (!prop.isAssociation()) {
            throw new IllegalArgumentException(
                    "\"" + prop + "\" is not association"
            );
        }
        this.sqlClient = sqlClient;
        this.con = con;
        this.prop = prop;
        this.fetcher = fetcher != null ?
                (Fetcher<ImmutableSpi>) fetcher :
                new FetcherImpl<>((Class<ImmutableSpi>) prop.getTargetType().getJavaClass());
        this.filter = (Filter<Table<ImmutableSpi>>) filter;
        this.thisIdProp = prop.getDeclaringType().getIdProp();
        this.targetIdProp = prop.getTargetType().getIdProp();
        this.limit = limit;
        this.offset = offset;
    }

    @SuppressWarnings("unchecked")
    public Map<ImmutableSpi, Object> load(Collection<ImmutableSpi> sources) {
        if (sources.isEmpty()) {
            return Collections.emptyMap();
        }
        if (sources.size() > 1 && (limit != Integer.MAX_VALUE || offset != 0)) {
            throw new IllegalArgumentException("Pagination data loader does not support batch loading");
        }
        if (prop.getStorage() instanceof Column) {
            return (Map<ImmutableSpi, Object>)(Map<?, ?>) loadParents(sources);
        }
        if (prop.isEntityList()) {
            return (Map<ImmutableSpi, Object>)(Map<?, ?>) loadTargetMultiMap(sources);
        }
        return (Map<ImmutableSpi, Object>)(Map<?, ?>) loadTargetMap(sources);
    }

    @SuppressWarnings("unchecked")
    private Map<ImmutableSpi, ImmutableSpi> loadParents(Collection<ImmutableSpi> sources) {
        Cache<Object, Object> fkCache = sqlClient
                .getCaches()
                .getAssociatedIdCache(prop);
        if (fkCache == null) {
            return loadParentsDirectly(sources);
        }
        Map<Object, Object> fkMap = new LinkedHashMap<>(
                (sources.size() * 4 + 2) / 3
        );
        Collection<Object> missedFkSourceIds;
        if (filter != null) {
            missedFkSourceIds = toSourceIds(sources);
        } else {
            missedFkSourceIds = new ArrayList<>();
            for (ImmutableSpi source : sources) {
                if (source.__isLoaded(prop.getId())) {
                    ImmutableSpi target = (ImmutableSpi) source.__get(prop.getId());
                    if (target != null) {
                        fkMap.put(toSourceId(source), toTargetId(target));
                    }
                } else {
                    missedFkSourceIds.add(toSourceId(source));
                }
            }
        }
        if (!missedFkSourceIds.isEmpty()) {
            Map<Object, Object> cachedFkMap = fkCache.getAll(
                    missedFkSourceIds,
                    new QueryCacheEnvironment<>(
                            sqlClient,
                            con,
                            filter,
                            this::queryForeignKeyMap
                    )
            );
            for (Object sourceId : missedFkSourceIds) {
                Object fk = cachedFkMap.get(sourceId);
                if (fk != null) {
                    fkMap.put(sourceId, fk);
                }
            }
        }
        Map<Object, ImmutableSpi> targetMap =
                Utils.joinMaps(
                        fkMap,
                        Utils.toMap(
                                this::toTargetId,
                                findTargets(new LinkedHashSet<>(fkMap.values()))
                        )
                );
        return Utils.joinCollectionAndMap(sources, this::toSourceId, targetMap, true);
    }

    @SuppressWarnings("unchecked")
    private Map<ImmutableSpi, ImmutableSpi> loadParentsDirectly(
            Collection<ImmutableSpi> sources
    ) {
        Map<Object, Object> fkMap = new LinkedHashMap<>(
                (sources.size() * 4 + 2) / 3
        );
        Collection<Object> missedFkSourceIds = new ArrayList<>();
        for (ImmutableSpi source : sources) {
            if (source.__isLoaded(prop.getId())) {
                ImmutableSpi target = (ImmutableSpi) source.__get(prop.getId());
                if (target != null) {
                    fkMap.put(toSourceId(source), toTargetId(target));
                }
            } else {
                missedFkSourceIds.add(toSourceId(source));
            }
        }
        Map<Object, ImmutableSpi> map1 = null;
        if (!fkMap.isEmpty()) {
            if (filter != null) {
                map1 = Utils.joinMaps(
                        fkMap,
                        Utils.toMap(
                                this::toTargetId,
                                queryTargets(fkMap.values())
                        )
                );
            } else {
                map1 = Utils.joinMaps(
                        fkMap,
                        Utils.toMap(
                                this::toTargetId,
                                findTargets(fkMap.values())
                        )
                );
            }
        }
        Map<Object, ImmutableSpi> map2 = null;
        if (!missedFkSourceIds.isEmpty()) {
            if (filter != null || fetcher.getFieldMap().size() > 1) {
                map2 = Tuple2.toMap(
                        querySourceTargetPairs(missedFkSourceIds)
                );
            } else {
                Map<Object, Object> loadedFkMap =
                        queryForeignKeyMap(missedFkSourceIds);
                map2 = new LinkedHashMap<>((missedFkSourceIds.size() * 4 + 2) / 3);
                for (Object sourceId : missedFkSourceIds) {
                    Object targetId = loadedFkMap.get(sourceId);
                    map2.put(sourceId, makeIdOnlyTarget(targetId));
                }
            }
        }
        return Utils.joinCollectionAndMap(
                sources,
                this::toTargetId,
                Utils.mergeMap(map1, map2),
                true
        );
    }

    private Map<ImmutableSpi, ImmutableSpi> loadTargetMap(Collection<ImmutableSpi> sources) {
        Cache<Object, Object> cache = sqlClient.getCaches().getAssociatedIdCache(prop);
        if (cache == null) {
            return loadTargetMapDirectly(sources);
        }
        List<Object> sourceIds = toSourceIds(sources);
        Map<Object, Object> idMap = cache.getAll(
                sourceIds,
                new QueryCacheEnvironment<>(
                        sqlClient,
                        con,
                        filter,
                        it -> Tuple2.toMap(
                                querySourceTargetIdPairs(it)
                        )
                )
        );
        Map<Object, ImmutableSpi> targetMap = Utils.toMap(
                this::toTargetId,
                findTargets(new LinkedHashSet<>(idMap.values()))
        );
        return Utils.joinCollectionAndMap(
                sources,
                this::toSourceId,
                Utils.joinMaps(idMap, targetMap),
                true
        );
    }

    private Map<ImmutableSpi, ImmutableSpi> loadTargetMapDirectly(Collection<ImmutableSpi> sources) {
        List<Object> sourceIds = toSourceIds(sources);
        Map<Object, ImmutableSpi> targetMap;
        if (fetcher.getFieldMap().size() > 1) {
            targetMap = Tuple2.toMap(
                    querySourceTargetPairs(sourceIds)
            );
        } else {
            targetMap = Tuple2.toMap(
                    querySourceTargetIdPairs(sourceIds),
                    this::makeIdOnlyTarget
            );
        }
        return Utils.joinCollectionAndMap(
                sources,
                this::toSourceId,
                targetMap,
                true
        );
    }

    private Map<ImmutableSpi, List<ImmutableSpi>> loadTargetMultiMap(Collection<ImmutableSpi> sources) {
        Cache<Object, List<Object>> cache = sqlClient.getCaches().getAssociatedIdListCache(prop);
        if (cache == null) {
            return loadTargetMultiMapDirectly(sources);
        }
        List<Object> sourceIds = toSourceIds(sources);
        Map<Object, List<Object>> idMultiMap = cache.getAll(
                sourceIds,
                new QueryCacheEnvironment<>(
                        sqlClient,
                        con,
                        filter,
                        it -> Tuple2.toMultiMap(
                                querySourceTargetIdPairs(it)
                        )
                )
        );
        Map<Object, ImmutableSpi> targetMap = Utils.toMap(
                this::toTargetId,
                findTargets(
                        idMultiMap
                                .values()
                                .stream()
                                .filter(Objects::nonNull)
                                .flatMap(Collection::stream)
                                .distinct()
                                .collect(Collectors.toList())
                )
        );
        return Utils.joinCollectionAndMap(
                sources,
                this::toSourceId,
                Utils.joinMultiMapAndMap(idMultiMap, targetMap),
                true
        );
    }

    private Map<ImmutableSpi, List<ImmutableSpi>> loadTargetMultiMapDirectly(Collection<ImmutableSpi> sources) {
        List<Object> sourceIds = toSourceIds(sources);
        Map<Object, List<ImmutableSpi>> targetMap;
        if (fetcher.getFieldMap().size() > 1) {
            targetMap = Tuple2.toMultiMap(
                    querySourceTargetPairs(sourceIds)
            );
        } else {
            targetMap = Tuple2.toMultiMap(
                    querySourceTargetIdPairs(sourceIds),
                    this::makeIdOnlyTarget
            );
        }
        return Utils.joinCollectionAndMap(
                sources,
                this::toSourceId,
                targetMap,
                true
        );
    }

    private Map<Object, Object> queryForeignKeyMap(Collection<Object> sourceIds) {
        if (sourceIds.size() == 1) {
            Object sourceId = sourceIds.iterator().next();
            List<Object> targetIds = Queries.createQuery(sqlClient, prop.getDeclaringType(), (q, source) -> {
                Expression<Object> pkExpr = source.get(thisIdProp.getName());
                Table<?> targetTable = source.join(prop.getName());
                Expression<Object> fkExpr = targetTable.get(targetIdProp.getName());
                q.where(pkExpr.eq(sourceId));
                q.where(fkExpr.isNotNull());
                applyFilter(q, targetTable, sourceIds);
                return q.select(fkExpr);
            }).limit(limit, offset).execute(con);
            return Utils.toMap(sourceId, targetIds);
        }
        List<Tuple2<Object, Object>> tuples = Queries
                .createQuery(sqlClient, prop.getDeclaringType(), (q, source) -> {
                    Expression<Object> pkExpr = source.get(thisIdProp.getName());
                    Table<?> targetTable = source.join(prop.getName());
                    Expression<Object> fkExpr = targetTable.get(targetIdProp.getName());
                    q.where(pkExpr.in(sourceIds));
                    q.where(fkExpr.isNotNull());
                    applyFilter(q, targetTable, sourceIds);
                    return q.select(pkExpr, fkExpr);
                }).execute(con);
        return Tuple2.toMap(tuples);
    }

    private List<Tuple2<Object, Object>> querySourceTargetIdPairs(Collection<Object> sourceIds) {
        if (filter == null) {
            boolean useMiddleTable = false;
            Storage storage = prop.getStorage();
            if (storage != null) {
                useMiddleTable = storage instanceof MiddleTable;
            } else {
                ImmutableProp mappedBy = prop.getMappedBy();
                if (mappedBy != null && mappedBy.getStorage() instanceof MiddleTable) {
                    useMiddleTable = true;
                }
            }
            if (useMiddleTable) {
                if (sourceIds.size() == 1) {
                    Object sourceId = sourceIds.iterator().next();
                    List<Object> targetIds = Queries.createAssociationQuery(sqlClient, AssociationType.of(prop), (q, association) -> {
                        Expression<Object> sourceIdExpr = association.source().get(thisIdProp.getName());
                        Expression<Object> targetIdExpr = association.target().get(targetIdProp.getName());
                        q.where(sourceIdExpr.eq(sourceId));
                        return q.select(targetIdExpr);
                    }).limit(limit, offset).execute(con);
                    return Utils.toTuples(sourceId, targetIds);
                }
                return Queries.createAssociationQuery(sqlClient, AssociationType.of(prop), (q, association) -> {
                    Expression<Object> sourceIdExpr = association.source().get(thisIdProp.getName());
                    Expression<Object> targetIdExpr = association.target().get(targetIdProp.getName());
                    q.where(sourceIdExpr.in(sourceIds));
                    return q.select(sourceIdExpr, targetIdExpr);
                }).execute(con);
            }
        }
        return executeTupleQuery(sourceIds, target -> target.get(targetIdProp.getName()));
    }

    @SuppressWarnings("unchecked")
    private List<Tuple2<Object, ImmutableSpi>> querySourceTargetPairs(
            Collection<Object> sourceIds
    ) {
        return executeTupleQuery(sourceIds, target -> target.fetch(fetcher));
    }

    @SuppressWarnings("unchecked")
    private List<ImmutableSpi> queryTargets(Collection<Object> targetIds) {
        return Queries.createQuery(sqlClient, prop.getTargetType(), (q, target) -> {
            Expression<Object> idExpr = target.get(targetIdProp.getName());
            q.where(idExpr.in(targetIds));
            applyFilter(q, target, targetIds);
            return q.select(
                    ((Table<ImmutableSpi>)target).fetch(fetcher)
            );
        }).execute(con);
    }

    @SuppressWarnings("unchecked")
    private <R> List<Tuple2<Object, R>> executeTupleQuery(
            Collection<Object> sourceIds,
            Function<Table<ImmutableSpi>, Selection<?>> valueExpressionGetter) {
        if (sourceIds.size() == 1) {
            Object sourceId = sourceIds.iterator().next();
            List<R> results = Queries.createQuery(sqlClient, prop.getTargetType(), (q, target) -> {
                Expression<Object> sourceIdExpr = target
                        .inverseJoin(prop.getDeclaringType().getJavaClass(), prop.getName())
                        .get(thisIdProp.getName());
                q.where(sourceIdExpr.eq(sourceId));
                applyFilter(q, target, sourceIds);
                return q.select((Selection<R>) valueExpressionGetter.apply((Table<ImmutableSpi>) target));
            }).limit(limit, offset).execute(con);
            return Utils.toTuples(sourceId, results);
        }
        return Queries.createQuery(sqlClient, prop.getTargetType(), (q, target) -> {
            Expression<Object> sourceIdExpr = target
                    .inverseJoin(prop.getDeclaringType().getJavaClass(), prop.getName())
                    .get(thisIdProp.getName());
            q.where(sourceIdExpr.in(sourceIds));
            applyFilter(q, target, sourceIds);
            return q.select(sourceIdExpr, (Selection<R>) valueExpressionGetter.apply((Table<ImmutableSpi>) target));
        }).execute(con);
    }

    @SuppressWarnings("unchecked")
    private void applyFilter(
            MutableQuery query,
            Table<?> table,
            Collection<Object> keys
    ) {
        if (filter != null) {
            filter.apply(
                    FilterArgsImpl.of(
                            (AbstractMutableQueryImpl) query,
                            (Table<ImmutableSpi>) table,
                            keys
                    )
            );
        }
    }

    private Object toSourceId(ImmutableSpi source) {
        return source.__get(thisIdProp.getId());
    }

    private List<Object> toSourceIds(Collection<ImmutableSpi> sources) {
        return sources
                .stream()
                .map(this::toSourceId)
                .collect(Collectors.toList());
    }

    private Object toTargetId(ImmutableSpi target) {
        if (target == null) {
            return null;
        }
        return target.__get(targetIdProp.getId());
    }

    @SuppressWarnings("unchecked")
    private List<ImmutableSpi> findTargets(Collection<Object> targetIds) {
        if (fetcher.getFieldMap().size() > 1) {
            return sqlClient.getEntities().forConnection(con).findByIds(
                    fetcher,
                    targetIds
            );
        }
        return makeIdOnlyTargets(targetIds);
    }

    private List<ImmutableSpi> makeIdOnlyTargets(Collection<Object> targetIds) {
        return targetIds
                .stream()
                .map(this::makeIdOnlyTarget)
                .collect(
                        Collectors.toCollection(
                                () -> new ArrayList<>(targetIds.size())
                        )
                );
    }

    private ImmutableSpi makeIdOnlyTarget(Object id) {
        if (id == null) {
            return null;
        }
        return (ImmutableSpi) Internal.produce(prop.getTargetType(), null, draft -> {
            DraftSpi targetDraft = (DraftSpi) draft;
            targetDraft.__set(targetIdProp.getId(), id);
        });
    }
}
