"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[24371],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,y=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65458:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>O,frontMatter:()=>y,metadata:()=>h,toc:()=>v});var r=n(3905),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&u(e,n,t[n]);if(s)for(var n of s(t))p.call(t,n)&&u(e,n,t[n]);return e},c=(e,t)=>i(e,o(t)),m=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const y={},f="systemd",h={unversionedId:"setup-guides/deploy-a-node/systemd",id:"version-Tenzir v4.2/setup-guides/deploy-a-node/systemd",title:"systemd",description:"The Tenzir package bundles a systemd service unit under",source:"@site/versioned_docs/version-Tenzir v4.2/setup-guides/deploy-a-node/systemd.md",sourceDirName:"setup-guides/deploy-a-node",slug:"/setup-guides/deploy-a-node/systemd",permalink:"/Tenzir v4.2/setup-guides/deploy-a-node/systemd",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.2/setup-guides/deploy-a-node/systemd.md",tags:[],version:"Tenzir v4.2",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Ansible",permalink:"/Tenzir v4.2/setup-guides/deploy-a-node/ansible"},next:{title:"Update a node",permalink:"/Tenzir v4.2/setup-guides/update-a-node"}},b={},v=[{value:"Prepare the host system",id:"prepare-the-host-system",level:2},{value:"Configure the unit",id:"configure-the-unit",level:2}],g={toc:v},k="wrapper";function O(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(k,c(d(d({},g),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",d({},{id:"systemd"}),"systemd"),(0,r.kt)("p",null,"The Tenzir package bundles a systemd service unit under\n",(0,r.kt)("inlineCode",{parentName:"p"},"<extraction_path>/lib/systemd/system/tenzir-node.service"),". The service is\nsandboxed and runs with limited privileges."),(0,r.kt)("h2",d({},{id:"prepare-the-host-system"}),"Prepare the host system"),(0,r.kt)("p",null,"Please note that all subsequent commands require ",(0,r.kt)("inlineCode",{parentName:"p"},"root")," privileges. The service\nrequires a user and group called ",(0,r.kt)("inlineCode",{parentName:"p"},"tenzir"),". You can create them as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"useradd --system --user-group tenzir\n")),(0,r.kt)("p",null,"Once the user exists, you should create the directory for Tenzir's persistent\ndata and change the permissions such that it is owned by the new ",(0,r.kt)("inlineCode",{parentName:"p"},"tenzir")," user:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"mkdir -p /var/lib/tenzir\nchown -R tenzir:tenzir /var/lib/tenzir\n")),(0,r.kt)("h2",d({},{id:"configure-the-unit"}),"Configure the unit"),(0,r.kt)("p",null,"Locate the lines beginning with ",(0,r.kt)("inlineCode",{parentName:"p"},"ExecStart=")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ExecStop=")," at the bottom\nof the ",(0,r.kt)("inlineCode",{parentName:"p"},"[Service]")," section in the unit file. Depending on your installation path\nyou might need to change the location of the ",(0,r.kt)("inlineCode",{parentName:"p"},"tenzir")," binary."),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"ExecStart=/path/to/tenzir start\n")),(0,r.kt)("p",null,"In case your Tenzir deployment needs elevated privileges, e.g., to capture\npackets, you can provide them as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-ini"}),"CapabilityBoundingSet=CAP_NET_RAW\nAmbientCapabilities=CAP_NET_RAW\n")),(0,r.kt)("p",null,"Then link the unit file to your systemd search path:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"systemctl link tenzir-node.service\n")),(0,r.kt)("p",null,"To have the service start up automatically on system boot, ",(0,r.kt)("inlineCode",{parentName:"p"},"enable")," it via\n",(0,r.kt)("inlineCode",{parentName:"p"},"systemd"),". Otherwise, just ",(0,r.kt)("inlineCode",{parentName:"p"},"start")," it to run it immediately."),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"systemctl enable tenzir-node\nsystemctl start tenzir-node\n")))}O.isMDXComponent=!0}}]);