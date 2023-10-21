package org.babyfish.jimmer.sql.kt.query

import org.babyfish.jimmer.sql.kt.KSqlClient
import org.babyfish.jimmer.sql.kt.ast.expression.between
import org.babyfish.jimmer.sql.kt.common.AbstractQueryTest
import org.babyfish.jimmer.sql.kt.model.inheritance.Role
import org.babyfish.jimmer.sql.kt.model.inheritance.createdTime
import org.babyfish.jimmer.sql.kt.model.inheritance.fetchBy
import org.babyfish.jimmer.sql.runtime.LogicalDeletedBehavior
import java.time.LocalDateTime
import kotlin.test.Test

class InheritanceQueryTest : AbstractQueryTest() {

    private val _sqlClient: KSqlClient = sqlClient {
        setLogicalDeletedBehavior(LogicalDeletedBehavior.IGNORED)
    }

    @Test
    fun testFetchLonely() {
        executeAndExpect(
            _sqlClient.createQuery(Role::class) {
                select(
                    table.fetchBy {
                        name()
                    }
                )
            }
        ) {
            sql(
                """select tb_1_.ID, tb_1_.NAME from ROLE tb_1_"""
            )
            rows(
                """[{"name":"r_1","id":100},{"name":"r_2","id":200}]"""
            )
        }
    }

    @Test
    fun testFetchIdOnlyChildren() {
        executeAndExpect(
            _sqlClient.createQuery(Role::class) {
                select(
                    table.fetchBy {
                        name()
                        permissions()
                    }
                )
            }
        ) {
            sql(
                """select tb_1_.ID, tb_1_.NAME from ROLE tb_1_"""
            )
            statement(1).sql(
                """select tb_1_.ROLE_ID, tb_1_.ID 
                    |from PERMISSION tb_1_ 
                    |where tb_1_.ROLE_ID in (?, ?)""".trimMargin()
            )
            rows(
                """[
                    |--->{"name":"r_1","permissions":[{"id":1000},{"id":2000}],"id":100},
                    |--->{"name":"r_2","permissions":[{"id":3000},{"id":4000}],"id":200}
                    |]""".trimMargin()
            )
        }
    }

    @Test
    fun testFetchChildren() {
        executeAndExpect(
            _sqlClient.createQuery(Role::class) {
                select(
                    table.fetchBy {
                        name()
                        permissions {
                            name()
                        }
                    }
                )
            }
        ) {
            sql(
                """select tb_1_.ID, tb_1_.NAME from ROLE tb_1_"""
            )
            statement(1).sql(
                """select tb_1_.ROLE_ID, tb_1_.ID, tb_1_.NAME 
                    |from PERMISSION tb_1_ 
                    |where tb_1_.ROLE_ID in (?, ?)""".trimMargin()
            )
            rows(
                """[
                    |--->{
                    |--->--->"name":"r_1",
                    |--->--->"permissions":[
                    |--->--->--->{"name":"p_1","id":1000},
                    |--->--->--->{"name":"p_2","id":2000}
                    |--->--->],
                    |--->--->"id":100
                    |--->},{
                    |--->--->"name":"r_2",
                    |--->--->"permissions":[
                    |--->--->--->{"name":"p_3","id":3000},
                    |--->--->--->{"name":"p_4","id":4000}
                    |--->--->],
                    |--->--->"id":200
                    |--->}
                    |]""".trimMargin()
            )
        }
    }

    @Test
    fun testQueryByTime() {
        executeAndExpect(
            _sqlClient.createQuery(Role::class) {
                where(
                    table.createdTime.between(
                        LocalDateTime.of(2022, 10, 3, 0, 0, 0),
                        LocalDateTime.of(2022, 10, 4, 0, 0, 0)
                    )
                )
                select(table)
            }
        ) {
            sql(
                """select tb_1_.ID, tb_1_.NAME, tb_1_.DELETED, tb_1_.CREATED_TIME, tb_1_.MODIFIED_TIME 
                    |from ROLE tb_1_ 
                    |where tb_1_.CREATED_TIME between ? and ?""".trimMargin()
            )
            rows(
                """[
                    |--->{
                    |--->--->"name":"r_1",
                    |--->--->"deleted":false,
                    |--->--->"createdTime":"2022-10-03 00:00:00",
                    |--->--->"modifiedTime":"2022-10-03 00:10:00",
                    |--->--->"id":100
                    |--->},{
                    |--->--->"name":"r_2",
                    |--->--->"deleted":true,
                    |--->--->"createdTime":"2022-10-03 00:00:00",
                    |--->--->"modifiedTime":"2022-10-03 00:10:00",
                    |--->--->"id":200
                    |--->}
                    |]""".trimMargin()
            )
        }
    }
}