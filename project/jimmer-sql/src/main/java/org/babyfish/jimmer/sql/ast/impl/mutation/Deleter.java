package org.babyfish.jimmer.sql.ast.impl.mutation;

import org.babyfish.jimmer.impl.util.CollectionUtils;
import org.babyfish.jimmer.meta.*;
import org.babyfish.jimmer.runtime.DraftSpi;
import org.babyfish.jimmer.runtime.ImmutableSpi;
import org.babyfish.jimmer.runtime.Internal;
import org.babyfish.jimmer.sql.LogicalDeleted;
import org.babyfish.jimmer.sql.ast.impl.AstContext;
import org.babyfish.jimmer.sql.ast.impl.query.FilterLevel;
import org.babyfish.jimmer.sql.ast.impl.query.MutableRootQueryImpl;
import org.babyfish.jimmer.sql.ast.impl.table.TableImplementor;
import org.babyfish.jimmer.sql.ast.mutation.DeleteMode;
import org.babyfish.jimmer.sql.ast.table.Table;
import org.babyfish.jimmer.sql.ast.tuple.Tuple3;
import org.babyfish.jimmer.sql.meta.ColumnDefinition;
import org.babyfish.jimmer.sql.DissociateAction;
import org.babyfish.jimmer.sql.ast.mutation.AffectedTable;
import org.babyfish.jimmer.sql.ast.mutation.DeleteResult;
import org.babyfish.jimmer.sql.meta.MetadataStrategy;
import org.babyfish.jimmer.sql.meta.SingleColumn;
import org.babyfish.jimmer.sql.runtime.*;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.*;

public class Deleter {

    private final DeleteCommandImpl.Data data;

    private final Connection con;

    private final MutationCache cache;

    private final MutationTrigger trigger;

    private final Map<AffectedTable, Integer> affectedRowCountMap;

    private Map<ImmutableType, Set<Object>> preHandleIdInputMap =
            new LinkedHashMap<>();

    private Map<ImmutableType, Set<Object>> postHandleIdInputMap =
            new LinkedHashMap<>();

    private final Map<String, Deleter> childDeleterMap =
            new LinkedHashMap<>();

    Deleter(
            DeleteCommandImpl.Data data,
            Connection con,
            MutationCache cache,
            MutationTrigger trigger,
            Map<AffectedTable, Integer> affectedRowCountMap
    ) {
        this.data = data;
        this.con = con;
        this.cache = cache;
        this.trigger = trigger;
        this.affectedRowCountMap = affectedRowCountMap;
    }

    public void addPreHandleInput(ImmutableType type, Collection<?> ids) {
        Set<Object> idSet = preHandleIdInputMap.computeIfAbsent(
                type,
                t -> new LinkedHashSet<>()
        );
        for (Object id : ids) {
            if (id != null) {
                idSet.add(id);
            }
        }
    }

    private void addPostHandleInput(ImmutableType type, Collection<?> ids) {
        Set<Object> idSet = postHandleIdInputMap.computeIfAbsent(
                type,
                t -> new LinkedHashSet<>()
        );
        for (Object id : ids) {
            if (id != null) {
                idSet.add(id);
            }
        }
    }

    private void addOutput(AffectedTable affectTable, int affectedRowCount) {
        affectedRowCountMap.merge(affectTable, affectedRowCount, Integer::sum);
    }

    public DeleteResult execute() {
        return execute(true);
    }

    public DeleteResult execute(boolean submit) {
        while (!preHandleIdInputMap.isEmpty() || !postHandleIdInputMap.isEmpty()) {
            while (!preHandleIdInputMap.isEmpty()) {
                preHandle();
            }
            postHandle();
        }
        MutationTrigger trigger = this.trigger;
        if (!submit || trigger == null) {
            return new DeleteResult(affectedRowCountMap);
        }
        trigger.submit(data.getSqlClient(), con);
        return new DeleteResult(affectedRowCountMap);
    }

    private void preHandle() {
        Map<ImmutableType, Set<Object>> idMultiMap = preHandleIdInputMap;
        preHandleIdInputMap = new LinkedHashMap<>();
        for (Map.Entry<ImmutableType, Set<Object>> e : idMultiMap.entrySet()) {
            preHandle(e.getKey(), e.getValue());
        }
    }

