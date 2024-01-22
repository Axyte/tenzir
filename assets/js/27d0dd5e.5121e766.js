"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5983],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>v});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(t),m=o,v=f["".concat(s,".").concat(m)]||f[m]||u[m]||a;return t?n.createElement(v,i(i({ref:r},p),{},{components:t})):n.createElement(v,i({ref:r},p))}));function v(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[f]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},20531:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>b,contentTitle:()=>d,default:()=>j,frontMatter:()=>v,metadata:()=>y,toc:()=>O});var n=t(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,f=(e,r)=>{for(var t in r||(r={}))s.call(r,t)&&p(e,t,r[t]);if(c)for(var t of c(r))l.call(r,t)&&p(e,t,r[t]);return e},u=(e,r)=>a(e,i(r)),m=(e,r)=>{var t={};for(var n in e)s.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&c)for(var n of c(e))r.indexOf(n)<0&&l.call(e,n)&&(t[n]=e[n]);return t};const v={sidebar_custom_props:{format:{parser:!0,printer:!0}}},d="csv",y={unversionedId:"formats/csv",id:"version-Tenzir v4.7/formats/csv",title:"csv",description:"The csv format is a configuration of the xsv format:",source:"@site/versioned_docs/version-Tenzir v4.7/formats/csv.md",sourceDirName:"formats",slug:"/formats/csv",permalink:"/Tenzir v4.7/formats/csv",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.7/formats/csv.md",tags:[],version:"Tenzir v4.7",frontMatter:{sidebar_custom_props:{format:{parser:!0,printer:!0}}},sidebar:"docsSidebar",previous:{title:"cef",permalink:"/Tenzir v4.7/formats/cef"},next:{title:"feather",permalink:"/Tenzir v4.7/formats/feather"}},b={},O=[],g={toc:O},h="wrapper";function j(e){var r=e,{components:t}=r,o=m(r,["components"]);return(0,n.kt)(h,u(f(f({},g),o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",f({},{id:"csv"}),"csv"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"csv")," format is a configuration of the ",(0,n.kt)("a",f({parentName:"p"},{href:"/Tenzir%20v4.7/formats/xsv"}),(0,n.kt)("inlineCode",{parentName:"a"},"xsv"))," format:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Field separator: ",(0,n.kt)("inlineCode",{parentName:"li"},",")),(0,n.kt)("li",{parentName:"ul"},"List separator: ",(0,n.kt)("inlineCode",{parentName:"li"},";")),(0,n.kt)("li",{parentName:"ul"},"Null value: empty field")))}j.isMDXComponent=!0}}]);