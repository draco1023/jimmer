"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[6777],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,b=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(b,o(o({ref:t},l),{},{components:n})):a.createElement(b,o({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},41321:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(83117),r=(n(67294),n(3905));const i={sidebar_position:3,title:"Association Mapping"},o=void 0,s={unversionedId:"mapping/base/association/index",id:"mapping/base/association/index",title:"Association Mapping",description:"Here, you will learn about the most important capability of ORM",source:"@site/docs/mapping/base/association/index.md",sourceDirName:"mapping/base/association",slug:"/mapping/base/association/",permalink:"/jimmer/docs/mapping/base/association/",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/mapping/base/association/index.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Association Mapping"},sidebar:"tutorialSidebar",previous:{title:"Simple Mapping",permalink:"/jimmer/docs/mapping/base/basic"},next:{title:"One To One",permalink:"/jimmer/docs/mapping/base/association/one-to-one"}},p={},c=[],l={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Here, you will learn about the most important capability of ORM: entity relationship mapping. You will learn about these annotations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"org.babyfish.jimmer.sql.OneToOne"),(0,r.kt)("li",{parentName:"ul"},"org.babyfish.jimmer.sql.ManyToOne"),(0,r.kt)("li",{parentName:"ul"},"org.babyfish.jimmer.sql.OneToMany"),(0,r.kt)("li",{parentName:"ul"},"org.babyfish.jimmer.sql.ManyToMany"),(0,r.kt)("li",{parentName:"ul"},"org.babyfish.jimmer.sql.JoinColumn"),(0,r.kt)("li",{parentName:"ul"},"org.babyfish.jimmer.sql.JoinTable")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"For associations, the type of the basic properties in the entity type should be the associated object, not the associated Id. "),(0,r.kt)("p",{parentName:"admonition"},"If you want to define associated Id properties, please"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"First complete the association mapping according to this chapter")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Then add associated Id properties according to ",(0,r.kt)("a",{parentName:"p",href:"../../advanced/view/id-view"},"IdView"))))))}m.isMDXComponent=!0}}]);