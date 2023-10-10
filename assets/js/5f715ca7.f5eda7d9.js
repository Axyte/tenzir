"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[68370],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(r),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:o,a[1]=p;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},78498:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>v,default:()=>g,frontMatter:()=>f,metadata:()=>y,toc:()=>k});var n=r(3905),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(p)for(var r of p(t))l.call(t,r)&&c(e,r,t[r]);return e},u=(e,t)=>i(e,a(t)),d=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r};const f={},v="import",y={unversionedId:"operators/sinks/import",id:"version-Tenzir v4.3/operators/sinks/import",title:"import",description:"Imports events into a Tenzir node. The dual to export.",source:"@site/versioned_docs/version-Tenzir v4.3/operators/sinks/import.md",sourceDirName:"operators/sinks",slug:"/operators/sinks/import",permalink:"/operators/sinks/import",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.3/operators/sinks/import.md",tags:[],version:"Tenzir v4.3",frontMatter:{},sidebar:"docsSidebar",previous:{title:"fluent-bit",permalink:"/operators/sinks/fluent-bit"},next:{title:"save",permalink:"/operators/sinks/save"}},b={},k=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}],O={toc:k},h="wrapper";function g(e){var t=e,{components:r}=t,o=d(t,["components"]);return(0,n.kt)(h,u(m(m({},O),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",m({},{id:"import"}),"import"),(0,n.kt)("p",null,"Imports events into a Tenzir node. The dual to ",(0,n.kt)("a",m({parentName:"p"},{href:"/operators/sources/export"}),(0,n.kt)("inlineCode",{parentName:"a"},"export")),"."),(0,n.kt)("h2",m({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{}),"import\n")),(0,n.kt)("h2",m({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"import")," operator persists events in a Tenzir node."),(0,n.kt)("admonition",m({},{title:"Flush to disk",type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"Pipelines ending in the ",(0,n.kt)("inlineCode",{parentName:"p"},"import")," operator do not wait until all events in the\npipelines are written to disk."),(0,n.kt)("p",{parentName:"admonition"},"We plan to change this behavior in the near future. Until then, we recommend\nrunning ",(0,n.kt)("inlineCode",{parentName:"p"},"tenzir-ctl flush")," after importing events to make sure they're available\nfor downstream consumption.")),(0,n.kt)("h2",m({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Import Zeek conn logs into a Tenzir node."),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{}),"from file conn.log read zeek-tsv | import\n")))}g.isMDXComponent=!0}}]);