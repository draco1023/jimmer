package org.babyfish.jimmer.sql.kt.model.classic.store

import org.babyfish.jimmer.sql.*
import org.babyfish.jimmer.sql.kt.model.calc.BookStoreAvgPriceResolver
import org.babyfish.jimmer.sql.kt.model.calc.BookStoreNewestBooksResolver
import org.babyfish.jimmer.sql.kt.model.classic.book.Book
import java.math.BigDecimal
import javax.validation.constraints.NotBlank

@Entity
interface BookStore {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long

    @Key
    val name: @NotBlank String

    @Version
    val version: Int

    @Transient(BookStoreAvgPriceResolver::class)
    val avgPrice: BigDecimal
    
    val website: @NotBlank String?

    @OneToMany(mappedBy = "store")
    val books: List<Book>

    @Transient(BookStoreNewestBooksResolver::class)
    val newestBook: List<Book>
}