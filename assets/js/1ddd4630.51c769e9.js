"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[32165],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(n),m=a,f=c["".concat(p,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},38445:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>y,default:()=>O,frontMatter:()=>f,metadata:()=>b,toc:()=>v});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(s)for(var n of s(t))l.call(t,n)&&d(e,n,t[n]);return e},u=(e,t)=>o(e,i(t)),m=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&l.call(e,r)&&(n[r]=e[r]);return n};const f={sidebar_position:2},y="Spawn a node",b={unversionedId:"user-guides/spawn-a-node",id:"user-guides/spawn-a-node",title:"Spawn a node",description:"A node is a managed service for pipelines and storage.",source:"@site/docs/user-guides/spawn-a-node.md",sourceDirName:"user-guides",slug:"/user-guides/spawn-a-node",permalink:"/docs/next/user-guides/spawn-a-node",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/main/web/docs/user-guides/spawn-a-node.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Reshape data",permalink:"/docs/next/user-guides/reshape-data/"},next:{title:"Import into a node",permalink:"/docs/next/user-guides/import-into-a-node"}},g={},v=[{value:"Start a node",id:"start-a-node",level:2},{value:"Stop a node",id:"stop-a-node",level:2}],h={toc:v},k="wrapper";function O(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(k,u(c(c({},h),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",c({},{id:"spawn-a-node"}),"Spawn a node"),(0,r.kt)("p",null,"A ",(0,r.kt)("em",{parentName:"p"},"node")," is a managed service for pipelines and storage."),(0,r.kt)("h2",c({},{id:"start-a-node"}),"Start a node"),(0,r.kt)("p",null,"Simply run the ",(0,r.kt)("inlineCode",{parentName:"p"},"tenzir-node")," executable to start a node:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"tenzir-node\n")),(0,r.kt)("p",null,"This will spawn a blocking process that listens by default on the TCP endpoint\n127.0.0.1:5158. Select a different endpoint via ",(0,r.kt)("inlineCode",{parentName:"p"},"--endpoint"),", e.g., bind to an\nIPv6 address:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"tenzir-node --endpoint=[::1]:42000\n")),(0,r.kt)("p",null,"Check out the various ",(0,r.kt)("a",c({parentName:"p"},{href:"/docs/next/setup-guides/deploy/"}),"deployment options")," for\nother methods of spinning up a node, e.g., via systemd, Ansible, or Docker."),(0,r.kt)("h2",c({},{id:"stop-a-node"}),"Stop a node"),(0,r.kt)("p",null,"There exist two ways stop a server:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Hit CTRL+C in the same TTY where you started Tenzir."),(0,r.kt)("li",{parentName:"ol"},"Send the process a SIGINT or SIGTERM signal, e.g., via ",(0,r.kt)("inlineCode",{parentName:"li"},"pkill -2 tenzir"),".")),(0,r.kt)("p",null,"Sending the process a SIGTERM is the same as hitting CTRL+C."),(0,r.kt)("admonition",c({},{title:"Easy-Button Nodes",type:"tip"}),(0,r.kt)("p",{parentName:"admonition"},"Want it managed? Head to ",(0,r.kt)("a",c({parentName:"p"},{href:"https://tenzir.com"}),"tenzir.com")," and sign up for the\nfree Community Edition to experience easy-button node management in the\nbrowser.")))}O.isMDXComponent=!0}}]);