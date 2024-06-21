"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[95994],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>d});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},u="mdxType",v={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(t),f=o,d=u["".concat(p,".").concat(f)]||u[f]||v[f]||a;return t?n.createElement(d,s(s({ref:r},c),{},{components:t})):n.createElement(d,s({ref:r},c))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=f;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},38656:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>b,contentTitle:()=>m,default:()=>g,frontMatter:()=>d,metadata:()=>y,toc:()=>O});var n=t(3905),o=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))p.call(r,t)&&c(e,t,r[t]);if(i)for(var t of i(r))l.call(r,t)&&c(e,t,r[t]);return e},v=(e,r)=>a(e,s(r)),f=(e,r)=>{var t={};for(var n in e)p.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&i)for(var n of i(e))r.indexOf(n)<0&&l.call(e,n)&&(t[n]=e[n]);return t};const d={sidebar_custom_props:{operator:{transformation:!0}}},m="reverse",y={unversionedId:"operators/reverse",id:"version-v4.17/operators/reverse",title:"reverse",description:"Reverses the event order.",source:"@site/versioned_docs/version-v4.17/operators/reverse.md",sourceDirName:"operators",slug:"/operators/reverse",permalink:"/operators/reverse",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.17/operators/reverse.md",tags:[],version:"v4.17",frontMatter:{sidebar_custom_props:{operator:{transformation:!0}}},sidebar:"docsSidebar",previous:{title:"replace",permalink:"/operators/replace"},next:{title:"save",permalink:"/operators/save"}},b={},O=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}],h={toc:O},k="wrapper";function g(e){var r=e,{components:t}=r,o=f(r,["components"]);return(0,n.kt)(k,v(u(u({},h),o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"reverse"}),"reverse"),(0,n.kt)("p",null,"Reverses the event order."),(0,n.kt)("h2",u({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"reverse\n")),(0,n.kt)("h2",u({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The semantics of the ",(0,n.kt)("inlineCode",{parentName:"p"},"reverse")," operator are the same of the Unix tool ",(0,n.kt)("inlineCode",{parentName:"p"},"rev"),":\nIt reverses the order of events."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"reverse")," is a shorthand notation for ",(0,n.kt)("a",u({parentName:"p"},{href:"/operators/slice"}),(0,n.kt)("inlineCode",{parentName:"a"},"slice ::-1")),"."),(0,n.kt)("h2",u({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Reverse a stream of events:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"reverse\n")))}g.isMDXComponent=!0}}]);