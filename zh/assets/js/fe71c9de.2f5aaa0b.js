"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[1230],{85162:function(e,n,t){t.d(n,{Z:function(){return r}});var a=t(67294),l=t(34334),i="tabItem_Ymn6";function r(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(i,r),hidden:t},n)}},65488:function(e,n,t){t.d(n,{Z:function(){return k}});var a=t(83117),l=t(67294),i=t(34334),r=t(72389),o=t(67392),s=t(7094),u=t(12466),p="tabList__CuJ",m="tabItem_LNqP";function d(e){var n,t,r=e.lazy,d=e.block,k=e.defaultValue,c=e.values,b=e.groupId,N=e.className,I=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=c?c:I.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),h=(0,o.l)(g,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var _=null===k?k:null!=(n=null!=k?k:null==(t=I.find((function(e){return e.props.default})))?void 0:t.props.value)?n:I[0].props.value;if(null!==_&&!g.some((function(e){return e.value===_})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+_+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var f=(0,s.U)(),v=f.tabGroupChoices,T=f.setTabGroupChoices,y=(0,l.useState)(_),x=y[0],O=y[1],E=[],D=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var C=v[b];null!=C&&C!==x&&g.some((function(e){return e.value===C}))&&O(C)}var B=function(e){var n=e.currentTarget,t=E.indexOf(n),a=g[t].value;a!==x&&(D(n),O(a),null!=b&&T(b,String(a)))},w=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a,l=E.indexOf(e.currentTarget)+1;t=null!=(a=E[l])?a:E[0];break;case"ArrowLeft":var i,r=E.indexOf(e.currentTarget)-1;t=null!=(i=E[r])?i:E[E.length-1]}null==(n=t)||n.focus()};return l.createElement("div",{className:(0,i.Z)("tabs-container",p)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},N)},g.map((function(e){var n=e.value,t=e.label,r=e.attributes;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===n?0:-1,"aria-selected":x===n,key:n,ref:function(e){return E.push(e)},onKeyDown:w,onFocus:B,onClick:B},r,{className:(0,i.Z)("tabs__item",m,null==r?void 0:r.className,{"tabs__item--active":x===n})}),null!=t?t:n)}))),r?(0,l.cloneElement)(I.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},I.map((function(e,n){return(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==x})}))))}function k(e){var n=(0,r.Z)();return l.createElement(d,(0,a.Z)({key:String(n)},e))}},39511:function(e,n,t){t.d(n,{b:function(){return N}});var a=t(83117),l=t(11057),i=t(50657),r=t(42293),o=t(10155),s=t(15861),u=t(6514),p=t(67294),m=t(54776),d=t(93946),k=t(9137),c=t(61274),b=t(50594),N=(0,p.memo)((function(e){var n=e.buttonText,t=e.fullScreen,a=void 0!==t&&t,m=e.title,N=void 0===m?n:m,g=e.variant,h=void 0===g?"contained":g,_=e.children,f=(0,p.useState)(!1),v=f[0],T=f[1],y=(0,p.useState)(a),x=y[0],O=y[1],E=(0,p.useCallback)((function(){T(!0)}),[]),D=(0,p.useCallback)((function(){T(!1)}),[]),C=(0,p.useCallback)((function(){O((function(e){return!e}))}),[]);return p.createElement(p.Fragment,null,p.createElement(l.Z,{onClick:E,variant:h},n),p.createElement(i.Z,{open:v,onClose:D,fullScreen:x,TransitionComponent:I,maxWidth:"md"},p.createElement(r.Z,{sx:{position:"relative"}},p.createElement(o.Z,null,p.createElement(s.Z,{sx:{ml:2,flex:1},variant:"h6",component:"div"},N),p.createElement(d.Z,{onClick:C,style:{color:"white"}},x?p.createElement(c.Z,null):p.createElement(k.Z,null)),p.createElement(d.Z,{"aria-label":"close",onClick:D,style:{color:"white"}},p.createElement(b.Z,null)))),p.createElement(u.Z,null,_)))})),I=p.forwardRef((function(e,n){return p.createElement(m.Z,(0,a.Z)({direction:"up",ref:n},e))}))},12650:function(e,n,t){t.d(n,{ZP:function(){return p}});var a=t(83117),l=t(80102),i=(t(67294),t(3905)),r=t(87918),o=t(67720),s=["components"],u={toc:[]};function p(e){var n=e.components,t=(0,l.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u76ee\u524d\u5176\u4ed6\u64cd\u4f5cSQL\u7684\u6280\u672f\u65b9\u6848\uff0c\u65e0\u8bbaORM\u8fd8\u662f\u975eORM\uff0c\u90fd\u6709\u5b58\u5728\u4e00\u4e2a\u7a7a\u767d\u9886\u57df\uff1a\u53ea\u8003\u8651\u5230\u4e86\u52a8\u6001",(0,i.kt)("inlineCode",{parentName:"p"},"where"),"\uff0c\u6ca1\u6709\u8003\u8651",(0,i.kt)("inlineCode",{parentName:"p"},"\u52a8\u6001join"),"\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"\u52a8\u6001JOIN"),"\u5b9a\u4e49\uff1a\u5982\u679c\u67d0\u4e9b\u52a8\u6001\u67e5\u8be2\u6761\u4ef6\u9488\u5bf9\u5176\u4ed6\u8868\u800c\u975e\u5f53\u524d\u8868\u3002\u8fd9\u610f\u5473\u7740"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6761\u4ef6\u6ee1\u8db3\u65f6\uff1a\u5148\u901a\u8fc7\u5173\u8054\u5c5e\u6027join\u5230\u5176\u4ed6\u8868\uff0c\u518d\u5bf9join\u5f97\u5230\u7684\u8868\u6dfb\u52a0\u52a8\u6001where\u6761\u4ef6")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6761\u4ef6\u4e0d\u6ee1\u8db3\u65f6\uff1a\u4e0d\u80fd\u901a\u8fc7\u5173\u8054\u5c5e\u6027join\u5176\u4ed6\u8868"))),(0,i.kt)(o.Z,{mdxType:"Divider"},(0,i.kt)(r.Z,{label:"\u573a\u666f-1",mdxType:"Chip"})),(0,i.kt)("p",null,"\u8ba9\u6211\u4eec\u5148\u6765\u770b\u7b2c\u4e00\u4e2a\u573a\u666f\uff0c\u8fd9\u91cc\u7528\u9762\u5411\u539f\u751fSQL\u7684MyBatis\u4e3a\u4f8b"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5b9a\u4e49MyBatis Mapper\u63a5\u53e3"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@Mapper\npublic interface BookMapper {\n\n    List<Book> findBooks(\n        @Nullable String name,\n        @Nullable String storeName,\n        @Nullable String storeWebsite\n    );\n}\n")),(0,i.kt)("p",{parentName:"li"},"\u8fd9\u91cc\uff0c\u6240\u6709\u67e5\u8be2\u53c2\u6570\u90fd\u53ef\u80fd\u4e3anull\uff0c\u5f88\u660e\u663e\uff0c\u8fd9\u662f\u4e00\u4e2a\u52a8\u6001\u67e5\u8be2\u3002"),(0,i.kt)("p",{parentName:"li"},"\u540e\u9762\u4e24\u4e2a\u67e5\u8be2\u53c2\u6570\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"storeName"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"storeWebsite"),"\uff0c\u5176\u8fc7\u6ee4\u6761\u4ef6\u5e76\u4e0d\u65bd\u52a0\u5728\u5f53\u524d\u8868",(0,i.kt)("inlineCode",{parentName:"p"},"BOOK"),"\u4e0a\uff0c\u800c\u662f\u65bd\u52a0\u5728\u7236\u8868",(0,i.kt)("inlineCode",{parentName:"p"},"BOOK_STORE\u4e0a"),"\u3002\n\u5373\uff0c\u5f53\u8fd9\u4e24\u4e2a\u53c2\u6570\u4e2d\u7684\u4efb\u4f55\u4e00\u4e2a\u975enull\u65f6\uff0c\u90fd\u4f1a\u751f\u6210\u5bf9",(0,i.kt)("inlineCode",{parentName:"p"},"BOOK_STORE"),"\u8868\u7684JOIN\uff0c\u8fd9\u79cd\u7531\u53c2\u6570\u503c\u52a8\u6001\u51b3\u5b9a\u662f\u5426\u6dfb\u52a0\u7684\u8868\u8fde\u63a5\uff0c\u5728\u672c\u6587\u4e2d\u88ab\u79f0\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"\u52a8\u6001JOIN"),"\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5b9a\u4e49MyBatis\u7684SQL\u6620\u5c04XML"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8" ?>\n<!DOCTYPE mapper\n        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"\n        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">\n<mapper namespace="somepackage.BookMapper">\n    <select id="findBooks" resultType="somepackage.Book">\n        select * from BOOK as book\n        \x3c!-- highlight-next-line --\x3e\n        <if test="storeName != null or storeWebsite != null"> \u2776\n            inner join BOOK_STORE as store\n                on book.STORE_ID = store.ID\n        </if>\n        <where>\n            <if test="name != null">\n                and book.NAME = #{name}\n            </if>\n            <if test="storeName != null"> \u2777\n                and store.NAME = #{storeName}\n            </if>\n            <if test="storeWebsite != null">\n                and store.WEBSITE = #{storeWebsite} \u2778\n            </if>\n        </where>\n    </select>\n</mapper>\n')),(0,i.kt)("p",{parentName:"li"},"\u5176\u4e2d\uff0c\u2776\u5c31\u662f\u52a8\u6001JOIN\u3002\u7136\u800c\u5bf9\u5f00\u53d1\u4eba\u5458\u800c\u8a00\uff0c\u2777\u548c\u2778\u624d\u662f\u76ee\u7684\uff0c\u2776\u662f\u4e3a\u652f\u6301\u2777\u548c\u2778\u800c\u4e0d\u5f97\u4e0d\u505a\u7684\u5de5\u4f5c\uff0c\u5176\u5224\u65ad\u6761\u4ef6\u662f\u4e00\u79cd\u8d1f\u62c5\u3002"),(0,i.kt)("p",{parentName:"li"},"\u4e5f\u8bb8\u4f60\u5df2\u7ecf\u6ce8\u610f\u5230\u4e86\uff0c\u2776\u7684\u5224\u65ad\u6761\u4ef6\u4f7f\u7528\u4e86",(0,i.kt)("inlineCode",{parentName:"p"},"or"),"\uff0c\u8fd9\u4e5f\u4e0d\u96be\u7406\u89e3\u3002"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"\u7136\u800c\uff0c\u8fd9\u4ec5\u4ec5\u662f\u6700\u7b80\u5355\u7684\u4e24\u8868\u4e4b\u95f4\u52a8\u6001\u8fde\u63a5\uff0c\u5bf9\u4e8e\u66f4\u6df1\u7684\u591a\u8868\u8fde\u63a5\u64cd\u4f5c\u800c\u8a00\uff0c\u52a8\u6001\u8fde\u63a5\u7684\u590d\u6742\u5ea6\u4f1a\u6025\u5267\u4e0a\u5347\uff01")))),(0,i.kt)(o.Z,{mdxType:"Divider"},(0,i.kt)(r.Z,{label:"\u573a\u666f-2",mdxType:"Chip"})),(0,i.kt)("p",null,"\u8ba9\u6211\u4eec\u518d\u6765\u770b\u7b2c\u4e8c\u4e2a\u573a\u666f\uff0c\u6709\u4e86\u524d\u9762\u7684\u4f8b\u5b50\u4f5c\u4e3a\u57fa\u7840\uff0c\u8fd9\u4e2a\u4f8b\u5b50\u5c31\u4e0d\u540c\u4efb\u4f55\u4e1a\u52a1\u8026\u5408\u4e86\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8" ?>\n<!DOCTYPE mapper\n        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"\n        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">\n<mapper namespace="somepackage.AMapper">\n    <select id="findAObjects" resultType="somepackage.A">\n        select distinct A.id\n        from A\n        \x3c!-- highlight-start --\x3e\n        <if test="bId != null or cId != null or dId != null or eId != null">\n            inner join B on A.ID = B.A_ID\n        </if>\n        <if test="cId != null or dId != null or eId != null">\n            inner join C on B.ID = C.B_ID\n        </if>\n        <if test="dId != null or eId != null">\n            inner join D on C.ID = D.C_ID\n        </if>\n        <if test="eId != null">\n            inner join E on D.ID = E.D_ID\n        </if>\n        \x3c!-- highlight-end --\x3e\n        <where>\n            <if test="aId != null">\n                and A.ID = #{aId}\n            </if>\n            <if test="bId != null">\n                and B.ID = #{bId}\n            </if>\n            <if test="cId != null">\n                and C.ID = #{cId}\n            </if>\n            <if test="dId != null">\n                and D.ID = #{dId}\n            </if>\n            <if test="eId != null">\n                and E.ID = #{eId}\n            </if>\n        </where>\n    </select>\n</mapper>\n')),(0,i.kt)("p",null,"\u8fd9\u4e2a\u4f8b\u5b50\u903b\u8f91\u5f88\u7b80\u5355\uff0cA\u3001B\u3001C\u3001D\u548cE\u8fd9\u4e94\u5f20\u8868\u5f62\u6210\u4e86\u4e00\u4e2aJOIN\u94fe\uff0c\u6bcf\u5f20\u8868\u90fd\u4e00\u4e2a\u52a8\u6001\u67e5\u8be2\u6761\u4ef6\u3002\u7136\u800c\uff0c\u6b63\u5982\u4f60\u6240\u89c1\uff0c\u52a8\u6001JOIN\u7684\u590d\u6742\u5ea6\u5df2\u7ecf\u53d8\u5f97\u4e0d\u53ef\u63a5\u53d7\u4e86\u3002"))}p.isMDXComponent=!0},36119:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return d},default:function(){return I},frontMatter:function(){return m},metadata:function(){return k},toc:function(){return b}});var a=t(83117),l=t(80102),i=(t(67294),t(3905)),r=t(12650),o=t(65488),s=t(85162),u=t(39511),p=["components"],m={sidebar_position:4,title:"\u4f18\u5316\u4e0d\u5fc5\u8981\u8fde\u63a5"},d=void 0,k={unversionedId:"team-work/query/dynamic-join/optimization",id:"team-work/query/dynamic-join/optimization",title:"\u4f18\u5316\u4e0d\u5fc5\u8981\u8fde\u63a5",description:"\u4f7f\u7528\u65b9\u6cd5",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/team-work/query/dynamic-join/optimization.mdx",sourceDirName:"team-work/query/dynamic-join",slug:"/team-work/query/dynamic-join/optimization",permalink:"/jimmer/zh/docs/team-work/query/dynamic-join/optimization",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/team-work/query/dynamic-join/optimization.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"\u4f18\u5316\u4e0d\u5fc5\u8981\u8fde\u63a5"},sidebar:"tutorialSidebar",previous:{title:"\u5408\u5e76\u51b2\u7a81\u8fde\u63a5",permalink:"/jimmer/zh/docs/team-work/query/dynamic-join/merge"},next:{title:"\u5206\u9875\u5b89\u5168\u6027",permalink:"/jimmer/zh/docs/team-work/query/dynamic-join/table-ex"}},c={},b=[{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u57fa\u672c\u6982\u5ff5",id:"\u57fa\u672c\u6982\u5ff5",level:3},{value:"\u53e6\u5916\u4e00\u79cd\u89e3\u51b3\u65b9\u6848",id:"\u53e6\u5916\u4e00\u79cd\u89e3\u51b3\u65b9\u6848",level:3},{value:"\u5e7b\u8fde\u63a5",id:"\u5e7b\u8fde\u63a5",level:2},{value:"\u534a\u8fde\u63a5",id:"\u534a\u8fde\u63a5",level:2}],N={toc:b};function I(e){var n=e.components,t=(0,l.Z)(e,p);return(0,i.kt)("wrapper",(0,a.Z)({},N,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,i.kt)("h3",{id:"\u57fa\u672c\u6982\u5ff5"},"\u57fa\u672c\u6982\u5ff5"),(0,i.kt)("p",null,"\u5728Jimmer SQL DSL \u4e2d\uff0c\u88ab\u521b\u5efa\u7684join\u5bf9\u8c61\uff0c\u5982\u679c\u4e0d\u88ab\u4f7f\u7528\u5c06\u4f1a\u88ab\u5ffd\u7565\u3002\u4f8b\u5982"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'BookTable table = BookTable.$;\n\n// highlight-next-line\nSystem.out.println("Unsed join: " + table.store());\n\nList<Book> books = sqlClient\n    .createQuery(table)\n    .orderBy(table.name().asc(), table.edition().desc())\n    .select(table)\n    .execute();\n'))),(0,i.kt)(s.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'val books = sqlClient\n    .createQuery(Book::class) {\n        \n        // highlight-next-line\n        println("Unsed join: ${table.store}");\n\n        orderBy(table.name.asc(), table.edition.desc())\n        select(table)\n    }\n    .execute()    \n')))),(0,i.kt)("p",null,"\u867d\u7136\u901a\u8fc7",(0,i.kt)("inlineCode",{parentName:"p"},"table.store"),"\u521b\u5efa\u4e86\u4e00\u4e2aJOIN\u5bf9\u8c61\uff0c\u4f46\u662f\uff0c\u8be5\u5bf9\u8c61\u5e76\u6ca1\u6709\u88ab\u5f53\u524d\u67e5\u8be2\u7684SQL DSL\u4f7f\u7528\uff0c\u8fd9\u79cd\u60c5\u7eea\u4e0b\uff0c\u8be5JOIN\u5bf9\u8c61\u4f1a\u88ab\u5ffd\u7565\u3002"),(0,i.kt)("p",null,"\u56e0\u6b64\uff0c\u6700\u7ec8\u751f\u6210\u7684SQL\u4e0d\u4f1a\u5305\u542b\u4efb\u4f55JOIN\u64cd\u4f5c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    tb_1_.ID, \n    tb_1_.NAME, \n    tb_1_.EDITION, \n    tb_1_.PRICE, \n    tb_1_.STORE_ID \nfrom BOOK as tb_1_ \n    where tb_1_.NAME = ?\n")),(0,i.kt)("h3",{id:"\u53e6\u5916\u4e00\u79cd\u89e3\u51b3\u65b9\u6848"},"\u53e6\u5916\u4e00\u79cd\u89e3\u51b3\u65b9\u6848"),(0,i.kt)("p",null,"\u5728",(0,i.kt)(u.b,{buttonText:"\u76ee\u524d\u6280\u672f\u65b9\u6848\u5b58\u5728\u95ee\u9898",mdxType:"ViewMore"},(0,i.kt)(r.ZP,{mdxType:"DynamicJoinProblem"})),"\u4e2d\uff0c\u6211\u4eec\u5217\u4e3e\u4e86\u4e24\u4e2a\u573a\u666f\u3002"),(0,i.kt)("p",null,"\u5728",(0,i.kt)("a",{parentName:"p",href:"./merge"},"\u4e0a\u4e00\u7bc7\u6587\u6863"),"\u4e2d\uff0c\u6211\u4eec\u8ba8\u8bba\u4e86\u5229\u7528Jimmer SQL DSL\u81ea\u52a8\u5408\u5e76\u51b2\u7a81\u8fde\u63a5\u7684\u7279\u6027\u89e3\u51b3\u8fd9\u4e24\u4e2a\u573a\u666f\u7684\u95ee\u9898\u3002"),(0,i.kt)("p",null,"\u8fd9\u91cc\uff0c\u6211\u4eec\u6362\u7528\u53e6\u5916\u4e00\u79cd\u65b9\u5f0f\u6765\u89e3\u51b3\u76f8\u540c\u7684\u95ee\u9898\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u89e3\u51b3\u573a\u666f1\u7684\u95ee\u9898"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},"List<Book> findBooks(\n        @Nullable String name,\n        @Nullable String storeName,\n        @Nullable String storeWebsite\n) {\n    BookTable table = BookTable.$;\n\n    // \u5148\u65e0\u6761\u4ef6\u5efa\u7acbJOIN\u5bf9\u8c61\uff0c\u82e5\u672a\u88ab\u540e\u7eed\u4ee3\u7801\u4f7f\u7528\uff0c\n    // \u5219\u88ab\u81ea\u52a8\u5ffd\u7565\u3002\u56e0\u6b64\uff0c\u6b64\u4e3e\u4e0d\u4f1a\u5bfc\u81f4\u65e0\u7528JOIN\n    // highlight-next-line\n    BookStoreTable store = table.store();\n\n    return sql()\n        .createQuery(table)\n        .whereIf(\n            name != null,\n            () -> book.name().like(name)\n        )\n        .whereIf(\n            storeName != null,\n            () -> store .name().like(storeName)\n        )\n        .whereIf(\n            storeWebsite != null,\n            () -> store.website().like(storeWebsite)\n        )\n        .select(book)\n        .execute();\n}\n"))),(0,i.kt)(s.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun findBooks(\n    name: String? = null,\n    storeName: String? = null,\n    storeWebsite: String? = null\n): List<Book> {\n    return sqlClient\n        .createQuery(Book::class) {\n\n            // \u5148\u65e0\u6761\u4ef6\u5efa\u7acbJOIN\u5bf9\u8c61\uff0c\u82e5\u672a\u88ab\u540e\u7eed\u4ee3\u7801\u4f7f\u7528\uff0c\n            // \u5219\u88ab\u81ea\u52a8\u5ffd\u7565\u3002\u56e0\u6b64\uff0c\u6b64\u4e3e\u4e0d\u4f1a\u5bfc\u81f4\u65e0\u7528JOIN\n            // highlight-next-line\n            val store = table.store;\n\n            name?.let {\n                where(table.name like it)\n            }\n            storeName?.let {\n                where(store .name like it)\n            }\n            storeName?.let {\n                where(store.website like it)\n            }\n            select(table)\n        }\n        .execute()\n}\n")))),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5982\u679c\u4ec5\u6307\u5b9a",(0,i.kt)("inlineCode",{parentName:"p"},"name"),"\uff0c\u4e0d\u6307\u5b9a",(0,i.kt)("inlineCode",{parentName:"p"},"storeName"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"storeWebsite"),"\uff0c\u90a3\u4e48",(0,i.kt)("inlineCode",{parentName:"p"},"store"),"\u5c31\u662f\u4e00\u4e2a\u521b\u5efa\u540e\u5374\u4e0d\u88ab\u4f7f\u7528\u7684join\u5bf9\u8c61\uff0c\u56e0\u6b64\u88ab\u5ffd\u7565\u3002\u6700\u7ec8\u751f\u6210\u7684SQL\u4e0d\u5305\u542b\u4efb\u4f55join\u64cd\u4f5c\u3002"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    tb_1_.ID, \n    tb_1_.NAME, \n    tb_1_.EDITION, \n    tb_1_.PRICE, \n    tb_1_.STORE_ID \nfrom BOOK as tb_1_ \n    where tb_1_.NAME = ?\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5982\u679c\u6307\u5b9a",(0,i.kt)("inlineCode",{parentName:"p"},"storeName"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"storeWebsite"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"store"),"\u5c31\u4f1a\u88ab\u4f7f\u7528\uff0c\u4ece\u800c\u5bfc\u81f4\u6700\u7ec8\u751f\u6210SQL\u5305\u542bjoin\u64cd\u4f5c\u3002\u8fd9\u5f88\u660e\u663e\uff0c\u6b64\u5904\u4e0d\u7528\u793a\u8303\u3002")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u89e3\u51b3\u573a\u666f2\u7684\u95ee\u9898"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},"List<Long> findDistinctIds(\n    @Nullable Long aId,\n    @Nullable Long bId,\n    @Nullable Long cId,\n    @Nullable Long dId,\n    @Nullable Long eId\n) {\n    ATable table = ATable.$;\n\n    // \u5148\u65e0\u6761\u4ef6\u5efa\u7acbJOIN\u5bf9\u8c61\uff0c\u82e5\u672a\u88ab\u540e\u7eed\u4ee3\u7801\u4f7f\u7528\uff0c\n    // \u5219\u88ab\u81ea\u52a8\u5ffd\u7565\u3002\u56e0\u6b64\uff0c\u6b64\u4e3e\u4e0d\u4f1a\u5bfc\u81f4\u65e0\u7528JOIN\n    // highlight-start\n    BTableEx b = table.asTableEx().bs();\n    CTableEx c = b.cs();\n    DTableEx d = c.ds();\n    DTableEx e = d.es();\n    // highlight-end\n\n    return sqlClient\n        .createQuery(table)\n        .whereIf(\n            aId != null,\n            () -> table.id().like(aId)\n        )\n        .whereIf(\n            bId != null,\n            () -> b.id().like(bId)\n        )\n        .whereIf(\n            cId != null,\n            () -> c.id().like(cId)\n        )\n        .whereIf(\n            dId != null,\n            () -> d.id().like(dId)\n        )\n        .whereIf(\n            eId != null,\n            () -> e.id().like(eId)\n        )\n        .select(book.id())\n        .distinct()\n        .execute();\n}\n"))),(0,i.kt)(s.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun findDistinctIds(\n    aId: Long? = null,\n    bId: Long? = null,\n    cId: Long? = null,\n    dId: Long? = null,\n    eId: Long? = null\n): List<Long> {\n    \n    // \u5148\u65e0\u6761\u4ef6\u5efa\u7acbJOIN\u5bf9\u8c61\uff0c\u82e5\u672a\u88ab\u540e\u7eed\u4ee3\u7801\u4f7f\u7528\uff0c\n    // \u5219\u88ab\u81ea\u52a8\u5ffd\u7565\u3002\u56e0\u6b64\uff0c\u6b64\u4e3e\u4e0d\u4f1a\u5bfc\u81f4\u65e0\u7528JOIN\n    // highlight-start\n    val b = table.asTableEx().bs\n    val c = b.cs\n    val d = c.ds\n    val e = d.es\n    // highlight-end\n\n    return sqlClient\n        .createQuery(A::class) {\n            aId?.let {\n                where(table.id eq it)\n            }\n            bId?.let {\n                where(b.id eq it)\n            }\n            cId?.let {\n                where(c.id eq it)\n            }\n            dId?.let {\n                where(d.id eq it)\n            }\n            eId?.let {\n                where(e.id eq it)\n            }\n            select(table.id)\n        }\n        .distinct()\n        .execute()\n}\n")))),(0,i.kt)("admonition",{parentName:"li",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6709\u4e86\u524d\u9762\u7684\u57fa\u7840\uff0c\u8fd9\u91cc\u4e0d\u518d\u9700\u8981\u7f57\u5217\u4e0d\u540c\u7684\u53c2\u6570\u7ec4\u5408\u4e0b\u4f1a\u751f\u6210\u4f55\u79cdSQL\u3002\u660e\u767d\u65e0\u8bba\u5982\u4f55\u6700\u7ec8SQL\u90fd\u4e0d\u4f1a\u5305\u542b\u65e0\u7528\u8fde\u63a5\u64cd\u4f5c\u5373\u53ef\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u67d0\u4e2aJOIN\u5bf9\u8c61\u88abSQL DSL\u4f7f\u7528\u65f6\uff0c\u4f1a\u5c06\u5b83\u6807\u8bb0\u6210\u201c\u88ab\u4f7f\u7528\u201d\u4ee5\u9632\u6b62\u5b83\u88ab\u5ffd\u7565\u3002\u8fd9\u79cd\u6807\u8bb0\u5177\u5907\u4f20\u9012\u6027\u3002"),(0,i.kt)("p",{parentName:"li"},"\u4f8b\u5982\uff1a\u5c06",(0,i.kt)("inlineCode",{parentName:"p"},"d"),"\u6807\u8bb0\u6210\u201c\u88ab\u4f7f\u7528\u201d\uff0c\u81ea\u7136\u4e5f\u4f1a\u6807\u8bb0",(0,i.kt)("inlineCode",{parentName:"p"},"c"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"b"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"table"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u8fd9\u91cc\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"asTableEx")," ",(0,i.kt)("em",{parentName:"p"},"(\u4ee5\u53caJava\u4e0b\u7684\u5404\u79cdTableEx\u7c7b\u578b)")," \u662f\u540e\u7eed\u6587\u6863",(0,i.kt)("a",{parentName:"p",href:"./table-ex"},"\u5206\u9875\u5b89\u5168\u6027"),"\u8981\u4ecb\u7ecd\u7684\u6982\u5ff5\u3002\u8fd9\u91cc\uff0c\u8bf7\u8bfb\u8005\u5148\u5ffd\u7565\u5b83\u3002")))))),(0,i.kt)("h2",{id:"\u5e7b\u8fde\u63a5"},"\u5e7b\u8fde\u63a5"),(0,i.kt)("p",null,"\u5e7b\u8fde\u63a5\u662f\u4e00\u4e2a\u5f88\u7b80\u5355\u7684\u4f18\u5316\u6982\u5ff5\uff0c\u548c\u666e\u901a\u7684\u8fde\u63a5\u5bf9\u6bd4\u4e00\u4e0b\u5c31\u660e\u767d\u4e86\u3002"),(0,i.kt)("p",null,"\u6211\u4eec\u5148\u6765\u770b\u4e00\u4e2a\u666e\u901a\u8868\u8fde\u63a5\u7684\u4f8b\u5b50\u3002"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'BookTable book = BookTable.$;\n\nList<Book> books = sqlClient\n    .createQuery(book)\n    .where(book.store().name().eq("MANNING"))\n    .select(book)\n    .execute();\n'))),(0,i.kt)(s.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'val books = sqlClient\n    .createQuery(Book::class) {\n        where(table.store.name eq "MANNING")\n        select(table)    \n    }\n    .execute()\n')))),(0,i.kt)("p",null,"\u751f\u6210\u7684SQL\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    tb_1_.ID, \n    tb_1_.NAME, \n    tb_1_.EDITION, \n    tb_1_.PRICE, \n    tb_1_.STORE_ID \nfrom BOOK as tb_1_ \n    /* highlight-start */\n    inner join BOOK_STORE as tb_2_ \n        on tb_1_.STORE_ID = tb_2_.ID\n    /* highlight-end */     \nwhere \n    tb_2_.NAME = ?\n")),(0,i.kt)("p",null,"\u73b0\u5728\uff0c\u518d\u6765\u770b\u4e00\u4e2a\u5e7b\u8fde\u63a5\u7684\u4f8b\u5b50"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"BookTable book = BookTable.$;\n\nList<Book> books = sqlClient\n    .createQuery(book)\n    .where(\n        book\n        .store()\n        // highlight-next-line\n        .id() // \u53ea\u8bbf\u95eeid\n        .eq(2L)\n    )\n    .select(book)\n    .execute();\n"))),(0,i.kt)(s.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"val books = sqlClient\n    .createQuery(Book::class) {\n        where(\n            table\n            .store\n            // highlight-next-line\n            .id // \u53ea\u8bbf\u95eeid\n            eq 2L\n        )\n        select(table)\n    }\n    .execute()\n")))),(0,i.kt)("p",null,"\u8fd9\u6b21\uff0c\u751f\u6210\u7684SQL\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    tb_1_.ID, \n    tb_1_.NAME, \n    tb_1_.EDITION, \n    tb_1_.PRICE, \n    tb_1_.STORE_ID \nfrom BOOK as tb_1_ \n    where tb_1_.STORE_ID = ?\n")),(0,i.kt)("p",null,"\u6211\u4eec\u6ca1\u6709\u5728SQL\u4e2d\u770b\u5230\u4efb\u4f55\u8868\u8fde\u63a5\uff0c\u6211\u4eec\u53ea\u770b\u5230\u6761\u4ef6\u4e00\u4e2a\u57fa\u4e8e\u5916\u952e\u7684\u5224\u65ad\u6761\u4ef6",(0,i.kt)("inlineCode",{parentName:"p"},"tb_1_.STORE_ID = ?"),"\u3002"),(0,i.kt)("p",null,"\u539f\u56e0\uff1a\u5bf9\u4e8e\u57fa\u4e8e\u5916\u952e\u6620\u5c04\u7684\u591a\u5bf9\u4e00\u5173\u8054\u800c\u8a00\uff0c\u7236\u8868\u7684id\u5176\u5b9e\u5c31\u662f\u5b50\u8868\u81ea\u5df1\u7684\u5916\u952e\u3002"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("ol",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5bf9\u4e8e\u57fa\u4e8e\u5916\u952e\u6620\u5c04\u7684\u591a\u5bf9\u4e00\u5173\u8054\uff0c\u5728Java\u67e5\u8be2\u4ee3\u7801\u4e2d\u901a\u8fc7\u8fde\u63a5\u64cd\u4f5c\u83b7\u53d6\u4e86\u5173\u8054\u5bf9\u8c61\uff0c\u5982\u679c\u6b64\u5173\u8054\u5bf9\u8c61\u9664\u4e86id\u5b57\u6bb5\u4ee5\u5916\u6ca1\u6709\u4efb\u4f55\u7684\u5176\u5b83\u5b57\u6bb5\u88ab\u8bbf\u95ee\uff0c\u90a3\u4e48\u8be5\u8fde\u63a5\u5c06\u88ab\u89c6\u4e3a\u5e7b\u8fde\u63a5\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5e7b\u8fde\u63a5\u5c06\u4f1a\u88ab\u5ffd\u7565\uff0c\u4e0d\u4f1a\u5728\u6700\u7ec8SQL\u4e2d\u751f\u6210\u76f8\u5173\u7684JOIN\u8bed\u53e5\u3002")))),(0,i.kt)("h2",{id:"\u534a\u8fde\u63a5"},"\u534a\u8fde\u63a5"),(0,i.kt)("p",null,"\u534a\u8fde\u63a5\u662f\u4e00\u4e2a\u548c\u5e7b\u8c61\u8fde\u63a5\u7c7b\u4f3c\u7684\u6982\u5ff5\uff0c\u4f46\u7528\u4e8e\u57fa\u4e8e\u4e2d\u95f4\u8868\u7684\u5173\u8054\u3002"),(0,i.kt)("p",null,"\u6211\u4eec\u5148\u6765\u770b\u4e00\u4e2a\u57fa\u4e8e\u4e2d\u95f4\u8868\u7684\u666e\u901a\u8fde\u63a5\u3002"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'BookTable book = BookTable.$;\n\nList<Long> bookIds = sqlClient\n    .createQuery(book)\n    .where(\n        book\n            .asTableEx()\n            .authors()\n            .firstName()\n            .eq("Alex")\n    )\n    .select(book.id())\n    .distinct()\n    .execute();\n'))),(0,i.kt)(s.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'val bookIds = sqlClient\n    .createQuery(Book::class) {\n        where(\n            table\n                .asTableEx()\n                .authors\n                .firstName eq "Alex"\n        )\n        select(table.id)\n    }\n    .distinct()\n    .execute()\n')))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u8fd9\u91cc\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"asTableEx")," ",(0,i.kt)("em",{parentName:"p"},"(\u4ee5\u53caJava\u4e0b\u7684\u5404\u79cdTableEx\u7c7b\u578b)")," \u662f\u540e\u7eed\u6587\u6863",(0,i.kt)("a",{parentName:"p",href:"./table-ex"},"\u5206\u9875\u5b89\u5168\u6027"),"\u8981\u4ecb\u7ecd\u7684\u6982\u5ff5\u3002\u8fd9\u91cc\uff0c\u8bf7\u8bfb\u8005\u5148\u5ffd\u7565\u5b83\u3002")),(0,i.kt)("p",null,"\u751f\u6210\u7684SQL\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    distinct tb_1_.ID \nfrom BOOK as tb_1_ \n/* highlight-start */\ninner join BOOK_AUTHOR_MAPPING as tb_2_ \n    on tb_1_.ID = tb_2_.BOOK_ID \ninner join AUTHOR as tb_3_ on \n    tb_2_.AUTHOR_ID = tb_3_.ID\n/* highlight-end */ \nwhere tb_3_.FIRST_NAME = ?\n")),(0,i.kt)("p",null,"\u6211\u4eec\u770b\u5230\u57fa\u4e8e\u4e2d\u95f4\u8868\u7684\u8fde\u63a5\u4f1a\u4ea7\u751f\u4e24\u4e2aSQL JOIN\u5b50\u53e5"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u7b2c\u4e00\u6b65\uff1a\u8fde\u63a5\u5230\u4e2d\u95f4\u8868\n",(0,i.kt)("inlineCode",{parentName:"p"},"inner join BOOK_AUTHOR_MAPPING as tb_2_ on tb_1_.ID = tb_2_.BOOK_ID "))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u7b2c\u4e8c\u6b65\uff1a\u8fde\u63a5\u5230\u76ee\u6807\u8868\n",(0,i.kt)("inlineCode",{parentName:"p"},"inner join AUTHOR as tb_3_ on tb_2_.AUTHOR_ID = tb_3_.ID")))),(0,i.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u8ba9\u6211\u4eec\u770b\u770b\u534a\u8fde\u63a5\u7684\u4f8b\u5b50"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"BookTable book = BookTable.$;\n\nList<Long> bookIds = sqlClient\n    .createQuery(book)\n    .where(\n        book\n            .asTableEx()\n            .authors()\n            // highlight-next-line\n            .id() // \u53ea\u8bbf\u95eeid\n            .eq(2L)\n    )\n    .select(book.id())\n    .distinct()\n    .execute();\n"))),(0,i.kt)(s.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"val bookIds = sqlClient\n    .createQuery(Book::class) {\n        where(\n            (table as KNullableTableEx<Book>)\n                .authors\n                // highlight-next-line\n                .id // \u53ea\u8bbf\u95eeid \n                eq 2L\n        )\n        select(table.id)\n    }\n    .distinct()\n    .execute()\n")))),(0,i.kt)("p",null,"\u8fd9\u6b21\uff0c\u751f\u6210\u7684SQL\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    distinct tb_1_.ID \nfrom BOOK as tb_1_ \n/* highlight-start */\ninner join BOOK_AUTHOR_MAPPING as tb_2_ \n    on tb_1_.ID = tb_2_.BOOK_ID \n/* highlight-end */\nwhere tb_2_.AUTHOR_ID = ?\n")),(0,i.kt)("p",null,"\u8fd9\u4e00\u6b21\uff0c\u6211\u4eec\u53ea\u770b\u5230\u4e00\u4e2aSQL JOIN\u5b50\u53e5\uff0c\u800c\u4e0d\u662f\u4e24\u4e2a\u3002"),(0,i.kt)("p",null,"\u539f\u56e0\uff1a\u76ee\u6807\u8868\u7684\u4e3b\u952e\uff0c\u5176\u5b9e\u5c31\u662f\u4e2d\u95f4\u8868\u5230\u76ee\u6807\u8868\u7684\u5916\u952e\u3002"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("ol",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5bf9\u4e8e\u57fa\u4e8e\u4e2d\u95f4\u8868\u6620\u5c04\u7684\u5173\u8054\uff0c\u5728Java\u67e5\u8be2\u4ee3\u7801\u4e2d\u901a\u8fc7\u8fde\u63a5\u64cd\u4f5c\u83b7\u53d6\u4e86\u5173\u8054\u5bf9\u8c61\uff0c\u5982\u679c\u6b64\u5173\u8054\u5bf9\u8c61\u9664\u4e86id\u5b57\u6bb5\u4ee5\u5916\u6ca1\u6709\u4efb\u4f55\u7684\u5176\u5b83\u5b57\u6bb5\u88ab\u8bbf\u95ee\uff0c\u90a3\u4e48\u8be5\u8fde\u63a5\u5c06\u88ab\u89c6\u4e3a\u534a\u8fde\u63a5\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5728\u6700\u7ec8\u751f\u6210\u7684SQL\u4e2d\uff0c\u534a\u8fde\u63a5\u4ec5\u4f7f\u7528\u4e00\u6761JOIN\u8bed\u53e5\u8fde\u63a5\u5230\u4e2d\u95f4\u8868\uff0c\u4e0d\u4f1a\u8fdb\u4e00\u6b65\u4f7f\u7528\u7b2c\u4e8c\u6761JOIN\u8bed\u53e5\u8fde\u63a5\u5230\u76ee\u6807\u8868\u3002")))))}I.isMDXComponent=!0}}]);