    private void preHandle(ImmutableType immutableType, Collection<Object> ids) {
        if (ids.isEmpty()) {
            return;
        }

        DissociationInfo dissociationInfo = data.getSqlClient().getEntityManager().getDissociationInfo(immutableType);
        if (dissociationInfo != null) {
            for (ImmutableProp prop : dissociationInfo.getProps()) {
                MiddleTableOperator middleTableOperator = MiddleTableOperator.tryGet(
                        data.getSqlClient(),
                        con,
                        prop,
                        trigger
                );
                if (!logical(immutableType) && middleTableOperator.isBackRefRealForeignKey()) {
                    int affectedRowCount;
                    try {
                        affectedRowCount = middleTableOperator.physicallyDeleteBySourceIds(ids);
                    } catch (MiddleTableOperator.DeletionPreventedException ex) {
                        throw new ExecutionException(
                                "Cannot delete rows from middle table \"" +
                                        ex.middleTable.getTableName() +
                                        "\" when the object of \"" +
                                        immutableType +
                                        "\" is being deleted, because the " +
                                        "`@JoinTable.preventDeletionBySource` of \"" +
                                        prop.getMappedBy() +
                                        "\" is true"
                        );
                    }
                    addOutput(AffectedTable.of(prop), affectedRowCount);
                }
            }
            for (ImmutableProp backProp : dissociationInfo.getBackProps()) {
                MiddleTableOperator middleTableOperator = MiddleTableOperator.tryGetByBackProp(
                        data.getSqlClient(),
                        con,
                        backProp,
                        trigger
                );
                if (middleTableOperator != null && !logical(immutableType) && middleTableOperator.isBackRefRealForeignKey()) {
                    int affectedRowCount;
                    try {
                        affectedRowCount = middleTableOperator.physicallyDeleteBySourceIds(ids);
                    } catch (MiddleTableOperator.DeletionPreventedException ex) {
                        throw new ExecutionException(
                                "Cannot delete rows from middle table \"" +
                                        ex.middleTable.getTableName() +
                                        "\" when the object of \"" +
                                        immutableType +
                                        "\" is being deleted, because the " +
                                        (
                                                backProp.getMappedBy() != null ?
                                                        "`@JoinTable.preventDeletionBySource` of \"" +
                                                                backProp.getMappedBy() +
                                                                "\" is true" :
                                                        "`@JoinTable.preventDeletionByTarget` of \"" +
                                                                backProp +
                                                                "\" is true"
                                        )
                        );
                    }
                    addOutput(AffectedTable.of(backProp), affectedRowCount);
                } else {
                    DissociateAction dissociateAction = data.getDissociateAction(backProp);
                    if (dissociateAction == DissociateAction.SET_NULL) {
                        ChildTableOperator childTableOperator = new ChildTableOperator(
                                data.getSqlClient(),
                                con,
                                backProp,
                                false,
                                cache,
                                trigger
                        );
                        int affectedRowCount = childTableOperator.unsetParents(ids);
                        addOutput(AffectedTable.of(backProp.getDeclaringType()), affectedRowCount);
                    } else if (dissociateAction != DissociateAction.LAX ||
                            (!logical(backProp.getTargetType()) &&
                            backProp.isTargetForeignKeyReal(data.getSqlClient().getMetadataStrategy()))
                    ) {
                        tryDeleteFromChildTable(backProp, ids);
                    }
                }
            }
        }
        addPostHandleInput(immutableType, ids);
    }

