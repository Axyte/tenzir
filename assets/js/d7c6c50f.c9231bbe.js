"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[16692],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=c(t),d=o,f=u["".concat(p,".").concat(d)]||u[d]||b[d]||i;return t?n.createElement(f,s(s({ref:r},l),{},{components:t})):n.createElement(f,s({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=d;var a={};for(var p in r)hasOwnProperty.call(r,p)&&(a[p]=r[p]);a.originalType=e,a[u]="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},81214:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>y,contentTitle:()=>m,default:()=>g,frontMatter:()=>f,metadata:()=>v,toc:()=>h});var n=t(3905),o=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,l=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))p.call(r,t)&&l(e,t,r[t]);if(a)for(var t of a(r))c.call(r,t)&&l(e,t,r[t]);return e},b=(e,r)=>i(e,s(r)),d=(e,r)=>{var t={};for(var n in e)p.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&a)for(var n of a(e))r.indexOf(n)<0&&c.call(e,n)&&(t[n]=e[n]);return t};const f={sidebar_custom_props:{operator:{source:!0}}},m="subscribe",v={unversionedId:"operators/subscribe",id:"version-v4.15/operators/subscribe",title:"subscribe",description:"Subscribes to events from a channel with a topic. The dual to",source:"@site/versioned_docs/version-v4.15/operators/subscribe.md",sourceDirName:"operators",slug:"/operators/subscribe",permalink:"/operators/subscribe",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.15/operators/subscribe.md",tags:[],version:"v4.15",frontMatter:{sidebar_custom_props:{operator:{source:!0}}},sidebar:"docsSidebar",previous:{title:"sort",permalink:"/operators/sort"},next:{title:"summarize",permalink:"/operators/summarize"}},y={},h=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;topic&gt;</code>",id:"topic",level:3},{value:"Examples",id:"examples",level:2}],O={toc:h},k="wrapper";function g(e){var r=e,{components:t}=r,o=d(r,["components"]);return(0,n.kt)(k,b(u(u({},O),o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"subscribe"}),"subscribe"),(0,n.kt)("p",null,"Subscribes to events from a channel with a topic. The dual to\n",(0,n.kt)("a",u({parentName:"p"},{href:"/operators/publish"}),(0,n.kt)("inlineCode",{parentName:"a"},"publish")),"."),(0,n.kt)("h2",u({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"subscribe [<topic>]\n")),(0,n.kt)("h2",u({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"subscribe")," operator subscribes to events from a channel with the specified\ntopic. Multiple ",(0,n.kt)("inlineCode",{parentName:"p"},"subscribe")," operators with the same topic receive the same\nevents."),(0,n.kt)("h3",u({},{id:"topic"}),(0,n.kt)("inlineCode",{parentName:"h3"},"<topic>")),(0,n.kt)("p",null,"An optional topic identifying the channel events are published under."),(0,n.kt)("h2",u({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Subscribe to the events under the topic ",(0,n.kt)("inlineCode",{parentName:"p"},"zeek-conn"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"subscribe zeek-conn\n")))}g.isMDXComponent=!0}}]);