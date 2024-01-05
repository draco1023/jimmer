package org.babyfish.jimmer.sql.ast.impl;

import org.babyfish.jimmer.sql.ast.*;
import org.jetbrains.annotations.NotNull;

import java.util.function.Consumer;

public class ExpressionFactories {

    private ExpressionFactories() {}

    @SuppressWarnings("unchecked")
    public static <F> F of(Class<F> factoryType) {
        if (factoryType == Expression.StringFactory.class) {
            return (F)Str.INSTANCE;
        }
        if (factoryType == Expression.NumericFactory.class) {
            return (F)Num.INSTANCE;
        }
        if (factoryType == Expression.ComparableFactory.class) {
            return (F)Cmp.INSTANCE;
        }
        if (factoryType == Expression.AnyFactory.class) {
            return (F)Any.INSTANCE;
        }
        throw new IllegalStateException(
                "Unknown factory type \"" +
                        factoryType.getName() +
                        "\""
        );
    }

    private static class Str implements Expression.StringFactory {

        static final Str INSTANCE = new Str();

        @Override
        public @NotNull StringExpression value(String value) {
            return Literals.string(value);
        }

        @Override
        public @NotNull StringExpression sql(String sql) {
            return SqlExpressions.of(String.class, sql, null);
        }

        @Override
        public @NotNull StringExpression sql(String sql, Expression<?> expression, Object ... values) {
            return SqlExpressions.of(String.class, sql, new Expression[] { expression }, values);
        }

        @Override
        public @NotNull StringExpression sql(String sql, Expression<?>[] expressions, Object ... values) {
            return SqlExpressions.of(String.class, sql, expressions, values);
        }

        @Override
        public @NotNull StringExpression sql(String sql, Consumer<SqlExpressionContext> block) {
            return SqlExpressions.of(String.class, sql, block);
        }

        @Override
        public <C> SimpleCaseBuilder.@NotNull Str<C> caseBuilder(C value) {
            return caseBuilder(Literals.any(value));
        }

        @Override
        public <C> SimpleCaseBuilder.@NotNull Str<C> caseBuilder(Expression<C> expression) {
            return new SimpleCaseBuilder.Str<>(expression);
        }

        @Override
        public CaseBuilder.@NotNull Str caseBuilder() {
            return new CaseBuilder.Str();
        }
    }

    private static class Num implements Expression.NumericFactory {

        static final Num INSTANCE = new Num();

        @Override
        public <N extends Number & Comparable<N>> @NotNull NumericExpression<N> value(N value) {
            return Literals.number(value);
        }

        @Override
        public <N extends Number & Comparable<N>> @NotNull NumericExpression<N> sql(Class<N> type, String sql) {
            return SqlExpressions.of(type, sql, null);
        }

        @Override
        public <N extends Number & Comparable<N>> @NotNull NumericExpression<N> sql(Class<N> type, String sql, Expression<?> expression, Object ... values) {
            return SqlExpressions.of(type, sql, new Expression[] { expression }, values);
        }

        @Override
        public <N extends Number & Comparable<N>> @NotNull NumericExpression<N> sql(Class<N> type, String sql, Expression<?>[] expressions, Object ... values) {
            return SqlExpressions.of(type, sql, expressions, values);
        }

        @Override
        public <N extends Number & Comparable<N>> @NotNull NumericExpression<N> sql(Class<N> type, String sql, Consumer<SqlExpressionContext> block) {
            return SqlExpressions.of(type, sql, block);
        }

        @Override
        public <C, N extends Number & Comparable<N>> SimpleCaseBuilder.@NotNull Num<C, N> caseBuilder(Class<N> type, C value) {
            return caseBuilder(type, Literals.any(value));
        }

        @Override
        public <C, N extends Number & Comparable<N>> SimpleCaseBuilder.@NotNull Num<C, N> caseBuilder(Class<N> type, Expression<C> expression) {
            return new SimpleCaseBuilder.Num<>(type, expression);
        }

        @Override
        public <N extends Number & Comparable<N>> CaseBuilder.@NotNull Num<N> caseBuilder(Class<N> type) {
            return new CaseBuilder.Num<>(type);
        }
    }

    private static class Cmp implements Expression.ComparableFactory {

        static final Cmp INSTANCE = new Cmp();

        @Override
        public <T extends Comparable<?>> @NotNull ComparableExpression<T> value(T value) {
            return Literals.comparable(value);
        }

        @Override
        public <T extends Comparable<?>> @NotNull ComparableExpression<T> sql(Class<T> type, String sql) {
            return SqlExpressions.of(type, sql, null);
        }

        @Override
        public <T extends Comparable<?>> @NotNull ComparableExpression<T> sql(Class<T> type, String sql, Expression<?> expression, Object ... values) {
            return SqlExpressions.of(type, sql, new Expression[] { expression }, values);
        }

        @Override
        public <T extends Comparable<?>> @NotNull ComparableExpression<T> sql(Class<T> type, String sql, Expression<?>[] expressions, Object ... values) {
            return SqlExpressions.of(type, sql, expressions, values);
        }

        @Override
        public <T extends Comparable<?>> @NotNull ComparableExpression<T> sql(Class<T> type, String sql, Consumer<SqlExpressionContext> block) {
            return SqlExpressions.of(type, sql, block);
        }

        @Override
        public <C, T extends Comparable<?>> SimpleCaseBuilder.@NotNull Cmp<C, T> caseBuilder(Class<T> type, C value) {
            return caseBuilder(type, Literals.any(value));
        }

        @Override
        public <C, T extends Comparable<?>> SimpleCaseBuilder.@NotNull Cmp<C, T> caseBuilder(Class<T> type, Expression<C> expression) {
            return new SimpleCaseBuilder.Cmp<>(type, expression);
        }

        @Override
        public <T extends Comparable<?>> CaseBuilder.@NotNull Cmp<T> caseBuilder(Class<T> type) {
            return new CaseBuilder.Cmp<>(type);
        }
    }

    private static class Any implements Expression.AnyFactory {

        static final Any INSTANCE = new Any();

        @Override
        public <T> @NotNull Expression<T> value(T value) {
            return Literals.any(value);
        }

        @Override
        public <T> @NotNull Expression<T> nullValue(Class<T> type) {
            return new NullExpression<>(type);
        }

        @Override
        public <T> @NotNull Expression<T> sql(Class<T> type, String sql) {
            return SqlExpressions.of(type, sql, null);
        }

        @Override
        public <T> @NotNull Expression<T> sql(Class<T> type, String sql, Expression<?> expression, Object ... values) {
            return SqlExpressions.of(type, sql, new Expression[]{expression}, values);
        }

        @Override
        public <T> @NotNull Expression<T> sql(Class<T> type, String sql, Expression<?>[] expressions, Object ... values) {
            return SqlExpressions.of(type, sql, expressions, values);
        }

        @Override
        public <T> @NotNull Expression<T> sql(Class<T> type, String sql, Consumer<SqlExpressionContext> block) {
            return SqlExpressions.of(type, sql, block);
        }

        @Override
        public <C, T> @NotNull SimpleCaseBuilder<C, T> caseBuilder(Class<T> type, C value) {
            return caseBuilder(type, Literals.any(value));
        }

        @Override
        public <C, T> @NotNull SimpleCaseBuilder<C, T> caseBuilder(Class<T> type, Expression<C> expression) {
            return new SimpleCaseBuilder<>(type, expression);
        }

        @Override
        public <T> @NotNull CaseBuilder<T> caseBuilder(Class<T> type) {
            return new CaseBuilder<>(type);
        }
    }
}
