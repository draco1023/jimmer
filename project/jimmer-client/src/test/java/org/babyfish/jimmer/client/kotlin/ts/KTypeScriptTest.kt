package org.babyfish.jimmer.client.kotlin.ts

import org.babyfish.jimmer.client.generator.ts.*
import org.babyfish.jimmer.client.generator.ts.simple.ExecutorWriter
import org.babyfish.jimmer.client.kotlin.model.*
import org.babyfish.jimmer.client.kotlin.service.KArrayService
import org.babyfish.jimmer.client.kotlin.service.KBookService
import org.babyfish.jimmer.client.kotlin.service.KEnumService
import org.babyfish.jimmer.client.meta.Constants
import org.babyfish.jimmer.client.meta.StaticObjectType
import org.babyfish.jimmer.meta.ImmutableType
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.Test
import java.io.ByteArrayOutputStream
import java.io.OutputStream

class KTypeScriptTest {

    @Test
    fun testModule() {
        val out = ByteArrayOutputStream()
        val ctx = createContext(out)
        ModuleWriter(ctx).flush()
        val code = out.toString()
        Assertions.assertEquals(
            "import type { Executor } from './';\n" +
                    "\n" +
                    "import { KArrayService, KBookService, KBookStoreService, KEnumService } from './services';\n" +
                    "\n" +
                    "export class Api {\n" +
                    "    \n" +
                    "    readonly karrayService: KArrayService;\n" +
                    "    \n" +
                    "    readonly kbookService: KBookService;\n" +
                    "    \n" +
                    "    readonly kbookStoreService: KBookStoreService;\n" +
                    "    \n" +
                    "    readonly kenumService: KEnumService;\n" +
                    "    \n" +
                    "    constructor(executor: Executor) {\n" +
                    "        this.karrayService = new KArrayService(executor);\n" +
                    "        this.kbookService = new KBookService(executor);\n" +
                    "        this.kbookStoreService = new KBookStoreService(executor);\n" +
                    "        this.kenumService = new KEnumService(executor);\n" +
                    "    }\n" +
                    "}",
            code
        )
    }

    @Test
    fun testModuleErrors() {
        val out = ByteArrayOutputStream()
        val ctx = createContext(out)
        ModuleErrorsWriter(ctx).flush()
        val code = out.toString()
        Assertions.assertEquals(
            "export type AllErrors = \n" +
                    "    {\n" +
                    "        readonly family: \"KBUSINESS_ERROR\",\n" +
                    "        readonly code: \"DATA_IS_FROZEN\"\n" +
                    "    } | \n" +
                    "    {\n" +
                    "        readonly family: \"KBUSINESS_ERROR\",\n" +
                    "        readonly code: \"SERVICE_IS_SUSPENDED\",\n" +
                    "        readonly \"planedResumeTime\"?: string | undefined\n" +
                    "    }\n" +
                    ";\n" +
                    "\n" +
                    "export type ApiErrors = {\n" +
                    "    \"karrayService\": {\n" +
                    "    },\n" +
                    "    \"kbookService\": {\n" +
                    "        \"saveBooks\": AllErrors & (\n" +
                    "            {\n" +
                    "                readonly family: 'KBUSINESS_ERROR',\n" +
                    "                readonly code: 'DATA_IS_FROZEN',\n" +
                    "                readonly [key:string]: any\n" +
                    "            } | \n" +
                    "            {\n" +
                    "                readonly family: 'KBUSINESS_ERROR',\n" +
                    "                readonly code: 'SERVICE_IS_SUSPENDED',\n" +
                    "                readonly [key:string]: any\n" +
                    "            }\n" +
                    "        ),\n" +
                    "        \"updateBook\": AllErrors & (\n" +
                    "            {\n" +
                    "                readonly family: 'KBUSINESS_ERROR',\n" +
                    "                readonly code: 'DATA_IS_FROZEN',\n" +
                    "                readonly [key:string]: any\n" +
                    "            } | \n" +
                    "            {\n" +
                    "                readonly family: 'KBUSINESS_ERROR',\n" +
                    "                readonly code: 'SERVICE_IS_SUSPENDED',\n" +
                    "                readonly [key:string]: any\n" +
                    "            }\n" +
                    "        )\n" +
                    "    },\n" +
                    "    \"kbookStoreService\": {\n" +
                    "    },\n" +
                    "    \"kenumService\": {\n" +
                    "    }\n" +
                    "};\n",
            code
        )
    }

