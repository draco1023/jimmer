"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[5769],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return d}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),u=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(p.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(t),d=a,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||o;return t?n.createElement(f,i(i({ref:r},c),{},{components:t})):n.createElement(f,i({ref:r},c))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},85162:function(e,r,t){t.d(r,{Z:function(){return i}});var n=t(67294),a=t(34334),o="tabItem_Ymn6";function i(e){var r=e.children,t=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:t},r)}},65488:function(e,r,t){t.d(r,{Z:function(){return d}});var n=t(83117),a=t(67294),o=t(34334),i=t(72389),l=t(67392),p=t(7094),u=t(12466),c="tabList__CuJ",s="tabItem_LNqP";function m(e){var r,t,i=e.lazy,m=e.block,d=e.defaultValue,f=e.values,h=e.groupId,g=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=f?f:b.map((function(e){var r=e.props;return{value:r.value,label:r.label,attributes:r.attributes}})),y=(0,l.l)(v,(function(e,r){return e.value===r.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===d?d:null!=(r=null!=d?d:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?r:b[0].props.value;if(null!==k&&!v.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,p.U)(),j=w.tabGroupChoices,N=w.setTabGroupChoices,T=(0,a.useState)(k),O=T[0],q=T[1],E=[],S=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var x=j[h];null!=x&&x!==O&&v.some((function(e){return e.value===x}))&&q(x)}var I=function(e){var r=e.currentTarget,t=E.indexOf(r),n=v[t].value;n!==O&&(S(r),q(n),null!=h&&N(h,String(n)))},L=function(e){var r,t=null;switch(e.key){case"ArrowRight":var n,a=E.indexOf(e.currentTarget)+1;t=null!=(n=E[a])?n:E[0];break;case"ArrowLeft":var o,i=E.indexOf(e.currentTarget)-1;t=null!=(o=E[i])?o:E[E.length-1]}null==(r=t)||r.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},g)},v.map((function(e){var r=e.value,t=e.label,i=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===r?0:-1,"aria-selected":O===r,key:r,ref:function(e){return E.push(e)},onKeyDown:L,onFocus:I,onClick:I},i,{className:(0,o.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":O===r})}),null!=t?t:r)}))),i?(0,a.cloneElement)(b.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map((function(e,r){return(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==O})}))))}function d(e){var r=(0,i.Z)();return a.createElement(m,(0,n.Z)({key:String(r)},e))}},47456:function(e,r,t){t.r(r),t.d(r,{assets:function(){return m},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return d}});var n=t(83117),a=t(80102),o=(t(67294),t(3905)),i=t(65488),l=t(85162),p=["components"],u={sidebar_position:1,title:"\u57fa\u672c\u6982\u5ff5"},c=void 0,s={unversionedId:"team-work/graphql/concept",id:"team-work/graphql/concept",title:"\u57fa\u672c\u6982\u5ff5",description:"\u5728Spring\u7bc7\uff0c\u6211\u4eec\u8ba8\u8bba\u4e86\u5982\u4f55\u5229\u7528Jimmer\u5b9e\u73b0REST\u670d\u52a1\uff0c\u5e76\u4e3a\u4e4b\u81ea\u52a8\u751f\u6210\u5ba2\u6237\u7aef\u6240\u9700\u7684\u4ee3\u7801\uff0c\u6bd4\u5982TypeScript\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/team-work/graphql/concept.mdx",sourceDirName:"team-work/graphql",slug:"/team-work/graphql/concept",permalink:"/jimmer/zh/docs/team-work/graphql/concept",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/team-work/graphql/concept.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u57fa\u672c\u6982\u5ff5"},sidebar:"tutorialSidebar",previous:{title:"GraphQL\u7bc7",permalink:"/jimmer/zh/docs/team-work/graphql/"},next:{title:"Query",permalink:"/jimmer/zh/docs/team-work/graphql/query"}},m={},d=[],f={toc:d};function h(e){var r=e.components,t=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728",(0,o.kt)("a",{parentName:"p",href:"../spring"},"Spring\u7bc7"),"\uff0c\u6211\u4eec\u8ba8\u8bba\u4e86\u5982\u4f55\u5229\u7528Jimmer\u5b9e\u73b0REST\u670d\u52a1\uff0c\u5e76\u4e3a\u4e4b\u81ea\u52a8\u751f\u6210\u5ba2\u6237\u7aef\u6240\u9700\u7684\u4ee3\u7801\uff0c\u6bd4\u5982TypeScript\u3002"),(0,o.kt)("p",null,"\u4e0d\u4ec5\u5982\u6b64\uff0cJimmer\u8fd8\u652f\u6301\u53e6\u5916\u4e00\u79cd\u5f00\u53d1\u6a21\u5f0f\uff0c\u6784\u5efa",(0,o.kt)("a",{parentName:"p",href:"https://graphql.org/"},"GraphQL"),"\u670d\u52a1\u3002\u8fd9\u662f\u672c\u7cfb\u5217\u6587\u7ae0\u8981\u8ba8\u8bba\u7684\u5185\u5bb9\u3002"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"\u622a\u6b62\u5230\u76ee\u524d\u4e3a\u6b62\uff0cGraphQL\u534f\u8bae\u5e76\u4e0d\u652f\u6301\u81ea\u5173\u8054\u5c5e\u6027\u7684\u9012\u5f52\u67e5\u8be2\u3002"),(0,o.kt)("p",{parentName:"admonition"},"\u56e0\u6b64\uff0c\u65e0\u6cd5\u901a\u8fc7GraphQL\u66b4\u9732\u7c7b\u4f3c\u4e8e",(0,o.kt)("a",{parentName:"p",href:"../query/object-fetcher/recursive"},"\u5bf9\u8c61\u6293\u53d6\u5668\u7684\u9012\u5f52\u67e5\u8be2"),"\u7684\u529f\u80fd\uff0c\u8fd9\u662f\u76ee\u524d\u4f7f\u7528GraphQL\u5fc5\u987b\u63a5\u53d7\u7684\u529f\u80fd\u727a\u7272\u3002")),(0,o.kt)("p",null,"Jimmer\u5bf9GraphQL\u7684\u652f\u6301\u57fa\u4e8e",(0,o.kt)("a",{parentName:"p",href:"https://spring.io/projects/spring-graphql"},"Spring GraphQL"),"\u5b9e\u73b0\u7684\u3002\n\u6240\u4ee5\uff0c\u9879\u76ee\u9700\u8981\u540c\u65f6\u5bfc\u5165Jimmer\u548cSpring GraphQL\u7684Spring Boot Starter\uff0c\u6bd4\u5982"),(0,o.kt)(i.Z,{groupId:"buildTool",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"maven",label:"Maven",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="pom.xml"',title:'"pom.xml"'},"...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n\n<build>\n    <dependencies>\n        <dependency>\n            <groupId>org.babyfish.jimmer</groupId>\n            <artifactId>jimmer-spring-boot-starter</artifactId>\n            <version>${jimmer.version}</version>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifaceId>spring-boot-starter-graphql</artifaceId>\n            <version>${spring.boot.version}</version>\n        </dependency>\n        ...\u7701\u7565\u5176\u4ed6\u4f9d\u8d56...\n    </dependencies>\n</build>\n\n...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n"))),(0,o.kt)(l.Z,{value:"gradle",label:"Gradle",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy",metastring:'title="build.gradle"',title:'"build.gradle"'},"dependencies {\n    implementation \"org.babyfish.jimmer:jimmer-spring-boot-starter:${jimmerVersion}\"\n    implementation 'org.springframework.boot:spring-boot-starter-graphql'\n\n    ...\u7701\u7565\u5176\u4ed6\u4f9d\u8d56...\n}\n")))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u5982\u679cJimmer\u5b9e\u4f53\u7c7b\u578b\u4e5f\u5b9a\u4e49\u5728GraphQL\u9879\u76ee\u4e2d\uff0c\u800c\u5e76\u672a\u72ec\u7acb\u5f62\u6210\u53e6\u5916\u4e00\u4e2a\u9879\u76ee\uff0c\u90a3\u4e48\u9884\u7f16\u8bd1\u5668 ",(0,o.kt)("em",{parentName:"p"},"(\u5bf9Java\u800c\u8a00\uff0c\u662fAnnottion Processor\uff1b\u5bf9Kotlin\u800c\u8a00\uff0c\u662fKSP)")," \u4e5f\u914d\u7f6e\u5728\u6784\u5efa\u811a\u672c\u4e2d\u3002"),(0,o.kt)("p",{parentName:"admonition"},"\u8fd9\u90e8\u5206\u5185\u5bb9\u5df2\u7ecf\u5728",(0,o.kt)("a",{parentName:"p",href:"../overview/get-started/generate-code"},"\u751f\u6210\u4ee3\u7801"),"\u4e00\u6587\u4e2d\u88ab\u8be6\u7ec6\u8bba\u8ff0\u8fc7\uff0c\u672c\u6587\u4e0d\u518d\u91cd\u590d\u3002")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://spring.io/projects/spring-graphql"},"Spring GraphQL"),"\u662fSchema-First\u65b9\u6848\uff0c\u800c\u975eCode-First\u65b9\u6848\uff0c\n\u56e0\u6b64\uff0c\u5f00\u53d1\u4eba\u5458\u9700\u8981\u4e3a\u9879\u76ee\u521b\u5efa\u6587\u4ef6",(0,o.kt)("inlineCode",{parentName:"p"},"src/main/resources/graphql/schema.graphqls"),"\uff0c\u5e76\u5728\u5176\u4e2d\u5b9a\u4e49GraphQL Schema\u3002"),(0,o.kt)("p",null,"\u8fd9\u4e2a\u6587\u4ef6\u662f",(0,o.kt)("a",{parentName:"p",href:"https://spring.io/projects/spring-graphql"},"Spring GraphQL"),"\u7684\u8981\u6c42\uff0c\u5176\u5185\u5bb9GraphQL schema\u662f\u4e00\u79cd\u6807\u51c6\u7684\u8bed\u8a00\uff0c\u5b83\u4eec\u90fd\u548cJimmer\u65e0\u5173\uff0c\u672c\u6587\u4e0d\u505a\u89e3\u91ca\uff0c\u53ef\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"https://github.com/babyfish-ct/jimmer/blob/main/example/java/jimmer-sql-graphql/src/main/resources/graphql/schema.graphqls"},"\u9644\u5e26\u4f8b\u5b50\u7684GraphQL Schema"),"\u3002"))}h.isMDXComponent=!0}}]);