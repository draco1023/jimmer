package org.babyfish.jimmer.sql.mutation;

import org.babyfish.jimmer.sql.DissociateAction;
import org.babyfish.jimmer.sql.DraftInterceptor;
import org.babyfish.jimmer.sql.ast.mutation.AffectedTable;
import org.babyfish.jimmer.sql.ast.mutation.SaveMode;
import org.babyfish.jimmer.sql.common.AbstractMutationTest;
import static org.babyfish.jimmer.sql.common.Constants.*;

import org.babyfish.jimmer.sql.model.*;
import org.babyfish.jimmer.sql.model.inheritance.Administrator;
import org.babyfish.jimmer.sql.model.inheritance.AdministratorMetadataDraft;
import org.babyfish.jimmer.sql.model.inheritance.NamedEntityDraft;
import org.babyfish.jimmer.sql.runtime.DbNull;
import org.babyfish.jimmer.sql.runtime.SaveErrorCode;
import org.babyfish.jimmer.sql.runtime.SaveException;
import org.jetbrains.annotations.NotNull;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.UUID;

public class SaveTest extends AbstractMutationTest {

    @Test
    public void testUpsertNotMatched() {
        UUID newId = UUID.fromString("56506a3c-801b-4f7d-a41d-e889cdc3d67d");
        executeAndExpectResult(
                getSqlClient().getEntities().saveCommand(
                        BookStoreDraft.$.produce(store-> {
                            store.setId(newId);
                            store.setName("TURING");
                            store.setWebsite(null);
                        })
                ),
                ctx -> {
                    ctx.statement(it -> {
                        it.sql(
                                "select tb_1_.ID, tb_1_.NAME " +
                                        "from BOOK_STORE tb_1_ where tb_1_.ID = ?"
                        );
                        it.variables(newId);
                    });
                    ctx.statement(it -> {
                        it.sql("insert into BOOK_STORE(ID, NAME, WEBSITE, VERSION) values(?, ?, ?, ?)");
                        it.variables(newId, "TURING", new DbNull(String.class), 0);
                    });
                    ctx.entity(it -> {
                        it.original("{\"id\":\"56506a3c-801b-4f7d-a41d-e889cdc3d67d\",\"name\":\"TURING\",\"website\":null}");
                        it.modified("{\"id\":\"56506a3c-801b-4f7d-a41d-e889cdc3d67d\",\"name\":\"TURING\",\"website\":null,\"version\":0}");
                    });
                    ctx.totalRowCount(1);
                    ctx.rowCount(AffectedTable.of(BookStore.class), 1);
                }
        );
    }

    @Test
    public void testUpsertMatched() {
        executeAndExpectResult(
                getSqlClient().getEntities().saveCommand(
                        BookStoreDraft.$.produce(store -> {
                            store.setId(oreillyId);
                            store.setName("TURING");
                            store.setWebsite(null);
                            store.setVersion(0);
                        })
                ),
                ctx -> {
                    ctx.statement(it -> {
                        it.sql(
                                "select tb_1_.ID, tb_1_.NAME " +
                                        "from BOOK_STORE tb_1_ where tb_1_.ID = ?"
                        );
                        it.variables(oreillyId);
                    });
                    ctx.statement(it -> {
                        it.sql("update BOOK_STORE " +
                                "set NAME = ?, WEBSITE = ?, VERSION = VERSION + 1 " +
                                "where ID = ? and VERSION = ?"
                        );
                        it.variables("TURING", new DbNull(String.class), oreillyId, 0);
                    });
                    ctx.entity(it -> {
                        it.original("{\"id\":\"d38c10da-6be8-4924-b9b9-5e81899612a0\",\"name\":\"TURING\",\"website\":null,\"version\":0}");
                        it.modified("{\"id\":\"d38c10da-6be8-4924-b9b9-5e81899612a0\",\"name\":\"TURING\",\"website\":null,\"version\":1}");
                    });
                    ctx.totalRowCount(1);
                    ctx.rowCount(AffectedTable.of(BookStore.class), 1);
                }
        );
    }

    @Test
    public void testInsert() {
        UUID newId = UUID.fromString("56506a3c-801b-4f7d-a41d-e889cdc3d67d");
        executeAndExpectResult(
                getSqlClient().getEntities().saveCommand(
                        BookStoreDraft.$.produce(store -> {
                            store.setId(newId);
                            store.setName("TURING");
                        })
                ).configure(cfg -> cfg.setMode(SaveMode.INSERT_ONLY)),
                ctx -> {
                    ctx.statement(it -> {
                        it.sql("insert into BOOK_STORE(ID, NAME, VERSION) values(?, ?, ?)");
                        it.variables(newId, "TURING", 0);
                    });
                    ctx.entity(it -> {
                        it.original("{\"id\":\"56506a3c-801b-4f7d-a41d-e889cdc3d67d\",\"name\":\"TURING\"}");
                        it.modified("{\"id\":\"56506a3c-801b-4f7d-a41d-e889cdc3d67d\",\"name\":\"TURING\",\"version\":0}");
                    });
                    ctx.totalRowCount(1);
                    ctx.rowCount(AffectedTable.of(BookStore.class), 1);
                }
        );
    }

