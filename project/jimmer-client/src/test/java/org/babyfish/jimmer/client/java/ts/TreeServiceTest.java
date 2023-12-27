package org.babyfish.jimmer.client.java.ts;

import org.babyfish.jimmer.client.generator.Context;
import org.babyfish.jimmer.client.generator.ts.TypeScriptContext;
import org.babyfish.jimmer.client.common.OperationParserImpl;
import org.babyfish.jimmer.client.common.ParameterParserImpl;
import org.babyfish.jimmer.client.java.service.TreeService;
import org.babyfish.jimmer.client.runtime.Metadata;
import org.babyfish.jimmer.client.source.Source;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.io.StringWriter;
import java.util.Collections;

public class TreeServiceTest {

    private static final Metadata METADATA =
            Metadata
                    .newBuilder()
                    .setOperationParser(new OperationParserImpl())
                    .setParameterParameter(new ParameterParserImpl())
                    .setGroups(Collections.singleton("treeService"))
                    .setGenericSupported(true)
                    .build();

    @Test
    public void testApi() {
        Context ctx = new TypeScriptContext(METADATA);
        Source serviceSource = ctx.getRootSource("Api");
        StringWriter writer = new StringWriter();
        ctx.render(serviceSource, writer);
        Assertions.assertEquals(
                "import type {Executor} from './';\n" +
                        "import {TreeService} from './services/';\n" +
                        "\n" +
                        "export class Api {\n" +
                        "    \n" +
                        "    readonly treeService: TreeService\n" +
                        "    \n" +
                        "    constructor(executor: Executor) {\n" +
                        "        this.treeService = new TreeService(executor);\n" +
                        "    }\n" +
                        "}",
                writer.toString()
        );
    }

