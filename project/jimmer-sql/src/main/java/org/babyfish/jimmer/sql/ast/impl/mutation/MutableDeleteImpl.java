package org.babyfish.jimmer.sql.ast.impl.mutation;

import org.babyfish.jimmer.meta.ImmutableType;
import org.babyfish.jimmer.meta.PropId;
import org.babyfish.jimmer.runtime.ImmutableSpi;
import org.babyfish.jimmer.sql.ast.Predicate;
import org.babyfish.jimmer.sql.ast.impl.AbstractMutableStatementImpl;
import org.babyfish.jimmer.sql.ast.impl.Ast;
import org.babyfish.jimmer.sql.ast.impl.AstContext;
import org.babyfish.jimmer.sql.ast.impl.AstVisitor;
import org.babyfish.jimmer.sql.ast.impl.query.FilterLevel;
import org.babyfish.jimmer.sql.ast.impl.query.MutableRootQueryImpl;
import org.babyfish.jimmer.sql.ast.impl.query.UseTableVisitor;
import org.babyfish.jimmer.sql.ast.impl.table.StatementContext;
import org.babyfish.jimmer.sql.ast.impl.table.TableImplementor;
import org.babyfish.jimmer.sql.ast.mutation.DeleteMode;
import org.babyfish.jimmer.sql.ast.mutation.MutableDelete;
import org.babyfish.jimmer.sql.ast.table.Table;
import org.babyfish.jimmer.sql.ast.table.TableEx;
import org.babyfish.jimmer.sql.ast.table.spi.TableProxy;
import org.babyfish.jimmer.sql.ast.tuple.Tuple3;
import org.babyfish.jimmer.sql.event.TriggerType;
import org.babyfish.jimmer.sql.runtime.*;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class MutableDeleteImpl
        extends AbstractMutableStatementImpl
        implements MutableDelete {

    private MutableRootQueryImpl<TableEx<?>> deleteQuery;

    private boolean isDissociationDisabled;

    public MutableDeleteImpl(JSqlClientImplementor sqlClient, ImmutableType immutableType) {
        super(sqlClient, immutableType);
        deleteQuery = new MutableRootQueryImpl<>(
                new StatementContext(ExecutionPurpose.DELETE),
                sqlClient,
                immutableType
        );
    }

    public MutableDeleteImpl(JSqlClientImplementor sqlClient, TableProxy<?> table) {
        super(sqlClient, table);
        deleteQuery = new MutableRootQueryImpl<>(
                new StatementContext(ExecutionPurpose.DELETE),
                sqlClient,
                table
        );
    }

    @Override
    public <T extends Table<?>> T getTable() {
        return deleteQuery.getTable();
    }

    @Override
    public TableImplementor<?> getTableImplementor() {
        return deleteQuery.getTableImplementor();
    }

    @Override
    public AbstractMutableStatementImpl getParent() {
        return null;
    }

    @Override
    public StatementContext getContext() {
        return deleteQuery.getContext();
    }

    @Override
    public MutableDelete where(Predicate... predicates) {
        deleteQuery.where(predicates);
        return this;
    }

    @Override
    public MutableDelete disableDissociation() {
        isDissociationDisabled = true;
        return this;
    }

    @Override
    public Integer execute() {
        return getSqlClient()
                .getConnectionManager()
                .execute(this::executeImpl);
    }

    @Override
    public Integer execute(Connection con) {
        if (con != null) {
            return executeImpl(con);
        }
        return getSqlClient()
                .getConnectionManager()
                .execute(this::executeImpl);
    }

    @Override
    protected void onFrozen() {
        deleteQuery.freeze();
    }

    @SuppressWarnings("unchecked")
    private Integer executeImpl(Connection con) {

        JSqlClientImplementor sqlClient = getSqlClient();
        TableImplementor<?> table = getTableImplementor();

        boolean binLogOnly = sqlClient.getTriggerType() == TriggerType.BINLOG_ONLY;
        boolean directly = table.isEmpty() && binLogOnly && (
                isDissociationDisabled ||
                        sqlClient.getEntityManager().getDissociationInfo(table.getImmutableType()) == null
        );

        AstContext astContext = new AstContext(sqlClient);

        if (directly) {
            applyGlobalFilters(astContext, getContext().getFilterLevel(), null);
        }

        astContext.pushStatement(deleteQuery);
        try {
            AstVisitor visitor = new UseTableVisitor(astContext);
            for (Predicate predicate : deleteQuery.getPredicates()) {
                ((Ast) predicate).accept(visitor);
            }
        } finally {
            astContext.popStatement();
        }

        if (directly) {
            SqlBuilder builder = new SqlBuilder(astContext);
            astContext.pushStatement(this);
            try {
                renderDirectly(builder);
                Tuple3<String, List<Object>, List<Integer>> sqlResult = builder.build();
                return sqlClient.getExecutor().execute(
                        new Executor.Args<>(
                                getSqlClient(),
                                con,
                                sqlResult.get_1(),
                                sqlResult.get_2(),
                                sqlResult.get_3(),
                                getPurpose(),
                                null,
                                PreparedStatement::executeUpdate
                        )
                );
            } finally {
                astContext.popStatement();
            }
        }
        List<Object> ids;
        MutationCache cache;
        if (binLogOnly) {
            ids = deleteQuery
                    .select(table.get(table.getImmutableType().getIdProp()))
                    .distinct()
                    .execute(con);
            cache = null;
        } else {
            List<ImmutableSpi> rows = (List<ImmutableSpi>) deleteQuery
                    .select(table)
                    .execute(con);
            PropId idPropId = table.getImmutableType().getIdProp().getId();
            ids = new ArrayList<>(rows.size());
            cache = new MutationCache(sqlClient, false);
            for (ImmutableSpi row : rows) {
                cache.save(row, false);
                ids.add(row.__get(idPropId));
            }
        }
        if (ids.isEmpty()) {
            return 0;
        }
        Deleter deleter = new Deleter(
                new DeleteCommandImpl.Data(sqlClient, DeleteMode.PHYSICAL),
                con,
                cache,
                binLogOnly ? null : new MutationTrigger(),
                new HashMap<>()
        );
        deleter.addPreHandleInput(table.getImmutableType(), ids);
        return deleter.execute(true).getTotalAffectedRowCount();
    }

    private void renderDirectly(SqlBuilder builder) {
        TableImplementor<?> table = getTableImplementor();
        builder.sql("delete");
        if (getSqlClient().getDialect().isDeletedAliasRequired()) {
            builder.sql(" ").sql(table.getAlias());
        }
        builder
                .from()
                .sql(table.getImmutableType().getTableName(getSqlClient().getMetadataStrategy()))
                .sql(" ")
                .sql(table.getAlias());
        Predicate predicate = deleteQuery.getPredicate();
        if (predicate != null) {
            builder.enter(SqlBuilder.ScopeType.WHERE);
            ((Ast) predicate).renderTo(builder);
            builder.leave();
        }
    }
}
