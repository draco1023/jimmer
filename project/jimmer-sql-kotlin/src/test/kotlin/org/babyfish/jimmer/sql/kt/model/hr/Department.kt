package org.babyfish.jimmer.sql.kt.model.hr

import org.babyfish.jimmer.jackson.JsonConverter
import org.babyfish.jimmer.jackson.LongToStringConverter
import org.babyfish.jimmer.sql.*
import java.time.LocalDateTime

@Entity
interface Department {

    @Id
    @JsonConverter(LongToStringConverter::class)
    val id: Long

    val name: String

    @LogicalDeleted("now")
    val deletedTime: LocalDateTime?

    @OneToMany(mappedBy = "department")
    val employees: List<Employee>

    @IdView("employees")
    val employeeIds: List<Long>
}