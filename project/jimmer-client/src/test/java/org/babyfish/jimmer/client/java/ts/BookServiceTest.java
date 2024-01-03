package org.babyfish.jimmer.client.java.ts;

import org.babyfish.jimmer.client.generator.Context;
import org.babyfish.jimmer.client.generator.ts.TypeScriptContext;
import org.babyfish.jimmer.client.common.OperationParserImpl;
import org.babyfish.jimmer.client.common.ParameterParserImpl;
import org.babyfish.jimmer.client.java.service.BookService;
import org.babyfish.jimmer.client.runtime.Metadata;
import org.babyfish.jimmer.client.source.Source;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.io.StringWriter;
import java.util.Collections;

public class BookServiceTest {

    private static final Metadata METADATA =
            Metadata
                    .newBuilder()
                    .setOperationParser(new OperationParserImpl())
                    .setParameterParameter(new ParameterParserImpl())
                    .setGroups(Collections.singleton("bookService"))
                    .setGenericSupported(true)
                    .build();

    @Test
    public void testService() {
        Context ctx = new TypeScriptContext(METADATA);
        Source source = ctx.getRootSource("services/" + BookService.class.getSimpleName());
        StringWriter writer = new StringWriter();
        ctx.render(source, writer);
        Assertions.assertEquals(
                        "import type {Executor} from '../';\n" +
                                "import type {AuthorDto, BookDto} from '../model/dto/';\n" +
                                "import type {Dynamic_Book} from '../model/dynamic/';\n" +
                                "import type {\n" +
                                "    BookInput, \n" +
                                "    FindBookArguments, \n" +
                                "    Page, \n" +
                                "    Tuple2\n" +
                                "} from '../model/static/';\n" +
                                "\n" +
                                "/**\n" +
                                " * The book service\n" +
                                " */\n" +
                                "export class BookService {\n" +
                                "    \n" +
                                "    constructor(private executor: Executor) {}\n" +
                                "    \n" +
                                "    async deleteBook(options: BookServiceOptions['deleteBook']): Promise<\n" +
                                "        number\n" +
                                "    > {\n" +
                                "        let _uri = '/book/';\n" +
                                "        _uri += encodeURIComponent(options.id);\n" +
                                "        return (await this.executor({uri: _uri, method: 'DELETE'})) as Promise<number>;\n" +
                                "    }\n" +
                                "    \n" +
                                "    /**\n" +
                                "     * @return An optional complex book DTO\n" +
                                "     */\n" +
                                "    async findBook(options: BookServiceOptions['findBook']): Promise<\n" +
                                "        BookDto['BookService/COMPLEX_FETCHER'] | undefined\n" +
                                "    > {\n" +
                                "        let _uri = '/book/';\n" +
                                "        _uri += encodeURIComponent(options.id);\n" +
                                "        return (await this.executor({uri: _uri, method: 'GET'})) as Promise<BookDto['BookService/COMPLEX_FETCHER'] | undefined>;\n" +
                                "    }\n" +
                                "    \n" +
                                "    /**\n" +
                                "     * Find Complex DTOs\n" +
                                "     * \n" +
                                "     * <p>The complex DTO only supports the scalar properties of book, and associations `store` and `authors`</p>\n" +
                                "     * \n" +
                                "     * @param name The book name\n" +
                                "     * @param storeName The name of the associated book store\n" +
                                "     * @param authorName The names of the associated authors\n" +
                                "     * @param minPrice The min price of the book\n" +
                                "     * @param maxPrice The max price of the book\n" +
                                "     * @return A list of complex book DTOs\n" +
                                "     */\n" +
                                "    async findComplexBooks(options: BookServiceOptions['findComplexBooks']): Promise<\n" +
                                "        ReadonlyArray<BookDto['BookService/COMPLEX_FETCHER']>\n" +
                                "    > {\n" +
                                "        let _uri = '/books/complex';\n" +
                                "        let _separator = _uri.indexOf('?') === -1 ? '?' : '&';\n" +
                                "        let _value: any = undefined;\n" +
                                "        _value = options.name;\n" +
                                "        if (_value !== undefined && _value !== null) {\n" +
                                "            _uri += _separator\n" +
                                "            _uri += 'name='\n" +
                                "            _uri += encodeURIComponent(_value);\n" +
                                "            _separator = '&';\n" +
                                "        }\n" +
                                "        _value = options.storeName;\n" +
                                "        if (_value !== undefined && _value !== null) {\n" +
                                "            _uri += _separator\n" +
                                "            _uri += 'storeName='\n" +
                                "            _uri += encodeURIComponent(_value);\n" +
                                "            _separator = '&';\n" +
                                "        }\n" +
                                "        _value = options.authorName;\n" +
                                "        if (_value !== undefined && _value !== null) {\n" +
                                "            _uri += _separator\n" +
                                "            _uri += 'authorName='\n" +
                                "            _uri += encodeURIComponent(_value);\n" +
                                "            _separator = '&';\n" +
                                "        }\n" +
                                "        _value = options.minPrice;\n" +
                                "        if (_value !== undefined && _value !== null) {\n" +
                                "            _uri += _separator\n" +
                                "            _uri += 'minPrice='\n" +
                                "            _uri += encodeURIComponent(_value);\n" +
                                "            _separator = '&';\n" +
                                "        }\n" +
                                "        _value = options.maxPrice;\n" +
                                "        if (_value !== undefined && _value !== null) {\n" +
                                "            _uri += _separator\n" +
                                "            _uri += 'maxPrice='\n" +
                                "            _uri += encodeURIComponent(_value);\n" +
                                "            _separator = '&';\n" +
                                "        }\n" +
                                "        return (await this.executor({uri: _uri, method: 'GET'})) as Promise<ReadonlyArray<BookDto['BookService/COMPLEX_FETCHER']>>;\n" +
                                "    }\n" +
                                "    \n" +
                                "    /**\n" +
                                "     * Find Complex DTOs\n" +
                                "     * \n" +
                                "     * <p>The complex DTO only supports the scalar properties of book, and associations `store` and `authors`</p>\n" +
                                "     * \n" +
                                "     * @return A list of complex book DTOs\n" +
                                "     */\n" +
                                "    async findComplexBooksByArguments(options: BookServiceOptions['findComplexBooksByArguments']): Promise<\n" +
                                "        ReadonlyArray<BookDto['BookService/COMPLEX_FETCHER']>\n" +
                                "    > {\n" +
                                "        let _uri = '/books/complex2';\n" +
                                "        let _separator = _uri.indexOf('?') === -1 ? '?' : '&';\n" +
                                "        let _value: any = undefined;\n" +
                                "        _value = options.arguments.name;\n" +
                                "        if (_value !== undefined && _value !== null) {\n" +
                                "            _uri += _separator\n" +
                                "            _uri += 'name='\n" +
                                "            _uri += encodeURIComponent(_value);\n" +
                                "            _separator = '&';\n" +
                                "        }\n" +
                                "        _value = options.arguments.storeName;\n" +
                                "        if (_value !== undefined && _value !== null) {\n" +
                                "            _uri += _separator\n" +
                                "            _uri += 'storeName='\n" +
                                "            _uri += encodeURIComponent(_value);\n" +
                                "            _separator = '&';\n" +
                                "        }\n" +
                                "        _value = options.arguments.authorNames?.join(',');\n" +
                                "        if (_value !== undefined && _value !== null) {\n" +
                                "            _uri += _separator\n" +
                                "            _uri += 'authorNames='\n" +
                                "            _uri += encodeURIComponent(_value);\n" +
                                "            _separator = '&';\n" +
                                "        }\n" +
                                "        _value = options.arguments.minPrice;\n" +
                                "        if (_value !== undefined && _value !== null) {\n" +
                                "            _uri += _separator\n" +
                                "            _uri += 'minPrice='\n" +
                                "            _uri += encodeURIComponent(_value);\n" +
                                "            _separator = '&';\n" +
                                "        }\n" +
                                "        _value = options.arguments.maxPrice;\n" +
                                "        if (_value !== undefined && _value !== null) {\n" +
                                "            _uri += _separator\n" +
                                "            _uri += 'maxPrice='\n" +
                                "            _uri += encodeURIComponent(_value);\n" +
                                "            _separator = '&';\n" +
                                "        }\n" +
                                "        return (await this.executor({uri: _uri, method: 'GET'})) as Promise<ReadonlyArray<BookDto['BookService/COMPLEX_FETCHER']>>;\n" +
                                "    }\n" +
                                "    \n" +
                                "    /**\n" +
                                "     * Find Simple DTOs\n" +
                                "     * \n" +
                                "     * <p>The simple DTO only supports `id`, `name` and `storeId`</p>\n" +
                                "     * \n" +
                                "     * @return A list of simple book DTOs\n" +
                                "     */\n" +
                                "    async findSimpleBooks(): Promise<\n" +
                                "        ReadonlyArray<BookDto['BookService/SIMPLE_FETCHER']>\n" +
                                "    > {\n" +
                                "        let _uri = '/books/simple';\n" +
                                "        return (await this.executor({uri: _uri, method: 'GET'})) as Promise<ReadonlyArray<BookDto['BookService/SIMPLE_FETCHER']>>;\n" +
                                "    }\n" +
                                "    \n" +
                                "    async findTuples(options: BookServiceOptions['findTuples']): Promise<\n" +
                                "        Page<Tuple2<BookDto['BookService/COMPLEX_FETCHER'], AuthorDto['BookService/AUTHOR_FETCHER']>>\n" +
                                "    > {\n" +
                                "        let _uri = '/tuples';\n" +
                                "        let _separator = _uri.indexOf('?') === -1 ? '?' : '&';\n" +
                                "        let _value: any = undefined;\n" +
                                "        _value = options.name;\n" +
                                "        if (_value !== undefined && _value !== null) {\n" +
                                "            _uri += _separator\n" +
                                "            _uri += 'name='\n" +
                                "            _uri += encodeURIComponent(_value);\n" +
                                "            _separator = '&';\n" +
                                "        }\n" +
                                "        _value = options.pageIndex;\n" +
                                "        if (_value !== undefined && _value !== null) {\n" +
                                "            _uri += _separator\n" +
                                "            _uri += 'pageIndex='\n" +
                                "            _uri += encodeURIComponent(_value);\n" +
                                "            _separator = '&';\n" +
                                "        }\n" +
                                "        _value = options.pageSize;\n" +
                                "        if (_value !== undefined && _value !== null) {\n" +
                                "            _uri += _separator\n" +
                                "            _uri += 'pageSize='\n" +
                                "            _uri += encodeURIComponent(_value);\n" +
                                "            _separator = '&';\n" +
                                "        }\n" +
                                "        return (await this.executor({uri: _uri, method: 'GET'})) as Promise<Page<Tuple2<BookDto['BookService/COMPLEX_FETCHER'], AuthorDto['BookService/AUTHOR_FETCHER']>>>;\n" +
                                "    }\n" +
                                "    \n" +
                                "    async saveBook(options: BookServiceOptions['saveBook']): Promise<\n" +
                                "        Dynamic_Book\n" +
                                "    > {\n" +
                                "        let _uri = '/book';\n" +
                                "        return (await this.executor({uri: _uri, method: 'POST', body: options.body})) as Promise<Dynamic_Book>;\n" +
                                "    }\n" +
                                "    \n" +
                                "    async updateBook(options: BookServiceOptions['updateBook']): Promise<\n" +
                                "        Dynamic_Book\n" +
                                "    > {\n" +
                                "        let _uri = '/book';\n" +
                                "        return (await this.executor({uri: _uri, method: 'PUT', body: options.body})) as Promise<Dynamic_Book>;\n" +
                                "    }\n" +
                                "    \n" +
                                "    async version(options: BookServiceOptions['version']): Promise<\n" +
                                "        number\n" +
                                "    > {\n" +
                                "        let _uri = '/version';\n" +
                                "        const _headers: {[key:string]: string} = {accessToken: options.accessToken};\n" +
                                "        if (options.resourcePath) {\n" +
                                "            _headers['resourcePath'] = options.resourcePath\n" +
                                "        }\n" +
                                "        return (await this.executor({uri: _uri, method: 'GET', headers: _headers})) as Promise<number>;\n" +
                                "    }\n" +
                                "}\n" +
                                "export type BookServiceOptions = {\n" +
                                "    'findSimpleBooks': {}, \n" +
                                "    'findComplexBooks': {\n" +
                                "        /**\n" +
                                "         * The book name\n" +
                                "         */\n" +
                                "        readonly name: string, \n" +
                                "        /**\n" +
                                "         * The name of the associated book store\n" +
                                "         */\n" +
                                "        readonly storeName?: string | undefined, \n" +
                                "        /**\n" +
                                "         * The names of the associated authors\n" +
                                "         */\n" +
                                "        readonly authorName?: string | undefined, \n" +
                                "        /**\n" +
                                "         * The min price of the book\n" +
                                "         */\n" +
                                "        readonly minPrice?: number | undefined, \n" +
                                "        /**\n" +
                                "         * The max price of the book\n" +
                                "         */\n" +
                                "        readonly maxPrice?: number | undefined\n" +
                                "    }, \n" +
                                "    'findComplexBooksByArguments': {\n" +
                                "        readonly arguments: FindBookArguments\n" +
                                "    }, \n" +
                                "    'findTuples': {\n" +
                                "        readonly name?: string | undefined, \n" +
                                "        readonly pageIndex: number, \n" +
                                "        readonly pageSize: number\n" +
                                "    }, \n" +
                                "    'findBook': {\n" +
                                "        readonly id: number\n" +
                                "    }, \n" +
                                "    'saveBook': {\n" +
                                "        readonly body: BookInput\n" +
                                "    }, \n" +
                                "    'updateBook': {\n" +
                                "        readonly body: BookInput\n" +
                                "    }, \n" +
                                "    'deleteBook': {\n" +
                                "        readonly id: number\n" +
                                "    }, \n" +
                                "    'version': {\n" +
                                "        readonly accessToken: string, \n" +
                                "        readonly path?: string | undefined\n" +
                                "    }\n" +
                                "}\n",
                writer.toString()
        );
    }

