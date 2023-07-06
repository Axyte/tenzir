"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[14349],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=i,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(k,o(o({ref:t},s),{},{components:n})):r.createElement(k,o({ref:t},s))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},10190:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>g,default:()=>N,frontMatter:()=>k,metadata:()=>h,toc:()=>b});var r=n(3905),i=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))u.call(t,n)&&s(e,n,t[n]);return e},d=(e,t)=>a(e,o(t)),m=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n};const k={sidebar_position:0},g="Docker",h={unversionedId:"setup-guides/deploy/docker",id:"version-Tenzir v4.0-rc3/setup-guides/deploy/docker",title:"Docker",description:"Our Docker image contains a dynamic of Tenzir build with plugins as shared",source:"@site/versioned_docs/version-Tenzir v4.0-rc3/setup-guides/deploy/docker.md",sourceDirName:"setup-guides/deploy",slug:"/setup-guides/deploy/docker",permalink:"/setup-guides/deploy/docker",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.0-rc3/setup-guides/deploy/docker.md",tags:[],version:"Tenzir v4.0-rc3",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"docsSidebar",previous:{title:"Deploy",permalink:"/setup-guides/deploy/"},next:{title:"Docker Compose",permalink:"/setup-guides/deploy/docker-compose"}},f={},b=[{value:"Pull the image",id:"pull-the-image",level:2},{value:"Start the container",id:"start-the-container",level:2},{value:"Configure a Tenzir container",id:"configure-a-tenzir-container",level:2},{value:"Build your own Tenzir image",id:"build-your-own-tenzir-image",level:2},{value:"Build the production image",id:"build-the-production-image",level:3},{value:"Build the development image",id:"build-the-development-image",level:3}],v={toc:b},y="wrapper";function N(e){var t=e,{components:n}=t,i=m(t,["components"]);return(0,r.kt)(y,d(c(c({},v),i),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",c({},{id:"docker"}),"Docker"),(0,r.kt)("p",null,"Our Docker image contains a dynamic of Tenzir build with plugins as shared\nlibraries. The system user ",(0,r.kt)("inlineCode",{parentName:"p"},"tenzir")," runs the Tenzir executable with limited\nprivileges. Database contents go into the volume exposed at ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/tenzir"),"."),(0,r.kt)("p",null,"Make sure you have the appropriate Docker runtime setup, e.g., ",(0,r.kt)("a",c({parentName:"p"},{href:"https://www.docker.com/products/docker-desktop/"}),"Docker\nDesktop")," or ",(0,r.kt)("a",c({parentName:"p"},{href:"https://docs.docker.com/engine/"}),"Docker\nEngine"),"."),(0,r.kt)("admonition",c({},{title:"CPU & RAM",type:"tip"}),(0,r.kt)("p",{parentName:"admonition"},"Make sure Docker has enough multiple CPU cores and several GBs of RAM.")),(0,r.kt)("h2",c({},{id:"pull-the-image"}),"Pull the image"),(0,r.kt)("p",null,"Retrieving a dockerized version of Tenzir only requires pulling a pre-built\nimage from our ",(0,r.kt)("a",c({parentName:"p"},{href:"https://hub.docker.com/repository/docker/tenzir/tenzir"}),"container registry at DockerHub"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"docker pull tenzir/tenzir\n")),(0,r.kt)("admonition",c({},{title:"Slim Images",type:"tip"}),(0,r.kt)("p",{parentName:"admonition"},"We also provide slim images that contain only the necessary dependencies to\nrun tenzir. You can get them by appending the ",(0,r.kt)("inlineCode",{parentName:"p"},"-slim")," suffix to the tag you want\nto pull, e.g.:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"docker pull tenzir/tenzir:latest-slim\n"))),(0,r.kt)("p",null,"Thereafter, you're ready to start a Tenzir node in a container."),(0,r.kt)("h2",c({},{id:"start-the-container"}),"Start the container"),(0,r.kt)("p",null,"When running Tenzir in a container, you need to wire two resources for a\npractical deployment:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Network"),": Tenzir exposes a listening socket to accept client commands."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Disk"),": Tenzir stores its database content on mounted volume.")),(0,r.kt)("p",null,"We recommend starting the Tenzir server detached in the background:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"mkdir -p /path/to/db\ndocker run -dt --name=tenzir --rm -p 5158:5158 -v /path/to/db:/var/lib/tenzir \\\n  tenzir/tenzir start\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"docker")," arguments have the following meaning:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-d")," for detaching, i.e., running in background"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-t")," for terminal output"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--name")," to name the image"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--rm")," to remove the container after exiting"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-p")," to expose the port to the outer world"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-v from:to")," to mount the local path ",(0,r.kt)("inlineCode",{parentName:"li"},"from")," into the container at ",(0,r.kt)("inlineCode",{parentName:"li"},"to"))),(0,r.kt)("p",null,"Now you are ready to interact with a running Tenzir node."),(0,r.kt)("h2",c({},{id:"configure-a-tenzir-container"}),"Configure a Tenzir container"),(0,r.kt)("p",null,"Configuration in the Docker ecosystem typically entails setting environment\nvariables. Tenzir supports this paradigm with a one-to-one ",(0,r.kt)("a",c({parentName:"p"},{href:"/command-line#environment-variables"}),"mapping from\nconfiguration file entries to environment\nvariables"),"."),(0,r.kt)("p",null,"When starting the container, ",(0,r.kt)("inlineCode",{parentName:"p"},"docker run")," accepts variables either one by one\nvia ",(0,r.kt)("inlineCode",{parentName:"p"},"-e KEY=VALUE")," or via ",(0,r.kt)("inlineCode",{parentName:"p"},"--env-file FILE"),". You can also pass down an existing\nenvironment variable by specifying just ",(0,r.kt)("inlineCode",{parentName:"p"},"-e KEY")," without an assignment. Here is\nan example:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"docker run -e TENZIR_ENDPOINT -e TENZIR_IMPORT__BATCH_SIZE=42 --env-file .env \\\n  tenzir/tenzir start\n")),(0,r.kt)("h2",c({},{id:"build-your-own-tenzir-image"}),"Build your own Tenzir image"),(0,r.kt)("p",null,"You can always build your own Docker image in case our prebuilt images don't fit\nyour use case."),(0,r.kt)("p",null,"Our official ",(0,r.kt)("a",c({parentName:"p"},{href:"https://github.com/tenzir/tenzir/blob/main/Dockerfile"}),"Dockerfile"),"\noffers two starting points: a ",(0,r.kt)("em",{parentName:"p"},"development")," and ",(0,r.kt)("em",{parentName:"p"},"production")," layer."),(0,r.kt)("p",null,"Before building the image, make sure to fetch all submodules:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"git clone --recursive https://github.com/tenzir/tenzir\ncd tenzir\n")),(0,r.kt)("h3",c({},{id:"build-the-production-image"}),"Build the production image"),(0,r.kt)("p",null,"The production image is optimized for size and security. This is the official\n",(0,r.kt)("inlineCode",{parentName:"p"},"tenzir/tenzir")," image. From the repository root, build it as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"docker build -t tenzir/tenzir .\n")),(0,r.kt)("h3",c({},{id:"build-the-development-image"}),"Build the development image"),(0,r.kt)("p",null,"The development image ",(0,r.kt)("inlineCode",{parentName:"p"},"tenzir/tenzir-dev")," contains all build-time dependencies\nof Tenzir. It runs with a ",(0,r.kt)("inlineCode",{parentName:"p"},"root")," user to allow for building custom images that\nbuild additional Tenzir plugins. By default, Tenzir loads all installed plugins\nin our images."),(0,r.kt)("p",null,"Build the development image by specifying it as ",(0,r.kt)("inlineCode",{parentName:"p"},"--target"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"docker build -t tenzir/tenzir-dev --target development .\n")))}N.isMDXComponent=!0}}]);