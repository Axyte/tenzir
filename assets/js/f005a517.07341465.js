"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[97972],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=o.createContext({}),i=function(e){var r=o.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=i(e.components);return o.createElement(p.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},d=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=i(t),d=n,m=u["".concat(p,".").concat(d)]||u[d]||f[d]||a;return t?o.createElement(m,c(c({ref:r},l),{},{components:t})):o.createElement(m,c({ref:r},l))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=d;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s[u]="string"==typeof e?e:n,c[1]=s;for(var i=2;i<a;i++)c[i]=t[i];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},21731:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>O,contentTitle:()=>y,default:()=>j,frontMatter:()=>m,metadata:()=>b,toc:()=>v});var o=t(3905),n=Object.defineProperty,a=Object.defineProperties,c=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,l=(e,r,t)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))p.call(r,t)&&l(e,t,r[t]);if(s)for(var t of s(r))i.call(r,t)&&l(e,t,r[t]);return e},f=(e,r)=>a(e,c(r)),d=(e,r)=>{var t={};for(var o in e)p.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&s)for(var o of s(e))r.indexOf(o)<0&&i.call(e,o)&&(t[o]=e[o]);return t};const m={},y="read",b={unversionedId:"operators/sources/read",id:"operators/sources/read",title:"read",description:"The read operator is a short form of the from operator that",source:"@site/docs/operators/sources/read.md",sourceDirName:"operators/sources",slug:"/operators/sources/read",permalink:"/next/operators/sources/read",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/operators/sources/read.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"load",permalink:"/next/operators/sources/load"},next:{title:"shell",permalink:"/next/operators/sources/shell"}},O={},v=[],h={toc:v},g="wrapper";function j(e){var r=e,{components:t}=r,n=d(r,["components"]);return(0,o.kt)(g,f(u(u({},h),n),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",u({},{id:"read"}),"read"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"read")," operator is a short form of the ",(0,o.kt)("a",u({parentName:"p"},{href:"/next/operators/sources/from"}),(0,o.kt)("inlineCode",{parentName:"a"},"from"))," operator that\nallows for omitting the connector."),(0,o.kt)("p",null,"Please refer to the documentation of ",(0,o.kt)("a",u({parentName:"p"},{href:"/next/operators/sources/from"}),(0,o.kt)("inlineCode",{parentName:"a"},"from")),"."))}j.isMDXComponent=!0}}]);