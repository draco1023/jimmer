"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[285],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(67294),a=n(34334),i="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,o),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(83117),a=n(67294),i=n(34334),o=n(72389),l=n(67392),s=n(7094),c=n(12466),d="tabList__CuJ",u="tabItem_LNqP";function p(e){var t,n,o=e.lazy,p=e.block,m=e.defaultValue,f=e.values,h=e.groupId,v=e.className,g=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=f?f:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,l.l)(b,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var T=(0,s.U)(),N=T.tabGroupChoices,I=T.setTabGroupChoices,D=(0,a.useState)(y),E=D[0],C=D[1],w=[],O=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var j=N[h];null!=j&&j!==E&&b.some((function(e){return e.value===j}))&&C(j)}var S=function(e){var t=e.currentTarget,n=w.indexOf(t),r=b[n].value;r!==E&&(O(t),C(r),null!=h&&I(h,String(r)))},L=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=w.indexOf(e.currentTarget)+1;n=null!=(r=w[a])?r:w[0];break;case"ArrowLeft":var i,o=w.indexOf(e.currentTarget)-1;n=null!=(i=w[o])?i:w[w.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",d)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},v)},b.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return w.push(e)},onKeyDown:L,onFocus:S,onClick:S},o,{className:(0,i.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(g.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function m(e){var t=(0,o.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},71670:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return m}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=n(65488),l=n(85162),s=["components"],c={sidebar_position:7,title:"Draft Interceptor"},d=void 0,u={unversionedId:"jimmer-sql/mutation/interceptor",id:"jimmer-sql/mutation/interceptor",title:"Draft Interceptor",description:"The Draft interceptor works with the Save command to adjust the data before the object is saved.",source:"@site/docs/jimmer-sql/mutation/interceptor.mdx",sourceDirName:"jimmer-sql/mutation",slug:"/jimmer-sql/mutation/interceptor",permalink:"/jimmer/docs/jimmer-sql/mutation/interceptor",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/jimmer-sql/mutation/interceptor.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Draft Interceptor"},sidebar:"tutorialSidebar",previous:{title:"Mutate middle table",permalink:"/jimmer/docs/jimmer-sql/mutation/association"},next:{title:"Advanced",permalink:"/jimmer/docs/jimmer-sql/advanced/"}},p={},m=[{value:"The scope of this article",id:"the-scope-of-this-article",level:2},{value:"Define the intercepted data format",id:"define-the-intercepted-data-format",level:2},{value:"Define the interceptor",id:"define-the-interceptor",level:2},{value:"Configure the interceptor",id:"configure-the-interceptor",level:2},{value:"Usage",id:"usage",level:2}],f={toc:m};function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Draft interceptor works with the ",(0,i.kt)("a",{parentName:"p",href:"./save-command"},"Save command")," to adjust the data before the object is saved."),(0,i.kt)("h2",{id:"the-scope-of-this-article"},"The scope of this article"),(0,i.kt)("p",null,"Jimmer supports ",(0,i.kt)("a",{parentName:"p",href:"../advanced/trigger"},"trigger"),", which is divided into binlog trigger and transaction trigger."),(0,i.kt)("p",null,"Using transaction triggers will cause jimmer's modification operations to generate more and more complete queries to simulate triggers."),(0,i.kt)("p",null,"Several scenarios have been discussed in this article, and the generated SQL will be discussed for each scenario, all on the premise that transaction triggers are not used."),(0,i.kt)("h2",{id:"define-the-intercepted-data-format"},"Define the intercepted data format"),(0,i.kt)("p",null,"If most entity tables have ",(0,i.kt)("inlineCode",{parentName:"p"},"created_time"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"modified_time"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"created_by")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"modified_by")," fields, developer can provide the following superclass."),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// highlight-next-line\n@MappedSuperclass\npublic interface BaseEntity {\n\n    LocalDateTime createdTime();\n\n    LocalDateTime modifiedTime();\n\n    @ManyToOne\n    @OnDissociate(DissociateAction.SET_NULL)\n    User creator();\n\n    @ManyToOne\n    @OnDissociate(DissociateAction.SET_NULL)\n    User editor();\n}\n"))),(0,i.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"// highlight-next-line\n@MappedSuperclass\ninterface BaseEntity {\n\n    val createdTime: LocalDateTime\n\n    val modifiedTime: LocalDateTime\n\n    @ManyToOne\n    @OnDissociate(DissociateAction.SET_NULL)\n    val creator: User\n\n    @ManyToOne\n    @OnDissociate(DissociateAction.SET_NULL)\n    val editor: User\n}\n")))),(0,i.kt)("p",null,"All entities that need these fields can derive from this superclass."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@OnDissociate(DissociateAction.SET_NULL)")," here is to prevent the deletion of related ",(0,i.kt)("inlineCode",{parentName:"p"},"User")," data from being blocked due to these two foreign keys. These two foreign keys are automatically cleared when the related ",(0,i.kt)("inlineCode",{parentName:"p"},"User")," is deleted.")),(0,i.kt)("h2",{id:"define-the-interceptor"},"Define the interceptor"),(0,i.kt)("p",null,"Suppose there is a service class called ",(0,i.kt)("inlineCode",{parentName:"p"},"UserService")," whose java method ",(0,i.kt)("inlineCode",{parentName:"p"},"getCurrentUserId()")," or kotlin property ",(0,i.kt)("inlineCode",{parentName:"p"},"currentUserId")," returns the id of the currently logged in user."),(0,i.kt)("p",null,"The interceptor must implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"org.babyfish.jimmer.sql.DraftInterceptor")," interface. If using Spring hosting, the code is as follows:"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@Component\npublic class BaseEntityDraftInterceptor implements DraftInterceptor<BaseEntityDraft> {\n\n    private final UserService userService;\n\n    public BaseEntityDraftInterceptor(UserService userService) {\n        this.userService = userService;\n    }\n\n    @Override\n    public void beforeSave(BaseEntityDraft draft, boolean isNew) {\n        if (!ImmutableObjects.isLoaded(draft, BaseEntityProps.MODIFIED_TIME)) {\n            draft.setModifiedTime(LocalDateTime.now());\n        }\n        if (!ImmutableObjects.isLoaded(draft, BaseEntityProps.EDITOR)) {\n            draft.setEditor(editor - > {\n                editor.setId(userService.getCurrentUserId());\n            });\n        }\n        if (isNew) {\n            if (!ImmutableObjects.isLoaded(draft, BaseEntityProps.CREATED_TIME)) {\n                draft.setCreatedTime(LocalDateTime.now());\n            }\n            if (!ImmutableObjects.isLoaded(draft, BaseEntityProps.CREATOR)) {\n                draft.setCreator(creator - > {\n                    creator.setId(userService.getCurrentUserId());\n                });\n            }   \n        }\n    }\n}\n"))),(0,i.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Component\nclass BaseEntityDraftInterceptor(\n    private val userService: UserService\n) : DraftInterceptor<BaseEntityDraft> {\n\n    override fun beforeSave(draft: BaseEntityDraft, isNew: Boolean) {\n        if (!isLoaded(draft, BaseEntity::modifiedTime)) {\n            draft.modifiedTime = LocalDateTime.now()\n        }\n        if (!isLoaded(draft, BaseEntity::editor)) {\n            draft.editor().apply {\n                id = userService.currentUserId\n            }\n        }\n        if (isNew) {\n            if (!isLoaded(draft, BaseEntity::createdTime)) {\n                draft.createdTime = LocalDateTime.now()\n            }\n            if (!isLoaded(draft, BaseEntity::creator)) {\n                draft.creator().apply {\n                    id = userService.currentUserId\n                }\n            }\n        }\n    }\n}\n")))),(0,i.kt)("p",null,"Among them, the ",(0,i.kt)("inlineCode",{parentName:"p"},"beforeSave")," method is called before an object is saved, and the user can make final adjustments to the data to be saved."),(0,i.kt)("p",null,"If the parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"isNew")," is true, it means that the later operation is an insert operation; otherwise, it is an update operation."),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Please do not modify properties decorated with ",(0,i.kt)("inlineCode",{parentName:"p"},"@Id")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"@Key")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"beforeSave")," method.")),(0,i.kt)("h2",{id:"configure-the-interceptor"},"Configure the interceptor"),(0,i.kt)("p",null,"Hook the interceptor on the SqlClient object to take effect"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@Bean\npublic JSqlClient sqlClient(\n    List<DraftInterceptor<?>> interceptors,\n    ...omitting other parameters...\n) {\n    return JSqlClient\n        .newBuilder()\n        // highlight-next-line\n        .addDraftinterceptors(interceptors)\n        ...omit other configuration...\n        .build();\n}\n"))),(0,i.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Bean\nfun sqlClient(\n    interceptors: List<DraftInterceptor<?>>,\n    ...omitting other parameters...\n): KSqlClient =\n    newKSqlClient {\n        // highlight-next-line\n        addDraftinterceptors(interceptors)\n        ...omit other configuration...\n    }\n")))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Although only one ",(0,i.kt)("inlineCode",{parentName:"p"},"DraftInterceptor")," is demonstrated in this article, there may be many in actual projects."),(0,i.kt)("p",{parentName:"admonition"},"So, here we use collections and let Spring inject all ",(0,i.kt)("inlineCode",{parentName:"p"},"DraftInterceptor")," objects.")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"Book")," inherits ",(0,i.kt)("inlineCode",{parentName:"p"},"BaseEntity"),", you can use it like this"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Book book = BookDraft.$.produce(draft -> {\n    draft.setName("SQL in Action");\n    draft.setEdition(1);\n    draft.setPrice(new BigDecimal("59"));\n    draft.applyStore(store -> store.setId(2L));\n});\nsqlClient.getEntities().save(book);\n'))),(0,i.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'val book = new(Book::class).by {\n    name = "SQL in Action"\n    edition = 1\n    price = BigDecimal("59")\n    store().id = 2\n}\nsqlClient.entities.save(book)\n')))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If the above save command eventually results in an insert operation, the generated SQL is as follows"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"insert into BOOK(\n    /* highlight-start */\n    CREATED_TIME,\n    MODIFIED_TIME,\n    CREATOR_ID,\n    EDITOR_ID,\n    /* highlight-end */\n    NAME, \n    EDITION, \n    PRICE, \n    STORE_ID\n) values(\n    /* highlight-next-line */\n    ?, ?, ?, ?,\n    ?, ?, ?, ?\n)\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If the above save command eventually results in an update operation, the generated SQL is as follows"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"update BOOK set \n    /* highlight-start */\n    MODIFIED_TIME = ?,\n    EDITOR_ID = ?,\n    /* highlight-end */\n    PRICE = ?, \n    STORE_ID = ? \nwhere ID = ?\n")))),(0,i.kt)("p",null,"We see that although the user does not specify values for the properties ",(0,i.kt)("inlineCode",{parentName:"p"},"createdTime"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"modifiedTime"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"creator"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"editor")," of the saved object, ",(0,i.kt)("inlineCode",{parentName:"p"},"DraftIntercetor")," sets values for these missing properties."))}h.isMDXComponent=!0}}]);