"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[59936],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(n),f=o,m=s["".concat(p,".").concat(f)]||s[f]||d[f]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},90255:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>v,default:()=>g,frontMatter:()=>m,metadata:()=>y,toc:()=>b});var r=n(3905),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&u(e,n,t[n]);return e},d=(e,t)=>i(e,a(t)),f=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const m={sidebar_custom_props:{operator:{transformation:!0}}},v="top",y={unversionedId:"operators/top",id:"version-Tenzir v4.11/operators/top",title:"top",description:"Shows the most common values. The dual to rare.",source:"@site/versioned_docs/version-Tenzir v4.11/operators/top.md",sourceDirName:"operators",slug:"/operators/top",permalink:"/operators/top",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.11/operators/top.md",tags:[],version:"Tenzir v4.11",frontMatter:{sidebar_custom_props:{operator:{transformation:!0}}},sidebar:"docsSidebar",previous:{title:"to",permalink:"/operators/to"},next:{title:"unflatten",permalink:"/operators/unflatten"}},h={},b=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;field&gt;</code>",id:"field",level:3},{value:"<code>--count-field=&lt;count-field&gt;|-c &lt;count-field&gt;</code>",id:"--count-fieldcount-field-c-count-field",level:3},{value:"Examples",id:"examples",level:2}],k={toc:b},O="wrapper";function g(e){var t=e,{components:n}=t,o=f(t,["components"]);return(0,r.kt)(O,d(s(s({},k),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",s({},{id:"top"}),"top"),(0,r.kt)("p",null,"Shows the most common values. The dual to ",(0,r.kt)("a",s({parentName:"p"},{href:"/operators/rare"}),(0,r.kt)("inlineCode",{parentName:"a"},"rare")),"."),(0,r.kt)("h2",s({},{id:"synopsis"}),"Synopsis"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{}),"top <field> [--count-field=<count-field>|-c <count-field>]\n")),(0,r.kt)("h2",s({},{id:"description"}),"Description"),(0,r.kt)("p",null,"Shows the most common values for a given field. For each unique value, a new event containing its count will be produced."),(0,r.kt)("h3",s({},{id:"field"}),(0,r.kt)("inlineCode",{parentName:"h3"},"<field>")),(0,r.kt)("p",null,"The name of the field to find the most common values for."),(0,r.kt)("h3",s({},{id:"--count-fieldcount-field-c-count-field"}),(0,r.kt)("inlineCode",{parentName:"h3"},"--count-field=<count-field>|-c <count-field>")),(0,r.kt)("p",null,"An optional argument specifying the field name of the count field. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"count"),"."),(0,r.kt)("p",null,"The count field and the value field must have different names."),(0,r.kt)("h2",s({},{id:"examples"}),"Examples"),(0,r.kt)("p",null,"Find the most common values for field ",(0,r.kt)("inlineCode",{parentName:"p"},"id.orig_h"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{}),"top id.orig_h\n")),(0,r.kt)("p",null,"Find the most common values for field ",(0,r.kt)("inlineCode",{parentName:"p"},"count")," and present the value amount in a field ",(0,r.kt)("inlineCode",{parentName:"p"},"amount"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{}),"top count --count-field=amount\n")))}g.isMDXComponent=!0}}]);