"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[7818],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=c(a),d=r,k=s["".concat(p,".").concat(d)]||s[d]||u[d]||l;return a?n.createElement(k,i(i({ref:t},m),{},{components:a})):n.createElement(k,i({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(34334);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(83117),r=a(67294),l=a(34334),i=a(72389),o=a(67392),p=a(7094),c=a(12466);const m="tabList__CuJ",u="tabItem_LNqP";function s(e){var t;const{lazy:a,block:i,defaultValue:s,values:d,groupId:k,className:f}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=d??b.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),g=(0,o.l)(N,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===s?s:s??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==v&&!N.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:h}=(0,p.U)(),[D,T]=(0,r.useState)(v),O=[],{blockElementScrollPositionUntilNextRender:j}=(0,c.o5)();if(null!=k){const e=y[k];null!=e&&e!==D&&N.some((t=>t.value===e))&&T(e)}const w=e=>{const t=e.currentTarget,a=O.indexOf(t),n=N[a].value;n!==D&&(j(t),T(n),null!=k&&h(k,String(n)))},S=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;a=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;a=O[t]??O[O.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},f)},N.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:D===t?0:-1,"aria-selected":D===t,key:t,ref:e=>O.push(e),onKeyDown:S,onFocus:w,onClick:w},i,{className:(0,l.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":D===t})}),a??t)}))),a?(0,r.cloneElement)(b.filter((e=>e.props.value===D))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==D})))))}function d(e){const t=(0,i.Z)();return r.createElement(s,(0,n.Z)({key:String(t)},e))}},10166:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=a(83117),r=(a(67294),a(3905)),l=a(65488),i=a(85162);const o={sidebar_position:1,title:"Dialect"},p=void 0,c={unversionedId:"configuration/dialect",id:"configuration/dialect",title:"Dialect",description:"\u4e0d\u540c\u7684\u6570\u636e\u5e93\uff0c\u5bf9SQL\u7684\u652f\u6301\u5927\u76f8\u5f84\u5ead\uff0c\u56e0\u6b64Jimmer\u91c7\u7528\u65b9\u8a00\u914d\u7f6e\u6765\u9002\u914d\u4e0d\u540c\u7684\u6570\u636e\u5e93\u3002",source:"@site/docs/configuration/dialect.mdx",sourceDirName:"configuration",slug:"/configuration/dialect",permalink:"/jimmer/docs/configuration/dialect",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/configuration/dialect.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Dialect"},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/jimmer/docs/configuration/"},next:{title:"Connection Manager",permalink:"/jimmer/docs/configuration/connection-manager"}},m={},u=[{value:"\u8bbe\u7f6e\u65b9\u8a00",id:"\u8bbe\u7f6e\u65b9\u8a00",level:2},{value:"\u65b9\u8a00\u5217\u8868",id:"\u65b9\u8a00\u5217\u8868",level:2}],s={toc:u};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u4e0d\u540c\u7684\u6570\u636e\u5e93\uff0c\u5bf9SQL\u7684\u652f\u6301\u5927\u76f8\u5f84\u5ead\uff0c\u56e0\u6b64Jimmer\u91c7\u7528\u65b9\u8a00\u914d\u7f6e\u6765\u9002\u914d\u4e0d\u540c\u7684\u6570\u636e\u5e93\u3002"),(0,r.kt)("h2",{id:"\u8bbe\u7f6e\u65b9\u8a00"},"\u8bbe\u7f6e\u65b9\u8a00"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u4f7f\u7528Jimmer\u63d0\u4f9b\u7684Spring Boot Starter\uff0c\u6709\u4e24\u79cd\u7528\u6cd5"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u914d\u7f6e",(0,r.kt)("inlineCode",{parentName:"p"},"application.yml"),"\u6216",(0,r.kt)("inlineCode",{parentName:"p"},"application.properties")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"jimmer:\n  dialect: org.babyfish.jimmer.sql.dialect.MySqlDialect\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u63d0\u4f9b\u5168\u5c40\u7684\u65b9\u8a00Bean"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Bean\npublic Dialect dialect() {\n    return new MySqlDialect();\n}\n"))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Bean\nfun dialect(): Dialect =\n    MySqlDialect()\n")))))),(0,r.kt)("admonition",{parentName:"li",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u540c\u65f6\u91c7\u7528\u4ee5\u4e0a\u4e24\u79cd\u65b9\u6cd5 ",(0,r.kt)("em",{parentName:"p"},"(\u4e0d\u63a8\u8350)"),"\uff0c\u5219\u7b2c\u4e8c\u79cd\u65b9\u6cd5\u4f18\u5148"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u4e0d\u4f7f\u7528Jimmer\u63d0\u4f9b\u7684Spring Boot Starter"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"JSqlClient sqlClient = JSqlClient\n    .newBuilder()\n    .setDialect(new MySqlDialect())\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n    .build();\n"))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val sqlClient = newKSqlClient {\n    setDialect(MySqlDialect())\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n}\n")))))),(0,r.kt)("h2",{id:"\u65b9\u8a00\u5217\u8868"},"\u65b9\u8a00\u5217\u8868"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"org.babyfish.jimmer.sql.dialect.DefaultDialect"),(0,r.kt)("p",{parentName:"li"},"\u8fd9\u662f\u672a\u6307\u5b9a\u65b9\u8a00\u914d\u7f6e\u65f6\uff0cJimmer\u6240\u91c7\u7528\u7684\u9ed8\u8ba4\u65b9\u8a00\uff0c\u56e0\u6b64\uff0c\u65e0\u9700\u663e\u5f0f\u6307\u5b9a\u3002"),(0,r.kt)("admonition",{parentName:"li",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"\u9ed8\u8ba4\u914d\u7f6e\u4ec5\u80fd\u7528\u4e8e\u5b66\u4e60\u6700\u521d\u9636\u6bb5\u7684\u7b80\u5355demo\uff0c\u7edd\u4e0d\u80fd\u7528\u4e8e\u5b9e\u9645\u9879\u76ee\u3002\u4ee5\u4e0b\u60c5\u51b5\u90fd\u4f1a\u5bfc\u81f4\u5f02\u5e38:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4ee3\u7801\u4e2d\u5bf9Jimmer\u7684\u64cd\u4f5c\u4f1a\u5bfc\u81f4\u751f\u6210\u4f9d\u8d56\u6027\u7279\u5b9a\u6570\u636e\u5e93\u4ea7\u54c1\u7684SQL\uff0c\u800c\u975e\u5b8c\u7f8e\u7684\u8de8\u6570\u636e\u5e93SQL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5c06",(0,r.kt)("a",{parentName:"p",href:"../mutation/trigger"},"\u89e6\u53d1\u5668"),"\u7684\u7c7b\u578b\u8bbe\u7f6e\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"TRANSACTION_ONLY"),"\u5e76\u4f7f\u7528\u7f13\u5b58\u65f6\uff0cJimmer\u542f\u52a8\u65f6\u4f1a\u81ea\u52a8\u521b\u5efa",(0,r.kt)("inlineCode",{parentName:"p"},"JIMMER_TRANS_CACHE_OPERATOR"),"\u8868\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"DefaultDialect"),"\u5e76\u4e0d\u652f\u6301\u6b64\u64cd\u4f5c\uff0c\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"../cache/consistency"},"\u7f13\u5b58\u4e00\u81f4\u6027")))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"org.babyfish.jimmer.sql.dialect.H2Dialect")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"org.babyfish.jimmer.sql.dialect.MySqlDialect")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"org.babyfish.jimmer.sql.dialect.PostgresDialect")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"org.babyfish.jimmer.sql.dialect.OracleDialect")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"org.babyfish.jimmer.sql.dialect.TiDBDialect"),(0,r.kt)("p",{parentName:"li"},"\u56e0\u4e3aTiDB\u662f\u4e00\u4e2a\u5206\u5e03\u5f0f\u6570\u636e\u5e93\uff0c\u65e0\u6cd5\u652f\u6301\u5916\u952e\u7ea6\u675f\uff0c\u56e0\u6b64\uff0c\u771f\u5916\u952e\u4e0d\u88ab\u6b64\u65b9\u8a00\u652f\u6301\u3002\u8bf7\u53c2\u89c1",(0,r.kt)("a",{parentName:"p",href:"../mapping/base/foreignkey"},"\u771f\u5047\u5916\u952e")),(0,r.kt)("p",{parentName:"li"},"\u9664\u6b64\u4e4b\u5916\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"TiDBDialect"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"MySqlDialect"),"\u6ca1\u6709\u4efb\u4f55\u5dee\u5f02\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u81f3\u4e8e\u5176\u4ed6\u6570\u636e\u5e93\uff0c\u7528\u6237\u53ef\u4ee5\u81ea\u884c\u6269\u5c55\u65b9\u8a00\u3002\u4f46\u9700\u8981\u6570\u636e\u5e93\u652f\u6301\u591a\u5217",(0,r.kt)("inlineCode",{parentName:"p"},"in"),"\u8868\u8fbe\u5f0f\uff0c\u6bd4\u5982"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"where (a, b) in ((3, 4), (8, 13))\n")),(0,r.kt)("p",{parentName:"li"},"\u6216"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"where (a, b) in (select x, y from ...)\n")),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u76ee\u524d\uff0c\u591a\u5217",(0,r.kt)("inlineCode",{parentName:"p"},"in"),"\u8868\u8fbe\u5f0f\u662fJimmer\u9ad8\u5ea6\u4f9d\u8d56\u7684\u7279\u6027\uff0c\u800cMicrosoft Sql Server\u6682\u4e0d\u652f\u6301\u6b64\u7279\u6027\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u56e0\u6b64\uff0c\u76ee\u524d\u6682\u65f6\u4e0d\u652f\u6301Microsoft Sql Server\u3002")))))}d.isMDXComponent=!0}}]);