"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[99682],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>d});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=p(t),m=o,d=f["".concat(l,".").concat(m)]||f[m]||u[m]||a;return t?n.createElement(d,i(i({ref:r},c),{},{components:t})):n.createElement(d,i({ref:r},c))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[f]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},48358:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>b,contentTitle:()=>v,default:()=>g,frontMatter:()=>d,metadata:()=>y,toc:()=>k});var n=t(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,f=(e,r)=>{for(var t in r||(r={}))l.call(r,t)&&c(e,t,r[t]);if(s)for(var t of s(r))p.call(r,t)&&c(e,t,r[t]);return e},u=(e,r)=>a(e,i(r)),m=(e,r)=>{var t={};for(var n in e)l.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&s)for(var n of s(e))r.indexOf(n)<0&&p.call(e,n)&&(t[n]=e[n]);return t};const d={},v="zeek-json",y={unversionedId:"formats/zeek-json",id:"version-Tenzir v4.5/formats/zeek-json",title:"zeek-json",description:"The zeek-json format is an alias for json with the arguments:",source:"@site/versioned_docs/version-Tenzir v4.5/formats/zeek-json.md",sourceDirName:"formats",slug:"/formats/zeek-json",permalink:"/Tenzir v4.5/formats/zeek-json",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.5/formats/zeek-json.md",tags:[],version:"Tenzir v4.5",frontMatter:{},sidebar:"docsSidebar",previous:{title:"yaml",permalink:"/Tenzir v4.5/formats/yaml"},next:{title:"zeek-tsv",permalink:"/Tenzir v4.5/formats/zeek-tsv"}},b={},k=[],j={toc:k},O="wrapper";function g(e){var r=e,{components:t}=r,o=m(r,["components"]);return(0,n.kt)(O,u(f(f({},j),o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",f({},{id:"zeek-json"}),"zeek-json"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"zeek-json")," format is an alias for ",(0,n.kt)("a",f({parentName:"p"},{href:"/Tenzir%20v4.5/formats/json"}),(0,n.kt)("inlineCode",{parentName:"a"},"json"))," with the arguments:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--selector=_path:zeek")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'--unnest-separator="."')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'--ndjson"'))),(0,n.kt)("p",null,"All other options from ",(0,n.kt)("a",f({parentName:"p"},{href:"/Tenzir%20v4.5/formats/json"}),(0,n.kt)("inlineCode",{parentName:"a"},"json"))," are also supported."))}g.isMDXComponent=!0}}]);