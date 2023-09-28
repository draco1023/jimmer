package org.babyfish.jimmer.sql.ast.impl.mutation;

import org.babyfish.jimmer.meta.ImmutableProp;
import org.babyfish.jimmer.meta.ImmutableType;
import org.babyfish.jimmer.meta.TargetLevel;
import org.babyfish.jimmer.sql.DissociateAction;
import org.babyfish.jimmer.sql.ast.Predicate;
import org.babyfish.jimmer.sql.ast.impl.table.TableImplementor;
import org.babyfish.jimmer.sql.ast.mutation.DeleteMode;
import org.babyfish.jimmer.sql.ast.table.Table;
import org.babyfish.jimmer.sql.event.TriggerType;
import org.babyfish.jimmer.sql.event.Triggers;
import org.babyfish.jimmer.sql.ast.mutation.AbstractEntitySaveCommand;
import org.babyfish.jimmer.sql.ast.mutation.SaveMode;
import org.babyfish.jimmer.sql.runtime.JSqlClientImplementor;

import java.sql.Connection;
import java.util.*;
import java.util.function.BiFunction;
import java.util.function.Consumer;

abstract class AbstractEntitySaveCommandImpl implements AbstractEntitySaveCommand {

    final JSqlClientImplementor sqlClient;

    final Connection con;

    final Data data;

    AbstractEntitySaveCommandImpl(JSqlClientImplementor sqlClient, Connection con, Data data) {
        this.sqlClient = sqlClient;
        this.con = con;
        this.data = data != null ? data : new Data(sqlClient);
    }

    @Override
    public AbstractEntitySaveCommand configure(Consumer<Cfg> block) {
        Data newData = new Data(data);
        block.accept(newData);
        if (data.equals(newData)) {
            return this;
        }
        return create(newData);
    }

    abstract AbstractEntitySaveCommand create(Data data);

    static final class Data implements SaveCommandCfgImplementor {

        private final JSqlClientImplementor sqlClient;

        private final Triggers triggers;

        private boolean frozen;

        private SaveMode mode;

        private DeleteMode deleteMode;

        private Map<ImmutableType, Set<ImmutableProp>> keyPropMultiMap;

        private boolean autoCheckingAll;

        private Set<ImmutableProp> autoCheckingSet;

        private Set<ImmutableProp> autoUncheckingSet;

        private boolean appendOnlyAll;

        private Set<ImmutableProp> appendOnlySet;

        private Map<ImmutableProp, DissociateAction> dissociateActionMap;

        private boolean pessimisticLock;

        private Map<ImmutableType, BiFunction<Table<?>, Object, Predicate>> optimisticLockLambdaMap;

        Data(JSqlClientImplementor sqlClient) {
            this.sqlClient = sqlClient;
            this.triggers = sqlClient.getTriggerType() == TriggerType.BINLOG_ONLY ?
                    null :
                    sqlClient.getTriggers(true);
            this.frozen = false;
            this.mode = SaveMode.UPSERT;
            this.deleteMode = DeleteMode.AUTO;
            this.keyPropMultiMap = new LinkedHashMap<>();
            this.autoCheckingSet = new HashSet<>();
            this.autoUncheckingSet = new HashSet<>();
            this.appendOnlySet = new HashSet<>();
            this.dissociateActionMap = new LinkedHashMap<>();
            this.pessimisticLock = false;
            this.optimisticLockLambdaMap = new LinkedHashMap<>();
        }

        Data(Data base) {
            this.sqlClient = base.sqlClient;
            this.triggers = base.triggers;
            this.mode = base.mode;
            this.deleteMode = base.deleteMode;
            this.keyPropMultiMap = new LinkedHashMap<>(base.keyPropMultiMap);
            this.autoCheckingAll = base.autoCheckingAll;
            this.autoCheckingSet = new HashSet<>(base.autoCheckingSet);
            this.autoUncheckingSet = new HashSet<>(base.autoUncheckingSet);
            this.appendOnlyAll = base.appendOnlyAll;
            this.appendOnlySet = base.appendOnlySet;
            this.dissociateActionMap = new LinkedHashMap<>(base.dissociateActionMap);
            this.pessimisticLock = base.pessimisticLock;
            this.optimisticLockLambdaMap = base.optimisticLockLambdaMap;
            this.frozen = false;
        }

