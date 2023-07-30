"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[3937],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>s});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),k=m(n),s=r,d=k["".concat(p,".").concat(s)]||k[s]||c[s]||i;return n?a.createElement(d,l(l({ref:t},u),{},{components:n})):a.createElement(d,l({ref:t},u))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},67498:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var a=n(83117),r=(n(67294),n(3905));const i={sidebar_position:1,title:"Nullity"},l=void 0,o={unversionedId:"mapping/base/nullity",id:"mapping/base/nullity",title:"Nullity",description:"\u5b9e\u4f53\u5bf9\u8c61\u5c5e\u6027\u662f\u5426\u8bb8\u4e3anull\u8fd9\u4e2a\u95ee\u9898\uff0cJimmer\u7528\u975e\u5e38\u4e25\u683c\u7684\u65b9\u5f0f\u5904\u7406\u3002\u5373\u4fbf\u5bf9Java\u5f00\u53d1\u8005\u800c\u8a00\uff0c\u4e5f\u8981\u6c42\u5982\u540ckotlin\u5f00\u53d1\u8005\u4e00\u6837\u8ba4\u77e5\u8003\u8651\u601d\u8003\u6bcf\u4e2a\u5c5e\u6027\u662f\u5426\u5141\u8bb8\u4e3anull\u3002",source:"@site/docs/mapping/base/nullity.mdx",sourceDirName:"mapping/base",slug:"/mapping/base/nullity",permalink:"/jimmer/docs/mapping/base/nullity",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/mapping/base/nullity.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Nullity"},sidebar:"tutorialSidebar",previous:{title:"Base mapping",permalink:"/jimmer/docs/mapping/base/"},next:{title:"Basic mapping",permalink:"/jimmer/docs/mapping/base/basic"}},p={},m=[{value:"\u5b9a\u4e49\u5c5e\u6027\u7684\u53ef\u7a7a\u6027",id:"\u5b9a\u4e49\u5c5e\u6027\u7684\u53ef\u7a7a\u6027",level:2},{value:"Kotlin",id:"kotlin",level:3},{value:"Java",id:"java",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}],u={toc:m};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5b9e\u4f53\u5bf9\u8c61\u5c5e\u6027\u662f\u5426\u8bb8\u4e3anull\u8fd9\u4e2a\u95ee\u9898\uff0cJimmer\u7528\u975e\u5e38\u4e25\u683c\u7684\u65b9\u5f0f\u5904\u7406\u3002\u5373\u4fbf\u5bf9Java\u5f00\u53d1\u8005\u800c\u8a00\uff0c\u4e5f\u8981\u6c42\u5982\u540ckotlin\u5f00\u53d1\u8005\u4e00\u6837\u8ba4\u77e5\u8003\u8651\u601d\u8003\u6bcf\u4e2a\u5c5e\u6027\u662f\u5426\u5141\u8bb8\u4e3anull\u3002"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u660e\u786e\u8bf4\u660e\u5b9e\u4f53\u5bf9\u8c61\u7684\u6bcf\u4e2a\u5c5e\u6027\u662f\u5426\u5141\u8bb8\u4e3anull\uff0c\u5bf9Jimmer\u800c\u8a00\u975e\u5e38\u91cd\u8981\uff0c\u5f88\u591a\u529f\u80fd\u90fd\u4f1a\u5176\u5f71\u54cd\u3002")),(0,r.kt)("h2",{id:"\u5b9a\u4e49\u5c5e\u6027\u7684\u53ef\u7a7a\u6027"},"\u5b9a\u4e49\u5c5e\u6027\u7684\u53ef\u7a7a\u6027"),(0,r.kt)("h3",{id:"kotlin"},"Kotlin"),(0,r.kt)("p",null,"Kotlin\u652f\u6301\u7a7a\u5b89\u5168\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"T")," \u8868\u793a\u975e\u7a7a\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"T?")," \u8868\u793a\u53ef\u4e3a\u7a7a\uff0c\u6309\u7167kotlin\u7684\u672c\u8eab\u7684\u65b9\u5f0f\u58f0\u660e\u5b9e\u4f53\u5c5e\u6027\u5373\u53ef\u3002"),(0,r.kt)("h3",{id:"java"},"Java"),(0,r.kt)("p",null,"Java\u4e0b\u5c5e\u6027\u662f\u5426\u4e3anull\uff0c\u9760\u4ee5\u4e0b\u89c4\u5219\u5236\u5b9a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u5c5e\u6027\u7c7b\u578b\u4e3aboolean\u3001char\u3001byte\u3001short\u3001int\u3001long\u3001float\u6216double\uff0c\u5219\u975enull")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u5c5e\u6027\u7c7b\u578b\u4e3aBoolean\u3001Character\u3001Byte\u3001Short\u3001Integer\u3001Long\u3001Float\u6216Double\uff0c\u5219\u53efnull")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5426\u5219"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u5c5e\u6027\u88ab\u4efb\u4f55\u7b80\u540d\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"Nullable"),"\u6216",(0,r.kt)("inlineCode",{parentName:"p"},"Null"),"\u7684annotation\u4fee\u9970\uff0c\u5219\u53efnull")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5426\u5219\uff0c\u9ed8\u8ba4\u975enull"))),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u63a8\u8350\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"org.jetbrains.annotations.Nullable"),"\uff0c\u56e0\u4e3a"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u867d\u7136\u53ef\u8bc6\u522b\u7684annotation\u4e0d\u53d7\u9650\u5236\uff0c\u4f46\u662f\u5982\u679c\u4f7f\u7528\u4e86\u672a\u88abJimmer annotation processor\u9ed8\u8ba4\u5305\u542b\u7684annotation\uff0c\u9700\u8981\u5c06\u5176\u4f9d\u8d56\u6dfb\u52a0\u5230annotation processor\u4e2d\uff0c\u8fd9\u7ec8\u5f52\u662f\u9ebb\u70e6\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"org.jetbrains.annotations.Nullable"),"\u53d7Intellij\u652f\u6301")))))),(0,r.kt)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u8fd9\u91cc\u4f1a\u51fa\u73b0\u4e00\u7cfb\u5217\u73b0\u5728\u6ca1\u8bb2\u89e3\u7684\u6982\u5ff5\uff0c\u5b83\u4eec\u90fd\u4f1a\u5728\u540e\u7eed\u6587\u6863\u4e2d\u8bb2\u89e3\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u8fd9\u91cc\u4ec5\u4ec5\u505a\u4e00\u4e2a\u6ce8\u610f\u4e8b\u9879\u7684\u7b80\u5355\u7f57\u5217\uff0c\u8bf7\u8bfb\u8005\u5148\u5ffd\u7565\u8fd9\u4e9b\u540d\u8bcd\uff0c\u672c\u6587\u4e5f\u4e0d\u63d0\u4f9b\u76f8\u5173\u4f8b\u5b50\uff0c\u8bfb\u8005\u4e86\u89e3\u6240\u6709\u540e\u7eed\u6982\u5ff5\u540e\u518d\u56de\u6765\u67e5\u770b\u3002")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"@Id"),"\u5c5e\u6027\u5fc5\u987b\u975enull"),(0,r.kt)("p",{parentName:"li"},"\u548cJPA/Hibernate\u6709\u5f88\u5927\u4e0d\u540c"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"JPA/Hibernate\u63a8\u8350\u5c06id\u5c5e\u6027\u58f0\u660e\u4e3a\u53ef\u7a7a\u7c7b\u578b\uff0c\u6bd4\u5982\uff0c\u5bf9Java\u800c\u8a00\uff0c\u5c31\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"Long"),"\u800c\u975e",(0,r.kt)("inlineCode",{parentName:"p"},"long"),"\uff0c\u8fd9\u6837\uff0c\u4fdd\u5b58\u6570\u636e\u65f6\u53ef\u8868\u8fbe\u6ca1\u6709id\u800c\u9700\u8981\u81ea\u52a8\u5206\u914d\u7684\u60c5\u51b5\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Jimmer\u5fc5\u987b\u5c06id\u5c5e\u6027\u58f0\u660e\u4e3a\u975e\u7a7a\u4e86\u7c7b\u578b\uff0c\u6bd4\u5982\uff0c\u5bf9Java\u800c\u8a00\uff0c\u5c31\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"long"),"\u800c\u975e",(0,r.kt)("inlineCode",{parentName:"p"},"Long"),"\u3002Jimmer\u9760\u5b9e\u4f53\u5bf9\u8c61\u672c\u8eab\u7684\u52a8\u6001\u6027\u6765\u8868\u8fbeid\u5c5e\u6027\u7684\u7f3a\u5931\u3002")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4e00\u5bf9\u591a\u548c\u591a\u5bf9\u591a\u5c5e\u6027\u5fc5\u987b\u975enull")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4e00\u5bf9\u4e00\u548c\u591a\u5bf9\u4e00\u5c5e\u6027\u5728\u4ee5\u4e0b\u60c5\u51b5\u4e0b\u5fc5\u987b\u53efnull"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u57fa\u4e8e\u4e2d\u95f4\u8868\u6620\u5c04\uff0c\u800c\u975e\u5916\u952e")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u57fa\u4e8e\u4f2a\u5916\u952e\uff0c\u800c\u975e\u771f\u5b9e\u5916\u952e"),(0,r.kt)("admonition",{parentName:"li",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u6240\u8c13\u201c\u4f2a\u5916\u952e\u201d\uff0c\u6307\u5728\u5f00\u53d1\u4eba\u5458\u610f\u8bc6\u4e2d\u662f\u5916\u952e\uff0c\u4f46\u662f\u6570\u636e\u5e93\u4e2d\u5e76\u6ca1\u6709\u5bf9\u5e94\u7684\u5916\u952e\u7ea6\u675f\u3002"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8fdc\u7a0b\u5173\u8054")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4f5c\u4e3a\u955c\u50cf\u7aef\u7684@OneToOne\u5173\u8054")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u76ee\u6807\u5bf9\u8c61\u88ab\u65bd\u52a0\u4e86\u5168\u5c40\u8fc7\u6ee4\u5668"))))))}c.isMDXComponent=!0}}]);