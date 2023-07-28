"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[4708],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,i[1]=r;for(var p=2;p<l;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(67294),a=n(34334);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var o=n(83117),a=n(67294),l=n(34334),i=n(72389),r=n(67392),s=n(7094),p=n(12466);const u="tabList__CuJ",c="tabItem_LNqP";function d(e){var t;const{lazy:n,block:i,defaultValue:d,values:m,groupId:h,className:k}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??g.map((e=>{let{props:{value:t,label:n,attributes:o}}=e;return{value:t,label:n,attributes:o}})),v=(0,r.l)(b,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===d?d:d??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==f&&!b.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:C}=(0,s.U)(),[B,N]=(0,a.useState)(f),q=[],{blockElementScrollPositionUntilNextRender:j}=(0,p.o5)();if(null!=h){const e=y[h];null!=e&&e!==B&&b.some((t=>t.value===e))&&N(e)}const S=e=>{const t=e.currentTarget,n=q.indexOf(t),o=b[n].value;o!==B&&(j(t),N(o),null!=h&&C(h,String(o)))},L=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=q.indexOf(e.currentTarget)+1;n=q[t]??q[0];break}case"ArrowLeft":{const t=q.indexOf(e.currentTarget)-1;n=q[t]??q[q.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},k)},b.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:B===t?0:-1,"aria-selected":B===t,key:t,ref:e=>q.push(e),onKeyDown:L,onFocus:S,onClick:S},i,{className:(0,l.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":B===t})}),n??t)}))),n?(0,a.cloneElement)(g.filter((e=>e.props.value===B))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==B})))))}function m(e){const t=(0,i.Z)();return a.createElement(d,(0,o.Z)({key:String(t)},e))}},91107:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>c});var o=n(83117),a=(n(67294),n(3905)),l=n(65488),i=n(85162);const r={sidebar_position:6,title:"Support for Spring GraphQL"},s=void 0,p={unversionedId:"old-en/jimmer-sql/spring-graphql",id:"old-en/jimmer-sql/spring-graphql",title:"Support for Spring GraphQL",description:"Spring Boot 2.7.0 brings Spring GraphQL, and jimmer-sql provides a specialized API to speed up the development of Spring GraphQL.",source:"@site/docs/old-en/jimmer-sql/spring-graphql.mdx",sourceDirName:"old-en/jimmer-sql",slug:"/old-en/jimmer-sql/spring-graphql",permalink:"/jimmer/zh/docs/old-en/jimmer-sql/spring-graphql",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/old-en/jimmer-sql/spring-graphql.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Support for Spring GraphQL"},sidebar:"tutorialSidebar",previous:{title:"Use spring boot starter",permalink:"/jimmer/zh/docs/old-en/jimmer-sql/spring-boot"}},u={},c=[{value:"Query",id:"query",level:2},{value:"ReferenceLoader",id:"referenceloader",level:3},{value:"ListLoader",id:"listloader",level:3},{value:"ValueLoader",id:"valueloader",level:3},{value:"Mutation",id:"mutation",level:2},{value:"Existence value of GraphQL Input type",id:"existence-value-of-graphql-input-type",level:3},{value:"Define input type",id:"define-input-type",level:3},{value:"Implement mutation business",id:"implement-mutation-business",level:3}],d={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Spring Boot 2.7.0 brings Spring GraphQL, and jimmer-sql provides a specialized API to speed up the development of Spring GraphQL."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Notice: "),(0,a.kt)("p",{parentName:"admonition"},"GraphQL and Object Fetcher are two ways to a similar end. Object Fetcher focuses on supporting this capability at the SQL level, and GraphQL focuses on exposing this capability."),(0,a.kt)("p",{parentName:"admonition"},"Once you decide to use Spring GraphQL, don't use Object Fetcher, each query method of the controller only needs to return a single object or its collection, GraphQL will shoulder similar responsibilities as Object Fetcher.")),(0,a.kt)("h2",{id:"query"},"Query"),(0,a.kt)("p",null,"For fields of type ",(0,a.kt)("inlineCode",{parentName:"p"},"Query"),", i.e. root queries, there is no difference between a GraphQL implementation and a REST implementation, and no special support is required."),(0,a.kt)("p",null,"The key point is the query for associations between objects. It is a simple concept in itself, but for performance, ",(0,a.kt)("inlineCode",{parentName:"p"},"DataLoader")," is usually used in actual projects, and ",(0,a.kt)("inlineCode",{parentName:"p"},"DataLoader")," has caused great damage to the development experience."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Association queries and ",(0,a.kt)("inlineCode",{parentName:"p"},"DataLoader")," increase the difficulty of developing GraphQL services, but because of this, GraphQL services are very powerful from the client's point of view.")),(0,a.kt)("p",null,"In order to alleviate the disruption of ",(0,a.kt)("inlineCode",{parentName:"p"},"DataLoader")," to the development experience, Spring GraphQL introduces a new annotation ",(0,a.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-graphql/docs/current/reference/html/#controllers-batch-mapping"},"@BatchMapping"),"."),(0,a.kt)("p",null,"jimmer-sql provides special support for this, providing dedicated API that allows developers to implement Spring GraphQL's ",(0,a.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-graphql/docs/current/reference/html/#controllers-batch-mapping"},"@BatchMapping")," method in one sentence."),(0,a.kt)("p",null,"API related to this"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null),(0,a.kt)("th",null,"Java"),(0,a.kt)("th",null,"Kotlin"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Computed property")),(0,a.kt)("td",null,"JSqlClient.getLoaders().value"),(0,a.kt)("td",null,"KSqlClient.loaders.value")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Reference association")),(0,a.kt)("td",null,"JSqlClient.getLoaders().reference"),(0,a.kt)("td",null,"KSqlClient.loaders.reference")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"List association")),(0,a.kt)("td",null,"JSqlClient.getLoaders().list"),(0,a.kt)("td",null,"KSqlClient.loaders.list")))),(0,a.kt)("h3",{id:"referenceloader"},"ReferenceLoader"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ReferenceLoadder")," is used to quickly implement one-to-one or many-to-one associations"),(0,a.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookController.java"',title:'"BookController.java"'},"@Controller\npublic class BookController {\n\n    private final JSqlClient sqlClient;\n\n    public BookController(JSqlClient sqlClient) {\n        this.sqlClient = sqlClient;\n    }\n\n    // Many-to-one associaton: Book.store\n    // highlight-next-line\n    @BatchMapping\n    public Map<Book, BookStore> store(\n        Collection<Book> books\n    ) {\n        return sqlClient\n            .getLoaders()\n            // highlight-next-line\n            .reference(BookProps.STORE)\n            .batchLoad(books);\n    }\n}\n"))),(0,a.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookController.kt"',title:'"BookController.kt"'},"@Controller\nclass BookController(\n    private val sqlClient: KSqlClient\n) {\n\n    // Many-to-one associaton: Book.store\n    // highlight-next-line\n    @BatchMapping\n    fun store(\n        // Must use `java.util.List` because Spring-GraphQL has a bug: #454\n        books: java.util.List<Book>\n    ): Map<Book, BookStore> =\n        sqlClient\n            .loaders\n            // highlight-next-line\n            .reference(Book::store)\n            .batchLoad(books)\n}\n")))),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"For kotlin, ",(0,a.kt)("inlineCode",{parentName:"p"},"java.util.List")," must be used implicitly, kotlin list cannot work."),(0,a.kt)("p",{parentName:"admonition"},"This is a bug of spring-graphql, please view ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/spring-projects/spring-graphql/issues/454"},"spring-graphql#454"))),(0,a.kt)("h3",{id:"listloader"},"ListLoader"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ListLoader")," is used to quickly implement one-to-many or many-to-many associations"),(0,a.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookStoreController.java"',title:'"BookStoreController.java"'},"@Controller\npublic class BookStoreController {\n\n    private final JSqlClient sqlClient;\n\n    public BookStoreController(JSqlClient sqlClient) {\n        this.sqlClient = sqlClient;\n    }\n\n    // One-to-many associaton: BookStore.books\n    // highlight-next-line\n    @BatchMapping\n    public Map<BookStore, List<Book>> books(\n            List<BookStore> bookStores\n    ) {\n        return sqlClient\n            .getLoaders()\n            // highlight-next-line\n            .list(BookStoreProps.BOOKS)\n            .batchLoad(bookStores);\n    }\n}\n"))),(0,a.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookStoreController.kt"',title:'"BookStoreController.kt"'},"@Controller\nclass BookController(\n    private val sqlClient: KSqlClient\n) {\n\n    // One-to-many associaton: BookStore.books\n    // highlight-next-line\n    @BatchMapping\n    fun books(\n        // Must use `java.util.List` because Spring-GraphQL has a bug: #454\n        stores: java.util.List<BookStore>\n    ): Map<BookStore, List<Book>> =\n        sqlClient\n            .loaders\n            // highlight-next-line\n            .list(BookStore::books)\n            .batchLoad(stores)\n}\n")))),(0,a.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookController.java"',title:'"BookController.java"'},"@Controller\npublic class BookController {\n\n    private final JSqlClient sqlClient;\n\n    public BookController(JSqlClient sqlClient) {\n        this.sqlClient = sqlClient;\n    }\n\n    // Many-to-many associaton: Book.authors\n    // highlight-next-line\n    @BatchMapping\n    public Map<Book, List<Author>> authors(List<Book> books) {\n        return sqlClient\n            .getLoaders()\n            // highlight-next-line\n            .list(BookProps.AUTHORS)\n            .batchLoad(books);\n    }\n}\n"))),(0,a.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookController.kt"',title:'"BookController.kt"'},"@Controller\nclass BookController(\n    private val sqlClient: KSqlClient\n) {\n\n    // Many-to-many associaton: Book.authors\n    // highlight-next-line\n    @BatchMapping\n    fun authors(\n        // Must use `java.util.List` because Spring-GraphQL has a bug: #454\n        books: java.util.List<Book>\n    ): Map<Book, List<Author>> =\n        sqlClient\n            .loaders\n            // highlight-next-line\n            .list(Book::authors)\n            .batchLoad(books)\n}\n")))),(0,a.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="AuthorController.java"',title:'"AuthorController.java"'},"@Controller\npublic class AuthorController {\n\n    private final JSqlClient sqlClient;\n\n    public AuthorController(JSqlClient sqlClient) {\n        this.sqlClient = sqlClient;\n    }\n\n    // Many-to-many associaton: Author.books\n    // highlight-next-line\n    @BatchMapping\n    public Map<Author, List<Book>> books(\n            List<Author> authors\n    ) {\n        return sqlClient\n                .getLoaders()\n                // highlight-next-line\n                .list(AuthorProps.BOOKS)\n                .batchLoad(authors);\n    }\n}\n"))),(0,a.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="AuthorController.kt"',title:'"AuthorController.kt"'},"@Controller\nclass AuthorController(\n    private val sqlClient: KSqlClient\n) {\n\n    // Many-to-many associaton: Author.books\n    // highlight-next-line\n    @BatchMapping\n    fun books(\n        // Must use `java.util.List` because Spring-GraphQL has a bug: #454\n        authors: java.util.List<Author>\n    ): Map<Author, List<Book>> =\n        sqlClient\n            .loaders\n            // highlight-next-line\n            .list(Author::books)\n            .batchLoad(authors)\n}\n")))),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"For kotlin, ",(0,a.kt)("inlineCode",{parentName:"p"},"java.util.List")," must be used implicitly, kotlin list cannot work."),(0,a.kt)("p",{parentName:"admonition"},"This is a bug of spring-graphql, please view ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/spring-projects/spring-graphql/issues/454"},"spring-graphql#454"))),(0,a.kt)("h3",{id:"valueloader"},"ValueLoader"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ValueLoader")," is used to quickly implement calculated property."),(0,a.kt)("p",null,"jimmer-sql supports calculated property, which means transient property with resolver."),(0,a.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookStore.java"',title:'"BookStore.java"'},"@Entity\npublic interface BookStore {\n\n    // highlight-next-line\n    @Transient(BookStoreAvgPriceResolver.class)\n    BigDecimal avgPrice();\n\n    ... Omit other properties ...\n}\n"))),(0,a.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookStore.kt"',title:'"BookStore.kt"'},"@Entity\ninterface BookStore {\n\n    // highlight-next-line\n    @Transient(BookStoreAvgPriceResolver::class)\n    val avgPrice: BigDecimal\n\n    ... Omit other properties ...\n}\n")))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ValueLoader")," should be used like this"),(0,a.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookStoreController.java"',title:'"BookStoreController.java"'},'@Controller\npublic class BookStoreController {\n\n    private static final ImmutableProp BOOK_STORE_DOT_AVG_PRICE =\n            ImmutableType\n                .get(BookStore.class)\n                .getProp("avgPrice");\n\n    private final JSqlClient sqlClient;\n\n    public BookController(JSqlClient sqlClient) {\n        this.sqlClient = sqlClient;\n    }\n\n    // Calculated property: BookStore.avgPrice\n    // highlight-next-line\n    @BatchMapping\n    public Map<BookStore, BigDecimal> avgPrice(\n        List<BookStore> stores\n    ) {\n        return sqlClient\n                .getLoaders()\n                // highlight-next-line\n                .<BookStore, BigDecimal>value(\n                    BOOK_STORE_DOT_AVG_PRICE\n                )\n                .batchLoad(stores);\n    }\n}\n'))),(0,a.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookStoreController.kt"',title:'"BookStoreController.kt"'},"@Controller\nclass BookStoreController(\n    private val sqlClient: KSqlClient\n) {\n\n    // Calculated property: BookStore.avgPrice\n    // hightlight-next-line\n    @BatchMapping\n    fun avgPrice(\n        // Must use `java.util.List` because Spring-GraphQL has a bug: #454\n        stores: java.util.List<BookStore>\n    ): Map<BookStore, BigDecimal> =\n        sqlClient\n            .loaders\n            // hightlight-next-line\n            .value(BookStore::avgPrice)\n            .batchLoad(stores)\n}\n\n")))),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"For kotlin, ",(0,a.kt)("inlineCode",{parentName:"p"},"java.util.List")," must be used implicitly, kotlin list cannot work."),(0,a.kt)("p",{parentName:"admonition"},"This is a bug of spring-graphql, please view ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/spring-projects/spring-graphql/issues/454"},"spring-graphql#454"))),(0,a.kt)("h2",{id:"mutation"},"Mutation"),(0,a.kt)("h3",{id:"existence-value-of-graphql-input-type"},"Existence value of GraphQL Input type"),(0,a.kt)("p",null,"Before introducing the mutation, we need to discuss why the GraphQL protocol introduced the Input type."),(0,a.kt)("p",null,"From an output perspective, a GraphQL field returns an ",(0,a.kt)("inlineCode",{parentName:"p"},"Object")," type. However, from an input perspective, the parameters of GraphQL fields do not accept ",(0,a.kt)("inlineCode",{parentName:"p"},"Object")," types, only scalar types, ",(0,a.kt)("inlineCode",{parentName:"p"},"Input")," types, and their collection types are acceptable."),(0,a.kt)("p",null,"The different between ",(0,a.kt)("inlineCode",{parentName:"p"},"Object")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Input"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Object")," type is ",(0,a.kt)("b",null,"dynamic"),", and the client can freely define the shape of the object."),(0,a.kt)("p",{parentName:"li"},"   The dynamic nature of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Object")," type realizes the core value of GraphQL, clients can specify which fields are required and which are not, giving them flexibility in controlling the format of the object tree to query.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Input")," type is ",(0,a.kt)("b",null,"static"),", and the client must provide parameters that strictly meet the server's requirements."),(0,a.kt)("p",{parentName:"li"},"   Different from query, the mutation business often has strict restrictions on the input data format. If the client arbitrarily passes the data format that does not meet the expectations of the server, it may lead to abnormal business."),(0,a.kt)("p",{parentName:"li"},"   Therefore, the GraphQL protocol introduces the ",(0,a.kt)("inlineCode",{parentName:"p"},"Input")," type, which is static, and the client must pass a data format that strictly conforms to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Input")," type definition before calling the mutation business."))),(0,a.kt)("p",null,"This difference is the fundamental reason for the existence of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Input")," type."),(0,a.kt)("h3",{id:"define-input-type"},"Define input type"),(0,a.kt)("p",null,"First, we need to define the input type in the Spring GraphQL convention file ",(0,a.kt)("inlineCode",{parentName:"p"},"src/main/resources/graphql/schema.graphqls")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input BookInput {\n    id: Long\n    name: String!\n    edition: Int\n    price: BigDecimal!\n    storeId: Long\n    authorIds: [Long!]!\n}\n")),(0,a.kt)("p",null,"Then, in the Java code, define the corresponding class ",(0,a.kt)("inlineCode",{parentName:"p"},"BookInput")," "),(0,a.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookInput.java"',title:'"BookInput.java"'},"public class BookInput {\n\n    @Nullable\n    private final Long id;\n\n    private final String name;\n\n    private final int edition;\n\n    private final BigDecimal price;\n\n    @Nullable\n    private final Long storeId;\n\n    private final List<Long> authorIds;\n\n    public BookInput(\n        @Nullable Long id,\n        String name,\n        int edition,\n        BigDecimal price,\n        @Nullable Long storeId,\n        List<Long> authorIds\n    ) {\n        this.id = id;\n        this.name = name;\n        this.edition = edition;\n        this.price = price;\n        this.storeId = storeId;\n        this.authorIds = authorIds;\n    }\n\n    // Convert static input object to \n    // dynamic entity object tree,\n    // no matter how deep it is.\n    // highlight-next-line\n    public Book toBook() {\n        return BookDraft.$.produce(book -> {\n            if (id != null) {\n                book.setId(id);\n            }\n            if (storeId != null) {\n                book.applyStore(store -> \n                    store.setId(storeId)\n                );\n            }\n            book\n                .setName(name)\n                .setEdition(edition)\n                .setPrice(price);\n            for (Long authorId : authorIds) {\n                book.addIntoAuthors(\n                    author -> author.setId(authorId)\n                );\n            }\n        });\n    }\n}\n"))),(0,a.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookInput.kt"',title:'"BookInput.kt"'},"data class BookInput(\n    val id: Long?, // Optional id\n    val name: String,\n    val edition: Int,\n    val price: BigDecimal,\n    val storeId: Long?,\n    val authorIds: List<Long>\n) {\n\n    // Convert static input(DTO) object to \n    // dynamic entity object tree,\n    // no matter how deep it is.\n    // highlight-next-line\n    fun toBook(): Book =\n        new(Book::class).by {\n            val that = this@BookInput\n            that.id?.let {\n                id = it\n            }\n            name = that.name\n            edition = that.edition\n            price = that.price\n            that.storeId?.let {\n                store().id = it\n            }\n            for (authorId in that.authorIds) {\n                authors().addBy {\n                    id = authorId\n                }\n            }\n        }\n}\n")))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("a",{parentName:"p",href:"./mutation/save-command"},"Save command")," of jimmer-sql provides the function of saving object tree with arbitrary complexity into database. Therefore, jimmer-sql focuses on the entity object tree, not the input object. So, we need to provide the method ",(0,a.kt)("inlineCode",{parentName:"p"},"BookInput.toBook")," to convert the static ",(0,a.kt)("inlineCode",{parentName:"p"},"BookInput")," object to a dynamic ",(0,a.kt)("inlineCode",{parentName:"p"},"Book")," object.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Book")," object is a jimmer-core immutable object, which is dynamic, that is, the format of ",(0,a.kt)("inlineCode",{parentName:"p"},"Book")," is ever-changing and all-encompassing. So, no matter how ",(0,a.kt)("inlineCode",{parentName:"p"},"BookInput")," type is defined, and whether ",(0,a.kt)("inlineCode",{parentName:"p"},"BookInput")," has deep data nesting, it can be converted to ",(0,a.kt)("inlineCode",{parentName:"p"},"Book")," type. It can never happen that ",(0,a.kt)("inlineCode",{parentName:"p"},"BookInput")," cannot be converted to ",(0,a.kt)("inlineCode",{parentName:"p"},"Book"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The core value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"BookInput")," is to conform to the GraphQL protocol and impose format constraints on the input data passed by the client. Howerver, for jimmer-sql, ",(0,a.kt)("inlineCode",{parentName:"p"},"BookInput")," only has the responsibility of creating ",(0,a.kt)("inlineCode",{parentName:"p"},"Book")," object. So, apart from the ",(0,a.kt)("inlineCode",{parentName:"p"},"toBook")," method, the class ",(0,a.kt)("inlineCode",{parentName:"p"},"BookInput")," in java code does not define any other methods, not even a getter methods, because this is unnessary (of course, if you want to cooperate with the debugger display function, you can define a ",(0,a.kt)("inlineCode",{parentName:"p"},"toString")," for it).")))),(0,a.kt)("h3",{id:"implement-mutation-business"},"Implement mutation business"),(0,a.kt)("p",null,"Now, we know"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("a",{parentName:"p",href:"./mutation/save-command"},"Save command")," of jimmer-sql allows developers to use one sentence to save any complex entity object tree into the database.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"BookInput")," defined above can be converted to an entity object tree of ",(0,a.kt)("inlineCode",{parentName:"p"},"Book")," through its  method ",(0,a.kt)("inlineCode",{parentName:"p"},"toBook"),"."))),(0,a.kt)("p",null,"Then, the realization of the data mutation business is very simple."),(0,a.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookController.java"',title:'"BookController.java"'},"@Controller\npublic class BookController {\n\n    private final JSqlClient sqlClient;\n\n    public BookController(JSqlClient sqlClient) {\n        this.sqlClient = sqlClient;\n    }\n\n    @MutationMapping\n    @Transactional\n    public Book saveBook(@Argument BookInput input) {\n        return sqlClient\n            .getEntities()\n            .save(\n                // highlight-next-line\n                input.toBook()\n            )\n            .getModifiedEntity();\n    }\n}\n"))),(0,a.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookController.kt"',title:'"BookController.kt"'},"@Controller\nclass BookController(\n    private val sqlClient: KSqlClient\n) {\n\n    @MutationMapping\n    @Transactional\n    fun saveBook(@Argument input: BookInput): Book =\n        sqlClient\n            .entities\n            .save(\n                // highlight-next-line\n                input.toBook()\n            )\n            .modifiedEntity\n}\n\n")))))}m.isMDXComponent=!0}}]);