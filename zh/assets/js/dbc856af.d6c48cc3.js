"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[3248],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>s});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),u=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(t),s=r,y=d["".concat(p,".").concat(s)]||d[s]||m[s]||l;return t?a.createElement(y,i(i({ref:n},c),{},{components:t})):a.createElement(y,i({ref:n},c))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(67294),r=t(34334);const l="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(83117),r=t(67294),l=t(34334),i=t(72389),o=t(67392),p=t(7094),u=t(12466);const c="tabList__CuJ",m="tabItem_LNqP";function d(e){var n;const{lazy:t,block:i,defaultValue:d,values:s,groupId:y,className:k}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=s??g.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),b=(0,o.l)(N,((e,n)=>e.value===n.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===d?d:d??(null==(n=g.find((e=>e.props.default)))?void 0:n.props.value)??g[0].props.value;if(null!==v&&!N.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:h}=(0,p.U)(),[T,E]=(0,r.useState)(v),O=[],{blockElementScrollPositionUntilNextRender:I}=(0,u.o5)();if(null!=y){const e=f[y];null!=e&&e!==T&&N.some((n=>n.value===e))&&E(e)}const D=e=>{const n=e.currentTarget,t=O.indexOf(n),a=N[t].value;a!==T&&(I(n),E(a),null!=y&&h(y,String(a)))},x=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=O.indexOf(e.currentTarget)+1;t=O[n]??O[0];break}case"ArrowLeft":{const n=O.indexOf(e.currentTarget)-1;t=O[n]??O[O.length-1];break}}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},k)},N.map((e=>{let{value:n,label:t,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:e=>O.push(e),onKeyDown:x,onFocus:D,onClick:D},i,{className:(0,l.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":T===n})}),t??n)}))),t?(0,r.cloneElement)(g.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==T})))))}function s(e){const n=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(n)},e))}},21113:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>k,frontMatter:()=>u,metadata:()=>m,toc:()=>s});var a=t(83117),r=(t(67294),t(3905)),l=t(65488),i=t(85162);const o={toc:[]};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u6700\u521d\uff0c\u4eba\u4eec\u76f4\u63a5\u7528\u4e1a\u52a1\u5b57\u6bb5\u4f5c\u4e3a\u8868\u7684\u4e3b\u952e\u3002\u8fd9\u662f\u6700\u76f4\u63a5\u6700\u5bb9\u6613\u4f7f\u7528\u7684\u65b9\u5f0f\uff0c\u4f46\u5b58\u5728\u4ee5\u4e0b\u95ee\u9898\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4e3b\u952e\u4e0d\u7a33\u5b9a"),(0,r.kt)("p",{parentName:"li"},"\u7531\u4e8e\u4e3b\u952e\u672c\u8eab\u662f\u4e1a\u52a1\u5b57\u6bb5\uff0c\u6240\u4ee5\u4f1a\u88ab\u4fee\u6539\uff0c\u8fd9\u5c31\u5bfc\u81f4\u4e3b\u952e\u4e0d\u7a33\u5b9a\u3002"),(0,r.kt)("p",{parentName:"li"},"\u867d\u7136\u6570\u636e\u5e93\u4e2d\u5f15\u7528\u5b83\u7684\u5916\u952e\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"on update cascade"),"\u6765\u4fdd\u6301\u4e00\u81f4\uff0c\n\u4f46\u662f\u5bf9\u4e8e\u6570\u636e\u5e93\u5916\u7684\u7cfb\u7edf\uff0c\u6bd4\u5982\u7f13\u5b58\uff0c\u4e3b\u952e\u4e0d\u7a33\u5b9a\u4f1a\u5bfc\u81f4\u5f88\u591a\u95ee\u9898\u3002"),(0,r.kt)("p",{parentName:"li"},"\u5373\u4f7f\u4ece\u6280\u672f\u5c42\u9762\u80fd\u62bd\u8c61\u51fa\u4e3b\u952e\u4e0d\u7a33\u5b9a\u95ee\u9898\u7684\u7edf\u4e00\u89e3\u51b3\u529e\u6cd5\uff0c\u4e5f\u4e0d\u63a8\u8350\uff0c\u56e0\u4e3a\u8fd9\u6837\u7cfb\u7edf\u96be\u4ee5\u7406\u89e3\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u591a\u8868\u8fde\u63a5\u6210\u672c\u9ad8"),(0,r.kt)("p",{parentName:"li"},"\u7531\u4e8e\u4e3b\u952e\u672c\u8eab\u662f\u4e1a\u52a1\u5b57\u6bb5\uff0c\u4e3b\u952e\u7684\u7c7b\u578b\u5f88\u53ef\u80fd\u4e0d\u662f\u6570\u5b57\u7c7b\u578b\uff0c\u800c\u662f\u76f8\u5bf9\u8f83\u957f\u7684\u5b57\u7b26\u4e32\u7c7b\u578b\uff0c\n\u800c\u4e14\u8fd8\u53ef\u80fd\u662f\u591a\u4e2a\u5217\u7ec4\u5408\u800c\u6210\u7684\u8054\u5408\u4e3b\u952e\uff0c\u8fd9\u4f1a\u5bfc\u81f4\u591a\u8868\u94fe\u63a5\u6210\u672c\u9ad8\u3002"))),(0,r.kt)("p",null,"\u4e3a\u4e86\u89e3\u51b3\u4ee5\u4e0a\u95ee\u9898\uff0c\u4eba\u4eec\u5b66\u4f1a\u4f7f\u7528\u4f7f\u7528\u6ca1\u6709\u4e1a\u52a1\u610f\u4e49\u7684\u6570\u636e\u4f5c\u4e3a\u4e3b\u952e\uff0c\u6bd4\u5982"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6570\u636e\u5e93\u81ea\u52a8\u7f16\u53f7"),(0,r.kt)("li",{parentName:"ul"},"\u6570\u636e\u5e93\u5e8f\u5217\u503c"),(0,r.kt)("li",{parentName:"ul"},"UUID"),(0,r.kt)("li",{parentName:"ul"},"\u96ea\u82b1ID")),(0,r.kt)("p",null,"\u4e3a\u4e86\u8ba9\u4fdd\u5b58\u6307\u4ee4\u652f\u6301\u5e42\u7b49\u6027\u4fdd\u5b58\uff0cJimmer\u5f15\u5165\u4e86\u4e24\u4e2a\u6982\u5ff5\uff1aId\u548cKey"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"@Id: \u4e3b\u952e")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"@Key: \u4e1a\u52a1\u6027\u4e3b\u952e"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5982\u679cId\u672c\u8eab\u5c31\u662f\u4e1a\u52a1\u5c5e\u6027\uff08\u4e0d\u63a8\u8350\uff09\uff0c\u65e0\u9700\u6307\u5b9aKey\uff0c\u56e0\u4e3aId\u672c\u8eab\u5df2\u7ecf\u8868\u793a\u4e86\u4e1a\u52a1\u5c42\u9762\u7684\u552f\u4e00\u7ea6\u675f\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5982\u679cId\u6ca1\u6709\u4e1a\u52a1\u610f\u4e49\uff08\u63a8\u8350\uff09\uff0c\u90a3\u4e48Key\u8868\u793a\u4e1a\u52a1\u5c42\u9762\u7684\u552f\u4e00\u7ea6\u675f\u662f\u4ec0\u4e48\u3002"))))),(0,r.kt)("p",null,"\u8bf7\u770b\u4e0b\u7684\u4f8b\u5b50"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Entity\npublic interface TreeNode {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    long id();\n\n    // highlight-next-line\n    @Key\n    String name();\n\n    // highlight-next-line\n    @Key\n    @ManyToOne\n    @Nullable\n    TreeNode parent();\n\n    @OneToMany(mappedBy = "parent")\n    List<TreeNode> childNodes();\n}\n'))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Entity\ninterface TreeNode {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    val id: Long\n\n    // highlight-next-line\n    @Key\n    val name: String\n\n    // highlight-next-line\n    @Key\n    @ManyToOne\n    val parent: TreeNode?\n\n    @OneToMany(mappedBy = "parent")\n    val childNodes: List<TreeNode>\n}\n')))),(0,r.kt)("p",null,"\u8fd9\u91cc\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"TreeNode"),"\u5b9e\u4f53\u7684Id\u91c7\u7528\u81ea\u52a8\u7f16\u53f7\uff0c\u5e76\u6ca1\u6709\u4e1a\u52a1\u610f\u4e49\u3002\u6240\u4ee5\uff0c\u4e3a\u4e86\u66f4\u597d\u5730\u914d\u5408\u4fdd\u5b58\u6307\u4ee4\uff0c\n\u8fd9\u91cc\u6307\u5b9a\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"key"),"\uff0c\u7531\u4e24\u4e2a\u5c5e\u6027\u6784\u6210\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"name"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"parent"),"\u3002"),(0,r.kt)("p",null,"\u5bf9\u5e94\u7684DDL\u662f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"create table TREE_NODE(\n    ID bigint not null,\n    NAME varchar(20) not null,\n    PARENT_ID bigint\n);\n\nalter table TREE_NODE\n    add constraint PK_TREE_NODE\n        primary key(ID);\n\nalter table TREE_NODE\n    add constraint UQ_TREE_NODE\n        /* highlight-next-line */\n        unique(NAME, PARENT_ID);\n")),(0,r.kt)("p",null,"\u5b9e\u4f53\u7c7b\u578b\u7684\u5c5e\u6027",(0,r.kt)("inlineCode",{parentName:"p"},"name"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"parent"),"\u88ab@Key\u4fee\u9970\uff0c\u5bf9\u5e94\u4e8e\u6570\u636e\u5e93\u4e2d",(0,r.kt)("inlineCode",{parentName:"p"},"NAME"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"PARENT_ID"),"\u5217\u7ec4\u6210\u7684UNIQUE\u7ea6\u675f ",(0,r.kt)("em",{parentName:"p"},"\uff08\u6216UNIQUE INDEX\uff09"),"\u3002"),(0,r.kt)("p",null,"\u8fd9\u4e2a\u552f\u4e00\u6027\u7ea6\u675f\u53ef\u4ee5\u7528\u8ba1\u7b97\u673a\u6587\u4ef6\u7cfb\u7edf\u505a\u4e3a\u7c7b\u6bd4\u3002\u6587\u4ef6\u7cfb\u7edf\u5141\u8bb8\u540c\u540d\u76ee\u5f55\u6216\u6587\u4ef6\uff0c\u4f46\u5982\u679c\u9650\u5b9a\u7236\u76ee\u5f55\uff0c\u5219\u4e0d\u5141\u8bb8\u540c\u540d\u3002"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u901a\u8fc7\u8fd9\u4e2a\u4f8b\u5b50\uff0c\u6211\u4eec\u770b\u5230"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Key\u53ef\u4ee5\u7531\u591a\u4e2a\u5c5e\u6027\u7ec4\u6210")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5916\u952e\u53ef\u4ee5\u4f5c\u4e3aKey\u7684\u4e00\u90e8\u5206")))),(0,r.kt)("p",null,"\u8ba9\u6211\u4eec\u518d\u6765\u770b\u53e6\u5916\u4e00\u4e2a\u4f8b\u5b50\uff0c\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u7ec4\u6210Key\u7684\u5c5e\u6027\u5168\u90e8\u662f\u57fa\u4e8e\u5916\u952e\u7684\u5c5e\u6027"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Entity\npublic interface OrderItem {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    long id();\n\n    // highlight-next-line\n    @Key\n    @ManyToOne\n    Order order();\n\n    // highlight-next-line\n    @Key\n    @ManyToOne\n    Product product();\n\n    int quantity();\n\n    // Snapshot of `product.price`\n    BigDecimal unitPrice();\n}\n"))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Entity\ninterface OrderItem {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    val id: Long\n\n    // highlight-next-line\n    @Key\n    @ManyToOne\n    val order: Order\n\n    // highlight-next-line\n    @Key\n    @ManyToOne\n    val product: Product\n\n    val quantity: Int\n\n    // Snapshot of `product.price`\n    val unitPrice: BigDecimal\n}\n")))))}p.isMDXComponent=!0;const u={sidebar_position:10,title:"Key"},c=void 0,m={unversionedId:"mapping/advanced/key",id:"mapping/advanced/key",title:"Key",description:"@org.babyfish.jimmer.sql.Key\u7528\u4e8e\u548c\u4fee\u6539\u7bc7/\u4fdd\u5b58\u6307\u4ee4\u914d\u5408",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/mapping/advanced/key.mdx",sourceDirName:"mapping/advanced",slug:"/mapping/advanced/key",permalink:"/jimmer/zh/docs/mapping/advanced/key",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/mapping/advanced/key.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Key"},sidebar:"tutorialSidebar",previous:{title:"\u8fdc\u7a0b\u5173\u8054",permalink:"/jimmer/zh/docs/mapping/advanced/remote"},next:{title:"OnDissociate",permalink:"/jimmer/zh/docs/mapping/advanced/on-dissociate"}},d={},s=[],y={toc:s};function k(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"@",(0,r.kt)("inlineCode",{parentName:"p"},"org.babyfish.jimmer.sql.Key"),"\u7528\u4e8e\u548c",(0,r.kt)("a",{parentName:"p",href:"../../mutation/save-command"},"\u4fee\u6539\u7bc7/\u4fdd\u5b58\u6307\u4ee4"),"\u914d\u5408")),(0,r.kt)(p,{mdxType:"Key"}),(0,r.kt)("p",null,"\u672c\u6587\u53ea\u4ecb\u7ecdKey\u7684\u914d\u7f6e\uff0c\u81f3\u4e8e\u5982\u4f55\u8fdb\u4e00\u6b65\u4f7f\u7528\uff0c\u8bf7\u53c2\u89c1",(0,r.kt)("a",{parentName:"p",href:"../../mutation/save-command"},"\u4fdd\u5b58\u6307\u4ee4"),"\u3002"))}k.isMDXComponent=!0}}]);