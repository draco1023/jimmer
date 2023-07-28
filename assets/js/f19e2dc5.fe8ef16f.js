"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[9167],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var r=a.createContext({}),u=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(r.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=l,h=d["".concat(r,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),l=n(34334);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(o,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(83117),l=n(67294),o=n(34334),i=n(72389),s=n(67392),r=n(7094),u=n(12466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:n,block:i,defaultValue:d,values:m,groupId:h,className:k}=e,g=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,s.l)(b,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const T=null===d?d:d??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==T&&!b.some((e=>e.value===T)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${T}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:y}=(0,r.U)(),[L,N]=(0,l.useState)(T),O=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=h){const e=f[h];null!=e&&e!==L&&b.some((t=>t.value===e))&&N(e)}const w=e=>{const t=e.currentTarget,n=O.indexOf(t),a=b[n].value;a!==L&&(x(t),N(a),null!=h&&y(h,String(a)))},A=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;n=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;n=O[t]??O[O.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,o.Z)("tabs-container",c)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},k)},b.map((e=>{let{value:t,label:n,attributes:i}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:L===t?0:-1,"aria-selected":L===t,key:t,ref:e=>O.push(e),onKeyDown:A,onFocus:w,onClick:w},i,{className:(0,o.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":L===t})}),n??t)}))),n?(0,l.cloneElement)(g.filter((e=>e.props.value===L))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==L})))))}function m(e){const t=(0,i.Z)();return l.createElement(d,(0,a.Z)({key:String(t)},e))}},87668:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var a=n(83117),l=(n(67294),n(3905)),o=n(65488),i=n(85162);const s={sidebar_position:6,title:"Mutate middle table"},r=void 0,u={unversionedId:"old-en/jimmer-sql/mutation/association",id:"old-en/jimmer-sql/mutation/association",title:"Mutate middle table",description:"First, the middle table is hidden by the object model and has no direct corresponding java entity type. This issue has been discussed in the article Query middle Table and will not be repeated here.",source:"@site/docs/old-en/jimmer-sql/mutation/association.mdx",sourceDirName:"old-en/jimmer-sql/mutation",slug:"/old-en/jimmer-sql/mutation/association",permalink:"/jimmer/docs/old-en/jimmer-sql/mutation/association",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/old-en/jimmer-sql/mutation/association.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Mutate middle table"},sidebar:"tutorialSidebar",previous:{title:"Delete Command",permalink:"/jimmer/docs/old-en/jimmer-sql/mutation/delete-command"},next:{title:"Draft Interceptor",permalink:"/jimmer/docs/old-en/jimmer-sql/mutation/interceptor"}},c={},p=[{value:"The scope of this article",id:"the-scope-of-this-article",level:2},{value:"Insert assciations",id:"insert-assciations",level:2},{value:"Inverse transform",id:"inverse-transform",level:2},{value:"Batch insert",id:"batch-insert",level:2},{value:"Check for existence",id:"check-for-existence",level:2},{value:"Delete associations",id:"delete-associations",level:2},{value:"Batch delete",id:"batch-delete",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"First, the middle table is hidden by the object model and has no direct corresponding java entity type. This issue has been discussed in the article ",(0,l.kt)("a",{parentName:"p",href:"../query/association"},"Query middle Table")," and will not be repeated here."),(0,l.kt)("p",null,"Also, in the ",(0,l.kt)("a",{parentName:"p",href:"./save-command"},"Save command")," chapter, we introduced the save command. It can compare the existing data in the database with the new data to be saved by the user. If an associated properties based on the middle table changes, the data of middle table will be modified."),(0,l.kt)("p",null,"It is true that the save command has many functions, including the modifying middle table. However, sometimes, we just need to simply insert or delete the data of middle table, we do not need the powerful functions of the save command, but we want the modification behavior of the middle table to be simple and efficient enough."),(0,l.kt)("p",null,"jimmer-sql allows developers to directly insert and delete data for middle tables in the simplest and most efficient way."),(0,l.kt)("h2",{id:"the-scope-of-this-article"},"The scope of this article"),(0,l.kt)("p",null,"Jimmer supports ",(0,l.kt)("a",{parentName:"p",href:"../advanced/trigger"},"trigger"),", which is divided into binlog trigger and transaction trigger."),(0,l.kt)("p",null,"Using transaction triggers will cause jimmer's modification operations to generate more and more complete queries to simulate triggers."),(0,l.kt)("p",null,"Several scenarios have been discussed in this article, and the generated SQL will be discussed for each scenario, all on the premise that transaction triggers are not used."),(0,l.kt)("h2",{id:"insert-assciations"},"Insert assciations"),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"sqlClient\n    .getAssociations(BookProps.AUTHORS)\n    // highlight-next-line\n    .save(12L, 3L);\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"sqlClient\n    .getAssociations(Book::authors)\n    // highlight-next-line\n    .save(12L, 3L)\n")))),(0,l.kt)("p",null,"The generated SQL is as follows"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"insert into \n    BOOK_AUTHOR_MAPPING(\n        /* highlight-next-line */\n        BOOK_ID, AUTHOR_ID\n    ) \n    values (?, ?)\n")),(0,l.kt)("p",null,"This example demonstrates how to use the association property ",(0,l.kt)("inlineCode",{parentName:"p"},"Book.authors")," to manipulate the middle table."),(0,l.kt)("p",null,"In the same way, we can also achieve the same purpose through the association property ",(0,l.kt)("inlineCode",{parentName:"p"},"Authors.books"),":"),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"sqlClient\n    .getAssociations(AuthorProps.BOOKS)\n    // highlight-next-line\n    .save(3L, 12L);\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"sqlClient\n    .getAssociations(Author::books)\n    // highlight-next-line\n    .save(3L, 12L)\n")))),(0,l.kt)("p",null,"Note that the parameter order of the ",(0,l.kt)("inlineCode",{parentName:"p"},"save")," method is different compared to the previous example because the direction of the association is different."),(0,l.kt)("p",null,"The generated SQL is as follows"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"insert into \n    BOOK_AUTHOR_MAPPING(\n        /* highlight-next-line */\n        AUTHOR_ID, BOOK_ID\n    )\n    values (?, ?)\n")),(0,l.kt)("h2",{id:"inverse-transform"},"Inverse transform"),(0,l.kt)("p",null,"For bidirectional associations, you can use ",(0,l.kt)("inlineCode",{parentName:"p"},"reverse")," to switch between positive and negative associations"),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Associations bookToAuthor = sqlClient\n    .getAssociations(BookProps.AUTHORS);\nAssociations authorToBook = sqlClient\n    .getAssociations(AuthorProps.BOOKS);\nAssociations authorToBook2 = \n    // highlight-next-line\n    bookToAuthor.reverse();\nAssociations bookToAuthor2 =\n    // highlight-next-line\n    authorToBook.reverse();\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val bookToAuthor = \n    sqlClient.getAssociations(\n        Book::authors\n    )\nval authorToBook = \n    sqlClient.getAssociations(\n        Author::books\n    )\nval authorToBook2 = \n    // highlight-next-line\n    bookToAuthor.reverse()\nval bookToAuthor2 = \n    // highlight-next-line\n    authorToBook.reverse()\n")))),(0,l.kt)("p",null,"In this code:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bookToAuthor")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"bookToAuthor2")," are exactly equivalent"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"authorToBook")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"authorToBook2")," are exactly equivalent")),(0,l.kt)("h2",{id:"batch-insert"},"Batch insert"),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"sqlClient\n    .getAssociations(BookProps.AUTHORS)\n    // highlight-next-line\n    .batchSave(\n        Arrays.asList(\n            new Tuple2<>(10L, 1L),\n            new Tuple2<>(11L, 1L),\n            new Tuple2<>(12L, 1L),\n            new Tuple2<>(10L, 3L),\n            new Tuple2<>(11L, 3L),\n            new Tuple2<>(12L, 3L)\n        )\n    );\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"sqlClient\n    .getAssociations(\n        Book::authors\n    ) \n    // highlight-next-line\n    .batchSave(\n        listOf(\n            Tuple2(10L, 1L),\n            Tuple2(11L, 1L),\n            Tuple2(12L, 1L),\n            Tuple2(10L, 3L),\n            Tuple2(11L, 3L),\n            Tuple2(12L, 3L)\n        )\n    )\n")))),(0,l.kt)("p",null,"There are 3 books, 2 authors, and 6 combinations in total. The ",(0,l.kt)("inlineCode",{parentName:"p"},"batchSave")," method inserts all these 6 combinations into the middle table, and the generated SQL is as follows"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"insert into BOOK_AUTHOR_MAPPING(\n    BOOK_ID, AUTHOR_ID\n) values \n    /* highlight-start */\n    (?, ?), \n    (?, ?), \n    (?, ?), \n    (?, ?), \n    (?, ?), \n    (?, ?)\n    /* highlight-end */\n")),(0,l.kt)("p",null,"The code above is very cumbersome, ",(0,l.kt)("inlineCode",{parentName:"p"},"3 * 2 = 6")," is acceptable, but what about ",(0,l.kt)("inlineCode",{parentName:"p"},"7 * 9 = 63"),"? Is it acceptable to build 63 tuples?"),(0,l.kt)("p",null,"jimmer-sql provides a shortcut"),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"sqlClient\n    .getAssociations(BookProps.AUTHORS)\n    // Batch save `Cartesian product` \n    // of two id collections\n    // highlight-next-line\n    .batchSave(\n        Arrays.asList(\n            10L, 11L, 12L\n        ),\n        Arrays.asList(\n            1L, 3L\n        )\n    );\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"sqlClient\n    .getAssociations(\n        Book::authors\n    )\n    // Batch save `Cartesian product` \n    // of two id collections\n    // highlight-next-line\n    .batchSave(\n        listOf(10L, 11L, 12L),\n        listOf(1L, 3L)\n    )\n")))),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"batchSave")," method above takes two collection parameters and inserts the Cartesian product of the two collections into the middle table table, so the function is the same as the previous example."),(0,l.kt)("h2",{id:"check-for-existence"},"Check for existence"),(0,l.kt)("p",null,"If you insert an existing id tuple into the middle table, the database will report an error because the uniqueness constraint is violated."),(0,l.kt)("p",null,"To solve this problem, an existence check can be performed."),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"sqlClient\n    .getAssociations(BookProps.AUTHORS)\n    .batchSaveCommand(\n        Arrays.asList(\n            10L, 11L, 12L\n        ),\n        Arrays.asList(\n            1L, 3L\n        )\n    )\n    // highlight-next-line\n    .checkExistence()\n    .execute();\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"sqlClient\n    .getAssociations(\n        Book::authors\n    )\n    // highlight-next-line\n    .batchSave(\n        listOf(10L, 11L, 12L),\n        listOf(1L, 3L),\n        // highlight-next-line\n        checkExistence = true\n    )\n")))),(0,l.kt)("p",null,"Here ",(0,l.kt)("inlineCode",{parentName:"p"},"checkExistence()")," means to first check which data to be inserted already exists, and then only insert data that does not exist."),(0,l.kt)("p",null,"The generated SQL statement is as follows"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Check which data to be inserted already exists"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    BOOK_ID, AUTHOR_ID \nfrom BOOK_AUTHOR_MAPPING \nwhere \n    (BOOK_ID, AUTHOR_ID) in(\n        (?, ?), \n        (?, ?),\n        (?, ?),\n        (?, ?),\n        (?, ?),\n        (?, ?)\n    )\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Using the query results of the previous step, the data that really needs to be inserted can be calculated. If there is no data to be inserted, skip this step; otherwise, execute this step."),(0,l.kt)("p",{parentName:"li"},"Here, assuming that there are still two rows that really need to be inserted after the judgment, the generated SQL is:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"insert into BOOK_AUTHOR_MAPPING(\n    BOOK_ID, AUTHOR_ID\n) values \n    (?, ?), \n    (?, ?)\n")))),(0,l.kt)("h2",{id:"delete-associations"},"Delete associations"),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"sqlClient\n    .getAssociations(BookProps.AUTHORS)\n    // highlight-next-line\n    .delete(12L, 3L);\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"sqlClient\n    .getAssociations(\n        Book::authors\n    ) \n    // highlight-next-line\n    .delete(12L, 3L)\n")))),(0,l.kt)("p",null,"The generated SQL is as follows"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"delete from BOOK_AUTHOR_MAPPING \nwhere \n    (BOOK_ID, AUTHOR_ID) in (\n        (?, ?)\n    )\n")),(0,l.kt)("h2",{id:"batch-delete"},"Batch delete"),(0,l.kt)("p",null,"Similar to batch insert, there are two ways to implement batch delete"),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"sqlClient\n    .getAssociations(BookProps.AUTHORS)\n    // highlight-next-line\n    .batchDelete(\n        Arrays.asList(\n            new Tuple2<>(10L, 1L),\n            new Tuple2<>(11L, 1L),\n            new Tuple2<>(12L, 1L),\n            new Tuple2<>(10L, 3L),\n            new Tuple2<>(11L, 3L),\n            new Tuple2<>(12L, 3L),\n        )\n    );\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"sqlClient\n    .getAssociations(\n        Book::authors\n    ) \n    // highlight-next-line\n    .batchDelete(\n        listOf(\n            Tuple2(10L, 1L),\n            Tuple2(11L, 1L),\n            Tuple2(12L, 1L),\n            Tuple2(10L, 3L),\n            Tuple2(11L, 3L),\n            Tuple2(12L, 3L)\n        )\n    )\n")))),(0,l.kt)("p",null,"or"),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"sqlClient\n    .getAssociations(BookProps.AUTHORS)\n    // highlight-next-line\n    .batchDelete(\n        Arrays.asList(10L, 11L, 12L),\n        Arrays.asList(1L, 3L)\n    );\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"sqlClient\n    .getAssociations(\n        Book::authors\n    ) \n    // highlight-next-line\n    .batchDelete(\n        listOf(10L, 11L, 12L),\n        listOf(1L, 3L)\n    )\n")))),(0,l.kt)("p",null,"The generated SQL is as follows"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"delete from BOOK_AUTHOR_MAPPING \nwhere \n    (BOOK_ID, AUTHOR_ID) in (\n        (?, ?), \n        (?, ?),\n        (?, ?), \n        (?, ?),\n        (?, ?), \n        (?, ?)\n    )\n")))}m.isMDXComponent=!0}}]);