    @Test
    fun testExecutor() {
        val out = ByteArrayOutputStream()
        val ctx = createContext(out)
        ExecutorWriter(ctx).flush()
        val code = out.toString()
        Assertions.assertEquals(
            "export type Executor = \n" +
                    "    (args: {\n" +
                    "        readonly uri: string,\n" +
                    "        readonly method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',\n" +
                    "        readonly body?: any\n" +
                    "    }) => Promise<any>\n" +
                    ";\n", code
        )
    }

    @Test
    fun testKBookService() {
        val out = ByteArrayOutputStream()
        val ctx = createContext(out)
        val service = Constants.KOTLIN_METADATA.services[KBookService::class.java]
        ServiceWriter(ctx, service, false).flush()
        val code = out.toString()
        Assertions.assertEquals(
            "import type { Dynamic, Executor } from '../';\n" +
                    "import type { KAuthorDto, KBookDto } from '../model/dto';\n" +
                    "import type { KBook } from '../model/entities';\n" +
                    "import type { KBookInput, KPage, Tuple2 } from '../model/static';\n" +
                    "\n" +
                    "/**\n" +
                    " * BookService interface\n" +
                    " */\n" +
                    "export class KBookService {\n" +
                    "    \n" +
                    "    constructor(private executor: Executor) {}\n" +
                    "    \n" +
                    "    async deleteBook(options: KBookServiceOptions['deleteBook']): Promise<number> {\n" +
                    "        let _uri = '/book/';\n" +
                    "        _uri += encodeURIComponent(options.id);\n" +
                    "        return (await this.executor({uri: _uri, method: 'DELETE'})) as number\n" +
                    "    }\n" +
                    "    \n" +
                    "    /**\n" +
                    "     * Find book list\n" +
                    "     * \n" +
                    "     * Format of each element:\n" +
                    "     * -   id\n" +
                    "     * -   name\n" +
                    "     * -   edition\n" +
                    "     * -   price\n" +
                    "     * -   store\n" +
                    "     *     -   id\n" +
                    "     *     -   name\n" +
                    "     * -   authors\n" +
                    "     *     -   id\n" +
                    "     *     -   firstName\n" +
                    "     */\n" +
                    "    async findComplexBooks(options: KBookServiceOptions['findComplexBooks']): Promise<\n" +
                    "        ReadonlyArray<KBookDto['KBookService/COMPLEX_FETCHER']>\n" +
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
                    "        return (await this.executor({uri: _uri, method: 'GET'})) as ReadonlyArray<KBookDto['KBookService/COMPLEX_FETCHER']>\n" +
                    "    }\n" +
                    "    \n" +
                    "    async findSimpleBooks(): Promise<\n" +
                    "        ReadonlyArray<KBookDto['KBookService/SIMPLE_FETCHER']>\n" +
                    "    > {\n" +
                    "        let _uri = '/books/simple';\n" +
                    "        return (await this.executor({uri: _uri, method: 'GET'})) as ReadonlyArray<KBookDto['KBookService/SIMPLE_FETCHER']>\n" +
                    "    }\n" +
                    "    \n" +
                    "    async findTuples(options: KBookServiceOptions['findTuples']): Promise<\n" +
                    "        KPage<Tuple2<KBookDto['KBookService/COMPLEX_FETCHER'], KAuthorDto['KBookService/AUTHOR_FETCHER']>>\n" +
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
                    "        return (await this.executor({uri: _uri, method: 'GET'})) as KPage<Tuple2<KBookDto['KBookService/COMPLEX_FETCHER'], KAuthorDto['KBookService/AUTHOR_FETCHER']>>\n" +
                    "    }\n" +
                    "    \n" +
                    "    async saveBooks(options: KBookServiceOptions['saveBooks']): Promise<\n" +
                    "        Dynamic<KBook> | undefined\n" +
                    "    > {\n" +
                    "        let _uri = '/book';\n" +
                    "        return (await this.executor({uri: _uri, method: 'PUT', body: options.body})) as Dynamic<KBook> | undefined\n" +
                    "    }\n" +
                    "    \n" +
                    "    async updateBook(options: KBookServiceOptions['updateBook']): Promise<\n" +
                    "        Dynamic<KBook> | undefined\n" +
                    "    > {\n" +
                    "        let _uri = '/book';\n" +
                    "        return (await this.executor({uri: _uri, method: 'PATCH', body: options.body})) as Dynamic<KBook> | undefined\n" +
                    "    }\n" +
                    "}\n" +
                    "\n" +
                    "export type KBookServiceOptions = {\n" +
                    "    'deleteBook': {readonly id: number},\n" +
                    "    'findComplexBooks': {\n" +
                    "        readonly name?: string, \n" +
                    "        readonly storeName?: string, \n" +
                    "        readonly authorName?: string, \n" +
                    "        readonly minPrice?: number, \n" +
                    "        readonly maxPrice?: number\n" +
                    "    },\n" +
                    "    'findSimpleBooks': {},\n" +
                    "    'findTuples': {\n" +
                    "        \n" +
                    "        /**\n" +
                    "         * Match the book name, optional\n" +
                    "         */\n" +
                    "        readonly name?: string, \n" +
                    "        \n" +
                    "        /**\n" +
                    "         * Start from 0, not 1\n" +
                    "         */\n" +
                    "        readonly pageIndex: number, \n" +
                    "        readonly pageSize: number\n" +
                    "    },\n" +
                    "    'saveBooks': {readonly body?: KBookInput},\n" +
                    "    'updateBook': {readonly body?: KBookInput}\n" +
                    "}",
            code
        )
    }

