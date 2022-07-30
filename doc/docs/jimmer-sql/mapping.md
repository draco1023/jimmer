---
sidebar_position: 2
title: Mapping
---

## Annotation

jimmer-sql uses a subset of JPA's annotations for mapping between entities and databases. So far, supported annotations are

- javax.persistance.Entity
- javax.persistance.Table
- javax.persistance.SequenceGenerator
- javax.persistance.Transient
- javax.persistance.Id
- javax.persistance.GeneratedValue
- javax.persistance.Version
- javax.persistance.Column
- javax.persistance.JoinColumn
- javax.persistance.JoinColumns
- javax.persistance.JoinTable
- javax.persistance.OneToOne
- javax.persistance.ManyToOne
- javax.persistance.OneToMany
- javax.persistance.ManyToMany

:::info
Notice

1. Although jimmer-sql uses some JPA annotations, jimmer-sql is not a JPA implementation, it has its own API. jimmer-sql and JPA are two completely different things.

2. The usage of these annotations is slightly different from the usage in JPA, and this article will discuss these differences in detail.

3. For the four association annotations @OneToOne, @ManyToOne, @OneToMany and @ManyToMany, **no need to configure the targetEntity attribute**.

    In fact, jimmer-sql doesn't care how this property is configured, because jimmer-sql requires collection types to explicitly specify generic parameters.

4. For the four association annotations @OneToOne, @ManyToOne, @OneToMany and @ManyToMany, **no need to configure the fetch attribute**.

    In fact, jimmer-sql doesn't care how this property is configured, because jimmer-sql has a more convenient solution in this regard.

    See [object fetcher](./query/fetcher) to learn more.

5. For the four association annotations @OneToOne, @ManyToOne, @OneToMany and @ManyToMany, **no need to configure the cascade attribute**.

    In fact, jimmer-sql doesn't care how this property is configured, because jimmer-sql has a more convenient solution in this regard.

    See [Save command](./mutation/save-command) to learn more.
:::

The annotations provided by jimmer-sql itself are

- org.babyfish.jimmer.sql.Key
- org.babyfish.jimmer.sql.OnDelete

## javax.persistance.Entity

The annotation `Entity` is used to decorate an immutable interface, representing an ORM entity.

:::note
1. Once `@Entity` is used, it is implied that the interface is immutable, no need to use `@org.babyfish.jimmer.Immutable`.

2. However, `@Immutable` can specify the default value of the nullability properties, which is a very important feature, so `@Entity` and `@Immutable` can be mixed.
:::

## javax.persistence.Table

By default, the table name can be deduced from the interface name without using the `@Table` annotation.

The default table name uses all uppercase letters. Every place where the original name is switched from lowercase letter to uppercase letter will automatically add an underscore. For example, the interface name `BookStore` will automatically deduce the table name `BOOK_STORE`.

If the default table name does not meet your requirements, please use `@Tabale` to specify your table name.

```java title="BookStore.java"
@Entity
@Table("MY_BOOK_STORE")
public interface BookStore {
    ...
}
```

:::note
So far, only parse the property `name` of the `@Table`.
:::

## javax.persistance.SequenceGenerator

This annotation is rarely used in jimmer-sql, and even if it is used, there are a few points to note.

:::caution
1. jimmer-sql only parses its properties `name` and `sequenceName`, and does not parse other attributes, especially `initialValue` and `allocationSize`.

2. If you want to use the table/database sharding technology and ensure the unique id of the logic table in different databases/tables, it is more recommended to use Snowflake id.
:::

## javax.persistance.Transient

Indicates that a property does not need to be persisted, which is the same as the original usage of JPA.

## javax.persistance.Id

Declare a property as an id property, like this

```java title="Book.java"
@Entity
public interface Book {

    // highlight-next-line
    @Id
    long id();
}
```

:::note
1. In contrast to JPA, which encourages users to declare id as a boxed type (such as `java.lang.Long`); id based on the 8 primitive types in jimmer-sql must be declared as a primitive type (such as long) . The reason is that jimmer immutable objects are dynamic, and there is no need to choose between insert and update operations based on whether the id is null or not.

2. Currently, jimmer-sql does not support composite id or multiple id properties.
:::

By default, the column name of the id column is derived from the Java property name. By default, all column names use uppercase letters, and an underscore is automatically added wherever the original name is switched from lowercase letter to uppercase letter. The corresponding database column name here is ID.

