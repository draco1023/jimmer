"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[9668],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,b=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(b,i(i({ref:t},p),{},{components:n})):a.createElement(b,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(34334);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(83117),r=n(67294),l=n(34334),i=n(72389),o=n(67392),s=n(7094),u=n(12466);const p="tabList__CuJ",c="tabItem_LNqP";function m(e){var t;const{lazy:n,block:i,defaultValue:m,values:d,groupId:b,className:v}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=d??k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,o.l)(h,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===m?m:m??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==f&&!h.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:N}=(0,s.U)(),[x,_]=(0,r.useState)(f),E=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=b){const e=g[b];null!=e&&e!==x&&h.some((t=>t.value===e))&&_(e)}const q=e=>{const t=e.currentTarget,n=E.indexOf(t),a=h[n].value;a!==x&&(T(t),_(a),null!=b&&N(b,String(a)))},O=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;n=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;n=E[t]??E[E.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},v)},h.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>E.push(e),onKeyDown:O,onFocus:q,onClick:q},i,{className:(0,l.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":x===t})}),n??t)}))),n?(0,r.cloneElement)(k.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function d(e){const t=(0,i.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},87729:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var a=n(83117),r=(n(67294),n(3905)),l=n(65488),i=n(85162);const o={sidebar_position:10,title:"Native SQL\u8868\u8fbe\u5f0f"},s=void 0,u={unversionedId:"query/native-sql",id:"query/native-sql",title:"Native SQL\u8868\u8fbe\u5f0f",description:"NativeSQL\u8868\u8fbe\u5f0f\u662f\u4e00\u4e2a\u91cd\u8981\u7684\u529f\u80fd\uff0c\u6570\u636e\u5e93\u4ea7\u54c1\u603b\u4f1a\u6709\u7279\u6709\u7684\u529f\u80fd\uff0c\u9700\u8981\u628a\u6570\u636e\u5e93\u4ea7\u54c1\u7279\u6709\u7684\u80fd\u529b\u53d1\u6325\u51fa\u6765\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/query/native-sql.mdx",sourceDirName:"query",slug:"/query/native-sql",permalink:"/jimmer/zh/docs/query/native-sql",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/query/native-sql.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Native SQL\u8868\u8fbe\u5f0f"},sidebar:"tutorialSidebar",previous:{title:"\u5b50\u67e5\u8be2",permalink:"/jimmer/zh/docs/query/sub-query"},next:{title:"\u5168\u5c40\u8fc7\u6ee4\u5668",permalink:"/jimmer/zh/docs/query/global-filter/"}},p={},c=[{value:"\u4f8b\u5b50\u4e00\uff1a\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d",id:"\u4f8b\u5b50\u4e00\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d",level:2},{value:"\u4f8b\u5b50\u4e8c\uff1a\u5206\u6790\u51fd\u6570",id:"\u4f8b\u5b50\u4e8c\u5206\u6790\u51fd\u6570",level:2}],m={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"NativeSQL\u8868\u8fbe\u5f0f\u662f\u4e00\u4e2a\u91cd\u8981\u7684\u529f\u80fd\uff0c\u6570\u636e\u5e93\u4ea7\u54c1\u603b\u4f1a\u6709\u7279\u6709\u7684\u529f\u80fd\uff0c\u9700\u8981\u628a\u6570\u636e\u5e93\u4ea7\u54c1\u7279\u6709\u7684\u80fd\u529b\u53d1\u6325\u51fa\u6765\u3002"),(0,r.kt)("h2",{id:"\u4f8b\u5b50\u4e00\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d"},"\u4f8b\u5b50\u4e00\uff1a\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d"),(0,r.kt)("p",null,"\u8fd9\u4e2a\u4f8b\u5b50\uff0c\u6f14\u793a\u5982\u4f55\u4f7f\u7528Oracle\u548cHSQLDB\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d\u3002"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'AuthorTable table = AuthorTable.$;\n\nList<Author> authors = sqlClient\n    .createQuery(table)\n    .where(\n        Predicate.sql(\n            "regexp_like(%e, %v)",\n            it -> it\n                .expression(table.firstName())\n                .value("^Ste(v|ph)en$")\n        )\n    )\n    .select(table)\n    .execute();\n'))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val authors = sqlClient\n    .createQuery(Author::class) {\n        where(\n            // highlight-next-line\n            sql(Boolean::class, "regexp_like(%e, %v)") {\n                expression(table.firstName)\n                value("^Ste(v|ph)en$")\n            }\n        )\n        select(table)\n    }\n    .execute()\n')))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u5728Java\u4ee3\u7801\u4e2d\uff0c\u6211\u4eec\u8c03\u7528\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"Predicate.sql"),"\u521b\u5efa\u57fa\u4e8e\u672c\u5730SQL\u7684\u67e5\u8be2\u6761\u4ef6\u3002\u4e8b\u5b9e\u4e0a\uff0c\u5176\u5b83\u8868\u8fbe\u5f0f\u7c7b\u578b\u4e5f\u652f\u6301NativeSQL\u8868\u8fbe\u5f0f\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"sql"),"\u51fd\u6570\u5171\u67095\u4e2a"),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"Predicate.sql(...)"),(0,r.kt)("li",{parentName:"ol"},"Expression.string().sql(...)"),(0,r.kt)("li",{parentName:"ol"},"Expression.numeric().sql(...)"),(0,r.kt)("li",{parentName:"ol"},"Expression.comparable().sql(...)"),(0,r.kt)("li",{parentName:"ol"},"Expression.any().sql(...)")),(0,r.kt)("p",{parentName:"admonition"},"kotlin\u6ca1\u6709\u8fd9\u4e2a\u95ee\u9898\uff0c\u5176API\u662f\u7edf\u4e00\u7684")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sql(...)"),"\u65b9\u6cd5\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u662fSQL\u5b57\u7b26\u4e32\u6a21\u677f\uff0c\u53ef\u4ee5\u5305\u542b\u7279\u6b8a\u7b26\u53f7",(0,r.kt)("inlineCode",{parentName:"p"},"%e"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"%v"),"\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"%e"),": \u5373Expression\uff0c\u690d\u5165\u4e00\u4e2a\u8868\u8fbe\u5f0f"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"%v"),": \u5373Value\uff0c\u690d\u5165\u4e00\u4e2a\u503c")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sql(...)"),"\u65b9\u6cd5\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u4e00\u4e2a\u53ef\u9009\u7684\uff0c\u662f\u4e00\u4e2alambda\u8868\u8fbe\u5f0f\uff0clambda\u8868\u8fbe\u5f0f\u7684\u53c2\u6570\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u8be5\u5bf9\u8c61\u652f\u6301\u4e24\u4e2a\u65b9\u6cd5\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"expression(Expresion<?>)"),': \u690d\u5165\u4e00\u4e2a\u8868\u8fbe\u5f0f\uff0c\u548cSQL\u6a21\u677f\u4e2d\u7684"%e"\u5339\u914d\u3002'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value(Object)"),': \u690d\u5165\u4e00\u4e2a\u503c\uff0c\u548cSQL\u6a21\u677f\u4e2d\u7684"%v"\u5339\u914d\u3002')),(0,r.kt)("p",null,"\u6700\u7ec8\u751f\u6210\u7684SQL\u662f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    tb_1_.ID, \n    tb_1_.FIRST_NAME, \n    tb_1_.LAST_NAME, \n    tb_1_.GENDER \nfrom AUTHOR as tb_1_ \nwhere\n    /* highlight-next-line */\n    regexp_like(tb_1_.FIRST_NAME, ?)\n")),(0,r.kt)("h2",{id:"\u4f8b\u5b50\u4e8c\u5206\u6790\u51fd\u6570"},"\u4f8b\u5b50\u4e8c\uff1a\u5206\u6790\u51fd\u6570"),(0,r.kt)("p",null,"\u8ba9\u6211\u4eec\u518d\u6765\u770b\u4e00\u4e2a\u4f8b\u5b50\uff0c\u4f7f\u7528\u5206\u6790\u51fd\u6570"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'List<Tuple3<Book, Integer, Integer>> tuples = sqlClient\n    .createQuery(table)\n    .select(\n        table,\n        Expression.numeric().sql(\n            Integer.class,\n            // hight-next-line\n            "rank() over(order by %e desc)",\n            table.price()\n        ),\n        Expression.numeric().sql(\n            Integer.class,\n            // hight-next-line\n            "rank() over(partition by %e order by %e desc)",\n            new Expression[] { table.store().id(), table.price() }\n        )\n    )\n    .execute();\n'))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val tuples = sqlClient\n    .createQuery(Author::class) {\n        select(\n            table,\n            // highlight-next-line\n            sql(Int::class, "rank() over(order by %e desc)") {\n                expression(table.price)\n            },\n            // highlight-next-line\n            sql("rank() over(partition by %e order by %e desc)") {\n                expression(table.store.id)\n                expression(table.price)\n            }\n        )\n    }\n    .execute()\n')))),(0,r.kt)("p",null,"\u8fd9\u91cc\u67e5\u8be2\u4e86\u4e09\u5217"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7b2c\u4e00\u5217\uff1aBook\u5bf9\u8c61")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7b2c\u4e8c\u5217\uff1a\u4e66\u7c4d\u7684\u4ef7\u683c\u5728\u6240\u6709\u4e66\u7c4d\u4e2d\u7684\u540d\u6b21")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7b2c\u4e8c\u5217\uff1a\u4e66\u7c4d\u7684\u4ef7\u683c\u5728\u6240\u5c5e\u4e66\u5e97\u7684\u4e2d\u7684\u540d\u6b21"))),(0,r.kt)("p",null,"\u751f\u6210\u7684SQL\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID,\n    /* highlight-next-line */\n    rank() over(\n        order by tb_1_.PRICE desc\n    ),\n    /* highlight-next-line */\n    rank() over(\n        partition by tb_1_.STORE_ID \n        order by tb_1_.PRICE desc\n    )\nfrom BOOK tb_1_\n")))}d.isMDXComponent=!0}}]);