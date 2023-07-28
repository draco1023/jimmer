"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[3304],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),u=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(t),d=r,g=m["".concat(c,".").concat(d)]||m[d]||s[d]||o;return t?a.createElement(g,l(l({ref:n},p),{},{components:t})):a.createElement(g,l({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(67294),r=t(34334);const o="tabItem_Ymn6";function l(e){let{children:n,hidden:t,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>d});var a=t(83117),r=t(67294),o=t(34334),l=t(72389),i=t(67392),c=t(7094),u=t(12466);const p="tabList__CuJ",s="tabItem_LNqP";function m(e){var n;const{lazy:t,block:l,defaultValue:m,values:d,groupId:g,className:b}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=d??k.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),f=(0,i.l)(v,((e,n)=>e.value===n.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===m?m:m??(null==(n=k.find((e=>e.props.default)))?void 0:n.props.value)??k[0].props.value;if(null!==y&&!v.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:N}=(0,c.U)(),[x,C]=(0,r.useState)(y),T=[],{blockElementScrollPositionUntilNextRender:j}=(0,u.o5)();if(null!=g){const e=h[g];null!=e&&e!==x&&v.some((n=>n.value===e))&&C(e)}const E=e=>{const n=e.currentTarget,t=T.indexOf(n),a=v[t].value;a!==x&&(j(n),C(a),null!=g&&N(g,String(a)))},O=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;t=T[n]??T[0];break}case"ArrowLeft":{const n=T.indexOf(e.currentTarget)-1;t=T[n]??T[T.length-1];break}}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},b)},v.map((e=>{let{value:n,label:t,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===n?0:-1,"aria-selected":x===n,key:n,ref:e=>T.push(e),onKeyDown:O,onFocus:E,onClick:E},l,{className:(0,o.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":x===n})}),t??n)}))),t?(0,r.cloneElement)(k.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==x})))))}function d(e){const n=(0,l.Z)();return r.createElement(m,(0,a.Z)({key:String(n)},e))}},66775:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>s});var a=t(83117),r=(t(67294),t(3905)),o=t(65488),l=t(85162);const i={sidebar_position:2,title:"Connection Manager"},c=void 0,u={unversionedId:"configuration/connection-manager",id:"configuration/connection-manager",title:"Connection Manager",description:"Jimmer\u4e2d\u4e00\u5207\u53ef\u6267\u884c\u7684\u8bed\u53e5\u548c\u6307\u4ee4\u90fd\u652f\u6301\u4e24\u79cd\u6267\u884c\u6a21\u5f0f\uff1a",source:"@site/docs/configuration/connection-manager.mdx",sourceDirName:"configuration",slug:"/configuration/connection-manager",permalink:"/jimmer/docs/configuration/connection-manager",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/configuration/connection-manager.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Connection Manager"},sidebar:"tutorialSidebar",previous:{title:"\u65b9\u8a00",permalink:"/jimmer/docs/configuration/dialect"},next:{title:"\u6279\u91cf\u63a7\u5236",permalink:"/jimmer/docs/configuration/batch-size"}},p={},s=[{value:"\u7b80\u5355\u7684ConnectionManager",id:"\u7b80\u5355\u7684connectionmanager",level:2},{value:"\u53d7Spring\u4e8b\u52a1\u7ba1\u7406\u7684ConnectionManager",id:"\u53d7spring\u4e8b\u52a1\u7ba1\u7406\u7684connectionmanager",level:2}],m={toc:s};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Jimmer\u4e2d\u4e00\u5207\u53ef\u6267\u884c\u7684\u8bed\u53e5\u548c\u6307\u4ee4\u90fd\u652f\u6301\u4e24\u79cd\u6267\u884c\u6a21\u5f0f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u57fa\u4e8e\u7528\u6237\u6307\u5b9a\u7684JDBC\u8fde\u63a5\u6267\u884c")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7531Jimmer\u81ea\u52a8\u51b3\u5b9a\u57fa\u4e8e\u67d0\u4e2aJDBC\u8fde\u63a5\u6267\u884c"))),(0,r.kt)("p",null,"\u8fd9\u91cc\uff0c\u4ee5",(0,r.kt)("inlineCode",{parentName:"p"},"Executable"),"(Java)\u6216",(0,r.kt)("inlineCode",{parentName:"p"},"KExecutable"),"(kotlin)\u63a5\u53e3\u4e3a\u4f8b"),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Executable.java"',title:'"Executable.java"'},"package org.babyfish.jimmer.sql.ast;\n\nimport java.sql.Connection;\n\npublic interface Executable<R> {\n\n    R execute();\n\n    R execute(Connection con);\n}\n"))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="KExecutable.kt"',title:'"KExecutable.kt"'},"package org.babyfish.jimmer.sql.kt\n\nimport java.sql.Connection\n\ninterface KExecutable<R> {\n    fun execute(con: Connection? = null): R\n}\n")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"execute(Connection)"),"\uff1a\u5728\u7528\u6237\u6307\u5b9a\u7684JDBC\u8fde\u63a5\u4e0a\u6267\u884c\u3002"),(0,r.kt)("p",{parentName:"li"},"\u4ee5\u67e5\u8be2\u4e3a\u4f8b\uff1a"),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"BookTable book = BookTable.$;\n\nList<Book> books = sqlClient\n    .createQuery(book)\n    .select(book)\n    // highlight-next-line\n    .execute(con);\n"))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val books = sqlClient\n    .createQuery(Book::class) {\n        select(table)\n    }\n    // highlight-next-line\n    .execute(con)\n"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"execute()"),"\u6216",(0,r.kt)("inlineCode",{parentName:"p"},"execute(null)"),"\uff1a\u7531Jimmer\u81ea\u4e3b\u51b3\u5b9a\u5728\u67d0\u4e2aJDBC\u8fde\u63a5\u4e0a\u6267\u884c\u3002"),(0,r.kt)("p",{parentName:"li"},"\u4ee5\u67e5\u8be2\u4e3a\u4f8b\uff1a"),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"BookTable book = BookTable.$;\n\nList<Book> books = sqlClient\n    .createQuery(book)\n    .select(book)\n    // highlight-next-line\n    .execute();\n"))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val books = sqlClient\n    .createQuery(Book::class) {\n        select(table)\n    }\n    // highlight-next-line\n    .execute()    \n")))))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u8981\u4f7f\u7528\u7b2c1\u79cd\u884c\u4e3a\uff0c\u65e0\u9700\u5bf9SqlClient\u505a\u51fa\u7279\u522b\u914d\u7f6e\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u8981\u4f7f\u7528\u7b2c2\u79cd\u884c\u4e3a\uff0c\u5fc5\u987b\u4e3aSqlClient\u914d\u7f6e",(0,r.kt)("inlineCode",{parentName:"p"},"ConnectionManager"),"\u3002\u5426\u5219\u5c06\u4f1a\u5bfc\u81f4\u5f02\u5e38\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u6beb\u65e0\u7591\u95ee\uff0c\u7b2c2\u79cd\u65b9\u5f0f\u66f4\u7b26\u5408\u4e1a\u52a1\u7cfb\u7edf\u5f00\u53d1\u8981\u6c42\uff0c\u63a8\u8350\u4f7f\u7528\u3002\u6240\u4ee5\u5f3a\u70c8\u5efa\u8bae\u4e3aSqlClient\u914d\u7f6e",(0,r.kt)("inlineCode",{parentName:"p"},"ConnectionManager"),"\u3002")),(0,r.kt)("h2",{id:"\u7b80\u5355\u7684connectionmanager"},"\u7b80\u5355\u7684ConnectionManager"),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"javax.sql.DataSource dataSource = ...;\n\nJSqlClient sqlClient = JSqlClient\n    .newBuilder()\n    .setConnectionManager(\n        ConnectionManager\n            // highlight-next-line\n            .simpleConnectionManager(dataSource)\n    )\n    .builde();\n"))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"javax.sql.DataSource dataSource = ...;\n\nvar sqlClient = newKSqlClient {\n    setConnectionManager {\n        ConnectionManager\n            dataSoruce.connection.use {\n                // highlight-next-line\n                proceed(it)\n            }\n    }\n}\n")))),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"\u8fd9\u79cd\u65b9\u5f0f\u4ec5\u8d1f\u8d23\u4eceDataSource\u83b7\u53d6\u8fde\u63a5\uff0c\u5e76\u6ca1\u6709\u4e8b\u52a1\u7ba1\u7406\u673a\u5236\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u4f46\u662f\uff0c\u5b9e\u9645\u9879\u76ee\u4e2d\uff0c\u4e8b\u52a1\u975e\u5e38\u91cd\u8981\uff0c\u56e0\u6b64\uff0c\u9664\u5b66\u4e60\u548c\u5c1d\u8bd5\u5916\uff0c\u4e0d\u5efa\u8bae\u5728\u5b9e\u9645\u9879\u76ee\u4f7f\u7528\u8fd9\u79cd\u65b9\u5f0f\u3002")),(0,r.kt)("h2",{id:"\u53d7spring\u4e8b\u52a1\u7ba1\u7406\u7684connectionmanager"},"\u53d7Spring\u4e8b\u52a1\u7ba1\u7406\u7684ConnectionManager"),(0,r.kt)("p",null,"\u8fd9\u4e2a\u8bdd\u9898\u5728",(0,r.kt)("a",{parentName:"p",href:"../spring/transaction"},"Spring\u7bc7/\u6574\u5408Spring\u4e8b\u52a1"),"\u4e2d\u8be6\u7ec6\u8ba8\u8bba\u8fc7\uff0c\u672c\u6587\u4e0d\u505a\u91cd\u590d\u9610\u8ff0\u3002"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u8ba9Jimmer\u53d7\u5230Spring\u4e8b\u52a1\u7684\u7ba1\u7406\uff0c\u662f\u63a8\u8350\u7528\u6cd5\u3002")))}d.isMDXComponent=!0}}]);