If the default column name is not what you expect, you can use the @Column annotation
```java title="Book.java(Error version)"
public interface Book {

    @Id
    @Colmun(name = "BOOK_ID")
    long id();
}
```

:::danger
This code will cause the annotation processor to report an error. Because `@Id` indicates that the current property is not null, and the `nullable` of `@Column` defaults to true, the two contradict each other. The annotation processor will check this very strictly, and the error is as follows

Illegal property "org.babyfish.jimmer.sql.example.model.Book.id", its nullity is conflict because it is marked by both @javax.persistence.Id and @javax.persistence.Column(nullable=true)
:::

In order to fix the problem, please modify the code as follows
```java title="Book.java"
public interface Book {

    @Id
    @Colmun(name = "BOOK_ID", nullable = false)
    long id();
}
```

## javax.persistance.GeneratedValue

In the JPA specification, the `strategy` of `@GeneratedValue` has 4 strategies, which are parsed in jimmer-sql as such

### 1. AUTO *(or default)*

In this case, the `generator` of the annotation must be specified with a class name, which must implement the interface `org.babyfish.jimmer.sql.meta.IdGenerator`.

`IdGenerator` tells jimmer-sql how to insert objects without an id, which is defined as follows

```java title="IdGenerator"
package org.babyfish.jimmer.sql.meta;
public interface IdGenerator {}
```

The `IdGenerator` interface has a typical implementation, UserIdGenerator. That means let user to write code that determines how the id is automatically generated.
```java title="UserIdGenerator.java"
package org.babyfish.jimmer.sql.meta;

public interface UserIdGenerator extends IdGenerator {

    Object generate(Class<?> entityType);
}
```

In particular, when the id is of type UUID, jimmer-sql provides a class called `org.babyfish.jimmer.sql.meta.UUIDIdGenerator` for generating UUIDs randomly

```java
@Entity
public interface Book {

    @Id
    @GeneratedValue(generate = "org.babyfish.jimmer.sql.meta.UUIDIdGenerator")
    UUID id();
}
```

If you want to use snowflake id, you need to implement the interface `IdGenerator` by yourself, like this

```java
public SnowflakeIdGenerator implements UserIdGenerator {
    @Override
    public Long generator() {
        // Please call some third-party library 
        // to generate 64-bit snowflake id
    }
}

@Entity
public interface Book {

    @Id
    @GeneratedValue(generate = "yourpackage.SnowflakeIdGenerator")
    UUID id();
}
```

### 2. IDENTITY

Use identity id/auto incremenet id of database

```java
@Entity
public interface Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id();
}
```

### 3. SEQUENCE

Use sequence of database.

The first way is as follows. This way retains the usage habits of JPA, but it is relatively cumbersome.

```java
@Entity
@SequenceGenerator(
    name = "bookIdSequence" 
    sequenceName = "BOOK_ID_SEQ"
)
public interface Book {

    @Id
    @GeneratedValue(
        strategy = GenerationType.SEQUENCE,
        generator = "bookIdSequence"
    )
    long id();
}
```

jimmer-sql provides a simpler way. As long as the `generator` of the `@GeneratedValue` starts with `sequence:`, you can directly specify the sequence name in the database.

```java
@Entity
public interface Book {

    @Id
    @GeneratedValue(
        strategy = GenerationType.SEQUENCE,
        // highlight-next-line
        generator = "sequence:BOOK_ID_SEQ"
    )
    long id();
}
```

Of course, you can also not specify `generator`, in this case the sequence name is `table name + "_ID_SEQ"`

```java
@Entity
public interface Book {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    long id();
}
```

### 4. TABLE

:::danger
jimmier-sql does not support this strategy
:::

## javax.persistance.Version

Specifies the optimistic locking version property of the entity

```java
@Entity
public interface Book {

    @Version
    int version();

    ...
}
```

:::note
Notice:

1. The version field must be of type int, and `java.lang.Integer` does not work either

2. If you use the @Column annotation, you must specify its `nullable` as false
:::

## javax.persistance.ManyToOne

There are two ways to implement many-to-one associations, based on foreign key and based on middle table.

### 1. Based on foreign key
    
```java
@Entity
public interface Book {

    @ManyToOne
    BookStore store();

    ...
}
```

