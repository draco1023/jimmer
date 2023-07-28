"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[3871],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=u(t),m=l,d=c["".concat(s,".").concat(m)]||c[m]||b[m]||o;return t?a.createElement(d,i(i({ref:n},p),{},{components:t})):a.createElement(d,i({ref:n},p))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,i=new Array(o);i[0]=c;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:l,i[1]=r;for(var u=2;u<o;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(67294),l=t(34334);const o="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(o,i),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(83117),l=t(67294),o=t(34334),i=t(72389),r=t(67392),s=t(7094),u=t(12466);const p="tabList__CuJ",b="tabItem_LNqP";function c(e){var n;const{lazy:t,block:i,defaultValue:c,values:m,groupId:d,className:k}=e,h=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=m??h.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),T=(0,r.l)(g,((e,n)=>e.value===n.value));if(T.length>0)throw new Error(`Docusaurus error: Duplicate values "${T.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===c?c:c??(null==(n=h.find((e=>e.props.default)))?void 0:n.props.value)??h[0].props.value;if(null!==v&&!g.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:y}=(0,s.U)(),[N,x]=(0,l.useState)(v),j=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=d){const e=f[d];null!=e&&e!==N&&g.some((n=>n.value===e))&&x(e)}const _=e=>{const n=e.currentTarget,t=j.indexOf(n),a=g[t].value;a!==N&&(E(n),x(a),null!=d&&y(d,String(a)))},B=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=j.indexOf(e.currentTarget)+1;t=j[n]??j[0];break}case"ArrowLeft":{const n=j.indexOf(e.currentTarget)-1;t=j[n]??j[j.length-1];break}}null==(n=t)||n.focus()};return l.createElement("div",{className:(0,o.Z)("tabs-container",p)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},k)},g.map((e=>{let{value:n,label:t,attributes:i}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,key:n,ref:e=>j.push(e),onKeyDown:B,onFocus:_,onClick:_},i,{className:(0,o.Z)("tabs__item",b,null==i?void 0:i.className,{"tabs__item--active":N===n})}),t??n)}))),t?(0,l.cloneElement)(h.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},h.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==N})))))}function m(e){const n=(0,i.Z)();return l.createElement(c,(0,a.Z)({key:String(n)},e))}},14684:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>u,toc:()=>b});var a=t(83117),l=(t(67294),t(3905)),o=t(65488),i=t(85162);const r={sidebar_position:4,title:"Table and TableEx"},s=void 0,u={unversionedId:"old-en/jimmer-sql/basic/table-and-table-ex",id:"old-en/jimmer-sql/basic/table-and-table-ex",title:"Table and TableEx",description:"Problem of collection association",source:"@site/docs/old-en/jimmer-sql/basic/table-and-table-ex.mdx",sourceDirName:"old-en/jimmer-sql/basic",slug:"/old-en/jimmer-sql/basic/table-and-table-ex",permalink:"/jimmer/zh/docs/old-en/jimmer-sql/basic/table-and-table-ex",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/old-en/jimmer-sql/basic/table-and-table-ex.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Table and TableEx"},sidebar:"tutorialSidebar",previous:{title:"SqlClient",permalink:"/jimmer/zh/docs/old-en/jimmer-sql/basic/sql-client"},next:{title:"Table joins",permalink:"/jimmer/zh/docs/old-en/jimmer-sql/basic/table-join"}},p={},b=[{value:"Problem of collection association",id:"problem-of-collection-association",level:2},{value:"Table and TableEx",id:"table-and-tableex",level:2},{value:"Top-level queries can only use Table",id:"top-level-queries-can-only-use-table",level:3},{value:"Subqueries can use TableEx",id:"subqueries-can-use-tableex",level:3},{value:"Break through soft limits",id:"break-through-soft-limits",level:2}],c={toc:b};function m(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"problem-of-collection-association"},"Problem of collection association"),(0,l.kt)("p",null,"Let's look at this entity definition"),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},'\npackage org.babyfish.jimmer.sql.example.model;\n\nimport java.math.BigDecimal;\nimport java.util.List;\nimport javax.validation.constraints.Null;\n\nimport org.babyfish.jimmer.sql.*;\n\n@Entity\npublic interface Book {\n\n    @Id\n    long id();\n\n    String name();\n\n    int edition();\n\n    BigDecimal price();\n\n    @Null\n    @ManyToOne\n    // highlight-next-line\n    BookStore store();\n\n    @ManyToMany\n    @JoinTable(\n            name = "BOOK_AUTHOR_MAPPING",\n            joinColumnName = "BOOK_ID",\n            inverseJoinColumnName = "AUTHOR_ID"\n    )\n    // highlight-next-line\n    List<Author> authors();\n}\n'))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},'\npackage org.babyfish.jimmer.sql.example.model\n\nimport java.math.BigDecimal;\n\nimport org.babyfish.jimmer.sql.*;\n\n@Entity\ninterface Book {\n\n    @Id\n    val id: Long\n\n    val name: String\n\n    val edition: Int\n\n    val price: BigDecimal\n\n    @ManyToOne\n    // highlight-next-line\n    val store: BookStore?\n\n    @ManyToMany\n    @JoinTable(\n            name = "BOOK_AUTHOR_MAPPING",\n            joinColumnName = "BOOK_ID",\n            inverseJoinColumnName = "AUTHOR_ID"\n    )\n    // highlight-next-line\n    val authors: List<Author>\n}\n')))),(0,l.kt)("p",null,"In the code above"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"store")," is a many-to-one association"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"authors")," is a many-to-many association")),(0,l.kt)("p",null,"The differences between reference associations and collection associations are as follows"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Reference joins do not cause duplicate results."),(0,l.kt)("li",{parentName:"ul"},"Collection joins cause duplicate results.")),(0,l.kt)("p",null,"Collection joins can cause duplicate results, which in turn can cause the following problems:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"If developers forget to deduplicate, bugs will be introduced.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Even if the developer does not forget to deduplicate, it is not a good choice. Developers usually choose to use ",(0,l.kt)("inlineCode",{parentName:"p"},"java.util.LinkedHashSet")," for deduplication on the client side. This practice consumes hardware resources to process duplicate data and puts unnecessary pressure on both network and JVM memory.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"The most important point, it is not friendly to pagination queries"),"."),(0,l.kt)("p",{parentName:"li"},"Pagination query of with collection join at the SQL level is not what people need; in more scenarios, people want pagination operations to be applied to the main object ",(0,l.kt)("em",{parentName:"p"},"(The aggregate root) "),"."),(0,l.kt)("p",{parentName:"li"},"Take Hibernate as an example. In this case, Hibernate has to give up the paging strategy at the SQL level and adopt the paging strategy at the memory level. This is very low performance, in order to attract the attention of developers, hibernate will warn in the log. If you has experience using Hibernate, the following log will give you a headache."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://tech.asimio.net/2021/05/19/Fixing-Hibernate-HHH000104-firstResult-maxResults-warning-using-Spring-Data-JPA.html"},"firstResult/maxResults specified with collection fetch; applying in memory")),(0,l.kt)("p",{parentName:"li"},"In fact, jimmer-sql provides a very powerful associated object fetch function, ",(0,l.kt)("a",{parentName:"p",href:"../query/fetcher"},"Object Fetcher"),". And it is for this reason that Object Fetcher does not use table joins."))),(0,l.kt)("p",null,"To sum up, the disadvantages of using collection joins in top-level queries are very obvious, but there is no denying that there is still objective value in using collection joins in subqueries."),(0,l.kt)("p",null,"So, jimmer-sql has an important design goal"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("ol",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ol"},"Collection joins need to be prohibited in ",(0,l.kt)("strong",{parentName:"li"},"top-level")," queries."),(0,l.kt)("li",{parentName:"ol"},"Collection joins are still available in subqueries, update statements, and delete statements."))),(0,l.kt)("h2",{id:"table-and-tableex"},"Table and TableEx"),(0,l.kt)("p",null,"To support a strongly typed DSL, the annotation processor generates some source code for user-defined entity interfaces."),(0,l.kt)("p",null,"Taking the ",(0,l.kt)("inlineCode",{parentName:"p"},"Book")," entity interface at the beginning of the article as an example, the generated code is"),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Generated java code"',title:'"Generated',java:!0,'code"':!0},'/* \n * BookTable.java\n */\npackage org.babyfish.jimmer.sql.example.model;\n\nimport java.lang.Integer;\nimport java.math.BigDecimal;\nimport javax.persistence.criteria.JoinType;\nimport org.babyfish.jimmer.sql.ast.Expression;\nimport org.babyfish.jimmer.sql.ast.PropExpression;\nimport org.babyfish.jimmer.sql.ast.table.Table;\nimport org.babyfish.jimmer.sql.ast.table.spi.AbstractTableWrapper;\n\npublic class BookTable extends AbstractTableWrapper<Book> {\n    public BookTable(Table<Book> table) {\n        super(table);\n    }\n\n    public Expression<Long> id() {\n        return get("id");\n    }\n\n    public PropExpression.Str name() {\n        return get("name");\n    }\n\n    public PropExpression.Num<Integer> edition() {\n        return get("edition");\n    }\n\n    public PropExpression.Num<BigDecimal> price() {\n        return get("price");\n    }\n\n    public BookStoreTable store() {\n        return join("store");\n    }\n\n    public BookStoreTable store(JoinType joinType) {\n        return join("store", joinType);\n    }\n}\n\n/* \n * BookTableEx.java\n */\npackage org.babyfish.jimmer.sql.example.model;\n\nimport javax.persistence.criteria.JoinType;\nimport org.babyfish.jimmer.sql.ast.table.TableEx;\n\npublic class BookTableEx extends BookTable implements TableEx<Book> {\n    public BookTableEx(TableEx<Book> table) {\n        super(table);\n    }\n\n    public AuthorTableEx authors() {\n        return join("authors");\n    }\n\n    public AuthorTableEx authors(JoinType joinType) {\n        return join("authors", joinType);\n    }\n}\n'))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Generated kotlin code"',title:'"Generated',kotlin:!0,'code"':!0},'package org.babyfish.jimmer.example.kt.sql.model\n\nimport java.math.BigDecimal\nimport org.babyfish.jimmer.sql.ast.Selection\nimport org.babyfish.jimmer.sql.kt.ast.expression.KNonNullPropExpression\nimport org.babyfish.jimmer.sql.kt.ast.expression.KNullablePropExpression\nimport org.babyfish.jimmer.sql.kt.ast.table.KNonNullTable\nimport org.babyfish.jimmer.sql.kt.ast.table.KNonNullTableEx\nimport org.babyfish.jimmer.sql.kt.ast.table.KNullableTable\nimport org.babyfish.jimmer.sql.kt.ast.table.KNullableTableEx\nimport org.babyfish.jimmer.sql.kt.ast.table.KTable\nimport org.babyfish.jimmer.sql.kt.ast.table.KTableEx\n\n/* \n * Extension for Table<Book>\n */\npublic val KTable<Book>.id: KNullablePropExpression<Long>\n    get() = get("id")\n\npublic val KNonNullTable<Book>.id: KNonNullPropExpression<Long>\n    get() = get("id")\n\npublic val KTable<Book>.name: KNullablePropExpression<String>\n    get() = get("name")\n\npublic val KNonNullTable<Book>.name: KNonNullPropExpression<String>\n    get() = get("name")\n\npublic val KTable<Book>.edition: KNullablePropExpression<Int>\n    get() = get("edition")\n\npublic val KNonNullTable<Book>.edition: KNonNullPropExpression<Int>\n    get() = get("edition")\n\npublic val KTable<Book>.price: KNullablePropExpression<BigDecimal>\n    get() = get("price")\n\npublic val KNonNullTable<Book>.price: KNonNullPropExpression<BigDecimal>\n    get() = get("price")\n\npublic val KNullableTable<Book>.store: KNullableTable<BookStore>\n    get() = join("store")\n\npublic val KNonNullTable<Book>.store: KNonNullTable<BookStore>\n    get() = join("store")\n\npublic val KTable<Book>.`store?`: KNullableTable<BookStore>\n    get() = outerJoin("store")\n\n/* \n * Extension for TableEx<Book>\n */\n\npublic val KNullableTableEx<Book>.authors: KNullableTableEx<Author>\n    get() = join("authors")\n\npublic val KNonNullTableEx<Book>.authors: KNonNullTableEx<Author>\n    get() = join("authors")\n\npublic val KTableEx<Book>.`authors?`: KNullableTableEx<Author>\n    get() = outerJoin("authors")\n')))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Tabe")," does not support collection associations, but supports scalar properties and reference associations (",(0,l.kt)("inlineCode",{parentName:"li"},"store")," in this case)."),(0,l.kt)("li",{parentName:"ul"},"Only ",(0,l.kt)("inlineCode",{parentName:"li"},"TableEx")," supports collection associations (",(0,l.kt)("inlineCode",{parentName:"li"},"authors")," in this case).")),(0,l.kt)("p",null,"Therefore, the API of jimmer-sql follows the following pattern"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Top-level queries can only be created based on ",(0,l.kt)("inlineCode",{parentName:"li"},"Table"),"."),(0,l.kt)("li",{parentName:"ul"},"Subqueries, update statements and delete statements can be created based on either ",(0,l.kt)("inlineCode",{parentName:"li"},"Table")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"TableEx"),".")),(0,l.kt)("p",null,"Next, take the top-level query and sub-query as example for a comparative demonstration."),(0,l.kt)("h3",{id:"top-level-queries-can-only-use-table"},"Top-level queries can only use Table"),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"BookTable book = BookTable.$;\n\nsqlClient\n    // `query` only accept `BookTable`,\n    // If the parameter is `BookTableEx`, \n    // exception will be thrown\n    .createQuery(book)\n    ...omit...\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"sqlClient.createQuery(Book::class) {\n    // You can access `table` here.\n    // Its type is `Table<Book>`, not `TableEx<Book>`\n    ...\n}\n")))),(0,l.kt)("p",null,"So, your code looks like this"),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'BookTable book = BookTable.$;\n\nList<Book> books = sqlClient\n    .createQuery(book)\n    .where(\n        book\n            // highlight-next-line\n            .name() // scalar field "name"\n            .eq("Book Name")\n    )\n    .where(\n        book\n            // highlight-next-line\n            .store() // reference association "store"\n            .name()\n            .eq("Store Name")\n    )\n    /*\n     * However, "book.authors()" cannot be used\n     * because the method "authors()" is defined\n     * in BookTableEx, not BookTable.\n     *\n     * That is, compile-time prohibits users\n     * from joining collection associations\n     * in top-level queries\n     */\n    .select(book)\n    .execute();\n'))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val books = sqlClient\n    .createQuery(Book::class) {\n        where(\n            table\n                // highlight-next-line\n                .name // scalar field "name"\n                eq "Book Name"\n        )\n        where(\n            table\n                // highlight-next-line\n                .store // reference association "store"\n                .name\n                eq "Store Name"\n        )\n        /*\n         * However, "table.authors" cannot be used because\n         * the extension property "authors" is defined \n         * for `TableEx<Book>`, not `Table<Book>`.\n         *\n         * That is, compile-time prohibits users \n         * from joining collections\n         * in top-level queries\n         */\n        select(table)\n    }\n    .execute()\n')))),(0,l.kt)("p",null,"The final generated SQL is as follows"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    tb_1_.ID, \n    tb_1_.NAME, \n    tb_1_.EDITION, \n    tb_1_.PRICE, \n    tb_1_.STORE_ID \nfrom BOOK as tb_1_ \ninner join BOOK_STORE as tb_2_ on tb_1_.STORE_ID = tb_2_.ID \nwhere \n    tb_1_.NAME = ? \nand \n    tb_2_.NAME = ?\n")),(0,l.kt)("h3",{id:"subqueries-can-use-tableex"},"Subqueries can use TableEx"),(0,l.kt)("p",null,"Unlike top-level queries, TableEx can be used to create subqueries, update statements, and delete statements."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Author.books")," in the following example is the same as ",(0,l.kt)("inlineCode",{parentName:"p"},"Book.authors")," discussed above, and it is also a many-to-many association."),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'BookTable book = BookTable.$;\n\n// `author` is used by sub query, it is `TableEx`\nAuthorTableEx author = AuthorTableEx.$;\n\nList<Book> books = sqlClient\n    .createQuery(book)\n    .where(sqlClient\n        .createSubQuery(author)\n        .where(\n            author\n                // `author` is TableEx,\n                // so collection join `books` is allowed\n                .books()\n                .eq(book),\n\n            author.firstName().eq("Alex")\n        )\n        .exists()\n    )\n    .select(book)\n    .execute();\n'))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val books = sqlClient\n    .createQuery(Book::class) {\n\n        // In parent query, `table` means `Table<Book>`\n        \n        where(\n            exists(\n                wildSubQuery(Author::class) {\n\n                    // In sub query,\n                    // `table` means TableEx<Author>\n                    \n                    where(\n                        table\n                            // `table` of sub query is TableEx,\n                            // so collection join `books` is allowed\n                            .books\n                            eq\n                            parentTable,\n\n                        table.firstName.eq("Alex")\n                    )\n                }\n            )\n        )\n        select(table)\n    }\n    .execute()\n')))),(0,l.kt)("p",null,"The final generated SQL is as follows"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    tb_1_.ID, \n    tb_1_.NAME, \n    tb_1_.EDITION, \n    tb_1_.PRICE, \n    tb_1_.STORE_ID \nfrom BOOK as tb_1_ \nwhere exists(\n    select 1 \n    from AUTHOR as tb_2_ \n    // highlight-start\n    inner join BOOK_AUTHOR_MAPPING as tb_3_ \n        on tb_2_.ID = tb_3_.AUTHOR_ID \n    // highlight-end\n    where \n        tb_3_.BOOK_ID = tb_1_.ID \n    and \n        tb_2_.FIRST_NAME = ?\n)\n")),(0,l.kt)("h2",{id:"break-through-soft-limits"},"Break through soft limits"),(0,l.kt)("p",null,"Disallowing collection joins in top-level queries is reasonable in most, but not all cases."),(0,l.kt)("p",null,"For example, users do not query the entire object, but query individual fields, and use SQL keyword ",(0,l.kt)("inlineCode",{parentName:"p"},"distinct"),", this scenario is completely reasonable."),(0,l.kt)("p",null,"So, this rule is a soft restriction, not a rigid one. it can be easily broken."),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'BookTable book = BookTable.$;\n\nList<Long> bookIds = sqlClient\n    .createQuery(book)\n    .where(\n        book\n            // highlight-next-line\n            .asTableEx()\n            .authors()\n            .firstName()\n            .ilike("A%")\n    )\n    .select(book.id())\n    .distinct()\n    .execute();\n'))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val bookIds = sqlClient\n    .createQuery(Book::class) {\n        where(\n            table\n                // highlight-next-line\n                .asTableEx()\n                .authors\n                .firstName ilike "A%"\n        )\n        select(table.id)\n    }\n    .distinct()\n    .execute()\n')))),(0,l.kt)("p",null,"This method ",(0,l.kt)("inlineCode",{parentName:"p"},"asTableEx")," casts ",(0,l.kt)("inlineCode",{parentName:"p"},"Table")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"TableEx"),", so you can use collection associations in top-level queries."),(0,l.kt)("p",null,"The final generated SQL is as follows"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    distinct tb_1_.ID \nfrom BOOK as tb_1_ \n/* highlight-start */\ninner join BOOK_AUTHOR_MAPPING as tb_2_ \n    on tb_1_.ID = tb_2_.BOOK_ID \ninner join AUTHOR as tb_3_ \n    on tb_2_.AUTHOR_ID = tb_3_.ID \n/* highlight-end */\nwhere lower(tb_3_.FIRST_NAME) like ?\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"This rule is added, but it's easy to be broken. Why?"),(0,l.kt)("p",{parentName:"admonition"},"When a developer really wants to do it, make sure he understands what he's doing.")))}m.isMDXComponent=!0}}]);