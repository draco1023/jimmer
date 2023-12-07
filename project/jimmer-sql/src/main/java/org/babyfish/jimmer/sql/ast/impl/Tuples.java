package org.babyfish.jimmer.sql.ast.impl;

import org.babyfish.jimmer.sql.ast.Selection;
import org.babyfish.jimmer.sql.ast.tuple.*;
import org.babyfish.jimmer.sql.runtime.SqlBuilder;
import org.jetbrains.annotations.NotNull;

import java.util.Objects;

public class Tuples {

    private Tuples() {}

    public static class Expr2<T1, T2>
            extends AbstractExpression<Tuple2<T1, T2>>
            implements TupleExpressionImplementor<Tuple2<T1, T2>> {

        private final Selection<T1> expr1;

        private final Selection<T2> expr2;

        public Expr2(
                Selection<T1> expr1,
                Selection<T2> expr2
        ) {
            this.expr1 = Objects.requireNonNull(expr1, "expr1 cannot be null");
            this.expr2 = Objects.requireNonNull(expr2, "expr2 cannot be null");
        }

        @SuppressWarnings("unchecked")
        @Override
        public Class<Tuple2<T1, T2>> getType() {
            return (Class<Tuple2<T1, T2>>)(Class<?>)Tuple2.class;
        }

        @Override
        public int precedence() {
            return 0;
        }

        @Override
        public void accept(@NotNull AstVisitor visitor) {
            ((Ast) expr1).accept(visitor);
            ((Ast) expr2).accept(visitor);
        }

        @Override
        public void renderTo(@NotNull SqlBuilder builder) {
            renderTo(builder, false);
        }

        @Override
        public void renderTo(@NotNull SqlBuilder builder, boolean ignoreBrackets) {
            if (!ignoreBrackets) {
                builder.enter(SqlBuilder.ScopeType.TUPLE);
            }
            renderChild((Ast) expr1, builder);
            builder.sql(", ");
            renderChild((Ast) expr2, builder);
            if (!ignoreBrackets) {
                builder.leave();
            }
        }

        @Override
        protected boolean determineHasVirtualPredicate() {
            return hasVirtualPredicate(expr1) ||
                    hasVirtualPredicate(expr2);
        }

        @Override
        protected Ast onResolveVirtualPredicate(AstContext ctx) {
            return new Tuples.Expr2<>(
                    ctx.resolveVirtualPredicate(expr1),
                    ctx.resolveVirtualPredicate(expr2)
            );
        }

        @Override
        public int size() {
            return 2;
        }

        @Override
        public Selection<?> get(int index) {
            switch (index) {
                case 0: return expr1;
                case 1: return expr2;
                default: throw new IllegalArgumentException(
                        "Index must between 0 and " + (size() - 1)
                );
            }
        }

        @Override
        public boolean equals(Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;
            Expr2<?, ?> expr21 = (Expr2<?, ?>) o;
            return expr1.equals(expr21.expr1) && expr2.equals(expr21.expr2);
        }

        @Override
        public int hashCode() {
            return Objects.hash(expr1, expr2);
        }
    }

