"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[97972],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=o.createContext({}),l=function(e){var r=o.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},c=function(e){var r=l(e.components);return o.createElement(s.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},d=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(t),d=n,m=u["".concat(s,".").concat(d)]||u[d]||f[d]||a;return t?o.createElement(m,p(p({ref:r},c),{},{components:t})):o.createElement(m,p({ref:r},c))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,p=new Array(a);p[0]=d;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[u]="string"==typeof e?e:n,p[1]=i;for(var l=2;l<a;l++)p[l]=t[l];return o.createElement.apply(null,p)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},21731:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>O,contentTitle:()=>y,default:()=>g,frontMatter:()=>m,metadata:()=>b,toc:()=>v});var o=t(3905),n=Object.defineProperty,a=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))s.call(r,t)&&c(e,t,r[t]);if(i)for(var t of i(r))l.call(r,t)&&c(e,t,r[t]);return e},f=(e,r)=>a(e,p(r)),d=(e,r)=>{var t={};for(var o in e)s.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&i)for(var o of i(e))r.indexOf(o)<0&&l.call(e,o)&&(t[o]=e[o]);return t};const m={},y="read",b={unversionedId:"operators/sources/read",id:"operators/sources/read",title:"read",description:"The read operator is a short form of the from operator that",source:"@site/docs/operators/sources/read.md",sourceDirName:"operators/sources",slug:"/operators/sources/read",permalink:"/next/operators/sources/read",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/operators/sources/read.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"load",permalink:"/next/operators/sources/load"},next:{title:"shell",permalink:"/next/operators/sources/shell"}},O={},v=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}],h={toc:v},k="wrapper";function g(e){var r=e,{components:t}=r,n=d(r,["components"]);return(0,o.kt)(k,f(u(u({},h),n),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",u({},{id:"read"}),"read"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"read")," operator is a short form of the ",(0,o.kt)("a",u({parentName:"p"},{href:"/next/operators/sources/from"}),(0,o.kt)("inlineCode",{parentName:"a"},"from"))," operator that\nallows for omitting the connector."),(0,o.kt)("h2",u({},{id:"synopsis"}),"Synopsis"),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{}),"read <format> [from <connector>]\n")),(0,o.kt)("h2",u({},{id:"description"}),"Description"),(0,o.kt)("p",null,"Please refer to the documentation of ",(0,o.kt)("a",u({parentName:"p"},{href:"/next/operators/sources/from"}),(0,o.kt)("inlineCode",{parentName:"a"},"from")),"."),(0,o.kt)("h2",u({},{id:"examples"}),"Examples"),(0,o.kt)("p",null,"Read JSON from stdin:"),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{}),"read json\n")),(0,o.kt)("p",null,"Read JSON from the Kafka topic ",(0,o.kt)("inlineCode",{parentName:"p"},"tenzir"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{}),"read json from kafka\n")))}g.isMDXComponent=!0}}]);