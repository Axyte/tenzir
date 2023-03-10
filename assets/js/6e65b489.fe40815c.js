"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9498],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=d(n),u=r,f=p["".concat(c,".").concat(u)]||p[u]||m[u]||o;return n?a.createElement(f,s(s({ref:t},l),{},{components:n})):a.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var d=2;d<o;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},53363:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>h,default:()=>O,frontMatter:()=>f,metadata:()=>y,toc:()=>g});var a=n(3905),r=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,l=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&l(e,n,t[n]);if(i)for(var n of i(t))d.call(t,n)&&l(e,n,t[n]);return e},m=(e,t)=>o(e,s(t)),u=(e,t)=>{var n={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&d.call(e,a)&&(n[a]=e[a]);return n};const f={sidebar_position:1},h="Schemas",y={unversionedId:"understand/data-model/schemas",id:"understand/data-model/schemas",title:"Schemas",description:"VAST defines a schema as a named record type. Since all types can have",source:"@site/docs/understand/data-model/schemas.md",sourceDirName:"understand/data-model",slug:"/understand/data-model/schemas",permalink:"/docs/understand/data-model/schemas",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/understand/data-model/schemas.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Type System",permalink:"/docs/understand/data-model/type-system"},next:{title:"Modules",permalink:"/docs/understand/data-model/modules"}},b={},g=[],v={toc:g},w="wrapper";function O(e){var t=e,{components:n}=t,r=u(t,["components"]);return(0,a.kt)(w,m(p(p({},v),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",p({},{id:"schemas"}),"Schemas"),(0,a.kt)("p",null,"VAST defines a ",(0,a.kt)("strong",{parentName:"p"},"schema")," as a ",(0,a.kt)("em",{parentName:"p"},"named")," record type. Since all types can have\na name, we define a schema as a type a that (1) is a record, and (2) has a name.\nFrom a data perspective, the schema specifies the structure of a batch of\nrecords."),(0,a.kt)("p",null,"Ideally, each data source defines its own semantically rich schema to retain\nmost of the domain-specific information of the data. This is desirable because\naccurately modeled data is more productive to work with because it's less\nerror-prone to misinterpret and requires fewer context switches to infer missing\ngaps. ",(0,a.kt)("a",p({parentName:"p"},{href:"type-system"}),"VAST's type system")," is well-suited for deep domain modeling:\nit can express structure with lists and records, add meta data to any types via\ntags, and also support aliasing for building libraries of composable types."),(0,a.kt)("p",null,'In practice, many tools often "dumb down" their rich internal representation\ninto a generic piece of JSON, CSV, or text. This puts the burden of gaining\nactionable insights onto the user downstream: either they work with a minimal\nlayer of typing, or they put in effort to (re)apply a coat of typing by writing\na schema.'),(0,a.kt)("p",null,"However, writing and managing schemas can quickly escalate: they evolve\ncontinuously and induce required changes in downstream analytics. VAST aims to\nminimize the needed effort to maintain schemas by tracking their lineage, and by\nmaking data sources infer a basic schema that serves as reasonable starting\npoint. For example, the ",(0,a.kt)("a",p({parentName:"p"},{href:"/docs/understand/formats/json"}),"JSON"),' reader attempts to\nparse strings as timestamps, IP address, or subnets, to gather a deeper semantic\nmeaning than "just a string." The idea is to make it easy to get started but\nstill allow for later refinements. You would provide a schema when you would\nlike to boost the semantics of your data, e.g., to imbue meaning into generic\nstring values by creating an alias type, or to enrich types with free-form\nattributes.'),(0,a.kt)("admonition",p({},{title:"Why factor types?",type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"Many data sources emit more than one event in the form of a record, and often\ncontain nested records shared across multiple event types. For example, the\nmajority of ",(0,a.kt)("a",p({parentName:"p"},{href:"/docs/understand/formats/zeek"}),"Zeek")," logs have the connection\nrecord in common. Factoring this shared record into its own type, and then\nreusing across all other occurrences makes it easy to perform cross-event\nconnection analysis later on.")),(0,a.kt)("p",null,"You can write schemas manually by providing a ",(0,a.kt)("a",p({parentName:"p"},{href:"/docs/understand/data-model/modules"}),"module"),". To find out\nexisting schemas, consult the documentation on\n",(0,a.kt)("a",p({parentName:"p"},{href:"/docs/use/introspect/"}),"introspection"),"."))}O.isMDXComponent=!0}}]);