    public static class Expr3<T1, T2, T3>
            extends AbstractExpression<Tuple3<T1, T2, T3>>
            implements TupleExpressionImplementor<Tuple3<T1, T2, T3>> {

        private final Selection<T1> expr1;

        private final Selection<T2> expr2;

        private final Selection<T3> expr3;

        public Expr3(
                Selection<T1> expr1,
                Selection<T2> expr2,
                Selection<T3> expr3
        ) {
            this.expr1 = Objects.requireNonNull(expr1, "expr1 cannot be null");
            this.expr2 = Objects.requireNonNull(expr2, "expr2 cannot be null");
            this.expr3 = Objects.requireNonNull(expr3, "expr3 cannot be null");
        }

        @SuppressWarnings("unchecked")
        @Override
        public Class<Tuple3<T1, T2, T3>> getType() {
            return (Class<Tuple3<T1, T2, T3>>)(Class<?>)Tuple3.class;
        }

        @Override
        public int precedence() {
            return 0;
        }

        @Override
        public void accept(@NotNull AstVisitor visitor) {
            ((Ast) expr1).accept(visitor);
            ((Ast) expr2).accept(visitor);
            ((Ast) expr3).accept(visitor);
        }

        @Override
        public void renderTo(@NotNull SqlBuilder builder) {
            renderTo(builder, false);
        }

        @Override
        public void renderTo(@NotNull SqlBuilder builder, boolean ignoreBrackets) {
            if (!ignoreBrackets) {
                builder.enter(SqlBuilder.ScopeType.TUPLE);
            }
            renderChild((Ast) expr1, builder);
            builder.sql(", ");
            renderChild((Ast) expr2, builder);
            builder.sql(", ");
            renderChild((Ast) expr3, builder);
            if (!ignoreBrackets) {
                builder.leave();
            }
        }

        @Override
        protected boolean determineHasVirtualPredicate() {
            return hasVirtualPredicate(expr1) ||
                    hasVirtualPredicate(expr2) ||
                    hasVirtualPredicate(expr3);
        }

        @Override
        protected Ast onResolveVirtualPredicate(AstContext ctx) {
            return new Tuples.Expr3<>(
                    ctx.resolveVirtualPredicate(expr1),
                    ctx.resolveVirtualPredicate(expr2),
                    ctx.resolveVirtualPredicate(expr3)
            );
        }

        @Override
        public int size() {
            return 3;
        }

        @Override
        public Selection<?> get(int index) {
            switch (index) {
                case 0: return expr1;
                case 1: return expr2;
                case 2: return expr3;
                default: throw new IllegalArgumentException(
                        "Index must between 0 and " + (size() - 1)
                );
            }
        }

        @Override
        public boolean equals(Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;
            Expr3<?, ?, ?> expr31 = (Expr3<?, ?, ?>) o;
            return expr1.equals(expr31.expr1) &&
                    expr2.equals(expr31.expr2) &&
                    expr3.equals(expr31.expr3);
        }

        @Override
        public int hashCode() {
            return Objects.hash(expr1, expr2, expr3);
        }
    }

    public static class Expr4<T1, T2, T3, T4>
            extends AbstractExpression<Tuple4<T1, T2, T3, T4>>
            implements TupleExpressionImplementor<Tuple4<T1, T2, T3, T4>>{

        private final Selection<T1> expr1;

        private final Selection<T2> expr2;

        private final Selection<T3> expr3;

        private final Selection<T4> expr4;

        public Expr4(
                Selection<T1> expr1,
                Selection<T2> expr2,
                Selection<T3> expr3,
                Selection<T4> expr4
        ) {
            this.expr1 = Objects.requireNonNull(expr1, "expr1 cannot be null");
            this.expr2 = Objects.requireNonNull(expr2, "expr2 cannot be null");
            this.expr3 = Objects.requireNonNull(expr3, "expr3 cannot be null");
            this.expr4 = Objects.requireNonNull(expr4, "expr4 cannot be null");
        }

        @SuppressWarnings("unchecked")
        @Override
        public Class<Tuple4<T1, T2, T3, T4>> getType() {
            return (Class<Tuple4<T1, T2, T3, T4>>)(Class<?>)Tuple4.class;
        }

        @Override
        public int precedence() {
            return 0;
        }

        @Override
        public void accept(@NotNull AstVisitor visitor) {
            ((Ast) expr1).accept(visitor);
            ((Ast) expr2).accept(visitor);
            ((Ast) expr3).accept(visitor);
            ((Ast) expr4).accept(visitor);
        }

        @Override
        public void renderTo(@NotNull SqlBuilder builder) {
            renderTo(builder, false);
        }

        @Override
        public void renderTo(@NotNull SqlBuilder builder, boolean ignoreBrackets) {
            if (!ignoreBrackets) {
                builder.enter(SqlBuilder.ScopeType.TUPLE);
            }
            renderChild((Ast) expr1, builder);
            builder.sql(", ");
            renderChild((Ast) expr2, builder);
            builder.sql(", ");
            renderChild((Ast) expr3, builder);
            builder.sql(", ");
            renderChild((Ast) expr4, builder);
            if (!ignoreBrackets) {
                builder.leave();
            }
        }

        @Override
        protected boolean determineHasVirtualPredicate() {
            return hasVirtualPredicate(expr1) ||
                    hasVirtualPredicate(expr2) ||
                    hasVirtualPredicate(expr3) ||
                    hasVirtualPredicate(expr4);
        }

        @Override
        protected Ast onResolveVirtualPredicate(AstContext ctx) {
            return new Tuples.Expr4<>(
                    ctx.resolveVirtualPredicate(expr1),
                    ctx.resolveVirtualPredicate(expr2),
                    ctx.resolveVirtualPredicate(expr3),
                    ctx.resolveVirtualPredicate(expr4)
            );
        }

        @Override
        public int size() {
            return 4;
        }

        @Override
        public Selection<?> get(int index) {
            switch (index) {
                case 0: return expr1;
                case 1: return expr2;
                case 2: return expr3;
                case 3: return expr4;
                default: throw new IllegalArgumentException(
                        "Index must between 0 and " + (size() - 1)
                );
            }
        }

        @Override
        public boolean equals(Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;
            Expr4<?, ?, ?, ?> expr41 = (Expr4<?, ?, ?, ?>) o;
            return expr1.equals(expr41.expr1) &&
                    expr2.equals(expr41.expr2) &&
                    expr3.equals(expr41.expr3) &&
                    expr4.equals(expr41.expr4);
        }

        @Override
        public int hashCode() {
            return Objects.hash(expr1, expr2, expr3, expr4);
        }
    }