        public JSqlClientImplementor getSqlClient() {
            return sqlClient;
        }

        public Triggers getTriggers() {
            return triggers;
        }

        public SaveMode getMode() {
            return mode;
        }

        public DeleteMode getDeleteMode() { return deleteMode; }

        public Set<ImmutableProp> getKeyProps(ImmutableType type) {
            Set<ImmutableProp> keyProps = keyPropMultiMap.get(type);
            if (keyProps != null) {
                return keyProps;
            }
            return type.getKeyProps();
        }

        public boolean isAutoCheckingProp(ImmutableProp prop) {
            if (autoUncheckingSet.contains(prop)) {
                return false;
            }
            switch (sqlClient.getIdOnlyTargetCheckingLevel()) {
                case ALL:
                    return true;
                case FAKE:
                    if (!prop.isTargetForeignKeyReal(sqlClient.getMetadataStrategy())) {
                        return true;
                    }
                    break;
            }
            return autoCheckingAll || autoCheckingSet.contains(prop);
        }

        public boolean isAppendOnly(ImmutableProp prop) {
            return appendOnlyAll || appendOnlySet.contains(prop);
        }

        public DissociateAction getDissociateAction(ImmutableProp prop) {
            DissociateAction action = dissociateActionMap.get(prop);
            return action != null ? action : prop.getDissociateAction();
        }

        Map<ImmutableProp, DissociateAction> dissociateActionMap() {
            return dissociateActionMap;
        }

        boolean isPessimisticLockRequired() {
            return pessimisticLock;
        }

        BiFunction<Table<?>, Object, Predicate> optimisticLockLambda(ImmutableType type) {
            return optimisticLockLambdaMap.get(type);
        }

        @Override
        public Cfg setMode(SaveMode mode) {
            validate();
            this.mode = Objects.requireNonNull(mode, "mode cannot be null");
            return this;
        }

        @Override
        public Cfg setKeyProps(ImmutableProp ... props) {
            validate();
            ImmutableType type = null;
            Set<ImmutableProp> set = new LinkedHashSet<>();
            for (ImmutableProp prop : props) {
                if (prop != null) {
                    if (prop.isId()) {
                        throw new IllegalArgumentException(
                                "'" + prop + "' cannot be key property because it is id property"
                        );
                    } else if (prop.isVersion()) {
                        throw new IllegalArgumentException(
                                "'" + prop + "' cannot be key property because it is version property"
                        );
                    } else if (prop.isAssociation(TargetLevel.PERSISTENT) || !(prop.isColumnDefinition())) {
                        throw new IllegalArgumentException(
                                "'" + prop + "' cannot be key property because it is not a scalar property with storage"
                        );
                    } else if (prop.isNullable()) {
                        throw new IllegalArgumentException(
                                "'" + prop + "' cannot be key property because it is nullable"
                        );
                    }
                    if (type == null) {
                        type = prop.getDeclaringType();
                    } else if (type != prop.getDeclaringType()) {
                        throw new IllegalArgumentException("all key properties must belong to one type");
                    }
                    set.add(prop);
                }
            }
            if (type != null) {
                keyPropMultiMap.put(type, set);
            }
            return this;
        }

        /**
         * Will be deleted in 1.0
         */
        @Deprecated
        @Override
        public Cfg setAutoAttachingAll() {
            return this;
        }

        /**
         * Will be deleted in 1.0
         */
        @Deprecated
        @Override
        public Cfg setAutoAttaching(ImmutableProp prop) {
            return this;
        }

        @Override
        public Cfg setAutoIdOnlyTargetCheckingAll() {
            autoCheckingAll = true;
            return this;
        }

        @Override
        public Cfg setAutoIdOnlyTargetChecking(ImmutableProp prop, boolean checking) {
            if (checking) {
                autoCheckingSet.add(prop);
                autoUncheckingSet.remove(prop);
            } else {
                autoCheckingSet.remove(prop);
                autoUncheckingSet.add(prop);
            }
            return this;
        }

        @Override
        public Cfg setAppendOnly(ImmutableProp prop) {
            appendOnlySet.add(prop);
            return this;
        }

