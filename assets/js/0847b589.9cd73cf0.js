"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[48109],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,f=c["".concat(p,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},34934:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>v,default:()=>k,frontMatter:()=>f,metadata:()=>y,toc:()=>x});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))d.call(t,n)&&s(e,n,t[n]);return e},u=(e,t)=>o(e,i(t)),m=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n};const f={},v="extend",y={unversionedId:"understand/language/operators/extend",id:"version-VAST v3.0/understand/language/operators/extend",title:"extend",description:"Adds the configured fields with fixed values.",source:"@site/versioned_docs/version-VAST v3.0/understand/language/operators/extend.md",sourceDirName:"understand/language/operators",slug:"/understand/language/operators/extend",permalink:"/docs/VAST v3.0/understand/language/operators/extend",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/main/web/versioned_docs/version-VAST v3.0/understand/language/operators/extend.md",tags:[],version:"VAST v3.0",frontMatter:{},sidebar:"docsSidebar",previous:{title:"drop",permalink:"/docs/VAST v3.0/understand/language/operators/drop"},next:{title:"hash",permalink:"/docs/VAST v3.0/understand/language/operators/hash"}},g={},x=[{value:"Synopsis",id:"synopsis",level:2},{value:"Fields",id:"fields",level:3},{value:"Example",id:"example",level:2},{value:"YAML Syntax Example",id:"yaml-syntax-example",level:2}],b={toc:x},h="wrapper";function k(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(h,u(c(c({},b),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",c({},{id:"extend"}),"extend"),(0,r.kt)("p",null,"Adds the configured fields with fixed values."),(0,r.kt)("admonition",c({},{title:"Experimental",type:"warning"}),(0,r.kt)("p",{parentName:"admonition"},"We plan to merge the ",(0,r.kt)("inlineCode",{parentName:"p"},"extend")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"replace")," operators into a single ",(0,r.kt)("inlineCode",{parentName:"p"},"put"),"\noperator in the near future, removing the need for the ",(0,r.kt)("inlineCode",{parentName:"p"},"extend")," operator.")),(0,r.kt)("h2",c({},{id:"synopsis"}),"Synopsis"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"extend FIELD=VALUE[, \u2026]\n")),(0,r.kt)("h3",c({},{id:"fields"}),"Fields"),(0,r.kt)("p",null,"The fields to add with fixed values."),(0,r.kt)("h2",c({},{id:"example"}),"Example"),(0,r.kt)("p",null,"Add a field named ",(0,r.kt)("inlineCode",{parentName:"p"},"secret")," with the string value ",(0,r.kt)("inlineCode",{parentName:"p"},'"xxx"'),", a field named ",(0,r.kt)("inlineCode",{parentName:"p"},"ints"),"\nwith the list of integers value ",(0,r.kt)("inlineCode",{parentName:"p"},"[1, 2, 3]"),", and a field named ",(0,r.kt)("inlineCode",{parentName:"p"},"strs")," with the\nlist of strings value ",(0,r.kt)("inlineCode",{parentName:"p"},'["a", "b", "c"]'),":"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),'extend secret="xxx", ints=[1, 2, 3], strs=["a", "b", "c"]\n')),(0,r.kt)("h2",c({},{id:"yaml-syntax-example"}),"YAML Syntax Example"),(0,r.kt)("admonition",c({},{title:"Deprecated",type:"info"}),(0,r.kt)("p",{parentName:"admonition"},"The YAML syntax is deprecated since VAST v3.0, and will be removed in a future\nrelease. Please use the pipeline syntax instead.")),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-yaml"}),"extend:\n  fields:\n    secret: xxx\n    ints:\n      - 1\n      - 2\n      - 3\n")))}k.isMDXComponent=!0}}]);