    @Test
    fun testRawKBookStore() {
        val out = ByteArrayOutputStream()
        val ctx = createContext(out)
        val bookStoreType = Constants.KOTLIN_METADATA.rawImmutableObjectTypes[ImmutableType.get(KBookStore::class.java)]
        TypeDefinitionWriter(ctx, bookStoreType, false).flush()
        val code = out.toString()
        Assertions.assertEquals(
            "import type { KBook, KCoordinate } from './';\n" +
                    "\n" +
                    "export interface KBookStore {\n" +
                    "    \n" +
                    "    readonly id: number;\n" +
                    "    \n" +
                    "    readonly name?: string;\n" +
                    "    \n" +
                    "    readonly coordinate: KCoordinate;\n" +
                    "    \n" +
                    "    readonly books: ReadonlyArray<KBook>;\n" +
                    "}\n",
            code
        )
    }

    @Test
    fun testRawKBook() {
        val out = ByteArrayOutputStream()
        val ctx = createContext(out)
        val bookType = Constants.KOTLIN_METADATA.rawImmutableObjectTypes[ImmutableType.get(KBook::class.java)]
        TypeDefinitionWriter(ctx, bookType, false).flush()
        val code = out.toString()
        Assertions.assertEquals(
            "import type { KAuthor, KBookStore } from './';\n" +
                    "\n" +
                    "export interface KBook {\n" +
                    "    \n" +
                    "    readonly id: number;\n" +
                    "    \n" +
                    "    readonly name?: string;\n" +
                    "    \n" +
                    "    readonly edition: number;\n" +
                    "    \n" +
                    "    readonly price?: number;\n" +
                    "    \n" +
                    "    readonly store?: KBookStore;\n" +
                    "    \n" +
                    "    readonly authors: ReadonlyArray<KAuthor>;\n" +
                    "}\n",
            code
        )
    }

    @Test
    fun testRawKAuthor() {
        val out = ByteArrayOutputStream()
        val ctx = createContext(out)
        val authorType = Constants.KOTLIN_METADATA.rawImmutableObjectTypes[ImmutableType.get(KAuthor::class.java)]
        TypeDefinitionWriter(ctx, authorType, false).flush()
        val code = out.toString()
        Assertions.assertEquals(
            "import type { KGender } from '../enums';\n" +
                    "import type { KBook } from './';\n" +
                    "\n" +
                    "export interface KAuthor {\n" +
                    "    \n" +
                    "    readonly id: number;\n" +
                    "    \n" +
                    "    readonly firstName: string;\n" +
                    "    \n" +
                    "    readonly lastName: string;\n" +
                    "    \n" +
                    "    readonly gender?: KGender;\n" +
                    "    \n" +
                    "    readonly books: ReadonlyArray<KBook>;\n" +
                    "}\n",
            code
        )
    }

