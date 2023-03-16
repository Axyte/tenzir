"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2766],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,y=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(y,i(i({ref:t},d),{},{components:n})):r.createElement(y,i({ref:t},d))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58581:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>f,default:()=>O,frontMatter:()=>y,metadata:()=>h,toc:()=>v});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&d(e,n,t[n]);if(p)for(var n of p(t))l.call(t,n)&&d(e,n,t[n]);return e},c=(e,t)=>o(e,i(t)),m=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&l.call(e,r)&&(n[r]=e[r]);return n};const y={},f="pseudonymize",h={unversionedId:"understand/language/operators/pseudonymize",id:"version-v3.0/understand/language/operators/pseudonymize",title:"pseudonymize",description:"Pseudonymizes IP addresses according to a certain method. Currently, VAST only",source:"@site/versioned_docs/version-v3.0/understand/language/operators/pseudonymize.md",sourceDirName:"understand/language/operators",slug:"/understand/language/operators/pseudonymize",permalink:"/docs/understand/language/operators/pseudonymize",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/main/web/versioned_docs/version-v3.0/understand/language/operators/pseudonymize.md",tags:[],version:"v3.0",frontMatter:{},sidebar:"docsSidebar",previous:{title:"pass",permalink:"/docs/understand/language/operators/pass"},next:{title:"rename",permalink:"/docs/understand/language/operators/rename"}},g={},v=[{value:"Synopsis",id:"synopsis",level:2},{value:"Method",id:"method",level:3},{value:"Seed",id:"seed",level:3},{value:"Fields",id:"fields",level:3},{value:"Example",id:"example",level:2},{value:"YAML Syntax Example",id:"yaml-syntax-example",level:2}],b={toc:v},k="wrapper";function O(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(k,c(u(u({},b),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",u({},{id:"pseudonymize"}),"pseudonymize"),(0,r.kt)("p",null,"Pseudonymizes IP addresses according to a certain method. Currently, VAST only\nuses the ",(0,r.kt)("a",u({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Crypto-PAn"}),"Crypto-PAn")," algorithm."),(0,r.kt)("admonition",u({},{title:"Experimental",type:"warning"}),(0,r.kt)("p",{parentName:"admonition"},"We plan to change the ",(0,r.kt)("inlineCode",{parentName:"p"},"pseudonymize")," operator into a function usable in an\nupcoming ",(0,r.kt)("inlineCode",{parentName:"p"},"put")," operator, removing the need for ",(0,r.kt)("inlineCode",{parentName:"p"},"pseudonymize")," as an operator.")),(0,r.kt)("h2",u({},{id:"synopsis"}),"Synopsis"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"pseudonymize (-m|--method=STRING) (-s|--seed=STRING) FIELDS[, \u2026]\n")),(0,r.kt)("h3",u({},{id:"method"}),"Method"),(0,r.kt)("p",null,"The method to pseudonymize the address. As of now, this value always defaults to\n",(0,r.kt)("inlineCode",{parentName:"p"},"crypto-pan"),"."),(0,r.kt)("h3",u({},{id:"seed"}),"Seed"),(0,r.kt)("p",null,"The 64-byte seed that describes a hexadecimal value. When the seed is shorter\nthan 64 bytes, the operator will append zeros to match the size; when it is\nlonger, it will truncate the seed."),(0,r.kt)("h3",u({},{id:"fields"}),"Fields"),(0,r.kt)("p",null,"The list of fields to apply the pseudonymization to. During pseudonymization,\nthe operator will ignore specified fields that do not contain IP addresses."),(0,r.kt)("h2",u({},{id:"example"}),"Example"),(0,r.kt)("p",null,"Pseudonymize all values of the fields ",(0,r.kt)("inlineCode",{parentName:"p"},"ip_origin")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ip_dest")," using the\n",(0,r.kt)("inlineCode",{parentName:"p"},"crypto-pan")," algorithm and ",(0,r.kt)("inlineCode",{parentName:"p"},"deadbeef")," seed:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),'pseudonymize --method="crypto-pan" --seed="deadbeef" ip_origin, ip_dest\n')),(0,r.kt)("h2",u({},{id:"yaml-syntax-example"}),"YAML Syntax Example"),(0,r.kt)("admonition",u({},{title:"Deprecated",type:"info"}),(0,r.kt)("p",{parentName:"admonition"},"The YAML syntax is deprecated since VAST v3.0, and will be removed in a future\nrelease. Please use the pipeline syntax instead.")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-yaml"}),"pseudonymize:\n  method: crypto-pan\n  seed: abcdef1234567890987654321fedcbaabcdef1234567890987654321fedcbaab\n  fields:\n    - ip_origin\n    - ip_dest\n")))}O.isMDXComponent=!0}}]);