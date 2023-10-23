"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[57940],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,d=u["".concat(s,".").concat(m)]||u[m]||f[m]||l;return n?r.createElement(d,a(a({ref:t},c),{},{components:n})):r.createElement(d,a({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,a[1]=o;for(var p=2;p<l;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},11924:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>y,default:()=>h,frontMatter:()=>d,metadata:()=>b,toc:()=>k});var r=n(3905),i=Object.defineProperty,l=Object.defineProperties,a=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(o)for(var n of o(t))p.call(t,n)&&c(e,n,t[n]);return e},f=(e,t)=>l(e,a(t)),m=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const d={},y="lines",b={unversionedId:"formats/lines",id:"formats/lines",title:"lines",description:"Parses events as lines.",source:"@site/docs/formats/lines.md",sourceDirName:"formats",slug:"/formats/lines",permalink:"/next/formats/lines",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/formats/lines.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"json",permalink:"/next/formats/json"},next:{title:"netflow",permalink:"/next/formats/netflow"}},v={},k=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>-s|--skip-empty</code>",id:"-s--skip-empty",level:3},{value:"Examples",id:"examples",level:2}],O={toc:k},g="wrapper";function h(e){var t=e,{components:n}=t,i=m(t,["components"]);return(0,r.kt)(g,f(u(u({},O),i),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",u({},{id:"lines"}),"lines"),(0,r.kt)("p",null,"Parses events as lines."),(0,r.kt)("h2",u({},{id:"synopsis"}),"Synopsis"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"lines [-s|--skip-empty]\n")),(0,r.kt)("h2",u({},{id:"description"}),"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"lines")," parser takes its input bytes and splits it at a newline character."),(0,r.kt)("p",null,"Newline characters include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"\\n")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"\\r\\n"))),(0,r.kt)("p",null,"The resulting events have a single field called ",(0,r.kt)("inlineCode",{parentName:"p"},"line"),"."),(0,r.kt)("h3",u({},{id:"-s--skip-empty"}),(0,r.kt)("inlineCode",{parentName:"h3"},"-s|--skip-empty")),(0,r.kt)("p",null,"Ignores empty lines in the input."),(0,r.kt)("p",null,"Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("h2",u({},{id:"examples"}),"Examples"),(0,r.kt)("p",null,"Read a text file line-by-line:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"from file /tmp/file.txt read lines\n")))}h.isMDXComponent=!0}}]);