    @SuppressWarnings("unchecked")
    private void tryDeleteFromChildTable(ImmutableProp backProp, Collection<?> ids) {

        ImmutableType childType = backProp.getDeclaringType();

        FilterLevel filterLevel;
        if (data.getMode() != DeleteMode.PHYSICAL && logical(backProp.getDeclaringType())) {
            filterLevel = FilterLevel.DEFAULT;
        } else {
            filterLevel = FilterLevel.IGNORE_ALL;
        }
        List<Object> childIds;
        if (trigger != null || filterLevel != FilterLevel.IGNORE_ALL) {
            childIds = findChildIdsByDsl(backProp, ids, filterLevel);
        } else {
            MetadataStrategy strategy = data.getSqlClient().getMetadataStrategy();
            ColumnDefinition definition = backProp.getStorage(strategy);
            SqlBuilder builder = new SqlBuilder(new AstContext(data.getSqlClient()));
            Reader<Object> reader = (Reader<Object>) data.getSqlClient().getReader(childType.getIdProp());
            builder
                    .enter(SqlBuilder.ScopeType.SELECT)
                    .definition(childType.getIdProp().<ColumnDefinition>getStorage(strategy))
                    .leave()
                    .from()
                    .sql(childType.getTableName(strategy))
                    .enter(SqlBuilder.ScopeType.WHERE)
                    .definition(null, definition, true);
            if (ids.size() == 1) {
                builder.sql(" = ").variable(CollectionUtils.first(ids));
            } else {
                builder
                        .sql(" in ").enter(SqlBuilder.ScopeType.LIST);
                for (Object id : ids) {
                    builder.separator().variable(id);
                }
                builder.leave();
            }
            builder.leave();

            Tuple3<String, List<Object>, List<Integer>> sqlResult = builder.build();
            childIds = data
                    .getSqlClient()
                    .getExecutor()
                    .execute(
                            new Executor.Args<>(
                                    data.getSqlClient(),
                                    con,
                                    sqlResult.get_1(),
                                    sqlResult.get_2(),
                                    sqlResult.get_3(),
                                    ExecutionPurpose.DELETE,
                                    null,
                                    stmt -> {
                                        List<Object> values = new ArrayList<>();
                                        try (ResultSet rs = stmt.executeQuery()) {
                                            while (rs.next()) {
                                                values.add(reader.read(rs, new Reader.Context(null, true)));
                                            }
                                        }
                                        return values;
                                    }
                            )
                    );
        }

        if (!childIds.isEmpty()) {
            if (data.getDissociateAction(backProp) != DissociateAction.DELETE) {
                throw new ExecutionException(
                        "Cannot delete entities whose type are \"" +
                                backProp.getTargetType().getJavaClass().getName() +
                                "\" because there are some child entities whose type are \"" +
                                backProp.getDeclaringType().getJavaClass().getName() +
                                "\", these child entities use the association property \"" +
                                backProp +
                                "\" to reference current entities."
                );
            }
            Deleter childDeleter = childDeleterMap.computeIfAbsent(
                    backProp.toString(),
                    it -> new Deleter(data, con, cache, trigger, affectedRowCountMap)
            );
            childDeleter.addPreHandleInput(childType, childIds);
            childDeleter.preHandle();
        }
    }

    @SuppressWarnings("unchecked")
    private List<Object> findChildIdsByDsl(ImmutableProp backProp, Collection<?> ids, FilterLevel filterLevel) {
        ImmutableType childType = backProp.getDeclaringType();
        MutableRootQueryImpl<Table<?>> query = new MutableRootQueryImpl<>(data.getSqlClient(), childType, ExecutionPurpose.MUTATE, filterLevel);
        TableImplementor<?> table = query.getTableImplementor();
        query.where(table.getAssociatedId(backProp).in((Collection<Object>)ids));
        List<Object> childRows = (List<Object>) query.select(table).execute(con);
        List<Object> childIds = new ArrayList<>(childRows.size());
        PropId childIdProp = childType.getIdProp().getId();
        MutationCache cache = this.cache;
        for (Object childRow : childRows) {
            if (cache != null) {
                cache.save((ImmutableSpi) childRow, false);
            }
            childIds.add(((ImmutableSpi) childRow).__get(childIdProp));
        }
        return childIds;
    }

    private void postHandle() {
        childDeleterMap.values().forEach(Deleter::postHandle);
        Map<ImmutableType, Set<Object>> idMultiMap = postHandleIdInputMap;
        postHandleIdInputMap = new LinkedHashMap<>();
        for (Map.Entry<ImmutableType, Set<Object>> e : idMultiMap.entrySet()) {
            if (logical(e.getKey())) {
                logicallyDeleteImpl(e.getKey(), e.getValue());
            } else {
                deleteImpl(e.getKey(), e.getValue());
            }
        }
    }

    private void logicallyDeleteImpl(ImmutableType type, Collection<Object> ids) {

        if (ids.isEmpty()) {
            return;
        }

        LogicalDeletedInfo info = type.getLogicalDeletedInfo();
        assert info != null;
        ImmutableProp prop = info.getProp();
        Object deletedValue = info.getValue();
        ids = prepareLogicEvents(type, ids, prop.getId(), deletedValue);
        if (ids.isEmpty()) {
            return;
        }

        MetadataStrategy strategy = data.getSqlClient().getMetadataStrategy();
        ColumnDefinition definition = type.getIdProp().getStorage(strategy);
        SqlBuilder builder = new SqlBuilder(new AstContext(data.getSqlClient()));
        builder.sql("update ");
        builder.sql(type.getTableName(strategy));
        builder.sql(" set ");
        builder.sql(info.getProp().<SingleColumn>getStorage(strategy).getName());
        builder.sql(" = ");
        if (deletedValue != null) {
            builder.variable(deletedValue);
        } else {
            builder.nullVariable(prop.getElementClass());
        }
        builder
                .enter(SqlBuilder.ScopeType.WHERE)
                .definition(null, definition, true);
        if (ids.size() == 1) {
            builder.sql(" = ").variable(CollectionUtils.first(ids));
        } else {
            builder
                    .sql(" in ")
                    .enter(SqlBuilder.ScopeType.LIST);
            for (Object id : ids) {
                builder.separator().variable(id);
            }
            builder.leave();
        }
        builder.leave();

        Tuple3<String, List<Object>, List<Integer>> sqlResult = builder.build();
        int affectedRowCount = data
                .getSqlClient()
                .getExecutor()
                .execute(
                        new Executor.Args<>(
                                data.getSqlClient(),
                                con,
                                sqlResult.get_1(),
                                sqlResult.get_2(),
                                sqlResult.get_3(),
                                ExecutionPurpose.DELETE,
                                null,
                                PreparedStatement::executeUpdate
                        )
                );
        addOutput(AffectedTable.of(type), affectedRowCount);
    }

