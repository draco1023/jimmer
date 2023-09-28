package org.babyfish.jimmer.sql.ast.mutation;

import org.babyfish.jimmer.lang.NewChain;
import org.babyfish.jimmer.meta.ImmutableProp;
import org.babyfish.jimmer.meta.TypedProp;
import org.babyfish.jimmer.sql.DissociateAction;
import org.babyfish.jimmer.sql.ast.Executable;
import org.babyfish.jimmer.sql.ast.Predicate;
import org.babyfish.jimmer.sql.ast.table.Table;

import java.util.function.BiFunction;
import java.util.function.Consumer;

public interface SimpleEntitySaveCommand<E>
        extends Executable<SimpleSaveResult<E>>,
        AbstractEntitySaveCommand {

    @Override
    @NewChain
    SimpleEntitySaveCommand<E> configure(Consumer<Cfg> block);

    @NewChain
    default SimpleEntitySaveCommand<E> setMode(SaveMode mode) {
        return configure(cfg -> cfg.setMode(mode));
    }

    @NewChain
    default SimpleEntitySaveCommand<E> setKeyProps(ImmutableProp... props) {
        return configure(cfg -> cfg.setKeyProps(props));
    }

    @NewChain
    default SimpleEntitySaveCommand<E> setKeyProps(TypedProp<?, ?>... props) {
        return configure(cfg -> cfg.setKeyProps(props));
    }

    @Deprecated
    @NewChain
    default SimpleEntitySaveCommand<E> setAutoAttachingAll() {
        return configure(Cfg::setAutoAttachingAll);
    }

    @Deprecated
    @NewChain
    default SimpleEntitySaveCommand<E> setAutoAttaching(TypedProp.Association<?, ?> prop) {
        return configure(cfg -> cfg.setAutoAttaching(prop));
    }

    @Deprecated
    @NewChain
    default SimpleEntitySaveCommand<E> setAutoAttaching(ImmutableProp prop) {
        return configure(cfg -> cfg.setAutoAttaching(prop));
    }

    @NewChain
    default SimpleEntitySaveCommand<E> setAutoIdOnlyTargetCheckingAll() {
        return configure(Cfg::setAutoIdOnlyTargetCheckingAll);
    }

    @NewChain
    default SimpleEntitySaveCommand<E> setAutoIdOnlyTargetChecking(TypedProp.Association<?, ?> prop) {
        return configure(cfg -> cfg.setAutoIdOnlyTargetChecking(prop));
    }

    @NewChain
    default SimpleEntitySaveCommand<E> setAutoIdOnlyTargetChecking(TypedProp.Association<?, ?> prop, boolean checking) {
        return configure(cfg -> cfg.setAutoIdOnlyTargetChecking(prop, checking));
    }

    @NewChain
    default SimpleEntitySaveCommand<E> setAutoIdOnlyTargetChecking(ImmutableProp prop) {
        return configure(cfg -> cfg.setAutoIdOnlyTargetChecking(prop));
    }

    @NewChain
    default SimpleEntitySaveCommand<E> setAutoIdOnlyTargetChecking(ImmutableProp prop, boolean checking) {
        return configure(cfg -> cfg.setAutoIdOnlyTargetChecking(prop, checking));
    }

    @NewChain
    default SimpleEntitySaveCommand<E> setAppendOnlyAll() {
        return configure(Cfg::setAppendOnlyAll);
    }

    @NewChain
    default SimpleEntitySaveCommand<E> setAppendOnly(TypedProp.Association<?, ?> prop) {
        return configure(cfg -> cfg.setAppendOnly(prop));
    }

    @NewChain
    default SimpleEntitySaveCommand<E> setAppendOnly(ImmutableProp prop) {
        return configure(cfg -> cfg.setAppendOnly(prop));
    }

    @NewChain
    default SimpleEntitySaveCommand<E> setDissociateAction(
            TypedProp.Reference<?, ?> prop,
            DissociateAction dissociateAction
    ) {
        return configure(cfg -> cfg.setDissociateAction(prop, dissociateAction));
    }

    @NewChain
    default SimpleEntitySaveCommand<E> setDissociateAction(
            ImmutableProp prop,
            DissociateAction dissociateAction
    ) {
        return configure(cfg -> cfg.setDissociateAction(prop, dissociateAction));
    }

    @NewChain
    default SimpleEntitySaveCommand<E> setPessimisticLock() {
        return configure(Cfg::setPessimisticLock);
    }

    @NewChain
    default SimpleEntitySaveCommand<E> setPessimisticLock(boolean pessimisticLock) {
        return configure(cfg -> cfg.setPessimisticLock(pessimisticLock));
    }

    @NewChain
    default <T extends Table<E>> SimpleEntitySaveCommand<E> setOptimisticLock(
            Class<T> tableType,
            BiFunction<T, E, Predicate> block
    ) {
        return configure(cfg -> cfg.setOptimisticLock(tableType, block));
    }

    @NewChain
    default SimpleEntitySaveCommand<E> setDeleteMode(DeleteMode mode) {
        return configure(cfg -> cfg.setDeleteMode(mode));
    }
}