    @Test
    public void testUpdate() {
        executeAndExpectResult(
                getSqlClient().getEntities().saveCommand(
                        BookStoreDraft.$.produce(store -> {
                            store.setId(oreillyId);
                            store.setName("TURING");
                            store.setVersion(0);
                        })
                ).configure(cfg -> cfg.setMode(SaveMode.UPDATE_ONLY)),
                ctx -> {
                    ctx.statement(it -> {
                        it.sql("update BOOK_STORE set NAME = ?, VERSION = VERSION + 1 where ID = ? and VERSION = ?");
                        it.variables("TURING", oreillyId, 0);
                    });
                    ctx.entity(it -> {
                        it.original("{\"id\":\"d38c10da-6be8-4924-b9b9-5e81899612a0\",\"name\":\"TURING\",\"version\":0}");
                        it.modified("{\"id\":\"d38c10da-6be8-4924-b9b9-5e81899612a0\",\"name\":\"TURING\",\"version\":1}");
                    });
                    ctx.totalRowCount(1);
                    ctx.rowCount(AffectedTable.of(BookStore.class), 1);
                }
        );
    }

    @Test
    public void testUpdateOnlyByKey() {
        executeAndExpectResult(
                getSqlClient().getEntities().saveCommand(
                        BookStoreDraft.$.produce(store -> {
                            store.setName("XXX");
                        })
                ).configure(cfg -> cfg.setMode(SaveMode.UPDATE_ONLY)),
                ctx -> {
                    ctx.statement(it -> {
                        it.sql(
                                "select tb_1_.ID, tb_1_.NAME " +
                                        "from BOOK_STORE tb_1_ " +
                                        "where tb_1_.NAME = ?"
                        );
                    });
                    ctx.totalRowCount(0);
                    ctx.entity(it -> {
                        String json = "{\"name\":\"XXX\"}";
                        it.original(json);
                        it.modified(json);
                    });
                }
        );
    }

    @Test
    public void testInsertByKeyProps() {
        UUID newId = UUID.fromString("56506a3c-801b-4f7d-a41d-e889cdc3d67d");
        setAutoIds(BookStore.class, newId);
        executeAndExpectResult(
                getSqlClient().getEntities().saveCommand(
                        BookStoreDraft.$.produce(store -> {
                            store.setName("TURING");
                        })
                ),
                ctx -> {
                    ctx.statement(it -> {
                        it.sql(
                                "select tb_1_.ID, tb_1_.NAME " +
                                        "from BOOK_STORE tb_1_ " +
                                        "where tb_1_.NAME = ?"
                        );
                        it.variables("TURING");
                    });
                    ctx.statement(it -> {
                        it.sql("insert into BOOK_STORE(ID, NAME, VERSION) values(?, ?, ?)");
                        it.variables(newId, "TURING", 0);
                    });
                    ctx.entity(it -> {
                        it.original("{\"name\":\"TURING\"}");
                        it.modified("{\"id\":\"56506a3c-801b-4f7d-a41d-e889cdc3d67d\",\"name\":\"TURING\",\"version\":0}");
                    });
                    ctx.totalRowCount(1);
                    ctx.rowCount(AffectedTable.of(BookStore.class), 1);
                }
        );
    }

    @Test
    public void testUpdateByKeyProps() {
        executeAndExpectResult(
                getSqlClient().getEntities().saveCommand(
                        BookStoreDraft.$.produce(store -> {
                            store.setName("O'REILLY");
                            store.setWebsite("http://www.oreilly.com");
                            store.setVersion(0);
                        })
                ),
                ctx -> {
                    ctx.statement(it -> {
                        it.sql(
                                "select tb_1_.ID, tb_1_.NAME " +
                                        "from BOOK_STORE tb_1_ " +
                                        "where tb_1_.NAME = ?"
                        );
                        it.variables("O'REILLY");
                    });
                    ctx.statement(it -> {
                        it.sql("update BOOK_STORE set WEBSITE = ?, VERSION = VERSION + 1 where ID = ? and VERSION = ?");
                        it.variables("http://www.oreilly.com", oreillyId, 0);
                    });
                    ctx.entity(it -> {
                        it.original("{\"name\":\"O'REILLY\",\"website\":\"http://www.oreilly.com\",\"version\":0}");
                        it.modified("{" +
                                "\"id\":\"d38c10da-6be8-4924-b9b9-5e81899612a0\"," +
                                "\"name\":\"O'REILLY\"," +
                                "\"website\":\"http://www.oreilly.com\"," +
                                "\"version\":1" +
                                "}");
                    });
                    ctx.totalRowCount(1);
                    ctx.rowCount(AffectedTable.of(BookStore.class), 1);
                }
        );
    }

