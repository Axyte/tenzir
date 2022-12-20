"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3102],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,b=m["".concat(s,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(b,i(i({ref:t},p),{},{components:r})):n.createElement(b,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},84613:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={title:"VAST v2.3.1",authors:"lava",date:new Date("2022-10-17T00:00:00.000Z"),tags:["release","rebuild","performance"]},i=void 0,l={permalink:"/blog/vast-v2.3.1",source:"@site/blog/vast-v2.3.1/index.md",title:"VAST v2.3.1",description:"VAST v2.3.1 is now available. This small bugfix release",date:"2022-10-17T00:00:00.000Z",formattedDate:"October 17, 2022",tags:[{label:"release",permalink:"/blog/tags/release"},{label:"rebuild",permalink:"/blog/tags/rebuild"},{label:"performance",permalink:"/blog/tags/performance"}],readingTime:.225,hasTruncateMarker:!1,authors:[{name:"Benno Evers",title:"Principal Engineer",url:"https://github.com/lava",email:"benno@tenzir.com",imageURL:"https://github.com/lava.png",key:"lava"}],frontMatter:{title:"VAST v2.3.1",authors:"lava",date:"2022-10-17T00:00:00.000Z",tags:["release","rebuild","performance"]},prevItem:{title:"Parquet & Feather: Writing Security Telemetry",permalink:"/blog/parquet-and-feather-writing-security-telemetry"},nextItem:{title:"Parquet & Feather: Enabling Open Investigations",permalink:"/blog/parquet-and-feather-enabling-open-investigations"}},s={authorsImageUrls:[void 0]},c=[],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/tenzir/vast/releases/tag/v2.3.1"},"VAST v2.3.1")," is now available. This small bugfix release\naddresses an issue where ",(0,a.kt)("a",{parentName:"p",href:"https://vast.io/docs/use/transform#transform-old-data-when-reaching-storage-quota"},"compaction")," would hang if encountering\ninvalid partitions that were produced by older versions of VAST when a large\n",(0,a.kt)("inlineCode",{parentName:"p"},"max-partition-size")," was set in combination with badly compressible input data."))}u.isMDXComponent=!0}}]);