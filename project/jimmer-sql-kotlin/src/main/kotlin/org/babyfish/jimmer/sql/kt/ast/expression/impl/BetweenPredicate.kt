package org.babyfish.jimmer.sql.kt.ast.expression.impl

import org.babyfish.jimmer.sql.ast.impl.Ast
import org.babyfish.jimmer.sql.ast.impl.AstContext
import org.babyfish.jimmer.sql.ast.impl.AstVisitor
import org.babyfish.jimmer.sql.kt.ast.expression.KExpression
import org.babyfish.jimmer.sql.kt.ast.expression.KNonNullExpression
import org.babyfish.jimmer.sql.runtime.SqlBuilder
import kotlin.math.exp

internal class BetweenPredicate<T: Comparable<*>>(
    private val negative: Boolean,
    private var expression: KExpression<T>,
    private var min: KNonNullExpression<T>,
    private var max: KNonNullExpression<T>,
): AbstractKPredicate() {

    init {
        LiteralExpression.bind(min, expression)
        LiteralExpression.bind(max, expression)
    }

    override fun not(): AbstractKPredicate =
        BetweenPredicate(!negative, expression, min, max)

    override fun precedence(): Int = 0

    override fun accept(visitor: AstVisitor) {
        (expression as Ast).accept(visitor)
        (min as Ast).accept(visitor)
        (max as Ast).accept(visitor)
    }

    override fun renderTo(builder: SqlBuilder) {
        renderChild(expression as Ast, builder)
        builder.sql(if (negative) " not between " else " between ")
        renderChild(min as Ast, builder)
        builder.sql(" and ")
        renderChild(max as Ast, builder)
    }

    override fun determineHasVirtualPredicate(): Boolean =
        hasVirtualPredicate(expression) ||
            hasVirtualPredicate(min) ||
            hasVirtualPredicate(max)

    override fun onResolveVirtualPredicate(ctx: AstContext): Ast {
        expression = ctx.resolveVirtualPredicate(expression)
        min = ctx.resolveVirtualPredicate(min)
        max = ctx.resolveVirtualPredicate(max)
        return this
    }
}