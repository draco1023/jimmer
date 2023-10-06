package org.babyfish.jimmer.sql.ast.impl.query;

import org.babyfish.jimmer.lang.OldChain;
import org.babyfish.jimmer.meta.ImmutableProp;
import org.babyfish.jimmer.meta.ImmutableType;
import org.babyfish.jimmer.sql.ast.Expression;
import org.babyfish.jimmer.sql.ast.Predicate;
import org.babyfish.jimmer.sql.ast.Selection;
import org.babyfish.jimmer.sql.ast.impl.*;
import org.babyfish.jimmer.sql.ast.impl.table.TableImplementor;
import org.babyfish.jimmer.sql.ast.impl.table.TableRowCountDestructive;
import org.babyfish.jimmer.sql.ast.query.*;
import org.babyfish.jimmer.sql.ast.table.Table;
import org.babyfish.jimmer.sql.ast.table.spi.TableProxy;
import org.babyfish.jimmer.sql.runtime.JSqlClientImplementor;
import org.babyfish.jimmer.sql.runtime.SqlBuilder;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.function.Supplier;

public abstract class AbstractMutableQueryImpl
        extends AbstractMutableStatementImpl
        implements MutableQuery, SortableImplementor {

    public static final int ORDER_BY_PRIORITY_STATEMENT = 0;

    public static final int ORDER_BY_PRIORITY_GLOBAL_FILTER = 1;

    public static final int ORDER_BY_PRIORITY_PROP_FILTER = 2;

    private final List<Expression<?>> groupByExpressions = new ArrayList<>();

    private List<Predicate> havingPredicates = new ArrayList<>();

    private final List<Order> orders = new ArrayList<>();

    private int orderByPriority = ORDER_BY_PRIORITY_STATEMENT;

    private int acceptedByPriority = ORDER_BY_PRIORITY_STATEMENT;

    private int subQueryDisabledCount = 0;

    @SuppressWarnings("unchecked")
    protected AbstractMutableQueryImpl(
            JSqlClientImplementor sqlClient,
            ImmutableType immutableType
    ) {
        super(sqlClient, immutableType);
    }

    protected AbstractMutableQueryImpl(
            JSqlClientImplementor sqlClient,
            TableProxy<?> table
    ) {
        super(sqlClient, table);
    }

    @Override
    public AbstractMutableQueryImpl where(Predicate... predicates) {
        return (AbstractMutableQueryImpl) super.where(predicates);
    }

    @OldChain
    @Override
    public AbstractMutableQueryImpl whereIf(boolean condition, Predicate predicate) {
        if (condition) {
            where(predicate);
        }
        return this;
    }

    @OldChain
    @Override
    public AbstractMutableQueryImpl whereIf(boolean condition, Supplier<Predicate> block) {
        if (condition) {
            where(block.get());
        }
        return this;
    }

    @Override
    public AbstractMutableQueryImpl groupBy(Expression<?> ... expressions) {
        validateMutable();
        for (Expression<?> expression : expressions) {
            if (expression != null) {
                groupByExpressions.add(expression);
            }
        }
        return this;
    }

    @Override
    public AbstractMutableQueryImpl having(Predicate ... predicates) {
        validateMutable();
        for (Predicate predicate : predicates) {
            if (predicate != null) {
                havingPredicates.add(predicate);
            }
        }
        return this;
    }

    @Override
    public AbstractMutableQueryImpl orderBy(Expression<?> ... expressions) {
        validateMutable();
        Order[] orders = new Order[expressions.length];
        for (int i = orders.length - 1; i >= 0; --i) {
            Expression<?> expression = expressions[i];
            if (expression != null) {
                orders[i] = new Order(expression, OrderMode.ASC, NullOrderMode.UNSPECIFIED);
            }
        }
        return orderBy(orders);
    }

    @Override
    public AbstractMutableQueryImpl orderByIf(boolean condition, Expression<?>... expressions) {
        if (condition) {
            orderBy(expressions);
        }
        return this;
    }

    @Override
    public AbstractMutableQueryImpl orderBy(Order... orders) {
        validateMutable();
        for (Order order : orders) {
            addOrder(order);
        }
        return this;
    }

    @Override
    public AbstractMutableQueryImpl orderByIf(boolean condition, Order... orders) {
        if (condition) {
            orderBy(orders);
        }
        return this;
    }

    @OldChain
    @Override
    public AbstractMutableQueryImpl orderBy(List<Order> orders) {
        validateMutable();
        for (Order order : orders) {
            addOrder(order);
        }
        return this;
    }

    @OldChain
    @Override
    public AbstractMutableQueryImpl orderByIf(boolean condition, List<Order> orders) {
        if (condition) {
            orderBy(orders);
        }
        return this;
    }

    @Override
    protected void onFrozen() {
        havingPredicates = mergePredicates(havingPredicates);
        super.onFrozen();
    }

    @Override
    public void applyGlobalFiler(Table<?> table) {
        setOrderByPriority(ORDER_BY_PRIORITY_GLOBAL_FILTER);
        super.applyGlobalFiler(table);
    }

    @Override
    public void disableSubQuery() {
        this.subQueryDisabledCount++;
    }

    @Override
    public void enableSubQuery() {
        this.subQueryDisabledCount--;
    }

    @Override
    public boolean isSubQueryDisabled() {
        return subQueryDisabledCount != 0;
    }

    void accept(
            AstVisitor visitor,
            List<Selection<?>> overriddenSelections,
            boolean withoutSortingAndPaging
    ) {
        Predicate predicate = getPredicate();
        Predicate havingPredicate = havingPredicates.isEmpty() ? null : havingPredicates.get(0);
        if (groupByExpressions.isEmpty() && !havingPredicates.isEmpty()) {
            throw new IllegalStateException(
                    "Having clause cannot be used without group clause"
            );
        }
        if (predicate != null) {
            ((Ast)predicate).accept(visitor);
        }
        for (Expression<?> expression : groupByExpressions) {
            ((Ast)expression).accept(visitor);
        }
        if (havingPredicate != null) {
            ((Ast)havingPredicate).accept(visitor);
        }
        AstContext astContext = visitor.getAstContext();
        if (withoutSortingAndPaging) {
            AstVisitor ignoredVisitor = new UseJoinOfIgnoredClauseVisitor(astContext);
            for (Order order : orders) {
                ((Ast)order.getExpression()).accept(ignoredVisitor);
            }
        } else {
            for (Order order : orders) {
                ((Ast)order.getExpression()).accept(visitor);
            }
        }
        if (overriddenSelections != null) {
            AstVisitor ignoredVisitor = new UseJoinOfIgnoredClauseVisitor(astContext);
            for (Selection<?> selection : overriddenSelections) {
                Ast.from(selection, astContext).accept(ignoredVisitor);
            }
        }
    }

    void renderTo(SqlBuilder builder, boolean withoutSortingAndPaging, boolean reverseOrder) {

        Predicate predicate = getPredicate();
        Predicate havingPredicate = havingPredicates.isEmpty() ? null : havingPredicates.get(0);

        TableImplementor<?> tableImplementor = getTableImplementor();
        tableImplementor.renderTo(builder);

        if (predicate != null) {
            builder.enter(SqlBuilder.ScopeType.WHERE);
            ((Ast)predicate).renderTo(builder);
            builder.leave();
        }
        if (!groupByExpressions.isEmpty()) {
            builder.enter(SqlBuilder.ScopeType.GROUP_BY);
            for (Expression<?> expression : groupByExpressions) {
                builder.separator();
                ((Ast)expression).renderTo(builder);
            }
            builder.leave();
        }
        if (havingPredicate != null) {
            builder.enter(SqlBuilder.ScopeType.HAVING);
            ((Ast)havingPredicate).renderTo(builder);
            builder.leave();
        }
        if (!withoutSortingAndPaging && !orders.isEmpty()) {
            builder.enter(SqlBuilder.ScopeType.ORDER_BY);
            for (Order order : orders) {
                builder.separator();
                ((Ast)order.getExpression()).renderTo(builder);
                if (order.getOrderMode() == OrderMode.DESC) {
                    builder.sql(reverseOrder ? " asc" : " desc");
                } else {
                    builder.sql(reverseOrder ? " desc" : " asc");
                }
                switch (order.getNullOrderMode()) {
                    case NULLS_FIRST:
                        builder.sql(reverseOrder ? " nulls last" : " nulls first");
                        break;
                    case NULLS_LAST:
                        builder.sql(reverseOrder ? " nulls first" : " nulls last");
                        break;
                }
            }
            builder.leave();
        }
    }

    protected boolean isGroupByClauseUsed() {
        return !this.groupByExpressions.isEmpty();
    }

    List<Order> getOrders() {
        return Collections.unmodifiableList(orders);
    }

    public int getAcceptedOrderByPriority() {
        return acceptedByPriority;
    }

    public void setOrderByPriority(int priority) {
        this.orderByPriority = priority;
    }

    private void addOrder(Order order) {
        int priorityDiff = orderByPriority - acceptedByPriority;
        if (order == null || priorityDiff < 0) {
            return;
        }
        if (priorityDiff > 0) {
            this.orders.clear();
            acceptedByPriority = orderByPriority;
        }
        this.orders.add(order);
    }

    private static class UseJoinOfIgnoredClauseVisitor extends AstVisitor {

        public UseJoinOfIgnoredClauseVisitor(AstContext ctx) {
            super(ctx);
        }

        @Override
        public boolean visitSubQuery(TypedSubQuery<?> subQuery) {
            return false;
        }

        @Override
        public void visitTableReference(TableImplementor<?> table, ImmutableProp prop) {
            handle(table, prop != null && prop.isId());
        }

        private void handle(TableImplementor<?> table, boolean isId) {
            if (table.getDestructive() != TableRowCountDestructive.NONE) {
                if (isId) {
                    getAstContext().useTableId(table);
                    use(table.getParent());
                } else {
                    use(table);
                }
            }
        }

        private void use(TableImplementor<?> table) {
            if (table != null) {
                getAstContext().useTable(table);
                use(table.getParent());
            }
        }
    }
}
