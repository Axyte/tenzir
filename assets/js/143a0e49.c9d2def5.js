"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[71973],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(r),u=o,f=c["".concat(p,".").concat(u)]||c[u]||m[u]||i;return r?n.createElement(f,a(a({ref:t},d),{},{components:r})):n.createElement(f,a({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8372:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>y,default:()=>O,frontMatter:()=>f,metadata:()=>v,toc:()=>b});var n=r(3905),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&d(e,r,t[r]);if(s)for(var r of s(t))l.call(t,r)&&d(e,r,t[r]);return e},m=(e,t)=>i(e,a(t)),u=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r};const f={},y="pseudonymize",v={unversionedId:"operators/transformations/pseudonymize",id:"version-Tenzir v4.5/operators/transformations/pseudonymize",title:"pseudonymize",description:"Pseudonymizes fields according to a given method.",source:"@site/versioned_docs/version-Tenzir v4.5/operators/transformations/pseudonymize.md",sourceDirName:"operators/transformations",slug:"/operators/transformations/pseudonymize",permalink:"/Tenzir v4.5/operators/transformations/pseudonymize",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.5/operators/transformations/pseudonymize.md",tags:[],version:"Tenzir v4.5",frontMatter:{},sidebar:"docsSidebar",previous:{title:"pass",permalink:"/Tenzir v4.5/operators/transformations/pass"},next:{title:"put",permalink:"/Tenzir v4.5/operators/transformations/put"}},h={},b=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>-m|--method=&lt;string&gt;</code>",id:"-m--methodstring",level:3},{value:"<code>-s|--seed=&lt;seed&gt;</code>",id:"-s--seedseed",level:3},{value:"<code>&lt;extractor&gt;...</code>",id:"extractor",level:3},{value:"Example",id:"example",level:2}],g={toc:b},k="wrapper";function O(e){var t=e,{components:r}=t,o=u(t,["components"]);return(0,n.kt)(k,m(c(c({},g),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",c({},{id:"pseudonymize"}),"pseudonymize"),(0,n.kt)("p",null,"Pseudonymizes fields according to a given method."),(0,n.kt)("admonition",c({},{title:"Deprecated",type:"warning"}),(0,n.kt)("p",{parentName:"admonition"},"This operator will soon be removed in favor of first-class support for functions\nthat can be used in a variety of different operators and contexts.")),(0,n.kt)("h2",c({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{}),"pseudonymize -m|--method=<string> -s|--seed=<seed> <extractor>...\n")),(0,n.kt)("h2",c({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"pseudonimize")," operator replaces IP address using the\n",(0,n.kt)("a",c({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Crypto-PAn"}),"Crypto-PAn")," algorithm."),(0,n.kt)("p",null,"Currently, ",(0,n.kt)("inlineCode",{parentName:"p"},"pseudonimize")," exclusively works for fields of type ",(0,n.kt)("inlineCode",{parentName:"p"},"ip"),"."),(0,n.kt)("h3",c({},{id:"-m--methodstring"}),(0,n.kt)("inlineCode",{parentName:"h3"},"-m|--method=<string>")),(0,n.kt)("p",null,"The algorithm for pseudonimization"),(0,n.kt)("h3",c({},{id:"-s--seedseed"}),(0,n.kt)("inlineCode",{parentName:"h3"},"-s|--seed=<seed>")),(0,n.kt)("p",null,"A 64-byte seed that describes a hexadecimal value. When the seed is shorter than\n64 bytes, the operator will append zeros to match the size; when it is longer,\nit will truncate the seed."),(0,n.kt)("h3",c({},{id:"extractor"}),(0,n.kt)("inlineCode",{parentName:"h3"},"<extractor>...")),(0,n.kt)("p",null,"The list of extractors describing fields to pseudonomize. If an extractor\nmatches types other than IP addresses, the operator will ignore them."),(0,n.kt)("h2",c({},{id:"example"}),"Example"),(0,n.kt)("p",null,"Pseudonymize all values of the fields ",(0,n.kt)("inlineCode",{parentName:"p"},"src_ip")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"dest_ip")," using the\n",(0,n.kt)("inlineCode",{parentName:"p"},"crypto-pan")," algorithm and ",(0,n.kt)("inlineCode",{parentName:"p"},"deadbeef")," seed:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{}),'pseudonymize --method="crypto-pan" --seed="deadbeef" src_ip, dest_ip\n')))}O.isMDXComponent=!0}}]);