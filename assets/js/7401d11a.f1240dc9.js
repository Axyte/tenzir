"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[17370],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),f=i,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return t?n.createElement(m,a(a({ref:r},c),{},{components:t})):n.createElement(m,a({ref:r},c))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},94566:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>b,contentTitle:()=>v,default:()=>h,frontMatter:()=>m,metadata:()=>y,toc:()=>k});var n=t(3905),i=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?i(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,d=(e,r)=>{for(var t in r||(r={}))l.call(r,t)&&c(e,t,r[t]);if(s)for(var t of s(r))p.call(r,t)&&c(e,t,r[t]);return e},u=(e,r)=>o(e,a(r)),f=(e,r)=>{var t={};for(var n in e)l.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&s)for(var n of s(e))r.indexOf(n)<0&&p.call(e,n)&&(t[n]=e[n]);return t};const m={},v="discard",y={unversionedId:"operators/sinks/discard",id:"version-Tenzir v4.3/operators/sinks/discard",title:"discard",description:"Discards all incoming events.",source:"@site/versioned_docs/version-Tenzir v4.3/operators/sinks/discard.md",sourceDirName:"operators/sinks",slug:"/operators/sinks/discard",permalink:"/operators/sinks/discard",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.3/operators/sinks/discard.md",tags:[],version:"Tenzir v4.3",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Sinks",permalink:"/operators/sinks/"},next:{title:"fluent-bit",permalink:"/operators/sinks/fluent-bit"}},b={},k=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}],O={toc:k},g="wrapper";function h(e){var r=e,{components:t}=r,i=f(r,["components"]);return(0,n.kt)(g,u(d(d({},O),i),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",d({},{id:"discard"}),"discard"),(0,n.kt)("p",null,"Discards all incoming events."),(0,n.kt)("admonition",d({},{type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"This operator is mainly used to test or benchmark pipelines.")),(0,n.kt)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"discard\n")),(0,n.kt)("h2",d({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"discard")," operator has a similar effect as ",(0,n.kt)("inlineCode",{parentName:"p"},"to file /dev/null write json"),",\nbut it immediately discards all events without rendering them as JSON first."),(0,n.kt)("h2",d({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"We can benchmark the following pipeline to see how long it takes to export\neverything."),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"export | discard\n")))}h.isMDXComponent=!0}}]);