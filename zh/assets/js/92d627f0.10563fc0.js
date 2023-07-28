"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[919],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>k});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=s(t),k=l,d=c["".concat(p,".").concat(k)]||c[k]||u[k]||r;return t?a.createElement(d,o(o({ref:n},m),{},{components:t})):a.createElement(d,o({ref:n},m))}));function k(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=c;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var s=2;s<r;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(67294),l=t(34334);const r="tabItem_Ymn6";function o(e){let{children:n,hidden:t,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>k});var a=t(83117),l=t(67294),r=t(34334),o=t(72389),i=t(67392),p=t(7094),s=t(12466);const m="tabList__CuJ",u="tabItem_LNqP";function c(e){var n;const{lazy:t,block:o,defaultValue:c,values:k,groupId:d,className:g}=e,b=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=k??b.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),y=(0,i.l)(N,((e,n)=>e.value===n.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===c?c:c??(null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)??b[0].props.value;if(null!==h&&!N.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:f}=(0,p.U)(),[B,S]=(0,l.useState)(h),x=[],{blockElementScrollPositionUntilNextRender:C}=(0,s.o5)();if(null!=d){const e=v[d];null!=e&&e!==B&&N.some((n=>n.value===e))&&S(e)}const T=e=>{const n=e.currentTarget,t=x.indexOf(n),a=N[t].value;a!==B&&(C(n),S(a),null!=d&&f(d,String(a)))},R=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=x.indexOf(e.currentTarget)+1;t=x[n]??x[0];break}case"ArrowLeft":{const n=x.indexOf(e.currentTarget)-1;t=x[n]??x[x.length-1];break}}null==(n=t)||n.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",m)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},g)},N.map((e=>{let{value:n,label:t,attributes:o}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:B===n?0:-1,"aria-selected":B===n,key:n,ref:e=>x.push(e),onKeyDown:R,onFocus:T,onClick:T},o,{className:(0,r.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":B===n})}),t??n)}))),t?(0,l.cloneElement)(b.filter((e=>e.props.value===B))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},b.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==B})))))}function k(e){const n=(0,o.Z)();return l.createElement(c,(0,a.Z)({key:String(n)},e))}},69701:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>p,default:()=>k,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=t(83117),l=(t(67294),t(3905)),r=t(65488),o=t(85162);const i={sidebar_position:5,title:"\u6700\u7ec8\u4f7f\u7528"},p=void 0,s={unversionedId:"overview/get-started/usage",id:"overview/get-started/usage",title:"\u6700\u7ec8\u4f7f\u7528",description:"Jimmer\u7684\u4e24\u79cd\u7528\u6cd5",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/overview/get-started/usage.mdx",sourceDirName:"overview/get-started",slug:"/overview/get-started/usage",permalink:"/jimmer/zh/docs/overview/get-started/usage",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/overview/get-started/usage.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"\u6700\u7ec8\u4f7f\u7528"},sidebar:"tutorialSidebar",previous:{title:"\u751f\u6210\u4ee3\u7801",permalink:"/jimmer/zh/docs/overview/get-started/generate-code"},next:{title:"Benchmark\u62a5\u544a",permalink:"/jimmer/zh/docs/overview/benchmark"}},m={},u=[{value:"\u4f7f\u7528Spring Data Repository",id:"\u4f7f\u7528spring-data-repository",level:2},{value:"\u5b9a\u4e49Repository\u63a5\u53e3",id:"\u5b9a\u4e49repository\u63a5\u53e3",level:3},{value:"\u62bd\u8c61\u67e5\u8be2\u65b9\u6cd5",id:"\u62bd\u8c61\u67e5\u8be2\u65b9\u6cd5",level:3},{value:"\u9ed8\u8ba4\u67e5\u8be2\u65b9\u6cd5",id:"\u9ed8\u8ba4\u67e5\u8be2\u65b9\u6cd5",level:3},{value:"\u76f4\u63a5\u4f7f\u7528\u5e95\u5c42\u7684SqlClient",id:"\u76f4\u63a5\u4f7f\u7528\u5e95\u5c42\u7684sqlclient",level:2},{value:"\u6784\u5efaSqlClient",id:"\u6784\u5efasqlclient",level:3},{value:"\u4f7f\u7528SqlClient",id:"\u4f7f\u7528sqlclient",level:3}],c={toc:u};function k(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Jimmer\u7684\u4e24\u79cd\u7528\u6cd5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528Spring Data Repository")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u76f4\u63a5\u4f7f\u7528\u5e95\u5c42\u7684SqlClient"))),(0,l.kt)("h2",{id:"\u4f7f\u7528spring-data-repository"},"\u4f7f\u7528Spring Data Repository"),(0,l.kt)("h3",{id:"\u5b9a\u4e49repository\u63a5\u53e3"},"\u5b9a\u4e49Repository\u63a5\u53e3"),(0,l.kt)("p",null,"Jimmer\u6574\u5408\u4e86spring data\uff0c\u4e3aJava\u7528\u6237\u548cKotlin\u7528\u6237\u5404\u81ea\u63d0\u4f9b\u4e86\u4e00\u4e2aRepository\u57fa\u63a5\u53e3\u3002"),(0,l.kt)("table",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"Java"),(0,l.kt)("td",null,"org.babyfish.jimmer.spring.repository.JRepository<E, ID>")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Kotlin"),(0,l.kt)("td",null,"org.babyfish.jimmer.spring.repository.KRepository<E, ID>"))),(0,l.kt)("p",null,"\u65e0\u8bbaJava\u7248\u8fd8\u662fKotlin\u7248\uff0c\u63a5\u53e3\u5177\u5907\u4e24\u4e2a\u8303\u578b\u53c2\u6570"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"E: \u5b9e\u4f53\u7c7b\u578b"),(0,l.kt)("li",{parentName:"ul"},"ID: \u5b9e\u4f53ID\u7c7b\u578b")),(0,l.kt)("p",null,"\u901a\u8fc7\u7ee7\u627f\u6b64\u63a5\u53e3\uff0c\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u5feb\u901f\u5b9e\u73b0\u5404\u79cdRepository\uff0c\u4ee5BookRepository\u4e3a\u4f8b"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookRepostory.java"',title:'"BookRepostory.java"'},"package com.example.repository;\n\nimport com.example.model.Book;\n\nimport org.babyfish.jimmer.spring.repository.JRepository;\n\npublic interface BookRepository extends JRepository<Book, Long> {}\n"))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookRepostory.kt"',title:'"BookRepostory.kt"'},"package com.example.repository\n\nimport com.example.model.Book\n\nimport org.babyfish.jimmer.spring.repository.KRepository\n\ninterface BookRepository : KRepository<Book, Long>\n")))),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u548c\u5176\u4ed6spring-data\u76f8\u540c\uff0c\u5b9a\u4e49\u597d\u63a5\u53e3\u5373\u53ef\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u65e0\u9700"),"\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"@org.springframework.stereotype.Repository"),"\u4fee\u9970\u3002Jimmer\u4f1a\u81ea\u52a8\u5b9e\u73b0\u8fd9\u4e9b\u63a5\u53e3\u5e76\u6ce8\u518c\u5230Spring\u4e2d\u3002"),(0,l.kt)("p",{parentName:"admonition"},"\u4f46\u662f\u6709\u4e00\u4e2a\u6ce8\u610f\u4e8b\u9879\uff1a"),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u81ea\u5b9a\u4e49Repository\u6240\u5c5e\u7684\u5fc5\u987b\u662fSpringBoot\u4e3b\u7c7b\u6240\u5728\u5305\u6216\u5176\u5b50\u5305\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5426\u5219\uff0c\u9700\u8981\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"@org.babyfish.jimmer.spring.repository.EnableJimmerRepositories"),"\u4fee\u9970SpringBoot\u4e3b\u7c7b\u6216\u5176\u4ed6Spring\u914d\u7f6e\u7c7b\uff0c\u660e\u786e\u6307\u5b9a\u81ea\u5b9a\u4e49Repository\u63a5\u53e3\u6240\u5728\u7684\u5305\u3002")))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"BookRepository"),"\u7ee7\u627f\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"JRepository/KRepository"),"\u63a5\u53e3\uff0c\u8d85\u63a5\u53e3\u6709\u4e00\u4e9b\u57fa\u672c\u7684\u65b9\u6cd5\u53ef\u4ee5\u4f7f\u7528\u3002\u4f8b\u5982\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"findNullable")),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"@SpringBootApplicattion\npublic class App {\n    \n    public static void main(args: Array<String>) {\n        ApplicationContext ctx = SpringApplication.run(App.class, args);\n        BookRepository bookRepository = ctx.getBean(BookRepository.class);\n        System.out.println(\n            bookRepository.findNullable(\n                3L,\n\n                \u2776\n                BookFetcher.$ \n                    .allScalarFields() \u2777\n                    .authors( \u2778\n                        AuthorFetcher.$\n                            .allScalarFields() \u2779\n                    )\n            );  \n        );\n    }\n}\n"))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"@SpringBootApplicattion\nclass App\n\nfun main(args: Array<String>) {\n    val ctx = runApplication(App::class, *args)\n    val bookRepository = ctx.getBean(BookRepository::class.java)\n    println(\n        bookRepository.findNullable(\n            3L,\n            \n            \u2776\n            newFetcher(Book::class) {\n                allScalarFields() \u2777\n                authors { \u2778\n                    allScalarFields() \u2779\n                }\n            }\n        )\n    )\n}\n")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u2776 \u67e5\u8be2\u65b9\u6cd5\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u6307\u5b9a\u4e86",(0,l.kt)("a",{parentName:"p",href:"../../query/object-fetcher"},"\u5bf9\u8c61\u6293\u53d6\u5668"),"\uff0c\u8fd9\u662fJimmer\u6700\u91cd\u8981\u529f\u80fd\u4e4b\u4e00\u3002"),(0,l.kt)("admonition",{parentName:"li",type:"info"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("a",{parentName:"p",href:"../../query/object-fetcher"},"\u5bf9\u8c61\u6293\u53d6\u5668"),"\u4e0d\u662f\u5fc5\u987b\uff0c\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u8c03\u7528\u66f4\u7b80\u5355\u7684\u91cd\u8f7d\u7248\u672c\uff0c\u4f8b\u5982",(0,l.kt)("inlineCode",{parentName:"p"},"findNullable(3L)")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u2777 \u5bf9\u4e8e\u805a\u5408\u6839\u7c7b\u578b",(0,l.kt)("inlineCode",{parentName:"p"},"Book"),"\u800c\u8a00\uff0c\u67e5\u8be2\u5bf9\u8c61\u7684\u6240\u6709\u975e\u5173\u8054\u5c5e\u6027 ",(0,l.kt)("em",{parentName:"p"},"(id, name, edition, price)"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u2778 \u6293\u53d6\u5bf9\u8c61\u7684\u591a\u5bf9\u591a\u5173\u8054\u5c5e\u6027",(0,l.kt)("inlineCode",{parentName:"p"},"Book.authors"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u2779 \u5bf9\u4e8e\u5173\u8054\u5bf9\u8c61\u7c7b\u578b",(0,l.kt)("inlineCode",{parentName:"p"},"Author"),"\u800c\u8a00\uff0c\u67e5\u8be2\u5bf9\u8c61\u7684\u6240\u6709\u975e\u5173\u8054\u5c5e\u6027 ",(0,l.kt)("em",{parentName:"p"},"(id, firstName, lastName, gender)")))),(0,l.kt)("p",null,"\u6253\u5370\u7ed3\u679c\u4e3a ",(0,l.kt)("em",{parentName:"p"},"(\u8fd9\u91cc\u8fdb\u884c\u4e86\u4eba\u4e3a\u683c\u5f0f\u5316)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id":3,\n    "name":"Learning GraphQL",\n    "edition":3,\n    "price":51.00,\n    "authors":[\n        {\n            "id": 1,\n            "firstName": "Eve",\n            "lastName": "Procello",\n            "gender": "FEMALE"\n        },\n        {\n            "id": 2,\n            "firstName": "Alex",\n            "lastName": "Banks",\n            "gender": "MALE"\n        }\n    ]\n}\n')),(0,l.kt)("h3",{id:"\u62bd\u8c61\u67e5\u8be2\u65b9\u6cd5"},"\u62bd\u8c61\u67e5\u8be2\u65b9\u6cd5"),(0,l.kt)("p",null,"\u53ef\u4ee5\u4e3a\u81ea\u5b9a\u4e49Repository\u63a5\u53e3\u6dfb\u52a0\u62bd\u8c61\u65b9\u6cd5\uff0cJimmer\u4f1a\u81ea\u52a8\u5b9e\u73b0\u6b64\u65b9\u6cd5\u3002"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookRepostory.java"',title:'"BookRepostory.java"'},"public interface BookRepository extends JRepository<Book, Long> {\n\n    List<Book> findByName(\n        @Nullable String name, \n        @Nullable Fetcher<Book> fetcher \u2776\n    );\n}\n"))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookRepostory.kt"',title:'"BookRepostory.kt"'},"interface BookRepository : KRepository<Book, Long> {\n\n    fun findByName(\n        name: String? = null,\n        fetcher: Fetcher<Book>? = null \u2776\n    ): List<Book>\n}\n")))),(0,l.kt)("p",null,"\u548cSpring Data JPA\u4e0d\u540c\uff0c\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u58f0\u660e\u4e00\u4e2a",(0,l.kt)("a",{parentName:"p",href:"../../query/object-fetcher"},"\u5bf9\u8c61\u6293\u53d6\u5668"),"\u53c2\u6570 ",(0,l.kt)("em",{parentName:"p"},"(\u4e0a\u9762\u2776\u5904)")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4e0d\u9700\u8981\u6b64\u529f\u80fd\uff0c\u4e5f\u53ef\u4ee5\u4e0d\u58f0\u660e\u6b64\u53c2\u6570")),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@SpringBootApplicattion\npublic class App {\n    \n    public static void main(args: Array<String>) {\n        ApplicationContext ctx = SpringApplication.run(App.class, args);\n        BookRepository bookRepository = ctx.getBean(BookRepository.class);\n        System.out.println(\n            bookRepository.findByName(\n                "GraphQL in Action",\n\n                \u2776\n                BookFetcher.$ \n                    .name() \u2777\n                    .edition() \u2778\n                    .store( \u2779\n                        BookStoreFetcher.$\n                            .name() \u277a\n                    )\n            );  \n        );\n    }\n}\n'))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'@SpringBootApplicattion\nclass App\n\nfun main(args: Array<String>) {\n    val ctx = runApplication(App::class, *args)\n    val bookRepository = ctx.getBean(BookRepository::class.java)\n    println(\n        bookRepository.findByName(\n            "GraphQL in Action",\n            \n            \u2776\n            newFetcher(Book::class) {\n                name() \u2777\n                edition() \u2778\n                store { \u2779\n                    name() \u277a\n                }\n            }\n        )\n    )\n}\n')))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u2776 \u6307\u5b9a",(0,l.kt)("a",{parentName:"p",href:"../../query/object-fetcher"},"\u5bf9\u8c61\u6293\u53d6\u5668"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u2777\u548c\u2778 \u5bf9\u4e8e\u805a\u5408\u6839\u7c7b\u578b",(0,l.kt)("inlineCode",{parentName:"p"},"Book"),"\u800c\u8a00\uff0c\u67e5\u8be2\u5c5e\u6027",(0,l.kt)("inlineCode",{parentName:"p"},"id"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"name"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"edition"),(0,l.kt)("em",{parentName:"p"},"(id\u88ab\u5f3a\u5236\u67e5\u8be2\uff0c\u6b64\u5904\u65e0\u6cd5\u4e5f\u4e0d\u9700\u8981\u58f0\u660e\u67e5\u8be2",(0,l.kt)("inlineCode",{parentName:"em"},"id"),"\u5c5e\u6027)"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u2778 \u6293\u53d6\u5bf9\u8c61\u7684\u591a\u5bf9\u4e00\u5173\u8054\u5c5e\u6027",(0,l.kt)("inlineCode",{parentName:"p"},"Book.store"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u2779 \u5bf9\u4e8e\u5173\u8054\u5bf9\u8c61\u7c7b\u578b",(0,l.kt)("inlineCode",{parentName:"p"},"BookStore"),"\u800c\u8a00\uff0c\u67e5\u8be2\u5c5e\u6027",(0,l.kt)("inlineCode",{parentName:"p"},"id"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"name")," ",(0,l.kt)("em",{parentName:"p"},"(id\u88ab\u5f3a\u5236\u67e5\u8be2\uff0c\u6b64\u5904\u65e0\u6cd5\u4e5f\u4e0d\u9700\u8981\u58f0\u660e\u67e5\u8be2",(0,l.kt)("inlineCode",{parentName:"em"},"id"),"\u5c5e\u6027)")))),(0,l.kt)("p",null,"\u6253\u5370\u7ed3\u679c\u4e3a ",(0,l.kt)("em",{parentName:"p"},"(\u8fd9\u91cc\u8fdb\u884c\u4e86\u4eba\u4e3a\u683c\u5f0f\u5316)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "id": 10,\n        "name": "GraphQL in Action",\n        "edition": 1,\n        "store": {\n            "id": 2,\n            "name": "MANNING"\n        }\n    },\n    {\n        "id": 11,\n        "name": "GraphQL in Action",\n        "edition": 2,\n        "store": {\n            "id": 2,\n            "name": "MANNING"\n        }\n    },\n    {\n        "id": 12,\n        "name": "GraphQL in Action",\n        "edition": 3,\n        "store": {\n            "id": 2,\n            "name": "MANNING"\n        }\n    }\n]\n')),(0,l.kt)("h3",{id:"\u9ed8\u8ba4\u67e5\u8be2\u65b9\u6cd5"},"\u9ed8\u8ba4\u67e5\u8be2\u65b9\u6cd5"),(0,l.kt)("p",null,"\u53ef\u4ee5\u4e3a\u81ea\u5b9a\u4e49Repository\u63a5\u53e3\u6dfb\u52a0\u9ed8\u8ba4\u65b9\u6cd5\uff0c\u7531\u5f00\u53d1\u4eba\u5458\u81ea\u5df1\u5b9e\u73b0\u590d\u6742\u67e5\u8be2\u3002"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookRepository.java"',title:'"BookRepository.java"'},"public interface BookRepository extends JRepository<Book, Long> {\n\n    BookTable table = BookTable.$;\n\n    default List<Book> find(\n        @Nullable String name,\n        @Nullable String storeName,\n        \n        // highlight-next-line\n        @Nullable String authorName,\n        \n        @Nullable Fetcher<Book> fetcher \n    ) {\n        AuthorTableEx author = AuthorTableEx.$; \u2776\n\n        return sql()\n            .createQuery(table)\n            .whereIf(\n                StringUtils.hasText(name),\n                table.name().ilike(name)\n            )\n            .whereIf(\n                StringUtils.hasText(storeName),\n                table.store().name().ilike(storeName) \n            )\n            // highlight-next-line\n            .whereIf(\n                StringUtils.hasText(authorName),\n                table.id().in(\n                    sql()\n                        // highlight-next-line\n                        .createSubQuery(author) \u2777\n                        .where(\n                            Predicate.or(\n                                author.firstName().ilike(authorName),\n                                author.lastName().ilike(authorName)\n                            )\n                        )\n                        .select(\n                            author.books().id()\n                        )\n                )\n            )\n            .orderBy(table.name())\n            .orderBy(table.edition().desc())\n            .select(table.fetch(fetcher)) \n            .execute();\n    }\n}\n"))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"interface BookRepository : KRepository<BookStore, Long> {\n\n    fun find(\n        name: String? = null,\n        storeName: String? = null,\n\n        // highlight-next-line\n        authorName: String? = null,\n\n        fetcher: Fetcher<Book>? = null\n    ): List<Book> =\n        sql\n            .createQuery(Book::class) {\n                name?.takeIf { it.isNotEmpty() }?.let {\n                    where(table.name ilike it)\n                }\n                storeName?.takeIf { it.isNotEmpty() }?.let {\n                    table.store.name ilike it\n                }\n                // highlight-next-line\n                authorName?.takeIf { it.isNotEmpty() }?.let {\n                    where(\n                        // highlight-next-line\n                        table.id valueIn subQuery(Author::class) { \u2776\u2777\n                            where(\n                                or(\n                                    table.firstName ilike it,\n                                    table.lastName ilike it\n                                )\n                            )\n                            select(table.books.id)\n                        }\n                    )\n                }\n                orderBy(table.name)\n                orderBy(table.edition.desc())\n                select(table.fetch(fetcher))\n            }\n            .execute()\n}\n")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u2776  "),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Java: \u5b50\u67e5\u8be2\u57fa\u4e8e\u5168\u5c40\u53d8\u91cf",(0,l.kt)("inlineCode",{parentName:"p"},"AuthorTableEx.$"),"\uff0c\u4e3a\u4e86\u4fbf\u4e8e\u540e\u7eed\u5f00\u53d1\uff0c\u53d6\u4e00\u4e2a\u522b\u540d",(0,l.kt)("inlineCode",{parentName:"p"},"author"),"\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Kotlin: ",(0,l.kt)("inlineCode",{parentName:"p"},"subQuery"),"\u63a5\u53d7\u4e00\u4e2alambda\u8868\u8fbe\u5f0f\u3002"),(0,l.kt)("p",{parentName:"li"},"\u5728\u5b50\u67e5\u8be2\u7684lambda\u5185\u90e8\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"table"),"\u53d8\u91cf\u8986\u76d6\u4e86\u5916\u56f4\u67e5\u8be2\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"table\u53d8\u91cf"),"\u3002\u5982\u679c\u9700\u8981\u5728\u5b50\u67e5\u8be2\u4e2d\u5f15\u5165\u7236\u67e5\u8be2\u7684\u8868 ",(0,l.kt)("em",{parentName:"p"},"(\u672c\u4f8b\u672a\u6f14\u793a\uff0c\u901a\u5e38\u7528\u4e8e\u5199\u76f8\u5173\u5b50\u67e5\u8be2)"),"\uff0c\u8bf7\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"parentTable"),"\u53d8\u91cf")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u2777 \u521b\u5efa\u5b50\u67e5\u8be2"))),(0,l.kt)("p",null,"\u6beb\u65e0\u7591\u95ee\uff0c\u5982\u679c",(0,l.kt)("inlineCode",{parentName:"p"},"authorName"),"\u53c2\u6570\u6ca1\u6709\u6307\u5b9a\uff0c\u6700\u7ec8SQL\u4e0d\u4f1a\u5305\u542b\u5b50\u67e5\u8be2\uff0c\u6ca1\u5fc5\u8981\u6f14\u793a\u3002"),(0,l.kt)("p",null,"\u6211\u4eec\u6f14\u793a",(0,l.kt)("inlineCode",{parentName:"p"},"authorName"),"\u53c2\u6570\u88ab\u6307\u5b9a\u4e86\u60c5\u51b5 ",(0,l.kt)("em",{parentName:"p"},"(\u4e3a\u4e86\u7b80\u5316\u8ba8\u8bba\uff0c\u4e0d\u6307\u5b9a",(0,l.kt)("inlineCode",{parentName:"em"},"fetcher"),"\u53c2\u6570)"),"\u3002"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'List<Book> books = bookRepository.find(null, null, "A", null);\n'))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val books = bookRepository.find(authorName = "M")\n')))),(0,l.kt)("p",null,"\u751f\u6210\u7684SQL\u5982\u4e0b(\u4e3a\u4e86\u65b9\u4fbf\u9605\u8bfb\uff0c\u505a\u4e86\u683c\u5f0f\u5316)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select tb_1_.ID, tb_1_.NAME, tb_1_.EDITION, tb_1_.PRICE, tb_1_.STORE_ID \nfrom BOOK as tb_1_ \nwhere \n    tb_1_.ID in (\n        /* highlight-next-line */\n        select tb_3_.BOOK_ID \n        from AUTHOR as tb_2_ \n        inner join BOOK_AUTHOR_MAPPING as tb_3_ \n            on tb_2_.ID = tb_3_.AUTHOR_ID \n        where \n            lower(tb_2_.FIRST_NAME) like ? /* %a% */\n        or \n            lower(tb_2_.LAST_NAME) like ? /* %a% */\n    ) \norder by \n    tb_1_.NAME asc, \n    tb_1_.EDITION desc\n")),(0,l.kt)("h2",{id:"\u76f4\u63a5\u4f7f\u7528\u5e95\u5c42\u7684sqlclient"},"\u76f4\u63a5\u4f7f\u7528\u5e95\u5c42\u7684SqlClient"),(0,l.kt)("h3",{id:"\u6784\u5efasqlclient"},"\u6784\u5efaSqlClient"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"SqlClient"),"\u662fJimmer\u4e2d\u6700\u5e95\u5c42\u7684API"),(0,l.kt)("table",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"Java"),(0,l.kt)("td",null,"org.babyfish.jimmer.sql.JSqlClient")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Kotlin"),(0,l.kt)("td",null,"org.babyfish.jimmer.sql.kt.KSqlClient"))),(0,l.kt)("p",null,"\u5982\u679c\u7528\u5f00\u53d1\u4eba\u5458\u4e3aSpring\u6ce8\u5165",(0,l.kt)("inlineCode",{parentName:"p"},"SqlClient"),"\uff0c\u5219Jimmer\u7684SpringBoot starter\u4f1a\u81ea\u52a8\u521b\u5efa\u4e00\u4e2a"),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"\u5bf9\u4e8eKotlin\u9879\u76ee\u800c\u8a00\uff0c\u5fc5\u987b\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"applicaiton.properties"),"\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"application.yml"),"\u4e2d\u914d\u7f6e",(0,l.kt)("inlineCode",{parentName:"p"},"jimmer.language")," = ",(0,l.kt)("inlineCode",{parentName:"p"},"kotlin"),"\u3002\n\u56e0\u4e3a\uff0cJimmer\u6839\u636e",(0,l.kt)("inlineCode",{parentName:"p"},"jimmer.langage"),"\u7684\u8bbe\u7f6e\u51b3\u5b9a\u81ea\u52a8\u521b\u5efa",(0,l.kt)("inlineCode",{parentName:"p"},"JSqlClient"),"\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"KSqlClient"),"\u3002")),(0,l.kt)("p",null,"\u5f00\u53d1\u4eba\u5458\u4e5f\u53ef\u8986\u76d6Jimmer\u81ea\u52a8\u521b\u5efa\u7684SqlClient\uff0c\u5982\u4e0b"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// highlight-next-line\n@Bean\npublic JSqlClient sqlClient() {\n    return JSqlClient\n        .newBuilder()\n        .setDialect(new PostgresDialect())\n        ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n        .build();\n}\n"))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"// highlight-next-line\n@Bean\nfun sqlClient(): KSqlClient =\n    newKSqlClient {\n        setDialect(new PostgresDialect())\n        ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n    }\n")))),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u5982\u679c\u9009\u62e9\u8986\u76d6Jimmer\u9ed8\u8ba4\u63d0\u4f9b\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"SqlClient"),"\uff0c\u5efa\u8bae\u8ba9\u5176\u540d\u79f0\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"sqlClient"),"\u3002"),(0,l.kt)("p",{parentName:"admonition"},"\u5426\u5219\uff0c\u5c31\u9700\u8981\u5728SpringBoot Application\u6216\u67d0\u4e2aSpring\u914d\u7f6e\u7c7b\u4e0a\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},'@EnableJimmerRepositories(sqlClientRef = "mySqlClient")'))),(0,l.kt)("h3",{id:"\u4f7f\u7528sqlclient"},"\u4f7f\u7528SqlClient"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@SpringBootApplicattion\npublic class App {\n    \n    public static void main(args: Array<String>) {\n        ApplicationContext ctx = SpringApplication.run(App.class, args);\n        JSqlClient sqlClient = ctx.getBean(JSqlClient.class);\n        List<Tuple3<Book, Integer, Integer>> tuples = sqlClient\n            .createQuery(table)\n            .select(\n                // \u7b2c\u4e00\u5217\uff0c\u4ee5Book\u4e3a\u805a\u5408\u6839\u4e14\u5f62\u72b6\u53d7\u5bf9\u8c61\u6293\u53d6\u5668\u63a7\u5236\u7684\u6570\u636e\u7ed3\u6784\n                table.fetch(\n                    BookFetcher.$\n                        .allScalarFields()\n                        .authors(\n                            AuthorFetcher.$\n                                .allScalarFields()\n                        )\n                ),\n                // \u7b2c\u4e8c\u5217\uff1a\u4ee5Native SQL\u7684\u65b9\u5f0f\u5d4c\u5165\u7684\u5206\u6790\u51fd\u6570\n                Expression.numeric().sql(\n                    Integer.class,\n                    "rank() over(order by %e desc)",\n                    table.price()\n                ),\n                // \u7b2c\u4e09\u5217\uff1a\u4ee5Native SQL\u7684\u65b9\u5f0f\u5d4c\u5165\u7684\u5206\u6790\u51fd\u6570\n                Expression.numeric().sql(\n                    Integer.class,\n                    "rank() over(partition by %e order by %e desc)",\n                    new Expression[] { table.store().id(), table.price() }\n                )\n            )\n            .execute();\n        for (Tuple3<Book, Integer, Integer> tuple : tupes) {\n            System.out.printf(\n                "Book object: %o, Global rank: %d, Local rank: %d\\n",\n                tuple.get_1(),\n                tuple.get_2(),\n                tuple.get_3()\n            );\n        }\n    }\n}\n'))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'@SpringBootApplicattion\nclass App\n\nfun main(args: Array<String>) {\n    val ctx = runApplication(App::class, *args)\n    val sqlClient = ctx.getBean(KSqlClient::class.java)\n    val tuples = sqlClient\n        .createQuery(Author::class) {\n            select(\n                // \u7b2c\u4e00\u5217\uff0c\u4ee5Book\u4e3a\u805a\u5408\u6839\u4e14\u5f62\u72b6\u53d7\u5bf9\u8c61\u6293\u53d6\u5668\u63a7\u5236\u7684\u6570\u636e\u7ed3\u6784\n                table.fetchBy {\n                    allScalarFields()\n                    authors {\n                        allScalarFields()\n                    }\n                },\n                // \u7b2c\u4e8c\u5217\uff1a\u4ee5Native SQL\u7684\u65b9\u5f0f\u5d4c\u5165\u7684\u5206\u6790\u51fd\u6570\n                sql(Int::class, "rank() over(order by %e desc)") {\n                    expression(table.price)\n                },\n                // \u7b2c\u4e09\u5217\uff1a\u4ee5Native SQL\u7684\u65b9\u5f0f\u5d4c\u5165\u7684\u5206\u6790\u51fd\u6570\n                sql("rank() over(partition by %e order by %e desc)") {\n                    expression(table.store.id)\n                    expression(table.price)\n                }\n            )\n        }\n        .execute()\n    for ((book, globalRank, localRank) in tuples) {\n        println("Book object: $book, Global rank: $globalRank, Local Rank: $localRank")\n    }\n}\n')))))}k.isMDXComponent=!0}}]);