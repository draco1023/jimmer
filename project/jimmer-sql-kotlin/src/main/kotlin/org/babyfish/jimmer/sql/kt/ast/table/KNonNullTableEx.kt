package org.babyfish.jimmer.sql.kt.ast.table

import kotlin.reflect.KClass

interface KNonNullTableEx<E: Any> : KNonNullTable<E>, KTableEx<E> {

    override fun <X : Any> weakJoin(weakJoinType: KClass<out KWeakJoin<E, X>>): KNonNullTableEx<X>
}
