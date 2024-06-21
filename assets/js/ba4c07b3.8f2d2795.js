"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[45780],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},23032:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>y,default:()=>h,frontMatter:()=>f,metadata:()=>b,toc:()=>g});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&s(e,n,t[n]);if(p)for(var n of p(t))c.call(t,n)&&s(e,n,t[n]);return e},u=(e,t)=>a(e,i(t)),m=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const f={sidebar_position:2},y="Update a node",b={unversionedId:"setup-guides/update-a-node",id:"version-v4.17/setup-guides/update-a-node",title:"Update a node",description:"To update a deployed node, proceed with the",source:"@site/versioned_docs/version-v4.17/setup-guides/update-a-node.md",sourceDirName:"setup-guides",slug:"/setup-guides/update-a-node",permalink:"/setup-guides/update-a-node",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.17/setup-guides/update-a-node.md",tags:[],version:"v4.17",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Deploy a node",permalink:"/setup-guides/deploy-a-node"},next:{title:"Deploy the platform",permalink:"/setup-guides/deploy-the-platform"}},v={},g=[{value:"Docker",id:"docker",level:2},{value:"Linux",id:"linux",level:2},{value:"macOS",id:"macos",level:2}],k={toc:g},O="wrapper";function h(e){var t=e,{components:n}=t,o=m(t,["components"]);return(0,r.kt)(O,u(d(d({},k),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",d({},{id:"update-a-node"}),"Update a node"),(0,r.kt)("p",null,"To update a ",(0,r.kt)("a",d({parentName:"p"},{href:"/setup-guides/deploy-a-node"}),"deployed node"),", proceed with the\nplatform-specific instructions below."),(0,r.kt)("h2",d({},{id:"docker"}),"Docker"),(0,r.kt)("p",null,"Run the following commands to update a Docker Compose deployment with a\nconfiguration file ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.NODE.yaml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"docker compose -f docker-compose.NODE.yaml pull\ndocker compose -f docker-compose.NODE.yaml down\ndocker compose -f docker-compose.NODE.yaml up --detach\n")),(0,r.kt)("p",null,"Note that we ",(0,r.kt)("inlineCode",{parentName:"p"},"pull")," first so that the subsequent downtime between ",(0,r.kt)("inlineCode",{parentName:"p"},"down")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"up")," is minimal."),(0,r.kt)("h2",d({},{id:"linux"}),"Linux"),(0,r.kt)("p",null,"Run the installer again via:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"curl https://get.tenzir.app | sh\n")),(0,r.kt)("h2",d({},{id:"macos"}),"macOS"),(0,r.kt)("p",null,"Please use Docker ",(0,r.kt)("a",d({parentName:"p"},{href:"https://levelup.gitconnected.com/docker-on-apple-silicon-mac-how-to-run-x86-containers-with-rosetta-2-4a679913a0d5"}),"with\nRosetta"),"\nuntil we offer a native package."))}h.isMDXComponent=!0}}]);