"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[9840],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return s}});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=a.createContext({}),m=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=m(e.components);return a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=m(t),s=l,k=c["".concat(u,".").concat(s)]||c[s]||d[s]||r;return t?a.createElement(k,i(i({ref:n},p),{},{components:t})):a.createElement(k,i({ref:n},p))}));function s(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=c;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var m=2;m<r;m++)i[m]=t[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},85162:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(67294),l=t(34334),r="tabItem_Ymn6";function i(e){var n=e.children,t=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:t},n)}},65488:function(e,n,t){t.d(n,{Z:function(){return s}});var a=t(83117),l=t(67294),r=t(34334),i=t(72389),o=t(67392),u=t(7094),m=t(12466),p="tabList__CuJ",d="tabItem_LNqP";function c(e){var n,t,i=e.lazy,c=e.block,s=e.defaultValue,k=e.values,g=e.groupId,b=e.className,v=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=k?k:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),h=(0,o.l)(N,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var _=null===s?s:null!=(n=null!=s?s:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:v[0].props.value;if(null!==_&&!N.some((function(e){return e.value===_})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+_+'" but none of its children has the corresponding value. Available values are: '+N.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var f=(0,u.U)(),T=f.tabGroupChoices,y=f.setTabGroupChoices,I=(0,l.useState)(_),O=I[0],E=I[1],x=[],j=(0,m.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var C=T[g];null!=C&&C!==O&&N.some((function(e){return e.value===C}))&&E(C)}var P=function(e){var n=e.currentTarget,t=x.indexOf(n),a=N[t].value;a!==O&&(j(n),E(a),null!=g&&y(g,String(a)))},D=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a,l=x.indexOf(e.currentTarget)+1;t=null!=(a=x[l])?a:x[0];break;case"ArrowLeft":var r,i=x.indexOf(e.currentTarget)-1;t=null!=(r=x[i])?r:x[x.length-1]}null==(n=t)||n.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",p)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":c},b)},N.map((function(e){var n=e.value,t=e.label,i=e.attributes;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===n?0:-1,"aria-selected":O===n,key:n,ref:function(e){return x.push(e)},onKeyDown:D,onFocus:P,onClick:P},i,{className:(0,r.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":O===n})}),null!=t?t:n)}))),i?(0,l.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},v.map((function(e,n){return(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==O})}))))}function s(e){var n=(0,i.Z)();return l.createElement(c,(0,a.Z)({key:String(n)},e))}},594:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return m},metadata:function(){return d},toc:function(){return s}});var a=t(83117),l=t(80102),r=(t(67294),t(3905)),i=t(65488),o=t(85162),u=["components"],m={sidebar_position:1,title:"\u590d\u5408\u5b57\u6bb5"},p=void 0,d={unversionedId:"team-work/mapping/advanced/embedded",id:"team-work/mapping/advanced/embedded",title:"\u590d\u5408\u5b57\u6bb5",description:"\u590d\u5408\u5b57\u6bb5\u5c06\u6765\u6570\u636e\u5e93\u7684\u591a\u4e2a\u5217\u5408\u5e76\u4e3a\u4e00\u4e2a\u6574\u4f53\uff0c\u5c06\u5176\u6620\u5c04\u4e3a\u4e00\u4e2a\u975e\u5b9e\u4f53\u7684\u81ea\u5b9a\u4e49\u7c7b\u578b\uff0c\u7136\u540e\u5229\u7528\u6b64\u81ea\u5b9a\u4e49\u5c5e\u6027\u4e3a\u5b9e\u4f53\u58f0\u660e\u4e00\u4e2a\u5c5e\u6027\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/team-work/mapping/advanced/embedded.mdx",sourceDirName:"team-work/mapping/advanced",slug:"/team-work/mapping/advanced/embedded",permalink:"/jimmer/zh/docs/team-work/mapping/advanced/embedded",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/team-work/mapping/advanced/embedded.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u590d\u5408\u5b57\u6bb5"},sidebar:"tutorialSidebar",previous:{title:"\u8fdb\u9636\u6620\u5c04",permalink:"/jimmer/zh/docs/team-work/mapping/advanced/"},next:{title:"MappedSuperclass",permalink:"/jimmer/zh/docs/team-work/mapping/advanced/mapped-super-class"}},c={},s=[{value:"\u4f5c\u4e3a\u666e\u901a\u5b57\u6bb5",id:"\u4f5c\u4e3a\u666e\u901a\u5b57\u6bb5",level:2},{value:"\u7b80\u5355\u4f7f\u7528",id:"\u7b80\u5355\u4f7f\u7528",level:3},{value:"\u8986\u76d6\u5217\u540d",id:"\u8986\u76d6\u5217\u540d",level:3},{value:"\u4f5c\u4e3a\u4e3b\u5916\u952e",id:"\u4f5c\u4e3a\u4e3b\u5916\u952e",level:2},{value:"\u4f5c\u4e3a\u4e3b\u952e",id:"\u4f5c\u4e3a\u4e3b\u952e",level:3},{value:"\u88ab@JoinColumn\u5f15\u7528",id:"\u88abjoincolumn\u5f15\u7528",level:3},{value:"\u88ab@JoinTable\u5f15\u7528",id:"\u88abjointable\u5f15\u7528",level:3}],k={toc:s};function g(e){var n=e.components,t=(0,l.Z)(e,u);return(0,r.kt)("wrapper",(0,a.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u590d\u5408\u5b57\u6bb5\u5c06\u6765\u6570\u636e\u5e93\u7684\u591a\u4e2a\u5217\u5408\u5e76\u4e3a\u4e00\u4e2a\u6574\u4f53\uff0c\u5c06\u5176\u6620\u5c04\u4e3a\u4e00\u4e2a\u975e\u5b9e\u4f53\u7684\u81ea\u5b9a\u4e49\u7c7b\u578b\uff0c\u7136\u540e\u5229\u7528\u6b64\u81ea\u5b9a\u4e49\u5c5e\u6027\u4e3a\u5b9e\u4f53\u58f0\u660e\u4e00\u4e2a\u5c5e\u6027\u3002"),(0,r.kt)("h2",{id:"\u4f5c\u4e3a\u666e\u901a\u5b57\u6bb5"},"\u4f5c\u4e3a\u666e\u901a\u5b57\u6bb5"),(0,r.kt)("h3",{id:"\u7b80\u5355\u4f7f\u7528"},"\u7b80\u5355\u4f7f\u7528"),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u5b9a\u4e49\u4e00\u4e2a\u590d\u5408\u7c7b\u578b"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="FullName.java"',title:'"FullName.java"'},"// highlight-next-line\n@Embeddable\npublic interface FullName {\n\n    String firstName();\n\n    String lastName();\n}\n"))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="FullName.kt"',title:'"FullName.kt"'},"// highlight-next-line\n@Embeddable\ninterface FullName {\n\n    val firstName: String\n    \n    val lastName: String\n}\n")))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"@Embeddable\u6240\u5b9a\u4e49\u7684\u7c7b\u578b\u4e0d\u662f\u5b9e\u4f53\u7c7b\u578b\uff0c\u5176\u4e2d\u4e0d\u5f97\u58f0\u660eid\u5c5e\u6027\u548c\u5173\u8054\u5c5e\u6027\u3002\u5426\u5219\uff0c\u4f1a\u5bfc\u81f4\u7f16\u8bd1\u9519\u8bef\u3002")),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u5c31\u53ef\u4ee5\u5728\u53e6\u5916\u4e00\u4e2a\u5b9e\u4f53\u4e2d\u4f7f\u7528\u5b83"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Author.java"',title:'"Author.java"'},"@Entity\npublic interface Author {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    long id();\n\n    // highlight-next-line\n    FullName name();\n}\n"))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Author.kt"',title:'"Author.kt"'},"@Entity\ninterface Author {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    val id: Long\n\n    // highlight-next-line\n    val name: FullName\n}\n")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u548cJPA/Hibernate\u4e0d\u540c\uff0c\u5728\u5b9e\u4f53\u4e2d\u4f7f\u7528\u590d\u5408\u7c7b\u578b\u65f6\u65e0\u9700\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"@Embedded"),"\u3002\u4e8b\u5b9e\u4e0a\uff0cJimmer\u4e5f\u4e0d\u63d0\u4f9b",(0,r.kt)("inlineCode",{parentName:"p"},"@Embedded"),"\u6ce8\u89e3\u3002")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Author"),"\u5bf9\u5e94\u7684\u8868\u7ed3\u6784\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"create table author(\n    id bigint unsigned not null auto_increment primary key,\n    /* highlight-next-line */\n    first_name varchar(20) not null,\n    /* highlight-next-line */\n    last_name varchar(20) not null\n) engine=innodb;\n")),(0,r.kt)("h3",{id:"\u8986\u76d6\u5217\u540d"},"\u8986\u76d6\u5217\u540d"),(0,r.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"org.babyfish.jimmer.sql.PropOverride"),"\u8986\u76d6\u590d\u5408\u7c7b\u578b\u5b57\u6bb5\u7684\u5217\u540d"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5b9a\u4e49\u590d\u5408\u7c7b\u578b",(0,r.kt)("inlineCode",{parentName:"p"},"Point")),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Point.java"',title:'"Point.java"'},"@Embeddable\npublic interface Point {\n\n    int x();\n\n    int y();\n}\n"))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Point.kt"',title:'"Point.kt"'},"@Embeddable\ninterface Point {\n\n    val x: Int\n    \n    val y: Int\n}\n"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5b9a\u4e49\u590d\u5408\u7c7b\u578b",(0,r.kt)("inlineCode",{parentName:"p"},"Rect"),"\uff0c\u8986\u76d6",(0,r.kt)("inlineCode",{parentName:"p"},"Point"),"\u7c7b\u578b\u7684\u5217\u540d"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Rect.java"',title:'"Rect.java"'},'@Embeddable\npublic interface Rect {\n\n    // highlight-next-line\n    @PropOverride(prop = "x", columnName = "`LEFT`")\n    // highlight-next-line\n    @PropOverride(prop = "y", columnName = "`TOP`")\n    Point leftTop();\n\n    // highlight-next-line\n    @PropOverride(prop = "x", columnName = "`RIGHT`")\n    // highlight-next-line\n    @PropOverride(prop = "y", columnName = "BOTTOM")\n    Point rightBottom();\n}\n'))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Rect.kt"',title:'"Rect.kt"'},'@Embeddable\ninterface Rect {\n\n    // highlight-next-line\n    @PropOverride(prop = "x", columnName = "`LEFT`")\n    // highlight-next-line\n    @PropOverride(prop = "y", columnName = "`TOP`")\n    val leftTop: Point\n\n    // highlight-next-line\n    @PropOverride(prop = "x", columnName = "`RIGHT`")\n    // highlight-next-line\n    @PropOverride(prop = "y", columnName = "BOTTOM")\n    val rightBottom: Point\n}\n'))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5b9a\u4e49\u5b9e\u4f53\u7c7b\u578b",(0,r.kt)("inlineCode",{parentName:"p"},"Transition"),"\uff0c\u8986\u76d6",(0,r.kt)("inlineCode",{parentName:"p"},"Rect"),"\u7c7b\u578b\u7684\u5217\u540d"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Transition.java"',title:'"Transition.java"'},'@Entity\npublic interface Transition {\n\n    @Id\n    long id();\n\n    int millis();\n\n    Rect source();\n\n    // highlight-start\n    @PropOverride(prop = "leftTop.x", columnName = "TARGET_LEFT")\n    @PropOverride(prop = "leftTop.y", columnName = "TARGET_TOP")\n    @PropOverride(prop = "rightBottom.x", columnName = "TARGET_RIGHT")\n    @PropOverride(prop = "rightBottom.y", columnName = "TARGET_BOTTOM")\n    // highlight-end\n    Rect target();\n}\n'))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Transition.kt"',title:'"Transition.kt"'},'@Entity\ninterface Transition {\n\n    @Id\n    val id: Long\n\n    val millis: Int\n\n    val source: Rect\n\n    // highlight-start\n    @PropOverride(prop = "leftTop.x", columnName = "TARGET_LEFT")\n    @PropOverride(prop = "leftTop.y", columnName = "TARGET_TOP")\n    @PropOverride(prop = "rightBottom.x", columnName = "TARGET_RIGHT")\n    @PropOverride(prop = "rightBottom.y", columnName = "TARGET_BOTTOM")\n    // highlight-end\n    val target: Rect\n}\n')))))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Transition"),"\u5bf9\u5e94\u7684\u8868\u7ed3\u6784\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"create table transition(\n    id bigint unsigned not null auto_increment primary key,\n    millis int not null,\n    `LEFT` int not null,\n    `TOP` int not null,\n    `RIGHT` int not null,\n    bottom int not null,\n    target_left int not null,\n    target_top int not null,\n    target_right int not null,\n    target_bottom int not null\n) engine=innodb;\n")),(0,r.kt)("h2",{id:"\u4f5c\u4e3a\u4e3b\u5916\u952e"},"\u4f5c\u4e3a\u4e3b\u5916\u952e"),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"\u7528\u590d\u5408\u7c7b\u578b\u4f5c\u4e3a\u4e3b\u5916\u952e\uff0c\u5373\uff0c\u4e3b\u952e\u548c\u5916\u952e\u90fd\u7531\u591a\u4e2a\u5217\u7ec4\u5408\u800c\u6210\uff0c\u9664\u4e86\u8ba9\u7cfb\u7edf\u53d8\u5f97\u590d\u6742\u5916\uff0c\u6ca1\u6709\u4ec0\u4e48\u597d\u5904\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u56e0\u6b64\uff0c\u9664\u975e\u5fc5\u987b\u517c\u5bb9\u9057\u7559\u7cfb\u7edf\u4e2d\u5df2\u6709\u7684\u6570\u636e\u5e93\u8bbe\u8ba1\uff0c\u7cfb\u7edf\u5e94\u8be5\u907f\u514d\u5982\u6b64\u4f7f\u7528\uff0c\u4fdd\u8bc1\u4e3b\u5916\u952e\u7684\u7b80\u5355\u6027\u3002")),(0,r.kt)("p",null,"\u8ba9\u6211\u4eec\u5148\u5b9a\u4e49\u4e00\u4e2a\u590d\u5408\u7c7b\u578b"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="UniqueId.java"',title:'"UniqueId.java"'},'// highlight-next-line\n@Embeddable\npublic interface UniqueId {\n\n    @columnName("UNIQUE_ID_DAY_NO")\n    int dayNo();\n\n    @columnName("UNIQUE_ID_SEQ_NO")\n    int sequenceNo();\n}\n'))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="UniqueId.kt"',title:'"UniqueId.kt"'},'// highlight-next-line\n@Embeddable\ninterface UniqueId {\n\n    @columnName("UNIQUE_ID_DAY_NO")\n    val dayNo: Int\n    \n    @columnName("UNIQUE_ID_SEQ_NO")\n    val sequenceNo: Int\n}\n')))),(0,r.kt)("h3",{id:"\u4f5c\u4e3a\u4e3b\u952e"},"\u4f5c\u4e3a\u4e3b\u952e"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},"@Entity\npublic interface Book {\n\n    @Id\n    UniqueId id();\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n"))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},"@Entity\ninterface Book {\n\n    @Id\n    val id: UniqueId\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n")))),(0,r.kt)("p",null,"\u7531\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"Book.id"),"\u672a\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"@PropOverride"),"\u5bf9",(0,r.kt)("inlineCode",{parentName:"p"},"UniqueId"),"\u7c7b\u578b\u4e2d\u5217\u540d\u914d\u7f6e\u8fdb\u884c\u8986\u76d6\uff0c\u6240\u4ee5\u91c7\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"UniqueId"),"\u4e2d\u914d\u7f6e\u7684\u5217\u540d\uff0c\u5bf9\u5e94\u7684DDL\u4e3a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"create table book(\n    unique_id_day_no int not null,\n    unique_id_seq_no int not null,\n    ...\u7701\u7565\u5176\u4ed6\u5b57\u6bb5...\n) engine=innodb;\n\nalter table book\n    add constraint pk_book\n        primary key(unique_id_day_no, unique_id_seq_no);\n")),(0,r.kt)("h3",{id:"\u88abjoincolumn\u5f15\u7528"},"\u88ab@JoinColumn\u5f15\u7528"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Chapter.java"',title:'"Chapter.java"'},'@Entity\npublic interface Chapter {\n\n    @ManyToOne\n    @JoinColumn(\n        name = "BOOK_ID_DAY_NO", \n        referencedColumnName = "UNIQUE_ID_DAY_NO"\n    )\n    @JoinColumn(\n        name = "BOOK_ID_SEQ_NO", \n        referencedColumnName = "UNIQUE_ID_SEQ_NO"\n    )\n    Book book();\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n'))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Chapter.kt"',title:'"Chapter.kt"'},'@Entity\ninterface Chapter {\n\n    @ManyToOne\n    @JoinColumn(\n        name = "BOOK_ID_DAY_NO", \n        referencedColumnName = "UNIQUE_ID_DAY_NO"\n    )\n    @JoinColumn(\n        name = "BOOK_ID_SEQ_NO", \n        referencedColumnName = "UNIQUE_ID_SEQ_NO"\n    )\n    val book: Book\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n')))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u548c\u6211\u4eec\u4e4b\u524d\u8bb2\u89e3\u8fc7\u7684\u6240\u6709\u4f8b\u5b50\u4e0d\u540c\uff0c\u8fd9\u91cc@JoinColumn\u6ce8\u89e3\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"referencedColumnName"),"\u88ab\u6307\u5b9a\u4e86\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u5f53\u5916\u952e\u7531\u591a\u5217\u6784\u6210\u65f6\uff0c\u5c31\u9700\u8981\u4f7f\u7528\u591a\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"@JoinColumn"),"\u6ce8\u89e3\uff0c\u5176\u4e2d\uff0c\u6bcf\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"@JoinColumn"),"\u5fc5\u987b\u6307\u5b9a",(0,r.kt)("inlineCode",{parentName:"p"},"referencedColumnName"),"\u3002")),(0,r.kt)("p",null,"\u5982\u679c\u5916\u952e\u662f\u771f\u7684\uff0c\u5bf9\u5e94\u7684\u7ea6\u675f\u4e3a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"alter table chapter\n    add constraint fk_chapter__book\n        foreign key(\n            book_id_day_no,\n            book_id_seq_id\n        ) references book(\n            unique_id_day_no,\n            unique_id_seq_no\n        );\n")),(0,r.kt)("h3",{id:"\u88abjointable\u5f15\u7528"},"\u88ab@JoinTable\u5f15\u7528"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},'@Entity\npublic interface Book {\n\n    @Id\n    UniqueId id();\n\n    @ManyToMany\n    @JoinTable(\n        joinColumns = {\n            @JoinColumn(\n                name = "BOOK_ID_DAY_NO", \n                referencedColumnName = "UNIQUE_ID_DAY_NO"\n            )\n            @JoinColumn(\n                name = "BOOK_ID_SEQ_NO", \n                referencedColumnName = "UNIQUE_ID_SEQ_NO"\n            )\n        }\n    )\n    // highlight-next-line\n    List<Author> authors();\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n'))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},'@Entity\ninterface Book {\n\n    @Id\n    val id: UniqueId\n\n    @ManyToMany\n    @JoinTable(\n        joinColumns = {\n            @JoinColumn(\n                name = "BOOK_ID_DAY_NO", \n                referencedColumnName = "UNIQUE_ID_DAY_NO"\n            )\n            @JoinColumn(\n                name = "BOOK_ID_SEQ_NO", \n                referencedColumnName = "UNIQUE_ID_SEQ_NO"\n            )\n        }\n    )\n    // highlight-next-line\n    val authors: List<Author>\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n')))),(0,r.kt)("p",null,"\u5982\u679c\u5916\u952e\u662f\u771f\u7684\uff0c\u4e2d\u95f4\u8868\u7684DDL\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"create table book_author_mapping(\n    book_id_day_no int not null,\n    book_id_seq_id int not null,\n    author_id bigint not null\n) engine=innodb;\n\nalter table book_author_mapping\n    add constraint pk_book_author_mapping\n        primary key(\n            book_id_day_no, \n            book_id_seq_id, \n            author_id\n        );\n\nalter table book_author_mapping\n    add constraint fk_book_author_mapping__book\n        foreign key(\n            book_id_day_no,\n            book_id_seq_id\n        ) references book(\n            unique_id_day_no,\n            unique_id_seq_no\n        );\n\nalter table book_author_mapping\n    add constraint fk_book_author_mapping__author\n        foreign key(author_id)\n            references author(id);\n")))}g.isMDXComponent=!0}}]);