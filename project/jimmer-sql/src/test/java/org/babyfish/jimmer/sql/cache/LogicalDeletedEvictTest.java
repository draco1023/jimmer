package org.babyfish.jimmer.sql.cache;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.babyfish.jimmer.meta.ImmutableProp;
import org.babyfish.jimmer.meta.ImmutableType;
import org.babyfish.jimmer.sql.JSqlClient;
import org.babyfish.jimmer.sql.common.AbstractQueryTest;
import org.babyfish.jimmer.sql.common.CacheImpl;
import org.babyfish.jimmer.sql.common.ParameterizedCaches;
import org.babyfish.jimmer.sql.event.EntityEvent;
import org.babyfish.jimmer.sql.filter.CacheableFilter;
import org.babyfish.jimmer.sql.filter.FilterArgs;
import org.babyfish.jimmer.sql.model.inheritance.*;
import org.babyfish.jimmer.sql.runtime.ConnectionManager;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.sql.Connection;
import java.util.*;
import java.util.function.Function;

public class LogicalDeletedEvictTest extends AbstractQueryTest {

    private static final ObjectMapper MAPPER = new ObjectMapper();

    private JSqlClient sqlClient;

    private List<String> deleteMessages;

    @BeforeEach
    public void initialize() {
        deleteMessages = new ArrayList<>();
        LogicalDeletedEvictTest that = this;
        sqlClient = getSqlClient(it -> {
            it.setCaches(cfg -> {
                cfg.setCacheFactory(
                        new CacheFactory() {
                            @Override
                            public @Nullable Cache<?, ?> createObjectCache(@NotNull ImmutableType type) {
                                return new CacheImpl<>(type);
                            }

                            @Override
                            public @Nullable Cache<?, ?> createAssociatedIdCache(@NotNull ImmutableProp prop) {
                                return new CacheImpl<>(prop, that::onPropCacheDelete);
                            }

                            @Override
                            public @Nullable Cache<?, List<?>> createAssociatedIdListCache(@NotNull ImmutableProp prop) {
                                return new CacheImpl<>(prop, that::onPropCacheDelete);
                            }

                            @Override
                            public @Nullable Cache<?, ?> createResolverCache(@NotNull ImmutableProp prop) {
                                return new CacheImpl<>(prop, that::onPropCacheDelete);
                            }
                        }
                );
            });
            it.setConnectionManager(
                    new ConnectionManager() {
                        @SuppressWarnings("unchecked")
                        @Override
                        public <R> R execute(Function<Connection, R> block) {
                            R[] resultBox = (R[])new Object[1];
                            jdbc(con -> {
                                resultBox[0] = block.apply(con);
                            });
                            return resultBox[0];
                        }
                    }
            );
        });
    }

    private void onPropCacheDelete(Collection<String> keys) {
        deleteMessages.addAll(keys);
    }

    @Test
    public void testAdministratorBinLog() {
        connectAndExpect(
                con -> {
                    try {
                        sqlClient.getBinLog().accept(
                                "administrator",
                                MAPPER.readTree("{\"id\":1, \"deleted\":false}"),
                                MAPPER.readTree("{\"id\":1, \"deleted\":true}")
                        );
                    } catch (JsonProcessingException ex) {
                        Assertions.fail(ex);
                    }
                    return null;
                },
                ctx -> {
                    ctx.sql(
                            "select distinct tb_1_.ID " +
                                    "from ADMINISTRATOR_METADATA tb_1_ " +
                                    "where tb_1_.ADMINISTRATOR_ID = ? and tb_1_.DELETED <> ?"
                    ).variables(1L, true);
                    ctx.statement(1).sql(
                            "select distinct tb_1_.ID " +
                                    "from ROLE tb_1_ " +
                                    "inner join ADMINISTRATOR_ROLE_MAPPING tb_2_ on tb_1_.ID = tb_2_.ROLE_ID " +
                                    "where tb_2_.ADMINISTRATOR_ID = ? and tb_1_.DELETED <> ?"
                    ).variables(1L, true);
                }
        );
        Assertions.assertEquals(
                "[" +
                        "AdministratorMetadata.administrator-10, " +
                        "Role.administrators-100" +
                        "]",
                deleteMessages.toString()
        );
    }

