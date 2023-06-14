"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[63554],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},f="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),f=l(r),u=o,d=f["".concat(s,".").concat(u)]||f[u]||m[u]||a;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[f]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},10564:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>y,default:()=>w,frontMatter:()=>d,metadata:()=>v,toc:()=>k});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(p)for(var r of p(t))l.call(t,r)&&c(e,r,t[r]);return e},m=(e,t)=>a(e,i(t)),u=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r};const d={},y="print",v={unversionedId:"operators/transformations/print",id:"operators/transformations/print",title:"print",description:"The print operator converts raw bytes into events.",source:"@site/docs/operators/transformations/print.md",sourceDirName:"operators/transformations",slug:"/operators/transformations/print",permalink:"/docs/next/operators/transformations/print",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/main/web/docs/operators/transformations/print.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"pass",permalink:"/docs/next/operators/transformations/pass"},next:{title:"pseudonymize",permalink:"/docs/next/operators/transformations/pseudonymize"}},b={},k=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;format&gt;</code>",id:"format",level:3},{value:"Examples",id:"examples",level:2}],O={toc:k},h="wrapper";function w(e){var t=e,{components:r}=t,o=u(t,["components"]);return(0,n.kt)(h,m(f(f({},O),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",f({},{id:"print"}),"print"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"print")," operator converts raw bytes into events."),(0,n.kt)("admonition",f({},{title:"Expert Operator",type:"warning"}),(0,n.kt)("p",{parentName:"admonition"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},"print")," operator is a lower-level building block of the\n",(0,n.kt)("a",f({parentName:"p"},{href:"/docs/next/operators/sinks/to"}),(0,n.kt)("inlineCode",{parentName:"a"},"to"))," and ",(0,n.kt)("a",f({parentName:"p"},{href:"/docs/next/operators/sinks/write"}),(0,n.kt)("inlineCode",{parentName:"a"},"write"))," operators. Only use this\nif you need to operate on the raw bytes themselves.")),(0,n.kt)("h2",f({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{}),"print <format>\n")),(0,n.kt)("h2",f({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"print")," operator prints events and outputs the formatted result as raw\nbytes."),(0,n.kt)("h3",f({},{id:"format"}),(0,n.kt)("inlineCode",{parentName:"h3"},"<format>")),(0,n.kt)("p",null,"The ",(0,n.kt)("a",f({parentName:"p"},{href:"/docs/next/formats"}),"format")," used to convert events into raw bytes."),(0,n.kt)("p",null,"Some formats have format-specific options. Please refer to the documentation of\nthe individual formats for more information."),(0,n.kt)("h2",f({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Convert events into JSON:"),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{}),"print json\n")),(0,n.kt)("p",null,"Convert events into CSV:"),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{}),"print csv\n")))}w.isMDXComponent=!0}}]);