    @Test
    fun testBookDto() {
        val out = ByteArrayOutputStream()
        val ctx = createContext(out)
        DtoWriter(ctx, KBook::class.java, false).flush()
        val code = out.toString()
        Assertions.assertEquals(
            "import type { KCoordinate } from '../entities';\n" +
                    "import type { KGender } from '../enums';\n" +
                    "\n" +
                    "export type KBookDto = {\n" +
                    "    'KBookService/SIMPLE_FETCHER': {\n" +
                    "        readonly id: number, \n" +
                    "        readonly name?: string\n" +
                    "    }, \n" +
                    "    'KBookService/COMPLEX_FETCHER': {\n" +
                    "        readonly id: number, \n" +
                    "        readonly name?: string, \n" +
                    "        readonly edition: number, \n" +
                    "        readonly price?: number, \n" +
                    "        readonly store?: {\n" +
                    "            readonly id: number, \n" +
                    "            readonly name?: string, \n" +
                    "            readonly coordinate: KCoordinate\n" +
                    "        }, \n" +
                    "        readonly authors: ReadonlyArray<{\n" +
                    "            readonly id: number, \n" +
                    "            readonly firstName: string, \n" +
                    "            readonly lastName: string, \n" +
                    "            readonly gender?: KGender\n" +
                    "        }>\n" +
                    "    }\n" +
                    "}",
            code
        )
    }

    @Test
    fun testKAuthorDto() {
        val out = ByteArrayOutputStream()
        val ctx = createContext(out)
        DtoWriter(ctx, KAuthor::class.java, false).flush()
        val code = out.toString()
        Assertions.assertEquals(
            "import type { KCoordinate } from '../entities';\n" +
                    "import type { KGender } from '../enums';\n" +
                    "\n" +
                    "export type KAuthorDto = {\n" +
                    "    'KBookService/AUTHOR_FETCHER': {\n" +
                    "        readonly id: number, \n" +
                    "        readonly firstName: string, \n" +
                    "        readonly lastName: string, \n" +
                    "        readonly gender?: KGender, \n" +
                    "        readonly books: ReadonlyArray<{\n" +
                    "            readonly id: number, \n" +
                    "            readonly name?: string, \n" +
                    "            readonly edition: number, \n" +
                    "            readonly price?: number, \n" +
                    "            readonly store?: {\n" +
                    "                readonly id: number, \n" +
                    "                readonly name?: string, \n" +
                    "                readonly coordinate: KCoordinate\n" +
                    "            }\n" +
                    "        }>\n" +
                    "    }\n" +
                    "}",
            code
        )
    }

    @Test
    fun testKBookStoreDto() {
        val out = ByteArrayOutputStream()
        val ctx = createContext(out)
        DtoWriter(ctx, KBookStore::class.java, false).flush()
        val code = out.toString()
        Assertions.assertEquals(
            "import type { KCoordinate } from '../entities';\n" +
                    "\n" +
                    "export type KBookStoreDto = {\n" +
                    "    'DEFAULT': {\n" +
                    "        readonly id: number, \n" +
                    "        readonly name?: string, \n" +
                    "        readonly coordinate: KCoordinate\n" +
                    "    }\n" +
                    "}",
            code
        )
    }

    @Test
    fun testKBookInput() {
        val out = ByteArrayOutputStream()
        val ctx = createContext(out)
        val bookInputType = Constants.KOTLIN_METADATA.staticTypes[StaticObjectType.Key(KBookInput::class.java, null)]
        TypeDefinitionWriter(ctx, bookInputType, false).flush()
        val code = out.toString()
        Assertions.assertEquals(
            "export interface KBookInput {\n" +
                    "    \n" +
                    "    readonly authorIds: ReadonlyArray<number>;\n" +
                    "    \n" +
                    "    readonly edition: number;\n" +
                    "    \n" +
                    "    readonly name: string;\n" +
                    "    \n" +
                    "    readonly price: number;\n" +
                    "    \n" +
                    "    readonly storeId?: number;\n" +
                    "}\n",
            code
        )
    }