        @Override
        public Cfg setAppendOnlyAll() {
            appendOnlyAll = true;
            return this;
        }

        @Override
        public Cfg setDissociateAction(ImmutableProp prop, DissociateAction dissociateAction) {
            validate();

            if (!prop.isReference(TargetLevel.PERSISTENT) || !(prop.isColumnDefinition())) {
                throw new IllegalArgumentException("'" + prop + "' must be an reference property bases on foreign key");
            }
            if (dissociateAction == DissociateAction.SET_NULL && !prop.isNullable()) {
                throw new IllegalArgumentException(
                        "'" + prop + "' is not nullable so that it does not support 'on delete set null'"
                );
            }
            if (dissociateAction == DissociateAction.SET_NULL && prop.isInputNotNull()) {
                throw new IllegalArgumentException(
                        "'" + prop + "' is `inputNotNull` so that it does not support 'on delete set null'"
                );
            }
            dissociateActionMap.put(prop, dissociateAction);
            return this;
        }

        @Override
        public Cfg setPessimisticLock(boolean pessimisticLock) {
            this.pessimisticLock = pessimisticLock;
            return this;
        }

        @SuppressWarnings("unchecked")
        @Override
        public <E, T extends Table<E>> Cfg setOptimisticLock(Class<T> tableType, BiFunction<T, E, Predicate> block) {
            setEntityOptimisticLock(ImmutableType.get(tableType), (BiFunction<Table<?>, Object, Predicate>) block);
            return this;
        }

        @Override
        public void setEntityOptimisticLock(ImmutableType type, BiFunction<Table<?>, Object, Predicate> block) {
            if (this.optimisticLockLambdaMap.put(type, block) != null) {
                throw new IllegalStateException(
                        "The optimistic lock of \"" +
                                type +
                                "\" has already been set"
                );
            }
        }

        @Override
        public Cfg setDeleteMode(DeleteMode mode) {
            this.deleteMode = Objects.requireNonNull(mode, "mode cannot be null");
            return this;
        }

        public Data freeze() {
            if (!frozen) {
                keyPropMultiMap = Collections.unmodifiableMap(keyPropMultiMap);
                autoCheckingSet = Collections.unmodifiableSet(autoCheckingSet);
                appendOnlySet = Collections.unmodifiableSet(appendOnlySet);
                dissociateActionMap = Collections.unmodifiableMap(dissociateActionMap);
                frozen = true;
            }
            return this;
        }

        @Override
        public boolean equals(Object o) {
            if (this == o) return true;
            if (!(o instanceof Data)) return false;
            Data data = (Data) o;
            return autoCheckingAll == data.autoCheckingAll &&
                    appendOnlyAll == data.appendOnlyAll &&
                    pessimisticLock == data.pessimisticLock &&
                    sqlClient.equals(data.sqlClient) &&
                    Objects.equals(triggers, data.triggers) &&
                    mode == data.mode &&
                    deleteMode == data.deleteMode &&
                    keyPropMultiMap.equals(data.keyPropMultiMap) &&
                    autoCheckingSet.equals(data.autoCheckingSet) &&
                    appendOnlySet.equals(data.appendOnlySet) &&
                    dissociateActionMap.equals(data.dissociateActionMap);
        }

        @Override
        public int hashCode() {
            return Objects.hash(
                    sqlClient,
                    triggers,
                    mode,
                    deleteMode,
                    keyPropMultiMap,
                    autoCheckingAll,
                    autoCheckingSet,
                    appendOnlyAll,
                    appendOnlySet,
                    dissociateActionMap,
                    pessimisticLock
            );
        }

        @Override
        public String toString() {
            return "Data{" +
                    "sqlClient=" + sqlClient +
                    ", triggers=" + triggers +
                    ", mode=" + mode +
                    ", deleteMode=" + deleteMode +
                    ", keyPropMultiMap=" + keyPropMultiMap +
                    ", autoCheckingAll=" + autoCheckingAll +
                    ", autoCheckingSet=" + autoCheckingSet +
                    ", dissociateActionMap=" + dissociateActionMap +
                    ", pessimisticLock=" + pessimisticLock +
                    '}';
        }

        private void validate() {
            if (frozen) {
                throw new IllegalStateException("The current configuration is frozen");
            }
        }
    }
}