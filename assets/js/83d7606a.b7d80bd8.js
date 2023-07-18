"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[93436],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(r),f=o,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||a;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},91734:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>b,default:()=>h,frontMatter:()=>d,metadata:()=>y,toc:()=>k});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(p)for(var r of p(t))l.call(t,r)&&c(e,r,t[r]);return e},m=(e,t)=>a(e,i(t)),f=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r};const d={},b="repeat",y={unversionedId:"operators/transformations/repeat",id:"version-Tenzir v4.0-rc8/operators/transformations/repeat",title:"repeat",description:"Repeats the input a number of times.",source:"@site/versioned_docs/version-Tenzir v4.0-rc8/operators/transformations/repeat.md",sourceDirName:"operators/transformations",slug:"/operators/transformations/repeat",permalink:"/operators/transformations/repeat",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.0-rc8/operators/transformations/repeat.md",tags:[],version:"Tenzir v4.0-rc8",frontMatter:{},sidebar:"docsSidebar",previous:{title:"rename",permalink:"/operators/transformations/rename"},next:{title:"replace",permalink:"/operators/transformations/replace"}},v={},k=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;repetitions&gt;</code>",id:"repetitions",level:3},{value:"Examples",id:"examples",level:2}],O={toc:k},g="wrapper";function h(e){var t=e,{components:r}=t,o=f(t,["components"]);return(0,n.kt)(g,m(u(u({},O),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"repeat"}),"repeat"),(0,n.kt)("p",null,"Repeats the input a number of times."),(0,n.kt)("h2",u({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"repeat [<repetitions>]\n")),(0,n.kt)("h2",u({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"repeat")," operator relays the input without any modification, and repeats its\ninputs a specified number of times. It is primarily used for testing and when\nworking with generated data."),(0,n.kt)("p",null,"The repeat operator keeps its input in memory. Avoid using it to repeat large\ndata sets."),(0,n.kt)("h3",u({},{id:"repetitions"}),(0,n.kt)("inlineCode",{parentName:"h3"},"<repetitions>")),(0,n.kt)("p",null,"The number of times to repeat the input data."),(0,n.kt)("p",null,"If not specified, the operator repeats its input indefinitely."),(0,n.kt)("h2",u({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Given the following events as JSON:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{"number": 1, "text": "one"}\n{"number": 2, "text": "two"}\n')),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"repeat")," operator will repeat them indefinitely, in order:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"repeat\n")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{"number": 1, "text": "one"}\n{"number": 2, "text": "two"}\n{"number": 1, "text": "one"}\n{"number": 2, "text": "two"}\n{"number": 1, "text": "one"}\n{"number": 2, "text": "two"}\n// \u2026\n')),(0,n.kt)("p",null,"To just repeat the first event 5 times, use:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"head 1 | repeat 5\n")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{"number": 1, "text": "one"}\n{"number": 1, "text": "one"}\n{"number": 1, "text": "one"}\n{"number": 1, "text": "one"}\n{"number": 1, "text": "one"}\n')))}h.isMDXComponent=!0}}]);