    @Test
    public void testUpsertNotMatchedWithManyToOne() {
        UUID newId = UUID.fromString("56506a3c-801b-4f7d-a41d-e889cdc3d67d");
        setAutoIds(Book.class, newId);
        executeAndExpectResult(
                getSqlClient().getEntities().saveCommand(
                        BookDraft.$.produce(book -> {
                            book.setName("Kotlin in Action");
                            book.setEdition(1);
                            book.setPrice(new BigDecimal(30));
                            book.store(true).setId(manningId);
                        })
                ),
                ctx -> {
                    ctx.statement(it -> {
                        it.sql(
                                "select tb_1_.ID, tb_1_.NAME, tb_1_.EDITION " +
                                        "from BOOK tb_1_ " +
                                        "where tb_1_.NAME = ? and tb_1_.EDITION = ?"
                        );
                        it.variables("Kotlin in Action", 1);
                    });
                    ctx.statement(it -> {
                        it.sql("insert into BOOK(ID, NAME, EDITION, PRICE, STORE_ID) values(?, ?, ?, ?, ?)");
                        it.variables(newId, "Kotlin in Action", 1, new BigDecimal(30), manningId);
                    });
                    ctx.entity(it -> {
                        it.original("{" +
                                "\"name\":\"Kotlin in Action\"," +
                                "\"edition\":1," +
                                "\"price\":30," +
                                "\"store\":{\"id\":\"2fa3955e-3e83-49b9-902e-0465c109c779\"}" +
                                "}");
                        it.modified("{" +
                                "\"id\":\"56506a3c-801b-4f7d-a41d-e889cdc3d67d\"," +
                                "\"name\":\"Kotlin in Action\"," +
                                "\"edition\":1," +
                                "\"price\":30," +
                                "\"store\":{\"id\":\"2fa3955e-3e83-49b9-902e-0465c109c779\"}" +
                                "}");
                    });
                    ctx.totalRowCount(1);
                    ctx.rowCount(AffectedTable.of(Book.class), 1);
                }
        );
    }

    @Test
    public void testUpsertMatchedWithManyToOne() {
        executeAndExpectResult(
                getSqlClient().getEntities().saveCommand(
                        BookDraft.$.produce(book -> {
                            book.setName("Learning GraphQL");
                            book.setEdition(3);
                            book.store(true).setId(manningId);
                        })
                ),
                ctx -> {
                    ctx.statement(it -> {
                        it.sql(
                                "select tb_1_.ID, tb_1_.NAME, tb_1_.EDITION " +
                                        "from BOOK tb_1_ " +
                                        "where tb_1_.NAME = ? and tb_1_.EDITION = ?"
                        );
                        it.variables("Learning GraphQL", 3);
                    });
                    ctx.statement(it -> {
                        it.sql("update BOOK set STORE_ID = ? where ID = ?");
                        it.variables(manningId, learningGraphQLId3);
                    });
                    ctx.entity(it -> {
                        it.original(
                                "{" +
                                        "\"name\":\"Learning GraphQL\"," +
                                        "\"edition\":3," +
                                        "\"store\":{\"id\":\"2fa3955e-3e83-49b9-902e-0465c109c779\"}" +
                                        "}"
                        );
                        it.modified(
                                "{" +
                                        "\"id\":\"64873631-5d82-4bae-8eb8-72dd955bfc56\"," +
                                        "\"name\":\"Learning GraphQL\"," +
                                        "\"edition\":3," +
                                        "\"store\":{\"id\":\"2fa3955e-3e83-49b9-902e-0465c109c779\"}" +
                                        "}");
                    });
                    ctx.totalRowCount(1);
                    ctx.rowCount(AffectedTable.of(Book.class), 1);
                }
        );
    }

    @Test
    public void testUpsertNotMatchedWithOneToMany() {

        UUID newId = UUID.fromString("56506a3c-801b-4f7d-a41d-e889cdc3d67d");
        setAutoIds(BookStore.class, newId);

        executeAndExpectResult(
                getSqlClient().getEntities().saveCommand(
                        BookStoreDraft.$.produce(store -> {
                            store.setName("TURING");
                            store.addIntoBooks(book -> book.setId(learningGraphQLId1));
                            store.addIntoBooks(book -> book.setId(learningGraphQLId2));
                        })
                ),
                ctx -> {
                    ctx.statement(it -> {
                        it.sql(
                                "select tb_1_.ID, tb_1_.NAME " +
                                        "from BOOK_STORE tb_1_ " +
                                        "where tb_1_.NAME = ?"
                        );
                        it.variables("TURING");
                    });
                    ctx.statement(it -> {
                        it.sql("insert into BOOK_STORE(ID, NAME, VERSION) values(?, ?, ?)");
                        it.variables(newId, "TURING", 0);
                    });
                    ctx.statement(it -> {
                        it.sql("update BOOK set STORE_ID = ? where ID in (?, ?)");
                        it.variables(newId, learningGraphQLId1, learningGraphQLId2);
                    });
                    ctx.entity(it -> {
                        it.original("{" +
                                "\"name\":\"TURING\"," +
                                "\"books\":[" +
                                    "{\"id\":\"e110c564-23cc-4811-9e81-d587a13db634\"}," +
                                    "{\"id\":\"b649b11b-1161-4ad2-b261-af0112fdd7c8\"}" +
                                "]" +
                                "}");
                        it.modified("{" +
                                "\"id\":\"56506a3c-801b-4f7d-a41d-e889cdc3d67d\"," +
                                "\"name\":\"TURING\"," +
                                "\"version\":0," +
                                "\"books\":[" +
                                "{\"id\":\"e110c564-23cc-4811-9e81-d587a13db634\"}," +
                                "{\"id\":\"b649b11b-1161-4ad2-b261-af0112fdd7c8\"}" +
                                "]" +
                                "}");
                    });
                    ctx.totalRowCount(3);
                    ctx.rowCount(AffectedTable.of(BookStore.class), 1);
                    ctx.rowCount(AffectedTable.of(Book.class), 2);
                }
        );
    }

