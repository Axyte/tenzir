"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[38919],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5401:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>y,default:()=>k,frontMatter:()=>m,metadata:()=>v,toc:()=>h});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&p(e,r,t[r]);return e},u=(e,t)=>a(e,i(t)),f=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const m={sidebar_custom_props:{operator:{transformation:!0}}},y="yield",v={unversionedId:"operators/yield",id:"version-v4.15/operators/yield",title:"yield",description:"Extracts nested records with the ability to unfold lists.",source:"@site/versioned_docs/version-v4.15/operators/yield.md",sourceDirName:"operators",slug:"/operators/yield",permalink:"/operators/yield",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.15/operators/yield.md",tags:[],version:"v4.15",frontMatter:{sidebar_custom_props:{operator:{transformation:!0}}},sidebar:"docsSidebar",previous:{title:"yara",permalink:"/operators/yara"},next:{title:"Connectors",permalink:"/connectors"}},b={},h=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;extractor&gt;</code>",id:"extractor",level:3},{value:"Examples",id:"examples",level:2}],O={toc:h},w="wrapper";function k(e){var t=e,{components:r}=t,o=f(t,["components"]);return(0,n.kt)(w,u(d(d({},O),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",d({},{id:"yield"}),"yield"),(0,n.kt)("p",null,"Extracts nested records with the ability to unfold lists."),(0,n.kt)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"yield <extractor>\n")),(0,n.kt)("h2",d({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"yield"),' operator can be used to "zoom into" the extracted part of the\nincoming events. It can also return a new event for each element of a list.'),(0,n.kt)("h3",d({},{id:"extractor"}),(0,n.kt)("inlineCode",{parentName:"h3"},"<extractor>")),(0,n.kt)("p",null,"The extractor must start with a field name. This can be followed by ",(0,n.kt)("inlineCode",{parentName:"p"},".")," and\nanother field name, or by ",(0,n.kt)("inlineCode",{parentName:"p"},"[]")," to extract all elements from the given list."),(0,n.kt)("h2",d({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"The schema ",(0,n.kt)("inlineCode",{parentName:"p"},"suricata.dns")," provides a list of answers for DNS queries. Assume we\nwant to extract all answers for ",(0,n.kt)("inlineCode",{parentName:"p"},"CNAME")," records."),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),'from eve.json\n| where #schema == "suricata.dns"\n| yield dns.answers[]\n| where rrtype == "CNAME"\n')))}k.isMDXComponent=!0}}]);