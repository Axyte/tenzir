"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[26545],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(t),f=o,m=u["".concat(l,".").concat(f)]||u[f]||c[f]||a;return t?n.createElement(m,i(i({ref:r},d),{},{components:t})):n.createElement(m,i({ref:r},d))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},69434:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>v,contentTitle:()=>b,default:()=>h,frontMatter:()=>m,metadata:()=>y,toc:()=>g});var n=t(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))l.call(r,t)&&d(e,t,r[t]);if(s)for(var t of s(r))p.call(r,t)&&d(e,t,r[t]);return e},c=(e,r)=>a(e,i(r)),f=(e,r)=>{var t={};for(var n in e)l.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&s)for(var n of s(e))r.indexOf(n)<0&&p.call(e,n)&&(t[n]=e[n]);return t};const m={sidebar_position:4},b="User-Defined",y={unversionedId:"understand/operators/user-defined",id:"understand/operators/user-defined",title:"User-Defined",description:"Operator Aliases",source:"@site/docs/understand/operators/user-defined.md",sourceDirName:"understand/operators",slug:"/understand/operators/user-defined",permalink:"/docs/next/understand/operators/user-defined",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/main/web/docs/understand/operators/user-defined.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"write",permalink:"/docs/next/understand/operators/sinks/write"},next:{title:"Modifiers",permalink:"/docs/next/understand/operators/modifier"}},v={},g=[{value:"Operator Aliases",id:"operator-aliases",level:2},{value:"Operator Plugins",id:"operator-plugins",level:2}],w={toc:g},O="wrapper";function h(e){var r=e,{components:t}=r,o=f(r,["components"]);return(0,n.kt)(O,c(u(u({},w),o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"user-defined"}),"User-Defined"),(0,n.kt)("h2",u({},{id:"operator-aliases"}),"Operator Aliases"),(0,n.kt)("p",null,"User-defined operator aliases make pipelines easier to use by enabling users to\nencapsulate pipelines into a new operator."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-yaml",metastring:'{0} title="tenzir.yaml"',"{0}":!0,title:'"tenzir.yaml"'}),'tenzir:\n  operators:\n    # Aggregate suricata.flow events with matching source and destination IP\n    # addresses.\n    summarize-flows: >\n      where #schema == "suricata.flow"\n      | summarize\n          pkts_toserver=sum(flow.pkts_toserver),\n          pkts_toclient=sum(flow.pkts_toclient),\n          bytes_toserver=sum(flow.bytes_toserver),\n          bytes_toclient=sum(flow.bytes_toclient),\n          start=min(flow.start),\n          end=max(flow.end)\n        by\n          src_ip,\n          dest_ip\n')),(0,n.kt)("p",null,"This custom ",(0,n.kt)("inlineCode",{parentName:"p"},"summarize-flows")," operator can now be used in all pipeline\ndefinitions. For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-c"}),"/* Write all summarized suricata.flow events to stdout as JSON */\nfrom file path/to/eve.json read suricata\n| summarize-flows\n| write json\n")),(0,n.kt)("admonition",u({},{title:"Avoid Recursion",type:"tip"}),(0,n.kt)("p",{parentName:"admonition"},"User-defined operators may not reference themselves, but may reference other\nuser-defined operators. Attempting to use a recursively defined operator in a\npipeline will fail with an error.")),(0,n.kt)("h2",u({},{id:"operator-plugins"}),"Operator Plugins"),(0,n.kt)("p",null,"In addition to aliases, developers can add additional operators to Tenzir by\nusing the ",(0,n.kt)("a",u({parentName:"p"},{href:"/docs/next/develop/architecture/plugins#operator"}),"operator plugin API"),".\nThis allows for writing arbitrarily complex operators in C++ by developing\nagainst ",(0,n.kt)("inlineCode",{parentName:"p"},"libtenzir"),"."),(0,n.kt)("p",null,"If you want to learn more about building your own operators, we recommend\nstudying ",(0,n.kt)("a",u({parentName:"p"},{href:"https://github.com/tenzir/tenzir/tree/main/libtenzir/builtins/operators"}),"Tenzir's built-in operators"),", which are developed\nagainst the same API."))}h.isMDXComponent=!0}}]);