    @Test
    public void testUpsertMatchedWithOneToManyByDeaultForienKey() {
        executeAndExpectResult(
                getSqlClient().getEntities().saveCommand(
                        BookStoreDraft.$.produce(store -> {
                            store.setName("MANNING");
                            store.setVersion(0);
                            store.addIntoBooks(book -> book.setId(graphQLInActionId1));
                            store.addIntoBooks(book -> book.setId(graphQLInActionId2));
                            store.addIntoBooks(book -> book.setId(graphQLInActionId3));
                        })
                ).configure(it ->
                        it.setDissociateAction(
                                BookProps.STORE,
                                DissociateAction.NONE
                        )
                ),
                ctx -> {
                    ctx.statement(it -> {
                        it.sql(
                                "select tb_1_.ID, tb_1_.NAME " +
                                        "from BOOK_STORE tb_1_ " +
                                        "where tb_1_.NAME = ?"
                        );
                    });
                    ctx.statement(it -> {
                        it.sql("update BOOK_STORE set VERSION = VERSION + 1 where ID = ? and VERSION = ?");
                        it.variables(manningId, 0);
                    });
                    ctx.statement(it -> {
                        it.sql("update BOOK set STORE_ID = ? where ID in (?, ?, ?)");
                        it.variables(manningId, graphQLInActionId1, graphQLInActionId2, graphQLInActionId3);
                    });
                    ctx.statement(it -> {
                        it.sql("select 1 from BOOK where STORE_ID = ? and ID not in(?, ?, ?) limit ?");
                        it.variables(manningId, graphQLInActionId1, graphQLInActionId2, graphQLInActionId3, 1);
                    });
                    ctx.entity(it -> {
                        it.original(
                                "{" +
                                        "--->\"name\":\"MANNING\"," +
                                        "--->\"version\":0," +
                                        "--->\"books\":[" +
                                        "--->--->{\"id\":\"a62f7aa3-9490-4612-98b5-98aae0e77120\"}," +
                                        "--->--->{\"id\":\"e37a8344-73bb-4b23-ba76-82eac11f03e6\"}," +
                                        "--->--->{\"id\":\"780bdf07-05af-48bf-9be9-f8c65236fecc\"}" +
                                        "--->]" +
                                        "}"
                        );
                        it.modified(
                                "{" +
                                        "--->\"id\":\"2fa3955e-3e83-49b9-902e-0465c109c779\"," +
                                        "--->\"name\":\"MANNING\"," +
                                        "--->\"version\":1," +
                                        "--->\"books\":[" +
                                        "--->--->{\"id\":\"a62f7aa3-9490-4612-98b5-98aae0e77120\"}," +
                                        "--->--->{\"id\":\"e37a8344-73bb-4b23-ba76-82eac11f03e6\"}," +
                                        "--->--->{\"id\":\"780bdf07-05af-48bf-9be9-f8c65236fecc\"}" +
                                        "--->]" +
                                        "}"
                        );
                    });
                }
        );
    }

    @Test
    public void testUpsertMatchedWithOneToManyBySetNullForeignKey() {
        executeAndExpectResult(
                getSqlClient().getEntities().saveCommand(
                        BookStoreDraft.$.produce(store -> {
                            store.setName("O'REILLY");
                            store.setVersion(0);
                            store.addIntoBooks(book -> book.setId(learningGraphQLId1));
                            store.addIntoBooks(book -> book.setId(learningGraphQLId2));
                            store.addIntoBooks(book -> book.setId(learningGraphQLId3));
                        })
                ).configure(it ->
                        it.setDissociateAction(
                                BookProps.STORE,
                                DissociateAction.SET_NULL
                        )
                ),
                ctx -> {
                    ctx.statement(it -> {
                        it.sql(
                                "select tb_1_.ID, tb_1_.NAME " +
                                        "from BOOK_STORE tb_1_ " +
                                        "where tb_1_.NAME = ?"
                        );
                        it.variables("O'REILLY");
                    });
                    ctx.statement(it -> {
                        it.sql("update BOOK_STORE set VERSION = VERSION + 1 where ID = ? and VERSION = ?");
                        it.variables(oreillyId, 0);
                    });
                    ctx.statement(it -> {
                        it.sql("update BOOK set STORE_ID = ? where ID in (?, ?, ?)");
                        it.variables(oreillyId, learningGraphQLId1, learningGraphQLId2, learningGraphQLId3);
                    });
                    ctx.statement(it -> {
                        it.sql("update BOOK set STORE_ID = null where STORE_ID = ? and ID not in (?, ?, ?)");
                        it.variables(oreillyId, learningGraphQLId1, learningGraphQLId2, learningGraphQLId3);
                    });
                    ctx.entity(it -> {
                        it.original("{" +
                                "\"name\":\"O'REILLY\"," +
                                "\"version\":0," +
                                "\"books\":[" +
                                "{\"id\":\"e110c564-23cc-4811-9e81-d587a13db634\"}," +
                                "{\"id\":\"b649b11b-1161-4ad2-b261-af0112fdd7c8\"}," +
                                "{\"id\":\"64873631-5d82-4bae-8eb8-72dd955bfc56\"}" +
                                "]" +
                                "}");
                        it.modified("{" +
                                "\"id\":\"d38c10da-6be8-4924-b9b9-5e81899612a0\"," +
                                "\"name\":\"O'REILLY\"," +
                                "\"version\":1," +
                                "\"books\":[" +
                                "{\"id\":\"e110c564-23cc-4811-9e81-d587a13db634\"}," +
                                "{\"id\":\"b649b11b-1161-4ad2-b261-af0112fdd7c8\"}," +
                                "{\"id\":\"64873631-5d82-4bae-8eb8-72dd955bfc56\"}" +
                                "]" +
                                "}");
                    });
                    ctx.totalRowCount(10);
                    ctx.rowCount(AffectedTable.of(BookStore.class), 1);
                    ctx.rowCount(AffectedTable.of(Book.class), 9);
                }
        );
    }

