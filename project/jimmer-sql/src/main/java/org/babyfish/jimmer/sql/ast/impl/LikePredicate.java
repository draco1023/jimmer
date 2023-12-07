package org.babyfish.jimmer.sql.ast.impl;

import org.babyfish.jimmer.sql.ast.LikeMode;
import org.babyfish.jimmer.sql.ast.Predicate;
import org.babyfish.jimmer.sql.ast.StringExpression;
import org.babyfish.jimmer.sql.runtime.SqlBuilder;
import org.jetbrains.annotations.NotNull;

import java.util.Objects;

class LikePredicate extends AbstractPredicate {

    private StringExpression expression;

    private final String pattern;

    private final boolean insensitive;

    private final boolean negative;

    public static LikePredicate of(
            StringExpression expression,
            String pattern,
            boolean insensitive,
            LikeMode likeMode
    ) {
        if (pattern == null) {
            pattern = "";
        }
        if (!likeMode.isStartExact() && !pattern.startsWith("%")) {
            pattern = '%' + pattern;
        }
        if (!likeMode.isEndExact() && !pattern.endsWith("%")) {
            pattern = pattern + '%';
        }
        if (insensitive) {
            pattern = pattern.toLowerCase();
        }
        return new LikePredicate(expression, pattern, insensitive, false);
    }

    private LikePredicate(
            StringExpression expression,
            String pattern,
            boolean insensitive,
            boolean negative
    ) {
        this.expression = expression;
        this.pattern = pattern;
        this.insensitive = insensitive;
        this.negative = negative;
    }

    @Override
    public int precedence() {
        return 0;
    }

    @Override
    public Predicate not() {
        return new LikePredicate(
                expression,
                pattern,
                insensitive,
                !negative
        );
    }

    @Override
    public void accept(@NotNull AstVisitor visitor) {
        ((Ast)expression).accept(visitor);
    }

    @Override
    public void renderTo(@NotNull SqlBuilder builder) {
        if (pattern.equals("%")) {
            builder.sql("1 = 1");
        } else {
            boolean ignoreCaseLikeSupported = builder.getAstContext().getSqlClient().getDialect().isIgnoreCaseLikeSupported();
            if (insensitive && !ignoreCaseLikeSupported) {
                builder.sql("lower(");
                renderChild((Ast) expression, builder);
                builder.sql(")");
            } else {
                renderChild((Ast) expression, builder);
            }
            if (insensitive && ignoreCaseLikeSupported) {
                builder.sql(negative ? " not ilike " : " ilike ");
            } else {
                builder.sql(negative ? " not like " : " like ");
            }
            builder.variable(pattern);
        }
    }

    @Override
    protected boolean determineHasVirtualPredicate() {
        return hasVirtualPredicate(expression);
    }

    @Override
    protected Ast onResolveVirtualPredicate(AstContext ctx) {
        expression = ctx.resolveVirtualPredicate(expression);
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof LikePredicate)) return false;
        LikePredicate that = (LikePredicate) o;
        return insensitive == that.insensitive && negative == that.negative && expression.equals(that.expression) && pattern.equals(that.pattern);
    }

    @Override
    public int hashCode() {
        return Objects.hash(expression, pattern, insensitive, negative);
    }
}
