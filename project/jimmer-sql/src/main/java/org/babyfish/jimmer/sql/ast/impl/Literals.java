package org.babyfish.jimmer.sql.ast.impl;

import org.babyfish.jimmer.meta.ImmutableProp;
import org.babyfish.jimmer.sql.ast.*;
import org.babyfish.jimmer.sql.ast.table.spi.PropExpressionImplementor;
import org.babyfish.jimmer.sql.runtime.ExecutionException;
import org.babyfish.jimmer.sql.runtime.JSqlClientImplementor;
import org.babyfish.jimmer.sql.runtime.ScalarProvider;
import org.babyfish.jimmer.sql.runtime.SqlBuilder;
import org.jetbrains.annotations.NotNull;

import java.util.*;

public class Literals {

    private Literals() {}

    public static StringExpression string(String value) {
        return new Str(value);
    }

    public static <N extends Number & Comparable<N>> NumericExpression<N> number(N value) {
        return new Num<>(value);
    }

    public static <T extends Comparable<?>> ComparableExpression<T> comparable(T value) {
        return new Cmp<>(value);
    }

    public static void bind(Expression<?> mayBeLiteral, Expression<?> expression) {
        if (!(mayBeLiteral instanceof Any<?>)) {
            return;
        }
        if (expression instanceof PropExpression<?>) {
            ((Any<?>)mayBeLiteral).setMatchedProp(((PropExpressionImplementor<?>)expression).getProp());
        } else if (expression instanceof TupleExpressionImplementor<?>) {
            TupleExpressionImplementor<?> tupleExpr = (TupleExpressionImplementor<?>) expression;
            int size = tupleExpr.size();
            ImmutableProp[] props = new ImmutableProp[size];
            boolean hasProp = false;
            for (int i = 0; i < size; i++) {
                Selection<?> expr = tupleExpr.get(i);
                if (expr instanceof PropExpression<?>) {
                    props[i] = ((PropExpressionImplementor<?>)expr).getProp();
                    hasProp = true;
                }
            }
            if (hasProp) {
                ((Any<?>) mayBeLiteral).setMatchedProps(props);
            }
        }
    }

    @SuppressWarnings("unchecked")
    public static Collection<?> convert(Collection<?> literals, Expression<?> expression, JSqlClientImplementor sqlClient) {
        if (literals == null || literals.isEmpty()) {
            return literals;
        }
        if (expression instanceof PropExpression<?>) {
            ImmutableProp prop = ((PropExpressionImplementor<?>)expression).getProp();
            ScalarProvider<Object, Object> scalarProvider = sqlClient.getScalarProvider(prop);
            if (scalarProvider == null) {
                return literals;
            }
            List<Object> newLiterals = new ArrayList<>(literals.size());
            for (Object literal : literals) {
                try {
                    newLiterals.add(literal != null ? scalarProvider.toSql(literal) : null);
                } catch (Exception ex) {
                    throw new ExecutionException(
                            "Cannot convert the value \"" +
                                    literal +
                                    "\" of prop \"" +
                                    prop +
                                    "\" by scalar provider \"" +
                                    scalarProvider.getClass().getName() +
                                    "\"",
                            ex
                    );
                }
            }
            return newLiterals;
        } else if (expression instanceof TupleExpressionImplementor<?>) {
            TupleExpressionImplementor<?> tupleExpr = (TupleExpressionImplementor<?>) expression;
            int size = tupleExpr.size();
            ImmutableProp[] props = new ImmutableProp[size];
            ScalarProvider<Object, Object>[] scalarProviders = new ScalarProvider[size];
            boolean hasScalarProvider = false;
            for (int i = 0; i < size; i++) {
                Selection<?> expr = tupleExpr.get(i);
                if (expr instanceof PropExpression<?>) {
                    ImmutableProp prop = ((PropExpressionImplementor<?>)expr).getProp();
                    ScalarProvider<Object, Object> scalarProvider = sqlClient.getScalarProvider(prop);
                    if (scalarProvider != null) {
                        props[i] = prop;
                        scalarProviders[i] = scalarProvider;
                        hasScalarProvider = true;
                    }
                }
            }
            if (!hasScalarProvider) {
                return literals;
            }
            List<Object> newLiterals = new ArrayList<>(literals.size());
            for (Object literal : literals) {
                newLiterals.add(
                        ((TupleImplementor)literal).convert((value, index) -> {
                            if (value != null) {
                                ScalarProvider<Object, Object> scalarProvider = scalarProviders[index];
                                if (scalarProvider != null) {
                                    try {
                                        return scalarProvider.toSql(value);
                                    } catch (Exception ex) {
                                        throw new ExecutionException(
                                                "Cannot convert the tuple item[" +
                                                        "index" +
                                                        "] of prop \"" +
                                                        props[index] +
                                                        "\" by scalar provider \"" +
                                                        scalarProvider.getClass().getName() +
                                                        "\"",
                                                ex
                                        );
                                    }
                                }
                            }
                            return value;
                        })
                );
            }
            return newLiterals;
        } else {
            return literals;
        }
    }

