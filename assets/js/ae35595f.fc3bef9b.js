"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4393],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),c=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||a;return r?o.createElement(f,p(p({ref:t},s),{},{components:r})):o.createElement(f,p({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,p=new Array(a);p[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:n,p[1]=l;for(var c=2;c<a;c++)p[c]=r[c];return o.createElement.apply(null,p)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3384:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>v,default:()=>g,frontMatter:()=>f,metadata:()=>y,toc:()=>h});var o=r(3905),n=Object.defineProperty,a=Object.defineProperties,p=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&s(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&s(e,r,t[r]);return e},u=(e,t)=>a(e,p(t)),m=(e,t)=>{var r={};for(var o in e)i.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&l)for(var o of l(e))t.indexOf(o)<0&&c.call(e,o)&&(r[o]=e[o]);return r};const f={sidebar_custom_props:{operator:{source:!0}}},v="load",y={unversionedId:"operators/load",id:"version-v4.13/operators/load",title:"load",description:"The load operator acquires raw bytes from a connector.",source:"@site/versioned_docs/version-v4.13/operators/load.md",sourceDirName:"operators",slug:"/operators/load",permalink:"/v4.13/operators/load",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.13/operators/load.md",tags:[],version:"v4.13",frontMatter:{sidebar_custom_props:{operator:{source:!0}}},sidebar:"docsSidebar",previous:{title:"import",permalink:"/v4.13/operators/import"},next:{title:"lookup",permalink:"/v4.13/operators/lookup"}},b={},h=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;connector&gt;</code>",id:"connector",level:3},{value:"Examples",id:"examples",level:2}],k={toc:h},O="wrapper";function g(e){var t=e,{components:r}=t,n=m(t,["components"]);return(0,o.kt)(O,u(d(d({},k),n),{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",d({},{id:"load"}),"load"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"load")," operator acquires raw bytes from a ",(0,o.kt)("a",d({parentName:"p"},{href:"/v4.13/connectors"}),"connector"),"."),(0,o.kt)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{}),"load <url>\nload <path>\nload <connector>\n")),(0,o.kt)("h2",d({},{id:"description"}),"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"load")," operator emits raw bytes."),(0,o.kt)("p",null,"Notably, it cannot be used together with operators that expect events as input,\nbut rather only with operators that expect bytes, e.g., ",(0,o.kt)("a",d({parentName:"p"},{href:"/v4.13/operators/read"}),(0,o.kt)("inlineCode",{parentName:"a"},"read"))," or\n",(0,o.kt)("a",d({parentName:"p"},{href:"/v4.13/operators/save"}),(0,o.kt)("inlineCode",{parentName:"a"},"save")),"."),(0,o.kt)("h3",d({},{id:"connector"}),(0,o.kt)("inlineCode",{parentName:"h3"},"<connector>")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",d({parentName:"p"},{href:"/v4.13/connectors"}),"connector")," used to load bytes."),(0,o.kt)("p",null,"Some connectors have connector-specific options. Please refer to the\ndocumentation of the individual connectors for more information."),(0,o.kt)("h2",d({},{id:"examples"}),"Examples"),(0,o.kt)("p",null,"Read bytes from stdin:"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{}),"load stdin\n")),(0,o.kt)("p",null,"Read bytes from the URL ",(0,o.kt)("inlineCode",{parentName:"p"},"https://example.com/file.json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{}),"load https://example.com/file.json\nload https example.com/file.json\n")),(0,o.kt)("p",null,"Read bytes from the file ",(0,o.kt)("inlineCode",{parentName:"p"},"path/to/eve.json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{}),"load path/to/eve.json\nload file path/to/eve.json\n")))}g.isMDXComponent=!0}}]);