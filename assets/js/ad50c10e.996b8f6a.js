"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[9453],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,b=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(b,l(l({ref:t},c),{},{components:n})):a.createElement(b,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(34334);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(83117),r=n(67294),o=n(34334),l=n(72389),i=n(67392),s=n(7094),u=n(12466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:n,block:l,defaultValue:d,values:m,groupId:b,className:h}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,i.l)(y,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const T=null===d?d:d??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==T&&!y.some((e=>e.value===T)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${T}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:v}=(0,s.U)(),[N,j]=(0,r.useState)(T),_=[],{blockElementScrollPositionUntilNextRender:w}=(0,u.o5)();if(null!=b){const e=g[b];null!=e&&e!==N&&y.some((t=>t.value===e))&&j(e)}const q=e=>{const t=e.currentTarget,n=_.indexOf(t),a=y[n].value;a!==N&&(w(t),j(a),null!=b&&v(b,String(a)))},O=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=_.indexOf(e.currentTarget)+1;n=_[t]??_[0];break}case"ArrowLeft":{const t=_.indexOf(e.currentTarget)-1;n=_[t]??_[_.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},h)},y.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>_.push(e),onKeyDown:O,onFocus:q,onClick:q},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,r.cloneElement)(f.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},4793:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var a=n(83117),r=(n(67294),n(3905)),o=n(65488),l=n(85162);const i={sidebar_position:3,title:"Selection"},s=void 0,u={unversionedId:"old-en/jimmer-sql/query/selection",id:"old-en/jimmer-sql/query/selection",title:"Selection",description:"The call to method select at the end of the query is not only used to generate the select clause of SQL, but also used to express the return type of the query in the Java language.",source:"@site/docs/old-en/jimmer-sql/query/selection.mdx",sourceDirName:"old-en/jimmer-sql/query",slug:"/old-en/jimmer-sql/query/selection",permalink:"/jimmer/docs/old-en/jimmer-sql/query/selection",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/old-en/jimmer-sql/query/selection.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Selection"},sidebar:"tutorialSidebar",previous:{title:"Pagination Query",permalink:"/jimmer/docs/old-en/jimmer-sql/query/pagination"},next:{title:"Object Fetcher",permalink:"/jimmer/docs/old-en/jimmer-sql/query/fetcher"}},c={},p=[{value:"Use expressions as the queried columns",id:"use-expressions-as-the-queried-columns",level:2},{value:"Use objects as the queried columns",id:"use-objects-as-the-queried-columns",level:2},{value:"Use object fetchers as the queried columns",id:"use-object-fetchers-as-the-queried-columns",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The call to method ",(0,r.kt)("inlineCode",{parentName:"p"},"select")," at the end of the query is not only used to generate the select clause of SQL, but also used to express the return type of the query in the Java language."),(0,r.kt)("p",null,"The method ",(0,r.kt)("inlineCode",{parentName:"p"},"select")," of the query accepts from 1 to 9 parameters. Different number of parameters will lead to different query return types"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The type of the unique column being queried"),(0,r.kt)("li",{parentName:"ol"},"Tuple2","<","T1, T2",">"),(0,r.kt)("li",{parentName:"ol"},"Tuple3","<","T1, T2, T3",">"),(0,r.kt)("li",{parentName:"ol"},"Tuple4","<","T1, T2, T3, T4",">"),(0,r.kt)("li",{parentName:"ol"},"Tuple5","<","T1, T2, T3, T4, T5, T6",">"),(0,r.kt)("li",{parentName:"ol"},"Tuple6","<","T1, T2, T3, T4, T5, T6, T7",">"),(0,r.kt)("li",{parentName:"ol"},"Tuple7","<","T1, T2, T3, T4, T5, T6, T7, T8",">"),(0,r.kt)("li",{parentName:"ol"},"Tuple8","<","T1, T2, T3, T4, T5, T6, T7, T8",">"),(0,r.kt)("li",{parentName:"ol"},"Tuple9","<","T1, T2, T3, T4, T5, T6, T7, T8, T9",">")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"After reading this, readers may be thinking, is 9 columns too few?"),(0,r.kt)("p",{parentName:"admonition"},"In fact, each column here can be not only a single expression, but also an entire object (table)."),(0,r.kt)("p",{parentName:"admonition"},"So, with such support, 9 columns are enough.")),(0,r.kt)("h2",{id:"use-expressions-as-the-queried-columns"},"Use expressions as the queried columns"),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"BookTable book = BookTable.$;\n\nList<Tuple2<Long, BigDecimal>> tuples = sqlClient\n    .createQuery(book)\n    .groupBy(book.store().id())\n    // highlight-next-line\n    .select(\n        book.store().id(),\n        book.price().avg()\n    )\n    .execute();\n"))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val tuples: List<Tuple2<UUID, BigDecimal>> = \n    sqlClient\n        .createQuery(Book::class) {\n            groupBy(table.store.id)\n            // highlight-next-line\n            select(\n                table.store.id,\n                avg(table.price)\n            )\n        }\n        .execute()\n")))),(0,r.kt)("p",null,"The generate SQL as follows"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    tb_1_.STORE_ID, \n    avg(tb_1_.PRICE) \nfrom BOOK as tb_1_ \ngroup by tb_1_.STORE_ID\n")),(0,r.kt)("p",null,"The print result is as follows"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Tuple2{_1=2L, _2=80.333333333333}\nTuple2{_1=1L, _2=58.500000000000}\n")),(0,r.kt)("h2",{id:"use-objects-as-the-queried-columns"},"Use objects as the queried columns"),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'BookTable book = BookTable.$;\n\nList<Tuple2<BookStore, Book>> tuples = sqlClient\n    .createQuery(book)\n    .where(book.store().name().eq("MANNING"))\n    // highlight-next-line\n    .select(\n        book.store(),\n        book\n    )\n    .execute();\n'))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val tuples: List<Tuple2<BookStore, Book>> = \n    sqlClient\n        .createQuery(Book::class) {\n            groupBy(table.store.name eq "MANNING")\n            // highlight-next-line\n            select(\n                table.store,\n                table\n            )\n        }\n        .execute()\n')))),(0,r.kt)("p",null,"The generate SQL as follows"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select\n\n    /* Columns for `book.store()` */\n    tb_1_.STORE_ID, /* In fact, it's tb_2_.ID */\n    tb_2_.NAME, \n    tb_2_.WEBSITE, \n    \n    /* Columns for `book` */\n    tb_1_.ID, \n    tb_1_.NAME, \n    tb_1_.EDITION, \n    tb_1_.PRICE, \n    tb_1_.STORE_ID\n\nfrom BOOK as tb_1_ \ninner join BOOK_STORE as tb_2_ \n    on tb_1_.STORE_ID = tb_2_.ID \nwhere tb_2_.NAME = ?\n")),(0,r.kt)("p",null,"The print result is as follows (The actual print result is compact, formatted here for ease of reading)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Tuple2{\n    _1={\n        "id":2,\n        "name":"MANNING",\n        "website":null\n    }, \n    _2={\n        "id":"a62f7aa3-9490-4612-98b5-98aae0e77120",\n        "name":"GraphQL in Action",\n        "edition":1,\n        "price":80.00,\n        "store":{"id":2}\n    }\n}\nTuple2{\n    _1={\n        "id":2,\n        "name":"MANNING",\n        "website":null\n    }, \n    _2={\n        "id":"e37a8344-73bb-4b23-ba76-82eac11f03e6",\n        "name":"GraphQL in Action",\n        "edition":2,\n        "price":81.00,\n        "store":{"id":2}\n    }\n}\nTuple2{\n    _1={\n        "id":2,\n        "name":"MANNING",\n        "website":null\n    }, \n    _2={\n        "id":"780bdf07-05af-48bf-9be9-f8c65236fecc",\n        "name":"GraphQL in Action",\n        "edition":3,\n        "price":80.00,\n        "store":{"id":2}\n    }\n}\n')),(0,r.kt)("p",null,"In this example, we query the entire objects."),(0,r.kt)("p",null,"However, object is complex type with many properties, including associated properties. What is the default format of object?"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Property decorated by ",(0,r.kt)("inlineCode",{parentName:"li"},"@Transient")," will not be set and are in the unloaded state. Accessing it directly will causes exception and it is be ignored during JSON serialization."),(0,r.kt)("li",{parentName:"ol"},"The association property based on the middle table will not be set and are in the unloaded state. Accessing it directly will causes exception and it is ignored during JSON serialization."),(0,r.kt)("li",{parentName:"ol"},"The inverse association property, that is, the property configured by ",(0,r.kt)("inlineCode",{parentName:"li"},"mappedBy")," of association annotation, such as ",(0,r.kt)("inlineCode",{parentName:"li"},'@OneToOne(mappedBy = "...")'),", ",(0,r.kt)("inlineCode",{parentName:"li"},'@OneToMany(mappedBy = "...")'),", ",(0,r.kt)("inlineCode",{parentName:"li"},'@ ManyToOne(mappedBy = "...")'),". It will not be set and are in the unloaded state, Accessing it directly will causes exception and it is ignored during JSON serialization."),(0,r.kt)("li",{parentName:"ol"},"Scalar property will be set and can be read legally."),(0,r.kt)("li",{parentName:"ol"},"Many-to-one association property based on foreign key will be set and can be read legally, but only the id of parent object is set.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Many-to-one association property based on foreign key is always set to a parent object with only id property."),(0,r.kt)("p",{parentName:"admonition"},"The reason for this is that the id property of the parent object is actually equivalent to the foreign key of the current table. Querying the current object means knowing the id of the parent object."),(0,r.kt)("p",{parentName:"admonition"},"If the reader has experience using Hibernate, it is not difficult to find that the parent object with only id property is actually very similar to the proxy object of Hibernate.")),(0,r.kt)("p",null,"While the code to return the entire object in a query is simple, the default object format often doesn't fit well with development needs."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Object properties that we don't need are loaded, which is a waste. This is called the ",(0,r.kt)("b",null,"over fetch")," problem."),(0,r.kt)("li",{parentName:"ol"},"The object properties we need have not been loaded so that the program cannot work normlly, this is called the ",(0,r.kt)("b",null,"under fetch")," problem.")),(0,r.kt)("p",null,"In order to make the object returned by the query neither over fetch nor under fetch, the method ",(0,r.kt)("inlineCode",{parentName:"p"},"select")," of the query can also accept another type of parameter: Object Fetcher."),(0,r.kt)("h2",{id:"use-object-fetchers-as-the-queried-columns"},"Use object fetchers as the queried columns"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"./fetcher"},"Object Fetcher")," is a very powerful feature provided by jimmer-sql, comparable to GraphQL."),(0,r.kt)("p",{parentName:"admonition"},"Therefore, the object fetcher is a separate document, please go to the next document to learn more.")))}m.isMDXComponent=!0}}]);