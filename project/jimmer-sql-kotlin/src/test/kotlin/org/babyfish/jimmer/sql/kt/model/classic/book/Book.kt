package org.babyfish.jimmer.sql.kt.model.classic.book

import org.babyfish.jimmer.sql.*
import org.babyfish.jimmer.sql.kt.model.classic.store.BookStore
import org.babyfish.jimmer.sql.kt.model.classic.author.Author
import java.math.BigDecimal
import javax.validation.constraints.NotEmpty
import javax.validation.constraints.Positive
import javax.validation.constraints.PositiveOrZero

@Entity
interface Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long

    @Key
    @get:NotEmpty(message = "The book name cannot be empty")
    val name: String

    @Key
    val edition: @PositiveOrZero Int

    val price: @Positive BigDecimal

    @ManyToOne
    val store: BookStore?

    @ManyToMany
    val authors: List<Author>

    @IdView
    val storeId: Long?

    @IdView("authors")
    val authorIds: List<Long>
}