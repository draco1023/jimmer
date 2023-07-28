"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[5569],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(n),u=r,f=m["".concat(s,".").concat(u)]||m[u]||p[u]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(34334);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(83117),r=n(67294),i=n(34334),o=n(72389),l=n(67392),s=n(7094),d=n(12466);const c="tabList__CuJ",p="tabItem_LNqP";function m(e){var t;const{lazy:n,block:o,defaultValue:m,values:u,groupId:f,className:h}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=u??v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,l.l)(b,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===m?m:m??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==k&&!b.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:T}=(0,s.U)(),[N,I]=(0,r.useState)(k),D=[],{blockElementScrollPositionUntilNextRender:E}=(0,d.o5)();if(null!=f){const e=y[f];null!=e&&e!==N&&b.some((t=>t.value===e))&&I(e)}const C=e=>{const t=e.currentTarget,n=D.indexOf(t),a=b[n].value;a!==N&&(E(t),I(a),null!=f&&T(f,String(a)))},w=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=D.indexOf(e.currentTarget)+1;n=D[t]??D[0];break}case"ArrowLeft":{const t=D.indexOf(e.currentTarget)-1;n=D[t]??D[D.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},h)},b.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>D.push(e),onKeyDown:w,onFocus:C,onClick:C},o,{className:(0,i.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,r.cloneElement)(v.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function u(e){const t=(0,o.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},4780:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var a=n(83117),r=(n(67294),n(3905)),i=n(65488),o=n(85162);const l={sidebar_position:7,title:"Draft Interceptor"},s=void 0,d={unversionedId:"old-en/jimmer-sql/mutation/interceptor",id:"old-en/jimmer-sql/mutation/interceptor",title:"Draft Interceptor",description:"The Draft interceptor works with the Save command to adjust the data before the object is saved.",source:"@site/docs/old-en/jimmer-sql/mutation/interceptor.mdx",sourceDirName:"old-en/jimmer-sql/mutation",slug:"/old-en/jimmer-sql/mutation/interceptor",permalink:"/jimmer/zh/docs/old-en/jimmer-sql/mutation/interceptor",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/old-en/jimmer-sql/mutation/interceptor.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Draft Interceptor"},sidebar:"tutorialSidebar",previous:{title:"Mutate middle table",permalink:"/jimmer/zh/docs/old-en/jimmer-sql/mutation/association"},next:{title:"Advanced",permalink:"/jimmer/zh/docs/old-en/jimmer-sql/advanced/"}},c={},p=[{value:"The scope of this article",id:"the-scope-of-this-article",level:2},{value:"Define the intercepted data format",id:"define-the-intercepted-data-format",level:2},{value:"Define the interceptor",id:"define-the-interceptor",level:2},{value:"Configure the interceptor",id:"configure-the-interceptor",level:2},{value:"Usage",id:"usage",level:2}],m={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Draft interceptor works with the ",(0,r.kt)("a",{parentName:"p",href:"./save-command"},"Save command")," to adjust the data before the object is saved."),(0,r.kt)("h2",{id:"the-scope-of-this-article"},"The scope of this article"),(0,r.kt)("p",null,"Jimmer supports ",(0,r.kt)("a",{parentName:"p",href:"../advanced/trigger"},"trigger"),", which is divided into binlog trigger and transaction trigger."),(0,r.kt)("p",null,"Using transaction triggers will cause jimmer's modification operations to generate more and more complete queries to simulate triggers."),(0,r.kt)("p",null,"Several scenarios have been discussed in this article, and the generated SQL will be discussed for each scenario, all on the premise that transaction triggers are not used."),(0,r.kt)("h2",{id:"define-the-intercepted-data-format"},"Define the intercepted data format"),(0,r.kt)("p",null,"If most entity tables have ",(0,r.kt)("inlineCode",{parentName:"p"},"created_time"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"modified_time"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"created_by")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"modified_by")," fields, developer can provide the following superclass."),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// highlight-next-line\n@MappedSuperclass\npublic interface BaseEntity {\n\n    LocalDateTime createdTime();\n\n    LocalDateTime modifiedTime();\n\n    @ManyToOne\n    @OnDissociate(DissociateAction.SET_NULL)\n    User creator();\n\n    @ManyToOne\n    @OnDissociate(DissociateAction.SET_NULL)\n    User editor();\n}\n"))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"// highlight-next-line\n@MappedSuperclass\ninterface BaseEntity {\n\n    val createdTime: LocalDateTime\n\n    val modifiedTime: LocalDateTime\n\n    @ManyToOne\n    @OnDissociate(DissociateAction.SET_NULL)\n    val creator: User\n\n    @ManyToOne\n    @OnDissociate(DissociateAction.SET_NULL)\n    val editor: User\n}\n")))),(0,r.kt)("p",null,"All entities that need these fields can derive from this superclass."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@OnDissociate(DissociateAction.SET_NULL)")," here is to prevent the deletion of related ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," data from being blocked due to these two foreign keys. These two foreign keys are automatically cleared when the related ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," is deleted.")),(0,r.kt)("h2",{id:"define-the-interceptor"},"Define the interceptor"),(0,r.kt)("p",null,"Suppose there is a service class called ",(0,r.kt)("inlineCode",{parentName:"p"},"UserService")," whose java method ",(0,r.kt)("inlineCode",{parentName:"p"},"getCurrentUserId()")," or kotlin property ",(0,r.kt)("inlineCode",{parentName:"p"},"currentUserId")," returns the id of the currently logged in user."),(0,r.kt)("p",null,"The interceptor must implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"org.babyfish.jimmer.sql.DraftInterceptor")," interface. If using Spring hosting, the code is as follows:"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Component\npublic class BaseEntityDraftInterceptor implements DraftInterceptor<BaseEntityDraft> {\n\n    private final UserService userService;\n\n    public BaseEntityDraftInterceptor(UserService userService) {\n        this.userService = userService;\n    }\n\n    @Override\n    public void beforeSave(BaseEntityDraft draft, boolean isNew) {\n        if (!ImmutableObjects.isLoaded(draft, BaseEntityProps.MODIFIED_TIME)) {\n            draft.setModifiedTime(LocalDateTime.now());\n        }\n        if (!ImmutableObjects.isLoaded(draft, BaseEntityProps.EDITOR)) {\n            draft.setEditor(editor - > {\n                editor.setId(userService.getCurrentUserId());\n            });\n        }\n        if (isNew) {\n            if (!ImmutableObjects.isLoaded(draft, BaseEntityProps.CREATED_TIME)) {\n                draft.setCreatedTime(LocalDateTime.now());\n            }\n            if (!ImmutableObjects.isLoaded(draft, BaseEntityProps.CREATOR)) {\n                draft.setCreator(creator - > {\n                    creator.setId(userService.getCurrentUserId());\n                });\n            }   \n        }\n    }\n}\n"))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Component\nclass BaseEntityDraftInterceptor(\n    private val userService: UserService\n) : DraftInterceptor<BaseEntityDraft> {\n\n    override fun beforeSave(draft: BaseEntityDraft, isNew: Boolean) {\n        if (!isLoaded(draft, BaseEntity::modifiedTime)) {\n            draft.modifiedTime = LocalDateTime.now()\n        }\n        if (!isLoaded(draft, BaseEntity::editor)) {\n            draft.editor().apply {\n                id = userService.currentUserId\n            }\n        }\n        if (isNew) {\n            if (!isLoaded(draft, BaseEntity::createdTime)) {\n                draft.createdTime = LocalDateTime.now()\n            }\n            if (!isLoaded(draft, BaseEntity::creator)) {\n                draft.creator().apply {\n                    id = userService.currentUserId\n                }\n            }\n        }\n    }\n}\n")))),(0,r.kt)("p",null,"Among them, the ",(0,r.kt)("inlineCode",{parentName:"p"},"beforeSave")," method is called before an object is saved, and the user can make final adjustments to the data to be saved."),(0,r.kt)("p",null,"If the parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"isNew")," is true, it means that the later operation is an insert operation; otherwise, it is an update operation."),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Please do not modify properties decorated with ",(0,r.kt)("inlineCode",{parentName:"p"},"@Id")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"@Key")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"beforeSave")," method.")),(0,r.kt)("h2",{id:"configure-the-interceptor"},"Configure the interceptor"),(0,r.kt)("p",null,"Hook the interceptor on the SqlClient object to take effect"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Bean\npublic JSqlClient sqlClient(\n    List<DraftInterceptor<?>> interceptors,\n    ...omitting other parameters...\n) {\n    return JSqlClient\n        .newBuilder()\n        // highlight-next-line\n        .addDraftinterceptors(interceptors)\n        ...omit other configuration...\n        .build();\n}\n"))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Bean\nfun sqlClient(\n    interceptors: List<DraftInterceptor<?>>,\n    ...omitting other parameters...\n): KSqlClient =\n    newKSqlClient {\n        // highlight-next-line\n        addDraftinterceptors(interceptors)\n        ...omit other configuration...\n    }\n")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Although only one ",(0,r.kt)("inlineCode",{parentName:"p"},"DraftInterceptor")," is demonstrated in this article, there may be many in actual projects."),(0,r.kt)("p",{parentName:"admonition"},"So, here we use collections and let Spring inject all ",(0,r.kt)("inlineCode",{parentName:"p"},"DraftInterceptor")," objects.")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"Book")," inherits ",(0,r.kt)("inlineCode",{parentName:"p"},"BaseEntity"),", you can use it like this"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Book book = BookDraft.$.produce(draft -> {\n    draft.setName("SQL in Action");\n    draft.setEdition(1);\n    draft.setPrice(new BigDecimal("59"));\n    draft.applyStore(store -> store.setId(2L));\n});\nsqlClient.getEntities().save(book);\n'))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val book = new(Book::class).by {\n    name = "SQL in Action"\n    edition = 1\n    price = BigDecimal("59")\n    store().id = 2\n}\nsqlClient.entities.save(book)\n')))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If the above save command eventually results in an insert operation, the generated SQL is as follows"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"insert into BOOK(\n    /* highlight-start */\n    CREATED_TIME,\n    MODIFIED_TIME,\n    CREATOR_ID,\n    EDITOR_ID,\n    /* highlight-end */\n    NAME, \n    EDITION, \n    PRICE, \n    STORE_ID\n) values(\n    /* highlight-next-line */\n    ?, ?, ?, ?,\n    ?, ?, ?, ?\n)\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If the above save command eventually results in an update operation, the generated SQL is as follows"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"update BOOK set \n    /* highlight-start */\n    MODIFIED_TIME = ?,\n    EDITOR_ID = ?,\n    /* highlight-end */\n    PRICE = ?, \n    STORE_ID = ? \nwhere ID = ?\n")))),(0,r.kt)("p",null,"We see that although the user does not specify values for the properties ",(0,r.kt)("inlineCode",{parentName:"p"},"createdTime"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"modifiedTime"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"creator"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"editor")," of the saved object, ",(0,r.kt)("inlineCode",{parentName:"p"},"DraftIntercetor")," sets values for these missing properties."))}u.isMDXComponent=!0}}]);