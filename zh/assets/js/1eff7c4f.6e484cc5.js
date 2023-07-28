"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[4771],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=l(r),m=i,f=s["".concat(p,".").concat(m)]||s[m]||d[m]||a;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=s;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},78666:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(83117),i=(r(67294),r(3905));const a={sidebar_position:4,title:"\u89c6\u56fe\u5c5e\u6027"},o=void 0,c={unversionedId:"mapping/advanced/view/index",id:"mapping/advanced/view/index",title:"\u89c6\u56fe\u5c5e\u6027",description:"\u89c6\u56fe\u5c5e\u6027\u5e76\u4e0d\u7ef4\u62a4\u81ea\u5df1\u7684\u6570\u636e\uff0c\u5b83\u53ea\u662f\u5176\u6240\u5c5e\u5b9e\u4f53\u7c7b\u578b\u53e6\u5916\u4e00\u4e2a\u5c5e\u6027 \uff08\u79f0\u4e3a\u539f\u59cb\u5c5e\u6027\uff09 \u7684\u53e6\u5916\u4e00\u79cd\u8868\u73b0\u5f62\u5f0f\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/mapping/advanced/view/index.md",sourceDirName:"mapping/advanced/view",slug:"/mapping/advanced/view/",permalink:"/jimmer/zh/docs/mapping/advanced/view/",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/mapping/advanced/view/index.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"\u89c6\u56fe\u5c5e\u6027"},sidebar:"tutorialSidebar",previous:{title:"\u903b\u8f91\u5220\u9664",permalink:"/jimmer/zh/docs/mapping/advanced/logical-deleted"},next:{title:"IdView",permalink:"/jimmer/zh/docs/mapping/advanced/view/id-view"}},p={},l=[],u={toc:l};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u89c6\u56fe\u5c5e\u6027\u5e76\u4e0d\u7ef4\u62a4\u81ea\u5df1\u7684\u6570\u636e\uff0c\u5b83\u53ea\u662f\u5176\u6240\u5c5e\u5b9e\u4f53\u7c7b\u578b\u53e6\u5916\u4e00\u4e2a\u5c5e\u6027 ",(0,i.kt)("em",{parentName:"p"},"\uff08\u79f0\u4e3a\u539f\u59cb\u5c5e\u6027\uff09")," \u7684\u53e6\u5916\u4e00\u79cd\u8868\u73b0\u5f62\u5f0f\u3002"),(0,i.kt)("p",null,"\u89c6\u56fe\u5c5e\u6027\u548c\u539f\u59cb\u5c5e\u6027\u5171\u4eab\u76f8\u540c\u7684\u5e95\u5c42\u6570\u636e\uff0c\u53ea\u662f\u8fd4\u56de\u7684\u6570\u636e\u683c\u5f0f\u548c\u539f\u59cb\u5c5e\u6027\u4e0d\u540c\u800c\u5df2\u3002"),(0,i.kt)("p",null,"\u5728\u8fd9\u91cc\uff0c\u4f60\u4f1a\u4e86\u89e3\u5230\u8fd9\u4e9b\u6ce8\u89e3"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"org.babyfish.jimmer.sql.IdView"),(0,i.kt)("li",{parentName:"ul"},"org.babyfish.jimmer.sql.ManyToView")))}d.isMDXComponent=!0}}]);