    @Test
    public void testUpsertNotMatchedWithManyToMany() {
        UUID newId = UUID.fromString("56506a3c-801b-4f7d-a41d-e889cdc3d67d");
        setAutoIds(Book.class, newId);
        executeAndExpectResult(
                getSqlClient().getEntities().saveCommand(
                        BookDraft.$.produce(book -> {
                            book.setName("Kotlin in Action");
                            book.setEdition(1);
                            book.setPrice(new BigDecimal(30));
                            book.addIntoAuthors(author -> author.setId(danId));
                            book.addIntoAuthors(author -> author.setId(borisId));
                        })
                ),
                ctx -> {
                    ctx.statement(it -> {
                        it.sql("select tb_1_.ID, tb_1_.NAME, tb_1_.EDITION " +
                                "from BOOK tb_1_ " +
                                "where tb_1_.NAME = ? " +
                                "and tb_1_.EDITION = ?");
                        it.variables("Kotlin in Action", 1);
                    });
                    ctx.statement(it -> {
                        it.sql("insert into BOOK(ID, NAME, EDITION, PRICE) values(?, ?, ?, ?)");
                        it.variables(newId, "Kotlin in Action", 1, new BigDecimal(30));
                    });
                    ctx.statement(it -> {
                        it.sql("insert into BOOK_AUTHOR_MAPPING(BOOK_ID, AUTHOR_ID) values(?, ?), (?, ?)");
                        it.variables(newId, danId, newId, borisId);
                    });
                    ctx.entity(it -> {
                        it.original("{" +
                                "\"name\":\"Kotlin in Action\"," +
                                "\"edition\":1," +
                                "\"price\":30," +
                                "\"authors\":[" +
                                "{\"id\":\"c14665c8-c689-4ac7-b8cc-6f065b8d835d\"}," +
                                "{\"id\":\"718795ad-77c1-4fcf-994a-fec6a5a11f0f\"}" +
                                "]" +
                                "}");
                        it.modified("{" +
                                "\"id\":\"56506a3c-801b-4f7d-a41d-e889cdc3d67d\"," +
                                "\"name\":\"Kotlin in Action\"," +
                                "\"edition\":1," +
                                "\"price\":30," +
                                "\"authors\":[" +
                                "{\"id\":\"c14665c8-c689-4ac7-b8cc-6f065b8d835d\"}," +
                                "{\"id\":\"718795ad-77c1-4fcf-994a-fec6a5a11f0f\"}" +
                                "]" +
                                "}");
                    });
                    ctx.totalRowCount(3);
                    ctx.rowCount(AffectedTable.of(Book.class), 1);
                    ctx.rowCount(AffectedTable.of(BookProps.AUTHORS), 2);
                }
        );
    }