    public static class Expr5<T1, T2, T3, T4, T5>
            extends AbstractExpression<Tuple5<T1, T2, T3, T4, T5>>
            implements TupleExpressionImplementor<Tuple5<T1, T2, T3, T4, T5>> {

        private final Selection<T1> expr1;

        private final Selection<T2> expr2;

        private final Selection<T3> expr3;

        private final Selection<T4> expr4;

        private final Selection<T5> expr5;

        public Expr5(
                Selection<T1> expr1,
                Selection<T2> expr2,
                Selection<T3> expr3,
                Selection<T4> expr4,
                Selection<T5> expr5
        ) {
            this.expr1 = Objects.requireNonNull(expr1, "expr1 cannot be null");
            this.expr2 = Objects.requireNonNull(expr2, "expr2 cannot be null");
            this.expr3 = Objects.requireNonNull(expr3, "expr3 cannot be null");
            this.expr4 = Objects.requireNonNull(expr4, "expr4 cannot be null");
            this.expr5 = Objects.requireNonNull(expr5, "expr5 cannot be null");
        }

        @SuppressWarnings("unchecked")
        @Override
        public Class<Tuple5<T1, T2, T3, T4, T5>> getType() {
            return (Class<Tuple5<T1, T2, T3, T4, T5>>)(Class<?>)Tuple5.class;
        }

        @Override
        public int precedence() {
            return 0;
        }

        @Override
        public void accept(@NotNull AstVisitor visitor) {
            ((Ast) expr1).accept(visitor);
            ((Ast) expr2).accept(visitor);
            ((Ast) expr3).accept(visitor);
            ((Ast) expr4).accept(visitor);
            ((Ast) expr5).accept(visitor);
        }

        @Override
        public void renderTo(@NotNull SqlBuilder builder) {
            renderTo(builder, false);
        }

        @Override
        public void renderTo(@NotNull SqlBuilder builder, boolean ignoreBrackets) {
            if (!ignoreBrackets) {
                builder.enter(SqlBuilder.ScopeType.TUPLE);
            }
            renderChild((Ast) expr1, builder);
            builder.sql(", ");
            renderChild((Ast) expr2, builder);
            builder.sql(", ");
            renderChild((Ast) expr3, builder);
            builder.sql(", ");
            renderChild((Ast) expr4, builder);
            builder.sql(", ");
            renderChild((Ast) expr5, builder);
            if (!ignoreBrackets) {
                builder.leave();
            }
        }

        @Override
        protected boolean determineHasVirtualPredicate() {
            return hasVirtualPredicate(expr1) ||
                    hasVirtualPredicate(expr2) ||
                    hasVirtualPredicate(expr3) ||
                    hasVirtualPredicate(expr4) ||
                    hasVirtualPredicate(expr5);
        }

        @Override
        protected Ast onResolveVirtualPredicate(AstContext ctx) {
            return new Tuples.Expr5<>(
                    ctx.resolveVirtualPredicate(expr1),
                    ctx.resolveVirtualPredicate(expr2),
                    ctx.resolveVirtualPredicate(expr3),
                    ctx.resolveVirtualPredicate(expr4),
                    ctx.resolveVirtualPredicate(expr5)
            );
        }

        @Override
        public int size() {
            return 5;
        }

        @Override
        public Selection<?> get(int index) {
            switch (index) {
                case 0: return expr1;
                case 1: return expr2;
                case 2: return expr3;
                case 3: return expr4;
                case 4: return expr5;
                default: throw new IllegalArgumentException(
                        "Index must between 0 and " + (size() - 1)
                );
            }
        }

        @Override
        public boolean equals(Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;
            Expr5<?, ?, ?, ?, ?> expr51 = (Expr5<?, ?, ?, ?, ?>) o;
            return expr1.equals(expr51.expr1) &&
                    expr2.equals(expr51.expr2) &&
                    expr3.equals(expr51.expr3) &&
                    expr4.equals(expr51.expr4) &&
                    expr5.equals(expr51.expr5);
        }

        @Override
        public int hashCode() {
            return Objects.hash(expr1, expr2, expr3, expr4, expr5);
        }
    }

