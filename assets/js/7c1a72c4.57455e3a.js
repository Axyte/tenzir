"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[91322],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=c(t),d=o,m=u["".concat(s,".").concat(d)]||u[d]||f[d]||i;return t?n.createElement(m,p(p({ref:r},l),{},{components:t})):n.createElement(m,p({ref:r},l))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,p=new Array(i);p[0]=d;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a[u]="string"==typeof e?e:o,p[1]=a;for(var c=2;c<i;c++)p[c]=t[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},21580:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>b,contentTitle:()=>v,default:()=>w,frontMatter:()=>m,metadata:()=>y,toc:()=>O});var n=t(3905),o=Object.defineProperty,i=Object.defineProperties,p=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,l=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))s.call(r,t)&&l(e,t,r[t]);if(a)for(var t of a(r))c.call(r,t)&&l(e,t,r[t]);return e},f=(e,r)=>i(e,p(r)),d=(e,r)=>{var t={};for(var n in e)s.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&a)for(var n of a(e))r.indexOf(n)<0&&c.call(e,n)&&(t[n]=e[n]);return t};const m={sidebar_custom_props:{operator:{source:!0}}},v="openapi",y={unversionedId:"operators/openapi",id:"version-Tenzir v4.12/operators/openapi",title:"openapi",description:"Shows the node's OpenAPI specification.",source:"@site/versioned_docs/version-Tenzir v4.12/operators/openapi.md",sourceDirName:"operators",slug:"/operators/openapi",permalink:"/Tenzir v4.12/operators/openapi",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.12/operators/openapi.md",tags:[],version:"Tenzir v4.12",frontMatter:{sidebar_custom_props:{operator:{source:!0}}},sidebar:"docsSidebar",previous:{title:"nics",permalink:"/Tenzir v4.12/operators/nics"},next:{title:"parse",permalink:"/Tenzir v4.12/operators/parse"}},b={},O=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}],h={toc:O},g="wrapper";function w(e){var r=e,{components:t}=r,o=d(r,["components"]);return(0,n.kt)(g,f(u(u({},h),o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"openapi"}),"openapi"),(0,n.kt)("p",null,"Shows the node's OpenAPI specification."),(0,n.kt)("h2",u({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"openapi\n")),(0,n.kt)("h2",u({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"openapi")," operator shows the current Tenzir node's ",(0,n.kt)("a",u({parentName:"p"},{href:"/api"}),"OpenAPI\nspecification")," for all available REST endpoint plugins."),(0,n.kt)("h2",u({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Render the OpenAPI specification as YAML:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"openapi | write yaml\n")))}w.isMDXComponent=!0}}]);