"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[2651],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),d=l,b=c["".concat(s,".").concat(d)]||c[d]||m[d]||r;return n?a.createElement(b,o(o({ref:t},p),{},{components:n})):a.createElement(b,o({ref:t},p))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),l=n(34334);const r="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(83117),l=n(67294),r=n(34334),o=n(72389),i=n(67392),s=n(7094),u=n(12466);const p="tabList__CuJ",m="tabItem_LNqP";function c(e){var t;const{lazy:n,block:o,defaultValue:c,values:d,groupId:b,className:k}=e,N=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=d??N.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),h=(0,i.l)(f,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===c?c:c??(null==(t=N.find((e=>e.props.default)))?void 0:t.props.value)??N[0].props.value;if(null!==g&&!f.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:_}=(0,s.U)(),[y,T]=(0,l.useState)(g),C=[],{blockElementScrollPositionUntilNextRender:O}=(0,u.o5)();if(null!=b){const e=v[b];null!=e&&e!==y&&f.some((t=>t.value===e))&&T(e)}const w=e=>{const t=e.currentTarget,n=C.indexOf(t),a=f[n].value;a!==y&&(O(t),T(a),null!=b&&_(b,String(a)))},I=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=C.indexOf(e.currentTarget)+1;n=C[t]??C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;n=C[t]??C[C.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",p)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},k)},f.map((e=>{let{value:t,label:n,attributes:o}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>C.push(e),onKeyDown:I,onFocus:w,onClick:w},o,{className:(0,r.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":y===t})}),n??t)}))),n?(0,l.cloneElement)(N.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},N.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function d(e){const t=(0,o.Z)();return l.createElement(c,(0,a.Z)({key:String(t)},e))}},53579:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>m});var a=n(83117),l=(n(67294),n(3905)),r=n(65488),o=n(85162);const i={sidebar_position:1,title:"\u4fee\u6539\u8bed\u53e5"},s=void 0,u={unversionedId:"mutation/update-statement",id:"mutation/update-statement",title:"\u4fee\u6539\u8bed\u53e5",description:"\u672c\u6587\u8ba8\u8bba\u524d\u63d0",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/mutation/update-statement.mdx",sourceDirName:"mutation",slug:"/mutation/update-statement",permalink:"/jimmer/zh/docs/mutation/update-statement",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/mutation/update-statement.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u4fee\u6539\u8bed\u53e5"},sidebar:"tutorialSidebar",previous:{title:"\u4fee\u6539\u7bc7",permalink:"/jimmer/zh/docs/mutation/"},next:{title:"\u5220\u9664\u8bed\u53e5",permalink:"/jimmer/zh/docs/mutation/delete-statement"}},p={},m=[{value:"\u672c\u6587\u8ba8\u8bba\u524d\u63d0",id:"\u672c\u6587\u8ba8\u8bba\u524d\u63d0",level:2},{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5",level:2},{value:"\u4f7f\u7528JOIN",id:"\u4f7f\u7528join",level:2},{value:"MySql",id:"mysql",level:3},{value:"Postgres",id:"postgres",level:3}],c={toc:m};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u672c\u6587\u8ba8\u8bba\u524d\u63d0"},"\u672c\u6587\u8ba8\u8bba\u524d\u63d0"),(0,l.kt)("p",null,"Jimmer\u652f\u6301",(0,l.kt)("a",{parentName:"p",href:"./trigger"},"\u89e6\u53d1\u5668"),"\uff0c\u5176\u4e2d\u5206\u4e3aBinLog\u89e6\u53d1\u5668\u548cTransaction\u89e6\u53d1\u5668\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u4f7f\u7528Transaction\u89e6\u53d1\u5668\uff0c\u5c06\u4f1a\u5bfc\u81f4Jimmer\u4fee\u6539\u64cd\u4f5c\u751f\u6210\u66f4\u591a\u66f4\u5b8c\u6574\u7684\u67e5\u8be2\u8bed\u53e5\u4ee5\u6a21\u62df\u89e6\u53d1\u5668\u3002"),(0,l.kt)("p",null,"\u672c\u6587\u6240\u8ba8\u8bba\u82e5\u5e72\u573a\u666f\u548c\u5b83\u4eec\u5404\u81ea\u751f\u6210\u7684SQL\uff0c\u90fd\u4ee5\u672a\u4f7f\u7528Transaction\u89e6\u53d1\u5668\u4f5c\u4e3a\u524d\u63d0\u3002"),(0,l.kt)("h2",{id:"\u57fa\u672c\u7528\u6cd5"},"\u57fa\u672c\u7528\u6cd5"),(0,l.kt)("p",null,"Update\u8bed\u53e5\u7528\u6cd5\u5982\u4e0b"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'AuthorTable author = AuthorTable.$;\n\nint affectedRowCount = sqlClient\n    .createUpdate(author)\n    .set(\n        author.firstName(),\n        author.firstName().concat("*")\n    )\n    .where(author.firstName().eq("Dan"))\n    .execute();\nSystem.out.println("Affected row count: " + affectedRowCount);\n'))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val affectedRowCount = sqlClient\n    .createUpdate(Author::class) {\n        set(\n            table.firstName, \n            concat(table.firstName, value("*"))\n        )\n        where(table.firstName eq "Dan")\n    }\n    .execute()\nprintln("Affected row count: $affectedRowCount")\n')))),(0,l.kt)("p",null,"\u6700\u7ec8\u751f\u6210\u7684SQL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"update AUTHOR tb_1_ \nset FIRST_NAME = concat(tb_1_.FIRST_NAME, ?) \nwhere tb_1_.FIRST_NAME = ?\n")),(0,l.kt)("h2",{id:"\u4f7f\u7528join"},"\u4f7f\u7528JOIN"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cupdate\u8bed\u53e5\u4e0d\u652f\u6301join\uff0c\u8fd9\u4f1a\u5bfc\u81f4\u5f02\u5e38"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'AuthorTableEx author = AuthorTableEx.$;\n\nint affectedRowCount = sqlClient\n    .createUpdate(author)\n    .set(\n        author.firstName(),\n        author.firstName().concat("*")\n    )\n    .where(\n        author\n            // highlight-next-line\n            .books()\n            .name()\n            .eq("Learning GraphQL")\n    )\n    .execute();\nSystem.out.println("Affected row count: " + affectedRowCount);\n'))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val affectedRowCount = sqlClient\n    .createUpdate(Author::class) {\n        set(\n            table.firstName,\n            concat(table.firstName, value("*"))\n        )\n        where(\n            table\n                // highlight-next-line\n                .books\n                .name \n                eq "Learning GraphQL"\n        )\n    }\n    .execute()\nprintln("Affected row count: $affectedRowCount")\n')))),(0,l.kt)("p",null,"\u5f02\u5e38\u4fe1\u606f\u5982\u4e0b"),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Table joins for update statement is forbidden by the current dialect, but there is a join ",(0,l.kt)("inlineCode",{parentName:"p"},"'Author.books'"),".")),(0,l.kt)("p",null,"\u5f53\u4f7f\u7528MySql\u6216Postgres\u65f6\uff0cupdate\u8bed\u53e5\u53ef\u4ee5\u4f7f\u7528JOIN\u8bed\u53e5\u3002"),(0,l.kt)("h3",{id:"mysql"},"MySql"),(0,l.kt)("p",null,"\u9996\u5148\uff0c\u9700\u8981\u5728\u521b\u5efaSqlClient\u65f6\uff0c\u6307\u5b9a\u65b9\u8a00\u4e3aMySqlDialect"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"SpringBoot\u4e0b\u7684\u914d\u7f6e"),(0,l.kt)("p",{parentName:"li"},"\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"applicaion.yml"),"\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"application.properties"),"\u4e2d\u58f0\u660e\u914d\u7f6e\uff0c\u5176\u540d\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"jimmer.dialect"),"\uff0c\u5176\u503c\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"org.babyfish.jimmer.sql.dialect.MySqlDialect"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u975eSpringBoot\u4e0b\u7684\u914d\u7f6e"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"JSqlClient sqlClient = JSqlClient\n    .newBuilder()\n    .setDialect(\n        new org.babyfish.jimmer.sql.dialect.MySqlDialect()\n    )\n    ...\n    .build();\n"))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val sqlClient = newKSqlClient {\n    setDialect(org.babyfish.jimmer.sql.dialect.MySqlDialect())\n}\n")))))),(0,l.kt)("p",null,"\u7136\u540e\uff0c\u5c31\u53ef\u4ee5\u5728update\u4e2d\u4f7f\u7528JOIN\u4e86"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'AuthorTableEx author = AuthorTableEx.$;\n\nint affectedRowCount = sqlClient\n    .createUpdate(author)\n    .set(\n        author.firstName(),\n        author.firstName().concat("*")\n    )\n    .set(\n        author.books().name(),\n        author.books().name().concat("*")\n    )\n    .set(\n        author.books().store().name(),\n        author.books().store().name().concat("*")\n    )\n    .where(\n        author.books().store().name().eq("MANNING")\n    )\n    .execute();\nSystem.out.println("Affected row count: " + affectedRowCount);\n'))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val affectedRowCount = sqlClient\n    .createUpdate(Author::class) {\n        set(\n            table.firstName,\n            concat(table.firstName, value("*"))\n        )\n        set(\n            table.books.name,\n            concat(table.books.name, value("*"))\n        )\n        set(\n            table.books.store.name,\n            concat(table.books.store.name, value("*"))\n        )\n        where(\n            table.books.store.name eq "MANNING"\n        )\n    }\n    .execute()\nprintln("Affected row count: $affectedRowCount")\n')))),(0,l.kt)("p",null,"\u6700\u7ec8\u751f\u6210\u9488\u5bf9MySQL\u7684SQL\u8bed\u53e5\uff0c\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"update \n    AUTHOR tb_1_ \n    inner join BOOK_AUTHOR_MAPPING as tb_2_ \n        on tb_1_.ID = tb_2_.AUTHOR_ID \n    inner join BOOK as tb_3_ \n        on tb_2_.BOOK_ID = tb_3_.ID \n    inner join BOOK_STORE as tb_4_ \n        on tb_3_.STORE_ID = tb_4_.ID \nset \n    tb_1_.FIRST_NAME = concat(tb_1_.FIRST_NAME, ?), \n    tb_3_.NAME = concat(tb_3_.NAME, ?), \n    tb_4_.NAME = concat(tb_4_.NAME, ?) \nwhere \n    tb_4_.NAME = ?\n")),(0,l.kt)("h3",{id:"postgres"},"Postgres"),(0,l.kt)("p",null,"\u9996\u5148\uff0c\u9700\u8981\u5728\u521b\u5efaSqlClient\u65f6\uff0c\u6307\u5b9a\u65b9\u8a00\u4e3aPostgresDialect"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"SpringBoot\u4e0b\u7684\u914d\u7f6e"),(0,l.kt)("p",{parentName:"li"},"\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"applicaion.yml"),"\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"application.properties"),"\u4e2d\u58f0\u660e\u914d\u7f6e\uff0c\u5176\u540d\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"jimmer.dialect"),"\uff0c\u5176\u503c\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"org.babyfish.jimmer.sql.dialect.PostgresDialect"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u975eSpringBoot\u4e0b\u7684\u914d\u7f6e"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"JSqlClient sqlClient = JSqlClient\n    .newBuilder()\n    .setDialect(\n        new org.babyfish.jimmer.sql.dialect.PostgresDialect()\n    )\n    ...\n    .build();\n"))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val sqlClient = newKSqlClient {\n    setDialect(org.babyfish.jimmer.sql.dialect.PostgresDialect())\n}\n")))))),(0,l.kt)("p",null,"\u7136\u540e\uff0c\u5c31\u53ef\u4ee5\u5728update\u4e2d\u4f7f\u7528JOIN\u4e86"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'AuthorTableEx author = AuthorTableEx.$;\n\nint affectedRowCount = sqlClient\n    .createUpdate(author)\n    .set(\n        author.firstName(),\n        author.firstName().concat("*")\n    )\n    .where(\n        author.books().store().name().eq("MANNING")\n    )\n    .execute();\nSystem.out.println("Affected row count: " + affectedRowCount);\n'))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val affectedRowCount = sqlClient\n    .createUpdate(Author::class) {\n        set(\n            table.firstName,\n            concat(table.firstName, value("*"))\n        )\n        where(\n            table.books.store.name eq "MANNING"\n        )\n    }\n    .execute()\nprintln("Affected row count: $affectedRowCount")\n')))),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u548cMySql\u4e0d\u540c\uff0c\u5728Postgres\u4e2d\u4f7f\u7528update\u8bed\u53e5\u7684JOIN\u5b58\u5728\u5982\u4e0b\u9650\u5236"),(0,l.kt)("ol",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u53ea\u80fd\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"where"),"\u5b50\u53e5\u4e2d\u4f7f\u7528\u8868\u8fde\u63a5\uff0c\u4e0d\u80fd\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"set"),"\u5b50\u53e5\u4e2d\u4f7f\u7528\u8868\u8fde\u63a5\u3002\u5373Postgres\u8fd8\u662f\u53ea\u5141\u8bb8\u4fee\u6539\u5f53\u524d\u8868\u7684\u5b57\u6bb5\uff0c\u652f\u6301\u8fde\u63a5\u5230\u5176\u5b83\u8868\u4ec5\u4ec5\u662f\u4e3a\u4e86\u505a\u6761\u4ef6\u8fc7\u6ee4\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u8fde\u63a5\u8def\u5f84\u53ef\u4ee5\u5177\u6709\u591a\u7ea7\uff0c\u5982",(0,l.kt)("inlineCode",{parentName:"p"},"author.books().store()"),"\uff0c\u5176\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"books()"),"\u662f\u7b2c1\u7ea7\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"store()"),"\u662f\u7b2c2\u7ea7\u3002\u5176\u4e2d\uff0c\u7b2c\u4e00\u7ea7\u8fde\u63a5\u7684\u7c7b\u578b\u5fc5\u987b\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"inner join"),"\u3002")))),(0,l.kt)("p",null,"\u6700\u7ec8\u751f\u6210\u9488\u5bf9Postgres\u7684SQL\u8bed\u53e5\uff0c\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"update \n    AUTHOR tb_1_ \nset \n    FIRST_NAME = concat(tb_1_.FIRST_NAME, ?) \nfrom BOOK_AUTHOR_MAPPING as tb_2_ \u2776\ninner join BOOK as tb_3_ \u2777\n    on tb_2_.BOOK_ID = tb_3_.ID \ninner join BOOK_STORE as tb_4_ \u2778\n    on tb_3_.STORE_ID = tb_4_.ID \nwhere \n    tb_1_.ID = tb_2_.AUTHOR_ID \u2779\nand \n    tb_4_.NAME = ?\n")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u8fde\u63a5\u8def\u5f84",(0,l.kt)("inlineCode",{parentName:"p"},"author.books().store()"),"\u6709\u4e24\u7ea7\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"books()"),"\u662f\u7b2c1\u7ea7\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"store()"),"\u662f\u7b2c2\u7ea7\u3002"),(0,l.kt)("ol",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u7b2c\u4e00\u7ea7",(0,l.kt)("inlineCode",{parentName:"p"},"books()"),"\u6d89\u53ca\u4e24\u5f20\u8868"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u2776 \u5904\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"BOOK_AUTHOR_MAPPING"),"\u8868\uff0c\u4f46\u8fd9\u91cc\u7f3a\u5c11\u8fde\u63a5\u6761\u4ef6\uff0c\u8fde\u63a5\u6761\u4ef6\u5728\u2779\u5904\u8865\u4e0a\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u2777 \u5904\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"BOOK"),"\u8868"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u7b2c\u4e8c\u7ea7",(0,l.kt)("inlineCode",{parentName:"p"},"store()"),"\u6d89\u53ca\u4e00\u5f20\u8868"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u2779 ",(0,l.kt)("inlineCode",{parentName:"li"},"\u5904\u7684"),"BOOK_STORE`\u8868")))),(0,l.kt)("p",{parentName:"admonition"},"\u53ef\u89c1\uff0c\u5728Postgres\u7684update\u8bed\u53e5\u4e2d\uff0c\u76f4\u63a5\u548c\u4e3b\u8868\u76f8\u5173\u7684\u8868\u8fde\u63a5\u4e0d\u80fd\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"join")," + ",(0,l.kt)("inlineCode",{parentName:"p"},"on"),"\u7684\u5199\u6cd5\uff0c\u5fc5\u987b\u7b49\u4ef7\u53d8\u6362\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"from")," + ",(0,l.kt)("inlineCode",{parentName:"p"},"where"),"\u7684\u5199\u6cd5\u3002"),(0,l.kt)("p",{parentName:"admonition"},"\u8fd9\u5c31\u662fJimmer\u89c4\u5b9aPostgres\u65b9\u8a00\u4e0bupdate\u8bed\u53e5\u7b2c\u4e00\u7ea7\u8fde\u63a5\u7684\u7c7b\u578b\u5fc5\u987b\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"inner join"),"\u7684\u539f\u56e0\u3002")))}d.isMDXComponent=!0}}]);