    public static class Expr6<T1, T2, T3, T4, T5, T6>
            extends AbstractExpression<Tuple6<T1, T2, T3, T4, T5, T6>>
            implements TupleExpressionImplementor<Tuple6<T1, T2, T3, T4, T5, T6>> {

        private final Selection<T1> expr1;

        private final Selection<T2> expr2;

        private final Selection<T3> expr3;

        private final Selection<T4> expr4;

        private final Selection<T5> expr5;

        private final Selection<T6> expr6;

        public Expr6(
                Selection<T1> expr1,
                Selection<T2> expr2,
                Selection<T3> expr3,
                Selection<T4> expr4,
                Selection<T5> expr5,
                Selection<T6> expr6
        ) {
            this.expr1 = Objects.requireNonNull(expr1, "expr1 cannot be null");
            this.expr2 = Objects.requireNonNull(expr2, "expr2 cannot be null");
            this.expr3 = Objects.requireNonNull(expr3, "expr3 cannot be null");
            this.expr4 = Objects.requireNonNull(expr4, "expr4 cannot be null");
            this.expr5 = Objects.requireNonNull(expr5, "expr5 cannot be null");
            this.expr6 = Objects.requireNonNull(expr6, "expr6 cannot be null");
        }

        @SuppressWarnings("unchecked")
        @Override
        public Class<Tuple6<T1, T2, T3, T4, T5, T6>> getType() {
            return (Class<Tuple6<T1, T2, T3, T4, T5, T6>>)(Class<?>)Tuple6.class;
        }

        @Override
        public int precedence() {
            return 0;
        }

        @Override
        public void accept(@NotNull AstVisitor visitor) {
            ((Ast) expr1).accept(visitor);
            ((Ast) expr2).accept(visitor);
            ((Ast) expr3).accept(visitor);
            ((Ast) expr4).accept(visitor);
            ((Ast) expr5).accept(visitor);
            ((Ast) expr6).accept(visitor);
        }

        @Override
        public void renderTo(@NotNull SqlBuilder builder) {
            renderTo(builder, false);
        }

        @Override
        public void renderTo(@NotNull SqlBuilder builder, boolean ignoreBrackets) {
            if (!ignoreBrackets) {
                builder.enter(SqlBuilder.ScopeType.TUPLE);
            }
            renderChild((Ast) expr1, builder);
            builder.sql(", ");
            renderChild((Ast) expr2, builder);
            builder.sql(", ");
            renderChild((Ast) expr3, builder);
            builder.sql(", ");
            renderChild((Ast) expr4, builder);
            builder.sql(", ");
            renderChild((Ast) expr5, builder);
            builder.sql(", ");
            renderChild((Ast) expr6, builder);
            if (!ignoreBrackets) {
                builder.leave();
            }
        }

        @Override
        protected boolean determineHasVirtualPredicate() {
            return hasVirtualPredicate(expr1) ||
                    hasVirtualPredicate(expr2) ||
                    hasVirtualPredicate(expr3) ||
                    hasVirtualPredicate(expr4) ||
                    hasVirtualPredicate(expr5) ||
                    hasVirtualPredicate(expr6);
        }

        @Override
        protected Ast onResolveVirtualPredicate(AstContext ctx) {
            return new Tuples.Expr6<>(
                    ctx.resolveVirtualPredicate(expr1),
                    ctx.resolveVirtualPredicate(expr2),
                    ctx.resolveVirtualPredicate(expr3),
                    ctx.resolveVirtualPredicate(expr4),
                    ctx.resolveVirtualPredicate(expr5),
                    ctx.resolveVirtualPredicate(expr6)
            );
        }

        @Override
        public int size() {
            return 6;
        }

        @Override
        public Selection<?> get(int index) {
            switch (index) {
                case 0: return expr1;
                case 1: return expr2;
                case 2: return expr3;
                case 3: return expr4;
                case 4: return expr5;
                case 5: return expr6;
                default: throw new IllegalArgumentException(
                        "Index must between 0 and " + (size() - 1)
                );
            }
        }

        @Override
        public boolean equals(Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;
            Expr6<?, ?, ?, ?, ?, ?> expr61 = (Expr6<?, ?, ?, ?, ?, ?>) o;
            return expr1.equals(expr61.expr1) &&
                    expr2.equals(expr61.expr2) &&
                    expr3.equals(expr61.expr3) &&
                    expr4.equals(expr61.expr4) &&
                    expr5.equals(expr61.expr5) &&
                    expr6.equals(expr61.expr6);
        }

        @Override
        public int hashCode() {
            return Objects.hash(expr1, expr2, expr3, expr4, expr5, expr6);
        }
    }

