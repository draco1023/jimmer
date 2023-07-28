"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[5011],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=u(n),k=r,d=c["".concat(l,".").concat(k)]||c[k]||s[k]||o;return n?a.createElement(d,i(i({ref:t},m),{},{components:n})):a.createElement(d,i({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(34334);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>k});var a=n(83117),r=n(67294),o=n(34334),i=n(72389),p=n(67392),l=n(7094),u=n(12466);const m="tabList__CuJ",s="tabItem_LNqP";function c(e){var t;const{lazy:n,block:i,defaultValue:c,values:k,groupId:d,className:g}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=k??h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,p.l)(v,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===c?c:c??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==f&&!v.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,l.U)(),[T,I]=(0,r.useState)(f),O=[],{blockElementScrollPositionUntilNextRender:j}=(0,u.o5)();if(null!=d){const e=y[d];null!=e&&e!==T&&v.some((t=>t.value===e))&&I(e)}const B=e=>{const t=e.currentTarget,n=O.indexOf(t),a=v[n].value;a!==T&&(j(t),I(a),null!=d&&N(d,String(a)))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;n=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;n=O[t]??O[O.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},g)},v.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>O.push(e),onKeyDown:E,onFocus:B,onClick:B},i,{className:(0,o.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":T===t})}),n??t)}))),n?(0,r.cloneElement)(h.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function k(e){const t=(0,i.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},12589:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>k,frontMatter:()=>p,metadata:()=>u,toc:()=>s});var a=n(83117),r=(n(67294),n(3905)),o=n(65488),i=n(85162);const p={sidebar_position:3,title:"Mutation"},l=void 0,u={unversionedId:"graphql/mutation",id:"graphql/mutation",title:"Mutation",description:"GraphQL\u7edd\u5927\u90e8\u5206\u7279\u65b0\u90fd\u662f\u9488\u5bf9Query\u800c\u975eMutation\u7684\uff0c\u8981\u5b9e\u73b0Mutation\u64cd\u4f5c\uff0c\u4f7f\u7528Spring GraphQL\u63d0\u4f9b\u7684@MutationMapping\u6ce8\u89e3\u5373\u53ef\uff0c\u8fd9\u5f88\u7b80\u5355\uff0c\u672c\u65e0\u9700\u9610\u8ff0\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/graphql/mutation.mdx",sourceDirName:"graphql",slug:"/graphql/mutation",permalink:"/jimmer/zh/docs/graphql/mutation",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/graphql/mutation.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Mutation"},sidebar:"tutorialSidebar",previous:{title:"Query",permalink:"/jimmer/zh/docs/graphql/query"},next:{title:"\u5bf9\u8c61\u7bc7",permalink:"/jimmer/zh/docs/object/"}},m={},s=[{value:"\u57fa\u672c\u6982\u5ff5",id:"\u57fa\u672c\u6982\u5ff5",level:2},{value:"\u548cGraphQL\u7c7b\u6bd4",id:"\u548cgraphql\u7c7b\u6bd4",level:2},{value:"\u5b9e\u9645\u4ee3\u7801",id:"\u5b9e\u9645\u4ee3\u7801",level:2},{value:"\u5b9a\u4e49Input DTO\u7c7b\u578b",id:"\u5b9a\u4e49input-dto\u7c7b\u578b",level:3},{value:"\u5b9e\u73b0GraphQL mutation",id:"\u5b9e\u73b0graphql-mutation",level:3}],c={toc:s};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://graphql.org/"},"GraphQL"),"\u7edd\u5927\u90e8\u5206\u7279\u65b0\u90fd\u662f\u9488\u5bf9Query\u800c\u975eMutation\u7684\uff0c\u8981\u5b9e\u73b0Mutation\u64cd\u4f5c\uff0c\u4f7f\u7528",(0,r.kt)("a",{parentName:"p",href:"https://spring.io/projects/spring-graphql"},"Spring GraphQL"),"\u63d0\u4f9b\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"@MutationMapping"),"\u6ce8\u89e3\u5373\u53ef\uff0c\u8fd9\u5f88\u7b80\u5355\uff0c\u672c\u65e0\u9700\u9610\u8ff0\u3002"),(0,r.kt)("p",null,"\u7136\u800c\uff0cJimmer\u901a\u8fc7",(0,r.kt)("a",{parentName:"p",href:"../mutation/save-command"},"\u4fdd\u5b58\u6307\u4ee4"),"\u5bf9\u4fee\u6539\u64cd\u4f5c\u8fdb\u884c\u4e86\u5f3a\u5927\u7684\u652f\u6301\uff0c\u53ef\u4ee5\u5927\u5e45\u7b80\u5316GraphQL mutation\u64cd\u4f5c\u7684\u5b9e\u73b0\u3002"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u672c\u6587\u91cd\u70b9\u8ba8\u8bba\u5982\u4f55\u4f7f\u7528",(0,r.kt)("a",{parentName:"p",href:"../mutation/save-command"},"\u4fdd\u5b58\u6307\u4ee4"),"\u5b9e\u73b0GraphQL Mutation\uff0c\u5373\u5982\u4f55\u4fdd\u5b58\u4efb\u4f55\u590d\u6742\u7684\u8868\u5355\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u81f3\u4e8e\u5176\u4ed6\u66f4\u7b80\u5355\u7684\u5b9e\u73b0\u65b9\u6cd5\uff0c\u8bf7\u53c2\u8003\u5b98\u65b9\u793a\u4f8b\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/babyfish-ct/jimmer/tree/main/example/java/jimmer-sql-graphql"},"example/java/jimmer-sql-graphql"),"\u6216\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/babyfish-ct/jimmer/tree/main/example/kotlin/jimmer-sql-graphql-kt"},"example/kotlin/jimmer-sql-graphql-kt"))),(0,r.kt)("h2",{id:"\u57fa\u672c\u6982\u5ff5"},"\u57fa\u672c\u6982\u5ff5"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../mutation/save-command"},"\u4fdd\u5b58\u6307\u4ee4"),"\u53ef\u4ee5\u4fdd\u5b58\u4efb\u610f\u5f62\u72b6\u7684\u6570\u636e\u7ed3\u6784\uff0c\u4f46\u76f4\u63a5\u66b4\u9732\u6b64\u529f\u80fd\u4f1a\u5bfc\u81f4\u7528\u6237\u968f\u5fc3\u6240\u6b32\u5730\u4fee\u6539\u4efb\u4f55\u5b83\u50cf\u4fee\u6539\u6570\u636e\uff0c\u4ece\u800c\u5bfc\u81f4\u5b89\u5168\u6027\u95ee\u9898\u3002"),(0,r.kt)("p",null,"\u4e3a\u6b64\uff0c\u5efa\u8bae\u4f7f\u7528Input DTO\u4f5c\u4e3a\u4fdd\u5b58API\u7684\u53c2\u6570\u3002\u548c\u53ef\u4ee5\u8868\u8fbe\u4efb\u610f\u5f62\u72b6\u6570\u636e\u7ed3\u6784\u7684\u52a8\u6001\u5b9e\u4f53\u72ec\u4eab\u4e0d\u540c\uff0cInput DTO\u662f\u9759\u6001Java\u5bf9\u8c61\uff0c\u80fd\u4e25\u683c\u9650\u5b9a\u7528\u6237\u8981\u4fdd\u5b58\u7684\u6570\u636e\u7ed3\u6784\u7684\u5f62\u72b6\uff0c\u4fdd\u8bc1\u4e86\u5bf9\u5916\u7684\u5b89\u5168\u6027\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u8fd9\u548cJimmer\u4f01\u56fe\u6d88\u9664\u7684DTO\u4e0d\u540c\uff0cJimmer\u4f01\u56fe\u6d88\u9664\u7684DTO\u662fOutput DTO\uff0c\u5b58\u5728\u7c7b\u578b\u7206\u70b8\u95ee\u9898\u3002\u8fd9\u91cc\u6240\u8ba8\u8bba\u7684\u662fInput DTO\uff0c\u4e0d\u5b58\u5728\u7c7b\u578b\u7206\u70b8\u95ee\u9898\u3002\u4e8c\u8005\u5e76\u4e0d\u77db\u76fe\u3002")),(0,r.kt)("p",null,"\u5728\u670d\u52a1\u5185\u90e8\uff0c\u901a\u8fc7",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mapstruct/mapstruct"},"mapstruct"),"\u628a\u9759\u6001\u7684Input DTO\u8f6c\u5316\u4e3a\u52a8\u6001\u5b9e\u4f53\u5bf9\u8c61\uff0c\u518d\u4fdd\u5b58\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7531\u4e8eJimmer\u5bf9\u8c61\u662f\u53ef\u8868\u8fbe\u4efb\u610f\u5f62\u72b6\u6570\u636e\u7ed3\u6784\u7684\u52a8\u6001\u5bf9\u8c61\uff0c\u65e0\u8bba\u9759\u6001Input DTO\u662f\u4ec0\u4e48\u683c\u5f0f\uff0c\u90fd\u53ef\u4ee5\u8f6c\u5316\u4e3aJimmer\u7684\u52a8\u6001\u5bf9\u8c61\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4e00\u65e6\u8f6c\u5316\u6210Jimmer\u7684\u52a8\u6001\u5bf9\u8c61\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("a",{parentName:"p",href:"../mutation/save-command"},"\u4fdd\u5b58\u6307\u4ee4"),"\u4e00\u53e5\u8bdd\u4fdd\u5b58\u3002"))),(0,r.kt)("h2",{id:"\u548cgraphql\u7c7b\u6bd4"},"\u548cGraphQL\u7c7b\u6bd4"),(0,r.kt)("p",null,"\u5bf9\u5916\u8f93\u51fa\u66b4\u9732\u52a8\u6001\u5b9e\u4f53\u5bf9\u8c61\uff0c\u5bf9\u5185\u8f93\u5165\u5374\u53ea\u63a5\u53d7\u9759\u6001\u7684Input DTO\u5bf9\u8c61\uff0c\u8fd9\u4e2a\u7406\u5ff5\uff0c\u5176\u5b9e\u548cGraphQL\u534f\u8bae\u5b8c\u5168\u4e00\u81f4\u3002"),(0,r.kt)("p",null,"\u4ee5\u9644\u5e26\u4f8b\u5b50\u4e2d\u7684GraphQL\u58f0\u660e\u6587\u4ef6\u4e3a\u4f8b",(0,r.kt)("a",{parentName:"p",href:"https://github.com/babyfish-ct/jimmer/blob/main/example/java/jimmer-sql-graphql/src/main/resources/graphql/schema.graphqls"},"schema.graphqls")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"type Book implements CommonEntity { \u2776\n    id: Long!\n    name: String!\n    edition: Int!\n    price: BigDecimal!\n    store: BookStore\n    authors: [Author!]!\n    createdTime: LocalDateTime!\n    modifiedTime: LocalDateTime!\n    tenant: String!\n}\n\ninput BookInput { \u2777\n    id: Long\n    name: String!\n    edition: Int\n    price: BigDecimal!\n    storeId: Long\n    authorIds: [Long!]!\n}\n\n...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u2776 ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),"\u5173\u952e\u5b57\u58f0\u660e\u7684\u7c7b\u578b\u662f\u8868\u8fbe\u4efb\u610f\u5f62\u72b6\u6570\u636e\u7ed3\u6784\u7684\u52a8\u6001\u7c7b\u578b\uff0c\u7528\u4f5cGraphQL\u7684\u8f93\u51fa\u7c7b\u578b")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u2777 ",(0,r.kt)("inlineCode",{parentName:"p"},"input"),"\u5173\u952e\u5b57\u58f0\u660e\u7684\u7c7b\u578b\u662f\u8868\u8fbe\u56fa\u5b9a\u5f62\u72b6\u6570\u636e\u7ed3\u6784\u7684\u9759\u6001\u7c7b\u578b\uff0c\u7528\u4f5cGraphQL\u7684\u8f93\u5165\u7c7b\u578b"))),(0,r.kt)("p",null,"\u53ef\u89c1\uff0cJimmer\u7684\u7406\u5ff5\u5176\u5b9e\u548cGraphQL\u534f\u8bae\u5b8c\u5168\u4e00\u81f4"),(0,r.kt)("h2",{id:"\u5b9e\u9645\u4ee3\u7801"},"\u5b9e\u9645\u4ee3\u7801"),(0,r.kt)("h3",{id:"\u5b9a\u4e49input-dto\u7c7b\u578b"},"\u5b9a\u4e49Input DTO\u7c7b\u578b"),(0,r.kt)("p",null,"\u4f7f\u7528\u666e\u901a\u7684Java/Kotlin\u7c7b\u5b9a\u4e49Input DTO\u3002\u4e3a\u4e86\u7b80\u5355\u8d77\u89c1\uff0cJava\u7248\u672c\u6211\u4eec\u91c7\u7528lombok"),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookInput.java"',title:'"BookInput.java"'},"@Data\npublic class BookInput implements Input<Book> { \u2776\n\n    private static final Converter CONVERTER = \n        Mappers.getMapper(Converter.class);\n\n    @Nullable\n    private Long id;\n\n    private String name;\n\n    private int edition;\n\n    private BigDecimal price;\n\n    @Nullable\n    private Long storeId;\n\n    private List<Long> authorIds;\n\n    @Override\n    public Book toEntity() { \u2777\n        return CONVERTER.toBook(this);\n    }\n\n    @Mapper\n    interface Converter {\n\n        @BeanMapping(unmappedTargetPolicy = ReportingPolicy.IGNORE)\n        Book toBook(BookInput input);\n\n        ...\u7701\u7565\u5176\u4ed6mapstruct\u914d\u7f6e...\n    }\n}\n"))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookInput.kt"',title:'"BookInput.kt"'},"data class BookInput(\n    val id: Long? = null,\n    val name: String,\n    val edition: Int,\n    val price: BigDecimal,\n    val storeId: Long?,\n    val authorIds: List<Long>\n): Input<Book> { \u2776\n\n    override fun toEntity(): Book = \u2777\n        CONVERTER.toBook(this)\n\n    @Mapper\n    internal interface Converter { \n\n        @BeanMapping(unmappedTargetPolicy = ReportingPolicy.IGNORE)\n        fun toBook(input: BookInput): Book\n\n        ...\u7701\u7565\u5176\u4ed6mapstruct\u914d\u7f6e...\n    }\n\n    companion object {\n\n        @JvmStatic\n        private val CONVERTER = \n            Mappers.getMapper(Converter::class.java)\n    }\n}\n")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u2776 ",(0,r.kt)("inlineCode",{parentName:"p"},"BookInput"),"\u7c7b\u5b9e\u73b0\u4e86\u63a5\u53e3",(0,r.kt)("inlineCode",{parentName:"p"},"org.babyfish.jimmer.Input"),"\uff0c\u8fd9\u53ea\u662f\u4e00\u4e2a\u5efa\u8bae\uff0c\u5e76\u4e0d\u662f\u5fc5\u987b\u7684\uff0c\u4f46\u8fd9\u6837\u505a\u4f1a\u66f4\u65b9\u4fbf")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u2777 \u5b9e\u73b0",(0,r.kt)("inlineCode",{parentName:"p"},"Input.toEntity"),"\u65b9\u6cd5\uff0c\u628a\u5f53\u524d\u9759\u6001\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Input DTO"),"\u5bf9\u8c61\u8f6c\u5316\u4e3a\u52a8\u6001\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Book"),"\u5b9e\u4f53\u5bf9\u8c61\u3002\u8fd9\u662f\u8fd9\u4e2a\u7c7b\u552f\u4e00\u7684\u529f\u80fd"))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u8fd9\u91cc\uff0c\u6211\u4eec\u7701\u7565\u4e86\u5fc5\u8981\u7684mapstruct\u914d\u7f6e\u4ee3\u7801"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5173\u4e8emapstruct\u672c\u8eab\uff0c\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"https://mapstruct.org/documentation/stable/reference/html/"},"mapstruct\u7528\u6237\u624b\u518c"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5173\u4e8eJimmer\u548cmapstruct\u914d\u5408\u7684\u6280\u5de7\uff0c\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"../object/mapstruct"},"\u548cmapstruct\u534f\u540c"))))),(0,r.kt)("h3",{id:"\u5b9e\u73b0graphql-mutation"},"\u5b9e\u73b0GraphQL mutation"),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookStoreService.java"',title:'"BookStoreService.java"'},"package com.example.business;\n\nimport org.springframework.graphql.data.method.annotation.Argument;\n// highlight-next-line\nimport org.springframework.graphql.data.method.annotation.MutationMapping;\nimport org.springframework.stereotype.Controller;\n\n...\u7701\u7565\u5176\u4ed6\u5bfc\u5165...\n\n@Controller\npublic class BookStoreService {\n\n    private final BookStoreRepsitory bookStoreRepsitory;\n\n    public BookStoreService(BookStoreRepsitory bookStoreRepsitory) {\n        this.bookStoreRepsitory = bookStoreRepsitory;\n    }\n\n    @MutationMapping \u2776\n    @Transactional\n    public Book saveBook(\n        @Argument BookInput input \u2777\n    ) {\n        return bookRepository.save(input); \u2778\n        // \u6216`bookRepository.save(input.toEntity())`\n    }\n}\n"))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookStoreService.kt"',title:'"BookStoreService.kt"'},"package com.example.business\n\nimport org.springframework.graphql.data.method.annotation.Argument\n// highlight-next-line\nimport org.springframework.graphql.data.method.annotation.MutationMapping\nimport org.springframework.stereotype.Controller\n\n...\u7701\u7565\u5176\u4ed6\u5bfc\u5165...\n\n@Controller\nclass BookStoreService(\n    private val bookStoreRepository: BookStoreRepsitory\n) {\n\n    @MutationMapping \u2776\n    @Transactional\n    fun saveBook(\n        @Argument input: BookInput \u2777\n    ): Book =\n        bookRepository.save(input) \u2778\n        // \u6216`bookRepository.save(input.toEntity())`\n}\n")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u2776 \u4f7f\u7528\u6ce8\u89e3",(0,r.kt)("inlineCode",{parentName:"p"},"@org.springframework.graphql.data.method.annotation.MutationMapping"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u2777 \u4f7f\u7528\u9759\u6001Input DTO\u7c7b\u578b",(0,r.kt)("inlineCode",{parentName:"p"},"BookInput"),"\uff0c\u8ba9\u7528\u6237\u53ea\u80fd\u4f20\u9012\u89c4\u5b9a\u5f62\u72b6\u7684\u6570\u636e\u7ed3\u6784\uff0c\u4fdd\u8bc1\u5b89\u5168\u6027")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u2778 ",(0,r.kt)("a",{parentName:"p",href:"../mutation/save-command"},"\u4fdd\u5b58\u6307\u4ee4"),"\uff0c\u4e00\u53e5\u8bdd\u4fdd\u5b58\u4efb\u610f\u5f62\u72b6\u7684\u6570\u636e\u7ed3\u6784"),(0,r.kt)("p",{parentName:"li"},"\u8fd9\u91cc",(0,r.kt)("inlineCode",{parentName:"p"},"bookRepository.save(input)"),"\uff0c\u5176\u5b9e\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"bookRepository.save(input.toEntity())"),"\u7684\u7b80\u5199\u3002\u8fd9\u662f\u5efa\u8baeInput DTO\u7c7b\u578b\u5b9e\u73b0",(0,r.kt)("inlineCode",{parentName:"p"},"org.babyfish.jimmer.Input<E>"),"\u63a5\u53e3\u7684\u539f\u56e0\u3002"),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u65e0\u8bba",(0,r.kt)("inlineCode",{parentName:"p"},"BookInput"),"\u7c7b\u578b\u6240\u5b9a\u4e49\u6570\u636e\u7ed3\u6784\u7b80\u5355\u8fd8\u662f\u76f8\u5bf9\u590d\u6742\uff0c\u90fd\u53ef\u4ee5\u4e00\u53e5\u8bdd\u4fdd\u5b58\u3002\u8fd9\u662f",(0,r.kt)("a",{parentName:"p",href:"../mutation/save-command"},"\u4fdd\u5b58\u6307\u4ee4"),"\u8fd9\u4e2a\u529f\u80fd\u7684\u6838\u5fc3\u4ef7\u503c\u3002")))))}k.isMDXComponent=!0}}]);