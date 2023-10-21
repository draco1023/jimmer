package org.babyfish.jimmer.sql.model.calc;

import org.babyfish.jimmer.sql.JSqlClient;
import org.babyfish.jimmer.sql.JoinType;
import org.babyfish.jimmer.sql.TransientResolver;
import org.babyfish.jimmer.sql.ast.tuple.Tuple2;
import org.babyfish.jimmer.sql.event.AssociationEvent;
import org.babyfish.jimmer.sql.event.EntityEvent;
import org.babyfish.jimmer.sql.model.Book;
import org.babyfish.jimmer.sql.model.BookProps;
import org.babyfish.jimmer.sql.model.BookStoreProps;
import org.babyfish.jimmer.sql.model.BookStoreTable;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.math.BigDecimal;
import java.sql.Connection;
import java.util.*;

public class BookStoreAvgPriceResolver implements TransientResolver<UUID, BigDecimal> {

    protected static final BookStoreTable table = BookStoreTable.$;

    private final JSqlClient sqlClient;

    public BookStoreAvgPriceResolver(JSqlClient sqlClient) {
        this.sqlClient = sqlClient;
    }

    @Override
    public Map<UUID, BigDecimal> resolve(Collection<UUID> ids) {
        List<Tuple2<UUID, BigDecimal>> tuples =
                sqlClient.createQuery(table)
                        .where(table.id().in(ids))
                        .groupBy(table.id())
                        .select(
                                table.id(),
                                table.asTableEx().books(JoinType.LEFT).price().avg().coalesce(BigDecimal.ZERO)
                        )
                        .execute(TransientResolver.currentConnection());
        return Tuple2.toMap(tuples);
    }

    @Nullable
    @Override
    public Collection<?> getAffectedSourceIds(@NotNull AssociationEvent e) {
        if (e.getImmutableProp() == BookStoreProps.BOOKS.unwrap()) {
            return Collections.singleton(e.getSourceId());
        }
        return null;
    }

    @Nullable
    @Override
    public Collection<?> getAffectedSourceIds(@NotNull EntityEvent<?> e) {
        if (e.getImmutableType().getJavaClass() == Book.class && e.isChanged(BookProps.PRICE)) {
            return Collections.singleton(e.getUnchangedValue(BookProps.STORE_ID));
        }
        return null;
    }
}
