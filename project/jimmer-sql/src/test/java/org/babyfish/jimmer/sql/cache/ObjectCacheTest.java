package org.babyfish.jimmer.sql.cache;

import org.babyfish.jimmer.meta.ImmutableProp;
import org.babyfish.jimmer.meta.ImmutableType;
import org.babyfish.jimmer.sql.JSqlClient;
import org.babyfish.jimmer.sql.common.AbstractQueryTest;
import org.babyfish.jimmer.sql.common.CacheImpl;
import org.babyfish.jimmer.sql.model.*;
import org.jetbrains.annotations.NotNull;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.babyfish.jimmer.sql.common.Constants.oreillyId;

public class ObjectCacheTest extends AbstractQueryTest {

    private JSqlClient sqlClient;

    @BeforeEach
    public void initialize() {
        sqlClient = getSqlClient(builder -> {
            builder.setCaches(cfg ->
                    cfg.setCacheFactory(
                            new CacheFactory() {

                                @Override
                                public Cache<?, ?> createObjectCache(ImmutableType type) {
                                    return new CacheImpl<>(type);
                                }

                                @Override
                                public Cache<?, ?> createAssociatedIdCache(ImmutableProp prop) {
                                    return new CacheImpl<>(prop);
                                }

                                @Override
                                public Cache<?, List<?>> createAssociatedIdListCache(ImmutableProp prop) {
                                    return new CacheImpl<>(prop);
                                }

                                @Override
                                public Cache<?, ?> createResolverCache(@NotNull ImmutableProp prop) {
                                    return new CacheImpl<>(prop);
                                }
                            }
                    )
            );
        });
    }

    @Test
    public void testObject() {
        for (int i = 0; i < 2; i++) {
            boolean useSql = i == 0;
            connectAndExpect(
                    con -> {
                        return sqlClient
                                .getEntities()
                                .forConnection(con)
                                .findById(BookStore.class, oreillyId);
                    }, ctx -> {
                        if (useSql) {
                            ctx.sql(
                                    "select tb_1_.ID, tb_1_.NAME, tb_1_.WEBSITE, tb_1_.VERSION " +
                                            "from BOOK_STORE tb_1_ " +
                                            "where tb_1_.ID = ?"
                            );
                            ctx.variables(oreillyId);
                        }
                        ctx.rows(
                                "[" +
                                        "--->{" +
                                        "--->--->\"id\":\"d38c10da-6be8-4924-b9b9-5e81899612a0\"," +
                                        "--->--->\"name\":\"O'REILLY\"," +
                                        "--->--->\"website\":null," +
                                        "--->--->\"version\":0" +
                                        "--->}" +
                                        "]"
                        );
                    }
            );
        }
    }

    @Test
    public void testCalculatedAssociation() {
        BookStoreTable table = BookStoreTable.$;
        for (int i = 0; i < 2; i++) {
            boolean useSql = i == 0;
            executeAndExpect(
                    sqlClient
                            .createQuery(table)
                            .select(
                                    table.fetch(
                                            BookStoreFetcher.$
                                                    .allScalarFields()
                                                    .newestBooks(
                                                            BookFetcher.$
                                                                    .allScalarFields()
                                                    )
                                    )
                            ),
                    ctx -> {
                        ctx.sql("select tb_1_.ID, tb_1_.NAME, tb_1_.WEBSITE, tb_1_.VERSION from BOOK_STORE tb_1_");
                        if (useSql) {
                            ctx.statement(1).sql("select tb_1_.ID, tb_2_.ID from BOOK_STORE tb_1_ inner join BOOK tb_2_ on tb_1_.ID = tb_2_.STORE_ID where (tb_2_.NAME, tb_2_.EDITION) in (select tb_3_.NAME, max(tb_3_.EDITION) from BOOK tb_3_ where tb_3_.STORE_ID in (?, ?) group by tb_3_.NAME)");
                            ctx.statement(2).sql("select tb_1_.ID, tb_1_.NAME, tb_1_.EDITION, tb_1_.PRICE, tb_1_.STORE_ID from BOOK tb_1_ where tb_1_.ID in (?, ?, ?, ?)");
                        }
                    }
            );
        }
    }
}
