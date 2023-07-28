"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[9641],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=m(a),d=r,b=c["".concat(p,".").concat(d)]||c[d]||s[d]||o;return a?n.createElement(b,l(l({ref:t},u),{},{components:a})):n.createElement(b,l({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var m=2;m<o;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(34334);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(83117),r=a(67294),o=a(34334),l=a(72389),i=a(67392),p=a(7094),m=a(12466);const u="tabList__CuJ",s="tabItem_LNqP";function c(e){var t;const{lazy:a,block:l,defaultValue:c,values:d,groupId:b,className:k}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=d??f.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),v=(0,i.l)(h,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===c?c:c??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==N&&!h.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:y}=(0,p.U)(),[O,T]=(0,r.useState)(N),j=[],{blockElementScrollPositionUntilNextRender:w}=(0,m.o5)();if(null!=b){const e=g[b];null!=e&&e!==O&&h.some((t=>t.value===e))&&T(e)}const x=e=>{const t=e.currentTarget,a=j.indexOf(t),n=h[a].value;n!==O&&(w(t),T(n),null!=b&&y(b,String(n)))},C=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=j.indexOf(e.currentTarget)+1;a=j[t]??j[0];break}case"ArrowLeft":{const t=j.indexOf(e.currentTarget)-1;a=j[t]??j[j.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},k)},h.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>j.push(e),onKeyDown:C,onFocus:x,onClick:x},l,{className:(0,o.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":O===t})}),a??t)}))),a?(0,r.cloneElement)(f.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function d(e){const t=(0,l.Z)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}},51342:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>k,frontMatter:()=>m,metadata:()=>s,toc:()=>d});var n=a(83117),r=(a(67294),a(3905)),o=a(65488),l=a(85162);const i={toc:[]};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u591a\u7ebf\u7a0b\u5b89\u5168\u6027\uff0c\u8fd9\u70b9\u5f88\u597d\u7406\u89e3\uff0c\u4e0d\u7528\u89e3\u91ca\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5bf9\u4e8eSet\u3001Map\u8fd9\u7c7b\u4f9d\u8d56hashCode\u7684\u96c6\u5408\u5bb9\u5668\u800c\u8a00\uff0c\u8feb\u5207\u9700\u8981\u5bf9\u8c61\u7684\u4e0d\u53ef\u53d8\u6027\u3002"),(0,r.kt)("p",{parentName:"li"},"\u4e00\u65e6Set\u6216Map ",(0,r.kt)("em",{parentName:"p"},"(\u4f5c\u4e3aKey)")," \u8fd9\u6837\u7684hashCode\u654f\u611f\u96c6\u5408\u5bb9\u5668\u6301\u6709\u4e86\u53ef\u53d8\u5bf9\u8c61\uff0c\u5f00\u53d1\u4eba\u5458\u5c31\u5fc5\u987b\u5c0f\u5fc3\u7ffc\u7ffc\u5730\u786e\u4fdd\u4e0d\u53bb\u4fee\u6539\u88ab\u8fd9\u4e9b\u5bb9\u5668\u5171\u4eab\u7684\u6570\u636e\u3002\u5982\u679c\u4e0d\u614e\u72af\u4e86\u9519\u8bef\uff0c\u901a\u5e38\u9700\u8981debug\u8ddf\u8e2a\u6765\u53d1\u73b0\u95ee\u9898\uff0c\u8fd9\u5f80\u5f80\u4f1a\u6d6a\u8d39\u65f6\u95f4\u5f71\u54cd\u6548\u7387\u3002",(0,r.kt)("em",{parentName:"p"},"(\u5176\u5b9e\uff0chashCode\u654f\u611f\u96c6\u5408\u5bb9\u5668\u6301\u6709\u53ef\u53d8\u5bf9\u8c61\u662f\u4e00\u79cd\u5e38\u89c1\u7684\u884c\u4e3a\uff0c\u4e5f\u53ef\u4ee5\u8bf4\u5927\u90e8\u5206Java\u4ee3\u7801\u90fd\u662f\u4e0d\u4e25\u5bc6\u7684\uff0c\u53ea\u662f\u5f00\u53d1\u4eba\u5458\u907f\u5f00\u4e86\u6b64\u95ee\u9898\u800c\u5df2)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5b9e\u9645\u5f00\u53d1\u4e2d\u8fd8\u6709\u4e00\u4e9b\u957f\u671f\u6301\u6709\u5bf9\u8c61\u7684\u573a\u5408\u573a\u5408\uff0c\u867d\u7136\u4e0d\u4f9d\u8d56hashCode\uff0c\u4f46\u4e5f\u4f1a\u56e0\u957f\u671f\u6301\u6709\u5bf9\u8c61\u800c\u5bfc\u81f4\u95ee\u9898\uff0c\u6bd4\u5982\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5229\u7528WebSession\u4e2d\u957f\u671f\u6301\u6709\u67d0\u4e9b\u6570\u636e")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5229\u7528\u4e00\u7ea7\u7f13\u5b58\uff0c\u5373\uff0c\u4f7f\u7528JVM\u5185\u5b58\u7684\u8fdb\u7a0b\u5185\u7f13\u5b58\uff0c\u957f\u671f\u6301\u6709\u67d0\u4e9b\u6570\u636e"))),(0,r.kt)("p",{parentName:"li"},"\u7ec6\u5fc3\u7684\u5f00\u53d1\u4eba\u5458\u80af\u5b9a\u4e0d\u5e0c\u671bWebSession\u6216Cache\u4e2d\u88ab\u957f\u671f\u6301\u6709\u6570\u636e\u7684\u5f15\u7528\u548c\u6cc4\u6f0f\u5230\u7528\u6237\u4ee3\u7801\u4e2d\u7684\u5f15\u7528\u5171\u4eab\u6570\u636e\u7ed3\u6784\uff0c\u8fdb\u800c\u5bfc\u81f4\u4e0d\u53ef\u63a7\u7684\u5f7c\u6b64\u5e72\u6270\u3002"),(0,r.kt)("p",{parentName:"li"},"\u56e0\u6b64\uff0c\u5bf9WebSession\u6216JVM\u5185\u90e8Cache\u8fd9\u7c7b\u957f\u671f\u6301\u6709\u6570\u636e\u7684\u7ed3\u6784\u8fdb\u884c\u8bfb\u5199\u64cd\u4f5c\u65f6\uff0c\u7ec6\u5fc3\u7684\u5f00\u53d1\u4eba\u5458\u4f1a\u5c06\u53ef\u53d8\u6570\u636e\u7ed3\u6784\u590d\u5236\u4e00\u6b21\u518d\u8fdb\u884c\u4fdd\u5b58\u6216\u8fd4\u56de\u3002\u5176\u4e2d\uff0c\u5199\u5165\u65f6\u590d\u5236\u5c1a\u53ef\u63a5\u53d7\uff0c\u4f46\u6bcf\u6b21\u8bfb\u53d6\u90fd\u590d\u5236\u4e00\u6b21\u663e\u5f97\u6602\u8d35\u3002\u53ef\u89c1"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528\u53ef\u53d8\u5bf9\u8c61\uff0c\u662f\u5426\u9700\u8981\u590d\u5236\u5bf9\u8c61\u4ee5\u4fdd\u8bc1\u5fc5\u8981\u5b89\u5168\u6027\uff0c\u4f9d\u8d56\u4e8e\u5f00\u53d1\u4eba\u5458\u7684\u98ce\u9669\u9884\u77e5\u80fd\u529b\uff0c\u8fd9\u9700\u8981\u5f00\u53d1\u4eba\u5458\u6709\u4e00\u5b9a\u7ecf\u9a8c\u5e76\u751f\u6027\u8c28\u614e\u3002\u7136\u800c\uff0c\u5373\u4fbf\u9884\u77e5\u4e86\u98ce\u9669\uff0c\u89e3\u51b3\u4e4b\u9053\u4e5f\u6ca1\u6709\u5ba2\u89c2\u6807\u51c6\uff0c\u8fc7\u4e8e\u4e25\u683c\u4f1a\u5bfc\u81f4\u8fc7\u591a\u4e0d\u5fc5\u8981\u590d\u5236\uff0c\u5f62\u6210\u6d6a\u8d39\uff0c\u8fc7\u4e8e\u5bbd\u677e\u4f1a\u5bfc\u81f4\u590d\u5236\u4e0d\u8db3\uff0c\u51fa\u73b0BUG ",(0,r.kt)("em",{parentName:"p"},"(\u56e2\u961f\u4eba\u6570\u8d8a\u591a\uff0c\u8d8a\u5bb9\u6613\u51fa\u9519)"),"\u3002\u800c\u4e14\uff0c\u5bf9\u4e8e\u6709\u4e00\u5b9a\u4f53\u91cf\u7684\u6570\u636e\u800c\u8a00\uff0c\u56e2\u961f\u5185\u90e8\u5bf9\u8fd9\u79cd\u4fdd\u62a4\u673a\u5236\u7684\u4e25\u683c\u7a0b\u5ea6\u4e5f\u5e38\u6709\u4e89\u8bba\uff0c\u5177\u5907\u5f88\u5f3a\u7684\u4e3b\u89c2\u6027\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528\u53ef\u4e0d\u53d8\u5bf9\u8c61\uff0c\u53ea\u6709\u6570\u636e\u7ed3\u6784\u88ab\u201c\u4fee\u6539\u201d ",(0,r.kt)("em",{parentName:"p"},"(\u8fd9\u91cc\u7684\u4fee\u6539\u662f\u4f2a\u4fee\u6539\uff0c\u5e76\u975e\u771f\u6b63\u7684\u4fee\u6539\u5f53\u524d\u6570\u636e\uff0c\u540e\u7eed\u6587\u6863\u4f1a\u8be6\u7ec6\u8ba8\u8bba\u4e4b)")," \u65f6\u624d\u590d\u5236\u90e8\u5206\u6570\u636e ",(0,r.kt)("em",{parentName:"p"},"(Jimmer/Immer\u5185\u90e8\u5bf9\u6b64\u6709\u4f18\u5316\uff0c\u88ab\u4fee\u6539\u7684\u5bf9\u8c61\u4f1a\u88ab\u590d\u5236\uff0c\u4ece\u5176\u4e0a\u7ea7\u5bf9\u8c61\u5f00\u59cb\u5230\u6839\u8282\u70b9\u4e3a\u6b62\u7684\u6240\u6709\u7956\u5148\u8282\u70b9\u4e5f\u4f1a\u88ab\u590d\u5236\uff0c\u7136\u800c\uff0c\u5176\u4f59\u6240\u6709\u672a\u53d8\u7684\u5206\u652f\u4ecd\u7136\u5171\u4eab\u91cd\u7528)")," \u5f97\u5230\u65b0\u7684\u805a\u5408\u6839\u5f15\u7528\uff0c\u5176\u4f59\u60c5\u51b5\u4e00\u5f8b\u7b80\u5355\u5171\u4eab\u539f\u59cb\u5f15\u7528\u5373\u53ef\u3002\u5177\u5907\u975e\u5e38\u4e25\u683c\u7684\u65e0\u53ef\u4e89\u8bae\u7684\u5ba2\u89c2\u6027\u3002"))),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u6beb\u65e0\u7591\u95ee\uff0c\u57fa\u4e8e\u5ba2\u89c2\u89c4\u5f8b\u8fdb\u884c\u5f00\u53d1\uff0c\u5fc5\u7136\u4f18\u4e8e\u57fa\u4e8e\u4e3b\u89c2\u611f\u89c9\u8fdb\u884c\u5f00\u53d1\uff0c\u8fd9\u975e\u5e38\u91cd\u8981\u3002")))))}p.isMDXComponent=!0;const m={sidebar_position:1,title:"\u539f\u56e0"},u=void 0,s={unversionedId:"object/immutable/reason",id:"object/immutable/reason",title:"\u539f\u56e0",description:"\u548c\u5176\u4ed6ORM\u4e0d\u540c\uff0cJimmer\u91c7\u7528\u4e0d\u53ef\u53d8\u5bf9\u8c61\u4f5c\u4e3a\u5b9e\u4f53\u5bf9\u8c61",source:"@site/docs/object/immutable/reason.mdx",sourceDirName:"object/immutable",slug:"/object/immutable/reason",permalink:"/jimmer/docs/object/immutable/reason",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/object/immutable/reason.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u539f\u56e0"},sidebar:"tutorialSidebar",previous:{title:"\u4e0d\u53ef\u53d8\u6027",permalink:"/jimmer/docs/object/immutable/"},next:{title:"\u73b0\u72b6",permalink:"/jimmer/docs/object/immutable/current-situation"}},c={},d=[{value:"\u521d\u8877",id:"\u521d\u8877",level:2},{value:"\u7981\u6b62\u5faa\u73af\u5f15\u7528",id:"\u7981\u6b62\u5faa\u73af\u5f15\u7528",level:3},{value:"\u6f14\u793a",id:"\u6f14\u793a",level:3},{value:"\u5176\u4ed6\u597d\u5904",id:"\u5176\u4ed6\u597d\u5904",level:2}],b={toc:d};function k(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u548c\u5176\u4ed6ORM\u4e0d\u540c\uff0cJimmer\u91c7\u7528\u4e0d\u53ef\u53d8\u5bf9\u8c61\u4f5c\u4e3a\u5b9e\u4f53\u5bf9\u8c61 "),(0,r.kt)("h2",{id:"\u521d\u8877"},"\u521d\u8877"),(0,r.kt)("h3",{id:"\u7981\u6b62\u5faa\u73af\u5f15\u7528"},"\u7981\u6b62\u5faa\u73af\u5f15\u7528"),(0,r.kt)("p",null,"ORM\u5e38\u5e38\u4f34\u968f\u4e00\u4e2a\u975e\u5e38\u5934\u75bc\u7684\u95ee\u9898\uff1a\u5faa\u73af\u5f15\u7528\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5305\u542b\u5faa\u73af\u5f15\u7528\u7684\u6570\u636e\u7ed3\u6784\u65e0\u6cd5\u88ab\u7b80\u5355\u5730JSON\u5e8f\u5217\u5316\uff0c\u8fd9\u5bf9HTTP API\u7684\u8bbe\u8ba1\u662f\u81f4\u547d\u7f3a\u9677\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5176\u5b9e\uff0c\u8fd9\u4e2a\u95ee\u9898\u5e76\u975e\u65e0\u6cd5\u89e3\u51b3\uff0c\u6bd4\u5982\uff0c\u53ef\u4ee5\u5229\u7528JSON\u5e8f\u5217\u5316\u5e93 ",(0,r.kt)("em",{parentName:"p"},"(\u5982",(0,r.kt)("a",{parentName:"em",href:"https://github.com/FasterXML/jackson"},"Jackson"),")")," \u7684\u9ad8\u7ea7\u529f\u80fd\u5e8f\u5217\u5316\u5305\u542b\u5faa\u73af\u5f15\u7528\u7684\u6570\u636e\u7ed3\u6784\u3002\u4f46\u8fd9\u6beb\u65e0\u610f\u4e49\uff0c\u56e0\u4e3a\u5e8f\u5217\u5316\u540e\u7684\u7ed3\u679c\u5305\u542b\u4e86\u7279\u6b8a\u7684\u6269\u5c55\u5185\u5bb9\uff0c\u5e76\u4e0d\u80fd\u4e3a\u5ba2\u6237\u7aef\u7684\u6240\u6709\u7f16\u7a0b\u8bed\u8a00\u6240\u7406\u89e3\u3002"))),(0,r.kt)("p",null,"\u4f5c\u4e3a\u4e00\u4e2aORM\uff0cJimmer\u5f53\u7136\u5141\u8bb8\u7528\u6237\u5728\u5b9e\u4f53\u7c7b\u578b\u4e4b\u95f4\u5b9a\u53cc\u5411\u5173\u8054\uff0c\u8fd9\u662fORM\u4e00\u4e2a\u5f3a\u5927\u7684\u80fd\u529b\u3002"),(0,r.kt)("p",null,"\u7136\u800c\uff0c\u5728\u5b9e\u4f8b\u5316\u5bf9\u8c61\u65f6\uff0c\u4e00\u65e6\u5f00\u53d1\u4eba\u5458\u51b3\u5b9a\u4e86\u805a\u5408\u6839\u7684\u7c7b\u578b\uff0c\u90a3\u4e48\u88ab\u521b\u5efa\u7684\u6570\u636e\u7ed3\u6784\u5c31\u53ea\u80fd\u662f\u4ee5\u805a\u5408\u6839\u5bf9\u8c61\u4f5c\u4e3a\u8d77\u70b9\u7684\u5355\u5411\u6811\u3002"),(0,r.kt)("p",null,"\u5373\uff0c\u5b9e\u4f53\u7c7b\u578b\u4e4b\u95f4\u53ef\u4ee5\u5b9a\u4e49\u53cc\u5411\u5173\u8054\uff0c\u4fdd\u7559\u4e24\u4e2a\u65b9\u5411\u7684\u53ef\u80fd\u6027\u3002\u5f85\u5b9e\u4f8b\u5316\u5bf9\u8c61\u65f6\uff0c\u518d\u6309\u7167\u4e1a\u52a1\u7279\u6027\u9009\u62e9\u4f7f\u7528\u5176\u4e2d\u4e00\u4e2a\u5173\u8054\u65b9\u5411\u3002"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Jimmer\u4e2d\u4efb\u4f55\u5b9e\u4f53\u76f8\u5173\u6570\u636e\u7ed3\u6784\u7edd\u4e0d\u5305\u542b\u5faa\u73af\u5f15\u7528\uff0c\u56e0\u6b64\uff0c\u65e0\u9700\u505a\u4efb\u4f55\u8f6c\u5316\uff0c\u5c31\u53ef\u4ee5\u76f4\u63a5\u53c2\u4e0eJSON\u5e8f\u5217\u5316\u8fdb\u800c\u88abHTTP\u534f\u8bae\u4f20\u8f93\uff0c\u5e76\u4fdd\u8bc1HTTP\u4f20\u9012\u7684\u6570\u636e\u7684\u7b80\u5355\u6027\u4ee5\u4fdd\u8bc1\u4efb\u4f55\u7f16\u7a0b\u8bed\u8a00\u90fd\u53ef\u4ee5\u7406\u89e3\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u8fd9\u4e3a\u5e94\u7528\u5f00\u53d1\u5e26\u6765\u4e86\u6781\u5927\u7684\u7b80\u5316\u3002")),(0,r.kt)("h3",{id:"\u6f14\u793a"},"\u6f14\u793a"),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'TreeNode aggregateRoot = TreeNodeDraft.$\n    .produce(aggregateRootDraft ->\n        aggregateRootDraft\n            .setName("Aggregate root")\n            .addIntoChildNodes(childDraft ->\n                childDraft\n                    .setName("Child")\n                    // \u629b\u51faCircularReferenceException\n                    // highlight-next-line\n                    .setParent(aggregateRootDraft)\n            )\n    );\n'))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val aggregateRoot = new(TreeNode::class).by {\n\n    val that = this\n\n    name = "Aggregate root"\n    childNodes().addBy {\n        name = "Child"\n        // \u629b\u51faCircularReferenceException\n        // highlight-next-line\n        parent = that\n    }\n}\n')))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u4e0a\u9762\u4ee3\u7801\u4f7f\u7528\u4e86\u4e00\u4e2a\u540d\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"TreeNode"),"\u7684\u7c7b\u578b\uff0c\u8be5\u63a5\u53e3\u662fJimmer\u6839\u636e\u7528\u6237\u5b9a\u4e49\u7684\u7c7b\u578b",(0,r.kt)("inlineCode",{parentName:"p"},"TreeNode"),"\u81ea\u52a8\u751f\u6210\u7684\u63a5\u53e3\u7c7b\u578b\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u8bfb\u8005\u53ef\u5148\u884c\u5ffd\u7565\u8fd9\u4e2a\u81ea\u52a8\u751f\u6210\u7684\u63a5\u53e3\uff0c\u540e\u7eed\u6587\u6863",(0,r.kt)("a",{parentName:"p",href:"../draft"},"Draft"),"\u4f1a\u5bf9\u5176\u505a\u51fa\u4ecb\u7ecd")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u8fd9\u6bb5\u4ee3\u7801\u4f1a\u5bfc\u81f4\u5f02\u5e38\uff1aorg.babyfish.jimmer.CircularReferenceException\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u867d\u7136\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u5728\u5b9e\u4f53\u7c7b\u578b\u4e4b\u95f4\u5b9a\u4e49\u53cc\u5411\u5173\u8054\uff0c\u4f46\u65e0\u6cd5\u5728\u5b9e\u4f53\u5bf9\u8c61\u4e4b\u95f4\u521b\u5efa\u53cc\u5411\u5173\u8054\u3002\u6b64\u884c\u4e3a\u88ab\u660e\u786e\u7981\u6b62\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u53ef\u89c1\uff0cJimmer\u963b\u6b62\u7528\u6237\u521b\u5efa\u5177\u5907\u5faa\u73af\u5f15\u7528\u7684\u6570\u636e\u7ed3\u6784\u3002"),(0,r.kt)("p",{parentName:"admonition"},"Jimmer\u5bf9\u8c61\u662f\u4e0d\u53d8\u5bf9\u8c61\uff0c\u7528\u6237\u65e2\u65e0\u6cd5\u5728\u521b\u5efa\u5bf9\u8c61\u65f6\u6784\u5efa\u5faa\u73af\u5f15\u7528\uff0c\u4e5f\u65e0\u6cd5\u901a\u8fc7\u540e\u671f\u4fee\u6539\u6765\u5f62\u6210\u5faa\u73af\u5f15\u7528\uff0c\u8fd9\u4e2a\u54c1\u8d28\u5c06\u4f1a\u88ab\u6c38\u8fdc\u4fdd\u7559\u3002")),(0,r.kt)("h2",{id:"\u5176\u4ed6\u597d\u5904"},"\u5176\u4ed6\u597d\u5904"),(0,r.kt)("p",null,"\u9664\u4e86\u4fdd\u8bc1\u5b9e\u4f53\u5bf9\u8c61\u4e4b\u95f4\u7edd\u5bf9\u6ca1\u6709\u5faa\u73af\u5f15\u7528\u5916"),(0,r.kt)(p,{mdxType:"ImmutableOtherBenefit"}))}k.isMDXComponent=!0}}]);