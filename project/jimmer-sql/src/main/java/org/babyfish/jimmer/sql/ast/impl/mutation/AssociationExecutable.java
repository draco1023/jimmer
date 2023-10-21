package org.babyfish.jimmer.sql.ast.impl.mutation;

import org.babyfish.jimmer.lang.NewChain;
import org.babyfish.jimmer.sql.association.meta.AssociationType;
import org.babyfish.jimmer.sql.ast.Executable;
import org.babyfish.jimmer.sql.ast.Expression;
import org.babyfish.jimmer.sql.ast.impl.AstContext;
import org.babyfish.jimmer.sql.ast.tuple.Tuple2;
import org.babyfish.jimmer.sql.ast.tuple.Tuple3;
import org.babyfish.jimmer.sql.event.TriggerType;
import org.babyfish.jimmer.sql.meta.MetadataStrategy;
import org.babyfish.jimmer.sql.meta.MiddleTable;
import org.babyfish.jimmer.sql.runtime.ExecutionPurpose;
import org.babyfish.jimmer.sql.runtime.JSqlClientImplementor;
import org.babyfish.jimmer.sql.runtime.Selectors;
import org.babyfish.jimmer.sql.runtime.SqlBuilder;
import org.jetbrains.annotations.Nullable;

import java.sql.Connection;
import java.util.*;

class AssociationExecutable implements Executable<Integer> {

    final JSqlClientImplementor sqlClient;

    final Connection con;

    private final AssociationType associationType;

    private final boolean reversed;

    private final boolean forDelete;

    private final boolean defaultCheckExistence;

    private final Boolean nullOrCheckedExistence;

    private final Set<Tuple2<?, ?>> idTuples;

    public AssociationExecutable(
            JSqlClientImplementor sqlClient,
            Connection con,
            AssociationType associationType,
            boolean reversed,
            boolean forDelete,
            boolean defaultCheckExistence,
            Collection<Tuple2<?, ?>> idTuples
    ) {
        this(sqlClient, con, associationType, reversed, forDelete, defaultCheckExistence, null, idTuples);
    }

    private AssociationExecutable(
            JSqlClientImplementor sqlClient,
            Connection con,
            AssociationType associationType,
            boolean reversed,
            boolean forDelete,
            boolean defaultCheckExistence,
            Boolean nullOrCheckedExistence,
            Collection<Tuple2<?, ?>> idTuples
    ) {
        this.sqlClient = sqlClient;
        this.con = con;
        this.associationType = associationType;
        this.reversed = reversed;
        this.forDelete = forDelete;
        this.defaultCheckExistence = defaultCheckExistence;
        this.nullOrCheckedExistence = nullOrCheckedExistence;
        this.idTuples = idTuples instanceof Set<?> ?
                (Set<Tuple2<?, ?>>)idTuples :
                new LinkedHashSet<>(idTuples);
    }

    @NewChain
    public AssociationExecutable setCheckExistence(@Nullable Boolean checkExistence) {
        if (nullOrCheckedExistence == checkExistence) {
            return this;
        }
        return new AssociationExecutable(
                sqlClient,
                con,
                associationType,
                reversed,
                forDelete,
                defaultCheckExistence,
                checkExistence,
                idTuples
        );
    }

    @Override
    public Integer execute() {
        if (con != null) {
            return executeImpl(con);
        }
        return sqlClient
                .getConnectionManager()
                .execute(this::executeImpl);
    }

    @Override
    public Integer execute(Connection con) {
        if (con != null) {
            return executeImpl(con);
        }
        if (this.con != null) {
            return executeImpl(this.con);
        }
        return sqlClient
                .getConnectionManager()
                .execute(this::executeImpl);
    }

    private Integer executeImpl(Connection con) {

        if (idTuples.isEmpty()) {
            return 0;
        }

        MutationTrigger trigger = createTrigger();
        MiddleTableOperator operator = getMiddleTypeOperator(con, trigger);
        if (forDelete) {
            int affectedRowCount = operator
                    .remove(idTuples, trigger != null);
            if (trigger != null) {
                trigger.submit(sqlClient, con);
            }
            return affectedRowCount;
        }

        Set<Tuple2<?, ?>> addingPairs = idTuples;
        if (nullOrCheckedExistence != null ? nullOrCheckedExistence : defaultCheckExistence) {
            addingPairs = new LinkedHashSet<>(addingPairs);
            Set<Tuple2<Object, Object>> existingPairs = new HashSet<>(find(con));
            addingPairs.removeAll(existingPairs);
            if (addingPairs.isEmpty()) {
                return 0;
            }
        }
        int affectedRowCount = operator.add(addingPairs);
        if (trigger != null) {
            trigger.submit(sqlClient, con);
        }
        return affectedRowCount;
    }

    private List<Tuple2<Object, Object>> find(Connection con) {

        MetadataStrategy strategy = sqlClient.getMetadataStrategy();
        MiddleTable middleTable = reversed ?
                associationType.getMiddleTable(strategy).getInverse() :
                associationType.getMiddleTable(strategy);
        Tuple2<Expression<?>, Expression<?>> expressionPair = getExpressionPair();

        SqlBuilder builder = new SqlBuilder(new AstContext(sqlClient));
        builder
                .enter(SqlBuilder.ScopeType.SELECT)
                .definition(middleTable.getColumnDefinition())
                .separator()
                .definition(middleTable.getTargetColumnDefinition())
                .leave()
                .from()
                .sql(associationType.getTableName(strategy))
                .enter(SqlBuilder.ScopeType.WHERE)
                .enter(SqlBuilder.ScopeType.TUPLE)
                .definition(middleTable.getColumnDefinition())
                .separator()
                .definition(middleTable.getTargetColumnDefinition())
                .leave()
                .leave()
                .sql(" in ");
        builder.enter(SqlBuilder.ScopeType.LIST);
        for (Tuple2<?, ?> idTuple : idTuples) {
            builder
                    .separator()
                    .enter(SqlBuilder.ScopeType.TUPLE)
                    .variable(idTuple.get_1())
                    .separator()
                    .variable(idTuple.get_2())
                    .leave();
        }
        builder.leave();

        Tuple3<String, List<Object>, List<Integer>> sqlResult = builder.build();
        return Selectors.select(
                sqlClient,
                con,
                sqlResult.get_1(),
                sqlResult.get_2(),
                sqlResult.get_3(),
                Arrays.asList(expressionPair.get_1(), expressionPair.get_2()),
                ExecutionPurpose.QUERY
        );
    }

    private Tuple2<Expression<?>, Expression<?>> getExpressionPair() {
        Class<?> srcType = associationType.getSourceType().getIdProp().getElementClass();
        Class<?> tgtType = associationType.getTargetType().getIdProp().getElementClass();
        if (reversed) {
            return new Tuple2<>(
                    Expression.any().nullValue(tgtType),
                    Expression.any().nullValue(srcType)
            );
        }
        return new Tuple2<>(
                Expression.any().nullValue(srcType),
                Expression.any().nullValue(tgtType)
        );
    }

    private MiddleTableOperator getMiddleTypeOperator(Connection con, MutationTrigger trigger) {
        return MiddleTableOperator.tryGet(
                sqlClient,
                con,
                reversed ?
                        associationType.getBaseProp().getOpposite() :
                        associationType.getBaseProp(),
                trigger
        );
    }

    private MutationTrigger createTrigger() {
        return sqlClient.getTriggerType() == TriggerType.BINLOG_ONLY ?
                null :
                new MutationTrigger();
    }
}
