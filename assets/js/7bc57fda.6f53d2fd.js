"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2655],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=o,m=c["".concat(l,".").concat(d)]||c[d]||f[d]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22879:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>b,default:()=>O,frontMatter:()=>m,metadata:()=>v,toc:()=>h});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&u(e,n,t[n]);if(s)for(var n of s(t))p.call(t,n)&&u(e,n,t[n]);return e},f=(e,t)=>a(e,i(t)),d=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const m={},b="unique",v={unversionedId:"operators/transformations/unique",id:"version-Tenzir v4.3/operators/transformations/unique",title:"unique",description:"Removes adjacent duplicates.",source:"@site/versioned_docs/version-Tenzir v4.3/operators/transformations/unique.md",sourceDirName:"operators/transformations",slug:"/operators/transformations/unique",permalink:"/operators/transformations/unique",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.3/operators/transformations/unique.md",tags:[],version:"Tenzir v4.3",frontMatter:{},sidebar:"docsSidebar",previous:{title:"unflatten",permalink:"/operators/transformations/unflatten"},next:{title:"where",permalink:"/operators/transformations/where"}},y={},h=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}],k={toc:h},g="wrapper";function O(e){var t=e,{components:n}=t,o=d(t,["components"]);return(0,r.kt)(g,f(c(c({},k),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",c({},{id:"unique"}),"unique"),(0,r.kt)("p",null,"Removes adjacent duplicates."),(0,r.kt)("h2",c({},{id:"synopsis"}),"Synopsis"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"unique\n")),(0,r.kt)("h2",c({},{id:"description"}),"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"unique")," operator deduplicates adjacent values, similar to the Unix tool\n",(0,r.kt)("inlineCode",{parentName:"p"},"uniq"),"."),(0,r.kt)("p",null,"A frequent use case is ",(0,r.kt)("a",c({parentName:"p"},{href:"/operators/transformations/select"}),"selecting a set of fields"),", ",(0,r.kt)("a",c({parentName:"p"},{href:"/operators/transformations/sort"}),"sorting the\ninput"),", and then removing duplicates from the input."),(0,r.kt)("h2",c({},{id:"examples"}),"Examples"),(0,r.kt)("p",null,"Consider the following data:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{"foo": 1, "bar": "a"}\n{"foo": 1, "bar": "a"}\n{"foo": 1, "bar": "a"}\n{"foo": 1, "bar": "b"}\n{"foo": null, "bar": "b"}\n{"bar": "b"}\n{"foo": null, "bar": "b"}\n{"foo": null, "bar": "b"}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"unique")," operator removes adjacent duplicates and produces the following output:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{"foo": 1, "bar": "a"}\n{"foo": 1, "bar": "b"}\n{"foo": null, "bar": "b"}\n{"bar": "b"}\n{"foo": null, "bar": "b"}\n')),(0,r.kt)("p",null,"Note that the output still contains the event ",(0,r.kt)("inlineCode",{parentName:"p"},'{"foo": null, "bar": "b"}')," twice.\nThis is because ",(0,r.kt)("inlineCode",{parentName:"p"},"unique")," only removes ",(0,r.kt)("em",{parentName:"p"},"adjacent")," duplicates."),(0,r.kt)("p",null,"To remove ",(0,r.kt)("em",{parentName:"p"},"all")," duplicates (including non-adjacent ones), ",(0,r.kt)("a",c({parentName:"p"},{href:"/operators/transformations/sort"}),(0,r.kt)("inlineCode",{parentName:"a"},"sort")),"\nthe input first such that duplicate values lay adjacent to each other. Unlike\ndeduplication via ",(0,r.kt)("inlineCode",{parentName:"p"},"unique"),", sorting is a blocking and operation and consumes\nthe entire input before producing outputs."))}O.isMDXComponent=!0}}]);