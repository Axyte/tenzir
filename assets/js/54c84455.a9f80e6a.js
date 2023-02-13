"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5230],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,m=u["".concat(l,".").concat(c)]||u[c]||h[c]||o;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},37968:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"VAST v2.4",description:"Open Storage",authors:"dominiklohmann",date:new Date("2022-12-09T00:00:00.000Z"),last_updated:new Date("2023-01-10T00:00:00.000Z"),tags:["release","frontend","feather","parquet","docker","python","arrow"]},i=void 0,s={permalink:"/blog/vast-v2.4",source:"@site/blog/vast-v2.4/index.md",title:"VAST v2.4",description:"Open Storage",date:"2022-12-09T00:00:00.000Z",formattedDate:"December 9, 2022",tags:[{label:"release",permalink:"/blog/tags/release"},{label:"frontend",permalink:"/blog/tags/frontend"},{label:"feather",permalink:"/blog/tags/feather"},{label:"parquet",permalink:"/blog/tags/parquet"},{label:"docker",permalink:"/blog/tags/docker"},{label:"python",permalink:"/blog/tags/python"},{label:"arrow",permalink:"/blog/tags/arrow"}],readingTime:4.215,hasTruncateMarker:!0,authors:[{name:"Dominik Lohmann",title:"Engineering Manager",url:"https://github.com/dominiklohmann",email:"dominik@tenzir.com",imageURL:"https://github.com/dominiklohmann.png",key:"dominiklohmann"}],frontMatter:{title:"VAST v2.4",description:"Open Storage",authors:"dominiklohmann",date:"2022-12-09T00:00:00.000Z",last_updated:"2023-01-10T00:00:00.000Z",tags:["release","frontend","feather","parquet","docker","python","arrow"]},prevItem:{title:"VAST v2.4.1",permalink:"/blog/vast-v2.4.1"},nextItem:{title:"Parquet & Feather: Writing Security Telemetry",permalink:"/blog/parquet-and-feather-writing-security-telemetry"}},l={authorsImageUrls:[void 0]},p=[{value:"Preventing Vendor Lock-in with Open Storage",id:"preventing-vendor-lock-in-with-open-storage",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2},{value:"Docker Compose",id:"docker-compose",level:3},{value:"REST API and Frontend User Interface",id:"rest-api-and-frontend-user-interface",level:3},{value:"Python Bindings",id:"python-bindings",level:3},{value:"Other Noteworthy Changes",id:"other-noteworthy-changes",level:2}],d={toc:p},u="wrapper";function h(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/tenzir/vast/releases/tag/v2.4.0"},"VAST v2.4")," completes the switch to open storage formats,\nand includes an early peek at three upcoming features for VAST: A web plugin\nwith a REST API and an integrated frontend user interface, Docker Compose\nconfiguration files for getting started with VAST faster and showing how to\nintegrate VAST into your SOC, and new Python bindings that will make writing\nintegrations easier and allow for using VAST with your data science libraries,\nlike Pandas."),(0,r.kt)("h2",{id:"preventing-vendor-lock-in-with-open-storage"},"Preventing Vendor Lock-in with Open Storage"),(0,r.kt)("p",null,"VAST's Apache Feather (V2) and Apache Parquet storage backends are now\nconsidered stable, and the default storage format is now Feather. This marks the\nbeginning of a new era for VAST for all users: There is no more vendor lock-in\nof your data!"),(0,r.kt)("p",null,"Both as engineers and users of software we disdain vendor lock-in. Your data is\nyours and no tool should hold it hostage. We want you to choose VAST because\nit's the best engine when building a sustainable security data architecture. In\nother words, ",(0,r.kt)("em",{parentName:"p"},"VAST decouples data acquisition from downstream security\nanalytics"),". To this end, we are not only committed to open source, but also to\nopen standards\u2014for storage and processing."),(0,r.kt)("p",null,"As of this release, VAST no longer supports ",(0,r.kt)("em",{parentName:"p"},"writing")," to its old proprietary\nstorage format, but will still support ",(0,r.kt)("em",{parentName:"p"},"reading")," from it until the next major\nrelease. In the background, VAST transparently rebuilds old partitions to take\nadvantage of the new format without any downtime. This may cause some additional\nload when starting VAST first up after the update, but ensures that queries run\nas fast as possible once all old partitions have been converted."),(0,r.kt)("p",null,"If you want to know more about Feather and Parquet, check out our in-depth blog\npost series on them:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/blog/parquet-and-feather-enabling-open-investigations/"},"Enabling Open Investigations")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/blog/parquet-and-feather-writing-security-telemetry/"},"Writing Security Telemetry")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/blog/parquet-and-feather-data-engineering-woes/"},"Data Engineering Woes"))),(0,r.kt)("h2",{id:"whats-next"},"What's Next?"),(0,r.kt)("p",null,"VAST v2.4 contains a few new and experimental toys to play with. Here's an\noverview of what they are, and how they all make it easier to integrate VAST\nwith other security tools."),(0,r.kt)("h3",{id:"docker-compose"},"Docker Compose"),(0,r.kt)("p",null,"A new set of ",(0,r.kt)("a",{parentName:"p",href:"/docs/setup/deploy/docker-compose"},"Docker Compose files")," makes it easier than ever to\nget started with VAST. This is not designed for high-performance deployments of\nVAST, but rather to make it easier to try VAST out\u2014all-batteries included,\nbecause we want to use this to showcase and test the myriad of integrations\nin a modern SOC."),(0,r.kt)("p",null,"Our vision for this is to show how VAST as a modular platform can power modern\nand sustainable approaches to composable security."),(0,r.kt)("h3",{id:"rest-api-and-frontend-user-interface"},"REST API and Frontend User Interface"),(0,r.kt)("p",null,"The experimental ",(0,r.kt)("inlineCode",{parentName:"p"},"web")," plugin adds a ",(0,r.kt)("a",{parentName:"p",href:"/docs/use/integrate/rest-api"},"REST API")," to VAST, and also a\nfrontend user interface we ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tenzir/vast/tree/v2.4.0/plugins/web/ui"},"built in Svelte"),"."),(0,r.kt)("p",null,"Both the API and the frontend are still considered unstable and subject to\nchange without notice. We plan to stabilize and version the API in the future.\nFundamentally, the API serves two purposes:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Make it easier to write integrations with VAST"),(0,r.kt)("li",{parentName:"ol"},"Serve as a backend for VAST's bundled frontend")),(0,r.kt)("p",null,"The frontend UI currently displays a status page for the installed VAST node."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"UI showing a status page",src:n(81950).Z,width:"1921",height:"989"})),(0,r.kt)("p",null,"We have some exciting features planned for both of these. Stay tuned!"),(0,r.kt)("h3",{id:"python-bindings"},"Python Bindings"),(0,r.kt)("p",null,"We want to make it as easy as possible to integrate VAST with other tools, so\nwe're working on making that as easy as possible using VAST's Python bindings.\nThe new bindings support analyzing data from VAST using industry-standard Python\nlibraries, like Pandas."),(0,r.kt)("p",null,"This is all enabled by our commitment to open standards: VAST leverages Apache\nArrow as its in-memory data representation. The Python bindings make it easy to\nuse VAST's security-specific data types. For example, when running a query, IP\naddresses, subnets, and patterns automatically convert to the Python-native\ntypes, as opposed to remaining binary blobs or sheer strings."),(0,r.kt)("admonition",{title:"Not yet on PyPI",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"VAST's new Python bindings are not yet on PyPI, as they are still heavily under\ndevelopment. If you're too eager and cannot wait, go ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tenzir/vast/tree/v2.4.0/python"},"check out the source\ncode"),".")),(0,r.kt)("h2",{id:"other-noteworthy-changes"},"Other Noteworthy Changes"),(0,r.kt)("p",null,"A full list of changes to VAST since the last release is available in the\n",(0,r.kt)("a",{parentName:"p",href:"/changelog#v240"},"changelog"),". Here's a selection of changes that are particularly\nnoteworthy:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"VAST now loads all plugins by default. When asking new users for pitfalls they\nencountered, this ranked pretty high on the list of things we needed to\nchange. To revert to the old behavior, set ",(0,r.kt)("inlineCode",{parentName:"li"},"vast.plugins: []")," in your\nconfiguration file, or set ",(0,r.kt)("inlineCode",{parentName:"li"},"VAST_PLUGINS=")," in your environment."),(0,r.kt)("li",{parentName:"ul"},"The default endpoint changed from ",(0,r.kt)("inlineCode",{parentName:"li"},"localhost")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"127.0.0.1")," to ensure a\ndeterministic listening address."),(0,r.kt)("li",{parentName:"ul"},"Exporting VAST's performance metrics via UDS no longer deadlocks VAST's\nmetrics exporter when a listener is suspended."),(0,r.kt)("li",{parentName:"ul"},"VAST's build process now natively supports building Debian packages. This\nmakes upgrades for bare-metal deployments a breeze. As of this release, our\nCI/CD pipeline automatically attaches a Debian package in addition to the\nbuild archive to our releases.")))}h.isMDXComponent=!0},81950:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/vast-ui-experimental-2016bb0be16072f537ae0216ab1ea26e.jpg"}}]);