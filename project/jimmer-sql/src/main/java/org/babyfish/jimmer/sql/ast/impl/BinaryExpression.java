package org.babyfish.jimmer.sql.ast.impl;

import org.babyfish.jimmer.sql.ast.Expression;
import org.babyfish.jimmer.sql.runtime.SqlBuilder;
import org.jetbrains.annotations.NotNull;

import java.util.Objects;

abstract class BinaryExpression<N extends Number & Comparable<N>> extends AbstractExpression<N> implements NumericExpressionImplementor<N> {

    private final Class<N> type;
    
    private Expression<N> left;

    private Expression<N> right;

    protected BinaryExpression(Class<N> type, Expression<N> left, Expression<N> right) {
        this.type = type;
        this.left = left;
        this.right = right;
    }

    @Override
    public Class<N> getType() {
        return type;
    }

    protected abstract String operator();

    @Override
    public void accept(@NotNull AstVisitor visitor) {
        ((Ast) left).accept(visitor);
        ((Ast) right).accept(visitor);
    }

    @Override
    public void renderTo(@NotNull SqlBuilder builder) {
        renderChild((Ast) left, builder);
        builder.sql(" ");
        builder.sql(operator());
        builder.sql(" ");
        renderChild((Ast) right, builder);
    }

    @Override
    protected boolean determineHasVirtualPredicate() {
        return hasVirtualPredicate(left) || hasVirtualPredicate(right);
    }

    @Override
    protected Ast onResolveVirtualPredicate(AstContext ctx) {
        left = ctx.resolveVirtualPredicate(left);
        right = ctx.resolveVirtualPredicate(right);
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        BinaryExpression<?> that = (BinaryExpression<?>) o;
        return type.equals(that.type) && left.equals(that.left) && right.equals(that.right);
    }

    @Override
    public int hashCode() {
        return Objects.hash(type, left, right);
    }

    static class Plus<N extends Number & Comparable<N>> extends BinaryExpression<N> {
        
        public Plus(Class<N> type, Expression<N> left, Expression<N> right) {
            super(type, left, right);
        }

        @Override
        public int precedence() {
            return ExpressionPrecedences.PLUS;
        }

        @Override
        protected String operator() {
            return "+";
        }
    }

    static class Minus<N extends Number & Comparable<N>> extends BinaryExpression<N> {

        public Minus(Class<N> type, Expression<N> left, Expression<N> right) {
            super(type, left, right);
        }

        @Override
        public int precedence() {
            return ExpressionPrecedences.PLUS;
        }

        @Override
        protected String operator() {
            return "-";
        }
    }

    static class Times<N extends Number & Comparable<N>> extends BinaryExpression<N> {

        public Times(Class<N> type, Expression<N> left, Expression<N> right) {
            super(type, left, right);
        }

        @Override
        public int precedence() {
            return ExpressionPrecedences.TIMES;
        }

        @Override
        protected String operator() {
            return "*";
        }
    }

    static class Div<N extends Number & Comparable<N>> extends BinaryExpression<N> {

        public Div(Class<N> type, Expression<N> left, Expression<N> right) {
            super(type, left, right);
        }

        @Override
        public int precedence() {
            return ExpressionPrecedences.TIMES;
        }

        @Override
        protected String operator() {
            return "/";
        }
    }

    static class Rem<N extends Number & Comparable<N>> extends BinaryExpression<N> {

        public Rem(Class<N> type, Expression<N> left, Expression<N> right) {
            super(type, left, right);
        }

        @Override
        public int precedence() {
            return ExpressionPrecedences.TIMES;
        }

        @Override
        protected String operator() {
            return "%";
        }
    }
}