    @Test
    public void testBookDto() {
        Context ctx = new TypeScriptContext(METADATA);
        Source source = ctx.getRootSource("model/dto/BookDto");
        StringWriter writer = new StringWriter();
        ctx.render(source, writer);
        Assertions.assertEquals(
                "export type BookDto = {\n" +
                        "    /**\n" +
                        "     * Complex Book DTO\n" +
                        "     */\n" +
                        "    'BookService/COMPLEX_FETCHER': {\n" +
                        "        /**\n" +
                        "         * The id is long, but the client type is string\n" +
                        "         * because JS cannot retain large long values\n" +
                        "         */\n" +
                        "        readonly id: string;\n" +
                        "        /**\n" +
                        "         * The name of this book,\n" +
                        "         * <p>Together with `edition`, this property forms the key of the book</p>\n" +
                        "         */\n" +
                        "        readonly name: string;\n" +
                        "        /**\n" +
                        "         * The edition of this book,\n" +
                        "         * <p>Together with `name`, this property forms the key of the book</p>\n" +
                        "         */\n" +
                        "        readonly edition: number;\n" +
                        "        /**\n" +
                        "         * The price of this book\n" +
                        "         */\n" +
                        "        readonly price: number;\n" +
                        "        /**\n" +
                        "         * The many-to-one association from `Book` to `BookStore`\n" +
                        "         */\n" +
                        "        readonly store?: {\n" +
                        "            readonly id: string;\n" +
                        "            readonly name: string;\n" +
                        "            readonly level: number;\n" +
                        "        } | null | undefined;\n" +
                        "        /**\n" +
                        "         * The many-to-many association from `Book` to `Author`\n" +
                        "         */\n" +
                        "        readonly authors: ReadonlyArray<{\n" +
                        "            readonly id: string;\n" +
                        "            readonly firstName: string;\n" +
                        "            readonly lastName: string;\n" +
                        "        }>;\n" +
                        "    }\n" +
                        "    /**\n" +
                        "     * Simple Book DTO\n" +
                        "     */\n" +
                        "    'BookService/SIMPLE_FETCHER': {\n" +
                        "        /**\n" +
                        "         * The id is long, but the client type is string\n" +
                        "         * because JS cannot retain large long values\n" +
                        "         */\n" +
                        "        readonly id: string;\n" +
                        "        /**\n" +
                        "         * The name of this book,\n" +
                        "         * <p>Together with `edition`, this property forms the key of the book</p>\n" +
                        "         */\n" +
                        "        readonly name: string;\n" +
                        "        /**\n" +
                        "         * The id view of `Book.store`\n" +
                        "         */\n" +
                        "        readonly storeId: string;\n" +
                        "    }\n" +
                        "}\n",
                writer.toString()
        );
    }