    @SuppressWarnings({"unchecked", "rawtypes"})
    public static <T> Expression<T> any(T value) {
        if (value instanceof String) {
            return (Expression<T>) string((String)value);
        }
        if (value instanceof Number) {
            return (Expression<T>) number((Number & Comparable)value);
        }
        if (value instanceof Comparable<?>) {
            return (Expression<T>) comparable((Comparable)value);
        }
        if (value instanceof Expression<?>) {
            return (Expression<T>) value;
        }
        return new Any<>(value);
    }

    static class Any<T> extends AbstractExpression<T> {

        private final T value;

        // Single
        private ImmutableProp matchedProp;

        // Tuple
        private ImmutableProp[] matchedProps;

        public Any(T value) {
            if (value == null) {
                throw new IllegalArgumentException(
                        "The value of literal expression cannot be null." +
                                "Except for `eq` and `ne`, most SQL expressions cannot be constructed " +
                                "based on using null, in order to avoid this problem:\n" +
                                "- java users can\n" +
                                "   Change `whereIf(<cond>, <expression>)` to whereIf(<cond>, () -> <expression>)\n" +
                                "- kotlin users can\n" +
                                "   Change `if (value !== null) where(<expression>)` to `value?.let { where(<expression>) }`"
                );
            }
            this.value = value;
        }

        public T getValue() {
            return value;
        }

        @SuppressWarnings("unchecked")
        @Override
        public Class<T> getType() {
            return (Class<T>)value.getClass();
        }

        @Override
        public void accept(@NotNull AstVisitor visitor) {
        }

        @Override
        public void renderTo(@NotNull SqlBuilder builder) {
            Object finalValue;
            if (matchedProp != null) {
                ScalarProvider<Object, Object> scalarProvider = builder.getAstContext().getSqlClient().getScalarProvider(matchedProp);
                if (scalarProvider != null) {
                    try {
                        finalValue = scalarProvider.toSql(value);
                    } catch (Exception ex) {
                        throw new ExecutionException(
                                "Cannot convert the value \"" +
                                        value +
                                        "\" of prop \"" +
                                        matchedProp +
                                        "\" by the scalar provider \"" +
                                        scalarProvider.getClass().getName() +
                                        "\"",
                                ex
                        );
                    }
                } else {
                    finalValue = value;
                }
            } else if (matchedProps != null) {
                finalValue = ((TupleImplementor)value).convert((it, index) -> {
                    ImmutableProp prop = matchedProps[index];
                    ScalarProvider<Object, Object> scalarProvider =
                            builder.getAstContext().getSqlClient().getScalarProvider(prop);
                    if (scalarProvider != null) {
                        try {
                            return scalarProvider.toSql(it);
                        } catch (Exception ex) {
                            throw new ExecutionException(
                                    "Cannot convert the tuple item[" +
                                            index +
                                            "] of prop \"" +
                                            matchedProps[index] +
                                            "\" by the scalar provider \"" +
                                            scalarProvider.getClass().getName() +
                                            "\"",
                                    ex
                            );
                        }
                    }
                    return it;
                });
            } else {
                finalValue = value;
            }
            builder.variable(finalValue);
        }

        @Override
        protected boolean determineHasVirtualPredicate() {
            return false;
        }

        @Override
        protected Ast onResolveVirtualPredicate(AstContext ctx) {
            return this;
        }

        @Override
        public int precedence() {
            return 0;
        }

        public void setMatchedProp(ImmutableProp matchedProp) {
            if (this.matchedProp != null && this.matchedProp != matchedProp) {
                throw new IllegalStateException(
                        "The matched property of current literal expression has been configured, " +
                                "is the current literal expression is shared by difference parts of SQL DSL?"
                );
            }
            this.matchedProp = matchedProp;
        }

        public void setMatchedProps(ImmutableProp[] matchedProps) {
            if (this.matchedProps != null && this.matchedProps != matchedProps) {
                throw new IllegalStateException(
                        "The matched properties of current literal expression has been configured, " +
                                "is the current literal expression is shared by difference parts of SQL DSL?"
                );
            }
            this.matchedProps = matchedProps;
        }

        @Override
        public boolean equals(Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;
            Any<?> any = (Any<?>) o;
            return value.equals(any.value) && Objects.equals(matchedProp, any.matchedProp) && Arrays.equals(matchedProps, any.matchedProps);
        }

        @Override
        public int hashCode() {
            int result = Objects.hash(value, matchedProp);
            result = 31 * result + Arrays.hashCode(matchedProps);
            return result;
        }
    }

    private static class Str extends Any<String> implements StringExpressionImplementor {
        public Str(String value) {
            super(value);
        }
    }

    private static class Num<N extends Number & Comparable<N>> extends Any<N> implements NumericExpressionImplementor<N> {
        public Num(N value) {
            super(value);
        }
    }

    private static class Cmp<T extends Comparable<?>> extends Any<T> implements ComparableExpressionImplementor<T> {
        public Cmp(T value) {
            super(value);
        }
    }
}