Here, the foreign key column name is not explicitly specified using `@JoinColumn`, and the default column name is used.

The default column name uses all uppercase letters. Every place where the Java property name is switched from lowercase letter to uppercase letter will automatically add an underscore, and finally append the suffix "_ID".

Here, the many-to-one attribute `store` will automatically deduce the foreign key column name `STORE_ID`.

It can also be used with `@JoinColum` with the explicit column name.

```java
@Entity
public interface Book {

    @ManyToOne
    @JoinColumn(name = "BOOK_STORE_ID")
    BookStore store();

    ...
}
```

In this example
- The `optional` of `@ManyToOne` defaults to true
- The `nullable` of `@JoinColumn` also defaults to true

The two are consistent, not contradictory. So, the `store` property is nullable.

To define a non-null property, do it like this
```java
@Entity
public interface Book {

    @ManyToOne(optional = false)
    @JoinColumn(name = "BOOK_STORE_ID", nullable = false)
    BookStore store();

    ...
}
```

In this example
- The `optional` of `@ManyToOne` is specified as false
- The `nullable` of `@JoinColumn` is also specified as false

The two are consistent, not contradictory. So, the `store` property is non-null.

If the they are inconsistent, such as
```java
@Entity
public interface Book {

    @ManyToOne
    @JoinColumn(name = "BOOK_STORE_ID", nullable = false)
    BookStore store();

    ...
}
```

:::caution
This inconsistent configuration will cause the annotation processor to report an error

Illegal property "org.babyfish.jimmer.sql.model.Book.store", its nullity is conflict because it is marked by both @javax.persistence.JoinColumn(nullable=false) and @javax.persistence.ManyToOne(optional=true)
:::

:::note
So far, jimmer-sql does not support multiple `@JoinColumn` annotations for a property.
:::

### 2. Base on middle table

```java
@Entity
public interface Book {

    @ManyToOne
    @JoinTable
    BookStore store();

    ...
}
```

Here, no annotation properties are specified for `@JoinTable`, the default properties are as follows

- `name`: own table name + "_" + opponent table name + "_" + "_MAPPING".
- `joinColumns`: a `@JoinColumn` object whose column name is the id column name of declaring entity.
- `inverseJoinColumns`: an `@JoinColumn` object whose column names are automatically inferred by attribute name uses uppercase letters. Every place where the original name is switched from lowercase letter to uppercase letter will automatically add an underscore, and finally add a suffix "_ID".

Assuming the column name of `Book.id` is `BOOK_ID`, then the above configuration is equivalent to
```java
@Entity
public interface Book {

    @ManyToOne
    @JoinTable(
        name = "BOOK_STORE_MAPPING",
        joinColumns = @JoinColumn(name = "BOOK_ID")
        inverseJoinColumns = @JoinColumn(name = "STORE_ID")
    )
    BookStore store();

    ...
}
```

:::caution
The many-to-one association based on the middle table must be nullable. If the `optional` of `@ManyToOne` to false, like this
```java
@Entity
public interface Book {

    @ManyToOne(optional = false)
    @JoinTable
    BookStore store();

    ...
}
```
Annotation processor will report an error

Illegal property "org.babyfish.jimmer.sql.model.Book.store", it is marked by @javax.persistence.ManyToOne(optional=false), but it is considered as nullable because it's a many-to-one association base on middle table
:::

:::note
So far, jimmer-sql does not support
1. Specify multiple `@JoinColumn` annotations for the `joinColumns` or `inverseJoinColumns` of `@JoinTable`.
2. Specify `referencedColumnName` for `@JoinColumn` because it always refers to the id of the target table.
:::

## javax.persistance.OneToOne

A one-to-one association must be the mirror of many-to-one association. That is, a one-to-one association necessarily implies a bidirectional association.

```java title="Address.java"
@Entity
public interface Adress {

    @ManyToOne
    Customer customer();
    ...
}
```

```java title="Customer.java"
@Entity
public interface Customer {

    // highlight-next-line
    @OneToOne(mappedBy = "customer")
    Address address();
    ...
}
```

:::caution
Property decorated with `@OneToOne` is always nullable. Specifying the `optional` of `@OneToOne` as false or using any other non-null validation annotation will cause the annotation processor to report an error.
:::

