"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[22691],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>d});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(t),f=o,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||i;return t?n.createElement(d,a(a({ref:r},c),{},{components:t})):n.createElement(d,a({ref:r},c))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p[u]="string"==typeof e?e:o,a[1]=p;for(var l=2;l<i;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},50894:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>b,contentTitle:()=>v,default:()=>h,frontMatter:()=>d,metadata:()=>y,toc:()=>O});var n=t(3905),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))s.call(r,t)&&c(e,t,r[t]);if(p)for(var t of p(r))l.call(r,t)&&c(e,t,r[t]);return e},m=(e,r)=>i(e,a(r)),f=(e,r)=>{var t={};for(var n in e)s.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&p)for(var n of p(e))r.indexOf(n)<0&&l.call(e,n)&&(t[n]=e[n]);return t};const d={},v="import",y={unversionedId:"operators/sinks/import",id:"version-Tenzir v4.5/operators/sinks/import",title:"import",description:"Imports events into a Tenzir node. The dual to export.",source:"@site/versioned_docs/version-Tenzir v4.5/operators/sinks/import.md",sourceDirName:"operators/sinks",slug:"/operators/sinks/import",permalink:"/operators/sinks/import",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.5/operators/sinks/import.md",tags:[],version:"Tenzir v4.5",frontMatter:{},sidebar:"docsSidebar",previous:{title:"fluent-bit",permalink:"/operators/sinks/fluent-bit"},next:{title:"save",permalink:"/operators/sinks/save"}},b={},O=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}],k={toc:O},g="wrapper";function h(e){var r=e,{components:t}=r,o=f(r,["components"]);return(0,n.kt)(g,m(u(u({},k),o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"import"}),"import"),(0,n.kt)("p",null,"Imports events into a Tenzir node. The dual to ",(0,n.kt)("a",u({parentName:"p"},{href:"/operators/sources/export"}),(0,n.kt)("inlineCode",{parentName:"a"},"export")),"."),(0,n.kt)("h2",u({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"import\n")),(0,n.kt)("h2",u({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"import")," operator persists events in a Tenzir node."),(0,n.kt)("h2",u({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Import Zeek conn logs into a Tenzir node."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"from file conn.log read zeek-tsv | import\n")))}h.isMDXComponent=!0}}]);