    public static class Expr7<T1, T2, T3, T4, T5, T6, T7>
            extends AbstractExpression<Tuple7<T1, T2, T3, T4, T5, T6, T7>>
            implements TupleExpressionImplementor<Tuple7<T1, T2, T3, T4, T5, T6, T7>> {

        private final Selection<T1> expr1;

        private final Selection<T2> expr2;

        private final Selection<T3> expr3;

        private final Selection<T4> expr4;

        private final Selection<T5> expr5;

        private final Selection<T6> expr6;

        private final Selection<T7> expr7;

        public Expr7(
                Selection<T1> expr1,
                Selection<T2> expr2,
                Selection<T3> expr3,
                Selection<T4> expr4,
                Selection<T5> expr5,
                Selection<T6> expr6,
                Selection<T7> expr7
        ) {
            this.expr1 = Objects.requireNonNull(expr1, "expr1 cannot be null");
            this.expr2 = Objects.requireNonNull(expr2, "expr2 cannot be null");
            this.expr3 = Objects.requireNonNull(expr3, "expr3 cannot be null");
            this.expr4 = Objects.requireNonNull(expr4, "expr4 cannot be null");
            this.expr5 = Objects.requireNonNull(expr5, "expr5 cannot be null");
            this.expr6 = Objects.requireNonNull(expr6, "expr6 cannot be null");
            this.expr7 = Objects.requireNonNull(expr7, "expr7 cannot be null");
        }

        @SuppressWarnings("unchecked")
        @Override
        public Class<Tuple7<T1, T2, T3, T4, T5, T6, T7>> getType() {
            return (Class<Tuple7<T1, T2, T3, T4, T5, T6, T7>>)(Class<?>)Tuple7.class;
        }

        @Override
        public int precedence() {
            return 0;
        }

        @Override
        public void accept(@NotNull AstVisitor visitor) {
            ((Ast) expr1).accept(visitor);
            ((Ast) expr2).accept(visitor);
            ((Ast) expr3).accept(visitor);
            ((Ast) expr4).accept(visitor);
            ((Ast) expr5).accept(visitor);
            ((Ast) expr6).accept(visitor);
            ((Ast) expr7).accept(visitor);
        }

        @Override
        public void renderTo(@NotNull SqlBuilder builder) {
            renderTo(builder, false);
        }

        @Override
        public void renderTo(@NotNull SqlBuilder builder, boolean ignoreBrackets) {
            if (!ignoreBrackets) {
                builder.enter(SqlBuilder.ScopeType.TUPLE);
            }
            renderChild((Ast) expr1, builder);
            builder.sql(", ");
            renderChild((Ast) expr2, builder);
            builder.sql(", ");
            renderChild((Ast) expr3, builder);
            builder.sql(", ");
            renderChild((Ast) expr4, builder);
            builder.sql(", ");
            renderChild((Ast) expr5, builder);
            builder.sql(", ");
            renderChild((Ast) expr6, builder);
            builder.sql(", ");
            renderChild((Ast) expr7, builder);
            if (!ignoreBrackets) {
                builder.leave();
            }
        }

        @Override
        protected boolean determineHasVirtualPredicate() {
            return hasVirtualPredicate(expr1) ||
                    hasVirtualPredicate(expr2) ||
                    hasVirtualPredicate(expr3) ||
                    hasVirtualPredicate(expr4) ||
                    hasVirtualPredicate(expr5) ||
                    hasVirtualPredicate(expr6) ||
                    hasVirtualPredicate(expr7);
        }

        @Override
        protected Ast onResolveVirtualPredicate(AstContext ctx) {
            return new Tuples.Expr7<>(
                    ctx.resolveVirtualPredicate(expr1),
                    ctx.resolveVirtualPredicate(expr2),
                    ctx.resolveVirtualPredicate(expr3),
                    ctx.resolveVirtualPredicate(expr4),
                    ctx.resolveVirtualPredicate(expr5),
                    ctx.resolveVirtualPredicate(expr6),
                    ctx.resolveVirtualPredicate(expr7)
            );
        }

        @Override
        public int size() {
            return 7;
        }

        @Override
        public Selection<?> get(int index) {
            switch (index) {
                case 0: return expr1;
                case 1: return expr2;
                case 2: return expr3;
                case 3: return expr4;
                case 4: return expr5;
                case 5: return expr6;
                case 6: return expr7;
                default: throw new IllegalArgumentException(
                        "Index must between 0 and " + (size() - 1)
                );
            }
        }

        @Override
        public boolean equals(Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;
            Expr7<?, ?, ?, ?, ?, ?, ?> expr71 = (Expr7<?, ?, ?, ?, ?, ?, ?>) o;
            return expr1.equals(expr71.expr1) &&
                    expr2.equals(expr71.expr2) &&
                    expr3.equals(expr71.expr3) &&
                    expr4.equals(expr71.expr4) &&
                    expr5.equals(expr71.expr5) &&
                    expr6.equals(expr71.expr6) &&
                    expr7.equals(expr71.expr7);
        }

        @Override
        public int hashCode() {
            return Objects.hash(expr1, expr2, expr3, expr4, expr5, expr6, expr7);
        }
    }

