"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[8678],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=i,k=u["".concat(s,".").concat(c)]||u[c]||d[c]||o;return n?a.createElement(k,r(r({ref:t},m),{},{components:n})):a.createElement(k,r({ref:t},m))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),i=n(34334);const o="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(o,r),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(83117),i=n(67294),o=n(34334),r=n(72389),l=n(67392),s=n(7094),p=n(12466);const m="tabList__CuJ",d="tabItem_LNqP";function u(e){var t;const{lazy:n,block:r,defaultValue:u,values:c,groupId:k,className:h}=e,y=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=c??y.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,l.l)(N,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===u?u:u??(null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)??y[0].props.value;if(null!==b&&!N.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:v}=(0,s.U)(),[T,I]=(0,i.useState)(b),E=[],{blockElementScrollPositionUntilNextRender:w}=(0,p.o5)();if(null!=k){const e=f[k];null!=e&&e!==T&&N.some((t=>t.value===e))&&I(e)}const x=e=>{const t=e.currentTarget,n=E.indexOf(t),a=N[n].value;a!==T&&(w(t),I(a),null!=k&&v(k,String(a)))},S=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;n=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;n=E[t]??E[E.length-1];break}}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,o.Z)("tabs-container",m)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},h)},N.map((e=>{let{value:t,label:n,attributes:r}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>E.push(e),onKeyDown:S,onFocus:x,onClick:x},r,{className:(0,o.Z)("tabs__item",d,null==r?void 0:r.className,{"tabs__item--active":T===t})}),n??t)}))),n?(0,i.cloneElement)(y.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function c(e){const t=(0,r.Z)();return i.createElement(u,(0,a.Z)({key:String(t)},e))}},32102:(e,t,n)=>{n.d(t,{s:()=>h});var a=n(83117),i=n(67294),o=n(42293),r=n(50657),l=n(6514),s=n(54776),p=n(10155),m=n(15861),d=n(93946),u=n(9137),c=n(61274),k=n(50594);const h=(0,i.memo)((e=>{let{open:t,fullScreen:n=!1,title:a,onClose:s,children:h}=e;const[N,g]=(0,i.useState)(n),b=(0,i.useCallback)((()=>{g((e=>!e))}),[]);return i.createElement(r.Z,{open:t,onClose:s,fullScreen:N,TransitionComponent:y,maxWidth:"md"},i.createElement(o.Z,{sx:{position:"relative"}},i.createElement(p.Z,null,i.createElement(m.Z,{sx:{ml:2,flex:1},variant:"h6",component:"div"},a),i.createElement(d.Z,{onClick:b,style:{color:"white"}},N?i.createElement(c.Z,null):i.createElement(u.Z,null)),i.createElement(d.Z,{"aria-label":"close",onClick:s,style:{color:"white"}},i.createElement(k.Z,null)))),i.createElement(l.Z,null,h))})),y=i.forwardRef((function(e,t){return i.createElement(s.Z,(0,a.Z)({direction:"up",ref:t},e))}))},39511:(e,t,n)=>{n.d(t,{b:()=>r});var a=n(67294),i=n(83321),o=n(32102);const r=(0,a.memo)((e=>{let{buttonText:t,fullScreen:n=!1,title:r=t,children:l}=e;const[s,p]=(0,a.useState)(!1),m=(0,a.useCallback)((e=>{p(!0),e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}),[]),d=(0,a.useCallback)((()=>{p(!1)}),[]);return a.createElement(a.Fragment,null,a.createElement(i.Z,{"data-is-view-more-button":"true",onClick:m,variant:"outlined",size:"small"},t),a.createElement(o.s,{open:s,onClose:d,title:r,fullScreen:n},l))}))},70295:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>y,frontMatter:()=>m,metadata:()=>u,toc:()=>k});var a=n(83117),i=(n(67294),n(3905)),o=n(65488),r=n(85162);const l={toc:[]};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Initially, people used business fields directly as the primary key of tables. This is the most straightforward and easy to use approach, but it has the following problems:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Unstable primary key"),(0,i.kt)("p",{parentName:"li"},"Since the primary key itself is a business field, it can be modified, which leads to an unstable primary key."),(0,i.kt)("p",{parentName:"li"},"Although the foreign keys that reference it in the database can use ",(0,i.kt)("inlineCode",{parentName:"p"},"on update cascade")," to keep consistency,\nan unstable primary key will cause many problems for systems outside the database, such as caches."),(0,i.kt)("p",{parentName:"li"},"Even if a unified solution to the primary key instability problem can be abstracted at the technical level, it is not recommended, because it makes the system difficult to understand.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"High cost of multi-table joins"),(0,i.kt)("p",{parentName:"li"},"Since the primary key itself is a business field, its type is likely to be a relatively long string type rather than a numeric type,\nand it may even be a composite primary key composed of multiple columns, which leads to high cost of multi-table joins."))),(0,i.kt)("p",null,"To solve the above problems, people learned to use data without business meaning as the primary key, such as"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Auto numbering by database"),(0,i.kt)("li",{parentName:"ul"},"Sequence value by database"),(0,i.kt)("li",{parentName:"ul"},"UUID"),(0,i.kt)("li",{parentName:"ul"},"Snowflake ID")),(0,i.kt)("p",null,"To enable idempotent saves for save commands, Jimmer introduces two concepts: Id and Key"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"@Id: Primary key")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"@Key: Business primary key"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If Id itself is a business attribute (not recommended), no need to specify Key, because Id itself already represents the uniqueness constraint at the business level.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If Id has no business meaning (recommended), then Key represents what the uniqueness constraint is at the business level."))))),(0,i.kt)("p",null,"See the following example:"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Entity  \npublic interface TreeNode {\n\n    @Id  \n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    long id();\n\n    // highlight-next-line\n    @Key\n    String name();\n\n    // highlight-next-line \n    @Key  \n    @ManyToOne\n    @Nullable\n    TreeNode parent();\n\n    @OneToMany(mappedBy = "parent")\n    List<TreeNode> childNodes();\n}\n'))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Entity\ninterface TreeNode {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY) \n    val id: Long\n\n    // highlight-next-line\n    @Key\n    val name: String\n\n    // highlight-next-line\n    @Key   \n    @ManyToOne\n    val parent: TreeNode?\n\n    @OneToMany(mappedBy = "parent")\n    val childNodes: List<TreeNode>\n}\n')))),(0,i.kt)("p",null,"Here, the Id of the ",(0,i.kt)("inlineCode",{parentName:"p"},"TreeNode")," entity uses auto numbering and has no business meaning. Therefore, to better match save commands,\n",(0,i.kt)("inlineCode",{parentName:"p"},"key")," is specified here, consisting of two properties: ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"parent"),"."),(0,i.kt)("p",null,"The corresponding DDL is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create table TREE_NODE(\n    ID bigint not null,\n    NAME varchar(20) not null,\n    PARENT_ID bigint\n);\n\nalter table TREE_NODE\n    add constraint PK_TREE_NODE\n        primary key(ID);\n        \nalter table TREE_NODE\n    add constraint UQ_TREE_NODE\n        /* highlight-next-line */\n        unique(NAME, PARENT_ID); \n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"parent")," properties of the entity type decorated with @Key correspond to the UNIQUE constraint ",(0,i.kt)("em",{parentName:"p"},"(or UNIQUE INDEX)")," composed of the ",(0,i.kt)("inlineCode",{parentName:"p"},"NAME")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"PARENT_ID")," columns in the database."),(0,i.kt)("p",null,"This uniqueness constraint can be analogized to file systems. File systems allow directories or files with the same name, but do not allow the same name if the parent directory is specified."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Through this example, we see:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Key can consist of multiple properties")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Foreign keys can be part of Key")))),(0,i.kt)("p",null,"Let's take another look at another example where the properties that make up Key are all properties based on foreign keys:"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@Entity\npublic interface OrderItem {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)  \n    long id();\n\n    // highlight-next-line\n    @Key   \n    @ManyToOne\n    Order order();\n\n    // highlight-next-line\n    @Key\n    @ManyToOne\n    Product product();\n\n    int quantity();\n\n    // Snapshot of `product.price`\n    BigDecimal unitPrice(); \n}\n"))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Entity\ninterface OrderItem {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    val id: Long\n\n    // highlight-next-line\n    @Key\n    @ManyToOne\n    val order: Order\n\n    // highlight-next-line\n    @Key \n    @ManyToOne\n    val product: Product\n\n    val quantity: Int\n\n    // Snapshot of `product.price`\n    val unitPrice: BigDecimal\n}\n")))))}s.isMDXComponent=!0;var p=n(39511);const m={sidebar_position:2,title:"Save Mode"},d=void 0,u={unversionedId:"mutation/save-command/save-mode",id:"mutation/save-command/save-mode",title:"Save Mode",description:"Save commands support 3 save modes that control how the aggregate root itself is saved:",source:"@site/docs/mutation/save-command/save-mode.mdx",sourceDirName:"mutation/save-command",slug:"/mutation/save-command/save-mode",permalink:"/jimmer/docs/mutation/save-command/save-mode",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/mutation/save-command/save-mode.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Save Mode"},sidebar:"tutorialSidebar",previous:{title:"Basic Usage",permalink:"/jimmer/docs/mutation/save-command/usage"},next:{title:"Incomplete Object",permalink:"/jimmer/docs/mutation/save-command/incomplete"}},c={},k=[{value:"Specifying Object Id",id:"specifying-object-id",level:2},{value:"Not Specifying Object Id",id:"not-specifying-object-id",level:2},{value:"Not Specifying @Key Property <em>(Not Recommended)</em>",id:"not-specifying-key-property-not-recommended",level:3},{value:"Specifying @Key Property <em>(Recommended)</em>",id:"specifying-key-property-recommended",level:3},{value:"Summary",id:"summary",level:2}],h={toc:k};function y(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Save commands support 3 save modes that control how the aggregate root itself is saved:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"UPSERT: This is the default mode. First check if the aggregate root object to be saved exists via a query:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If it does not exist: Execute INSERT")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If it exists: Execute UPDATE")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"INSERT_ONLY: Unconditionally execute INSERT")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"UPDATE_ONLY: Unconditionally execute UPDATE"))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Save modes only affect the aggregate root object, not other associated objects. Associated objects can be considered to always use the UPSERT mode. ")),(0,i.kt)("h2",{id:"specifying-object-id"},"Specifying Object Id"),(0,i.kt)("p",null,"Let's look at an example:"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Book book = BookDraft.$.produce(draft -> {\n    draft.setId(20L);\n    draft.setName("SQL in Action");\n    draft.setEdition(1);\n    draft.setPrice(new BigDecimal("39.9"));\n    draft.setStore(\n        ImmutableObjects.makeIdOnly(BookStore.class, 2L)\n    );\n});\n// highlight-next-line\nsqlClient.save(book);\n'))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'val book = new(Book::class).by {\n    id = 20\n    name = "SQL in Action"\n    edition = 1\n    price = BigDecimal("39.9")\n    store = makeIdOnly(BookStore::class, 2L)\n} \n// highlight-next-line\nsqlClient.save(book)\n')))),(0,i.kt)("p",null,"In this example, ",(0,i.kt)("inlineCode",{parentName:"p"},"save(book)")," is shorthand equivalent to ",(0,i.kt)("inlineCode",{parentName:"p"},"save(book, SaveMode.UPSERT)"),", because ",(0,i.kt)("inlineCode",{parentName:"p"},"UPSERT")," is the default save mode."),(0,i.kt)("p",null,"Executing the code will generate two SQL statements:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Query if the object exists in the database"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    tb_1_.ID \nfrom BOOK tb_1_\nwhere\n    tb_1_.ID = ? /* 20 */\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The second SQL statement will differ depending on the result of the first SQL:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If no data is returned from the first SQL, execute INSERT:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"insert into BOOK(ID, NAME, EDITION, PRICE, STORE_ID)\nvalues(\n    ? /* 20 */, ? /* SQL in Action */,  \n    ? /* 1 */, ? /* 39.9 */, ? /* 2 */\n)\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If data is returned from the first SQL, execute UPDATE: "),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"update BOOK\nset\n    NAME = ? /* SQL in Action */,\n    EDITION = ? /* 1 */,\n    PRICE = ? /* 39.9 */,\n    STORE_ID = ? /* 2 */\nwhere\n    ID = ? /* 20 */\n")))))),(0,i.kt)("p",null,"The usage of the other two modes is simple:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"INSERT_ONLY:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},"sqlClient.save(book, SaveMode.INSERT_ONLY)\n")),(0,i.kt)("p",{parentName:"li"},"or"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},"sqlClient.insert(book)\n")),(0,i.kt)("p",{parentName:"li"},"If executed, it will only generate the INSERT SQL above, without the SELECT.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"UPDATE_ONLY:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},"sqlClient.save(book, SaveMode.UPDATE_ONLY) \n")),(0,i.kt)("p",{parentName:"li"},"or"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},"sqlClient.update(book)\n")),(0,i.kt)("p",{parentName:"li"},"If executed, it will only generate the UPDATE SQL above, without the SELECT."))),(0,i.kt)("h2",{id:"not-specifying-object-id"},"Not Specifying Object Id"),(0,i.kt)("p",null,"In the above example, we specify the id for the object to be saved."),(0,i.kt)("p",null,"However, often our entities have auto-incrementing id strategies, so specifying the id is unnecessary for insertion. "),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},"@Entity\npublic interface Book {\n\n    @Id\n    // highlight-next-line\n    @GeneratedValue(strategy = GenerationType.IDENTITY) \n    long id();\n\n    String name();\n\n    int edition();\n\n    ...other properties omitted...\n}\n"))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},"@Entity\npublic interface Book {\n\n    @Id\n    // highlight-next-line\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    val id: Long\n\n    val name: String\n\n    val edition: Int\n\n    ...other properties omitted...\n}\n")))),(0,i.kt)("p",null,"Here, ",(0,i.kt)("inlineCode",{parentName:"p"},"Book.id")," is decorated with ",(0,i.kt)("inlineCode",{parentName:"p"},"@GeneratedValue")," using auto increment. So specifying the id is unnecessary for inserting a Book."),(0,i.kt)("p",null,"There are two ways to insert an object without an id property:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Not specifying @Key property ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Specifying @Key property"))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@Key")," is a very important concept in save commands that will be explained in detail later. It is not discussed here. "),(0,i.kt)("h3",{id:"not-specifying-key-property-not-recommended"},"Not Specifying @Key Property ",(0,i.kt)("em",{parentName:"h3"},"(Not Recommended)")),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Book book = BookDraft.$.produce(draft -> {\n    draft.setName("SQL in Action");\n    draft.setEdition(1);\n    draft.setPrice(new BigDecimal("39.9"));\n    draft.setStore(\n        ImmutableObjects.makeIdOnly(BookStore.class, 2L)\n    );\n});\nsqlClient.save(book);\n'))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'val book = new(Book::class).by {\n    name = "SQL in Action"\n    edition = 1\n    price = BigDecimal("39.9")\n    store = makeIdOnly(BookStore::class, 2L)\n}\nsqlClient.save(book)\n')))),(0,i.kt)("p",null,"Obviously, the id property of the object to be saved is not specified, and the ",(0,i.kt)("inlineCode",{parentName:"p"},"Book")," type does not declare a ",(0,i.kt)("inlineCode",{parentName:"p"},"@Key")," property either. So this is an object without neither id nor key.  "),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Here, the object without neither id nor key is the aggregate root. "),(0,i.kt)("p",{parentName:"admonition"},"However, for associated objects, by default, associated objects without neither id nor key will lead to exceptions. This will be discussed in later docs.")),(0,i.kt)("p",null,"Trying to save an aggregate root object without neither id nor key results in different behaviors for different save modes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"UPSERT: Insert the object without querying or checking, same as INSERT_ONLY.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"INSERT_ONLY: Insert the object.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"UPDATE_ONLY: Do not execute any SQL, just tell the developer the affected row count is 0."))),(0,i.kt)("p",null,"The save mode in the above example is the default ",(0,i.kt)("inlineCode",{parentName:"p"},"UPSERT"),", so it generates: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"insert into BOOK(NAME, EDITION, PRICE, STORE_ID)\nvalues\n    (? /* SQL in Action */, ? /* 1 */, ? /* 39.9 */, ? /* 2 */) \n")),(0,i.kt)("p",null,"Here, the ID column value is not specified, using the database's auto increment."),(0,i.kt)("p",null,"The developer can also obtain the automatically assigned id after insertion:"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Book book = ...\nlong newestBookId = sqlClient.save(book)\n    // highlight-next-line \n    .getNewEntity()\n    .getId();\n"))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"val book = ...\nval newestBookId = sqlClient.save(book)\n    // highlight-next-line\n    .modifiedEntity\n    .id\n")))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"save")," function returns an object containing ",(0,i.kt)("em",{parentName:"p"},"(but not limited to)")," two properties: ",(0,i.kt)("inlineCode",{parentName:"p"},"originalEntity")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"modifiedEntity"),". "),(0,i.kt)("p",null,"Among them, ",(0,i.kt)("inlineCode",{parentName:"p"},"originalEntity")," is the original data structure to be saved passed in by the developer. "),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"modifiedEntity")," represents a new data structure identical in shape to ",(0,i.kt)("inlineCode",{parentName:"p"},"originalEntity"),". Their differences are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," property of some objects in ",(0,i.kt)("inlineCode",{parentName:"p"},"originalEntity")," is not specified, the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," property of the corresponding objects in ",(0,i.kt)("inlineCode",{parentName:"p"},"modifiedEntity")," will be specified.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If some objects in ",(0,i.kt)("inlineCode",{parentName:"p"},"originalEntity")," have optimistic locking properties and correspond to UPDATE statements, the optimistic locking fields of the corresponding objects in ",(0,i.kt)("inlineCode",{parentName:"p"},"modifiedEntity")," will hold the new version number."))),(0,i.kt)("p",null,"So we can obtain the assigned id of the inserted aggregate root object via ",(0,i.kt)("inlineCode",{parentName:"p"},"modifiedEntity.id"),"."),(0,i.kt)("h3",{id:"specifying-key-property-recommended"},"Specifying @Key Property ",(0,i.kt)("em",{parentName:"h3"},"(Recommended)")),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," of an entity is designated some auto-generation strategy ",(0,i.kt)("em",{parentName:"p"},"(e.g. auto increment, sequence, UUID, snowflake id etc.)"),", it brings a problem that the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," property of the entity serves no purpose other than being a unique identifier. "),(0,i.kt)("p",null,"To address this, Jimmer introduces a concept called ",(0,i.kt)("inlineCode",{parentName:"p"},"@Key"),', adding a "second primary key" with actual business meaning to entities. Due to limited space, click ',(0,i.kt)(p.b,{buttonText:"here",title:"Key Definition",mdxType:"ViewMore"},(0,i.kt)(s,{mdxType:"Key"}))," for the precise definition of ",(0,i.kt)("inlineCode",{parentName:"p"},"Key"),"."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"For save commands, ",(0,i.kt)("inlineCode",{parentName:"p"},"@Key")," is an extremely important concept."),(0,i.kt)("p",{parentName:"admonition"},"As long as the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," of an entity serves no purpose other than being a unique identifier, a ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," property should be configured for the entity.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Define ",(0,i.kt)("inlineCode",{parentName:"p"},"@Key")," property for entity type ",(0,i.kt)("inlineCode",{parentName:"p"},"Book")),(0,i.kt)("p",{parentName:"li"},"There are two ways to define the Key property for an entity:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use annotation to statically configure it globally.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Dynamically configure it in code, but dynamic configuration only affects the current save command, and can override static configuration."))),(0,i.kt)("p",{parentName:"li"},"Below we demonstrate both approaches:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Static configuration ",(0,i.kt)("em",{parentName:"p"},"(default for most business scenarios)")),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},"@Entity\npublic interface Book {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    long id();\n\n    // highlight-next-line\n    @Key     \n    String name();\n\n    // highlight-next-line\n    @Key\n    int edition();\n\n    ...other properties omitted...\n}\n"))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},"@Entity\npublic interface Book {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    val id: Long\n\n    // highlight-next-line\n    @Key\n    val name: String\n\n    // highlight-next-line\n    @Key\n    val edition: Int\n\n    ...other properties omitted...\n}\n")))),(0,i.kt)("p",{parentName:"li"},"In this example, ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"edition")," together form the key. This means these two properties jointly form a uniqueness constraint as a business-meaningful second primary key. "),(0,i.kt)("p",{parentName:"li"},"That is, book names can repeat, but only within different editions. Book name and edition combined must be unique. This requires adding the following unique constraint on the table:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"alter table BOOK\n    add constraint UQ_BOOK\n        unique(NAME, EDITION); \n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Override at runtime ",(0,i.kt)("em",{parentName:"p"},"(only for individual save commands, rarely needed for special requirements)")),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},"sqlClient\n    .getEntities()\n    .saveCommand(book)\n    // highlight-next-line\n    .setKeyProps(BookProps.NAME, BookProps.EDITION)\n    .execute();\n"))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"sqlClient.save(book) {\n    // highlight-next-line\n    .setDissociateAction(Book::name, Book::edition)\n}\n")))),(0,i.kt)("admonition",{parentName:"li",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Without special circumstances, Key properties should be statically configured via annotations for entity types in most cases."))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Use save commands to save objects without id"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Book book = BookDraft.$.produce(draft -> {\n    draft.setName("SQL in Action");\n    draft.setEdition(1);\n    draft.setPrice(new BigDecimal("39.9"));\n    draft.setStore(\n        ImmutableObjects.makeIdOnly(BookStore.class, 2L)\n    );\n});\nsqlClient.save(book);\n'))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'val book = new(Book::class).by {\n    name = "SQL in Action"\n    edition = 1\n    price = BigDecimal("39.9")\n    store = makeIdOnly(BookStore::class, 2L)\n}\nsqlClient.save(book)\n')))),(0,i.kt)("p",{parentName:"li"},"This time, two SQL statements will be generated:"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Check if the object exists in the database"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.EDITION\nfrom BOOK tb_1_\nwhere\n        /* highlight-next-line */\n        tb_1_.NAME = ? /* SQL in Action */\n    and\n        /* highlight-next-line */\n        tb_1_.EDITION = ? /* 1 */\n")),(0,i.kt)("p",{parentName:"li"},"Here, the key ",(0,i.kt)("em",{parentName:"p"},"(",(0,i.kt)("inlineCode",{parentName:"em"},"name")," and ",(0,i.kt)("inlineCode",{parentName:"em"},"edition"),")")," is used to determine the existence of the to-be-saved object without id.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The second SQL statement will differ depending on the result of the first SQL: "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If no data is returned from the first SQL, insert:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"insert into BOOK(NAME, EDITION, PRICE, STORE_ID)\nvalues(\n    ? /* SQL in Action */, ? /* 1 */, ? /* 39.9 */, ? /* 2 */\n)\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If data is returned from the first SQL, update:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"update BOOK\nset\n    NAME = ? /* SQL in Action */,\n    EDITION = ? /* 1 */,\n    PRICE = ? /* 39.9 */,\n    STORE_ID = ? /* 2 */ \nwhere\n    ID = ? /* 20 */\n")))),(0,i.kt)("admonition",{parentName:"li",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Once Key properties are declared for an entity type, for objects to be saved ",(0,i.kt)("em",{parentName:"p"},"(whether aggregate root or not)"),": "),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Either the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," property must be specified")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Or all key properties must be specified ",(0,i.kt)("em",{parentName:"p"},"(",(0,i.kt)("inlineCode",{parentName:"em"},"name")," and ",(0,i.kt)("inlineCode",{parentName:"em"},"edition")," for this example)")),(0,i.kt)("p",{parentName:"li"},"  If a key property is an associated object based on foreign key ",(0,i.kt)("em",{parentName:"p"},"(whether fake or not)"),", this associated object:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Either must be ",(0,i.kt)("inlineCode",{parentName:"li"},"null")),(0,i.kt)("li",{parentName:"ul"},"Or must at least have the ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," property")))),(0,i.kt)("p",{parentName:"admonition"},"Otherwise, the save command will throw an exception indicating some ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," properties are not set for the object.")))))),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"INSERT_ONLY")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"UPDATE_ONLY")," modes are simple and need no summary. Here we focus on summarizing the ",(0,i.kt)("inlineCode",{parentName:"p"},"UPSERT")," mode."),(0,i.kt)("p",null,"If Key properties are configured for the entity type, the behavior of the ",(0,i.kt)("inlineCode",{parentName:"p"},"UPSERT")," mode is:"),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Precondition"),(0,i.kt)("th",null,"Check if object exists"),(0,i.kt)("th",null,"Check result"),(0,i.kt)("th",null,"Final behavior"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",{rowspan:"2"},"Id property specified"),(0,i.kt)("td",{rowspan:"2"},"Query data existence by id"),(0,i.kt)("td",null,"Data exists"),(0,i.kt)("td",null,"Update specified properties including key properties by id")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Data does not exist"),(0,i.kt)("td",null,"Insert data, no id generation needed since id is known")),(0,i.kt)("tr",null,(0,i.kt)("td",{rowspan:"2"},"Id property not specified"),(0,i.kt)("td",{rowspan:"2"},"Query data existence by all key properties"),(0,i.kt)("td",null,"Data exists"),(0,i.kt)("td",null,"Update specified properties except key properties by queried id")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Data does not exist"),(0,i.kt)("td",null,"Insert data, id generation needed since id is unknown")))))}y.isMDXComponent=!0}}]);