    @Test
    public void testService() {
        Context ctx = new TypeScriptContext(METADATA);
        Source serviceSource = ctx.getRootSource("services/" + TreeService.class.getSimpleName());
        StringWriter writer = new StringWriter();
        ctx.render(serviceSource, writer);
        Assertions.assertEquals(
                "import type {Executor} from '../';\n" +
                        "import type {TreeNodeDto} from '../model/dto/';\n" +
                        "import type {Tree} from '../model/static/';\n" +
                        "\n" +
                        "/**\n" +
                        " * This is the service to test,\n" +
                        " * it can return two kinds of trees:\n" +
                        " * \n" +
                        " * <ul>\n" +
                        " *     <li>Recursive static object: Tree</li>\n" +
                        " *     <li>Recursive fetched object: TreeNode</li>\n" +
                        " * </ul>\n" +
                        " */\n" +
                        "export class TreeService {\n" +
                        "    \n" +
                        "    constructor(private executor: Executor) {}\n" +
                        "    \n" +
                        "    /**\n" +
                        "     * Create a static object tree, the value of each node must be integer.\n" +
                        "     * @param depth The depth of the tree\n" +
                        "     * @param breadth The child count of each tree node\n" +
                        "     * @return The static object tree with integer values.\n" +
                        "     */\n" +
                        "    async getNumberTree(options: TreeServiceOptions['getNumberTree']): Promise<\n" +
                        "        Tree<number | null | undefined>\n" +
                        "    > {\n" +
                        "        let _uri = '/numberTree';\n" +
                        "        let _separator = _uri.indexOf('?') === -1 ? '?' : '&';\n" +
                        "        let _value: any = undefined;\n" +
                        "        _value = options.depth;\n" +
                        "        if (_value !== undefined && _value !== null) {\n" +
                        "            _uri += _separator\n" +
                        "            _uri += 'depth='\n" +
                        "            _uri += encodeURIComponent(_value);\n" +
                        "            _separator = '&';\n" +
                        "        }\n" +
                        "        _value = options.breadth;\n" +
                        "        if (_value !== undefined && _value !== null) {\n" +
                        "            _uri += _separator\n" +
                        "            _uri += 'breadth='\n" +
                        "            _uri += encodeURIComponent(_value);\n" +
                        "            _separator = '&';\n" +
                        "        }\n" +
                        "        return (await this.executor({uri: _uri, method: 'GET'})) as Tree<number | null | undefined>\n" +
                        "    }\n" +
                        "    \n" +
                        "    /**\n" +
                        "     * Create a static object tree, the value of each node must be integer.\n" +
                        "     * @param depth The depth of the tree\n" +
                        "     * @param breadth The child count of each tree node\n" +
                        "     * @param maxBound The max bound for the random integer value which is data of each node\n" +
                        "     * @return The static object tree with integer values.\n" +
                        "     */\n" +
                        "    async getNumberTree_2(options: TreeServiceOptions['getNumberTree_2']): Promise<\n" +
                        "        Tree<number | null | undefined>\n" +
                        "    > {\n" +
                        "        let _uri = '/numberTree2';\n" +
                        "        let _separator = _uri.indexOf('?') === -1 ? '?' : '&';\n" +
                        "        let _value: any = undefined;\n" +
                        "        _value = options.depth;\n" +
                        "        if (_value !== undefined && _value !== null) {\n" +
                        "            _uri += _separator\n" +
                        "            _uri += 'depth='\n" +
                        "            _uri += encodeURIComponent(_value);\n" +
                        "            _separator = '&';\n" +
                        "        }\n" +
                        "        _value = options.breadth;\n" +
                        "        if (_value !== undefined && _value !== null) {\n" +
                        "            _uri += _separator\n" +
                        "            _uri += 'breadth='\n" +
                        "            _uri += encodeURIComponent(_value);\n" +
                        "            _separator = '&';\n" +
                        "        }\n" +
                        "        _value = options.maxBound;\n" +
                        "        if (_value !== undefined && _value !== null) {\n" +
                        "            _uri += _separator\n" +
                        "            _uri += 'maxBound='\n" +
                        "            _uri += encodeURIComponent(_value);\n" +
                        "            _separator = '&';\n" +
                        "        }\n" +
                        "        return (await this.executor({uri: _uri, method: 'GET'})) as Tree<number | null | undefined>\n" +
                        "    }\n" +
                        "    \n" +
                        "    /**\n" +
                        "     * Create query recursive tree roots by optional node name.\n" +
                        "     * @param name The optional string value to filter root nodes.\n" +
                        "     * @return The fetched object tree\n" +
                        "     */\n" +
                        "    async getRootNode(options: TreeServiceOptions['getRootNode']): Promise<\n" +
                        "        TreeNodeDto['TreeService/RECURSIVE_FETCHER']\n" +
                        "    > {\n" +
                        "        let _uri = '/rootNode';\n" +
                        "        let _separator = _uri.indexOf('?') === -1 ? '?' : '&';\n" +
                        "        let _value: any = undefined;\n" +
                        "        _value = options.name;\n" +
                        "        if (_value !== undefined && _value !== null) {\n" +
                        "            _uri += _separator\n" +
                        "            _uri += 'name='\n" +
                        "            _uri += encodeURIComponent(_value);\n" +
                        "            _separator = '&';\n" +
                        "        }\n" +
                        "        return (await this.executor({uri: _uri, method: 'GET'})) as TreeNodeDto['TreeService/RECURSIVE_FETCHER']\n" +
                        "    }\n" +
                        "    \n" +
                        "    /**\n" +
                        "     * Create a static object tree, the value of each node must be string.\n" +
                        "     * @param depth The depth of the tree\n" +
                        "     * @param breadth The child count of each tree node\n" +
                        "     * @return The static object tree with string values.\n" +
                        "     */\n" +
                        "    async getStringTree(options: TreeServiceOptions['getStringTree']): Promise<\n" +
                        "        Tree<string>\n" +
                        "    > {\n" +
                        "        let _uri = '/stringTree';\n" +
                        "        let _separator = _uri.indexOf('?') === -1 ? '?' : '&';\n" +
                        "        let _value: any = undefined;\n" +
                        "        _value = options.depth;\n" +
                        "        if (_value !== undefined && _value !== null) {\n" +
                        "            _uri += _separator\n" +
                        "            _uri += 'depth='\n" +
                        "            _uri += encodeURIComponent(_value);\n" +
                        "            _separator = '&';\n" +
                        "        }\n" +
                        "        _value = options.breadth;\n" +
                        "        if (_value !== undefined && _value !== null) {\n" +
                        "            _uri += _separator\n" +
                        "            _uri += 'breadth='\n" +
                        "            _uri += encodeURIComponent(_value);\n" +
                        "            _separator = '&';\n" +
                        "        }\n" +
                        "        return (await this.executor({uri: _uri, method: 'GET'})) as Tree<string>\n" +
                        "    }\n" +
                        "}\n" +
                        "export type TreeServiceOptions = {\n" +
                        "    'getNumberTree': {\n" +
                        "        /**\n" +
                        "         * The depth of the tree\n" +
                        "         */\n" +
                        "        readonly depth?: number | null | undefined, \n" +
                        "        /**\n" +
                        "         * The child count of each tree node\n" +
                        "         */\n" +
                        "        readonly breadth?: number | null | undefined\n" +
                        "    }, \n" +
                        "    'getNumberTree_2': {\n" +
                        "        /**\n" +
                        "         * The depth of the tree\n" +
                        "         */\n" +
                        "        readonly depth?: number | null | undefined, \n" +
                        "        /**\n" +
                        "         * The child count of each tree node\n" +
                        "         */\n" +
                        "        readonly breadth?: number | null | undefined, \n" +
                        "        /**\n" +
                        "         * The max bound for the random integer value which is data of each node\n" +
                        "         */\n" +
                        "        readonly maxBound?: number | null | undefined\n" +
                        "    }, \n" +
                        "    'getStringTree': {\n" +
                        "        /**\n" +
                        "         * The depth of the tree\n" +
                        "         */\n" +
                        "        readonly depth?: number | null | undefined, \n" +
                        "        /**\n" +
                        "         * The child count of each tree node\n" +
                        "         */\n" +
                        "        readonly breadth?: number | null | undefined\n" +
                        "    }, \n" +
                        "    'getRootNode': {\n" +
                        "        /**\n" +
                        "         * The optional string value to filter root nodes.\n" +
                        "         */\n" +
                        "        readonly name?: string | null | undefined\n" +
                        "    }\n" +
                        "}\n",
                writer.toString()
        );
    }

