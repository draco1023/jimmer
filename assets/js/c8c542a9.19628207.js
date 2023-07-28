"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[3438],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>c});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),m=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=m(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=m(t),c=l,k=d["".concat(s,".").concat(c)]||d[c]||u[c]||r;return t?a.createElement(k,i(i({ref:n},p),{},{components:t})):a.createElement(k,i({ref:n},p))}));function c(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var m=2;m<r;m++)i[m]=t[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(67294),l=t(34334);const r="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>c});var a=t(83117),l=t(67294),r=t(34334),i=t(72389),o=t(67392),s=t(7094),m=t(12466);const p="tabList__CuJ",u="tabItem_LNqP";function d(e){var n;const{lazy:t,block:i,defaultValue:d,values:c,groupId:k,className:I}=e,g=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=c??g.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),N=(0,o.l)(b,((e,n)=>e.value===n.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const D=null===d?d:d??(null==(n=g.find((e=>e.props.default)))?void 0:n.props.value)??g[0].props.value;if(null!==D&&!b.some((e=>e.value===D)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${D}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:T,setTabGroupChoices:v}=(0,s.U)(),[S,C]=(0,l.useState)(D),M=[],{blockElementScrollPositionUntilNextRender:y}=(0,m.o5)();if(null!=k){const e=T[k];null!=e&&e!==S&&b.some((n=>n.value===e))&&C(e)}const E=e=>{const n=e.currentTarget,t=M.indexOf(n),a=b[t].value;a!==S&&(y(n),C(a),null!=k&&v(k,String(a)))},h=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=M.indexOf(e.currentTarget)+1;t=M[n]??M[0];break}case"ArrowLeft":{const n=M.indexOf(e.currentTarget)-1;t=M[n]??M[M.length-1];break}}null==(n=t)||n.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",p)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},I)},b.map((e=>{let{value:n,label:t,attributes:i}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:S===n?0:-1,"aria-selected":S===n,key:n,ref:e=>M.push(e),onKeyDown:h,onFocus:E,onClick:E},i,{className:(0,r.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":S===n})}),t??n)}))),t?(0,l.cloneElement)(g.filter((e=>e.props.value===S))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},g.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==S})))))}function c(e){const n=(0,i.Z)();return l.createElement(d,(0,a.Z)({key:String(n)},e))}},42407:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>m,toc:()=>u});var a=t(83117),l=(t(67294),t(3905)),r=t(65488),i=t(85162);const o={sidebar_position:1,title:"\u4e00\u5bf9\u4e00"},s=void 0,m={unversionedId:"mapping/base/association/one-to-one",id:"mapping/base/association/one-to-one",title:"\u4e00\u5bf9\u4e00",description:"\u672c\u901a\u8fc7\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528@org.babyfish.jimmer.sql.OneToOne\u6ce8\u89e3\u53ef\u4ee5\u58f0\u660e\u4e00\u5bf9\u4e00\u5173\u8054\u5c5e\u6027",source:"@site/docs/mapping/base/association/one-to-one.mdx",sourceDirName:"mapping/base/association",slug:"/mapping/base/association/one-to-one",permalink:"/jimmer/docs/mapping/base/association/one-to-one",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/mapping/base/association/one-to-one.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u4e00\u5bf9\u4e00"},sidebar:"tutorialSidebar",previous:{title:"\u5173\u8054\u6620\u5c04",permalink:"/jimmer/docs/mapping/base/association/"},next:{title:"\u591a\u5bf9\u4e00",permalink:"/jimmer/docs/mapping/base/association/many-to-one"}},p={},u=[{value:"\u4e3b\u52a8\u65b9",id:"\u4e3b\u52a8\u65b9",level:2},{value:"1. \u57fa\u4e8e\u5916\u952e",id:"1-\u57fa\u4e8e\u5916\u952e",level:3},{value:"2. \u57fa\u4e8e\u4e2d\u95f4\u8868",id:"2-\u57fa\u4e8e\u4e2d\u95f4\u8868",level:3},{value:"\u4ece\u52a8\u65b9",id:"\u4ece\u52a8\u65b9",level:2}],d={toc:u};function c(e){let{components:n,...o}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u672c\u901a\u8fc7\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"@org.babyfish.jimmer.sql.OneToOne"),"\u6ce8\u89e3\u53ef\u4ee5\u58f0\u660e\u4e00\u5bf9\u4e00\u5173\u8054\u5c5e\u6027"),(0,l.kt)("p",null,"\u4e00\u5bf9\u4e00\u53ef\u652f\u6301\u53cc\u5411\u5173\u8054\uff0c\u5bf9\u4e8e\u53cc\u5411\u5173\u8054\u800c\u8a00\uff0c\u5176\u4e2d\u4e00\u65b9\u5fc5\u987b\u4e3b\u52a8\u65b9\uff0c\u53e6\u5916\u4e00\u65b9\u4e3a\u4ece\u52a8\u65b9\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4e3b\u52a8\u65b9(\u5fc5\u987b)\uff1a\u771f\u6b63\u7684\u6570\u636e\u5e93\u548c\u5173\u8054\u5c5e\u6027\u4e4b\u95f4\u6620\u5c04\uff0c\u5b9e\u73b0\u5355\u5411\u4e00\u5bf9\u4e00\u5173\u8054\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4ece\u52a8\u65b9(\u53ef\u9009)\uff1a\u5982\u679c\u5df2\u7ecf\u5b58\u5728\u4e00\u4e2a\u5355\u5411\u5173\u8054\uff0c\u53ef\u4ee5\u4e3a\u6b64\u914d\u7f6e\u4ece\u52a8\u65b9\uff0c\u4f5c\u4e3a\u4e3b\u52a8\u65b9\u7684\u955c\u50cf\uff0c\u5f62\u6210\u53cc\u5411\u5173\u8054\u3002"))),(0,l.kt)("p",null,"\u6211\u4eec\u5047\u8bbe\u5b58\u5728\u7528\u6237Customer\u548c\u5730\u5740Address\u4e24\u79cd\u5b9e\u4f53\u7c7b\u578b\uff0c\u5e76\u5728\u5b83\u4eec\u4e4b\u95f4\u5efa\u7acb\u53cc\u5411\u4e00\u5bf9\u4e00\u5173\u8054\u3002"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u548cJPA/Hibernate\u4e0d\u540c\uff0c\u4e3b\u52a8\u65b9\u548c\u4ece\u52a8\u65b9\u53ef\u4ee5\u968f\u610f\u6289\u62e9\uff0c\u4e8c\u8005\u90fd\u53ef\u4ee5\u7528\u4e8e\u4fdd\u5b58\u5173\u8054\u3002"),(0,l.kt)("p",{parentName:"admonition"},"\u672c\u6587\u4f8b\u5b50\u6289\u62e9\u5982\u4e0b\uff1a"),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4e3b\u52a8\u65b9(\u5fc5\u987b)\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"Customer.address"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4ece\u52a8\u65b9(\u53ef\u9009)\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"Address.customer"))))),(0,l.kt)("h2",{id:"\u4e3b\u52a8\u65b9"},"\u4e3b\u52a8\u65b9"),(0,l.kt)("p",null,"\u6709\u4e24\u79cd\u65b9\u6cd5\u53ef\u4ee5\u5b9e\u73b0\u4e00\u5bf9\u4e00\u5173\u8054\uff0c\u57fa\u4e8e\u5916\u952e\u548c\u57fa\u4e8e\u4e2d\u95f4\u8868\u3002"),(0,l.kt)("h3",{id:"1-\u57fa\u4e8e\u5916\u952e"},"1. \u57fa\u4e8e\u5916\u952e"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Customer.java"',title:'"Customer.java"'},"@Entity\npublic interface Customer {\n\n    // highlight-next-line\n    @OneToOne\n    Address address();\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Customer.kt"',title:'"Customer.kt"'},"@Entity\ninterface Customer {\n\n    // highlight-next-line\n    @OneToOne\n    val address: Address\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n")))),(0,l.kt)("p",null,"\u8fd9\u91cc\u5e76\u6ca1\u6709\u914d\u5408\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"@JoinColumn"),"\u660e\u786e\u6307\u5b9a\u5916\u952e\u5217\u540d\uff0cJimmer\u4f1a\u6839\u636e",(0,l.kt)("a",{parentName:"p",href:"../naming-strategy"},"\u547d\u540d\u7b56\u7565"),"\u63a8\u5bfc",(0,l.kt)("inlineCode",{parentName:"p"},"address"),"\u5c5e\u6027\u5bf9\u5e94\u7684\u5217\u540d\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u9ed8\u8ba4\u7684",(0,l.kt)("a",{parentName:"p",href:"../naming-strategy"},"\u547d\u540d\u7b56\u7565"),"\u672a\u88ab\u7528\u6237\u8986\u76d6\uff0c\u5c5e\u6027",(0,l.kt)("inlineCode",{parentName:"p"},"address"),"\u7684\u5916\u952e\u5217\u540d\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"ADDRESS_ID"),"\u3002\u6240\u4ee5\uff0c\u4e4b\u524d\u7684\u4ee3\u7801\u548c\u8fd9\u91cc\u7684\u4ee3\u7801\u7b49\u4ef7\u3002"),(0,l.kt)("p",null,"\u56e0\u6b64\uff0c\u4e0a\u9762\u7684\u4ee3\u7801\u548c\u4e0b\u9762\u7684\u4ee3\u7801\u7b49\u4ef7"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Customer.java"',title:'"Customer.java"'},'@Entity\npublic interface Customer {\n\n    @OneToOne\n    // highlight-next-line\n    @JoinColumn(name = "ADDRESS_ID")\n    Address address();\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n'))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Customer.kt"',title:'"Customer.kt"'},'@Entity\ninterface Customer {\n\n    @OneToOne\n    // highlight-next-line\n    @JoinColumn(name = "ADDRESS_ID")\n    val address: Address\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n')))),(0,l.kt)("p",null,"\u5916\u952e\u53ef\u771f\u53ef\u5047\u3002\u4f2a\u5916\u952e\u5728\u540e\u7eed\u6587\u6863\u4e2d\u8ba8\u8bba\uff0c\u8fd9\u91cc\u5047\u8bbe\u5916\u952e\u662f\u771f\u5b9e\u7684\uff0c\u5219\u6570\u636e\u5e93\u4e2d\u5bf9\u5e94\u7684\u7ea6\u675f\u4e3a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"// \u5982\u679c\u6307\u5411\u5173\u8054\u5bf9\u8c61\u7684\u5916\u952e\u662f\u771f\u7684\uff0c\u5efa\u7acb\u5916\u952e\u7ea6\u675f\nalter table CUSTOMER\n    add constraint FK_CUSTOMER__ADDRESS\n        /* highlight-next-line */\n        foreign key(ADDRESS_ID)\n            references ADDRESS(ID);\n")),(0,l.kt)("p",null,"\u4f46\u65e0\u8bba\u5982\u4f55\uff0c\u90fd\u5e94\u8be5\u6dfb\u52a0\u552f\u4e00\u6027\u7ea6\u675f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"// \u8fd9\u4e2a\u7ea6\u675f\u975e\u5e38\u91cd\u8981\u3002\n// \u5426\u5219\u8fd9\u5f20\u4e2d\u95f4\u8868\u8868\u8fbe\u7684\u662f\u591a\u5bf9\u4e00\u5173\u8054\uff0c\u800c\u975e\u4e00\u5bf9\u4e00\u5173\u8054\nalter table BOOK\n    add constraint UQ_BOOK__BOOK_STORE\n        /* highlight-next-line */\n        unique(STORE_ID);\n")),(0,l.kt)("h3",{id:"2-\u57fa\u4e8e\u4e2d\u95f4\u8868"},"2. \u57fa\u4e8e\u4e2d\u95f4\u8868"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Customer.java"',title:'"Customer.java"'},"@Entity\npublic interface Customer {\n\n    @Nullable\n    @OneToOne\n    // highlight-next-line\n    @JoinTable\n    Address address();\n\n    ...\n}\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Customer.kt"',title:'"Customer.kt"'},"@Entity\ninterface Customer {\n\n    @OneToOne\n    // highlight-next-line\n    @JoinTable\n    val address: Address?\n\n    ...\n}\n")))),(0,l.kt)("p",null,"\u8fd9\u91cc\uff0c\u5e76\u6ca1\u6709\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"@JoinTable"),"\u6307\u5b9a\u4efb\u4f55\u5c5e\u6027\uff0cJimmer\u4f1a\u6839\u636e",(0,l.kt)("a",{parentName:"p",href:"../naming-strategy"},"\u547d\u540d\u7b56\u7565"),"\u63a8\u5bfc",(0,l.kt)("inlineCode",{parentName:"p"},"address"),"\u5c5e\u6027\u5bf9\u5e94\u7684\u5217\u540d\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u9ed8\u8ba4\u7684",(0,l.kt)("a",{parentName:"p",href:"../naming-strategy"},"\u547d\u540d\u7b56\u7565"),"\u672a\u88ab\u7528\u6237\u8986\u76d6\uff0c\u63a8\u5bfc\u51fa\u7684\u4e2d\u95f4\u8868\u4fe1\u606f\u4e3a:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e2d\u95f4\u8868\u8868\u540d: CUSTOMER_ADDRESS_MAPPING"),(0,l.kt)("li",{parentName:"ul"},"\u4e2d\u95f4\u8868\u6307\u5411\u5f53\u524d\u5b9e\u4f53\u7684\u5916\u952e\u7684\u5217\u540d: CUSTOMER_ID"),(0,l.kt)("li",{parentName:"ul"},"\u4e2d\u95f4\u8868\u6307\u5411\u5173\u8054\u5b9e\u4f53\u7684\u5916\u952e\u7684\u5217\u540d: ADDRESS_ID")),(0,l.kt)("p",null,"\u6240\u4ee5\uff0c\u4e4b\u524d\u7684\u4ee3\u7801\u548c\u8fd9\u91cc\u7684\u4ee3\u7801\u7b49\u4ef7\uff1a"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Customer.java"',title:'"Customer.java"'},'@Entity\npublic interface Customer {\n\n    @Nullable\n    @OneToOne\n    @JoinTable(\n        /* highlight-start */\n        name = "CUSTOMER_ADDRESS_MAPPING",\n        joinColumnName = "CUSTOMER_ID",\n        inverseJoinColumnName = "ADDRESS_ID"\n        /* highlith-end */\n    )\n    Address address();\n\n    ...\n}\n'))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Customer.kt"',title:'"Customer.kt"'},'@Entity\ninterface Customer {\n\n    @OneToOne\n    @JoinTable(\n        /* highlight-start */\n        name = "CUSTOMER_ADDRESS_MAPPING",\n        joinColumnName = "CUSTOMER_ID",\n        inverseJoinColumnName = "ADDRESS_ID"\n        /* highlight-end */\n    )\n    val address: Address?\n\n    ...\n}\n')))),(0,l.kt)("p",null,"\u4e2d\u95f4\u8868",(0,l.kt)("inlineCode",{parentName:"p"},"CUSTOMER_ADDRESS_MAPPING"),"\u5b9a\u4e49\u5982\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"create table CUSTOMER_ADDRESS_MAPPING(\n    CUSTOMER_ID bigint not null,\n    ADDRESS_ID bigint not null\n);\n\nalter table ADDRESS_MAPPING\n    add constraint PK_ADDRESS_MAPPING\n        primary(CUSTOMER_ID, ADDRESS_ID);\n\n// \u5982\u679c\u6307\u5411\u5f53\u524d\u5bf9\u8c61\u7684\u5916\u952e\u662f\u771f\u7684\uff0c\u5efa\u7acb\u5916\u952e\u7ea6\u675f\nalter table CUSTOMER_ADDRESS_MAPPING\n    add constraint FK_CUSTOMER_ADDRESS_MAPPING__CUSTOMER\n        foreign key(CUSTOMER_ID)\n            references CUSTOMER(ID);\n\n// \u5982\u679c\u6307\u5411\u5173\u8054\u5bf9\u8c61\u7684\u5916\u952e\u662f\u771f\u7684\uff0c\u5efa\u7acb\u5916\u952e\u7ea6\u675f\nalter table CUSTOMER_ADDRESS_MAPPING\n    add constraint FK_CUSTOMER_ADDRESS_MAPPING__ADDRESS\n        foreign key(ADDRESS_ID)\n            references ADDRESS(ID);\n\n// \u8fd9\u4e24\u4e2a\u7ea6\u675f\u975e\u5e38\u91cd\u8981\u3002\n// \u5426\u5219\u8fd9\u5f20\u4e2d\u95f4\u8868\u8868\u8fbe\u7684\u662f\u591a\u5bf9\u591a\u5173\u8054\uff0c\u800c\u975e\u4e00\u5bf9\u4e00\u5173\u8054\nalter table CUSTOMER_ADDRESS_MAPPING\n    add constraint UQ_CUSTOMER_ADDRESS_MAPPING__CUSTOMER_ID\n        unique(CUSTOMER_ID);\nalter table CUSTOMER_ADDRESS_MAPPING\n    add constraint UQ_CUSTOMER_ADDRESS_MAPPING__ADDRESS_ID\n        unique(CUSTOMER_ID);\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4e2d\u95f4\u8868\u7684\u53ea\u6709\u4e24\u4e2a\u5916\u952e\uff0c\u800c\u4e14\u90fd\u975enull\u3002\u4e2d\u95f4\u8868\u9760\u63d2\u5165\u6570\u636e\u548c\u5220\u9664\u6570\u636e\u7ef4\u62a4\u5173\u8054\uff0c\u672c\u8eab\u4ece\u4e0d\u5b58\u50a8null\u6570\u636e")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4e2d\u95f4\u8868\u6ca1\u6709\u5bf9\u5e94\u7684ORM\u5b9e\u4f53\uff0c\u65e0\u9700\u72ec\u7acb\u4e3b\u952e\uff0c\u4e24\u4e2a\u5916\u952e\u8054\u5408\u4f5c\u4e3a\u4e3b\u952e\u5373\u53ef")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4e2d\u95f4\u8868\u8868\u793a\u591a\u5bf9\u591a\u5173\u8054\u3002\u8981\u8ba9\u5176\u9000\u5316\u4e3a\u4e00\u5bf9\u4e00\u5173\u8054\uff0c\u5fc5\u987b\u4e3a\u4e2d\u95f4\u8868\u7684\u6bcf\u4e00\u4e2a\u5916\u952e\u90fd\u6307\u5b9a\u552f\u4e00\u7ea6\u675f"))),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"\u6ce8\u610f"),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u9664\u975e\u4e3a\u4e86\u517c\u5bb9\u5df2\u6709\u6570\u636e\u5e93\u8bbe\u8ba1\uff0c\u4e00\u5bf9\u4e00\u5173\u8054\u90fd\u5efa\u8bae\u76f4\u63a5\u4f7f\u7528\u5916\u952e\uff0c\u800c\u975e\u4e2d\u95f4\u8868")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4e00\u65e6\u4f7f\u7528\u4e2d\u95f4\u8868\u6620\u5c04\u4e00\u5bf9\u4e00\u5173\u8054\uff0cJimmer\u5173\u8054\u5c5e\u6027\u5fc5\u987b\u53efnull\uff0c\u56e0\u4e3a\u6570\u636e\u5e93\u65e0\u6cd5\u4fdd\u8bc1\u4efb\u4f55\u5b9e\u4f53\u5728\u4e2d\u95f4\u8868\u4e2d\u4e00\u5b9a\u6709\u5bf9\u5e94\u6570\u636e")))),(0,l.kt)("h2",{id:"\u4ece\u52a8\u65b9"},"\u4ece\u52a8\u65b9"),(0,l.kt)("p",null,"\u4ece\u52a8\u65b9\u7684\u914d\u7f6e\u975e\u5e38\u7b80\u5355\uff0c\u6307\u5b9a",(0,l.kt)("inlineCode",{parentName:"p"},"Address.customer"),"\u5c5e\u6027\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"Customer.address"),"\u5c5e\u6027\u7684\u955c\u50cf\u5373\u53ef\u3002"),(0,l.kt)("p",null,"\u5728\u4e0b\u9762\u7684\u4ee3\u7801\u4e2d"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5de6\u4fa7\uff1a\u4e0a\u4e00\u8282\u4e2d\u8ba8\u8bba\u8fc7\u7684\u4e3b\u52a8\u65b9")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u53f3\u4fa7\uff1a\u672c\u8282\u8981\u4ecb\u7ecd\u4ece\u52a8\u65b9\u5173\u8054",(0,l.kt)("inlineCode",{parentName:"p"},"Address.customer"),"\uff0c\u5b83\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"Customer.address"),"\u7684\u955c\u50cf"))),(0,l.kt)("p",null,"\u8fd9\u91cc\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},'@OneToOne(mappedBy = "store")'),"\uff0c\u6307\u5f53\u524d\u5c5e\u6027",(0,l.kt)("inlineCode",{parentName:"p"},"BookStore.books"),"\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"Book.store"),"\u7684\u955c\u50cf\u3002"),(0,l.kt)("div",{style:{display:"flex",alignItems:"start"}},(0,l.kt)("div",null,(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Customer.java"',title:'"Customer.java"'},'@Entity\npublic interface Customer {\n\n    @OneToOne\n    @JoinColumn(name = "ADDRESS_ID")\n    Address address();\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n'))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Customer.kt"',title:'"Customer.kt"'},'@Entity\ninterface Customer {\n\n    @OneToOne\n    @JoinColumn(name = "ADDRESS_ID")\n    val address: Address\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n'))))),(0,l.kt)("div",null,(0,l.kt)("p",null,(0,l.kt)("img",{alt:"mirror",src:t(79442).Z,width:"130",height:"239"}))),(0,l.kt)("div",null,(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Address.java"',title:'"Address.java"'},'@Entity\npublic interface Address {\n\n    // `mappedBy`\u8868\u793a`Address.customer`\n    // \u662f`Customer.address`\u7684\u955c\u50cf\n    // highlight-next-line\n    @OneToOne(mappedBy = "address")\n    @Nullable\n    Customer customer();\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n'))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Address.kt"',title:'"Address.kt"'},'@Entity\ninterface Address {\n\n    // `mappedBy`\u8868\u793a`Address.customer`\n    // \u662f`Customer.address`\u7684\u955c\u50cf\n    // highlight-next-line\n    @OneToOne(mappedBy = "address")\n    val customer: Customer?\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n')))))),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"\u6ce8\u610f"),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4e00\u65e6\u6307\u5b9a",(0,l.kt)("inlineCode",{parentName:"p"},"@OneToOne"),"\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"mappedBy"),"\u5c5e\u6027\uff0c\u5c31\u4e0d\u5f97\u4f7f\u7528\u6bd4\u5982",(0,l.kt)("inlineCode",{parentName:"p"},"@JoinColumn"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"@JoinTable"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4f5c\u4e3a\u4ece\u52a8\u65b9\u7684\u4e00\u5bf9\u4e00\u5173\u8054\u5c5e\u6027\u5fc5\u987b\u53efnull")))))}c.isMDXComponent=!0},79442:(e,n,t)=>{t.d(n,{Z:()=>a});const a="data:image/svg+xml;base64,PHN2ZyBpZD0iU3ZnanNTdmcxMDAxIiB3aWR0aD0iMTI5LjUiIGhlaWdodD0iMjM5IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIj48ZGVmcyBpZD0iU3ZnanNEZWZzMTAwMiI+PC9kZWZzPjxnIGlkPSJTdmdqc0cxMDA4Ij48cGF0aCBpZD0iU3ZnanNQYXRoMTAwOSIgZD0iTTY1IDI1TDY1IDExOS41TDY1IDExOS41TDY1IDIxNCIgc3Ryb2tlPSIjMzIzMjMyIiBzdHJva2Utd2lkdGg9IjMiIGZpbGw9Im5vbmUiPjwvcGF0aD48L2c+PGcgaWQ9IlN2Z2pzRzEwMTAiIHRyYW5zZm9ybT0ibWF0cml4KDYuMTIzMjMzOTk1NzM2NzY2ZS0xNywxLC0xLDYuMTIzMjMzOTk1NzM2NzY2ZS0xNywxMDUsMjcpIj48cGF0aCBpZD0iU3ZnanNQYXRoMTAxMSIgZD0iTSAwIDBMIDE4NCAwTCAxNzQgMjBMIDEwIDIwTCAwIDBaIiBzdHJva2U9InJnYmEoMzMsNDEsNDgsMSkiIHN0cm9rZS13aWR0aD0iMiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PGcgaWQ9IlN2Z2pzRzEwMTIiPjx0ZXh0IGlkPSJTdmdqc1RleHQxMDEzIiBmb250LWZhbWlseT0i5b6u6L2v6ZuF6buRIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjEzcHgiIHdpZHRoPSIxNDhweCIgZmlsbD0iIzMyMzIzMiIgZm9udC13ZWlnaHQ9IjQwMCIgYWxpZ249Im1pZGRsZSIgbGluZUhlaWdodD0iMTI1JSIgYW5jaG9yPSJtaWRkbGUiIGZhbWlseT0i5b6u6L2v6ZuF6buRIiBzaXplPSIxM3B4IiB3ZWlnaHQ9IjQwMCIgZm9udC1zdHlsZT0iIiBvcGFjaXR5PSIxIiB5PSItMC42MjUiIHRyYW5zZm9ybT0icm90YXRlKDApIj48L3RleHQ+PC9nPjwvZz48ZyBpZD0iU3ZnanNHMTAxNCIgdHJhbnNmb3JtPSJtYXRyaXgoLTEuODM2OTcwMTk4NzIxMDI5N2UtMTYsLTEsMSwtMS44MzY5NzAxOTg3MjEwMjk3ZS0xNiwyNS41MDAwMDAwMDAwMDAwMTgsMjEzLjUpIj48cGF0aCBpZD0iU3ZnanNQYXRoMTAxNSIgZD0iTSAwIDBMIDE4NyAwTCAxNzcgMjBMIDEwIDIwTCAwIDBaIiBzdHJva2U9InJnYmEoMzMsNDEsNDgsMSkiIHN0cm9rZS13aWR0aD0iMiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PGcgaWQ9IlN2Z2pzRzEwMTYiPjx0ZXh0IGlkPSJTdmdqc1RleHQxMDE3IiBmb250LWZhbWlseT0i5b6u6L2v6ZuF6buRIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjEzcHgiIHdpZHRoPSIxNTBweCIgZmlsbD0iIzMyMzIzMiIgZm9udC13ZWlnaHQ9IjQwMCIgYWxpZ249Im1pZGRsZSIgbGluZUhlaWdodD0iMTI1JSIgYW5jaG9yPSJtaWRkbGUiIGZhbWlseT0i5b6u6L2v6ZuF6buRIiBzaXplPSIxM3B4IiB3ZWlnaHQ9IjQwMCIgZm9udC1zdHlsZT0iIiBvcGFjaXR5PSIxIiB5PSItMC42MjUiIHRyYW5zZm9ybT0icm90YXRlKDApIj48L3RleHQ+PC9nPjwvZz48L3N2Zz4="}}]);