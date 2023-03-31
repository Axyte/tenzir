"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4745],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},47274:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>g,default:()=>O,frontMatter:()=>f,metadata:()=>y,toc:()=>h});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&s(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&s(e,r,t[r]);return e},m=(e,t)=>o(e,i(t)),d=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const f={title:"VAST v1.1.1",description:"VAST v1.1.1 - Compaction & Query Language Frontends",authors:"dominiklohmann",date:new Date("2022-03-25T00:00:00.000Z"),tags:["release","compaction","query"]},g=void 0,y={permalink:"/blog/vast-v1.1.1",source:"@site/blog/vast-v1.1.1/index.md",title:"VAST v1.1.1",description:"VAST v1.1.1 - Compaction & Query Language Frontends",date:"2022-03-25T00:00:00.000Z",formattedDate:"March 25, 2022",tags:[{label:"release",permalink:"/blog/tags/release"},{label:"compaction",permalink:"/blog/tags/compaction"},{label:"query",permalink:"/blog/tags/query"}],readingTime:.635,hasTruncateMarker:!0,authors:[{name:"Dominik Lohmann",title:"Engineering Manager",url:"https://github.com/dominiklohmann",email:"dominik@tenzir.com",imageURL:"https://github.com/dominiklohmann.png",key:"dominiklohmann"}],frontMatter:{title:"VAST v1.1.1",description:"VAST v1.1.1 - Compaction & Query Language Frontends",authors:"dominiklohmann",date:"2022-03-25T00:00:00.000Z",tags:["release","compaction","query"]},prevItem:{title:"VAST v1.1.2",permalink:"/blog/vast-v1.1.2"},nextItem:{title:"VAST v1.1",permalink:"/blog/vast-v1.1"}},b={authorsImageUrls:[void 0]},h=[],v={toc:h},k="wrapper";function O(e){var t=e,{components:r}=t,a=d(t,["components"]);return(0,n.kt)(k,m(u(u({},v),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Dear community, we are excited to announce ",(0,n.kt)("a",u({parentName:"p"},{href:"https://github.com/tenzir/vast/releases/tag/v1.1.1"}),"VAST\nv1.1.1"),"."),(0,n.kt)("p",null,"This release contains some important bug fixes on top of everything included in\nthe ",(0,n.kt)("a",u({parentName:"p"},{href:"https://github.com/tenzir/vast/releases/tag/v1.1.0"}),"VAST v1.1")," release."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The disk monitor now correctly continues deleting until below the low water\nmark after a partition failed to delete."),(0,n.kt)("li",{parentName:"ul"},"We fixed a rarely occurring race condition that caused query workers to become\nstuck after delivering all results until the corresponding client process\nterminated."),(0,n.kt)("li",{parentName:"ul"},"Queries that timed out or were externally terminated while in the query\nbacklog that had more unhandled candidate than taste partitions no longer\npermanently get stuck. This critical bug caused VAST to idle permanently on\nthe export path once all workers were stuck.")),(0,n.kt)("p",null,"Thanks to ",(0,n.kt)("a",u({parentName:"p"},{href:"https://github.com/norg"}),"@norg")," for reporting the issues."))}O.isMDXComponent=!0}}]);