    @Test
    public void testDynamicBook() {
        Context ctx = new TypeScriptContext(METADATA);
        Source source = ctx.getRootSource("model/dynamic/Dynamic_Book");
        StringWriter writer = new StringWriter();
        ctx.render(source, writer);
        Assertions.assertEquals(
                        "import type {Dynamic_Author, Dynamic_BookStore} from './';\n" +
                        "\n" +
                        "/**\n" +
                        " * The book object\n" +
                        " */\n" +
                        "export interface Dynamic_Book {\n" +
                        "    /**\n" +
                        "     * The id is long, but the client type is string\n" +
                        "     * because JS cannot retain large long values\n" +
                        "     */\n" +
                        "    readonly id?: string;\n" +
                        "    /**\n" +
                        "     * The name of this book,\n" +
                        "     * <p>Together with `edition`, this property forms the key of the book</p>\n" +
                        "     */\n" +
                        "    readonly name?: string;\n" +
                        "    /**\n" +
                        "     * The edition of this book,\n" +
                        "     * <p>Together with `name`, this property forms the key of the book</p>\n" +
                        "     */\n" +
                        "    readonly edition?: number;\n" +
                        "    /**\n" +
                        "     * The price of this book\n" +
                        "     */\n" +
                        "    readonly price?: number;\n" +
                        "    /**\n" +
                        "     * The many-to-one association from `Book` to `BookStore`\n" +
                        "     */\n" +
                        "    readonly store?: Dynamic_BookStore | undefined;\n" +
                        "    /**\n" +
                        "     * The many-to-many association from `Book` to `Author`\n" +
                        "     */\n" +
                        "    readonly authors?: ReadonlyArray<Dynamic_Author>;\n" +
                        "    /**\n" +
                        "     * The id view of `Book.store`\n" +
                        "     */\n" +
                        "    readonly storeId?: string;\n" +
                        "    /**\n" +
                        "     * The id view of `Book.authors`\n" +
                        "     */\n" +
                        "    readonly authorIds?: ReadonlyArray<string>;\n" +
                        "}\n",
                writer.toString()
        );
    }

