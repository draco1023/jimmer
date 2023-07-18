"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[2897],{35097:function(e,n,t){t.d(n,{V:function(){return l}});var a=t(34867);function l(e){return(0,a.Z)("MuiDivider",e)}const i=(0,t(1588).Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);n.Z=i},47167:function(e,n,t){const a=t(67294).createContext();n.Z=a},15704:function(e,n,t){function a({props:e,states:n,muiFormControl:t}){return n.reduce(((n,a)=>(n[a]=e[a],t&&void 0===e[a]&&(n[a]=t[a]),n)),{})}t.d(n,{Z:function(){return a}})},74423:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(67294),l=t(47167);function i(){return a.useContext(l.Z)}},85162:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(67294),l=t(34334),i="tabItem_Ymn6";function o(e){var n=e.children,t=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(i,o),hidden:t},n)}},65488:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(83117),l=t(67294),i=t(34334),o=t(72389),r=t(67392),u=t(7094),s=t(12466),p="tabList__CuJ",d="tabItem_LNqP";function m(e){var n,t,o=e.lazy,m=e.block,c=e.defaultValue,k=e.values,h=e.groupId,g=e.className,v=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=k?k:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),b=(0,r.l)(N,(function(e,n){return e.value===n.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===c?c:null!=(n=null!=c?c:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:v[0].props.value;if(null!==f&&!N.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+N.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var I=(0,u.U)(),y=I.tabGroupChoices,C=I.setTabGroupChoices,w=(0,l.useState)(f),Z=w[0],T=w[1],x=[],B=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var E=y[h];null!=E&&E!==Z&&N.some((function(e){return e.value===E}))&&T(E)}var L=function(e){var n=e.currentTarget,t=x.indexOf(n),a=N[t].value;a!==Z&&(B(n),T(a),null!=h&&C(h,String(a)))},S=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a,l=x.indexOf(e.currentTarget)+1;t=null!=(a=x[l])?a:x[0];break;case"ArrowLeft":var i,o=x.indexOf(e.currentTarget)-1;t=null!=(i=x[o])?i:x[x.length-1]}null==(n=t)||n.focus()};return l.createElement("div",{className:(0,i.Z)("tabs-container",p)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":m},g)},N.map((function(e){var n=e.value,t=e.label,o=e.attributes;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:Z===n?0:-1,"aria-selected":Z===n,key:n,ref:function(e){return x.push(e)},onKeyDown:S,onFocus:L,onClick:L},o,{className:(0,i.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":Z===n})}),null!=t?t:n)}))),o?(0,l.cloneElement)(v.filter((function(e){return e.props.value===Z}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},v.map((function(e,n){return(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==Z})}))))}function c(e){var n=(0,o.Z)();return l.createElement(m,(0,a.Z)({key:String(n)},e))}},16395:function(e,n,t){t.d(n,{k:function(){return S}});var a=t(52263),l=t(55113),i=t(80102),o=t(83117),r=t(67294),u=t(95408),s=t(98700),p=t(39707),d=t(59766),m=t(11496),c=t(27623),k=t(85893);const h=["component","direction","spacing","divider","children"];function g(e,n){const t=r.Children.toArray(e).filter(Boolean);return t.reduce(((e,a,l)=>(e.push(a),l<t.length-1&&e.push(r.cloneElement(n,{key:`separator-${l}`})),e)),[])}const v=(0,m.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,n)=>[n.root]})((({ownerState:e,theme:n})=>{let t=(0,o.Z)({display:"flex"},(0,u.k9)({theme:n},(0,u.P$)({values:e.direction,breakpoints:n.breakpoints.values}),(e=>({flexDirection:e}))));if(e.spacing){const a=(0,s.hB)(n),l=Object.keys(n.breakpoints.values).reduce(((n,t)=>(("object"==typeof e.spacing&&null!=e.spacing[t]||"object"==typeof e.direction&&null!=e.direction[t])&&(n[t]=!0),n)),{}),i=(0,u.P$)({values:e.direction,base:l}),o=(0,u.P$)({values:e.spacing,base:l}),r=(n,t)=>{return{"& > :not(style) + :not(style)":{margin:0,[`margin${l=t?i[t]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[l]}`]:(0,s.NA)(a,n)}};var l};t=(0,d.Z)(t,(0,u.k9)({theme:n},o,r))}return t})),N=r.forwardRef((function(e,n){const t=(0,c.Z)({props:e,name:"MuiStack"}),a=(0,p.Z)(t),{component:l="div",direction:r="column",spacing:u=0,divider:s,children:d}=a,m=(0,i.Z)(a,h),N={direction:r,spacing:u};return(0,k.jsx)(v,(0,o.Z)({as:l,ownerState:N,ref:n},m,{children:s?g(d,s):d}))}));var b=N,f=t(61903),I=t(94054),y=t(33841),C=t(43246),w=t(23599),Z=t(11057),T=t(50657),x=t(37645),B=t(6514),E=t(58951),L=t(31425),S=(0,r.memo)((function(){var e=(0,r.useState)((function(){return{name:"Learning GraphQL",edition:1,price:45,storeId:1,authorIds:[1,2]}})),n=e[0],t=e[1],i=(0,r.useCallback)((function(e){t((function(n){return Object.assign({},n,{name:e.target.value})}))}),[]),o=(0,r.useCallback)((function(e){t((function(n){return Object.assign({},n,{edition:e.target.valueAsNumber})}))}),[]),u=(0,r.useCallback)((function(e){t((function(n){return Object.assign({},n,{price:e.target.valueAsNumber})}))}),[]),s=(0,r.useCallback)((function(e){var n=void 0,a=e.target.value;-1===(n="string"==typeof a?parseInt(a):a)&&(n=void 0),t((function(e){return Object.assign({},e,{storeId:n})}))}),[]),p=(0,r.useCallback)((function(e){var n=[];console.log(e.target.value);var a=e.target.value;n="string"==typeof a?a.split(",").map((function(e){return parseInt(e)})):a,t((function(e){return Object.assign({},e,{authorIds:n})}))}),[]),d=(0,a.Z)().i18n,m=(0,r.useMemo)((function(){return"zh"==d.currentLocale||"zh_cn"==d.currentLocale||"zh_CN"==d.currentLocale}),[d.currentLocale]),c=(0,r.useState)(!1),k=c[0],h=c[1],g=(0,r.useCallback)((function(){h(!0)}),[]),v=(0,r.useCallback)((function(){h(!1)}),[]);return r.createElement(l.Z,{elevation:3,style:{padding:"1.5rem",width:500}},r.createElement(b,{spacing:2},r.createElement("h1",null,"Book Form"),r.createElement(f.Z,{label:"Name",value:n.name,onChange:i,error:""===n.name,helperText:""===n.name?"Name is required":""}),r.createElement(f.Z,{label:"Edition",type:"number",value:n.edition,onChange:o}),r.createElement(f.Z,{label:"Price",type:"number",value:n.price,onChange:u}),r.createElement(I.Z,{fullWidth:!0},r.createElement(y.Z,{id:"store-select-label"},"Store"),r.createElement(C.Z,{labelId:"store-select-label",label:"Authors",value:n.storeId,onChange:s},r.createElement(w.Z,{value:-1},"--NONE--"),r.createElement(w.Z,{value:1},"O'REILLY"),r.createElement(w.Z,{value:2},"MANNING"))),r.createElement(I.Z,{fullWidth:!0},r.createElement(y.Z,{id:"author-multi-select-label"},"Authors"),r.createElement(C.Z,{multiple:!0,labelId:"author-multi-select-label",label:"Authors",value:n.authorIds,onChange:p},r.createElement(w.Z,{value:1},"Eve Procello"),r.createElement(w.Z,{value:2},"Alex Banks"),r.createElement(w.Z,{value:3},"Dan Vanderkam"),r.createElement(w.Z,{value:4},"Boris Cherny"),r.createElement(w.Z,{value:5},"Samer Buna"))),r.createElement(I.Z,null,r.createElement(Z.Z,{onClick:g,variant:"contained"},"\u63d0\u4ea4"))),r.createElement(T.Z,{open:k,onClose:v},r.createElement(x.Z,null,m?"\u4fe1\u606f":"Info"),r.createElement(B.Z,null,r.createElement(E.Z,null,m?"\u4ec5\u4f5c\u793a\u8303\uff0c\u65e0\u4efb\u4f55\u6548\u679c":"For demonstration only, without any effect")),r.createElement(L.Z,null,r.createElement(Z.Z,{onClick:v},"\u5173\u95ed"))))}))},32598:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return k}});var a=t(83117),l=t(80102),i=(t(67294),t(3905)),o=t(65488),r=t(85162),u=t(16395),s=["components"],p={sidebar_position:1,title:"IdView"},d=void 0,m={unversionedId:"team-work/mapping/advanced/view/id-view",id:"team-work/mapping/advanced/view/id-view",title:"IdView",description:"\u57fa\u672c\u6982\u5ff5\uff1a\u77ed\u5173\u8054",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/team-work/mapping/advanced/view/id-view.mdx",sourceDirName:"team-work/mapping/advanced/view",slug:"/team-work/mapping/advanced/view/id-view",permalink:"/jimmer/zh/docs/team-work/mapping/advanced/view/id-view",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/team-work/mapping/advanced/view/id-view.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"IdView"},sidebar:"tutorialSidebar",previous:{title:"\u89c6\u56fe\u5c5e\u6027",permalink:"/jimmer/zh/docs/team-work/mapping/advanced/view/"},next:{title:"ManyToManyView",permalink:"/jimmer/zh/docs/team-work/mapping/advanced/view/many-to-many-view"}},c={},k=[{value:"\u57fa\u672c\u6982\u5ff5\uff1a\u77ed\u5173\u8054",id:"\u57fa\u672c\u6982\u5ff5\u77ed\u5173\u8054",level:2},{value:"Microsoft\u7684\u89e3\u51b3\u65b9\u6848",id:"microsoft\u7684\u89e3\u51b3\u65b9\u6848",level:2},{value:"IdView\u5c5e\u6027",id:"idview\u5c5e\u6027",level:2},{value:"\u58f0\u660e\u89c6\u56fe\u5c5e\u6027",id:"\u58f0\u660e\u89c6\u56fe\u5c5e\u6027",level:3},{value:"\u89c6\u56fe\u7684\u672c\u8d28",id:"\u89c6\u56fe\u7684\u672c\u8d28",level:3},{value:"\u6293\u53d6IdView\u5c5e\u6027",id:"\u6293\u53d6idview\u5c5e\u6027",level:2}],h={toc:k};function g(e){var n=e.components,t=(0,l.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u57fa\u672c\u6982\u5ff5\u77ed\u5173\u8054"},"\u57fa\u672c\u6982\u5ff5\uff1a\u77ed\u5173\u8054"),(0,i.kt)("p",null,"\u5728\u4ecb\u7ecdId\u89c6\u56fe\u4e4b\u524d\uff0c\u6211\u4eec\u8981\u5148\u4ecb\u7ecd\u4e00\u4e2a\u6982\u5ff5\uff1a\u77ed\u5173\u8054\u3002"),(0,i.kt)("p",null,"\u5728\u4ecb\u7ecd\u77ed\u5173\u8054\u4e4b\u524d\uff0c\u6211\u4eec\u5148\u770b\u4e00\u770b\u666e\u901a\u5173\u8054"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Book book = bookRepository.findNullable(\n    1L,\n    BookFetcher.$\n        .allScalarFields()\n        // highlight-next-line\n        .store(\n            BookStoreFetcher.$\n                .allScalarFields()\n        )\n        // highlight-next-line\n        .authors(\n            AuthorFetcher.$\n                .firstName()\n                .lastName()\n        )\n);\nSystem.out.println(book);\n"))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"val book = bookRepository.findNullable(\n    1L,\n    newFetcher(Book::class).by {\n        allScalarFields()\n        // highlight-next-line\n        store {\n            allScalarFields()\n        }\n        // highlight-next-line\n        authors {\n            firstName()\n            lastName()\n        }\n    }\n);\nSystem.out.println(book);\n")))),(0,i.kt)("p",null,"\u4ee3\u7801\u4e2d"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u5173\u8054\u5c5e\u6027",(0,i.kt)("inlineCode",{parentName:"li"},"Book.store"),"\u5173\u8054\u6293\u53d6\u5173\u8054\u5bf9\u8c61",(0,i.kt)("inlineCode",{parentName:"li"},"BookStore"),"\uff0c\u5e76\u671f\u671b\u83b7\u5f97\u5173\u8054\u5bf9\u8c61\u7684\u6240\u6709\u975e\u5173\u8054\u5c5e\u6027"),(0,i.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u5173\u8054\u5c5e\u6027",(0,i.kt)("inlineCode",{parentName:"li"},"Book.authors"),"\u5173\u8054\u6293\u53d6\u5173\u8054\u5bf9\u8c61",(0,i.kt)("inlineCode",{parentName:"li"},"Author"),"\uff0c\u5e76\u671f\u671b\u83b7\u5f97\u5173\u8054\u5bf9\u8c61\u7684\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"id"),"(\u9690\u542b+\u5f3a\u5236)\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"firstName"),"\u548c",(0,i.kt)("inlineCode",{parentName:"li"},"lastName"))),(0,i.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\u4e3a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id":1,\n    "name":"Learning GraphQL",\n    "edition":1,\n    "price":45,\n    // highlight-next-line\n    "store":{\n        "id":1,\n        "name":"O\'REILLY",\n        "website":null\n    },\n    // highlight-next-line\n    "authors":[\n        {\n            "id":2,\n            "firstName":"Alex",\n            "lastName":"Banks"\n        },\n        {\n            "id":1,\n            "firstName":"Eve",\n            "lastName":"Procello"\n        }\n    ]\n}\n')),(0,i.kt)("p",null,"\u8fd9\u91cc\uff0c\u805a\u5408\u6839\u5bf9\u8c61",(0,i.kt)("inlineCode",{parentName:"p"},"Book"),"\u4e0a\u7684\u5173\u8054\u5bf9\u8c61\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"BookStore"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"Author"),"\uff0c\u5177\u5907\u9664\u4e86id\u4ee5\u5916\u7684\u5176\u4ed6\u5c5e\u6027\uff0c\u5177\u6709\u76f8\u5bf9\u5b8c\u5584\u7684\u4fe1\u606f\u3002"),(0,i.kt)("p",null,"\u66f4\u91cd\u8981\u7684\u662f\uff0c\u975e",(0,i.kt)("inlineCode",{parentName:"p"},"id"),"\u5c5e\u6027\u5f53\u7136\u4e5f\u5305\u62ec\u5173\u8054\u5c5e\u6027\uff0c\u6240\u4ee5\u6b64\u6570\u636e\u7ed3\u6784\u53ef\u4ee5\u591a\u5c42\u5d4c\u5957\u751a\u81f3\u9012\u5f52\uff0c\u8fd9\u79cd\u5173\u8054\u4e5f\u53ef\u4ee5\u53eb\u505a\u201c\u957f\u5173\u8054\u201d\u3002"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u7136\u800c\uff0c\u5e76\u975e\u6240\u6709\u65f6\u5019\u90fd\u9700\u8981\u5c42\u6b21\u5f88\u6df1\u7684\u6570\u636e\u7ed3\u6784\u3002\u5b9e\u9645\u9879\u76ee\u4e2d\uff0c\u6709\u65f6\u9700\u8981\u7684\u53ea\u662f\u4e00\u79cd\u975e\u5e38\u7b80\u5355\u7684\u754c\u9762\uff0c\u5982\u4e0b")),(0,i.kt)(u.k,{mdxType:"ShortAssociation"}),(0,i.kt)("p",null,"\u5728\u8fd9\u4e2a\u754c\u9762\u4e2d"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Book.store"),"\u662f\u591a\u5bf9\u4e00\u5173\u8054\uff0c\u5728\u754c\u9762\u4e0a\u4f53\u73b0\u4e3a\u5355\u9009\u4e0b\u62c9\u6846"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Book.authors"),"\u662f\u591a\u5bf9\u591a\u5173\u8054\uff0c\u5728\u754c\u9762\u4e0a\u4f53\u73b0\u4e3a\u591a\u9009\u4e0b\u62c9\u6846")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"\u5f53\u7136\uff0c\u5982\u679c\u5019\u9009\u6570\u636e\u5f88\u591a\uff0c\u4e0b\u62c9\u5217\u8868\u4e0d\u518d\u662f\u5408\u7406\u7684\u8bbe\u8ba1\uff0c\u8fd9\u65f6\uff0c\u6539\u8fdb\u4e3a\u5f39\u51fa\u5bf9\u8bdd\u6846\u5e76\u5728\u5bf9\u8bdd\u6846\u4e2d\u4f7f\u7528\u5206\u9875\u3002\u4f46\uff0c\u8fd9\u4e9bUI\u7ec6\u8282\u4e0d\u91cd\u8981\uff0c\u548c\u73b0\u6709\u8bdd\u9898\u65e0\u5173\u3002"))),(0,i.kt)("p",null,"\u5f88\u660e\u663e\uff0c\u8fd9\u65f6\uff0c\u7528\u6237\u53ea\u5173\u6ce8\u5173\u8054\u5bf9\u8c61\u5bf9\u8c61\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"id"),"\uff0c\u5bf9\u5173\u8054\u5bf9\u8c61\u7684\u5176\u4ed6\u5c5e\u6027\u6ca1\u6709\u5174\u8da3\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u5373, \u5e0c\u671b\u5173\u8054\u5bf9\u8c61\u53ea\u6709id\u5c5e\u6027")),(0,i.kt)("p",null,"\u4e3a\u4e86\u8ba9\u805a\u5408\u6839\u6302\u4e0a\u4e00\u4e9b\u53ea\u6709id\u7684\u7684\u5173\u8054\u5bf9\u8c61\uff0c\u6211\u4eec\u53ef\u4ee5\u6539\u8fdb\u4ee3\u7801\u3002"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Book book = bookRepository.findNullable(\n    1L,\n    BookFetcher.$\n        .allScalarFields()\n        // highlight-next-line\n        .store() //\u65e0\u53c2\u6570\u8868\u793aid only\n        // highlight-next-line\n        .authors() //\u65e0\u53c2\u6570\u8868\u793aid only\n);\nSystem.out.println(book);\n"))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"val book = bookRepository.findNullable(\n    1L,\n    newFetcher(Book::class).by {\n        allScalarFields()\n        // highlight-next-line\n        store() //\u65e0\u53c2\u6570\u8868\u793aid only\n        // highlight-next-line\n        authors() //\u65e0\u53c2\u6570\u8868\u793aid only\n    }\n);\nSystem.out.println(book);\n")))),(0,i.kt)("p",null,"\u8fd9\u6b21\uff0c\u6211\u4eec\u5f97\u5230\u4e86\u8fd9\u6837\u7684\u6570\u636e\u7ed3\u6784"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id":1,\n    "name":"Learning GraphQL",\n    "edition":1,\n    "price":45,\n    "store":{\n        // \u53ea\u6709id\u5c5e\u6027\n        // highlight-next-line\n        "id":1\n    },\n    "authors":[\n        {\n            // \u53ea\u6709id\u5c5e\u6027\n            // highlight-next-line\n            "id":1\n        },\n        {\n            // \u53ea\u6709id\u5c5e\u6027\n            // highlight-next-line\n            "id":2\n        }\n    ]\n}\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u5728Hibernate\u4e2d\uff0c\u8fd9\u79cd\u53ea\u6709id\u5c5e\u6027\u7684\u5bf9\u8c61\u88ab\u79f0\u4e3a\u4ee3\u7406\u5bf9\u8c61\u3002")),(0,i.kt)("p",null,"\u4f46\u662f\uff0c\u53ea\u6709id\u7684\u5173\u8054\u5bf9\u8c61\uff0c\u5e76\u6ca1\u6709\u5173\u8054id\u90a3\u4e48\u7b80\u5355\u3002\u8ba9\u540c\u6837\u7684\u7684\u6570\u636e\u7528\u5173\u8054id\u800c\u975e\u5173\u8054\u5bf9\u8c61\u6765\u8868\u8fbe\u7684\u6837\u5b50\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id":1,\n    "name":"Learning GraphQL",\n    "edition":1,\n    "price":45,\n    // highlight-next-line\n    "storeId": 1,\n    // highlight-next-line\n    "authorIds":[1, 2]\n}\n')),(0,i.kt)("p",null,"\u5f88\u660e\u663e\uff0c\u5bf9\u4e8e\u77ed\u5173\u8054\u4e1a\u52a1\u800c\u8a00\uff0c\u5173\u8054id\u6216\u5176\u96c6\u5408\u6bd4\u53ea\u6709id\u7684\u5173\u8054\u5bf9\u8c61\u6216\u5176\u96c6\u5408\u7b80\u5355\u3002"),(0,i.kt)("h2",{id:"microsoft\u7684\u89e3\u51b3\u65b9\u6848"},"Microsoft\u7684\u89e3\u51b3\u65b9\u6848"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ADO.NET EF Core"),"\u662fMicrosoft\u7684ORM\uff0c\u8ba9\u6211\u4eec\u6765\u770b\u770b\u5176\u8bbe\u8ba1: ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/ef/core/modeling/relationships?tabs=fluent-api%2Cfluent-api-simple-key%2Csimple-key"},"https://learn.microsoft.com/en-us/ef/core/modeling/relationships?tabs=fluent-api%2Cfluent-api-simple-key%2Csimple-key")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="\u8fd9\u6bb5C#\u4ee3\u7801\u4ece\u4e0a\u9762\u7684\u94fe\u63a5\u7684\u9875\u9762\u590d\u5236"',title:'"\u8fd9\u6bb5C#\u4ee3\u7801\u4ece\u4e0a\u9762\u7684\u94fe\u63a5\u7684\u9875\u9762\u590d\u5236"'},"public class Post\n{\n    public int PostId { get; set; }\n    public string Title { get; set; }\n    public string Content { get; set; }\n\n    // highlight-start\n    public int BlogId { get; set; }\n    public Blog Blog { get; set; }\n    // highlight-end\n}\n")),(0,i.kt)("p",null,"\u4e0d\u96be\u53d1\u73b0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5173\u8054\u5bf9\u8c61: ",(0,i.kt)("inlineCode",{parentName:"li"},"public Blog Blog { get; set; }")),(0,i.kt)("li",{parentName:"ul"},"\u5173\u8054id: ",(0,i.kt)("inlineCode",{parentName:"li"},"public int BlogId { get; set; }"))),(0,i.kt)("p",null,"\u4e8c\u8005\u5e76\u5b58\u3002"),(0,i.kt)("p",null,"Jimmer\u501f\u9274",(0,i.kt)("inlineCode",{parentName:"p"},"ADO.NET EF Core"),"\u8fd9\u79cd\u8bbe\u8ba1\uff0c\u63d0\u4f9b\u4e86",(0,i.kt)("inlineCode",{parentName:"p"},"@IdView"),"\u5c5e\u6027\u3002"),(0,i.kt)("h2",{id:"idview\u5c5e\u6027"},"IdView\u5c5e\u6027"),(0,i.kt)("h3",{id:"\u58f0\u660e\u89c6\u56fe\u5c5e\u6027"},"\u58f0\u660e\u89c6\u56fe\u5c5e\u6027"),(0,i.kt)("p",null,"IdView\u5c5e\u6027\u7531",(0,i.kt)("inlineCode",{parentName:"p"},"@org.babyfish.jimmer.sql.IdView"),"\u58f0\u660e"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},'package com.example.model;\n\nimport org.babyfish.jimmer.sql.*;\nimport org.jetbrains.annotations.Nullable;\n\n@Entity\npublic interface Book {\n\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n\n    @ManyToOne\n    @Nullable\n    BookStore store();\n\n    @ManyToMany\n    @JoinTable(\n        name = "BOOK_AUTHOR_MAPPING",\n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "AUTHOR_id"\n    )\n    List<Author> authors();\n\n    // highlight-next-line\n    @IdView // \u5173\u8054\u5bf9\u8c61store\u7684id\u7684\u89c6\u56fe\n    Long storeId();\n\n    // \u5173\u8054\u5bf9\u8c61\u96c6\u5408authors\u4e2d\u6240\u6709\u5bf9\u8c61\u7684id\u7684\u89c6\u56fe\n    // highlight-next-line\n    @IdView("authors") \n    List<Long> authorIds();\n}\n'))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},'package com.example.model\n\nimport org.babyfish.jimmer.sql.*\n\n@Entity\ninterface Book {\n\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n\n    @ManyToOne\n    val store: BookStore?\n\n    @ManyToMany\n    @JoinTable(\n        name = "BOOK_AUTHOR_MAPPING",\n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "AUTHOR_id"\n    )\n    val authors: List<Auhtor>\n\n    // highlight-next-line\n    @IdView // \u5173\u8054\u5bf9\u8c61store\u7684id\u7684\u89c6\u56fe\n    val storeId: Long?\n\n    // \u5173\u8054\u5bf9\u8c61\u96c6\u5408authors\u4e2d\u6240\u6709\u5bf9\u8c61\u7684id\u7684\u89c6\u56fe\n    // highlight-next-line\n    @IdView("authors") \n    val authorIds: List<Long>\n}\n')))),(0,i.kt)("p",null,"\u5176\u4e2d\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Book.storeId"),": \u5173\u8054",(0,i.kt)("inlineCode",{parentName:"p"},"Book.store"),"\u5bf9\u8c61\u7684id\u7684\u89c6\u56fe\u3002"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"storeId"),"\u672c\u8eab\u4ee5",(0,i.kt)("inlineCode",{parentName:"p"},"Id"),"\u7ed3\u5c3e\uff0c\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u53ef\u4ee5\u4e0d\u6307\u5b9a",(0,i.kt)("inlineCode",{parentName:"p"},"@IdView"),"\u6ce8\u89e3\u7684\u53c2\u6570\uff0cJimmer\u8ba4\u4e3a\u8be5\u89c6\u56fe\u5c5e\u6027\u7684\u539f\u59cb\u5173\u8054\u5c5e\u6027\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"Book.store"),"\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u539f\u59cb\u5173\u8054\u5c5e\u6027\u548cIdView\u5c5e\u6027\u7684\u53ef\u7a7a\u6027\u5fc5\u987b\u4e00\u81f4\u3002"),(0,i.kt)("p",{parentName:"li"},"  \u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"Book.store"),"\u5c5e\u6027\u53ef\u4ee5\u4e3anull\uff0c\u5373\uff0cJava\u7248\u672c\u88ab",(0,i.kt)("inlineCode",{parentName:"p"},"@Nullable\u4fee\u9970"),"\uff0cKotlin\u7248\u672c\u8fd4\u56de",(0,i.kt)("inlineCode",{parentName:"p"},"BookStore?"),"\u3002"),(0,i.kt)("p",{parentName:"li"},"  \u56e0\u6b64\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"Book.storeId"),"\u4e5f\u5fc5\u987b\u53ef\u4ee5\u4e3anull\uff0c\u5373\uff0cJava\u7248\u672c\u8fd4\u56de\u5fc5\u987b\u8fd4\u56de",(0,i.kt)("inlineCode",{parentName:"p"},"Long"),"\u800c\u975e",(0,i.kt)("inlineCode",{parentName:"p"},"long"),"\uff0cKotlin\u7248\u672c\u5fc5\u987b\u8fd4\u56de",(0,i.kt)("inlineCode",{parentName:"p"},"Long?"),"\u800c\u975e",(0,i.kt)("inlineCode",{parentName:"p"},"Long"),"\u3002"),(0,i.kt)("p",{parentName:"li"},"  \u5426\u5219\uff0c\u4f1a\u5bfc\u81f4\u7f16\u8bd1\u9519\u8bef\u3002")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Book.authorIds"),": \u5173\u8054",(0,i.kt)("inlineCode",{parentName:"p"},"Book.authors"),"\u5bf9\u8c61\u96c6\u5408\u4e2d\uff0c\u6240\u6709Auhtor\u5bf9\u8c61\u7684id\u5f62\u6210\u7684\u89c6\u56fe\u3002"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"authorIds"),"\u672c\u8eab\u4e0d\u4ee5",(0,i.kt)("inlineCode",{parentName:"p"},"Id"),"\u7ed3\u5c3e\uff0c\u5fc5\u987b\u6307\u5b9a",(0,i.kt)("inlineCode",{parentName:"p"},"@IdView"),"\u6ce8\u89e3\u7684\u53c2\u6570\uff0c\u660e\u786e\u8868\u793a\u5176\u539f\u59cb\u5173\u8054\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"Book.authors"),"\u3002"),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u9700\u8981\u8fd9\u6837\u505a\u7684\u539f\u56e0\u662f\u82f1\u6587\u5b58\u5728\u4e0d\u89c4\u5219\u540d\u8bcd\u590d\u6570\u53d8\u5f62\u7684\u95ee\u9898\u3002")))),(0,i.kt)("h3",{id:"\u89c6\u56fe\u7684\u672c\u8d28"},"\u89c6\u56fe\u7684\u672c\u8d28"),(0,i.kt)("p",null,"\u4e0a\u6587\u53cd\u590d\u5f3a\u8c03",(0,i.kt)("inlineCode",{parentName:"p"},"\u89c6\u56fe"),"\u4e8c\u5b57\u662f\u6709\u539f\u56e0\u7684\u3002IdView\u5c5e\u6027\u5e76\u6ca1\u6709\u81ea\u5df1\u7684\u6570\u636e\uff0c\u5b83\u53ea\u662f\u539f\u59cb\u5173\u8054\u5c5e\u6027\u7684\u89c6\u56fe\u3002"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"IdView\u5c5e\u6027\u548c\u539f\u59cb\u5173\u8054\u5c5e\u6027\u662f\u8054\u52a8\u7684\uff0c\u8bbe\u7f6e\u4e00\u4e2a\uff0c\u5fc5\u7136\u5f71\u54cd\u53e6\u5916\u4e00\u4e2a\u3002")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u8bbe\u7f6e\u89c6\u56fe\u5c5e\u6027\uff0c\u5f71\u54cd\u539f\u59cb\u5c5e\u6027:"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// \u8bbe\u7f6e\u89c6\u56fe\u5c5e\u6027\nBook book = BookDraft.$.produce(draft -> {\n    draft.setStoreId(10L);\n    draft.setAuthorIds(Arrays.asList(100L, 101L));\n});\n\n// \u6253\u5370\u539f\u59cb\u5c5e\u6027\nSystem.out.println("Store: " + book.store());\nSystem.out.println("Authors:" + book.authors());\n'))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'// \u8bbe\u7f6e\u89c6\u56fe\u5c5e\u6027\nval book = new(Book::class).by {\n    storeId = 10L\n    authorIds = listOf(100L, 101L)\n}\n\n// \u6253\u5370\u539f\u59cb\u5c5e\u6027\nprintln("Store: $book.store}")\nprintln("Authors: ${book.authors}")\n')))),(0,i.kt)("p",{parentName:"li"},"\u6253\u5370\u7ed3\u679c\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'Store: {"id":10}\nAuthors: [{"id":100},{"id":101}]\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u8bbe\u7f6e\u539f\u59cb\u5c5e\u6027\uff0c\u5f71\u54cd\u89c6\u56fe\u5c5e\u6027:"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// \u8bbe\u7f6e\u539f\u59cb\u5c5e\u6027\nBook book = BookDraft.$.produce(draft -> {\n    draft.applyStore(store -> {\n        store.setId(10L).storeName("TURING")\n    });\n    draft.addIntoAuthors(author -> {\n        author.setId(101L);\n        author.setFirstName("Fabrice");\n        author.setLastName("Marguerie");\n    });\n    draft.addIntoAuthors(author -> {\n        author.setId(101L);\n        author.setFirstName("Steve");\n        author.setLastName("Eichert"); \n    });\n});\n\n// \u6253\u5370\u89c6\u56fe\u5c5e\u6027\nSystem.out.println("StoreId: " + book.storeId());\nSystem.out.println("AuthorIds:" + book.authorIds());\n'))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'// \u8bbe\u7f6e\u539f\u59cb\u5c5e\u6027\nval book = new(Book::class).by {\n    store().apply {\n        id = 10L\n        name = "TURING"\n    }\n    authors().addBy {\n        id = 101L;\n        firstName = "Fabrice"\n        lastName = "Marguerie"\n    }\n    authors().addBy {\n        id = 101L\n        firstName = "Steve"\n        lastName = "Eichert" \n    }\n}\n\n// \u6253\u5370\u89c6\u56fe\u5c5e\u6027\nprintln("Store: $book.storeId}")\nprintln("Authors: ${book.authorIds}")\n')))),(0,i.kt)("p",{parentName:"li"},"\u6253\u5370\u7ed3\u679c\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"StoreId: 10\nAuthorIds: [100, 101]\n")))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\u8fd9\u8bf4\u660e\u89c6\u56fe\u5c5e\u6027\u548c\u539f\u59cb\u5c5e\u6027\u662f\u9ad8\u5ea6\u7edf\u4e00\u7684\uff0cJimmer\u4ecd\u7136\u662f\u4ee5\u5173\u8054\u5bf9\u8c61\u4e3a\u6838\u5fc3\u7684ORM\u6846\u67b6\uff0c\u89c6\u56fe\u5c5e\u6027\u4ec5\u4ec5\u662f\u4e00\u79cd\u8bed\u6cd5\u7cd6\u3002"),(0,i.kt)("p",{parentName:"admonition"},"\u9664\u4e86\u63a5\u4e0b\u6765\u8981\u8bb2\u89e3\u7684\u89c6\u56fe\u5c5e\u6027\u5bf9\u5bf9\u8c61\u6293\u53d6\u5668\u7684\u5f71\u54cd\u5916\uff0c\u89c6\u56fe\u5c5e\u6027\u5bf9ORM\u548c\u6838\u5fc3\u903b\u8f91\u4e0d\u4f1a\u9020\u6210\u4efb\u4f55\u5f71\u54cd\u3002")),(0,i.kt)("h2",{id:"\u6293\u53d6idview\u5c5e\u6027"},"\u6293\u53d6IdView\u5c5e\u6027"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Book book = bookRepository.findNullable(\n    1L,\n    BookFetcher.$\n        .allScalarFields()\n        // highlight-next-line\n        .storeId()\n        // highlight-next-line\n        .authorIds()\n);\nSystem.out.println(book);\n"))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"val book = bookRepository.findNullable(\n    1L,\n    newFetcher(Book::class).by {\n        allScalarFields()\n        // highlight-next-line\n        storeId()\n        // highlight-next-line\n        authorIds()\n    }\n);\nSystem.out.println(book);\n")))),(0,i.kt)("p",null,"\u6253\u5370\u7ed3\u679c\u4e3a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id":1,\n    "name":"Learning GraphQL",\n    "edition":1,\n    "price":45,\n    // highlight-next-line\n    "storeId": 1,\n    // highlight-next-line\n    "authorIds":[1, 2]\n}\n')),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\u5bf9Jimmer\u52a8\u6001\u5b9e\u4f53\u800c\u8a00\uff0c\u539f\u59cb\u5173\u8054\u5c5e\u6027\u548c\u89c6\u56fe\u5c5e\u6027\u7edd\u5bf9\u4e00\u81f4\uff0c\u8981\u4e48\u90fd\u53ef\u4ee5\u8bbf\u95ee\uff0c\u8981\u4e48\u90fd\u7f3a\u5931\u3002"),(0,i.kt)("p",{parentName:"admonition"},"\u65e0\u8bba\u9009\u62e9\u6293\u53d6\u539f\u59cb\u5173\u8054\u5c5e\u6027\uff0c\u8fd8\u662f\u9009\u62e9\u6293\u53d6IdView\u89c6\u56fe\u5c5e\u6027\uff0c\u90fd\u4e0d\u4f1a\u5f71\u54cdJimmer\u5e95\u5c42\u6267\u884c\u903b\u8f91\uff0c\u5f53\u7136\u5305\u62ec\u6700\u7ec8\u751f\u6210\u7684SQL\u3002"),(0,i.kt)("p",{parentName:"admonition"},"\u4e0d\u540c\u9009\u62e9\u5e26\u6765\u5dee\u5f02\u53ea\u6709\u4e00\u4e2a\uff0c\u539f\u59cb\u5173\u8054\u5c5e\u6027\u548c\u89c6\u56fe\u5c5e\u6027\u7684Jackson\u53ef\u89c1\u6027\u6807\u5fd7\u4e0d\u540c\u3002"),(0,i.kt)("p",{parentName:"admonition"},"\u5373\uff0c\u4f7f\u7528Jackson\u5e8f\u5217\u5316\u65f6\uff0c\u88ab\u76f4\u63a5\u6293\u53d6\u7684\u5c5e\u6027\u4f1a\u88ab\u5e8f\u5217\u5316\uff0c\u672a\u88ab\u76f4\u63a5\u6293\u53d6\u7684\u5c5e\u6027\u4f1a\u88ab\u5ffd\u7565\u3002")))}g.isMDXComponent=!0}}]);