    @Test
    public void testUpsertMatchedWithManyToMany() {
        executeAndExpectResult(
                getSqlClient().getEntities().saveCommand(
                        BookDraft.$.produce(book -> {
                            book.setName("Learning GraphQL");
                            book.setEdition(3);
                            book.addIntoAuthors(author -> author.setId(danId));
                            book.addIntoAuthors(author -> author.setId(borisId));
                        })
                ),
                ctx -> {
                    ctx.statement(it -> {
                        it.sql("select tb_1_.ID, tb_1_.NAME, tb_1_.EDITION " +
                                "from BOOK tb_1_ " +
                                "where tb_1_.NAME = ? " +
                                "and tb_1_.EDITION = ?");
                        it.variables("Learning GraphQL", 3);
                    });
                    ctx.statement(it -> {
                        it.sql("select AUTHOR_ID from BOOK_AUTHOR_MAPPING where BOOK_ID = ?");
                        it.variables(learningGraphQLId3);
                    });
                    ctx.statement(it -> {
                        it.sql("delete from BOOK_AUTHOR_MAPPING where (BOOK_ID, AUTHOR_ID) in ((?, ?), (?, ?))");
                        it.variables(learningGraphQLId3, alexId, learningGraphQLId3, eveId);
                    });
                    ctx.statement(it -> {
                        it.sql("insert into BOOK_AUTHOR_MAPPING(BOOK_ID, AUTHOR_ID) values(?, ?), (?, ?)");
                        it.variables(learningGraphQLId3, danId, learningGraphQLId3, borisId);
                    });
                    ctx.entity(it -> {
                        it.original("{" +
                                "\"name\":\"Learning GraphQL\"," +
                                "\"edition\":3," +
                                "\"authors\":[" +
                                "{\"id\":\"c14665c8-c689-4ac7-b8cc-6f065b8d835d\"}," +
                                "{\"id\":\"718795ad-77c1-4fcf-994a-fec6a5a11f0f\"}" +
                                "]" +
                                "}");
                        it.modified("{" +
                                "\"id\":\"64873631-5d82-4bae-8eb8-72dd955bfc56\"," +
                                "\"name\":\"Learning GraphQL\"," +
                                "\"edition\":3," +
                                "\"authors\":[" +
                                "{\"id\":\"c14665c8-c689-4ac7-b8cc-6f065b8d835d\"}," +
                                "{\"id\":\"718795ad-77c1-4fcf-994a-fec6a5a11f0f\"}" +
                                "]" +
                                "}");
                    });
                    ctx.totalRowCount(4);
                    ctx.rowCount(AffectedTable.of(BookProps.AUTHORS), 4);
                }
        );
    }

    @Test
    public void testUpsertNotMatchedWithInverseManyToMany() {

        UUID newId = UUID.fromString("56506a3c-801b-4f7d-a41d-e889cdc3d67d");
        setAutoIds(Author.class, newId);

        executeAndExpectResult(
                getSqlClient().getEntities().saveCommand(
                        AuthorDraft.$.produce(author -> {
                            author.setFirstName("Jim");
                            author.setLastName("Green");
                            author.setGender(Gender.MALE);
                            author.addIntoBooks(book -> book.setId(effectiveTypeScriptId3));
                            author.addIntoBooks(book -> book.setId(programmingTypeScriptId3));
                        })
                ),
                ctx -> {
                    ctx.statement(it -> {
                        it.sql(
                                "select tb_1_.ID, tb_1_.FIRST_NAME, tb_1_.LAST_NAME " +
                                        "from AUTHOR tb_1_ " +
                                        "where tb_1_.FIRST_NAME = ? and " +
                                        "tb_1_.LAST_NAME = ?"
                        );
                        it.variables("Jim", "Green");
                    });
                    ctx.statement(it -> {
                        it.sql("insert into AUTHOR(ID, FIRST_NAME, LAST_NAME, GENDER) values(?, ?, ?, ?)");
                        it.variables(newId, "Jim", "Green", "M");
                    });
                    ctx.statement(it -> {
                        it.sql("insert into BOOK_AUTHOR_MAPPING(AUTHOR_ID, BOOK_ID) values(?, ?), (?, ?)");
                        it.variables(newId, effectiveTypeScriptId3, newId, programmingTypeScriptId3);
                    });
                    ctx.entity(it -> {
                        it.original("{" +
                                "\"firstName\":\"Jim\"," +
                                "\"lastName\":\"Green\"," +
                                "\"gender\":\"MALE\"," +
                                "\"books\":[" +
                                "{\"id\":\"9eded40f-6d2e-41de-b4e7-33a28b11c8b6\"}," +
                                "{\"id\":\"782b9a9d-eac8-41c4-9f2d-74a5d047f45a\"}" +
                                "]" +
                                "}");
                        it.modified("{" +
                                "\"id\":\"56506a3c-801b-4f7d-a41d-e889cdc3d67d\"," +
                                "\"firstName\":\"Jim\"," +
                                "\"lastName\":\"Green\"," +
                                "\"gender\":\"MALE\"," +
                                "\"books\":[" +
                                "{\"id\":\"9eded40f-6d2e-41de-b4e7-33a28b11c8b6\"}," +
                                "{\"id\":\"782b9a9d-eac8-41c4-9f2d-74a5d047f45a\"}" +
                                "]" +
                                "}");
                    });
                    ctx.totalRowCount(3);
                    ctx.rowCount(AffectedTable.of(Author.class), 1);
                    ctx.rowCount(AffectedTable.of(AuthorProps.BOOKS), 2);
                }
        );
    }

