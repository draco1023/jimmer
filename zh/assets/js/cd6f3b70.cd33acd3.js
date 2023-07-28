"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[8708],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=a.createContext({}),s=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(d.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(t),u=o,g=p["".concat(d,".").concat(u)]||p[u]||m[u]||r;return t?a.createElement(g,i(i({ref:n},c),{},{components:t})):a.createElement(g,i({ref:n},c))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=p;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(67294),o=t(34334);const r="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>u});var a=t(83117),o=t(67294),r=t(34334),i=t(72389),l=t(67392),d=t(7094),s=t(12466);const c="tabList__CuJ",m="tabItem_LNqP";function p(e){var n;const{lazy:t,block:i,defaultValue:p,values:u,groupId:g,className:b}=e,h=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=u??h.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),y=(0,l.l)(f,((e,n)=>e.value===n.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===p?p:p??(null==(n=h.find((e=>e.props.default)))?void 0:n.props.value)??h[0].props.value;if(null!==v&&!f.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:N}=(0,d.U)(),[j,T]=(0,o.useState)(v),x=[],{blockElementScrollPositionUntilNextRender:I}=(0,s.o5)();if(null!=g){const e=k[g];null!=e&&e!==j&&f.some((n=>n.value===e))&&T(e)}const w=e=>{const n=e.currentTarget,t=x.indexOf(n),a=f[t].value;a!==j&&(I(n),T(a),null!=g&&N(g,String(a)))},C=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=x.indexOf(e.currentTarget)+1;t=x[n]??x[0];break}case"ArrowLeft":{const n=x.indexOf(e.currentTarget)-1;t=x[n]??x[x.length-1];break}}null==(n=t)||n.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},b)},f.map((e=>{let{value:n,label:t,attributes:i}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:j===n?0:-1,"aria-selected":j===n,key:n,ref:e=>x.push(e),onKeyDown:C,onFocus:w,onClick:w},i,{className:(0,r.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":j===n})}),t??n)}))),t?(0,o.cloneElement)(h.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},h.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==j})))))}function u(e){const n=(0,i.Z)();return o.createElement(p,(0,a.Z)({key:String(n)},e))}},22811:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var a=t(83117),o=(t(67294),t(3905)),r=t(65488),i=t(85162);const l={sidebar_position:2,title:"Get started"},d=void 0,s={unversionedId:"old-en/jimmer-core/usage",id:"old-en/jimmer-core/usage",title:"Get started",description:"Add dependencies",source:"@site/docs/old-en/jimmer-core/usage.mdx",sourceDirName:"old-en/jimmer-core",slug:"/old-en/jimmer-core/usage",permalink:"/jimmer/zh/docs/old-en/jimmer-core/usage",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/old-en/jimmer-core/usage.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Get started"},sidebar:"tutorialSidebar",previous:{title:"Problems and Solutions",permalink:"/jimmer/zh/docs/old-en/jimmer-core/existing-problems"},next:{title:"Draft Proxies",permalink:"/jimmer/zh/docs/old-en/jimmer-core/draft"}},c={},m=[{value:"Add dependencies",id:"add-dependencies",level:2},{value:"Declare immutable model",id:"declare-immutable-model",level:2},{value:"Usage",id:"usage",level:2}],p={toc:m};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"add-dependencies"},"Add dependencies"),(0,o.kt)(r.Z,{groupId:"buildScript",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"java",label:"Java(Gradle)",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy",metastring:'title="build.gradle"',title:'"build.gradle"'},"dependencies {\n    \n    implementation 'org.babyfish.jimmer:jimmer-core:0.7.126'\n    annotationProcessor 'org.babyfish.jimmer:jimmer-apt:0.7.126'\n}\n"))),(0,o.kt)(i.Z,{value:"java-maven",label:"Java(Maven)",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="pom.xml"',title:'"pom.xml"'},"<dependencies>\n    <dependency>\n        <groupId>org.babyfish.jimmer</groupId>\n        <artifactId>jimmer-core</artifactId>\n        <version>0.7.126</version>\n    </dependency>\n</dependencies>\n\n<build>\n    <plugins>\n        <plugin>\n            <groupId>org.apache.maven.plugins</groupId>\n            <artifactId>maven-compiler-plugin</artifactId>\n            <version>3.10.1</version>\n            <configuration>\n                <annotationProcessorPaths>\n                    <path>\n                        <groupId>org.babyfish.jimmer</groupId>\n                        <artifactId>jimmer-apt</artifactId>\n                        <version>0.7.126</version>\n                    </path>\n                </annotationProcessorPaths>\n            </configuration>\n        </plugin>\n    </plugins>\n</build>\n"))),(0,o.kt)(i.Z,{value:"kotlin",label:"Kotlin(Gradle)",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="build.gradle.kts"',title:'"build.gradle.kts"'},'plugins {\n    // Step1: Add ksp plugin\n    id("com.google.devtools.ksp") version "1.7.10-1.0.6"\n    ...omit other plugins...\n}\ndependencies {\n\n    // Step2: Add jimmer-core-kotlin\n    implementation("org.babyfish.jimmer:jimmer-core-kotlin:0.7.126")\n\n    // Step3: Apply ksp plugin\n    ksp("org.babyfish.jimmer:jimmer-ksp:0.7.126")\n}\n\n// Step4: Add generated sources into compile path.\n// Without this configuration, gradle command can still run.\n// However, Intellij cannot find the generated source.\nkotlin {\n    sourceSets.main {\n        kotlin.srcDir("build/generated/ksp/main/kotlin")\n    }\n}\n'))),(0,o.kt)(i.Z,{value:"kotlin-maven",label:"Kotlin(Maven)",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="pom.xml"',title:'"pom.xml"'},"<dependency>\n    <groupId>org.babyfish.jimmer</groupId>\n    <artifactId>jimmer-core-kotlin</artifactId>\n    <version>0.7.126</version>\n</dependency>\n\n<build>\n    <sourceDirectory>src/main/kotlin</sourceDirectory>\n    <testSourceDirectory>src/test/kotlin</testSourceDirectory>\n\n    <plugins>\n        <plugin>\n            <groupId>org.jetbrains.kotlin</groupId>\n            <artifactId>kotlin-maven-plugin</artifactId>\n            <version>${kotlin.version}</version>\n            <executions>\n                <execution>\n                    <id>compile</id>\n                    <phase>compile</phase>\n                    <goals>\n                        <goal>compile</goal>\n                    </goals>\n                </execution>\n                <execution>\n                    <id>test-compile</id>\n                    <phase>test-compile</phase>\n                    <goals>\n                        <goal>test-compile</goal>\n                    </goals>\n                </execution>\n            </executions>\n            <configuration>\n                <compilerPlugins>\n                    <compilerPlugin>ksp</compilerPlugin>\n                </compilerPlugins>\n            </configuration>\n            <dependencies>\n                <dependency>\n                    <groupId>com.dyescape</groupId>\n                    <artifactId>kotlin-maven-symbol-processing</artifactId>\n                    <version>1.3</version>\n                </dependency>\n                <dependency>\n                    <groupId>org.babyfish.jimmer</groupId>\n                    <artifactId>jimmer-ksp</artifactId>\n                    <version>0.7.126</version>\n                </dependency>\n            </dependencies>\n        </plugin>\n    </plugins>\n</build>\n")))),(0,o.kt)("h2",{id:"declare-immutable-model"},"Declare immutable model"),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="TreeNode.java"',title:'"TreeNode.java"'},"package yourpackage;\n\nimport javax.validation.constraints.Null;\nimport java.util.List;\n\nimport org.babyfish.jimmer.Immutable;\n\n@Immutable\npublic interface TreeNode {\n    \n    String name();\n\n    @Null // Nullable property, Java-API needs it, but kotlin-API does not.\n    TreeNode parent();\n\n    List<TreeNode> childNodes();\n}\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Here, the properties ",(0,o.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"parent")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"childNodes")," adopt the naming rules of java record, do not start with ",(0,o.kt)("inlineCode",{parentName:"p"},"get"),"."),(0,o.kt)("p",{parentName:"admonition"},"You can also use the traditional java bean naming convention, starting with ",(0,o.kt)("inlineCode",{parentName:"p"},"get"),". Such as: ",(0,o.kt)("inlineCode",{parentName:"p"},"getName"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"getParent"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"getChildNodes"),"."),(0,o.kt)("p",{parentName:"admonition"},"No matter which style you adopt, jimmer-core accepts it. It is recommended to use the naming style of java record that does not start with ",(0,o.kt)("inlineCode",{parentName:"p"},"get"),", because ",(0,o.kt)("inlineCode",{parentName:"p"},"get")," will naturally be meaningless without ",(0,o.kt)("inlineCode",{parentName:"p"},"set"),"."),(0,o.kt)("p",{parentName:"admonition"},"Regardless of which style is used, it should be consistent within a single project."))),(0,o.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="TreeNode.kt"',title:'"TreeNode.kt"'},"package yourpackage\n\nimport org.babyfish.jimmer.Immutable\n\n@Immutable\ninterface TreeNode {\n\n    val name: String\n\n    val parent: TreeNode?\n\n    val childNodes: List<TreeNode>\n}\n")))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"jimmer-core uses the java annotation processor/ksp to generate mutable proxy (",(0,o.kt)("inlineCode",{parentName:"p"},"TreeNodeDraft"),' in the code below). With mutable proxy, developers can simply "modify" immutable objects using imperative code.'),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// Step 1, create data from scratch\nTreeNode treeNode = TreeNodeDraft.$.produce(root -> {\n    root.setName("Root").addIntoChildNodes(food -> {\n        food\n            .setName("Food")\n            .addIntoChildNodes(drink -> {\n                drink\n                    .setName("Drink")\n                    .addIntoChildNodes(cococola -> {\n                        cococola.setName("Cococola");\n                    })\n                    .addIntoChildNodes(fanta -> {\n                        fanta.setName("Fanta");\n                    });\n                ;\n            });\n        ;\n    });\n});\n\n// Step 2, make some "changes" based on the \n// existing data to create new data.\nTreeNode newTreeNode = TreeNodeDraft.$.produce(\n        // highlight-next-line\n        treeNode, // existing data\n        root -> {\n            root\n                .childNodes(false).get(0) // Food\n                .childNodes(false).get(0) // Drink\n                .childNodes(false).get(0) // Cococola\n                .setName("Cococola plus");\n        }\n);\n\nSystem.out.println("treeNode:" + treeNode);\nSystem.out.println("newTreeNode:" + newTreeNode);\n'))),(0,o.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'// Step 1, create data from scratch\nval treeNode = new(TreeNode::class).by {\n    name = "Root"\n    childNodes().addBy {\n        name = "Food"\n        childNodes().addBy {\n            name = "Drinks"\n            childNodes().addBy {\n                name = "Cococola"\n            }\n            childNodes().addBy {\n                name = "Fanta"\n            }\n        }\n    }\n}\n\n// Step 2, make some "changes" based on the \n// existing data to create new data.\nval newTreeNode = new(TreeNode::class).by(\n    // highlight-next-line\n    treeNode // existing data\n) {\n    childNodes()[0] // Food\n        .childNodes()[0] // Drinks\n        .childNodes()[0] // Cococola\n        .name += " plus"\n}\n\nprintln("treeNode: $treeNode")\nprintln("newTreeNode: $newTreeNode")\n')))),(0,o.kt)("p",null,"Output results (the actual print results are compact, but formatted here for readability)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'treeNode: {\n    "name":"Root",\n    "childNodes":[\n        {\n            "name":"Food",\n            "childNodes":[\n                {\n                    "name":"Drink",\n                    "childNodes":[\n                        // highlight-next-line\n                        {"name":"Cococola"},\n                        {"name":"Fanta"}\n                    ]\n                }\n            ]\n        }\n    ]\n}\nnewTreeNode: {\n    "name":"Root",\n    "childNodes":[\n        {\n            "name":"Food",\n            "childNodes":[\n                {\n                    "name":"Drink",\n                    "childNodes":[\n                        // highlight-next-line\n                        {"name":"Cococola plus"},\n                        {"name":"Fanta"}\n                    ]\n                }\n            ]\n        }\n    ]\n}\n')),(0,o.kt)("p",null,"The user-defined type ",(0,o.kt)("inlineCode",{parentName:"p"},"TreeNode")," is immutable type; but the type ",(0,o.kt)("inlineCode",{parentName:"p"},"TreeNodeDraft")," automatically generated by AnnotationProcessor is a mutable type, and developer can modify it very easily (Directly modifiable Draft objects are the parameters of lambda expressions in the example)."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The Draft object is very lightweight and is just a proxy. It uses a copy-on-write strategy, so instead of unconditionally copying the old object's data, the old object's data is copied only when it is modified for the first time.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"For a huge object tree, only the proxy of the root object will be created, and other sub-proxy objects are created on demand according to the read operation of user code.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Ultimately, only the modified proxy and its parent proxies chain will be used to recreate new immutable objects; unmodified proxies simply return their holdings to the old object. citations. That is, the unchanged subtree is fully shared and reused with the original subtree.")))))}u.isMDXComponent=!0}}]);