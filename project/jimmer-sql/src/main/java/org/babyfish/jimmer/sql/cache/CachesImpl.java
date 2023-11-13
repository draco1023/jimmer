package org.babyfish.jimmer.sql.cache;

import org.babyfish.jimmer.meta.ImmutableProp;
import org.babyfish.jimmer.meta.ImmutableType;
import org.babyfish.jimmer.meta.TargetLevel;
import org.babyfish.jimmer.runtime.ImmutableSpi;
import org.babyfish.jimmer.sql.JSqlClient;
import org.babyfish.jimmer.sql.event.DatabaseEvent;
import org.babyfish.jimmer.sql.filter.impl.FilterManager;
import org.babyfish.jimmer.sql.runtime.EntityManager;
import org.babyfish.jimmer.sql.event.Triggers;

import java.util.*;

public class CachesImpl implements Caches {

    private final Triggers triggers;

    private final Map<ImmutableType, LocatedCacheImpl<?, ?>> objectCacheMap;

    private final Map<ImmutableProp, LocatedCacheImpl<?, ?>> propCacheMap;

    private final CacheOperator operator;

    private final CacheAbandonedCallback abandonedCallback;

    private final boolean disableAll;

    private final Set<ImmutableType> disabledTypes;

    private final Set<ImmutableProp> disabledProps;

    public CachesImpl(
            Triggers triggers,
            Map<ImmutableType, Cache<?, ?>> objectCacheMap,
            Map<ImmutableProp, Cache<?, ?>> propCacheMap,
            CacheOperator operator,
            CacheAbandonedCallback abandonedCallback
    ) {
        Map<ImmutableType, LocatedCacheImpl<?, ?>> objectCacheWrapperMap = new LinkedHashMap<>();
        for (Map.Entry<ImmutableType, Cache<?, ?>> e : objectCacheMap.entrySet()) {
            ImmutableType type = e.getKey();
            objectCacheWrapperMap.put(type, wrapObjectCache(triggers, e.getValue(), type, operator));
        }
        Map<ImmutableProp, LocatedCacheImpl<?, ?>> propCacheWrapperMap = new LinkedHashMap<>();
        for (Map.Entry<ImmutableProp, Cache<?, ?>> e : propCacheMap.entrySet()) {
            ImmutableProp prop = e.getKey();
            propCacheWrapperMap.put(prop, wrapPropCache(triggers, e.getValue(), prop, operator));
        }
        this.triggers = triggers;
        this.objectCacheMap = objectCacheWrapperMap;
        this.propCacheMap = propCacheWrapperMap;
        this.operator = operator;
        this.abandonedCallback = abandonedCallback;
        this.disableAll = false;
        this.disabledTypes = Collections.emptySet();
        this.disabledProps = Collections.emptySet();
    }

    public CachesImpl(
            CachesImpl base,
            CacheDisableConfig cfg
    ) {
        triggers = base.triggers;
        objectCacheMap = base.objectCacheMap;
        propCacheMap = base.propCacheMap;
        operator = base.operator;
        abandonedCallback = base.abandonedCallback;
        disableAll = cfg.isDisableAll();
        disabledTypes = cfg.getDisabledTypes();
        disabledProps = cfg.getDisabledProps();
    }

    public Map<ImmutableType, LocatedCache<?, ?>> getObjectCacheMap() {
        return Collections.unmodifiableMap(objectCacheMap);
    }

    public Map<ImmutableProp, LocatedCache<?, ?>> getPropCacheMap() {
        return Collections.unmodifiableMap(propCacheMap);
    }

    @SuppressWarnings("unchecked")
    @Override
    public <K, V> LocatedCache<K, V> getObjectCache(ImmutableType type) {
        if (disableAll || disabledTypes.contains(type)) {
            return null;
        }
        return LocatedCacheImpl.export((LocatedCache<K, V>)objectCacheMap.get(type));
    }

    @SuppressWarnings("unchecked")
    @Override
    public <K, V> LocatedCache<K, V> getPropertyCache(ImmutableProp prop) {
        if (!prop.getDeclaringType().isEntity()) {
            throw new IllegalArgumentException("\"" + prop + "\" is not declared in entity");
        }
        if (disableAll ||
                disabledProps.contains(prop) ||
                disabledTypes.contains(prop.getTargetType())
        ) {
            return null;
        }
        return LocatedCacheImpl.export((LocatedCache<K, V>) propCacheMap.get(prop));
    }

    @Override
    public CacheAbandonedCallback getAbandonedCallback() {
        return abandonedCallback;
    }

    @Override
    public boolean isAffectedBy(DatabaseEvent e) {
        return (e.getConnection() != null) == triggers.isTransaction();
    }

    @SuppressWarnings("unchecked")
    private LocatedCacheImpl<?, ?> wrapObjectCache(
            Triggers triggers,
            Cache<?, ?> cache,
            ImmutableType type,
            CacheOperator operator
    ) {
        if (cache == null) {
            return null;
        }
        LocatedCacheImpl<Object, Object> wrapper = LocatedCacheImpl.wrap(
                (Cache<Object, Object>) cache,
                type,
                operator
        );
        triggers.addEntityListener(type, e -> {
            if (isAffectedBy(e)) {
                Object id = e.getId();
                wrapper.delete(id, e.getReason());
            }
        });
        return wrapper;
    }

    @SuppressWarnings("unchecked")
    private LocatedCacheImpl<?, ?> wrapPropCache(
            Triggers triggers,
            Cache<?, ?> cache,
            ImmutableProp prop,
            CacheOperator operator
    ) {
        if (!prop.getDeclaringType().isEntity()) {
            throw new IllegalArgumentException("\"" + prop + "\" is not declared in entity");
        }
        if (cache == null) {
            return null;
        }
        LocatedCacheImpl<Object, Object> wrapper = LocatedCacheImpl.wrap(
                (Cache<Object, Object>) cache,
                prop,
                operator
        );
        if (prop.isAssociation(TargetLevel.PERSISTENT)) {
            triggers.addAssociationListener(prop, e -> {
                if (isAffectedBy(e)) {
                    Object id = e.getSourceId();
                    wrapper.delete(id, e.getReason());
                }
            });
        }
        return wrapper;
    }

    public CacheOperator getOperator() {
        return operator;
    }

    public static Caches of(
            CacheConfig cacheConfig,
            String microServiceName,
            EntityManager entityManager,
            Triggers triggers,
            FilterManager filterManager
    ) {
        return cacheConfig.build(
                microServiceName,
                entityManager,
                triggers,
                filterManager
        );
    }

    public static boolean isEmpty(Caches caches) {
        CachesImpl impl = (CachesImpl) caches;
        return impl.objectCacheMap.isEmpty() && impl.propCacheMap.isEmpty();
    }

    public static void initialize(Caches caches, JSqlClient sqlClient) {
        CachesImpl impl = (CachesImpl) caches;
        CacheOperator operator = impl.operator;
        if (operator != null) {
            operator.initialize(sqlClient);
        }
    }
}