    @Test
    public void testUpsertMatchedWithInverseManyToMany() {

        executeAndExpectResult(
                getSqlClient().getEntities().saveCommand(
                        AuthorDraft.$.produce(author -> {
                            author.setFirstName("Eve");
                            author.setLastName("Procello");
                            author.addIntoBooks(book -> book.setId(effectiveTypeScriptId3));
                            author.addIntoBooks(book -> book.setId(programmingTypeScriptId3));
                        })
                ),
                ctx -> {
                    ctx.statement(it -> {
                        it.sql(
                                "select tb_1_.ID, tb_1_.FIRST_NAME, tb_1_.LAST_NAME " +
                                        "from AUTHOR tb_1_ " +
                                        "where tb_1_.FIRST_NAME = ? and " +
                                        "tb_1_.LAST_NAME = ?"
                        );
                        it.variables("Eve", "Procello");
                    });
                    ctx.statement(it -> {
                        it.sql("select BOOK_ID from BOOK_AUTHOR_MAPPING where AUTHOR_ID = ?");
                        it.variables(eveId);
                    });
                    ctx.statement(it -> {
                        it.sql("delete from BOOK_AUTHOR_MAPPING where (AUTHOR_ID, BOOK_ID) in ((?, ?), (?, ?), (?, ?))");
                        it.variables(eveId, learningGraphQLId1, eveId, learningGraphQLId2, eveId, learningGraphQLId3);
                    });
                    ctx.statement(it -> {
                        it.sql("insert into BOOK_AUTHOR_MAPPING(AUTHOR_ID, BOOK_ID) values(?, ?), (?, ?)");
                        it.variables(eveId, effectiveTypeScriptId3, eveId, programmingTypeScriptId3);
                    });
                    ctx.entity(it -> {
                        it.original("{" +
                                "\"firstName\":\"Eve\"," +
                                "\"lastName\":\"Procello\"," +
                                "\"books\":[" +
                                "{\"id\":\"9eded40f-6d2e-41de-b4e7-33a28b11c8b6\"}," +
                                "{\"id\":\"782b9a9d-eac8-41c4-9f2d-74a5d047f45a\"}" +
                                "]" +
                                "}");
                        it.modified("{" +
                                "\"id\":\"fd6bb6cf-336d-416c-8005-1ae11a6694b5\"," +
                                "\"firstName\":\"Eve\"," +
                                "\"lastName\":\"Procello\"," +
                                "\"books\":[{\"id\":\"9eded40f-6d2e-41de-b4e7-33a28b11c8b6\"}," +
                                "{\"id\":\"782b9a9d-eac8-41c4-9f2d-74a5d047f45a\"}" +
                                "]" +
                                "}");
                    });
                    ctx.totalRowCount(5);
                    ctx.rowCount(AffectedTable.of(AuthorProps.BOOKS), 5);
                }
        );
    }

    @Test
    public void testSpecialOptimisticLock() {
        executeAndExpectResult(
                getSqlClient().getEntities().saveCommand(
                        BookStoreDraft.$.produce(store -> {
                            store.setName("MANNING").setVersion(1);
                        })
                ),
                ctx -> {
                    ctx.statement(it -> {
                        it.sql(
                                "select tb_1_.ID, tb_1_.NAME " +
                                        "from BOOK_STORE tb_1_ " +
                                        "where tb_1_.NAME = ?"
                        );
                    });
                    ctx.statement(it -> {
                        it.sql(
                                "update BOOK_STORE " +
                                        "set VERSION = VERSION + 1 " +
                                        "where ID = ? and VERSION = ?"
                        );
                    });
                    ctx.throwable(it -> {
                        it.message(
                                "Save error caused by the path: \"<root>\": " +
                                        "Cannot update the entity whose type is " +
                                        "\"org.babyfish.jimmer.sql.model.BookStore\" and " +
                                        "id is \"2fa3955e-3e83-49b9-902e-0465c109c779\" " +
                                        "when using optimistic lock"
                        );
                        it.type(SaveException.class);
                        it.detail(ex -> {
                            Assertions.assertEquals(
                                    SaveErrorCode.OPTIMISTIC_LOCK_ERROR,
                                    ((SaveException)ex).getSaveErrorCode()
                            );
                        });
                    });
                }
        );
    }

    @Test
    public void testGeneralOptimisticLock() {
        executeAndExpectResult(
                getSqlClient()
                        .getEntities()
                        .saveCommand(
                                BookDraft.$.produce(book -> {
                                    book.setId(graphQLInActionId3);
                                    book.setPrice(BigDecimal.ONE);
                                })
                        )
                        .setMode(SaveMode.UPDATE_ONLY)
                        .setOptimisticLock(BookTable.class, (table, it) -> {
                            return table.price().le(it.price());
                        }),
                ctx -> {
                    ctx.statement(it -> {
                        it.sql("update BOOK tb_1_ set PRICE = ? where tb_1_.ID = ? and tb_1_.PRICE <= ?");
                        it.variables(BigDecimal.ONE, graphQLInActionId3, BigDecimal.ONE);
                    });
                    ctx.throwable(it -> {
                        it.type(SaveException.class);
                        it.message(
                                "Save error caused by the path: \"<root>\": Cannot update the entity " +
                                        "whose type is \"org.babyfish.jimmer.sql.model.Book\" " +
                                        "and id is \"780bdf07-05af-48bf-9be9-f8c65236fecc\" " +
                                        "when using optimistic lock"
                        );
                        it.detail(ex -> {
                            Assertions.assertEquals(
                                    SaveErrorCode.OPTIMISTIC_LOCK_ERROR,
                                    ((SaveException)ex).getSaveErrorCode()
                            );
                        });
                    });
                }
        );
    }

