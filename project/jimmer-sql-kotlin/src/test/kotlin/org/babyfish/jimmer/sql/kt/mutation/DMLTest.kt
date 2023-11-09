package org.babyfish.jimmer.sql.kt.mutation

import org.babyfish.jimmer.sql.kt.ast.expression.*
import org.babyfish.jimmer.sql.kt.common.AbstractMutationTest
import org.babyfish.jimmer.sql.kt.model.*
import org.babyfish.jimmer.sql.kt.model.classic.author.firstName
import org.babyfish.jimmer.sql.kt.model.classic.book.Book
import org.babyfish.jimmer.sql.kt.model.classic.book.authors
import org.babyfish.jimmer.sql.kt.model.classic.book.id
import org.babyfish.jimmer.sql.kt.model.classic.store.BookStore
import org.babyfish.jimmer.sql.kt.model.classic.store.name
import org.babyfish.jimmer.sql.kt.model.classic.store.website
import org.babyfish.jimmer.sql.kt.model.inheritance.Administrator
import org.babyfish.jimmer.sql.kt.model.inheritance.name
import org.junit.Test

class DMLTest : AbstractMutationTest() {

    @Test
    fun testUpdate() {
        executeAndExpectRowCount(
            sqlClient.createUpdate(BookStore::class) {
                where(table.website.isNull())
                set(
                    table.website,
                    concat(
                        value("http://www."),
                        sql(String::class, "lower(%e)") {
                            expression(table.name)
                        },
                        value(".com")
                    )
                )
            }
        ) {
            statement {
                sql(
                    """update BOOK_STORE tb_1_ 
                        |set WEBSITE = concat(?, lower(tb_1_.NAME), ?) 
                        |where tb_1_.WEBSITE is null""".trimMargin()
                )
                variables("http://www.", ".com")
                rowCount(2)
            }
        }
    }

    @Test
    fun testUpdateWithFilter() {
        executeAndExpectRowCount(
            sqlClient.createUpdate(Administrator::class) {
                set(table.name, concat(table.name, value("*")))
                where(table.name ilike "2")
            }
        ) {
            statement {
                sql(
                    """update ADMINISTRATOR tb_1_ 
                        |set NAME = concat(tb_1_.NAME, ?) 
                        |where lower(tb_1_.NAME) like ? 
                        |and tb_1_.DELETED <> ?""".trimMargin()
                )
            }
        }
    }

    @Test
    fun testDelete() {
        executeAndExpectRowCount(
            sqlClient.createDelete(Book::class) {
                where(table.id eq 12L)
                disableDissociation()
            }
        ) {
            statement {
                sql("""delete from BOOK tb_1_ where tb_1_.ID = ?""")
                variables(12L)
                rowCount(1)
            }
        }
    }

    @Test
    fun testDeleteByJoin() {
        executeAndExpectRowCount(
            sqlClient.createDelete(Book::class) {
                where(table.authors.firstName eq "Dan")
            }
        ) {
            statement {
                sql(
                    """select distinct tb_1_.ID 
                    |from BOOK tb_1_ 
                    |inner join BOOK_AUTHOR_MAPPING tb_2_ on tb_1_.ID = tb_2_.BOOK_ID 
                    |inner join AUTHOR tb_3_ on tb_2_.AUTHOR_ID = tb_3_.ID 
                    |where tb_3_.FIRST_NAME = ?""".trimMargin()
                )
                variables("Dan")
            }
            statement {
                sql(
                    """delete from BOOK_AUTHOR_MAPPING where BOOK_ID in (?, ?, ?)"""
                )
                variables(4L, 5L, 6L)
            }
            statement {
                sql(
                    """delete from BOOK 
                        |where ID in (?, ?, ?)""".trimMargin()
                )
                variables(4L, 5L, 6L)
            }
            rowCount(6)
        }
    }

    @Test
    fun testDeleteWithFilterWithoutDissociation() {
        executeAndExpectRowCount(
            sqlClient.createDelete(Administrator::class) {
                where(table.name ilike "2")
                disableDissociation()
            }
        ) {
            statement {
                sql(
                    """delete from ADMINISTRATOR tb_1_ 
                        |where lower(tb_1_.NAME) like ? 
                        |and tb_1_.DELETED <> ?""".trimMargin()
                )
            }
        }
    }

    @Test
    fun testDeleteWithFilterAndDissociation() {
        executeAndExpectRowCount(
            sqlClient.createDelete(Administrator::class) {
                where(table.name ilike "3")
            }
        ) {
            statement {
                sql(
                    """select distinct tb_1_.ID 
                        |from ADMINISTRATOR tb_1_ 
                        |where lower(tb_1_.NAME) like ? 
                        |and tb_1_.DELETED <> ?""".trimMargin()
                )
            }
            statement {
                sql(
                    """delete from ADMINISTRATOR_ROLE_MAPPING 
                        |where ADMINISTRATOR_ID = ?""".trimMargin()
                )
            }
            statement {
                sql(
                    """select ID from ADMINISTRATOR_METADATA where ADMINISTRATOR_ID = ?"""
                )
            }
            statement {
                sql(
                    """delete from ADMINISTRATOR_METADATA where ID = ?"""
                )
            }
            statement {
                sql(
                    """delete from ADMINISTRATOR where ID = ?"""
                )
            }
            rowCount(4)
        }
    }
}