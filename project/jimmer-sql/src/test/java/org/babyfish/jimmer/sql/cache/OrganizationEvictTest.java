package org.babyfish.jimmer.sql.cache;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.babyfish.jimmer.meta.ImmutableProp;
import org.babyfish.jimmer.meta.ImmutableType;
import org.babyfish.jimmer.sql.JSqlClient;
import org.babyfish.jimmer.sql.common.AbstractQueryTest;
import org.babyfish.jimmer.sql.common.CacheImpl;
import org.babyfish.jimmer.sql.common.ParameterizedCaches;
import org.babyfish.jimmer.sql.filter.common.CacheableFileFilter;
import org.babyfish.jimmer.sql.filter.common.OrganizationFilter;
import org.babyfish.jimmer.sql.runtime.ConnectionManager;
import org.jetbrains.annotations.NotNull;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.sql.Connection;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.function.Function;

public class OrganizationEvictTest extends AbstractQueryTest {

    private static final ObjectMapper MAPPER = new ObjectMapper();

    private JSqlClient sqlClient;

    private List<String> deleteMessages;

    @BeforeEach
    public void initialize() {
        deleteMessages = new ArrayList<>();
        OrganizationEvictTest that = this;
        sqlClient = getSqlClient(it -> {
            it.addFilters(new OrganizationFilter());
            it.setCaches(cfg -> {
                cfg.setCacheFactory(
                        new CacheFactory() {
                            @Override
                            public Cache<?, ?> createObjectCache(@NotNull ImmutableType type) {
                                return new CacheImpl<>(type);
                            }

                            @Override
                            public Cache<?, ?> createAssociatedIdCache(@NotNull ImmutableProp prop) {
                                return ParameterizedCaches.create(prop, that::onPropCacheDelete);
                            }

                            @Override
                            public Cache<?, List<?>> createAssociatedIdListCache(@NotNull ImmutableProp prop) {
                                return ParameterizedCaches.create(prop, that::onPropCacheDelete);
                            }

                            @Override
                            public Cache<?, ?> createResolverCache(@NotNull ImmutableProp prop) {
                                return ParameterizedCaches.create(prop, that::onPropCacheDelete);
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
    public void testChangeForeignKey() {
        connectAndExpect(
                con -> {
                    try {
                        sqlClient.getBinLog().accept(
                                "organization",
                                MAPPER.readTree("{\"id\":9, \"parent_id\":2}"),
                                MAPPER.readTree("{\"id\":9, \"parent_id\":3}")
                        );
                    } catch (JsonProcessingException ex) {
                        Assertions.fail(ex);
                    }
                    return null;
                },
                ctx -> {}
        );
        Assertions.assertEquals(
                "[Organization.parent-9, Organization.childOrganizations-2, Organization.childOrganizations-3]",
                deleteMessages.toString()
        );
    }

    @Test
    public void testChangeTenant() {
        connectAndExpect(
                con -> {
                    try {
                        sqlClient.getBinLog().accept(
                                "organization",
                                MAPPER.readTree("{\"tenant\":\"a\"}"),
                                MAPPER.readTree("{\"id\":9, \"tenant\": \"b\", \"parent_id\":2}")
                        );
                    } catch (JsonProcessingException ex) {
                        Assertions.fail(ex);
                    }
                    return null;
                },
                ctx -> {
                    ctx.sql(
                            "select distinct tb_1_.ID from ORGANIZATION tb_1_ where tb_1_.PARENT_ID = ?"
                    ).variables(9L);
                }
        );
        Assertions.assertEquals(
                "[Organization.childOrganizations-2]",
                deleteMessages.toString()
        );
    }
}