    @Test
    public void testTree() {
        Context ctx = new TypeScriptContext(METADATA);
        Source treeSource = ctx.getRootSource("model/static/Tree");
        StringWriter writer = new StringWriter();
        ctx.render(treeSource, writer);
        Assertions.assertEquals(
                "/**\n" +
                        " * Static Object Tree\n" +
                        " */\n" +
                        "export interface Tree<T> {\n" +
                        "    /**\n" +
                        "     * The data of tree node\n" +
                        "     */\n" +
                        "    readonly data: T;\n" +
                        "    /**\n" +
                        "     * Get child trees\n" +
                        "     */\n" +
                        "    readonly children: ReadonlyArray<Tree<T>>;\n" +
                        "}\n",
                writer.toString()
        );
    }

    @Test
    public void testTreeNode() {
        Context ctx = new TypeScriptContext(METADATA);
        Source treeNodeDtoSource = ctx.getRootSource("model/dto/TreeNodeDto");
        StringWriter writer = new StringWriter();
        ctx.render(treeNodeDtoSource, writer);
        Assertions.assertEquals(
                "export type TreeNodeDto = {\n" +
                        "    /**\n" +
                        "     * Recursive tree node, for business scenarios: A, B and C\n" +
                        "     */\n" +
                        "    'TreeService/RECURSIVE_FETCHER': {\n" +
                        "        /**\n" +
                        "         * The id of tree node.\n" +
                        "         * \n" +
                        "         * <p>It doesn't make business sense, it's just auto-numbering.</p>\n" +
                        "         */\n" +
                        "        readonly id: string;\n" +
                        "        /**\n" +
                        "         * The name of current tree node\n" +
                        "         * \n" +
                        "         * <p>Together with `parent`, this property forms the key of the book</p>\n" +
                        "         */\n" +
                        "        readonly name: string;\n" +
                        "        /**\n" +
                        "         * The one-to-many association from `TreeNode` to `TreeNode`,\n" +
                        "         * it is opposite mirror of `TreeNode.parent`\n" +
                        "         */\n" +
                        "        readonly childNodes?: ReadonlyArray<RecursiveType_1> | null | undefined;\n" +
                        "    }\n" +
                        "}\n" +
                        "interface RecursiveType_1 {\n" +
                        "    /**\n" +
                        "     * The id of tree node.\n" +
                        "     * \n" +
                        "     * <p>It doesn't make business sense, it's just auto-numbering.</p>\n" +
                        "     */\n" +
                        "    readonly id: string;\n" +
                        "    /**\n" +
                        "     * The name of current tree node\n" +
                        "     * \n" +
                        "     * <p>Together with `parent`, this property forms the key of the book</p>\n" +
                        "     */\n" +
                        "    readonly name: string;\n" +
                        "    /**\n" +
                        "     * The one-to-many association from `TreeNode` to `TreeNode`,\n" +
                        "     * it is opposite mirror of `TreeNode.parent`\n" +
                        "     */\n" +
                        "    readonly childNodes?: ReadonlyArray<RecursiveType_1> | null | undefined;\n" +
                        "}\n",
                writer.toString()
        );
    }
}
