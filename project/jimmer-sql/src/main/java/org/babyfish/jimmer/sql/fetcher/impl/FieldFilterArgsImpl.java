package org.babyfish.jimmer.sql.fetcher.impl;

import org.babyfish.jimmer.lang.OldChain;
import org.babyfish.jimmer.sql.ast.Expression;
import org.babyfish.jimmer.sql.ast.Predicate;
import org.babyfish.jimmer.sql.ast.impl.query.AbstractMutableQueryImpl;
import org.babyfish.jimmer.sql.ast.query.*;
import org.babyfish.jimmer.sql.ast.table.AssociationTable;
import org.babyfish.jimmer.sql.ast.table.Table;
import org.babyfish.jimmer.sql.ast.table.TableEx;
import org.babyfish.jimmer.sql.ast.table.spi.TableProxy;
import org.babyfish.jimmer.sql.fetcher.FieldFilterArgs;

import java.util.Collection;
import java.util.Collections;
import java.util.Objects;
import java.util.function.Supplier;

public class FieldFilterArgsImpl<T extends Table<?>> implements FieldFilterArgs<T> {

    private final AbstractMutableQueryImpl query;

    private final T table;

    private final Collection<Object> keys;

    public static <T extends Table<?>> FieldFilterArgs<T> of(
            AbstractMutableQueryImpl query,
            T table,
            Collection<Object> keys
    ) {
        return new FieldFilterArgsImpl<>(
                query,
                table,
                Objects.requireNonNull(keys, "keys cannot be null")
        );
    }

    private FieldFilterArgsImpl(
            AbstractMutableQueryImpl query,
            T table,
            Collection<Object> keys
    ) {
        this.query = query;
        this.table = table;
        this.keys = keys != null ? Collections.unmodifiableCollection(keys) : null;
    }

    @Override
    public T getTable() {
        return table;
    }

    @SuppressWarnings("unchecked")
    @Override
    public <K> K getKey() {
        if (keys.size() > 1) {
            throw new IllegalStateException(
                    "Too much keys"
            );
        }
        return (K) keys.iterator().next();
    }

    @SuppressWarnings("unchecked")
    @Override
    public <K> Collection<K> getKeys() {
        return (Collection<K>)keys;
    }

    @Override
    @OldChain
    public Sortable where(Predicate... predicates) {
        return query.where(predicates);
    }

    @Override
    @OldChain
    public Sortable whereIf(boolean condition, Predicate predicates) {
        return query.whereIf(condition, predicates);
    }

    @Override
    @OldChain
    public Sortable whereIf(boolean condition, Supplier<Predicate> block) {
        return query.whereIf(condition, block);
    }

    @Override
    @OldChain
    public Sortable orderBy(Expression<?> ... expressions) {
        return query.orderBy(expressions);
    }

    @Override
    @OldChain
    public Sortable orderBy(Order ... orders) {
        return query.orderBy(orders);
    }

    @Override
    public MutableSubQuery createSubQuery(TableProxy<?> table) {
        return query.createSubQuery(table);
    }

    @Override
    public <SE, ST extends TableEx<SE>, TE, TT extends TableEx<TE>>
    MutableSubQuery createAssociationSubQuery(
            AssociationTable<SE, ST, TE, TT> table
    ) {
        return query.createAssociationSubQuery(table);
    }

    public AbstractMutableQueryImpl unwrap() {
        return query;
    }
}
