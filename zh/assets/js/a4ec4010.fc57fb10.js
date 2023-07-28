"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[804],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(n),m=l,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),l=n(34334);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(83117),l=n(67294),r=n(34334),i=n(72389),o=n(67392),s=n(7094),d=n(12466);const c="tabList__CuJ",u="tabItem_LNqP";function p(e){var t;const{lazy:n,block:i,defaultValue:p,values:m,groupId:h,className:b}=e,f=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,o.l)(y,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===p?p:p??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==g&&!y.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:v}=(0,s.U)(),[T,j]=(0,l.useState)(g),x=[],{blockElementScrollPositionUntilNextRender:E}=(0,d.o5)();if(null!=h){const e=N[h];null!=e&&e!==T&&y.some((t=>t.value===e))&&j(e)}const I=e=>{const t=e.currentTarget,n=x.indexOf(t),a=y[n].value;a!==T&&(E(t),j(a),null!=h&&v(h,String(a)))},q=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;n=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;n=x[t]??x[x.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",c)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},b)},y.map((e=>{let{value:t,label:n,attributes:i}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>x.push(e),onKeyDown:q,onFocus:I,onClick:I},i,{className:(0,r.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":T===t})}),n??t)}))),n?(0,l.cloneElement)(f.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function m(e){const t=(0,i.Z)();return l.createElement(p,(0,a.Z)({key:String(t)},e))}},22480:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var a=n(83117),l=(n(67294),n(3905)),r=n(65488),i=n(85162);const o={sidebar_position:5,title:"Simple Query"},s=void 0,d={unversionedId:"old-en/jimmer-sql/query/find",id:"old-en/jimmer-sql/query/find",title:"Simple Query",description:"The query DSL discussed earlier can handle sufficiently complex situations, however many queries in real projects are simple queries. To this end, Jimmer provides API support for simple queries.",source:"@site/docs/old-en/jimmer-sql/query/find.mdx",sourceDirName:"old-en/jimmer-sql/query",slug:"/old-en/jimmer-sql/query/find",permalink:"/jimmer/zh/docs/old-en/jimmer-sql/query/find",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/old-en/jimmer-sql/query/find.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Simple Query"},sidebar:"tutorialSidebar",previous:{title:"Object Fetcher",permalink:"/jimmer/zh/docs/old-en/jimmer-sql/query/fetcher"},next:{title:"Query middle table",permalink:"/jimmer/zh/docs/old-en/jimmer-sql/query/association"}},c={},u=[{value:"findAll",id:"findall",level:2},{value:"Query by type",id:"query-by-type",level:3},{value:"Query by object fetcher",id:"query-by-object-fetcher",level:3},{value:"findById",id:"findbyid",level:2},{value:"Query by type",id:"query-by-type-1",level:3},{value:"Query by object fetcher",id:"query-by-object-fetcher-1",level:3},{value:"findByExample",id:"findbyexample",level:2},{value:"Simple QBE",id:"simple-qbe",level:3},{value:"Use fuzzy matching",id:"use-fuzzy-matching",level:3},{value:"Use object fetcher",id:"use-object-fetcher",level:3}],p={toc:u};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The query DSL discussed earlier can handle sufficiently complex situations, however many queries in real projects are simple queries. To this end, Jimmer provides API support for simple queries."),(0,l.kt)("p",null,"This article discusses three topics"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"findAll"),(0,l.kt)("li",{parentName:"ol"},"findById"),(0,l.kt)("li",{parentName:"ol"},"findByExample")),(0,l.kt)("h2",{id:"findall"},"findAll"),(0,l.kt)("h3",{id:"query-by-type"},"Query by type"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"List<Book> books = sqlClient.getEntities()\n    .findAll(\n        \n        // Query books\n        Book.class,\n\n        // Optional variadic arguments, sorting mode\n        BookProps.NAME,\n        BookProps.EDITION.desc()\n    );\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val books = sqlClient.entities\n    .findAll(Book::class) {\n        asc(Book::name)\n        desc(Book::edition)\n    }\n")))),(0,l.kt)("h3",{id:"query-by-object-fetcher"},"Query by object fetcher"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"List<Book> books = sqlClient.getEntities()\n    .findAll(\n        \n        // highlight-next-line\n        BookFetcher.$\n            .allScalarFields()\n            .store(\n                BookStoreFetcher.$.allScalarFields()\n            )\n            .authors(\n                AuthorFetcher.$.allScalarFields()\n            ),\n\n        BookProps.NAME,\n        BookProps.EDITION.desc()\n    );\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val books = sqlClient.entities\n    .findAll(\n        // highlight-next-line\n        newFetcher(Book::class).by { \n            allScalarFields()\n            store { \n                allScalarFields()\n            }\n            authors { \n                allScalarFields()\n            }\n        }\n    ) {\n        asc(Book::name)\n        desc(Book::edition)\n    }\n")))),(0,l.kt)("h2",{id:"findbyid"},"findById"),(0,l.kt)("p",null,"Jimmer's ",(0,l.kt)("inlineCode",{parentName:"p"},"sqlClient.entities")," provides the following 6 methods for querying object(s) by id(s)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"MethodName"),(0,l.kt)("th",{parentName:"tr",align:null},"Arugment 1"),(0,l.kt)("th",{parentName:"tr",align:null},"Arguemnt 2"),(0,l.kt)("th",{parentName:"tr",align:null},"Return Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"findById"),(0,l.kt)("td",{parentName:"tr",align:null},"Class or KClass"),(0,l.kt)("td",{parentName:"tr",align:null},"Single id"),(0,l.kt)("td",{parentName:"tr",align:null},"Single object or null"),(0,l.kt)("td",{parentName:"tr",align:null},"Query a simple object by id; returns null if there is no matching data")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"findById"),(0,l.kt)("td",{parentName:"tr",align:null},"Object Fetcher"),(0,l.kt)("td",{parentName:"tr",align:null},"Single id"),(0,l.kt)("td",{parentName:"tr",align:null},"Single object or null"),(0,l.kt)("td",{parentName:"tr",align:null},"Query an object by id, Its format is specified by the object fetcher; returns null if there is no matching data")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"findByIds"),(0,l.kt)("td",{parentName:"tr",align:null},"Class or KClass"),(0,l.kt)("td",{parentName:"tr",align:null},"Collection of ids"),(0,l.kt)("td",{parentName:"tr",align:null},"Collection of objects"),(0,l.kt)("td",{parentName:"tr",align:null},"Query a batch of simple objects according to the id collection, since some data may not match, the length of the returned object list may be smaller than the length of the passed in id collection")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"findByIds"),(0,l.kt)("td",{parentName:"tr",align:null},"Object Fetcher"),(0,l.kt)("td",{parentName:"tr",align:null},"Collection of ids"),(0,l.kt)("td",{parentName:"tr",align:null},"Collection of objects"),(0,l.kt)("td",{parentName:"tr",align:null},"Query a batch of objects according to the id collection, Its format is specified by the object fetcher; since some data may not match, the length of the returned object list may be smaller than the length of the passed in id collection")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"findMapByIds"),(0,l.kt)("td",{parentName:"tr",align:null},"Class or KClass"),(0,l.kt)("td",{parentName:"tr",align:null},"Collection of ids"),(0,l.kt)("td",{parentName:"tr",align:null},"Ordered Map consisting of ids and objects"),(0,l.kt)("td",{parentName:"tr",align:null},"A Map with keys as ids and simple objects as values, this map does not change the order of the incoming id collection; since some data may not match, the length of the returned map may be smaller than the length of the incoming id collection")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"findMapByIds"),(0,l.kt)("td",{parentName:"tr",align:null},"Object Fetcher"),(0,l.kt)("td",{parentName:"tr",align:null},"Collection of ids"),(0,l.kt)("td",{parentName:"tr",align:null},"Ordered Map consisting of ids and objects"),(0,l.kt)("td",{parentName:"tr",align:null},"A Map with keys as ids and objects as values, the format of the value is specified by the object fetcher, this map does not change the order of the incoming id collection; since some data may not match, the length of the returned map may be smaller than the length of the incoming id collection")))),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"These APIs that query data by id will use ",(0,l.kt)("a",{parentName:"p",href:"../advanced/cache"},"External cache"))),(0,l.kt)("p",null,"Next, take ",(0,l.kt)("inlineCode",{parentName:"p"},"findMapByIds")," as an example"),(0,l.kt)("h3",{id:"query-by-type-1"},"Query by type"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Map<Long, Book> bookMap = sqlClient.getEntities()\n    .findMapByIds(\n        Book.class,\n        Arrays.asList(2L, 3L, 4L)\n    );\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val bookMap = sqlClient.entities\n    .findMapByIds(\n        Book::class,\n        listOf(2L, 3L, 4L)\n    )\n")))),(0,l.kt)("h3",{id:"query-by-object-fetcher-1"},"Query by object fetcher"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Map<Long, Book> bookMap = sqlClient.getEntities()\n    .findMapByIds(\n        BookFetcher.$\n            .allScalarFields()\n            .store(\n                BookStoreFetcher.$.allScalarFields()\n            )\n            .authors(\n                AuthorFetcher.$.allScalarFields()\n            ),\n        Arrays.asList(2L, 3L, 4L)\n    );\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val bookMap = sqlClient.entities\n    .findMapByIds(\n        newFetcher(Book::class).by {\n            allScalarFields()\n            store {\n                allScalarFields()\n            }\n            authors {\n                allScalarFields()\n            }\n        },\n        listOf(2L, 3L, 4L)\n    )\n")))),(0,l.kt)("h2",{id:"findbyexample"},"findByExample"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"findByExample")," implements the QBE (Query By Example) query."),(0,l.kt)("p",null,"The so-called QBE query is that the user passes in an example object, and the ORM queries similar objects."),(0,l.kt)("p",null,"Since Jimmer objects are dynamic, Jimmer's QBE queries are very flexible."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If some properties of the example object are missing, unspecified properties will not be used to generate SQL filter conditions"),(0,l.kt)("li",{parentName:"ul"},"If an attribute of the example object is specified as null, the SQL ",(0,l.kt)("inlineCode",{parentName:"li"},"IS NULL")," filter condition will be generated"),(0,l.kt)("li",{parentName:"ul"},"If an attribute of the example object is specified as non-null, by default, the SQL ",(0,l.kt)("inlineCode",{parentName:"li"},"=")," filter condition will be generated",(0,l.kt)("admonition",{parentName:"li",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"For string properties specified as non-null, users can change the configuration to use fuzzy filter conditions, which will be described later.")))),(0,l.kt)("h3",{id:"simple-qbe"},"Simple QBE"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'TreeNode treeNode = TreeNodeDraft.$.produce(draft -> {\n    draft.setParent(null);\n    draft.setName("Hello");\n});\nList<TreeNode> treeNodes = sqlClient.getEntities()\n    .findByExample(\n            // highlight-next-line\n            Example.of(treeNode),\n            TreeNodeProps.NAME.asc()\n    );\n'))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val treeNode = new(TreeNode::class).by { \n    parent = null\n    name = "Hello"\n}\nval treeNodes = sqlClient.entities\n    .findByExample(\n        example(treeNode)\n    ) {\n        asc(TreeNode::name)\n    }\n')))),(0,l.kt)("admonition",{type:"warning"},(0,l.kt)("p",{parentName:"admonition"},"The boilerplate object only allows specifying properties based on simple column or foreign key, otherwise it will cause an exception")),(0,l.kt)("p",null,"The final SQL is as follows"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    tb_1_.NODE_ID, \n    tb_1_.NAME, \n    tb_1_.PARENT_ID \nfrom TREE_NODE as tb_1_ \nwhere\n    /* highlight-next-line */\n    tb_1_.NAME = ? \nand \n    /* highlight-next-line */\n    tb_1_.PARENT_ID is null \norder by tb_1_.NAME asc\n")),(0,l.kt)("h3",{id:"use-fuzzy-matching"},"Use fuzzy matching"),(0,l.kt)("p",null,"By default, non-null properties of example object will generate ",(0,l.kt)("inlineCode",{parentName:"p"},"="),", however, we can change this default behavior through configuration."),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'TreeNode treeNode = TreeNodeDraft.$.produce(draft -> {\n    draft.setParent(null);\n    draft.setName("Hello");\n});\nList<TreeNode> treeNodes = sqlClient.getEntities()\n    .findByExample(\n        Example.of(treeNode)\n            // highlight-next-line\n            .like(TreeNodeProps.NAME),\n        TreeNodeProps.NAME.asc()\n    );\n'))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val treeNode = new(TreeNode::class).by {\n    parent = null\n    name = "Hello"\n}\nval treeNodes = sqlClient.entities\n    .findByExample(\n        example(treeNode) {\n            // highlight-next-line\n            like(TreeNode::name)\n        }\n    ) {\n        asc(TreeNode::name)\n    }\n')))),(0,l.kt)("p",null,"The final SQL is as follows"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select tb_1_.NODE_ID, tb_1_.NAME, tb_1_.PARENT_ID \nfrom TREE_NODE as tb_1_ \nwhere \n    /* highlight-next-line */\n    tb_1_.NAME like ? \nand \n    tb_1_.PARENT_ID is null \norder by tb_1_.NAME asc\n")),(0,l.kt)("h3",{id:"use-object-fetcher"},"Use object fetcher"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'TreeNode treeNode = TreeNodeDraft.$.produce(draft -> {\n    draft.setParent(null);\n    draft.setName("Hello");\n});\nList<TreeNode> treeNodes = sqlClient.getEntities()\n    .findByExample(\n        Example.of(treeNode),\n        // highlight-next-line\n        TreeNodeFetcher.$\n            .allScalarFields()\n            .childNodes(\n                TreeNodeFetcher.$.allScalarFields(),\n                it -> it.recursive()\n            ),\n        TreeNodeProps.NAME.asc()\n    );\n'))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val treeNodes = sqlClient.entities\n    .findByExample(\n        example(treeNode),\n        // highlight-next-line\n        newFetcher(TreeNode::class).by { \n            allScalarFields()\n            childNodes({\n                filter { \n                    recursive()\n                }\n            }) {\n                allScalarFields()\n            }\n        }\n    ) {\n        asc(TreeNode::name)\n    }\n")))))}m.isMDXComponent=!0}}]);