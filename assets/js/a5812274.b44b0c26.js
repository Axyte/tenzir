"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[32964],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),f=c(t),d=o,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||a;return t?n.createElement(m,i(i({ref:r},s),{},{components:t})):n.createElement(m,i({ref:r},s))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p[f]="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},99115:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>b,contentTitle:()=>v,default:()=>h,frontMatter:()=>m,metadata:()=>y,toc:()=>O});var n=t(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,f=(e,r)=>{for(var t in r||(r={}))l.call(r,t)&&s(e,t,r[t]);if(p)for(var t of p(r))c.call(r,t)&&s(e,t,r[t]);return e},u=(e,r)=>a(e,i(r)),d=(e,r)=>{var t={};for(var n in e)l.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&p)for(var n of p(e))r.indexOf(n)<0&&c.call(e,n)&&(t[n]=e[n]);return t};const m={sidebar_custom_props:{connector:{loader:!0}}},v="ftp",y={unversionedId:"connectors/ftp",id:"version-Tenzir v4.7/connectors/ftp",title:"ftp",description:"Loads bytes via FTP.",source:"@site/versioned_docs/version-Tenzir v4.7/connectors/ftp.md",sourceDirName:"connectors",slug:"/connectors/ftp",permalink:"/Tenzir v4.7/connectors/ftp",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.7/connectors/ftp.md",tags:[],version:"Tenzir v4.7",frontMatter:{sidebar_custom_props:{connector:{loader:!0}}},sidebar:"docsSidebar",previous:{title:"file",permalink:"/Tenzir v4.7/connectors/file"},next:{title:"ftps",permalink:"/Tenzir v4.7/connectors/ftps"}},b={},O=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;url&gt;</code>",id:"url",level:3},{value:"Examples",id:"examples",level:2}],k={toc:O},g="wrapper";function h(e){var r=e,{components:t}=r,o=d(r,["components"]);return(0,n.kt)(g,u(f(f({},k),o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",f({},{id:"ftp"}),"ftp"),(0,n.kt)("p",null,"Loads bytes via FTP."),(0,n.kt)("h2",f({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{}),"ftp <url>\n")),(0,n.kt)("h2",f({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"ftp")," loader downloads a file via the ",(0,n.kt)("a",f({parentName:"p"},{href:"https://en.wikipedia.org/wiki/File_Transfer_Protocol"}),"File Transfer Protocol\n(FTP)"),"."),(0,n.kt)("h3",f({},{id:"url"}),(0,n.kt)("inlineCode",{parentName:"h3"},"<url>")),(0,n.kt)("p",null,"The FTP URL."),(0,n.kt)("p",null,"To provide a username and password, use the typical ",(0,n.kt)("inlineCode",{parentName:"p"},"user:pass@example.org"),"\nsyntax."),(0,n.kt)("p",null,"The scheme is ",(0,n.kt)("inlineCode",{parentName:"p"},"ftp://")," and can be omitted."),(0,n.kt)("h2",f({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Download and process a ",(0,n.kt)("a",f({parentName:"p"},{href:"/Tenzir%20v4.7/formats/csv"}),"CSV")," file:"),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{}),"from ftp example.org/file.csv read csv\n")),(0,n.kt)("p",null,"Process a Zstd-compressed ",(0,n.kt)("a",f({parentName:"p"},{href:"/Tenzir%20v4.7/formats/suricata"}),"Suricata EVE JSON")," file:"),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{}),"load ftp example.org/gigantic.eve.json.zst\n| decompress zstd\n| read suricata\n")))}h.isMDXComponent=!0}}]);