    @Test
    public void testBatchSaveAndGetId() {
        setAutoIds(TreeNode.class, 100L, 101L, 102L);
        executeAndExpectResult(
                getSqlClient()
                        .getEntities()
                        .batchSaveCommand(
                                Arrays.asList(
                                        TreeNodeDraft.$.produce(node -> {
                                            node.setName("batch-node-1").setParent((TreeNode) null);
                                        }),
                                        TreeNodeDraft.$.produce(node -> {
                                            node.setName("batch-node-2").setParent((TreeNode) null);
                                        }),
                                        TreeNodeDraft.$.produce(node -> {
                                            node.setName("batch-node-3").setParent((TreeNode) null);
                                        })
                                )
                        ),
                ctx -> {
                    ctx.statement(it -> {
                        it.sql(
                                "select tb_1_.NODE_ID, tb_1_.NAME, tb_1_.PARENT_ID " +
                                        "from TREE_NODE tb_1_ " +
                                        "where tb_1_.NAME = ? and tb_1_.PARENT_ID is null");
                        it.variables("batch-node-1");
                    });
                    ctx.statement(it -> {
                        it.sql("insert into TREE_NODE(NODE_ID, NAME, PARENT_ID) values(?, ?, ?)");
                        it.variables(100L, "batch-node-1", new DbNull(long.class));
                    });
                    ctx.statement(it -> {
                        it.sql(
                                "select tb_1_.NODE_ID, tb_1_.NAME, tb_1_.PARENT_ID " +
                                        "from TREE_NODE tb_1_ " +
                                        "where tb_1_.NAME = ? and tb_1_.PARENT_ID is null");
                        it.variables("batch-node-2");
                    });
                    ctx.statement(it -> {
                        it.sql("insert into TREE_NODE(NODE_ID, NAME, PARENT_ID) values(?, ?, ?)");
                        it.variables(101L, "batch-node-2", new DbNull(long.class));
                    });
                    ctx.statement(it -> {
                        it.sql(
                                "select tb_1_.NODE_ID, tb_1_.NAME, tb_1_.PARENT_ID " +
                                        "from TREE_NODE tb_1_ " +
                                        "where tb_1_.NAME = ? and tb_1_.PARENT_ID is null");
                        it.variables("batch-node-3");
                    });
                    ctx.statement(it -> {
                        it.sql("insert into TREE_NODE(NODE_ID, NAME, PARENT_ID) values(?, ?, ?)");
                        it.variables(102L, "batch-node-3", new DbNull(long.class));
                    });
                    ctx.entity(it -> {
                        it.original("{\"name\":\"batch-node-1\",\"parent\":null}");
                        it.modified(
                                "{\"id\":100,\"name\":\"batch-node-1\",\"parent\":null}"
                        );
                    });
                    ctx.entity(it -> {
                        it.modified(
                                "{\"id\":101,\"name\":\"batch-node-2\",\"parent\":null}"
                        );
                    });
                    ctx.entity(it -> {
                        it.modified(
                                "{\"id\":102,\"name\":\"batch-node-3\",\"parent\":null}"
                        );
                    });
                }
        );
    }

    @Test
    public void testSaveNullParent() {
        SaveException ex = Assertions.assertThrows(SaveException.class, () -> {
                jdbc(con -> {
                    getSqlClient()
                            .getEntities()
                            .saveCommand(
                                    AdministratorMetadataDraft.$.produce(metadata -> {
                                        metadata.setName("am_4");
                                        metadata.setAdministrator((Administrator) null);
                                    })
                            )
                            .execute(con);
                });
        });
        Assertions.assertEquals(
                "Save error caused by the path: \"<root>\": " +
                        "The association \"org.babyfish.jimmer.sql.model.inheritance.AdministratorMetadata.administrator\" " +
                        "cannot be null, because that association is decorated by \"@org.babyfish.jimmer.sql.OneToOne\" " +
                        "whose `inputNotNull` is true",
                ex.getMessage()
        );
    }

    @Test
    public void testIgnoreAssociatedInterceptor() {
        executeAndExpectResult(
                getSqlClient(cfg -> {
                    cfg.addDraftInterceptor(
                            new DraftInterceptor<NamedEntityDraft>() {
                                @Override
                                public void beforeSave(@NotNull NamedEntityDraft draft, boolean isNew) {
                                    draft.setDeleted(false);
                                }
                            }
                    );
                }).getEntities().saveCommand(
                        AdministratorMetadataDraft.$.produce(metadata -> {
                            metadata.setId(10L);
                            metadata.applyAdministrator(administrator -> {
                                administrator.setId(-1L);
                            });
                        })
                ).setMode(SaveMode.UPDATE_ONLY),
                ctx -> {
                    ctx.statement(it -> {
                        it.sql(
                                "update ADMINISTRATOR_METADATA set DELETED = ?, " +
                                        "ADMINISTRATOR_ID = ? " +
                                        "where ID = ?"
                        );
                    });
                    ctx.entity(it -> {
                        it.original("{\"administrator\":{\"id\":-1},\"id\":10}");
                        it.modified("{\"deleted\":false,\"administrator\":{\"id\":-1},\"id\":10}");
                    });
                }
        );
    }
}
