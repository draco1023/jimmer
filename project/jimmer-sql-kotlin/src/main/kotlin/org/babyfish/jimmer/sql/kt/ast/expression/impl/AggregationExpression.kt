package org.babyfish.jimmer.sql.kt.ast.expression.impl

import org.babyfish.jimmer.sql.ast.impl.Ast
import org.babyfish.jimmer.sql.ast.impl.AstVisitor
import org.babyfish.jimmer.sql.ast.impl.ExpressionImplementor
import org.babyfish.jimmer.sql.ast.impl.TupleExpressionImplementor
import org.babyfish.jimmer.sql.ast.table.spi.PropExpressionImplementor
import org.babyfish.jimmer.sql.kt.ast.expression.KExpression
import org.babyfish.jimmer.sql.kt.ast.expression.KNonNullExpression
import org.babyfish.jimmer.sql.kt.ast.expression.KNullableExpression
import org.babyfish.jimmer.sql.kt.ast.expression.KPropExpression
import org.babyfish.jimmer.sql.runtime.JSqlClientImplementor
import org.babyfish.jimmer.sql.runtime.SqlBuilder

internal abstract class AggregationExpression<T: Any>(
    protected val expression: KExpression<*>
) : AbstractKExpression<T>() {

    override fun accept(visitor: AstVisitor) {
        (expression as Ast).accept(visitor)
    }

    final override fun renderTo(builder: SqlBuilder) {

        validate(builder.astContext.sqlClient)

        builder.sql(functionName())
        builder.sql("(")
        prefix()?.let {
            builder.sql(it).sql(" ")
        }
        renderExpression(builder)
        builder.sql(")")
    }

    private fun validate(sqlClient: JSqlClientImplementor) {

        if (sqlClient.dialect.isTupleCountSupported) {
            if (expression is KPropExpression<*>) {
                val propExpr = expression as PropExpressionImplementor<*>
                val partial = propExpr.getPartial(sqlClient.metadataStrategy)
                if (partial !== null && partial.size() > 1) {
                    throw IllegalArgumentException(
                        "The `count` function does not support embedded property " +
                            "because multiple columns `count` is not supported by current dialect \"" +
                            sqlClient.getDialect().javaClass.getName() +
                            "\""
                    )
                }
            } else if (expression is TupleExpressionImplementor<*>) {
                throw java.lang.IllegalArgumentException(
                    "The `count` function does not support tuple expression " +
                        "because multiple columns `count` is not supported by current dialect \"" +
                        sqlClient.getDialect().javaClass.getName() +
                        "\""
                )
            }
        }
    }

    protected open fun renderExpression(builder: SqlBuilder) {
        renderChild((expression as Ast), builder)
    }

    override fun precedence(): Int = 0

    protected abstract fun functionName(): String

    protected open fun prefix(): String? = null

    class Count(
        expression: KExpression<*>
    ): AggregationExpression<Long>(expression), KNonNullExpression<Long> {

        override fun functionName(): String = "count"

        override fun getType(): Class<Long> = Long::class.java
    }

    class CountDistinct(
        expression: KExpression<*>
    ): AggregationExpression<Long>(expression), KNonNullExpression<Long> {

        override fun functionName(): String = "count"

        override fun getType(): Class<Long> = Long::class.java

        override fun prefix(): String = "distinct"

        override fun renderExpression(builder: SqlBuilder) {
            if (builder.astContext.sqlClient.getDialect().isTupleCountSupported) {
                if (expression is PropExpressionImplementor<*>) {
                    (expression as PropExpressionImplementor<*>).renderTo(builder, true)
                    return
                }
                if (expression is TupleExpressionImplementor<*>) {
                    (expression as TupleExpressionImplementor<*>).renderTo(builder, true)
                    return
                }
            }
            super.renderExpression(builder)
        }
    }

    class Max<T: Comparable<*>>(
        expression: KExpression<T>
    ): AggregationExpression<T>(expression), KNullableExpression<T> {

        override fun functionName(): String = "max"

        @Suppress("UNCHECKED_CAST")
        override fun getType(): Class<T> =
            (expression as ExpressionImplementor<T>).type
    }

    class Min<T: Comparable<*>>(
        expression: KExpression<T>
    ): AggregationExpression<T>(expression), KNullableExpression<T> {

        override fun functionName(): String = "min"

        @Suppress("UNCHECKED_CAST")
        override fun getType(): Class<T> =
            (expression as ExpressionImplementor<T>).type
    }

    class Sum<T: Number>(
        expression: KExpression<T>
    ): AggregationExpression<T>(expression), KNullableExpression<T> {

        override fun functionName(): String = "sum"

        @Suppress("UNCHECKED_CAST")
        override fun getType(): Class<T> =
            (expression as ExpressionImplementor<T>).type
    }

    class Avg<T: Number>(
        expression: KExpression<T>
    ): AggregationExpression<T>(expression), KNullableExpression<T> {

        override fun functionName(): String = "avg"

        @Suppress("UNCHECKED_CAST")
        override fun getType(): Class<T> =
            (expression as ExpressionImplementor<T>).type
    }
}