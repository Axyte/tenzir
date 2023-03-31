"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7629],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),f=n,b=u["".concat(p,".").concat(f)]||u[f]||m[f]||o;return r?a.createElement(b,i(i({ref:t},s),{},{components:r})):a.createElement(b,i({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},85758:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>w,frontMatter:()=>b,metadata:()=>h,toc:()=>d});var a=r(3905),n=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&s(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&s(e,r,t[r]);return e},m=(e,t)=>o(e,i(t)),f=(e,t)=>{var r={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&c.call(e,a)&&(r[a]=e[a]);return r};const b={title:"Parquet & Feather: Writing Security Telemetry",authors:["dispanser","mavam"],date:new Date("2022-10-24T00:00:00.000Z"),last_updated:new Date("2023-02-08T00:00:00.000Z"),tags:["benchmark","arrow","parquet","feather","quarto","r"]},g=void 0,h={permalink:"/blog/parquet-and-feather-writing-security-telemetry",source:"@site/blog/parquet-and-feather-writing-security-telemetry/index.md",title:"Parquet & Feather: Writing Security Telemetry",description:"How does Apache Parquet compare to Feather for storing",date:"2022-10-24T00:00:00.000Z",formattedDate:"October 24, 2022",tags:[{label:"benchmark",permalink:"/blog/tags/benchmark"},{label:"arrow",permalink:"/blog/tags/arrow"},{label:"parquet",permalink:"/blog/tags/parquet"},{label:"feather",permalink:"/blog/tags/feather"},{label:"quarto",permalink:"/blog/tags/quarto"},{label:"r",permalink:"/blog/tags/r"}],readingTime:26.56,hasTruncateMarker:!0,authors:[{name:"Thomas Peiselt",title:"Data Engineer",url:"https://github.com/dispanser",email:"thomas@tenzir.com",imageURL:"https://github.com/dispanser.png",key:"dispanser"},{name:"Matthias Vallentin",title:"Co-Founder & CEO",url:"https://github.com/mavam",email:"matthias@tenzir.com",imageURL:"https://github.com/mavam.png",key:"mavam"}],frontMatter:{title:"Parquet & Feather: Writing Security Telemetry",authors:["dispanser","mavam"],date:"2022-10-24T00:00:00.000Z",last_updated:"2023-02-08T00:00:00.000Z",tags:["benchmark","arrow","parquet","feather","quarto","r"]},prevItem:{title:"VAST v2.4",permalink:"/blog/vast-v2.4"},nextItem:{title:"VAST v2.3.1",permalink:"/blog/vast-v2.3.1"}},y={authorsImageUrls:[void 0,void 0]},d=[],v={toc:d},O="wrapper";function w(e){var t=e,{components:r}=t,n=f(t,["components"]);return(0,a.kt)(O,m(u(u({},v),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"How does Apache ",(0,a.kt)("a",u({parentName:"p"},{href:"https://parquet.apache.org/"}),"Parquet")," compare to ",(0,a.kt)("a",u({parentName:"p"},{href:"https://arrow.apache.org/docs/python/feather.html"}),"Feather")," for storing\nstructured security data? In this blog post, we answer this question."))}w.isMDXComponent=!0}}]);