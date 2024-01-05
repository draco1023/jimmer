package org.babyfish.jimmer.sql.ast.impl;

import org.babyfish.jimmer.sql.ast.Expression;
import org.babyfish.jimmer.sql.ast.Predicate;
import org.babyfish.jimmer.sql.ast.PropExpression;
import org.babyfish.jimmer.sql.ast.table.spi.PropExpressionImplementor;
import org.babyfish.jimmer.sql.runtime.ExecutionException;
import org.babyfish.jimmer.sql.runtime.ScalarProvider;
import org.babyfish.jimmer.sql.runtime.SqlBuilder;
import org.jetbrains.annotations.NotNull;

import java.util.Collection;
import java.util.List;
import java.util.Objects;

class InCollectionPredicate extends AbstractPredicate {

    private Expression<?> expression;

    private final Collection<?> values;

    private Collection<?> convertedValues;

    private final boolean negative;

    public InCollectionPredicate(
            Expression<?> expression,
            Collection<?> values,
            boolean negative
    ) {
        this.expression = Objects.requireNonNull(expression, "`expression` cannot be null");
        this.values = Objects.requireNonNull(values, "`values` cannot b null");
        this.negative = negative;
    }

    @Override
    public void accept(@NotNull AstVisitor visitor) {
        ((Ast) expression).accept(visitor);
    }

    @Override
    public void renderTo(@NotNull SqlBuilder builder) {
        if (values.isEmpty()) {
            builder.sql(negative ? "1 = 1" : "1 = 0");
        } else {
            renderChild((Ast) expression, builder);
            Collection<?> convertedValues = this.convertedValues;
            if (convertedValues == null) {
                convertedValues = Literals.convert(values, expression, builder.getAstContext().getSqlClient());
                this.convertedValues = convertedValues;
            }
            if (convertedValues.size() == 1) {
                Object value = convertedValues.iterator().next();
                builder.sql(negative ? " <> " : " = ");
                if (value != null) {
                    builder.variable(value);
                } else {
                    builder.nullVariable(((ExpressionImplementor<?>)expression).getType());
                }
            } else {
                builder.sql(negative ? " not in " : " in ").enter(SqlBuilder.ScopeType.LIST);
                for (Object value : convertedValues) {
                    if (value != null) {
                        builder.separator().variable(value);
                    } else {
                        builder.separator().nullVariable(((ExpressionImplementor<?>) expression).getType());
                    }
                }
                builder.leave();
            }
        }
    }

    @Override
    public int precedence() {
        return 0;
    }

    @Override
    protected boolean determineHasVirtualPredicate() {
        return hasVirtualPredicate(expression);
    }

    @Override
    protected Ast onResolveVirtualPredicate(AstContext ctx) {
        this.expression = ctx.resolveVirtualPredicate(expression);
        return this;
    }

    @Override
    public Predicate not() {
        return new InCollectionPredicate(expression, values, !negative);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof InCollectionPredicate)) return false;
        InCollectionPredicate that = (InCollectionPredicate) o;
        return negative == that.negative && expression.equals(that.expression) && values.equals(that.values);
    }

    @Override
    public int hashCode() {
        return Objects.hash(expression, values, negative);
    }
}
