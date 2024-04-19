"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[37372],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(t),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return t?n.createElement(m,p(p({ref:r},c),{},{components:t})):n.createElement(m,p({ref:r},c))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=f;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[d]="string"==typeof e?e:o,p[1]=i;for(var s=2;s<a;s++)p[s]=t[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},21336:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>b,contentTitle:()=>v,default:()=>g,frontMatter:()=>m,metadata:()=>y,toc:()=>k});var n=t(3905),o=Object.defineProperty,a=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,d=(e,r)=>{for(var t in r||(r={}))l.call(r,t)&&c(e,t,r[t]);if(i)for(var t of i(r))s.call(r,t)&&c(e,t,r[t]);return e},u=(e,r)=>a(e,p(r)),f=(e,r)=>{var t={};for(var n in e)l.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&i)for(var n of i(e))r.indexOf(n)<0&&s.call(e,n)&&(t[n]=e[n]);return t};const m={sidebar_custom_props:{operator:{transformation:!0}}},v="drop",y={unversionedId:"operators/drop",id:"version-Tenzir v4.10/operators/drop",title:"drop",description:"Drops fields from the input.",source:"@site/versioned_docs/version-Tenzir v4.10/operators/drop.md",sourceDirName:"operators",slug:"/operators/drop",permalink:"/Tenzir v4.10/operators/drop",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.10/operators/drop.md",tags:[],version:"Tenzir v4.10",frontMatter:{sidebar_custom_props:{operator:{transformation:!0}}},sidebar:"docsSidebar",previous:{title:"discard",permalink:"/Tenzir v4.10/operators/discard"},next:{title:"enrich",permalink:"/Tenzir v4.10/operators/enrich"}},b={},k=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;extractor&gt;...</code>",id:"extractor",level:3},{value:"Examples",id:"examples",level:2}],O={toc:k},h="wrapper";function g(e){var r=e,{components:t}=r,o=f(r,["components"]);return(0,n.kt)(h,u(d(d({},O),o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",d({},{id:"drop"}),"drop"),(0,n.kt)("p",null,"Drops fields from the input."),(0,n.kt)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"drop <extractor>...\n")),(0,n.kt)("h2",d({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"drop")," operator removes all fields matching the provided extractors and\nkeeps all other fields. It is the dual to ",(0,n.kt)("a",d({parentName:"p"},{href:"/Tenzir%20v4.10/operators/select"}),(0,n.kt)("inlineCode",{parentName:"a"},"select")),"."),(0,n.kt)("p",null,"In relational algebra, ",(0,n.kt)("inlineCode",{parentName:"p"},"drop")," performs a ",(0,n.kt)("em",{parentName:"p"},"projection")," of the complement of the\nprovided arguments."),(0,n.kt)("h3",d({},{id:"extractor"}),(0,n.kt)("inlineCode",{parentName:"h3"},"<extractor>...")),(0,n.kt)("p",null,"A comma-separated list of extractors that identify the fields to remove."),(0,n.kt)("h2",d({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Remove the fields ",(0,n.kt)("inlineCode",{parentName:"p"},"foo")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"bar"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"drop foo, bar\n")),(0,n.kt)("p",null,"Remove all fields of type ",(0,n.kt)("inlineCode",{parentName:"p"},"ip"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"drop :ip\n")))}g.isMDXComponent=!0}}]);