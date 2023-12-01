"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[57295],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},83750:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>k,default:()=>O,frontMatter:()=>f,metadata:()=>y,toc:()=>h});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&c(e,n,t[n]);if(p)for(var n of p(t))s.call(t,n)&&c(e,n,t[n]);return e},u=(e,t)=>a(e,i(t)),m=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const f={},k="context update",y={unversionedId:"operators/transformations/context-update",id:"operators/transformations/context-update",title:"context update",description:"Adds new information to a context.",source:"@site/docs/operators/transformations/context-update.md",sourceDirName:"operators/transformations",slug:"/operators/transformations/context-update",permalink:"/next/operators/transformations/context-update",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/operators/transformations/context-update.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"compress",permalink:"/next/operators/transformations/compress"},next:{title:"decapsulate",permalink:"/next/operators/transformations/decapsulate"}},b={},h=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;name&gt;</code>",id:"name",level:3},{value:"<code>&lt;options&gt;</code>",id:"options",level:3},{value:"Examples",id:"examples",level:2}],v={toc:h},x="wrapper";function O(e){var t=e,{components:n}=t,o=m(t,["components"]);return(0,r.kt)(x,u(d(d({},v),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",d({},{id:"context-update"}),"context update"),(0,r.kt)("p",null,"Adds new information to a context."),(0,r.kt)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"context update <name> [<options>]\n")),(0,r.kt)("h2",d({},{id:"description"}),"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"context update")," adds new information to a context."),(0,r.kt)("p",null,"mechanism for data enrichment. A context has a type and is implemented as a\n",(0,r.kt)("inlineCode",{parentName:"p"},"context")," plugin. Each context plugin provides a specific feature set. For\nexample the ",(0,r.kt)("inlineCode",{parentName:"p"},"lookup-table")," context can be used to extend events with\nkey-value-based contexts that consist of events passed on to the ",(0,r.kt)("inlineCode",{parentName:"p"},"context\nupdate <name> key=<field>")," operator call."),(0,r.kt)("h3",d({},{id:"name"}),(0,r.kt)("inlineCode",{parentName:"h3"},"<name>")),(0,r.kt)("p",null,"The name of the context to update."),(0,r.kt)("h3",d({},{id:"options"}),(0,r.kt)("inlineCode",{parentName:"h3"},"<options>")),(0,r.kt)("p",null,"Optional, context-specific options in the format ",(0,r.kt)("inlineCode",{parentName:"p"},"--key value")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"--flag"),"."),(0,r.kt)("p",null,"The following options are currently supported for the ",(0,r.kt)("inlineCode",{parentName:"p"},"lookup-table")," context:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--key <field>")," (required): The field in the input events that is the key to\nthe lookup table."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--clear"),": Erase all entries in the lookup table before updating.")),(0,r.kt)("h2",d({},{id:"examples"}),"Examples"),(0,r.kt)("p",null,"Replace all previous data in the ",(0,r.kt)("inlineCode",{parentName:"p"},"lookup-table")," context ",(0,r.kt)("inlineCode",{parentName:"p"},"feodo")," with data from\nthe ",(0,r.kt)("a",d({parentName:"p"},{href:"https://feodotracker.abuse.ch/downloads/ipblocklist.json"}),"Feodo Tracker IP Block\nList"),", using the\n",(0,r.kt)("inlineCode",{parentName:"p"},"ip_address")," field as the key."),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"from https://feodotracker.abuse.ch/downloads/ipblocklist.json read json --arrays-of-objects\n| context update feodo --clear --key=ip_address\n")))}O.isMDXComponent=!0}}]);