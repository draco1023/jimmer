package org.babyfish.jimmer.sql.kt.ast.mutation

import org.babyfish.jimmer.sql.kt.ast.query.KFilterable
import org.babyfish.jimmer.sql.kt.ast.table.KNonNullTableEx

interface KMutableDelete<E: Any> : KFilterable<E> {

    override val table: KNonNullTableEx<E>

    fun disableDissociation()
}