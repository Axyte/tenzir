"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1040],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return p}});var n=r(67294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,o=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=u(r),p=c,m=f["".concat(s,".").concat(p)]||f[p]||d[p]||o;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function p(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=r.length,i=new Array(o);i[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:c,i[1]=a;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},52991:function(e,t,r){r.d(t,{Z:function(){return g}});var n=r(67294),c=r(86010),o=r(53791),i=r(39960),a=r(13919),s=r(95999),u="cardContainer_fWXF",l="cardTitle_rnsV",d="cardDescription_PWke";function f(e){var t=e.href,r=e.children;return n.createElement(i.Z,{href:t,className:(0,c.Z)("card padding--lg",u)},r)}function p(e){var t=e.href,r=e.icon,o=e.title,i=e.description;return n.createElement(f,{href:t},n.createElement("h2",{className:(0,c.Z)("text--truncate",l),title:o},r," ",o),i&&n.createElement("p",{className:(0,c.Z)("text--truncate",d),title:i},i))}function m(e){var t=e.item,r=(0,o.Wl)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){var t,r=e.item,c=(0,a.Z)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,o.xz)(null!=(t=r.docId)?t:void 0);return n.createElement(p,{href:r.href,icon:c,title:r.label,description:null==i?void 0:i.description})}function v(e){var t=e.item;switch(t.type){case"link":return n.createElement(y,{item:t});case"category":return n.createElement(m,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function g(e){var t=e.items,r=e.className;return n.createElement("section",{className:(0,c.Z)("row",r)},function(e){return e.filter((function(e){return"category"!==e.type||!!(0,o.Wl)(e)}))}(t).map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(v,{key:t,item:e}))})))}},33058:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return p}});var n=r(87462),c=r(63366),o=(r(67294),r(3905)),i=r(52991),a=r(53791),s=["components"],u={},l="Understand VAST",d={unversionedId:"understand-vast/README",id:"understand-vast/README",title:"Understand VAST",description:"This section describes VAST from a systems engineering perspective. We cover the",source:"@site/docs/understand-vast/README.md",sourceDirName:"understand-vast",slug:"/understand-vast/",permalink:"/docs/understand-vast/",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/understand-vast/README.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Introspect",permalink:"/docs/use-vast/introspect/"},next:{title:"Design Goals",permalink:"/docs/understand-vast/architecture/design-goals"}},f={},p=[],m={toc:p};function y(e){var t=e.components,r=(0,c.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"understand-vast"},"Understand VAST"),(0,o.kt)("p",null,"This section describes VAST from a systems engineering perspective. We cover the\nfollowing topics:"),(0,o.kt)(i.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}y.isMDXComponent=!0}}]);