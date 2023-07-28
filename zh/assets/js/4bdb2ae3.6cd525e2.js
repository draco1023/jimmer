"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[1166],{3905:(e,n,t)=>{t.d(n,{Zo:()=>o,kt:()=>c});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var m=a.createContext({}),p=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},o=function(e){var n=p(e.components);return a.createElement(m.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,m=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),d=p(t),c=l,g=d["".concat(m,".").concat(c)]||d[c]||s[c]||r;return t?a.createElement(g,i(i({ref:n},o),{},{components:t})):a.createElement(g,i({ref:n},o))}));function c(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=d;var u={};for(var m in n)hasOwnProperty.call(n,m)&&(u[m]=n[m]);u.originalType=e,u.mdxType="string"==typeof e?e:l,i[1]=u;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(67294),l=t(34334);const r="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>c});var a=t(83117),l=t(67294),r=t(34334),i=t(72389),u=t(67392),m=t(7094),p=t(12466);const o="tabList__CuJ",s="tabItem_LNqP";function d(e){var n;const{lazy:t,block:i,defaultValue:d,values:c,groupId:g,className:k}=e,v=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=c??v.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),b=(0,u.l)(y,((e,n)=>e.value===n.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const E=null===d?d:d??(null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)??v[0].props.value;if(null!==E&&!y.some((e=>e.value===E)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${E}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:N}=(0,m.U)(),[f,T]=(0,l.useState)(E),x=[],{blockElementScrollPositionUntilNextRender:j}=(0,p.o5)();if(null!=g){const e=h[g];null!=e&&e!==f&&y.some((n=>n.value===e))&&T(e)}const I=e=>{const n=e.currentTarget,t=x.indexOf(n),a=y[t].value;a!==f&&(j(n),T(a),null!=g&&N(g,String(a)))},O=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=x.indexOf(e.currentTarget)+1;t=x[n]??x[0];break}case"ArrowLeft":{const n=x.indexOf(e.currentTarget)-1;t=x[n]??x[x.length-1];break}}null==(n=t)||n.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",o)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},k)},y.map((e=>{let{value:n,label:t,attributes:i}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:f===n?0:-1,"aria-selected":f===n,key:n,ref:e=>x.push(e),onKeyDown:O,onFocus:I,onClick:I},i,{className:(0,r.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":f===n})}),t??n)}))),t?(0,l.cloneElement)(v.filter((e=>e.props.value===f))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},v.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==f})))))}function c(e){const n=(0,i.Z)();return l.createElement(d,(0,a.Z)({key:String(n)},e))}},67489:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>m,default:()=>c,frontMatter:()=>u,metadata:()=>p,toc:()=>s});var a=t(83117),l=(t(67294),t(3905)),r=t(65488),i=t(85162);const u={sidebar_position:6,title:"Enum\u6620\u5c04"},m=void 0,p={unversionedId:"mapping/advanced/enum",id:"mapping/advanced/enum",title:"Enum\u6620\u5c04",description:"Jimmer\u5904\u7406\u679a\u4e3e\u6709\u4e24\u79cd\u65b9\u5f0f\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/mapping/advanced/enum.mdx",sourceDirName:"mapping/advanced",slug:"/mapping/advanced/enum",permalink:"/jimmer/zh/docs/mapping/advanced/enum",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/mapping/advanced/enum.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Enum\u6620\u5c04"},sidebar:"tutorialSidebar",previous:{title:"\u590d\u6742\u8ba1\u7b97",permalink:"/jimmer/zh/docs/mapping/advanced/calculated/transient"},next:{title:"JSON\u6620\u5c04",permalink:"/jimmer/zh/docs/mapping/advanced/json"}},o={},s=[{value:"\u6620\u5c04\u4e3a\u5b57\u7b26\u4e32",id:"\u6620\u5c04\u4e3a\u5b57\u7b26\u4e32",level:2},{value:"\u6620\u5c04\u4e3a\u6574\u6570",id:"\u6620\u5c04\u4e3a\u6574\u6570",level:2},{value:"\u4e0d\u660e\u786e\u4f7f\u7528@EnumType",id:"\u4e0d\u660e\u786e\u4f7f\u7528enumtype",level:2}],d={toc:s};function c(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Jimmer\u5904\u7406\u679a\u4e3e\u6709\u4e24\u79cd\u65b9\u5f0f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6620\u5c04\u4e3a\u5b57\u7b26\u4e32\uff1a\u53ef\u89c2\u5bdf\u6027\u4f18\u5148\u7684\u9009\u62e9\uff0c\u4e5f\u662f\u9ed8\u8ba4\u7684\u9009\u9879\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6620\u5c04\u4e3a\u6574\u6570\uff1a\u6027\u80fd\u4f18\u5148\u7684\u9009\u62e9\u3002"))),(0,l.kt)("p",null,"Jimmer\u63d0\u4f9b\u4e86\u4e24\u4e2a\u7528\u4e8e\u679a\u4e3e\u7684\u6ce8\u89e3"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"org.babyfish.jimmer.sql.EnumType"),": \u4fee\u9970\u679a\u4e3e\u7c7b\u578b\uff0c\u53ef\u9009"),(0,l.kt)("p",{parentName:"li"},"\u6307\u5b9a\u6620\u5c04\u65b9\u5f0f\uff0c\u6620\u5c04\u4e3a\u5b57\u7b26\u4e32\uff0c\u8fd8\u662f\u6309\u4f4d\u7f6e\u6620\u5c04\u4e3a\u6574\u6570")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"org.babyfish.jimmer.sql.EnumItem"),": \u4fee\u9970\u679a\u4e3e\u9879\uff0c\u53ef\u9009"),(0,l.kt)("p",{parentName:"li"},"\u8986\u76d6\u67d0\u4e2a\u679a\u4e3e\u9879\u88ab\u6620\u5c04\u540e\u7684\u5b57\u7b26\u4e32\u503c\u6216\u6574\u6570\u503c"))),(0,l.kt)("h2",{id:"\u6620\u5c04\u4e3a\u5b57\u7b26\u4e32"},"\u6620\u5c04\u4e3a\u5b57\u7b26\u4e32"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Gender.java"',title:'"Gender.java"'},"// highlight-next-line\n@EnumType(EnumType.Strategy.NAME)\npublic enum Gender {\n    MALE,\n    FEMALE\n}\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Gender.kt"',title:'"Gender.kt"'},"// highlight-next-line\n@EnumType(EnumType.Strategy.NAME)\nenum class Gender {\n    MALE,\n    FEMALE\n}\n")))),(0,l.kt)("p",null,"\u8fd9\u91cc\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"@EnumType"),'\u7684\u53c2\u6570\u88ab\u6307\u5b9a\u4e3a"NAME", \u8868\u793a\u6620\u5c04\u4e3a\u5b57\u7b26\u4e32\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4e24\u4e2a\u679a\u4e3e\u9879\u6620\u5c04\u540e\u7684\u5b57\u7b26\u4e32\u548c\u5b83\u4eec\u7684\u540d\u5b57\u76f8\u540c\uff0c\u5373"MALE"\u548c"FEMALE"\u3002'),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u671f\u671b\u540e\u7684\u5b57\u7b26\u4e32\u548c\u679a\u4e3e\u9879\u540d\u79f0\u4e0d\u540c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"@EnumItem"),"\u4fee\u9970\u679a\u4e3e\u9879\u3002"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Gender.java"',title:'"Gender.java"'},'@EnumType(EnumType.Strategy.NAME)\npublic enum Gender {\n\n    // highlight-next-line\n    @EnumItem(name = "M")\n    MALE,\n\n    // highlight-next-line\n    @EnumItem(name = "F")\n    FEMALE\n}\n'))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Gender.kt"',title:'"Gender.kt"'},'@EnumType(EnumType.Strategy.NAME)\nenum class Gender {\n\n    // highlight-next-line\n    @EnumItem(name = "M")\n    MALE,\n\n    // highlight-next-line\n    @EnumItem(name = "F")\n    FEMALE\n}\n')))),(0,l.kt)("h2",{id:"\u6620\u5c04\u4e3a\u6574\u6570"},"\u6620\u5c04\u4e3a\u6574\u6570"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Gender.java"',title:'"Gender.java"'},"// highlight-next-line\n@EnumType(EnumType.Strategy.ORDINAL)\npublic enum Gender {\n    MALE,\n    FEMALE\n}\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Gender.kt"',title:'"Gender.kt"'},"// highlight-next-line\n@EnumType(EnumType.Strategy.ORDINAL)\nenum class Gender {\n    MALE,\n    FEMALE\n}\n")))),(0,l.kt)("p",null,"\u8fd9\u91cc\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"@EnumType"),'\u7684\u53c2\u6570\u88ab\u6307\u5b9a\u4e3a"ORDINAL", \u8868\u793a\u6620\u5c04\u4e3a\u6574\u6570\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4e24\u4e2a\u679a\u4e3e\u9879\u6620\u5c04\u540e\u7684\u5b57\u7b26\u4e32\u548c\u5b83\u4eec\u7684',(0,l.kt)("inlineCode",{parentName:"p"},"ordinal"),"\u76f8\u540c\uff0c\u53730\u548c1\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u671f\u671b\u540e\u7684\u5b57\u7b26\u4e32\u548c\u679a\u4e3e\u9879\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"ordinal"),"\u4e0d\u540c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"@EnumItem"),"\u4fee\u9970\u679a\u4e3e\u9879\u3002"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Gender.java"',title:'"Gender.java"'},"@EnumType(EnumType.Strategy.ORDINAL)\npublic enum Gender {\n\n    // highlight-next-line\n    @EnumItem(ordinal = 100)\n    MALE,\n\n    // highlight-next-line\n    @EnumItem(ordinal = 200)\n    FEMALE\n}\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Gender.kt"',title:'"Gender.kt"'},"@EnumType(EnumType.Strategy.ORDINAL)\nenum class Gender {\n\n    // highlight-next-line\n    @EnumItem(ordinal = 100)\n    MALE,\n\n    // highlight-next-line\n    @EnumItem(ordinal = 200)\n    FEMALE\n}\n")))),(0,l.kt)("h2",{id:"\u4e0d\u660e\u786e\u4f7f\u7528enumtype"},"\u4e0d\u660e\u786e\u4f7f\u7528@EnumType"),(0,l.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u4e0d\u4e3a\u679a\u4e3e\u7c7b\u578b\u6307\u5b9a@EnumType\u6ce8\u89e3\uff0c\u5373\uff0c\u4e0d\u660e\u786e\u8bf4\u660e\u67d0\u4e2a\u679a\u4e3e\u7c7b\u578b\u5e94\u8be5\u6620\u5c04\u6210\u5b57\u7b26\u4e32\u8fd8\u662f\u6574\u6570\u3002"),(0,l.kt)("p",null,"\u6b64\u65f6\uff0cJimmer\u4f1a\u53c2\u8003\u9ed8\u8ba4\u7684\u5168\u90e8\u914d\u7f6e\u3002"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},'\u6b64\u5168\u5c40\u914d\u7f6e\u9ed8\u8ba4\u4e3a"NAME"\uff0c\u5982\u679c\u4f60\u9700\u8981"ORDINAL"\uff0c\u8bf7\u8986\u76d6\u5168\u90e8\u914d\u7f6e\u3002')),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u5c55\u793a\u5982\u4f55\u8986\u76d6\u5168\u90e8\u914d\u7f6e\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528SpringBoot\u65f6"),(0,l.kt)("p",{parentName:"li"},"\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"application.yml"),"\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"application.properties"),"\u79cd\u6dfb\u52a0\u914d\u7f6e\u9879",(0,l.kt)("inlineCode",{parentName:"p"},"jimmer.default-enum-strategy"),'\uff0c\u5c06\u5176\u6307\u5b9a\u4e3a"ORIDNAL"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4e0d\u4f7f\u7528SpringBoot\u65f6"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"JSqlClient sqlClient = JSqlClient\n    .newBuilder()\n    // highlight-next-line\n    .setDefaultEnumStrategy(EnumType.Strategy.ORDINAL)\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n    .build();\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val sqlClient = newKSqlClient {\n    // highlight-next-line\n    setDefaultEnumStrategy(EnumType.Strategy.ORDINAL)\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n}\n")))))))}c.isMDXComponent=!0}}]);