package org.babyfish.jimmer.sql.ast.query;

import org.babyfish.jimmer.lang.NewChain;
import org.babyfish.jimmer.sql.ast.Expression;
import org.babyfish.jimmer.sql.ast.table.Table;
import org.jetbrains.annotations.Nullable;

import java.sql.Connection;
import java.util.function.BiFunction;

public interface ConfigurableRootQuery<T extends Table<?>, R> extends TypedRootQuery<R> {

    default long count() {
        return count(null);
    }

    default long count(Connection con) {
        return reselect((q, t) -> q.select(Expression.rowCount()))
            .withoutSortingAndPaging()
            .execute(con)
            .get(0);
    }

    default boolean exists() {
        return exists(null);
    }

    default boolean exists(Connection con) {
        return !limit(1, 0L).execute(con).isEmpty();
    }

    @NewChain
    <X> ConfigurableRootQuery<T, X> reselect(
            BiFunction<MutableRootQuery<T>, T, ConfigurableRootQuery<T, X>> block
    );

    @NewChain
    ConfigurableRootQuery<T, R> distinct();

    @NewChain
    ConfigurableRootQuery<T, R> limit(int limit);

    @NewChain
    ConfigurableRootQuery<T, R> offset(long offset);

    @NewChain
    ConfigurableRootQuery<T, R> limit(int limit, long offset);

    @NewChain
    ConfigurableRootQuery<T, R> withoutSortingAndPaging();

    /**
     * @return If the original query does not have `order by` clause, returns null
     */
    @NewChain
    @Nullable
    ConfigurableRootQuery<T, R> reverseSorting();

    @NewChain
    default ConfigurableRootQuery<T, R> forUpdate() {
        return forUpdate(true);
    }

    @NewChain
    ConfigurableRootQuery<T, R> forUpdate(boolean forUpdate);
}
