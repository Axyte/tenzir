"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[95724],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(r),u=o,m=d["".concat(l,".").concat(u)]||d[u]||f[u]||a;return r?n.createElement(m,s(s({ref:t},c),{},{components:r})):n.createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},12623:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>v,default:()=>g,frontMatter:()=>m,metadata:()=>y,toc:()=>h});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&c(e,r,t[r]);return e},f=(e,t)=>a(e,s(t)),u=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const m={sidebar_custom_props:{format:{parser:!0}}},v="leef",y={unversionedId:"formats/leef",id:"version-v4.15/formats/leef",title:"leef",description:"Parses events in the Log Event Extended Format (LEEF).",source:"@site/versioned_docs/version-v4.15/formats/leef.md",sourceDirName:"formats",slug:"/formats/leef",permalink:"/v4.15/formats/leef",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.15/formats/leef.md",tags:[],version:"v4.15",frontMatter:{sidebar_custom_props:{format:{parser:!0}}},sidebar:"docsSidebar",previous:{title:"kv",permalink:"/v4.15/formats/kv"},next:{title:"lines",permalink:"/v4.15/formats/lines"}},b={},h=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}],E={toc:h},k="wrapper";function g(e){var t=e,{components:r}=t,o=u(t,["components"]);return(0,n.kt)(k,f(d(d({},E),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",d({},{id:"leef"}),"leef"),(0,n.kt)("p",null,"Parses events in the Log Event Extended Format (LEEF)."),(0,n.kt)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"leef\n")),(0,n.kt)("h2",d({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",d({parentName:"p"},{href:"https://www.ibm.com/docs/en/dsm?topic=overview-leef-event-components"}),"Log Event Extended Format (LEEF)")," is an event representation\npopularized by IBM QRadar. Many tools send LEEF over ",(0,n.kt)("a",d({parentName:"p"},{href:"/v4.15/formats/syslog"}),"Syslog"),"."),(0,n.kt)("p",null,"LEEF is a line-based format and every line begins with a ",(0,n.kt)("em",{parentName:"p"},"header")," that is\nfollowed by ",(0,n.kt)("em",{parentName:"p"},"attributes")," in the form of key-value pairs."),(0,n.kt)("p",null,"LEEF v1.0 defines 5 header fields and LEEF v2.0 has an additional field to\ncustomize the key-value pair separator, which can be a single character or the\nhex value prefixed by ",(0,n.kt)("inlineCode",{parentName:"p"},"0x")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"x"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"LEEF:1.0|Vendor|Product|Version|EventID|\nLEEF:2.0|Vendor|Product|Version|EventID|DelimiterCharacter|\n")),(0,n.kt)("p",null,"For LEEF v1.0, the tab (",(0,n.kt)("inlineCode",{parentName:"p"},"\\t"),") character is hard-coded as attribute separator."),(0,n.kt)("p",null,"Here are some real-world LEEF events:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"LEEF:1.0|Microsoft|MSExchange|2016|15345|src=10.50.1.1  dst=2.10.20.20  spt=1200\nLEEF:2.0|Lancope|StealthWatch|1.0|41|^|src=10.0.1.8^dst=10.0.0.5^sev=5^srcPort=81^dstPort=21\n")),(0,n.kt)("p",null,"Tenzir translates the event attributes into a nested record, where the key-value\npairs map to record fields. Here is an example of the parsed events from above:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-json"}),'{\n  "leef_version": "1.0",\n  "vendor": "Microsoft",\n  "product_name": "MSExchange",\n  "product_version": "2016",\n  "attributes": {\n    "src": "10.50.1.1",\n    "dst": "2.10.20.20",\n    "spt": 1200,\n  }\n}\n{\n  "leef_version": "2.0",\n  "vendor": "Lancope",\n  "product_name": "StealthWatch",\n  "product_version": "1.0",\n  "attributes": {\n    "src": "10.0.1.8",\n    "dst": "10.0.0.5",\n    "sev": 5,\n    "srcPort": 81,\n    "dstPort": 21\n  }\n}\n')),(0,n.kt)("h2",d({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Read LEEF over a Syslog via UDP:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"from udp://0.0.0.0:514 read syslog\n| parse content leef\n| import\n")))}g.isMDXComponent=!0}}]);