    @Test
    fun testKPage() {
        val out = ByteArrayOutputStream()
        val ctx = createContext(out)
        val pageType = Constants.KOTLIN_METADATA.staticTypes[StaticObjectType.Key(KPage::class.java, null)]
        TypeDefinitionWriter(ctx, pageType, false).flush()
        val code = out.toString()
        Assertions.assertEquals(
            "export interface KPage<E> {\n" +
                    "    \n" +
                    "    readonly entities: ReadonlyArray<E>;\n" +
                    "    \n" +
                    "    readonly totalPageCount: number;\n" +
                    "    \n" +
                    "    readonly totalRowCount: number;\n" +
                    "}\n",
            code
        )
    }

    @Test
    fun testKGender() {
        val out = ByteArrayOutputStream()
        val ctx = createContext(out)
        val genderType = Constants.KOTLIN_METADATA.enumTypes[KGender::class.java]
        TypeDefinitionWriter(ctx, genderType, false).flush()
        val code = out.toString()
        Assertions.assertEquals(
            "export const KGender_CONSTANTS = ['MALE', 'FEMALE'] as const;\n" +
                "export type KGender = typeof KGender_CONSTANTS[number];\n",
            code
        )
    }

    @Test
    fun testArray() {
        val out = ByteArrayOutputStream()
        val ctx = createContext(out)
        val service = Constants.KOTLIN_METADATA.services[KArrayService::class.java]
        ServiceWriter(ctx, service, false).flush()
        val code = out.toString()
        Assertions.assertEquals(
            "import type { Executor } from '../';\n" +
                    "\n" +
                    "export class KArrayService {\n" +
                    "    \n" +
                    "    constructor(private executor: Executor) {}\n" +
                    "    \n" +
                    "    async saveIds(options: KArrayServiceOptions['saveIds']): Promise<void> {\n" +
                    "        let _uri = '/insert/ids';\n" +
                    "        let _separator = _uri.indexOf('?') === -1 ? '?' : '&';\n" +
                    "        let _value: any = undefined;\n" +
                    "        _value = options.arg0.join(',');\n" +
                    "        if (_value !== undefined && _value !== null) {\n" +
                    "            _uri += _separator\n" +
                    "            _uri += 'arg0='\n" +
                    "            _uri += encodeURIComponent(_value);\n" +
                    "            _separator = '&';\n" +
                    "        }\n" +
                    "        return (await this.executor({uri: _uri, method: 'GET'})) as void\n" +
                    "    }\n" +
                    "}\n" +
                    "\n" +
                    "export type KArrayServiceOptions = {\n" +
                    "    'saveIds': {readonly arg0: ReadonlyArray<string>}\n" +
                    "}", code
        )
    }

    @Test
    fun testEnum() {
        val out = ByteArrayOutputStream()
        val ctx = createContext(out)
        val service = Constants.KOTLIN_METADATA.services[KEnumService::class.java]
        ServiceWriter(ctx, service, false).flush()
        val code = out.toString()
        Assertions.assertEquals(
            "import type { Executor } from '../';\n" +
                    "import type { KGender } from '../model/enums';\n" +
                    "\n" +
                    "export class KEnumService {\n" +
                    "    \n" +
                    "    constructor(private executor: Executor) {}\n" +
                    "    \n" +
                    "    async enumParam(options: KEnumServiceOptions['enumParam']): Promise<void> {\n" +
                    "        let _uri = '/enumParam';\n" +
                    "        let _separator = _uri.indexOf('?') === -1 ? '?' : '&';\n" +
                    "        let _value: any = undefined;\n" +
                    "        _value = options.gender;\n" +
                    "        if (_value !== undefined && _value !== null) {\n" +
                    "            _uri += _separator\n" +
                    "            _uri += 'gender='\n" +
                    "            _uri += encodeURIComponent(_value);\n" +
                    "            _separator = '&';\n" +
                    "        }\n" +
                    "        return (await this.executor({uri: _uri, method: 'GET'})) as void\n" +
                    "    }\n" +
                    "}\n" +
                    "\n" +
                    "export type KEnumServiceOptions = {\n" +
                    "    'enumParam': {readonly gender: KGender}\n" +
                    "}", code
        )
    }

    private fun createContext(out: OutputStream): TsContext {
        return TsContext(Constants.KOTLIN_METADATA, out, "Api", 4, false)
    }
}