    public static class Expr8<T1, T2, T3, T4, T5, T6, T7, T8>
            extends AbstractExpression<Tuple8<T1, T2, T3, T4, T5, T6, T7, T8>>
            implements TupleExpressionImplementor<Tuple8<T1, T2, T3, T4, T5, T6, T7, T8>> {

        private final Selection<T1> expr1;

        private final Selection<T2> expr2;

        private final Selection<T3> expr3;

        private final Selection<T4> expr4;

        private final Selection<T5> expr5;

        private final Selection<T6> expr6;

        private final Selection<T7> expr7;

        private final Selection<T8> expr8;

        public Expr8(
                Selection<T1> expr1,
                Selection<T2> expr2,
                Selection<T3> expr3,
                Selection<T4> expr4,
                Selection<T5> expr5,
                Selection<T6> expr6,
                Selection<T7> expr7,
                Selection<T8> expr8
        ) {
            this.expr1 = Objects.requireNonNull(expr1, "expr1 cannot be null");
            this.expr2 = Objects.requireNonNull(expr2, "expr2 cannot be null");
            this.expr3 = Objects.requireNonNull(expr3, "expr3 cannot be null");
            this.expr4 = Objects.requireNonNull(expr4, "expr4 cannot be null");
            this.expr5 = Objects.requireNonNull(expr5, "expr5 cannot be null");
            this.expr6 = Objects.requireNonNull(expr6, "expr6 cannot be null");
            this.expr7 = Objects.requireNonNull(expr7, "expr7 cannot be null");
            this.expr8 = Objects.requireNonNull(expr8, "expr8 cannot be null");
        }

        @SuppressWarnings("unchecked")
        @Override
        public Class<Tuple8<T1, T2, T3, T4, T5, T6, T7, T8>> getType() {
            return (Class<Tuple8<T1, T2, T3, T4, T5, T6, T7, T8>>)(Class<?>)Tuple8.class;
        }

        @Override
        public int precedence() {
            return 0;
        }

        @Override
        public void accept(@NotNull AstVisitor visitor) {
            ((Ast) expr1).accept(visitor);
            ((Ast) expr2).accept(visitor);
            ((Ast) expr3).accept(visitor);
            ((Ast) expr4).accept(visitor);
            ((Ast) expr5).accept(visitor);
            ((Ast) expr6).accept(visitor);
            ((Ast) expr7).accept(visitor);
            ((Ast) expr8).accept(visitor);
        }

        @Override
        public void renderTo(@NotNull SqlBuilder builder) {
            renderTo(builder, false);
        }

        @Override
        public void renderTo(@NotNull SqlBuilder builder, boolean ignoreBrackets) {
            if (!ignoreBrackets) {
                builder.enter(SqlBuilder.ScopeType.TUPLE);
            }
            renderChild((Ast) expr1, builder);
            builder.sql(", ");
            renderChild((Ast) expr2, builder);
            builder.sql(", ");
            renderChild((Ast) expr3, builder);
            builder.sql(", ");
            renderChild((Ast) expr4, builder);
            builder.sql(", ");
            renderChild((Ast) expr5, builder);
            builder.sql(", ");
            renderChild((Ast) expr6, builder);
            builder.sql(", ");
            renderChild((Ast) expr7, builder);
            builder.sql(", ");
            renderChild((Ast) expr8, builder);
            if (!ignoreBrackets) {
                builder.leave();
            }
        }

        @Override
        protected boolean determineHasVirtualPredicate() {
            return hasVirtualPredicate(expr1) ||
                    hasVirtualPredicate(expr2) ||
                    hasVirtualPredicate(expr3) ||
                    hasVirtualPredicate(expr4) ||
                    hasVirtualPredicate(expr5) ||
                    hasVirtualPredicate(expr6) ||
                    hasVirtualPredicate(expr7) ||
                    hasVirtualPredicate(expr8);
        }

        @Override
        protected Ast onResolveVirtualPredicate(AstContext ctx) {
            return new Tuples.Expr8<>(
                    ctx.resolveVirtualPredicate(expr1),
                    ctx.resolveVirtualPredicate(expr2),
                    ctx.resolveVirtualPredicate(expr3),
                    ctx.resolveVirtualPredicate(expr4),
                    ctx.resolveVirtualPredicate(expr5),
                    ctx.resolveVirtualPredicate(expr6),
                    ctx.resolveVirtualPredicate(expr7),
                    ctx.resolveVirtualPredicate(expr8)
            );
        }

        @Override
        public int size() {
            return 8;
        }

        @Override
        public Selection<?> get(int index) {
            switch (index) {
                case 0: return expr1;
                case 1: return expr2;
                case 2: return expr3;
                case 3: return expr4;
                case 4: return expr5;
                case 5: return expr6;
                case 6: return expr7;
                case 7: return expr8;
                default: throw new IllegalArgumentException(
                        "Index must between 0 and " + (size() - 1)
                );
            }
        }

        @Override
        public boolean equals(Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;
            Expr8<?, ?, ?, ?, ?, ?, ?, ?> expr81 = (Expr8<?, ?, ?, ?, ?, ?, ?, ?>) o;
            return expr1.equals(expr81.expr1) &&
                    expr2.equals(expr81.expr2) &&
                    expr3.equals(expr81.expr3) &&
                    expr4.equals(expr81.expr4) &&
                    expr5.equals(expr81.expr5) &&
                    expr6.equals(expr81.expr6) &&
                    expr7.equals(expr81.expr7) &&
                    expr8.equals(expr81.expr8);
        }

        @Override
        public int hashCode() {
            return Objects.hash(expr1, expr2, expr3, expr4, expr5, expr6, expr7, expr8);
        }
    }