    @Test
    public void testBookInput() {
        Context ctx = new TypeScriptContext(METADATA);
        Source source = ctx.getRootSource("model/static/BookInput");
        StringWriter writer = new StringWriter();
        ctx.render(source, writer);
        Assertions.assertEquals(
                "/**\n" +
                        " * The book input defined by DTO language\n" +
                        " */\n" +
                        "export interface BookInput {\n" +
                        "    /**\n" +
                        "     * The name of this book,\n" +
                        "     * <p>Together with `edition`, this property forms the key of the book</p>\n" +
                        "     */\n" +
                        "    readonly name: string;\n" +
                        "    /**\n" +
                        "     * The edition of this book,\n" +
                        "     * <p>Together with `name`, this property forms the key of the book</p>\n" +
                        "     */\n" +
                        "    readonly edition: number;\n" +
                        "    /**\n" +
                        "     * The price of this book\n" +
                        "     */\n" +
                        "    readonly price: number;\n" +
                        "    /**\n" +
                        "     * The many-to-one association from `Book` to `BookStore`\n" +
                        "     */\n" +
                        "    readonly storeId?: string | undefined;\n" +
                        "    /**\n" +
                        "     * The many-to-many association from `Book` to `Author`\n" +
                        "     */\n" +
                        "    readonly authorIds: ReadonlyArray<string>;\n" +
                        "}\n",
                writer.toString()
        );
    }
    
    @Test
    public void testGender() {
        Context ctx = new TypeScriptContext(METADATA);
        Source source = ctx.getRootSource("model/enums/Gender");
        StringWriter writer = new StringWriter();
        ctx.render(source, writer);
        Assertions.assertEquals(
                "export const Gender_CONSTANTS = [\n" +
                        "    /**\n" +
                        "     * BOYS\n" +
                        "     */\n" +
                        "    'MALE', \n" +
                        "    /**\n" +
                        "     * GIRLS\n" +
                        "     */\n" +
                        "    'FEMALE'\n" +
                        "] as const;\n" +
                        "/**\n" +
                        " * The gender, which can only be `MALE` or `FEMALE`\n" +
                        " */\n" +
                        "export type Gender = typeof Gender_CONSTANTS[number];\n",
                writer.toString()
        );
    }
}
