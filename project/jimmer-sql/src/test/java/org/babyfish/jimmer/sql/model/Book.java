package org.babyfish.jimmer.sql.model;

import org.babyfish.jimmer.sql.*;
import org.babyfish.jimmer.sql.meta.UUIDIdGenerator;
import org.jetbrains.annotations.Nullable;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Positive;
import java.math.BigDecimal;
import java.util.List;
import java.util.UUID;

/**
 * The Book Entity $:)$
 */
@Entity
public interface Book {

    /**
     * Id $:)$
     */
    @Id
    @GeneratedValue(generatorType = UUIDIdGenerator.class)
    UUID id();

    /**
     * Name $:)$
     */
    @Key
    @NotEmpty(message = "The book name cannot be empty")
    String name();

    /**
     * Edition $:)$
     */
    @Key
    int edition();

    /**
     * Price $:)$
     */
    @Positive
    BigDecimal price();

    /**
     * Store $:)$
     *
     * <p>Note: This property can be null</p>
     */
    @Nullable
    @ManyToOne
    BookStore store();

    /**
     * Authors $:)$
     */
    @ManyToMany
    @JoinTable(
            name = "BOOK_AUTHOR_MAPPING",
            joinColumnName = "BOOK_ID",
            inverseJoinColumnName = "AUTHOR_ID"
    )
    List<Author> authors();

    /**
     * StoreId $:)$
     *
     * <p>Note: This property can be null</p>
     */
    @IdView
    @Nullable
    UUID storeId();

    /**
     * AuthorIds $:)$
     */
    @IdView("authors")
    List<UUID> authorIds();
}
