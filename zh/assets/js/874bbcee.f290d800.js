"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[6854],{85162:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(67294),a=r(34334),o="tabItem_Ymn6";function u(e){var t=e.children,r=e.hidden,u=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,u),hidden:r},t)}},65488:function(e,t,r){r.d(t,{Z:function(){return m}});var n=r(83117),a=r(67294),o=r(34334),u=r(72389),l=r(67392),i=r(7094),c=r(12466),s="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,r,u=e.lazy,p=e.block,m=e.defaultValue,f=e.values,v=e.groupId,h=e.className,k=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=f?f:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,l.l)(b,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===m?m:null!=(t=null!=m?m:null==(r=k.find((function(e){return e.props.default})))?void 0:r.props.value)?t:k[0].props.value;if(null!==w&&!b.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,i.U)(),g=N.tabGroupChoices,T=N.setTabGroupChoices,Z=(0,a.useState)(w),j=Z[0],x=Z[1],E=[],q=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var _=g[v];null!=_&&_!==j&&b.some((function(e){return e.value===_}))&&x(_)}var I=function(e){var t=e.currentTarget,r=E.indexOf(t),n=b[r].value;n!==j&&(q(t),x(n),null!=v&&T(v,String(n)))},D=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n,a=E.indexOf(e.currentTarget)+1;r=null!=(n=E[a])?n:E[0];break;case"ArrowLeft":var o,u=E.indexOf(e.currentTarget)-1;r=null!=(o=E[u])?o:E[E.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},h)},b.map((function(e){var t=e.value,r=e.label,u=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:function(e){return E.push(e)},onKeyDown:D,onFocus:I,onClick:I},u,{className:(0,o.Z)("tabs__item",d,null==u?void 0:u.className,{"tabs__item--active":j===t})}),null!=r?r:t)}))),u?(0,a.cloneElement)(k.filter((function(e){return e.props.value===j}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}function m(e){var t=(0,u.Z)();return a.createElement(p,(0,n.Z)({key:String(t)},e))}},57681:function(e,t,r){r.d(t,{ZP:function(){return f}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),u=r(65488),l=r(85162),i=r(67720),c=r(87918),s=r(98614),d=r(67714),p=["components"],m={toc:[]};function f(e){var t=e.components,r=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(u.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("video",{width:"100%",controls:!0},(0,o.kt)("source",{src:s.Z,type:"video/mp4"}),(0,o.kt)("div",{style:{padding:"1rem",fontSize:"2rem",color:"red"}},"Your browser does not support the video tag."))),(0,o.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("video",{width:"100%",controls:!0},(0,o.kt)("source",{src:d.Z,type:"video/mp4"}),(0,o.kt)("div",{style:{padding:"1rem",fontSize:"2rem",color:"red"}},"Your browser does not support the video tag.")))),(0,o.kt)(i.Z,{mdxType:"Divider"},(0,o.kt)(c.Z,{label:"\u548cGraphQL\u7684\u5dee\u5f02",mdxType:"Chip"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"GraphQL\u57fa\u4e8eHTTP\u670d\u52a1\uff0c\u8be5\u529f\u80fd\u53ea\u6709\u5728\u8de8\u8d8aHTTP\u670d\u52a1\u7684\u8fb9\u754c\u624d\u80fd\u5448\u73b0\uff1b\u800c\u5728Jimmer\u4e2d\uff0c\u8fd9\u662fORM\u7684\u57fa\u7840API\uff0c\u4f60\u53ef\u4ee5\u5728\u4efb\u4f55\u4ee3\u7801\u903b\u8f91\u4e2d\u4f7f\u7528\u6b64\u80fd\u529b\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u622a\u6b62\u5230\u76ee\u524d\u4e3a\u6b62\uff0cGraphQL\u534f\u8bae\u4e0d\u652f\u6301\u5bf9\u6df1\u5ea6\u65e0\u9650\u7684\u81ea\u5173\u8054\u5c5e\u6027\u7684\u9012\u5f52\u67e5\u8be2\uff1b\u800cJimer\u652f\u6301\u3002"))))}f.isMDXComponent=!0},21797:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),u=(r(65488),r(85162),r(57681)),l=["components"],i={sidebar_position:2,title:"\u5bf9\u8c61\u6293\u53d6\u5668"},c=void 0,s={unversionedId:"team-work/query/object-fetcher/index",id:"team-work/query/object-fetcher/index",title:"\u5bf9\u8c61\u6293\u53d6\u5668",description:"\u6982\u5ff5",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/team-work/query/object-fetcher/index.md",sourceDirName:"team-work/query/object-fetcher",slug:"/team-work/query/object-fetcher/",permalink:"/jimmer/zh/docs/team-work/query/object-fetcher/",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/team-work/query/object-fetcher/index.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u5bf9\u8c61\u6293\u53d6\u5668"},sidebar:"tutorialSidebar",previous:{title:"\u6982\u8ff0",permalink:"/jimmer/zh/docs/team-work/query/usage"},next:{title:"\u57fa\u672c\u7528\u6cd5",permalink:"/jimmer/zh/docs/team-work/query/object-fetcher/usage"}},d={},p=[{value:"\u6982\u5ff5",id:"\u6982\u5ff5",level:2},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",level:2}],m={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u6982\u5ff5"},"\u6982\u5ff5"),(0,o.kt)("p",null,"\u5bf9\u8c61\u6293\u53d6\u5668\uff0c\u662fJimmer\u7684\u4e00\u4e2a\u91cd\u8981\u529f\u80fd\uff0c\u6293\u53d6\u6307\u5b9a\u7684\u5b57\u6bb5\uff0c\u7136\u540e\u7ec4\u88c5\u6210\u5bf9\u8c61\uff0c\u8fd9\u4e00\u5207\u662f\u81ea\u52a8\u5b8c\u6210\u7684\uff0c\u8282\u7701\u4e86\u5f88\u591a\u624b\u5199\u8f6c\u6362\u903b\u8f91\u7684\u65f6\u95f4\u3002"),(0,o.kt)("p",null,"\u5bf9\u8c61\u6293\u53d6\u5668\u548c\u4ee5\u4e0b\u8fd9\u7c7b\u6280\u672f\u7c7b\u4f3c\uff0c\u4f46\u66f4\u52a0\u5f3a\u5927"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.baeldung.com/jpa-entity-graph"},"JPA\u7684EntityGraph"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/system.data.objects.objectquery-1.include?view=netframework-4.8"},"ADO.NET EntityFramework\u7684Include"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://guides.rubyonrails.org/active_record_querying.html#includes"},"ActiveRecord\u7684include")))),(0,o.kt)("p",null,"\u867d\u7136\u5728\u67e5\u8be2\u4e2d\u8fd4\u56de\u6574\u4e2a\u5bf9\u8c61\u7684\u4ee3\u7801\u5f88\u7b80\u5355\uff0c\u4f46\u662f\u9ed8\u8ba4\u5bf9\u8c61\u683c\u5f0f\u5f80\u5f80\u4e0d\u80fd\u5f88\u597d\u5730\u7b26\u5408\u5f00\u53d1\u9700\u6c42\u3002\u5f88\u5bb9\u6613\u9047\u5230\u4e24\u4e2a\u95ee\u9898"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"over fetch\u95ee\u9898"),(0,o.kt)("p",{parentName:"li"},"\u6211\u4eec\u4e0d\u9700\u8981\u7684\u5bf9\u8c61\u5c5e\u6027\u67e5\u8be2\u4e86\uff0c\u5f62\u6210\u4e86\u6d6a\u8d39\uff0c\u5c24\u5176\u662f\u5bf9\u8c61\u5b57\u6bb5\u5f88\u591a\u7684\u65f6\u3002"),(0,o.kt)("p",{parentName:"li"},"\u4ee5JPA\u4e3a\u4f8b\uff0c\u5176\u8fd4\u56de\u5bf9\u8c61\u9ed8\u8ba4\u662f\u4e00\u4e2a\u5b8c\u6574\u5bf9\u8c61\uff0c\u4e0d\u9700\u8981\u7684\u975e\u5173\u8054\u5c5e\u6027\u4e5f\u4f1a\u5305\u542b\u5728\u5185\u3002\u8fd9\u662f\u4f20\u7edfORM\u4e00\u4e2a\u5f88\u5927\u7684\u95ee\u9898\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"under fetch\u95ee\u9898"),(0,o.kt)("p",{parentName:"li"},"\u6211\u4eec\u9700\u8981\u7684\u5bf9\u8c61\u5c5e\u6027\u88ab\u5e76\u672a\u88ab\u83b7\u53d6\uff0c\u5904\u4e8e\u4e0d\u53ef\u7528unloaded\u72b6\u6001\uff0c\u7a0b\u5e8f\u65e0\u6cd5\u6b63\u786e\u8fd0\u884c\u3002"))),(0,o.kt)("p",null,"\u5bf9\u8c61\u6293\u53d6\u5668\u5f88\u597d\u5730\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u901a\u8fc7\u8ba9\u7528\u6237\u6307\u5b9a\u8981\u6293\u53d6\u7684\u5c5e\u6027\uff0c\u7136\u540e\u5229\u7528\u52a8\u6001\u5bf9\u8c61\u7684\u7279\u6027\uff0c\u8ba9\u67e5\u8be2\u8fd4\u56de\u7684\u5bf9\u8c61\u65e2\u4e0dover fetch\u4e5f\u4e0dunder fetch\u3002"),(0,o.kt)("p",null,"\u5229\u7528\u5bf9\u8c61\u6293\u53d6\u5668\u7684\u53ef\u4ee5\u8f7b\u677e\u6307\u5b9a\u67e5\u8be2\u7684\u8fd4\u56de\u683c\u5f0f\uff0c\u56e0\u4e3a\u52a8\u6001\u5bf9\u8c61\u53ef\u4ee5\u63cf\u8ff0\u4efb\u610f\u5f62\u72b6\u7684\u6570\u636e\u7ed3\u6784\uff0c\u4f60\u53ef\u4ee5\u51b3\u5b9a\u67d0\u4e2a\u4e1a\u52a1\u89c6\u89d2\u662f\u5426\u9700\u8981\u67e5\u8be2\u67d0\u4e9b\u5b9e\u4f53\u3001\u5173\u7cfb\u3001\u751a\u81f3\u6bcf\u4e00\u4e2a\u5c5e\u6027\u3002"),(0,o.kt)("h2",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),(0,o.kt)(u.ZP,{mdxType:"ObjectFetcher"}))}f.isMDXComponent=!0},98614:function(e,t,r){t.Z=r.p+"assets/medias/java-fetcher-a47c6f710d4cc259e540c4a5909ae021.mp4"},67714:function(e,t,r){t.Z=r.p+"assets/medias/kotlin-fetcher-b8ddc7a4ad25644d36d580ac726ec13f.mp4"}}]);