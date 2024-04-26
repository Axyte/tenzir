"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[72524],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return t?n.createElement(f,i(i({ref:r},c),{},{components:t})):n.createElement(f,i({ref:r},c))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},49564:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>k,contentTitle:()=>y,default:()=>O,frontMatter:()=>f,metadata:()=>h,toc:()=>g});var n=t(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,d=(e,r)=>{for(var t in r||(r={}))p.call(r,t)&&c(e,t,r[t]);if(l)for(var t of l(r))s.call(r,t)&&c(e,t,r[t]);return e},u=(e,r)=>a(e,i(r)),m=(e,r)=>{var t={};for(var n in e)p.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&l)for(var n of l(e))r.indexOf(n)<0&&s.call(e,n)&&(t[n]=e[n]);return t};const f={sidebar_position:5},y="Operator Modifiers",h={unversionedId:"language/operator-modifiers",id:"language/operator-modifiers",title:"Operator Modifiers",description:"Operator modifiers are keywords that may occur before an operator.",source:"@site/docs/language/operator-modifiers.md",sourceDirName:"language",slug:"/language/operator-modifiers",permalink:"/next/language/operator-modifiers",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/language/operator-modifiers.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"User-Defined Operators",permalink:"/next/language/user-defined-operators"},next:{title:"Operators",permalink:"/next/operators"}},k={},g=[{value:"Scheduled Executions",id:"scheduled-executions",level:2},{value:"Unordered Execution",id:"unordered-execution",level:2},{value:"Location Overrides",id:"location-overrides",level:2}],v={toc:g},b="wrapper";function O(e){var r=e,{components:t}=r,o=m(r,["components"]);return(0,n.kt)(b,u(d(d({},v),o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",d({},{id:"operator-modifiers"}),"Operator Modifiers"),(0,n.kt)("p",null,"Operator modifiers are keywords that may occur before an operator."),(0,n.kt)("h2",d({},{id:"scheduled-executions"}),"Scheduled Executions"),(0,n.kt)("p",null,"The special keyword ",(0,n.kt)("inlineCode",{parentName:"p"},"every")," enables scheduled execution of an operator."),(0,n.kt)("p",null,"Use the operator modifier like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"every <interval> <operator> [<args...>]\n")),(0,n.kt)("p",null,"For example, ",(0,n.kt)("inlineCode",{parentName:"p"},"version")," prints the version number exactly once, but ",(0,n.kt)("inlineCode",{parentName:"p"},"every 1s\nversion")," prints the version number once every second."),(0,n.kt)("h2",d({},{id:"unordered-execution"}),"Unordered Execution"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"unordered")," modifier tells an operator that it may return results out of\norder. For example, ",(0,n.kt)("inlineCode",{parentName:"p"},"unordered read json")," may be faster than ",(0,n.kt)("inlineCode",{parentName:"p"},"read json"),", as it\nallows the JSON parser to read events out of order."),(0,n.kt)("p",null,"By default, operators infer ordering requirements from the next operator. For\nexample, in ",(0,n.kt)("inlineCode",{parentName:"p"},"read json | sort"),", the ",(0,n.kt)("inlineCode",{parentName:"p"},"sort")," operator already lets ",(0,n.kt)("inlineCode",{parentName:"p"},"read json"),"\nknow that it may return results out of order."),(0,n.kt)("h2",d({},{id:"location-overrides"}),"Location Overrides"),(0,n.kt)("p",null,"Pipelines run across multiple processes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The local ",(0,n.kt)("inlineCode",{parentName:"li"},"tenzir")," process, and"),(0,n.kt)("li",{parentName:"ul"},"the remote ",(0,n.kt)("inlineCode",{parentName:"li"},"tenzir-node")," processes (commonly referred to as ",(0,n.kt)("em",{parentName:"li"},"nodes"),").")),(0,n.kt)("p",null,"Some pipeline operators prefer running either local or remote. For example, the\n",(0,n.kt)("inlineCode",{parentName:"p"},"from")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"to")," operators run locally, and the ",(0,n.kt)("inlineCode",{parentName:"p"},"serve")," operator runs remotely by\ndefault. Operators that do not have a preferred location use the location of the\nprevious operator."),(0,n.kt)("p",null,"The special keywords ",(0,n.kt)("inlineCode",{parentName:"p"},"local")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"remote")," allow for specifying the location of\nan operator explicitly. They may occur before any operator. For example, the\npipeline ",(0,n.kt)("inlineCode",{parentName:"p"},"read json | remote pass | write json")," reads JSON from stdin locally,\ntransfers it to a remote node to do nothing with the data, and\nthen transfers it back to write JSON to stdout locally."),(0,n.kt)("p",null,"Use the operator modifier like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"local  <operator> [<args...>]\nremote <operator> [<args...>]\n")),(0,n.kt)("p",null,"There are generally two scenarios in which you may want to use location\noverrides:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Move compute-heavy operators to a separate machine: Operators like\n",(0,n.kt)("inlineCode",{parentName:"p"},"summarize")," may require a lot of resources. When collecting events from an\nedge node, you may want to instead use ",(0,n.kt)("inlineCode",{parentName:"p"},"remote summarize")," to run the\ncomputation on the compute-heavy machine.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Change local operators to run remotely, to allow for reading a file from a\nremote host, e,g., ",(0,n.kt)("inlineCode",{parentName:"p"},"remote from file /tmp/suricata.sock read suricata"),".\nBecause such an operation allows for remotely reading files or executing\npotentially unwanted operators, you can disable such overrides by setting the\nfollowing configuration option:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",d({parentName:"pre"},{className:"language-yaml",metastring:'{0} title="tenzir.yaml"',"{0}":!0,title:'"tenzir.yaml"'}),"tenzir:\n  no-location-overrides: true\n")),(0,n.kt)("p",{parentName:"li"},"If you want more fine-grained control about which operators, operator\nmodifiers, formats, and connectors are available, you can selectively disable\nthem in the configuration:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",d({parentName:"pre"},{className:"language-yaml",metastring:'{0} title="tenzir.yaml"',"{0}":!0,title:'"tenzir.yaml"'}),"tenzir:\n  disable-plugins:\n    - shell\n    - remote\n")))))}O.isMDXComponent=!0}}]);