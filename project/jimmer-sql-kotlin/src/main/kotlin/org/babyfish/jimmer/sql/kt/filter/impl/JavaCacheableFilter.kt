package org.babyfish.jimmer.sql.kt.filter.impl

import org.babyfish.jimmer.sql.ast.table.Props
import org.babyfish.jimmer.sql.event.AssociationEvent
import org.babyfish.jimmer.sql.event.EntityEvent
import org.babyfish.jimmer.sql.filter.CacheableFilter
import org.babyfish.jimmer.sql.kt.filter.KCacheableFilter
import java.util.*

internal open class JavaCacheableFilter(
    ktFilter: KCacheableFilter<*>
) : JavaFilter(ktFilter), CacheableFilter<Props> {

    override fun getParameters(): SortedMap<String, Any>? =
        (kotlinFilter as KCacheableFilter<*>).getParameters()

    override fun isAffectedBy(e: EntityEvent<*>): Boolean =
        (kotlinFilter as KCacheableFilter<*>).isAffectedBy(e)

    override fun getAffectedSourceIds(e: EntityEvent<*>): Collection<*>? =
        (kotlinFilter as KCacheableFilter<*>).getAffectedSourceIds(e)

    override fun getAffectedSourceIds(e: AssociationEvent): Collection<*>? =
        (kotlinFilter as KCacheableFilter<*>).getAffectedSourceIds(e)
}