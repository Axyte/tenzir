"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[88007],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,u=m["".concat(s,".").concat(d)]||m[d]||f[d]||a;return n?r.createElement(u,i(i({ref:t},c),{},{components:n})):r.createElement(u,i({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},83940:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>h,default:()=>N,frontMatter:()=>u,metadata:()=>y,toc:()=>b});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(p)for(var n of p(t))l.call(t,n)&&c(e,n,t[n]);return e},f=(e,t)=>a(e,i(t)),d=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&l.call(e,r)&&(n[r]=e[r]);return n};const u={sidebar_custom_props:{operator:{source:!0}}},h="from",y={unversionedId:"operators/from",id:"operators/from",title:"from",description:"Produces events by combining a connector and a format.",source:"@site/docs/operators/from.md",sourceDirName:"operators",slug:"/operators/from",permalink:"/next/operators/from",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/operators/from.md",tags:[],version:"current",frontMatter:{sidebar_custom_props:{operator:{source:!0}}},sidebar:"docsSidebar",previous:{title:"fluent-bit",permalink:"/next/operators/fluent-bit"},next:{title:"hash",permalink:"/next/operators/hash"}},k={},b=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;connector&gt;</code>",id:"connector",level:3},{value:"<code>&lt;format&gt;</code>",id:"format",level:3},{value:"Examples",id:"examples",level:2}],v={toc:b},g="wrapper";function N(e){var t=e,{components:n}=t,o=d(t,["components"]);return(0,r.kt)(g,f(m(m({},v),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",m({},{id:"from"}),"from"),(0,r.kt)("p",null,"Produces events by combining a ",(0,r.kt)("a",m({parentName:"p"},{href:"/next/connectors"}),"connector")," and a ",(0,r.kt)("a",m({parentName:"p"},{href:"/next/formats"}),"format"),"."),(0,r.kt)("h2",m({},{id:"synopsis"}),"Synopsis"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{}),"from <url> [read <format>]\nfrom <path> [read <format>]\nfrom <connector> [read <format>]\n")),(0,r.kt)("h2",m({},{id:"description"}),"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"from")," operator produces events at the beginning of a pipeline by bringing\ntogether a ",(0,r.kt)("a",m({parentName:"p"},{href:"/next/connectors"}),"connector")," and a ",(0,r.kt)("a",m({parentName:"p"},{href:"/next/formats"}),"format"),"."),(0,r.kt)("p",null,"If given something that looks like a path to a file, the connector can pick\nout a format automatically based on the file extension or the file name.\nThis enables a shorter syntax, e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"from https://example.com/file.yml"),"\nuses the ",(0,r.kt)("inlineCode",{parentName:"p"},"yaml")," format. All connectors also have a default format,\nwhich will be used if the format can't be determined by the path.\nFor most connectors, this default format is ",(0,r.kt)("inlineCode",{parentName:"p"},"json"),". So, for example,\n",(0,r.kt)("inlineCode",{parentName:"p"},"from stdin")," uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"json")," format."),(0,r.kt)("p",null,"Additionally, if a file extension indicating compression can be found,\n",(0,r.kt)("a",m({parentName:"p"},{href:"/next/operators/decompress"}),(0,r.kt)("inlineCode",{parentName:"a"},"decompress"))," is automatically used.\nFor example, ",(0,r.kt)("inlineCode",{parentName:"p"},"from myfile.json.gz")," is automatically gzip-decompressed\nand parsed as json, i.e., ",(0,r.kt)("inlineCode",{parentName:"p"},"load myfile.json.gz | decompress gzip | read json"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"from")," operator is a pipeline under the hood. For most cases, it is equal to\n",(0,r.kt)("inlineCode",{parentName:"p"},"load <connector> | read <format>"),". However, for some combinations of\nconnectors and formats the underlying pipeline is a lot more complex. We\nrecommend always using ",(0,r.kt)("inlineCode",{parentName:"p"},"from ... read ...")," over the ",(0,r.kt)("a",m({parentName:"p"},{href:"/next/operators/load"}),(0,r.kt)("inlineCode",{parentName:"a"},"load"))," and\n",(0,r.kt)("a",m({parentName:"p"},{href:"/next/operators/read"}),(0,r.kt)("inlineCode",{parentName:"a"},"read"))," operators."),(0,r.kt)("h3",m({},{id:"connector"}),(0,r.kt)("inlineCode",{parentName:"h3"},"<connector>")),(0,r.kt)("p",null,"The ",(0,r.kt)("a",m({parentName:"p"},{href:"/next/connectors"}),"connector")," used to load bytes."),(0,r.kt)("p",null,"Some connectors have connector-specific options. Please refer to the\ndocumentation of the individual connectors for more information."),(0,r.kt)("h3",m({},{id:"format"}),(0,r.kt)("inlineCode",{parentName:"h3"},"<format>")),(0,r.kt)("p",null,"The ",(0,r.kt)("a",m({parentName:"p"},{href:"/next/formats"}),"format")," used to parse events from the loaded bytes."),(0,r.kt)("p",null,"Some formats have format-specific options. Please refer to the documentation of\nthe individual formats for more information."),(0,r.kt)("h2",m({},{id:"examples"}),"Examples"),(0,r.kt)("p",null,"Read bytes from stdin and parse them as JSON."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{}),"from stdin read json\nfrom file stdin read json\nfrom file - read json\nfrom - read json\n")),(0,r.kt)("p",null,"Read bytes from the file ",(0,r.kt)("inlineCode",{parentName:"p"},"path/to/eve.json")," and parse them as Suricata.\nNote that the ",(0,r.kt)("inlineCode",{parentName:"p"},"file")," connector automatically assigns the Suricata parser for\n",(0,r.kt)("inlineCode",{parentName:"p"},"eve.json")," files when no other parser is specified.\nAlso, when directly passed a filesystem path, the ",(0,r.kt)("inlineCode",{parentName:"p"},"file")," connector is automatically used."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{}),"from path/to/eve.json\nfrom file path/to/eve.json\nfrom file path/to/eve.json read suricata\n")),(0,r.kt)("p",null,"Read bytes from the URL ",(0,r.kt)("inlineCode",{parentName:"p"},"https://example.com/data.json")," over HTTPS and parse them as JSON.\nNote that when ",(0,r.kt)("inlineCode",{parentName:"p"},"from")," is passed a URL directly, the ",(0,r.kt)("inlineCode",{parentName:"p"},"https")," connector is automatically used."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{}),"from https://example.com/data.json read json\nfrom https example.com/data.json read json\n")))}N.isMDXComponent=!0}}]);