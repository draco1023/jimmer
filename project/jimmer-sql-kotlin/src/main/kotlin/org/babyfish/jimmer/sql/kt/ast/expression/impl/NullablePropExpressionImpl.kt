package org.babyfish.jimmer.sql.kt.ast.expression.impl

import org.babyfish.jimmer.meta.ImmutableProp
import org.babyfish.jimmer.sql.ast.PropExpression
import org.babyfish.jimmer.sql.ast.impl.Ast
import org.babyfish.jimmer.sql.ast.impl.AstContext
import org.babyfish.jimmer.sql.ast.impl.AstVisitor
import org.babyfish.jimmer.sql.ast.impl.PropExpressionImpl
import org.babyfish.jimmer.sql.ast.table.Table
import org.babyfish.jimmer.sql.ast.table.spi.PropExpressionImplementor
import org.babyfish.jimmer.sql.kt.ast.expression.KNullablePropExpression
import org.babyfish.jimmer.sql.kt.ast.expression.spi.KNullablePropExpressionImplementor
import org.babyfish.jimmer.sql.meta.EmbeddedColumns
import org.babyfish.jimmer.sql.meta.MetadataStrategy
import org.babyfish.jimmer.sql.runtime.SqlBuilder
import kotlin.reflect.KProperty1

internal class NullablePropExpressionImpl<T: Any>(
    internal var javaPropExpression: PropExpressionImpl<T>
) : AbstractKExpression<T>(), KNullablePropExpressionImplementor<T>, PropExpressionImplementor<T> {

    override fun getType(): Class<T> =
        javaPropExpression.type

    override fun <X : Any> get(prop: KProperty1<T, X>): KNullablePropExpression<X> =
        (javaPropExpression as? PropExpression.Embedded<*>)?.let {
            NullablePropExpressionImpl(it.get(prop.name))
        } ?: error("The current property $javaPropExpression is not embedded property")

    override fun precedence(): Int =
        javaPropExpression.precedence()

    override fun accept(visitor: AstVisitor) {
        javaPropExpression.accept(visitor)
    }

    override fun renderTo(builder: SqlBuilder) {
        javaPropExpression.renderTo(builder)
    }

    override fun renderTo(builder: SqlBuilder, ignoreBrackets: Boolean) {
        javaPropExpression.renderTo(builder, ignoreBrackets)
    }

    override fun determineHasVirtualPredicate(): Boolean =
        hasVirtualPredicate(javaPropExpression)

    override fun onResolveVirtualPredicate(ctx: AstContext): Ast? {
        javaPropExpression = ctx.resolveVirtualPredicate(javaPropExpression)
        return this
    }

    override fun getTable(): Table<*> =
        javaPropExpression.table

    override fun getProp(): ImmutableProp =
        javaPropExpression.prop

    override fun isRawId(): Boolean =
        javaPropExpression.isRawId

    override fun getPartial(strategy: MetadataStrategy): EmbeddedColumns.Partial? =
        javaPropExpression.getPartial(strategy)
}