    public static class Expr9<T1, T2, T3, T4, T5, T6, T7, T8, T9>
            extends AbstractExpression<Tuple9<T1, T2, T3, T4, T5, T6, T7, T8, T9>>
            implements TupleExpressionImplementor<Tuple9<T1, T2, T3, T4, T5, T6, T7, T8, T9>> {

        private final Selection<T1> expr1;

        private final Selection<T2> expr2;

        private final Selection<T3> expr3;

        private final Selection<T4> expr4;

        private final Selection<T5> expr5;

        private final Selection<T6> expr6;

        private final Selection<T7> expr7;

        private final Selection<T8> expr8;

        private final Selection<T9> expr9;

        public Expr9(
                Selection<T1> expr1,
                Selection<T2> expr2,
                Selection<T3> expr3,
                Selection<T4> expr4,
                Selection<T5> expr5,
                Selection<T6> expr6,
                Selection<T7> expr7,
                Selection<T8> expr8,
                Selection<T9> expr9
        ) {
            this.expr1 = Objects.requireNonNull(expr1, "expr1 cannot be null");
            this.expr2 = Objects.requireNonNull(expr2, "expr2 cannot be null");
            this.expr3 = Objects.requireNonNull(expr3, "expr3 cannot be null");
            this.expr4 = Objects.requireNonNull(expr4, "expr4 cannot be null");
            this.expr5 = Objects.requireNonNull(expr5, "expr5 cannot be null");
            this.expr6 = Objects.requireNonNull(expr6, "expr6 cannot be null");
            this.expr7 = Objects.requireNonNull(expr7, "expr7 cannot be null");
            this.expr8 = Objects.requireNonNull(expr8, "expr8 cannot be null");
            this.expr9 = Objects.requireNonNull(expr9, "expr9 cannot be null");
        }

        @SuppressWarnings("unchecked")
        @Override
        public Class<Tuple9<T1, T2, T3, T4, T5, T6, T7, T8, T9>> getType() {
            return (Class<Tuple9<T1, T2, T3, T4, T5, T6, T7, T8, T9>>)(Class<?>)Tuple9.class;
        }

        @Override
        public int precedence() {
            return 0;
        }

        @Override
        public void accept(@NotNull AstVisitor visitor) {
            ((Ast) expr1).accept(visitor);
            ((Ast) expr2).accept(visitor);
            ((Ast) expr3).accept(visitor);
            ((Ast) expr4).accept(visitor);
            ((Ast) expr5).accept(visitor);
            ((Ast) expr6).accept(visitor);
            ((Ast) expr7).accept(visitor);
            ((Ast) expr8).accept(visitor);
            ((Ast) expr9).accept(visitor);
        }

        @Override
        public void renderTo(@NotNull SqlBuilder builder) {
            renderTo(builder, false);
        }

        @Override
        public void renderTo(@NotNull SqlBuilder builder, boolean ignoreBrackets) {
            if (!ignoreBrackets) {
                builder.enter(SqlBuilder.ScopeType.TUPLE);
            }
            renderChild((Ast) expr1, builder);
            builder.sql(", ");
            renderChild((Ast) expr2, builder);
            builder.sql(", ");
            renderChild((Ast) expr3, builder);
            builder.sql(", ");
            renderChild((Ast) expr4, builder);
            builder.sql(", ");
            renderChild((Ast) expr5, builder);
            builder.sql(", ");
            renderChild((Ast) expr6, builder);
            builder.sql(", ");
            renderChild((Ast) expr7, builder);
            builder.sql(", ");
            renderChild((Ast) expr8, builder);
            builder.sql(", ");
            renderChild((Ast) expr9, builder);
            if (!ignoreBrackets) {
                builder.leave();
            }
        }

        @Override
        protected boolean determineHasVirtualPredicate() {
            return hasVirtualPredicate(expr1) ||
                    hasVirtualPredicate(expr2) ||
                    hasVirtualPredicate(expr3) ||
                    hasVirtualPredicate(expr4) ||
                    hasVirtualPredicate(expr5) ||
                    hasVirtualPredicate(expr6) ||
                    hasVirtualPredicate(expr7) ||
                    hasVirtualPredicate(expr8) ||
                    hasVirtualPredicate(expr9);
        }

        @Override
        protected Ast onResolveVirtualPredicate(AstContext ctx) {
            return new Tuples.Expr9<>(
                    ctx.resolveVirtualPredicate(expr1),
                    ctx.resolveVirtualPredicate(expr2),
                    ctx.resolveVirtualPredicate(expr3),
                    ctx.resolveVirtualPredicate(expr4),
                    ctx.resolveVirtualPredicate(expr5),
                    ctx.resolveVirtualPredicate(expr6),
                    ctx.resolveVirtualPredicate(expr7),
                    ctx.resolveVirtualPredicate(expr8),
                    ctx.resolveVirtualPredicate(expr9)
            );
        }

        @Override
        public int size() {
            return 9;
        }

        @Override
        public Selection<?> get(int index) {
            switch (index) {
                case 0: return expr1;
                case 1: return expr2;
                case 2: return expr3;
                case 3: return expr4;
                case 4: return expr5;
                case 5: return expr6;
                case 6: return expr7;
                case 7: return expr8;
                case 8: return expr9;
                default: throw new IllegalArgumentException(
                        "Index must between 0 and " + (size() - 1)
                );
            }
        }

        @Override
        public boolean equals(Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;
            Expr9<?, ?, ?, ?, ?, ?, ?, ?, ?> expr91 = (Expr9<?, ?, ?, ?, ?, ?, ?, ?, ?>) o;
            return expr1.equals(expr91.expr1) &&
                    expr2.equals(expr91.expr2) &&
                    expr3.equals(expr91.expr3) &&
                    expr4.equals(expr91.expr4) &&
                    expr5.equals(expr91.expr5) &&
                    expr6.equals(expr91.expr6) &&
                    expr7.equals(expr91.expr7) &&
                    expr8.equals(expr91.expr8) &&
                    expr9.equals(expr91.expr9);
        }

        @Override
        public int hashCode() {
            return Objects.hash(expr1, expr2, expr3, expr4, expr5, expr6, expr7, expr8, expr9);
        }
    }
}
