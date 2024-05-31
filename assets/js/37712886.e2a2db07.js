"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[44489],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(n),u=o,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[d]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},47722:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>b,default:()=>x,frontMatter:()=>f,metadata:()=>v,toc:()=>h});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&s(e,n,t[n]);if(p)for(var n of p(t))l.call(t,n)&&s(e,n,t[n]);return e},m=(e,t)=>a(e,i(t)),u=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&l.call(e,r)&&(n[r]=e[r]);return n};const f={},b="GeoIP",v={unversionedId:"contexts/geoip",id:"version-v4.14/contexts/geoip",title:"GeoIP",description:"A context for enriching IP addresses with geographical data.",source:"@site/versioned_docs/version-v4.14/contexts/geoip.md",sourceDirName:"contexts",slug:"/contexts/geoip",permalink:"/v4.14/contexts/geoip",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.14/contexts/geoip.md",tags:[],version:"v4.14",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Bloom Filter",permalink:"/v4.14/contexts/bloom-filter"},next:{title:"Lookup Table",permalink:"/v4.14/contexts/lookup-table"}},y={},h=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>--db-path &lt;mmdb&gt;</code>",id:"--db-path-mmdb",level:3}],g={toc:h},O="wrapper";function x(e){var t=e,{components:n}=t,o=u(t,["components"]);return(0,r.kt)(O,m(d(d({},g),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",d({},{id:"geoip"}),"GeoIP"),(0,r.kt)("p",null,"A context for enriching IP addresses with geographical data."),(0,r.kt)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"context create  <name> geoip [--db-path <mmdb>]\ncontext delete  <name>\ncontext reset   <name> [--db-path <mmdb>]\ncontext save    <name>\ncontext load    <name>\ncontext inspect <name>\nenrich <name>\nlookup <name>\n")),(0,r.kt)("h2",d({},{id:"description"}),"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"geoip")," context uses a ",(0,r.kt)("a",d({parentName:"p"},{href:"https://www.maxmind.com/"}),"MaxMind")," database\nto perform IP address lookups."),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"context reset <name> --db-path <mmdb>")," to initialize the database at path\n",(0,r.kt)("inlineCode",{parentName:"p"},"<mmdb>"),". Omitting ",(0,r.kt)("inlineCode",{parentName:"p"},"--db-path")," causes a reload of a previously initialized\ndatabase file."),(0,r.kt)("h3",d({},{id:"--db-path-mmdb"}),(0,r.kt)("inlineCode",{parentName:"h3"},"--db-path <mmdb>")),(0,r.kt)("p",null,"The path to the MaxMind database file."),(0,r.kt)("p",null,"You can provide any database in ",(0,r.kt)("a",d({parentName:"p"},{href:"https://maxmind.github.io/MaxMind-DB/"}),"MMDB\nformat"),"."))}x.isMDXComponent=!0}}]);