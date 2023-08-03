"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[62865],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return t?n.createElement(f,a(a({ref:r},l),{},{components:t})):n.createElement(f,a({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p[u]="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},35367:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>g,contentTitle:()=>b,default:()=>k,frontMatter:()=>f,metadata:()=>y,toc:()=>v});var n=t(3905),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,l=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))s.call(r,t)&&l(e,t,r[t]);if(p)for(var t of p(r))c.call(r,t)&&l(e,t,r[t]);return e},d=(e,r)=>i(e,a(r)),m=(e,r)=>{var t={};for(var n in e)s.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&p)for(var n of p(e))r.indexOf(n)<0&&c.call(e,n)&&(t[n]=e[n]);return t};const f={sidebar_position:3},b="Import into a node",y={unversionedId:"user-guides/import-into-a-node",id:"version-Tenzir v4.0-rc11/user-guides/import-into-a-node",title:"Import into a node",description:"Importing (or ingesting) data can be done by [running a",source:"@site/versioned_docs/version-Tenzir v4.0-rc11/user-guides/import-into-a-node.md",sourceDirName:"user-guides",slug:"/user-guides/import-into-a-node",permalink:"/user-guides/import-into-a-node",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.0-rc11/user-guides/import-into-a-node.md",tags:[],version:"Tenzir v4.0-rc11",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Reshape data",permalink:"/user-guides/reshape-data/"},next:{title:"Export from a node",permalink:"/user-guides/export-from-a-node"}},g={},v=[],O={toc:v},h="wrapper";function k(e){var r=e,{components:t}=r,o=m(r,["components"]);return(0,n.kt)(h,d(u(u({},O),o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"import-into-a-node"}),"Import into a node"),(0,n.kt)("p",null,"Importing (or ",(0,n.kt)("em",{parentName:"p"},"ingesting"),") data can be done by ",(0,n.kt)("a",u({parentName:"p"},{href:"/user-guides/run-a-pipeline/"}),"running a\npipeline")," that ends with the\n",(0,n.kt)("a",u({parentName:"p"},{href:"/operators/sinks/import"}),(0,n.kt)("inlineCode",{parentName:"a"},"import"))," sink oeprator."),(0,n.kt)("p",null,"Consider this example that takes a Zeek conn.log from our M57 dataset:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"from file Zeek/conn.log read zeek-tsv\n| select id.orig_h, id.resp_h, orig_bytes, resp_bytes\n| where orig_bytes > 1 MiB\n| import\n")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"import")," operator requires a node execution context. To invoke the above\npipeline successfully, you need to ",(0,n.kt)("a",u({parentName:"p"},{href:"/setup-guides/deploy-a-node/"}),"deploy a\nnode")," first."))}k.isMDXComponent=!0}}]);