    @Test
    public void testRoleBinLog() {
        connectAndExpect(
                con -> {
                    try {
                        sqlClient.getBinLog().accept(
                                "role",
                                MAPPER.readTree("{\"id\":100, \"deleted\":false}"),
                                MAPPER.readTree("{\"id\":100, \"deleted\":true}")
                        );
                    } catch (JsonProcessingException ex) {
                        Assertions.fail(ex);
                    }
                    return null;
                },
                ctx -> {
                    ctx.sql(
                            "select distinct tb_1_.ID " +
                                    "from ADMINISTRATOR tb_1_ " +
                                    "inner join ADMINISTRATOR_ROLE_MAPPING tb_2_ on tb_1_.ID = tb_2_.ADMINISTRATOR_ID " +
                                    "where tb_2_.ROLE_ID = ? and tb_1_.DELETED <> ?"
                    ).variables(100L, true);
                    ctx.statement(1).sql(
                            "select distinct tb_1_.ID " +
                                    "from PERMISSION tb_1_ " +
                                    "where tb_1_.ROLE_ID = ? and tb_1_.DELETED <> ?"
                    ).variables(100L, true);
                }
        );
        Assertions.assertEquals(
                "[" +
                        "Administrator.roles-1, " +
                        "Administrator.roles-3, " +
                        "Permission.role-1000" +
                        "]",
                deleteMessages.toString()
        );
    }

    @Test
    public void testPermissionBinLog() {
        connectAndExpect(
                con -> {
                    try {
                        sqlClient.getBinLog().accept(
                                "permission",
                                MAPPER.readTree("{\"id\":1000, \"deleted\":false, \"role_id\": 100}"),
                                MAPPER.readTree("{\"id\":1000, \"deleted\":true}")
                        );
                    } catch (JsonProcessingException ex) {
                        Assertions.fail(ex);
                    }
                    return null;
                },
                ctx -> {}
        );
        Assertions.assertEquals(
                Arrays.asList(
                        "Permission.role-1000",
                        "Role.permissions-100",
                        "Role.permissionCount-100"
                ),
                deleteMessages
        );
    }

    /*
     * When Foreign key is changed, use classic trigger,
     * not new trigger for parameterized cache only.
     */
    @Test
    public void testPermissionBinLogWithChangedForeignKey() {
        connectAndExpect(
                con -> {
                    try {
                        sqlClient.getBinLog().accept(
                                "permission",
                                MAPPER.readTree("{\"id\":1000, \"deleted\":false, \"role_id\": 100}"),
                                MAPPER.readTree("{\"id\":1000, \"deleted\":true, \"role_id\": 200}")
                        );
                    } catch (JsonProcessingException ex) {
                        Assertions.fail(ex);
                    }
                    return null;
                },
                ctx -> {}
        );
        Assertions.assertEquals(
                Arrays.asList(
                        "Permission.role-1000",
                        "Role.permissions-100",
                        "Role.permissionCount-100"
                ),
                deleteMessages
        );
    }

    /**
     * Classic user-cases not about parameterized cache,
     * but about middle table association is mapped super class
     */
    @Test
    public void testMiddleTableInsertBinLog() {
        connectAndExpect(
                con -> {
                    try {
                        sqlClient.getBinLog().accept(
                                "administrator_role_mapping",
                                null,
                                MAPPER.readTree("{\"administrator_id\":1, \"role_id\": 400}")
                        );
                    } catch (JsonProcessingException ex) {
                        Assertions.fail(ex);
                    }
                    return null;
                },
                ctx -> {}
        );
        Assertions.assertEquals(
                Arrays.asList(
                        "Administrator.roles-1",
                        "Role.administrators-400"
                ),
                deleteMessages
        );
    }

    /**
     * Classic user-cases not about parameterized cache,
     * but about middle table association is mapped super class
     */
    @Test
    public void testMiddleTableDeleteBinLog() {
        connectAndExpect(
                con -> {
                    try {
                        sqlClient.getBinLog().accept(
                                "administrator_role_mapping",
                                MAPPER.readTree("{\"administrator_id\":1, \"role_id\": 200}"),
                                null
                        );
                    } catch (JsonProcessingException ex) {
                        Assertions.fail(ex);
                    }
                    return null;
                },
                ctx -> {}
        );
        Assertions.assertEquals(
                Arrays.asList(
                        "Administrator.roles-1",
                        "Role.administrators-200"
                ),
                deleteMessages
        );
    }
}
