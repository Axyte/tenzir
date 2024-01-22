"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5062],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2216:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>v,default:()=>g,frontMatter:()=>f,metadata:()=>y,toc:()=>O});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(l)for(var r of l(t))s.call(t,r)&&c(e,r,t[r]);return e},m=(e,t)=>a(e,i(t)),d=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const f={sidebar_custom_props:{operator:{transformation:!0}}},v="tail",y={unversionedId:"operators/tail",id:"version-Tenzir v4.8/operators/tail",title:"tail",description:"Limits the input to the last N events.",source:"@site/versioned_docs/version-Tenzir v4.8/operators/tail.md",sourceDirName:"operators",slug:"/operators/tail",permalink:"/operators/tail",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.8/operators/tail.md",tags:[],version:"Tenzir v4.8",frontMatter:{sidebar_custom_props:{operator:{transformation:!0}}},sidebar:"docsSidebar",previous:{title:"summarize",permalink:"/operators/summarize"},next:{title:"taste",permalink:"/operators/taste"}},b={},O=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;limit&gt;</code>",id:"limit",level:3},{value:"Examples",id:"examples",level:2}],h={toc:O},k="wrapper";function g(e){var t=e,{components:r}=t,o=d(t,["components"]);return(0,n.kt)(k,m(u(u({},h),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"tail"}),"tail"),(0,n.kt)("p",null,"Limits the input to the last ",(0,n.kt)("em",{parentName:"p"},"N")," events."),(0,n.kt)("h2",u({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"tail [<limit>]\n")),(0,n.kt)("h2",u({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The semantics of the ",(0,n.kt)("inlineCode",{parentName:"p"},"tail")," operator are the same of the equivalent Unix tool:\nconsume all input and only display the last ",(0,n.kt)("em",{parentName:"p"},"N")," events."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"tail <limit>")," is a shorthand notation for ",(0,n.kt)("a",u({parentName:"p"},{href:"/operators/slice"}),(0,n.kt)("inlineCode",{parentName:"a"},"slice --begin -<limit>")),"."),(0,n.kt)("h3",u({},{id:"limit"}),(0,n.kt)("inlineCode",{parentName:"h3"},"<limit>")),(0,n.kt)("p",null,"An unsigned integer denoting how many events to keep. Defaults to 10."),(0,n.kt)("p",null,"Defaults to 10."),(0,n.kt)("h2",u({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Get the last ten results:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"tail\n")),(0,n.kt)("p",null,"Get the last five results:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"tail 5\n")))}g.isMDXComponent=!0}}]);