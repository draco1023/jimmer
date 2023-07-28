"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[966],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,g=m["".concat(p,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(g,i(i({ref:t},s),{},{components:n})):a.createElement(g,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(34334);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(83117),r=n(67294),l=n(34334),i=n(72389),o=n(67392),p=n(7094),u=n(12466);const s="tabList__CuJ",c="tabItem_LNqP";function m(e){var t;const{lazy:n,block:i,defaultValue:m,values:d,groupId:g,className:b}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=d??k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,o.l)(f,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===m?m:m??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==y&&!f.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:N}=(0,p.U)(),[_,C]=(0,r.useState)(y),E=[],{blockElementScrollPositionUntilNextRender:I}=(0,u.o5)();if(null!=g){const e=h[g];null!=e&&e!==_&&f.some((t=>t.value===e))&&C(e)}const O=e=>{const t=e.currentTarget,n=E.indexOf(t),a=f[n].value;a!==_&&(I(t),C(a),null!=g&&N(g,String(a)))},T=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;n=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;n=E[t]??E[E.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},b)},f.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,key:t,ref:e=>E.push(e),onKeyDown:T,onFocus:O,onClick:O},i,{className:(0,l.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":_===t})}),n??t)}))),n?(0,r.cloneElement)(k.filter((e=>e.props.value===_))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==_})))))}function d(e){const t=(0,i.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},18085:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var a=n(83117),r=(n(67294),n(3905)),l=n(65488),i=n(85162);const o={sidebar_position:3,title:"\u53cd\u6392\u5e8f\u4f18\u5316"},p=void 0,u={unversionedId:"query/paging/reverse-sorting",id:"query/paging/reverse-sorting",title:"\u53cd\u6392\u5e8f\u4f18\u5316",description:"\u6982\u5ff5",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/query/paging/reverse-sorting.mdx",sourceDirName:"query/paging",slug:"/query/paging/reverse-sorting",permalink:"/jimmer/zh/docs/query/paging/reverse-sorting",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/query/paging/reverse-sorting.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"\u53cd\u6392\u5e8f\u4f18\u5316"},sidebar:"tutorialSidebar",previous:{title:"\u8868\u8fde\u63a5\u4f18\u5316",permalink:"/jimmer/zh/docs/query/paging/unncessary-join"},next:{title:"\u6df1\u5206\u9875\u4f18\u5316",permalink:"/jimmer/zh/docs/query/paging/deep-optimization"}},s={},c=[{value:"\u6982\u5ff5",id:"\u6982\u5ff5",level:2},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",level:2},{value:"\u6b63\u6392\u5e8f",id:"\u6b63\u6392\u5e8f",level:3},{value:"\u53cd\u6392\u5e8f",id:"\u53cd\u6392\u5e8f",level:3}],m={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u6982\u5ff5"},"\u6982\u5ff5"),(0,r.kt)("p",null,"\u968f\u7740\u9875\u7801\u7684\u4e0d\u65ad\u7741\u5927\uff0c\u5206\u9875\u67e5\u8be2\u7684\u6548\u7387\u4f1a\u8d8a\u6765\u8d8a\u4f4e\u3002\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0cJimmer\u652f\u6301\u4e86\u53cd\u6392\u5e8f\u4f18\u5316\u3002"),(0,r.kt)("p",null,"\u53cd\u6392\u5e8f\u4f18\u5316\u5fc5\u987b\u5728\u4e00\u4e0b\u524d\u63d0\u540c\u65f6\u6ee1\u8db3\u65f6\u624d\u751f\u6548\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6b64\u529f\u80fd\u5e76\u4e0d\u9488\u5bf9\u53ea\u5173\u5fc3\u9875\u5185\u6570\u636e\u800c\u4e0d\u5173\u5fc3\u5206\u9875\u524d\u603b\u884c\u6570\u7684\u7684\u67e5\u8be2\uff0c\u5373",(0,r.kt)("inlineCode",{parentName:"p"},"limit(limit, offset)"),"\u3002\u5fc5\u987b\u662f\u540c\u65f6\u5173\u5fc3\u9875\u5185\u6570\u636e\u548c\u603b\u884c\u6570\u7684\u67e5\u8be2\u3002"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5bf9Java\u800c\u8a00\uff1a\u6307",(0,r.kt)("inlineCode",{parentName:"p"},"JRepository.Pager.execute")," ",(0,r.kt)("em",{parentName:"p"},"(\u548cSpring Boot\u914d\u5408)")," \u6216",(0,r.kt)("inlineCode",{parentName:"p"},"PagingQueries.execute")," ",(0,r.kt)("em",{parentName:"p"},"(\u4e0d\u548cSpring Boot\u914d\u5408)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5bf9Kotlin\u800c\u8a00\uff1a\u6307",(0,r.kt)("inlineCode",{parentName:"p"},"KConfigurableRootQuery<*, E>.fetchPage"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6837\u677f\u67e5\u8be2\u5fc5\u987b\u5177\u5907\u660e\u786e\u7684orderBy\u5b50\u53e5\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u88ab\u67e5\u8be2\u7684\u90a3\u4e00\u9875\u7684\u6570\u636e\u5728\u5206\u9875\u524d\u6240\u6709\u6570\u636e\u4e2d\u504f\u540e\u3002\u5373"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"offset")," + ",(0,r.kt)("inlineCode",{parentName:"p"},"pageSize")," / 2 > ",(0,r.kt)("inlineCode",{parentName:"p"},"totalCount")," / 2"))),(0,r.kt)("p",null,"\u5f53\u4ee5\u4e0a\u6761\u4ef6\u90fd\u6ee1\u8db3\u65f6\uff0cJimmer\u4f1a\u98a0\u5012\u6837\u677f\u67e5\u8be2\u7684\u6392\u5e8f\u3002\u56e0\u4e3a\uff0c\u9875\u7801\u76f8\u5bf9\u8f83\u5927\u7684\u6b63\u6392\u5e8f\u67e5\u8be2\u548c\u9875\u7801\u76f8\u5bf9\u5c0f\u7684\u53cd\u6392\u5e8f\u67e5\u8be2\u7b49\u4ef7\u3002"),(0,r.kt)("h2",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),(0,r.kt)("p",null,"\u8ba9\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u4f8b\u5b50\u3002"),(0,r.kt)("p",null,"SpringBoot\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Page<E>"),"\u7c7b\u578b\u7684\u5b9a\u4e49\u8fc7\u4e8e\u590d\u6742\uff0c\u4e0d\u5229\u4e8e\u672c\u6587\u901a\u8fc7\u6253\u5370\u7ed3\u679c\u8fdb\u884c\u6f14\u793a\uff0c\u6240\u4ee5\u6211\u4eec\u5e76\u4e0d\u91c7\u7528SpringBoot\u5e76\u91c7\u7528\u81ea\u5b9a\u4e49Page\u7c7b\uff1a"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Page.java"',title:'"Page.java"'},"@lombok.Data\npublic class Page<E> {\n    private final int totalRowCount;\n    private final int totalPage;\n    private final List<E> entities;\n}\n"))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Page.kt"',title:'"Page.kt"'},"data class Page<E>(\n    val totalRowCount: Int,\n    val totalPage: Int,\n    val entities: List<E>\n)\n")))),(0,r.kt)("p",null,"\u5206\u9875\u67e5\u8be2\u4ee3\u7801\u4e3a"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public Page<Book> findBooks(\n    int pageIndex,\n    int pageSize\n) {\n    BookTable table = BookTable.$;\n    \n    return PagingQueries.excute(\n        sqlClient\n            .createQuery(table)\n            .orderBy(table.name().asc(), table.edition().desc())\n            .select(table),\n        pageIndex,\n        pageSize,\n        (entities, totalCount, queryImplementor) -> {\n            return new Page<>(\n                totalCount, \n                (totalCount + pageSize - 1) / pageSize,\n                entities\n            )\n        }\n    );\n}\n"))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun findBooks(\n    pageIndex: Int,\n    pageSize: Int\n): Page<Book> =\n    sqlClient\n        .createQuery(Book::class) {\n            orderBy(table.name.asc(), table.edition.desc())\n            select(table)\n        }\n        .fetchPage(\n            pageIndex, pageSize\n        ) { entities, totalCount, _ ->\n            Page(\n                totalCount, \n                (totalCount + pageSize - 1) / pageSize,\n                entities\n            )\n        }\n")))),(0,r.kt)("p",null,"\u6211\u4eec\u5047\u8bbe",(0,r.kt)("inlineCode",{parentName:"p"},"Book"),"\u8bb0\u5f55\u517112\u6761\uff0c\u5982\u679c",(0,r.kt)("inlineCode",{parentName:"p"},"pageSize"),"\u4e3a2\uff0c\u51716\u9875\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"pageIndex"),"\u7684\u67095\u4e2a\u53d6\u503c\uff1a0\u30011\u30012\u30013\u30014\u30015\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"0\u30011\u30012: \u8981\u67e5\u8be2\u7684\u6570\u636e\u504f\u524d\uff0c\u91c7\u7528\u6b63\u6392\u5e8f\u5206\u9875")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"3\u30014\u30015: \u8981\u67e5\u8be2\u7684\u6570\u636e\u504f\u540e\uff0c\u91c7\u7528\u53cd\u6392\u5e8f\u5206\u9875"))),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u5206\u522b\u4ee5",(0,r.kt)("inlineCode",{parentName:"p"},"pageIndex=2"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"pageIndex=3"),"\u4e3a\u4f8b\uff0c\u5c55\u793a\u53cd\u6392\u5e8f\u5206\u9875\u548c\u6b63\u6392\u5e8f\u5206\u9875\u7684\u5dee\u5f02\u3002"),(0,r.kt)("h3",{id:"\u6b63\u6392\u5e8f"},"\u6b63\u6392\u5e8f"),(0,r.kt)("p",null,"\u6267\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"findBooks(2, 2)"),"\uff0c\u751f\u6210\u7684\u6b63\u6392\u5e8fSQL\u4e3a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID\nfrom BOOK tb_1_\norder by\n    /* highlight-next-line */\n    tb_1_.NAME asc,\n    /* highlight-next-line */\n    tb_1_.EDITION desc\nlimit ? /* 2 */ \noffset ? /* 4 */\n")),(0,r.kt)("p",null,"\u5f97\u5230\u7684\u7ed3\u679c\u4e3a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "totalCount":12,\n    "totalPage":6,\n    "entities":[\n        {\n            "id":11,\n            "name":"GraphQL in Action",\n            "edition":2,\n            "price":81,\n            "store":{\n                "id":2\n            }\n        },\n        {\n            "id":10,\n            "name":"GraphQL in Action",\n            "edition":1,\n            "price":80,\n            "store":{\n                "id":2\n            }\n        }\n    ]\n}\n')),(0,r.kt)("h3",{id:"\u53cd\u6392\u5e8f"},"\u53cd\u6392\u5e8f"),(0,r.kt)("p",null,"\u6267\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"findBooks(3, 2)"),"\uff0c\u751f\u6210\u7684\u6b63\u6392\u5e8fSQL\u4e3a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID\nfrom BOOK tb_1_\norder by\n    /* highlight-next-line */\n    tb_1_.NAME desc, // \u53cd\u5e8f\uff1aasc\u53d8desc\n    /* highlight-next-line */\n    tb_1_.EDITION asc // \u53cd\u5e8f\uff1adesc\u53d8asc\nlimit ? /* 2 */ \noffset ? /* 4 */\n")),(0,r.kt)("p",null,"\u5f97\u5230\u7684\u7ed3\u679c\u4e3a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "totalCount":12,\n    "totalPage":6,\n    "entities":[\n        {\n            "id":3,\n            "name":"Learning GraphQL",\n            "edition":3,\n            "price":51,\n            "store":{\n                "id":1\n            }\n        },\n        {\n            "id":2,\n            "name":"Learning GraphQL",\n            "edition":2,\n            "price":55,\n            "store":{\n                "id":1\n            }\n        }\n    ]\n}\n')))}d.isMDXComponent=!0}}]);