"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[8676],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(n),c=l,k=m["".concat(p,".").concat(c)]||m[c]||d[c]||r;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),l=n(34334);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(83117),l=n(67294),r=n(34334),i=n(72389),o=n(67392),p=n(7094),s=n(12466);const u="tabList__CuJ",d="tabItem_LNqP";function m(e){var t;const{lazy:n,block:i,defaultValue:m,values:c,groupId:k,className:b}=e,g=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=c??g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),h=(0,o.l)(v,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const T=null===m?m:m??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==T&&!v.some((e=>e.value===T)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${T}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:f}=(0,p.U)(),[y,C]=(0,l.useState)(T),_=[],{blockElementScrollPositionUntilNextRender:x}=(0,s.o5)();if(null!=k){const e=N[k];null!=e&&e!==y&&v.some((t=>t.value===e))&&C(e)}const S=e=>{const t=e.currentTarget,n=_.indexOf(t),a=v[n].value;a!==y&&(x(t),C(a),null!=k&&f(k,String(a)))},w=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=_.indexOf(e.currentTarget)+1;n=_[t]??_[0];break}case"ArrowLeft":{const t=_.indexOf(e.currentTarget)-1;n=_[t]??_[_.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",u)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},b)},v.map((e=>{let{value:t,label:n,attributes:i}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>_.push(e),onKeyDown:w,onFocus:S,onClick:S},i,{className:(0,r.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":y===t})}),n??t)}))),n?(0,l.cloneElement)(g.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function c(e){const t=(0,i.Z)();return l.createElement(m,(0,a.Z)({key:String(t)},e))}},91263:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(83117),l=(n(67294),n(3905)),r=n(65488),i=n(85162);const o={sidebar_position:2,title:"\u81ea\u5b9a\u4e49\u8fc7\u6ee4\u5668"},p=void 0,s={unversionedId:"query/global-filter/user-filter",id:"query/global-filter/user-filter",title:"\u81ea\u5b9a\u4e49\u8fc7\u6ee4\u5668",description:"\u63d0\u4f9b\u62bd\u8c61\u5b9e\u4f53\u57fa\u7c7b",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/query/global-filter/user-filter.mdx",sourceDirName:"query/global-filter",slug:"/query/global-filter/user-filter",permalink:"/jimmer/zh/docs/query/global-filter/user-filter",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/query/global-filter/user-filter.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u81ea\u5b9a\u4e49\u8fc7\u6ee4\u5668"},sidebar:"tutorialSidebar",previous:{title:"\u903b\u8f91\u5220\u9664",permalink:"/jimmer/zh/docs/query/global-filter/logical-deleted"},next:{title:"\u591a\u89c6\u89d2\u7f13\u5b58",permalink:"/jimmer/zh/docs/query/global-filter/multiview-cache"}},u={},d=[{value:"\u63d0\u4f9b\u62bd\u8c61\u5b9e\u4f53\u57fa\u7c7b",id:"\u63d0\u4f9b\u62bd\u8c61\u5b9e\u4f53\u57fa\u7c7b",level:2},{value:"\u5b9a\u4e49\u8fc7\u6ee4\u5668",id:"\u5b9a\u4e49\u8fc7\u6ee4\u5668",level:2},{value:"Spring\u73af\u5883\u4e0b\u914d\u7f6e\u8fc7\u6ee4\u5668",id:"spring\u73af\u5883\u4e0b\u914d\u7f6e\u8fc7\u6ee4\u5668",level:3},{value:"\u975eSpring\u73af\u5883\u4e0b\u914d\u7f6e\u8fc7\u6ee4\u5668",id:"\u975espring\u73af\u5883\u4e0b\u914d\u7f6e\u8fc7\u6ee4\u5668",level:3},{value:"\u8fc7\u6ee4\u805a\u5408\u6839\u5bf9\u8c61",id:"\u8fc7\u6ee4\u805a\u5408\u6839\u5bf9\u8c61",level:2},{value:"\u8fc7\u6ee4\u5173\u8054\u5bf9\u8c61",id:"\u8fc7\u6ee4\u5173\u8054\u5bf9\u8c61",level:2},{value:"\u7981\u7528\u8fc7\u6ee4\u5668",id:"\u7981\u7528\u8fc7\u6ee4\u5668",level:2},{value:"Sharding\u8fc7\u6ee4\u5668",id:"sharding\u8fc7\u6ee4\u5668",level:2}],m={toc:d};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u63d0\u4f9b\u62bd\u8c61\u5b9e\u4f53\u57fa\u7c7b"},"\u63d0\u4f9b\u62bd\u8c61\u5b9e\u4f53\u57fa\u7c7b"),(0,l.kt)("p",null,"\u9996\u5148\uff0c\u63d0\u4f9b\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"MappedSuperclass"),"\u8d85\u7c7b\u578b\uff0c\u8ba9\u6240\u6709\u9700\u8981\u591a\u79df\u6237\u7ba1\u7406\u7684\u5b9e\u4f53\u7c7b\u90fd\u7ee7\u627f\u5b83"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="TenantAware.java"',title:'"TenantAware.java"'},"@MappedSuperclass\npublic interface TenantAware {\n\n    String tenant();\n}\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="TenantAware.kt"',title:'"TenantAware.kt"'},"@MappedSuperclass\ninterface TenantAware {\n\n    val tenant: String\n}\n")))),(0,l.kt)("p",null,"\u4efb\u4f55\u9700\u8981\u652f\u6301\u591a\u79df\u6237\u7684\u5b9e\u4f53\u7c7b\u578b\u90fd\u53ef\u4ee5\u7ee7\u627f",(0,l.kt)("inlineCode",{parentName:"p"},"TenantAware"),"\uff0c\u4f8b\u5982",(0,l.kt)("inlineCode",{parentName:"p"},"Book")),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},"@Entity\npublic interface Book extends TenantAware {\n\n    ...\u7701\u7565\u4ee3\u7801...\n}\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},"@Entity\ninterface Book : TenantAware {\n    \n    ...\u7701\u7565\u4ee3\u7801...\n}\n")))),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u8bda\u7136\uff0c\u53ef\u4ee5\u4e0d\u5b9a\u4e49\u62bd\u8c61\u7c7b\u578b\uff0c\u76f4\u63a5\u5bf9\u5b9e\u4f53\u7c7b\u578b\u65bd\u52a0\u8fc7\u6ee4\u5668\uff0c\u8fd9\u6ca1\u6709\u4efb\u4f55\u95ee\u9898\u3002"),(0,l.kt)("p",{parentName:"admonition"},"\u7136\u800c\uff0c\u66f4\u63a8\u8350\u7684\u65b9\u6cd5\u662f\u4ece\u5b9e\u4f53\u4e2d\u63d0\u53d6\u62bd\u8c61\u7c7b\u578b\uff0c\u8fd9\u6837\u4e00\u4e2a\u8fc7\u6ee4\u5668\u53ef\u4ee5\u8fc7\u6ee4\u591a\u79cd\u5b9e\u4f53\u7c7b\u578b\u3002"),(0,l.kt)("p",{parentName:"admonition"},"\u66f4\u91cd\u8981\u7684\u662f\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"MappedSupperClass"),"\u652f\u6301\u591a\u7ee7\u627f\uff0c\u5373\u5b9e\u4f53\u7c7b\u578b\u53ef\u4ee5\u4ece\u591a\u4e2a\u8d85\u7c7b\u578b\u7ee7\u627f\u3002\u591a\u7ee7\u627f\u548c\u5168\u5c40\u8fc7\u6ee4\u5668\u76f8\u7ed3\u5408\u540e\u53ef\u4ee5\u5e26\u6765\u60ca\u4eba\u7684\u7075\u6d3b\u6027\u3002")),(0,l.kt)("h2",{id:"\u5b9a\u4e49\u8fc7\u6ee4\u5668"},"\u5b9a\u4e49\u8fc7\u6ee4\u5668"),(0,l.kt)("p",null,"\u5047\u8bbeSpring\u4e0a\u4e0b\u6587\u4e2d\u6709\u4e00\u4e2a\u7c7b\u578b\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"TenantProvider"),"\u7684\u5bf9\u8c61\uff0c\u5176Java\u65b9\u6cd5",(0,l.kt)("inlineCode",{parentName:"p"},"get()"),"\u548ckotlin\u5c5e\u6027",(0,l.kt)("inlineCode",{parentName:"p"},"tenant"),"\u7528\u4e8e\u4ece\u5f53\u524d\u64cd\u4f5c\u8005\u8eab\u4efd\u4fe1\u606f\u4e2d\u63d0\u53d6\u6240\u5c5e\u79df\u6237\u3002\u5b9a\u4e49\u5982\u4e0b\u8fc7\u6ee4\u5668"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Java\u4e0b\uff0c\u62e6\u622a\u5668\u9700\u5b9e\u73b0",(0,l.kt)("inlineCode",{parentName:"li"},"org.babyfish.jimmer.sql.filter.Filter"),"\u63a5\u53e3\uff0c"),(0,l.kt)("li",{parentName:"ul"},"Kotlin\u4e0b\uff0c\u62e6\u622a\u5668\u9700\u5b9e\u73b0",(0,l.kt)("inlineCode",{parentName:"li"},"org.babyfish.jimmer.sql.kt.filter.KFilter"),"\u63a5\u53e3\u3002")),(0,l.kt)("p",null,"\u5982\u679c\u4f7f\u7528Spring\u6258\u7ba1\uff0c\u4ee3\u7801\u65b9\u5f0f\u5982\u4e0b\uff1a"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"@Component\npublic class TenantFilter implements Filter<TenantAwareProps> {\n\n    private final TenantProvider tenantProvider;\n\n    public TenantFilter(TenantProvider tenantProvider) {\n        this.tenantProvider = tenantProvider;\n    }\n\n    @Override\n    public void filter(FilterArgs<TenantAwareProps> args) {\n        String tenant = tenantProvider.get();\n        if (tenant != null) {\n            args.where(args.getTable().tenant().eq(tenant));\n        }\n    }\n}\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Component\nclass TenantFilter(\n    private val tenantProvider: TenantProvider\n) : KFilter<TenantAware> {\n\n    override fun filter(args: KFilterArgs<TenantAware>) {\n        tenantProvider.tenant?.let {\n            args.apply {\n                where(table.tenant.eq(it))\n            }\n        }\n    }\n}\n")))),(0,l.kt)("p",null,"Java\u548cKotlin\u7684\u8fc7\u6ee4\u5668\u5b9a\u4e49\u7565\u6709\u4e0d\u540c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Java\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"Filter"),"\u7684\u8303\u578b\u53c2\u6570\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"TenantAwareProps"),"\uff0c\u8fd9\u662f\u4e0e\u7f16\u8bd1\u5668\u9488\u5bf9\u62bd\u8c61\u7c7b\u578b",(0,l.kt)("inlineCode",{parentName:"p"},"TenantAware"),"\u81ea\u52a8\u751f\u6210\u7684\u4ee3\u7801\u4e4b\u4e00")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Kotlin\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"KFilter"),"\u7684\u8303\u578b\u53c2\u6570\u662f\u62bd\u8c61\u7c7b\u578b",(0,l.kt)("inlineCode",{parentName:"p"},"TenantAware"),"\u672c\u8eab"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"TenantFilter"),"\u8fc7\u6ee4\u62bd\u8c61\u7c7b\u578b",(0,l.kt)("inlineCode",{parentName:"p"},"TenantAware"),"\uff0c\u5bf9\u4e8e\u4efb\u4f55\u76f4\u63a5\u6216\u95f4\u63a5\u7ee7\u627f\u62bd\u8c61\u63a5\u53e3",(0,l.kt)("inlineCode",{parentName:"p"},"TenantAware"),"\u7684\u5b9e\u4f53\u800c\u8a00\uff0c\u5176\u67e5\u8be2\u90fd\u4f1a\u88ab\u8fd9\u4e2a\u8fc7\u6ee4\u5668\u5904\u7406\uff0c\u81ea\u52a8\u6dfb\u52a0where\u6761\u4ef6\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"TenantFilter"),"\u5185\u90e8\uff0c\u9996\u5148\u4ece\u63d0\u53d6\u5f53\u524d\u64cd\u4f5c\u8005\u8eab\u4efd\u4fe1\u606f\u4e2d\u63d0\u53d6\u5176\u6240\u5c5e\u79df\u6237\uff0c\u5982\u679c\u6240\u5c5e\u79df\u6237\u975enull\uff0c\u5219\u4f7f\u7528\u5b83\u6765\u8fc7\u6ee4\u6570\u636e\uff0c\u53ea\u67e5\u8be2\u548c\u6307\u5b9a\u79df\u6237\u5339\u914d\u7684\u6570\u636e\u3002"),(0,l.kt)("h3",{id:"spring\u73af\u5883\u4e0b\u914d\u7f6e\u8fc7\u6ee4\u5668"},"Spring\u73af\u5883\u4e0b\u914d\u7f6e\u8fc7\u6ee4\u5668"),(0,l.kt)("p",null,"\u4e0a\u6587\u4e2d\uff0c\u6211\u4eec\u5b9a\u4e49\u7684\u7c7b",(0,l.kt)("inlineCode",{parentName:"p"},"TenantFilter"),"\u88ab",(0,l.kt)("inlineCode",{parentName:"p"},"@Compoent"),"\u4fee\u9970\uff0c\u5f88\u660e\u663e\u8fd9\u662f\u4e00\u4e2aSpring\u6258\u7ba1\u5bf9\u8c61\u3002"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f7f\u7528Jimmer\u7684SpringBoot Starter\u4e14\u4fdd\u8bc1\u8fc7\u6ee4\u5668\u88abSpring\u6258\u7ba1\uff0c\u90a3\u4e48Jimmer\u5c31\u4f1a\u5c06\u6ce8\u518c\u5b83\uff0c\u65e0\u9700\u989d\u5916\u7684\u914d\u7f6e\u3002"),(0,l.kt)("p",{parentName:"admonition"},"\u5426\u5219\uff0c\u5fc5\u9700\u624b\u52a8\u6ce8\u518c")),(0,l.kt)("h3",{id:"\u975espring\u73af\u5883\u4e0b\u914d\u7f6e\u8fc7\u6ee4\u5668"},"\u975eSpring\u73af\u5883\u4e0b\u914d\u7f6e\u8fc7\u6ee4\u5668"),(0,l.kt)("p",null,"\u5c06\u8fc7\u6ee4\u5668\u6302\u63a5\u5230SqlClient\u5bf9\u8c61\u4e0a\uff0c\u5373\u53ef\u751f\u6548"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"JSqlClient sqlClient = JSqlBuilder\n    .newBuilder()\n    // highlight-next-line\n    .addFilter(new CustmerFilter())\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n    .build();\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val sqlClient =\n    newKSqlClient {\n        // highlight-next-line\n        addFilters(new CustmerFilter())\n        ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n    }\n")))),(0,l.kt)("h2",{id:"\u8fc7\u6ee4\u805a\u5408\u6839\u5bf9\u8c61"},"\u8fc7\u6ee4\u805a\u5408\u6839\u5bf9\u8c61"),(0,l.kt)("p",null,"\u8fc7\u6ee4\u805a\u5408\u6839\u5bf9\u8c61\u662f\u5168\u5c40\u8fc7\u6ee4\u5668\u6700\u7b80\u5355\u7684\u7528\u6cd5\u3002"),(0,l.kt)("p",null,"\u7531\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"Book"),"\u5b9e\u4f53\u7ee7\u627f\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"TenantAware"),"\uff0c\u5176\u67e5\u8be2\u4f1a\u53d7\u5230\u6b64\u8fc7\u6ee4\u5668\u7684\u5f71\u54cd\u3002"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"List<Book> books = sqlClient.getEntities.findAll(Book.class);\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val books = sqlClient.entities.findAll(Book::class);\n")))),"\u6216",(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"BookTable book = BookTable.$;\nList<Book> books = sqlClient\n    .createQuery(book)\n    .select(book)\n    .execute();\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val books = SqlClient\n    .createQuery(Book::class) {\n        select(table)\n    }\n    .execute()\n")))),(0,l.kt)("p",null,"\u751f\u6210\u7684SQL\u5982\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    tb_1_.ID, \n    tb_1_.TENANT, \n    tb_1_.NAME, \n    tb_1_.EDITION, \n    tb_1_.PRICE, \n    tb_1_.STORE_ID \nfrom BOOK as tb_1_\n/* highlight-next-line */ \nwhere tb_1_.TENANT = ?\n")),(0,l.kt)("p",null,"\u4e0d\u96be\u53d1\u73b0\uff0c\u8fd9\u91cc\u4f7f\u7528\u4e86\u6700\u7b80\u5355\u7684\u67e5\u8be2\uff0c\u6ca1\u6709\u4efb\u4f55\u67e5\u8be2\u53c2\u6570\u3002\u4f46\u662f\u6700\u7ec8\u751f\u4ea7\u7684SQL\u4ecd\u7136\u8fc7\u6ee4\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"tb_1_.TENANT")),(0,l.kt)("h2",{id:"\u8fc7\u6ee4\u5173\u8054\u5bf9\u8c61"},"\u8fc7\u6ee4\u5173\u8054\u5bf9\u8c61"),(0,l.kt)("p",null,"\u4e0d\u4ec5\u53ef\u4ee5\u8fc7\u6ee4\u805a\u5408\u6839\u5bf9\u8c61\uff0c\u5173\u8054\u5bf9\u8c61\u4e5f\u53ef\u4ee5\u88ab\u8fc7\u6ee4\u3002\u7528\u6cd5\u5982\u4e0b"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"List<Author> authors = sqlClient.getEntities.findAll(\n    AuthorFetcher.$\n        .allScalarFields()\n        // highlight-next-line\n        .books(\n            BookFetcher.$\n                .allScalarFields()\n        )\n);\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val books = sqlClient.entities.findAll(\n    newFetcher(Author::class).by {\n        allScalarFields()\n        // highlight-next-line\n        books {\n            allScalarFields()\n        }\n    }\n);\n")))),"\u6216",(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"AuthorTable author = AuthorTable.$;\nList<Author> authors = sqlClient\n    .createQuery(author)\n    .select(\n        author.fetch(\n            AuthorFetcher.$\n                .allScalarFields()\n                // highlight-next-line\n                .books(\n                    BookFetcher.$\n                        .allScalarFields()\n                )\n        )\n    )\n    .execute();\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val authors = SqlClient\n    .createQuery(Author::class) {\n        select(\n            table.fetchBy {\n                allScalarFields()\n                // highlight-next-line\n                books {\n                    allScalarFields()\n                }\n            }\n        )\n    }\n    .execute()\n")))),(0,l.kt)("p",null,"\u8fd9\u4f1a\u5bfc\u81f4\u5982\u4e0b\u4e24\u53e5SQL\u88ab\u751f\u6210"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u67e5\u8be2\u805a\u5408\u6839"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    tb_1_.ID, tb_1_.FIRST_NAME, tb_1_.LAST_NAME, tb_1_.GENDER \nfrom AUTHOR as tb_1_\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u67e5\u8be2\u5173\u8054\u5bf9\u8c61"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    tb_2_.AUTHOR_ID, \n    tb_1_.ID, \n    tb_1_.TENANT, \n    tb_1_.NAME, \n    tb_1_.EDITION, \n    tb_1_.PRICE \nfrom BOOK as tb_1_ \ninner join BOOK_AUTHOR_MAPPING as tb_2_ \n    on tb_1_.ID = tb_2_.BOOK_ID \nwhere \n    tb_2_.AUTHOR_ID in (?, ?, ?, ?, ?) \nand \n    /* highlight-next-line */\n    tb_1_.TENANT = ?\n")))),(0,l.kt)("h2",{id:"\u7981\u7528\u8fc7\u6ee4\u5668"},"\u7981\u7528\u8fc7\u6ee4\u5668"),(0,l.kt)("p",null,"\u8c03\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"sqlClient.filters"),"\uff0c\u5728\u4e0d\u5f71\u54cd\u5f53\u524d",(0,l.kt)("inlineCode",{parentName:"p"},"sqlClien"),"\u7684\u524d\u63d0\u4e0b\uff0c\u521b\u5efa\u65b0\u7684\u4e34\u65f6SqlClient\uff0c\u53ef\u4ee5\u8fbe\u5230\u7981\u7528\u8fc7\u6ee4\u5668\u7684\u76ee\u7684\u3002"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"JSqlClient tmpSqlClient =\n    sqlClient.filters(it -> {\n        it\n            // highlight-next-line\n            .disableByTypes(TenantFilter.class);\n    });\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val tmpSqlClient = \n    sqlClient.filters {\n        // highlight-next-line\n        disableByTypes(TenantFilter::class)\n    }\n")))),(0,l.kt)("p",null,"\u8fd9\u91cc\uff0c\u6211\u4eec\u5f97\u5230\u4e86\u4e00\u4e2a\u4e34\u65f6\u7684\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"tmpSqlClient"),"\uff0c\u57fa\u4e8e\u5b83\u521b\u5efa\u7684\u67e5\u8be2\u5c06\u4f1a\u65e0\u89c6\u4e0a\u9762\u6f14\u793a\u7684\u8fc7\u6ee4\u5668\u3002"),(0,l.kt)("h2",{id:"sharding\u8fc7\u6ee4\u5668"},"Sharding\u8fc7\u6ee4\u5668"),(0,l.kt)("p",null,"Jimmer\u63d0\u4f9b\u6309\u7167id ",(0,l.kt)("em",{parentName:"p"},"(\u6216id\u96c6\u5408)")," \u67e5\u8be2\u5b9e\u4f53 ",(0,l.kt)("em",{parentName:"p"},"(\u6216\u5b9e\u4f53\u96c6\u5408)")," \u7684\u7b80\u5355API\u3002"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8fd9\u7c7bAPI\u662f\u7279\u6b8a\u7684\uff0c\u5b83\u4eec\u65e0\u89c6\u5168\u5c40\u8fc7\u6ee4\u5668\u3002\u56e0\u4e3aid\u552f\u4e00\u786e\u5b9a\u4e86\u5bf9\u8c61\uff0c\u6309\u7167id\u67e5\u8be2\u5bf9\u8c61\u5ffd\u7565\u8fc7\u6ee4\u5668\u662f\u6b63\u786e\u7684\u3002"),(0,l.kt)("p",null,"\u7136\u800c\uff0c\u5982\u679cJDBC\u5c42\u9762\u4f7f\u7528\u4e86",(0,l.kt)("a",{parentName:"p",href:"https://shardingsphere.apache.org/document/4.1.1/en/manual/sharding-jdbc/"},"sharding-jdbc"),"\u6280\u672f\uff0c\u4e14\u5728\u8fc7\u6ee4\u5668\u4e2d\u88ab\u7528\u4f5c\u7b5b\u9009\u6761\u4ef6\u7684\u5b57\u6bb5\u5c31\u662fsharding-jdbc\u4e2d\u5206\u5e93\u5206\u8868\u7684\u5b57\u6bb5\uff0c\u8fd9\u65f6\uff0c\u4ec5\u4ec5\u6839\u636eid\u67e5\u8be2\u4f1a\u5bfc\u81f4sharding-jdbc\u67e5\u8be2\u591a\u4e2a\u5206\u7247\uff0c\u8fd9\u662f\u707e\u96be\u3002"),(0,l.kt)("p",null,"\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u8ba9\u8fc7\u6ee4\u5668\u5b9e\u73b0",(0,l.kt)("inlineCode",{parentName:"p"},"ShardingFilter"),"\u63a5\u53e3",(0,l.kt)("em",{parentName:"p"},"(Java)"),"\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"KShardingFilter"),"\u63a5\u53e3",(0,l.kt)("em",{parentName:"p"},"(Kotlin)"),"\u5373\u53ef\uff0c\u8be5\u63a5\u53e3\u65e0\u4efb\u4f55\u884c\u4e3a\uff0c\u4ec5\u4ec5\u505a\u7c7b\u578b\u6807\u8bb0\u3002"),(0,l.kt)("p",null,"\u4e00\u65e6\u8fc7\u6ee4\u5668\u7ee7\u627f\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"ShardingFilter"),"\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"KShardingFilter"),"\uff0c\u8fd9\u7c7b\u7b80\u5355API\u5c06\u4e0d\u518d\u5ffd\u7565\u8fc7\u6ee4\u6b64\u8fc7\u6ee4\u5668\u3002\u8fd9\u53ef\u4ee5\u4fdd\u8bc1\u6700\u7ec8SQL\u4e00\u5b9a\u5305\u542bsharding-jdbc\u6240\u9700\u7684sharding\u5b57\u6bb5\uff0c\u4ece\u800c\u5b9e\u73b0\u53ea\u67e5\u8be2\u5355\u4e2a\u5206\u7247\uff0c\u800c\u975e\u6240\u6709\u5206\u7247\u90fd\u67e5\u8be2\u4e00\u6b21\u3002"))}c.isMDXComponent=!0}}]);