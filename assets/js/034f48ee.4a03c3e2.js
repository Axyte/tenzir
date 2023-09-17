"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[93051],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>u});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(t),f=o,u=d["".concat(p,".").concat(f)]||d[f]||m[f]||a;return t?n.createElement(u,s(s({ref:r},l),{},{components:t})):n.createElement(u,s({ref:r},l))}));function u(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=f;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7348:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>y,contentTitle:()=>v,default:()=>g,frontMatter:()=>u,metadata:()=>h,toc:()=>k});var n=t(3905),o=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,l=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,d=(e,r)=>{for(var t in r||(r={}))p.call(r,t)&&l(e,t,r[t]);if(i)for(var t of i(r))c.call(r,t)&&l(e,t,r[t]);return e},m=(e,r)=>a(e,s(r)),f=(e,r)=>{var t={};for(var n in e)p.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&i)for(var n of i(e))r.indexOf(n)<0&&c.call(e,n)&&(t[n]=e[n]);return t};const u={},v="from",h={unversionedId:"understand/operators/sources/from",id:"version-VAST v3.1/understand/operators/sources/from",title:"from",description:"Produces events by combining a connector and a format.",source:"@site/versioned_docs/version-VAST v3.1/understand/operators/sources/from.md",sourceDirName:"understand/operators/sources",slug:"/understand/operators/sources/from",permalink:"/VAST v3.1/understand/operators/sources/from",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-VAST v3.1/understand/operators/sources/from.md",tags:[],version:"VAST v3.1",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Sources",permalink:"/VAST v3.1/understand/operators/sources/"},next:{title:"load",permalink:"/VAST v3.1/understand/operators/sources/load"}},y={},k=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;connector&gt;</code>",id:"connector",level:3},{value:"<code>&lt;format&gt;</code>",id:"format",level:3},{value:"Examples",id:"examples",level:2}],b={toc:k},O="wrapper";function g(e){var r=e,{components:t}=r,o=f(r,["components"]);return(0,n.kt)(O,m(d(d({},b),o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",d({},{id:"from"}),"from"),(0,n.kt)("p",null,"Produces events by combining a ",(0,n.kt)("a",d({parentName:"p"},{href:"/VAST%20v3.1/understand/connectors/"}),"connector")," and a ",(0,n.kt)("a",d({parentName:"p"},{href:"/VAST%20v3.1/understand/formats/"}),"format"),"."),(0,n.kt)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"from <connector> [read <format>]\nread <format> [from <connector>]\n")),(0,n.kt)("h2",d({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"from")," operator produces events at the beginning of a pipeline by bringing\ntogether a ",(0,n.kt)("a",d({parentName:"p"},{href:"/VAST%20v3.1/understand/connectors/"}),"connector")," and a ",(0,n.kt)("a",d({parentName:"p"},{href:"/VAST%20v3.1/understand/formats/"}),"format"),"."),(0,n.kt)("p",null,"Some connectors have a default format, and some formats have a default\nconnector. This enables a shorter syntax, e.g., ",(0,n.kt)("inlineCode",{parentName:"p"},"read json")," uses the\n",(0,n.kt)("inlineCode",{parentName:"p"},"stdin")," connector and ",(0,n.kt)("inlineCode",{parentName:"p"},"from stdin")," the ",(0,n.kt)("inlineCode",{parentName:"p"},"json")," format."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"from")," operator is a pipeline under the hood. For most cases, it is equal to\n",(0,n.kt)("inlineCode",{parentName:"p"},"load <connector> | parse <format>"),". However, for some combinations of\nconnectors and formats the underlying pipeline is a lot more complex. We\nrecommend always using ",(0,n.kt)("inlineCode",{parentName:"p"},"from")," or ",(0,n.kt)("a",d({parentName:"p"},{href:"/VAST%20v3.1/understand/operators/sources/read"}),(0,n.kt)("inlineCode",{parentName:"a"},"read"))," over ",(0,n.kt)("a",d({parentName:"p"},{href:"/VAST%20v3.1/understand/operators/sources/load"}),(0,n.kt)("inlineCode",{parentName:"a"},"load"))," and\n",(0,n.kt)("a",d({parentName:"p"},{href:"/VAST%20v3.1/understand/operators/transformations/parse"}),(0,n.kt)("inlineCode",{parentName:"a"},"parse")),"."),(0,n.kt)("h3",d({},{id:"connector"}),(0,n.kt)("inlineCode",{parentName:"h3"},"<connector>")),(0,n.kt)("p",null,"The ",(0,n.kt)("a",d({parentName:"p"},{href:"/VAST%20v3.1/understand/connectors/"}),"connector")," used to load bytes."),(0,n.kt)("p",null,"Some connectors have connector-specific options. Please refer to the\ndocumentation of the individual connectors for more information."),(0,n.kt)("h3",d({},{id:"format"}),(0,n.kt)("inlineCode",{parentName:"h3"},"<format>")),(0,n.kt)("p",null,"The ",(0,n.kt)("a",d({parentName:"p"},{href:"/VAST%20v3.1/understand/formats/"}),"format")," used to parse events from the loaded bytes."),(0,n.kt)("p",null,"Some formats have format-specific options. Please refer to the documentation of\nthe individual formats for more information."),(0,n.kt)("h2",d({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Read bytes from stdin and parse them as JSON."),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"from stdin read json\nfrom file stdin read json\nfrom file - read json\nfrom - read json\n")),(0,n.kt)("p",null,"Read bytes from the file ",(0,n.kt)("inlineCode",{parentName:"p"},"path/to/eve.json")," and parse them as Suricata.\nNote that the ",(0,n.kt)("inlineCode",{parentName:"p"},"file")," connector automatically assigns the Suricata parser for\n",(0,n.kt)("inlineCode",{parentName:"p"},"eve.json")," files when no other parser is specified."),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"from file path/to/eve.json\nfrom file path/to/eve.json read suricata\n")))}g.isMDXComponent=!0}}]);