    private void deleteImpl(ImmutableType type, Collection<Object> ids) {

        if (ids.isEmpty()) {
            return;
        }
        ids = prepareEvents(type, ids);
        if (ids.isEmpty()) {
            return;
        }

        MetadataStrategy strategy = data.getSqlClient().getMetadataStrategy();
        ColumnDefinition definition = type.getIdProp().getStorage(strategy);
        SqlBuilder builder = new SqlBuilder(new AstContext(data.getSqlClient()));
        builder
                .sql("delete from ")
                .sql(type.getTableName(strategy))
                .enter(SqlBuilder.ScopeType.WHERE)
                .definition(null, definition, true);
        if (ids.size() == 1) {
            builder.sql(" = ").variable(CollectionUtils.first(ids));
        } else {
            builder
                    .sql(" in ")
                    .enter(SqlBuilder.ScopeType.LIST);
            for (Object id : ids) {
                builder.separator().variable(id);
            }
            builder.leave();
        }
        builder.leave();

        Tuple3<String, List<Object>, List<Integer>> sqlResult = builder.build();
        int affectedRowCount = data
                .getSqlClient()
                .getExecutor()
                .execute(
                        new Executor.Args<>(
                                data.getSqlClient(),
                                con,
                                sqlResult.get_1(),
                                sqlResult.get_2(),
                                sqlResult.get_3(),
                                ExecutionPurpose.DELETE,
                                null,
                                PreparedStatement::executeUpdate
                        )
                );
        addOutput(AffectedTable.of(type), affectedRowCount);
    }

    private Collection<Object> prepareLogicEvents(
            ImmutableType type,
            Collection<Object> ids,
            PropId propId,
            Object deletedValue
    ) {
        if (ids.isEmpty()) {
            return ids;
        }
        MutationTrigger trigger = this.trigger;
        if (trigger == null) {
            return ids;
        }
        PropId idPropId = type.getIdProp().getId();
        List<ImmutableSpi> rows = cache.withFilter(logical(type)).loadByIds(type, ids, con);
        Iterator<ImmutableSpi> itr = rows.iterator();
        List<Object> changedIds = new ArrayList<>();
        while (itr.hasNext()) {
            ImmutableSpi row = itr.next();
            if (Objects.equals(row.__get(propId), deletedValue)) {
                itr.remove();
            } else {
                trigger.modifyEntityTable(
                        row,
                        Internal.produce(type, row, draft -> {
                            ((DraftSpi)draft).__set(propId, deletedValue);
                        })
                );
                changedIds.add(row.__get(idPropId));
            }
        }
        return changedIds;
    }

    private Collection<Object> prepareEvents(ImmutableType type, Collection<Object> ids) {
        MutationTrigger trigger = this.trigger;
        if (trigger == null) {
            return ids;
        }
        List<ImmutableSpi> rows = cache.withFilter(false).loadByIds(type, ids, con);
        for (ImmutableSpi row : rows) {
            trigger.modifyEntityTable(row, null);
        }
        if (rows.size() == ids.size()) {
            return ids;
        }
        PropId idPropId = type.getIdProp().getId();
        List<Object> rowIds = new ArrayList<>(ids.size());
        for (ImmutableSpi row : rows) {
            rowIds.add(row.__get(idPropId));
        }
        return rowIds;
    }

    private boolean logical(ImmutableType type) {
        DeleteMode mode = data.getMode();
        if (mode == DeleteMode.PHYSICAL) {
            return false;
        }
        boolean hasLogicalInfo = type.getLogicalDeletedInfo() != null;
        if (hasLogicalInfo && mode == DeleteMode.LOGICAL) {
            throw new ExecutionException(
                    "The data of \"" +
                            type +
                            "\" cannot be logically deleted, because there is no property decorated by `@" +
                            LogicalDeleted.class.getName() +
                            "` in that type"
            );
        }
        return hasLogicalInfo;
    }
}
