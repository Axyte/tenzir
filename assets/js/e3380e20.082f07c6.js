"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3497],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),m=i,b=s["".concat(c,".").concat(m)]||s[m]||d[m]||o;return n?r.createElement(b,a(a({ref:t},p),{},{components:n})):r.createElement(b,a({ref:t},p))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},56975:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>f,default:()=>O,frontMatter:()=>b,metadata:()=>v,toc:()=>y});var r=n(3905),i=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))u.call(t,n)&&p(e,n,t[n]);return e},d=(e,t)=>o(e,a(t)),m=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n};const b={sidebar_position:3},f="Build Environment",v={unversionedId:"contribute/build-environment",id:"contribute/build-environment",title:"Build Environment",description:"Use Nix as Reproducible Development Environment",source:"@site/docs/contribute/build-environment.md",sourceDirName:"contribute",slug:"/contribute/build-environment",permalink:"/docs/next/contribute/build-environment",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/main/web/docs/contribute/build-environment.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Coding Style",permalink:"/docs/next/contribute/coding-style"},next:{title:"Changelog",permalink:"/docs/next/contribute/changelog"}},k={},y=[{value:"Use Nix as Reproducible Development Environment",id:"use-nix-as-reproducible-development-environment",level:2},{value:"Static Builds",id:"static-builds",level:3}],h={toc:y},g="wrapper";function O(e){var t=e,{components:n}=t,i=m(t,["components"]);return(0,r.kt)(g,d(s(s({},h),i),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",s({},{id:"build-environment"}),"Build Environment"),(0,r.kt)("h2",s({},{id:"use-nix-as-reproducible-development-environment"}),"Use Nix as Reproducible Development Environment"),(0,r.kt)("p",null,"The dependencies for a dynamic build can be fetched by running ",(0,r.kt)("inlineCode",{parentName:"p"},"nix develop"),"\nfrom the topmost directory in the source tree."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",s({parentName:"p"},{href:"https://direnv.net/"}),"direnv")," tool is able to automate this process, create an ",(0,r.kt)("inlineCode",{parentName:"p"},".envrc"),"\nwith the content:"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{}),"use flake\n")),(0,r.kt)("p",null,"and it will automatically add the dependencies to your shell environment when\nyou move into the source directory."),(0,r.kt)("p",null,"If you want to silence the messages about binary caches you can use a variation\nof ",(0,r.kt)("inlineCode",{parentName:"p"},".envrc")," that invokes ",(0,r.kt)("inlineCode",{parentName:"p"},"nix")," with a lower verbosity setting:"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{}),'use_flake2() {\n  watch_file flake.nix\n  watch_file flake.lock\n  mkdir -p "$(direnv_layout_dir)"\n  eval "$(nix --quiet --quiet print-dev-env --profile "$(direnv_layout_dir)/flake-profile" "$@")"\n}\n\nuse_flake2\n')),(0,r.kt)("p",null,"The Tenzir repository comes with a set of CMake configure and build presets that\ncan be used in this environment:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nix-clang-debug")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nix-clang-redeb")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nix-clang-release")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nix-gcc-debug")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nix-gcc-redeb")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nix-gcc-release"))),(0,r.kt)("admonition",s({},{type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"This build environment is currently only tested on Linux.")),(0,r.kt)("h3",s({},{id:"static-builds"}),"Static Builds"),(0,r.kt)("p",null,"Static binaries require a that the dependencies were built in static mode as\nwell. That means we need to use a different environment, you can enter it with"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-sh"}),"nix develop .#tenzir-static\n")),(0,r.kt)("p",null,"The CMake presets for that mode are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nix-gcc-static-debug")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nix-gcc-static-redeb")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nix-gcc-static-release"))))}O.isMDXComponent=!0}}]);