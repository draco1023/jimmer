package org.babyfish.jimmer.sql.kt.model.hr

import org.babyfish.jimmer.jackson.JsonConverter
import org.babyfish.jimmer.jackson.LongToStringConverter
import org.babyfish.jimmer.sql.Entity
import org.babyfish.jimmer.sql.Id
import org.babyfish.jimmer.sql.ManyToOne

@Entity
interface Employee {

    @Id
    @JsonConverter(LongToStringConverter::class)
    val id: Long

    val name: String

    @ManyToOne
    val department: Department?
}