## javax.persistance.OneToMany

Unlike JPA, one-to-many association must be mirror of many-to-one association. That is, a one-to-many association necessarily implies a bidirectional association.

```java title="Book.java"
@Entity
public interface Book {

    @ManyToOne
    BookStore store();
    ...
}
```

```java title="Customer.java"
@Entity
public interface Customer {

    // highlight-next-line
    @OneToMany(mappedBy = "store")
    List<Boo> books();
    ...
}
```

:::caution
Collection properties are always treated as non-null, of course, including properties decorated by `@OneToMany`, using any nullable validation annotation will cause the annotation processor to report an error.
:::

## javax.persistance.ManyToMany

:::caution
Collection properties are always treated as non-null, of course, including properties decorated by `@ManyToMany`, using any nullable validation annotation will cause the annotation processor to report an error.
:::

Since many-to-many associations can be used as the active side, they can also be used as the slave side.

### 1. Used as active side
```java
@Entity
public interface Book {

    @ManyToMany
    @JoinTable
    List<Author> autors();

    ...
}
```

Here, no annotation properties are specified for `@JoinTable`, the default properties are as follows

- `name`: own table name + "_" + opponent table name + "_" + "_MAPPING".
- `joinColumns`: a `@JoinColumn` object whose column name is the id column name of declaring entity.
- `inverseJoinColumns`: an `@JoinColumn` object whose column names are automatically inferred by attribute name uses uppercase letters. Every place where the original name is switched from lowercase letter to uppercase letter will automatically add an underscore, and finally add a suffix "_ID".

Assuming the column name of `Book.id` is `BOOK_ID`, then the above configuration is equivalent to
```java
@Entity
public interface Book {

    @ManyToMany
    @JoinTable(
        name = "BOOK_AUTHOR_MAPPING",
        joinColumns = @JoinColumn(name = "BOOK_ID")
        inverseColumns = @JoinColumn(name = "AUTHOR_ID")
    )
    List<Author> autors();

    ...
}
```
:::note
So far, jimmer-sql does not support
1. Specify multiple `@JoinColumn` annotations for the `joinColumns` or `inverseJoinColumns` of `@JoinTable`.
2. Specify `referencedColumnName` for `@JoinColumn` because it always refers to the id of the target table.
:::

### 2. Used as the slave side

```java
@Entity
public interface Author {

    @ManyToMany(mappedBy = "authors")
    List<Book> books();

    ...
}
```

## org.babyfish.jimmer.sql.Key

`@org.babyfish.jimmer.sql.Key` and `@javax.persistance.Id` are similar but different.

- @Id is used to specify the technical primary key of the table.
- @Key is used to specify the business primary key of the table.

for example:

```java title="Book.java"
@Entity
public interface Book {

    @Id
    UUID id();

    @Key
    String name();

    @Key
    int edition();

    ...
}
```

- From a technical point of view, Book has a primary key `id`.

    The technical primary key often stores some unique data that does not make business sense, such as automatic numbering, serial value, UUID, and snowflake id. But it's simple enough so it can simplify table joins and optimize their performance.

- From a business point of view, `name` and `edition` combine to uniquely identify a book.

    Business primary key stores unique and business-meaningful data, and is often used in conjunction with multiple columns. But it is relatively complex and does not directly participate in the table joins.

:::note

1. In the document explaining the use of [Sava command](./mutation/save-command) to save data, we can see that the business primary key plays a very important role.

2. In addition to statically using the `@Key` annotation to specify the business primary key like this example, you can also dynamically specify the business primary key in the code, please see [Sava command](./mutation/save-command) for more information.
:::

## org.babyfish.jimmer.sql.OnDelete

It can only be used in many-to-one association based on foreign key, such as

```java
@Entity
public interface Book {

    @ManyToOne
    @OnDelete(DeleteAction.SET_NULL)
    BookStore store();
    ...
}
```

DeleteAction has 3 options, corresponding to the foreign key behavior of the database:

- NONE: The current foreign key does not support delete action, preventing its parent object from being deleted.
- SET_NULL: The foreign key is automatically cleared when the parent object is deleted. Corresponds to the SQL `on delete set null` statement, which can only be used for nullable foreign keys.
- DELETE: When the parent object is deleted, the current object is also automatically deleted. Corresponds to the SQL `on delete cascade` statement.