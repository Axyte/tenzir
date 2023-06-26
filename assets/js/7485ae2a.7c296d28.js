"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[89852],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(a),m=r,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return a?n.createElement(f,o(o({ref:t},p),{},{components:a})):n.createElement(f,o({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},49247:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(67294),r=a(86010);const l={tabItem:"tabItem_Ymn6"};var o=Object.defineProperty,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&p(e,a,t[a]);if(i)for(var a of i(t))u.call(t,a)&&p(e,a,t[a]);return e};function d({children:e,hidden:t,className:a}){return n.createElement("div",c({role:"tabpanel",className:(0,r.Z)(l.tabItem,a)},{hidden:t}),e)}},54023:(e,t,a)=>{a.d(t,{Z:()=>_});var n=a(67294),r=a(86010),l=a(37287),o=a(16550),i=a(63962),s=a(69920),u=a(15801),p=Object.defineProperty,c=Object.defineProperties,d=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,b=(e,t,a)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,k=(e,t)=>{for(var a in t||(t={}))f.call(t,a)&&b(e,a,t[a]);if(m)for(var a of m(t))h.call(t,a)&&b(e,a,t[a]);return e},g=(e,t)=>c(e,d(t));function v(e){return function(e){var t,a;return null!=(a=null==(t=n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))?a:[]}(e).map((({props:{value:e,label:t,attributes:a,default:n}})=>({value:e,label:t,attributes:a,default:n})))}function y(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=null!=t?t:v(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function w({value:e,tabValues:t}){return t.some((t=>t.value===e))}function N({queryString:e=!1,groupId:t}){const a=(0,o.k6)(),r=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t});return[(0,i._X)(r),(0,n.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace(g(k({},a.location),{search:t.toString()}))}),[r,a])]}function x(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=y(e),[o,i]=(0,n.useState)((()=>function({defaultValue:e,tabValues:t}){var a;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!w({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=null!=(a=t.find((e=>e.default)))?a:t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,p]=N({queryString:a,groupId:r}),[c,d]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[a,r]=(0,u.Nk)(t);return[a,(0,n.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:r}),m=(()=>{const e=null!=s?s:c;return w({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{m&&i(m)}),[m]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!w({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),d(e)}),[p,d,l]),tabValues:l}}var z=a(35710);const O={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var T=Object.defineProperty,j=Object.defineProperties,S=Object.getOwnPropertyDescriptors,E=Object.getOwnPropertySymbols,I=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,C=(e,t,a)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,D=(e,t)=>{for(var a in t||(t={}))I.call(t,a)&&C(e,a,t[a]);if(E)for(var a of E(t))P.call(t,a)&&C(e,a,t[a]);return e},Z=(e,t)=>j(e,S(t));function V({className:e,block:t,selectedValue:a,selectValue:o,tabValues:i}){const s=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),p=e=>{const t=e.currentTarget,n=s.indexOf(t),r=i[n].value;r!==a&&(u(t),o(r))},c=e=>{var t,a;let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=s.indexOf(e.currentTarget)+1;n=null!=(t=s[a])?t:s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=null!=(a=s[t])?a:s[s.length-1];break}}null==n||n.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},e)},i.map((({value:e,label:t,attributes:l})=>n.createElement("li",Z(D({role:"tab",tabIndex:a===e?0:-1,"aria-selected":a===e,key:e,ref:e=>s.push(e),onKeyDown:c,onClick:p},l),{className:(0,r.Z)("tabs__item",O.tabItem,null==l?void 0:l.className,{"tabs__item--active":a===e})}),null!=t?t:e))))}function L({lazy:e,children:t,selectedValue:a}){const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function q(e){const t=x(e);return n.createElement("div",{className:(0,r.Z)("tabs-container",O.tabList)},n.createElement(V,D(D({},e),t)),n.createElement(L,D(D({},e),t)))}function _(e){const t=(0,z.Z)();return n.createElement(q,D({key:String(t)},e))}},17662:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>v,contentTitle:()=>k,default:()=>x,frontMatter:()=>b,metadata:()=>g,toc:()=>y});var n=a(3905),r=a(54023),l=a(49247),o=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&d(e,a,t[a]);if(u)for(var a of u(t))c.call(t,a)&&d(e,a,t[a]);return e},f=(e,t)=>i(e,s(t)),h=(e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&c.call(e,n)&&(a[n]=e[n]);return a};const b={},k="Get Started",g={unversionedId:"get-started",id:"get-started",title:"Get Started",description:"Tenzir is a distributed platform for processing and storing security event data",source:"@site/docs/get-started.md",sourceDirName:".",slug:"/get-started",permalink:"/next/get-started",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/get-started.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",next:{title:"Setup Guides",permalink:"/next/setup-guides"}},v={},y=[{value:"Install Tenzir",id:"install-tenzir",level:3},{value:"Download sample data",id:"download-sample-data",level:3},{value:"Run pipelines",id:"run-pipelines",level:3},{value:"Spawn a node",id:"spawn-a-node",level:3},{value:"Import data into a node",id:"import-data-into-a-node",level:3},{value:"Export data from a node",id:"export-data-from-a-node",level:3},{value:"Up Next",id:"up-next",level:2}],w={toc:y},N="wrapper";function x(e){var t=e,{components:a}=t,o=h(t,["components"]);return(0,n.kt)(N,f(m(m({},w),o),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",m({},{id:"get-started"}),"Get Started"),(0,n.kt)("admonition",m({},{title:"What is Tenzir?",type:"info"}),(0,n.kt)("p",{parentName:"admonition"},"Tenzir is a distributed platform for processing and storing security event data\nin a pipeline dataflow model.")),(0,n.kt)("p",null,"Dive right in with an interactive tour at ",(0,n.kt)("a",m({parentName:"p"},{href:"https://tenzir.com"}),"tenzir.com")," and\nsign up for a free account, or continue below with the open source edition and\ncommand line examples."),(0,n.kt)("h3",m({},{id:"install-tenzir"}),"Install Tenzir"),(0,n.kt)("p",null,"Select your platform to download and install Tenzir."),(0,n.kt)(r.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"universal",label:"All Platforms",default:!0,mdxType:"TabItem"},(0,n.kt)("p",null,"Use our installer to perform a platform-specific installation:"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"curl -L get.tenzir.app | sh\n")),(0,n.kt)("p",null,"The shell script asks you once to confirm the installation.")),(0,n.kt)(l.Z,{value:"debian",label:"Debian",mdxType:"TabItem"},(0,n.kt)("p",null,"Download the latest ",(0,n.kt)("a",m({parentName:"p"},{href:"https://github.com/tenzir/tenzir/releases/latest/download/tenzir-static-amd64-linux.deb"}),"Debian package")," and install it via\n",(0,n.kt)("inlineCode",{parentName:"p"},"dpkg"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"dpkg -i tenzir-static-amd64-linux.deb\n"))),(0,n.kt)(l.Z,{value:"nix",label:"Nix",mdxType:"TabItem"},(0,n.kt)("p",null,"Try Tenzir with our ",(0,n.kt)("inlineCode",{parentName:"p"},"flake.nix"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"nix run github:tenzir/tenzir/stable\n")),(0,n.kt)("p",null,"Install Tenzir by adding ",(0,n.kt)("inlineCode",{parentName:"p"},"github:tenzir/tenzir/stable")," to your flake inputs, or\nuse your preferred method to include third-party modules on classic NixOS.")),(0,n.kt)(l.Z,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,n.kt)("p",null,"Download a tarball with our ",(0,n.kt)("a",m({parentName:"p"},{href:"https://github.com/tenzir/tenzir/releases/latest/download/tenzir-static-x86_64-linux.tar.gz"}),"static binary")," for all Linux\ndistributions and unpack it into ",(0,n.kt)("inlineCode",{parentName:"p"},"/opt/tenzir"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"tar xzf tenzir-static-x86_64-linux.tar.gz -C /\n")),(0,n.kt)("p",null,"We also offer prebuilt statically linked binaries for every Git commit to the\n",(0,n.kt)("inlineCode",{parentName:"p"},"main")," branch."),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),'version="$(git describe --abbrev=10 --long --dirty --match=\'v[0-9]*\')"\ncurl -fsSL "https://storage.googleapis.com/tenzir-dist-public/packages/main/tenzir-${version}-linux-static.tar.gz"\n'))),(0,n.kt)(l.Z,{value:"macos",label:"macOS",mdxType:"TabItem"},(0,n.kt)("p",null,"Please use Docker ",(0,n.kt)("a",m({parentName:"p"},{href:"https://levelup.gitconnected.com/docker-on-apple-silicon-mac-how-to-run-x86-containers-with-rosetta-2-4a679913a0d5"}),"with\nRosetta"),"\nuntil we offer a native package.")),(0,n.kt)(l.Z,{value:"docker",label:"Docker",mdxType:"TabItem"},(0,n.kt)("p",null,"Pull the image:"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"docker pull tenzir/tenzir\n")),(0,n.kt)("p",null,"When using Docker, replace ",(0,n.kt)("inlineCode",{parentName:"p"},"tenzir")," with ",(0,n.kt)("inlineCode",{parentName:"p"},"docker run -it tenzir/tenzir")," in the\nexamples below."))),(0,n.kt)("h3",m({},{id:"download-sample-data"}),"Download sample data"),(0,n.kt)("p",null,"The below examples use this dataset. Download to follow along or just keep\nreading."),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# Suricata EVE JSON logs (123 MB)\ncurl -L -O https://storage.googleapis.com/tenzir-datasets/M57/suricata.tar.gz\ntar xzvf suricata.tar.gz\n# Zeek TSV logs (43 MB)\ncurl -L -O https://storage.googleapis.com/tenzir-datasets/M57/zeek.tar.gz\ntar xzvf zeek.tar.gz\n")),(0,n.kt)("h3",m({},{id:"run-pipelines"}),"Run pipelines"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"tenzir")," exectuable runs a pipeline."),(0,n.kt)("p",null,"Start with the ",(0,n.kt)("a",m({parentName:"p"},{href:"/next/operators/sources/version"}),(0,n.kt)("inlineCode",{parentName:"a"},"version"))," source operator and\npipe to the ",(0,n.kt)("a",m({parentName:"p"},{href:"/next/operators/sinks/write"}),(0,n.kt)("inlineCode",{parentName:"a"},"write"))," sink operator:"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"tenzir 'version | write json' \n")),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-json"}),'{"version": "v3.1.0-377-ga790da3049-dirty", "plugins": [{"name": "parquet", "version": "bundled"}, {"name": "pcap", "version": "bundled"}, {"name": "sigma", "version": "bundled"}, {"name": "web", "version": "bundled"}]}\n')),(0,n.kt)("p",null,"Get the top 3 schemas of the Zeek schemas as tab-separated values\n(",(0,n.kt)("a",m({parentName:"p"},{href:"/next/formats/tsv"}),(0,n.kt)("inlineCode",{parentName:"a"},"tsv")),"):"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"cat Zeek/*.log | tenzir '\n  read zeek-tsv \n  | measure \n  | summarize events=sum(events) by schema \n  | sort events desc \n  | head 3 \n  | write tsv\n  '\n")),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Output"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{}),"schema  events\nzeek.conn   583838\nzeek.ssl    42389\nzeek.files  21922\n"))),(0,n.kt)("p",null,"Get the top 5 Zeek notices from ",(0,n.kt)("inlineCode",{parentName:"p"},"notice.log")," as JSON:"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"tenzir '\n  from file Zeek/notice.log\n  | read zeek-tsv \n  | where #schema == \"zeek.notice\"\n  | summarize n=count(msg) by msg\n  | sort n desc \n  | head 3 \n  | write json\n  '\n")),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Output"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-json"}),'{"msg": "SSL certificate validation failed with (certificate has expired)", "n": 2201}\n{"msg": "SSL certificate validation failed with (unable to get local issuer certificate)", "n": 1600}\n{"msg": "SSL certificate validation failed with (self signed certificate)", "n": 603}\n{"msg": "Detected SMB::FILE_WRITE to admin file share \'\\\\\\\\10.5.26.4\\\\C$\\\\WINDOWS\\\\h48l10jxplwhq9eowyecjmwg0nxwu72zblns1l3v3c6uu6p6069r4c4c5yjwv_e7.exe\'", "n": 339}\n{"msg": "SSL certificate validation failed with (certificate is not yet valid)", "n": 324}\n'))),(0,n.kt)("h3",m({},{id:"spawn-a-node"}),"Spawn a node"),(0,n.kt)("p",null,"Use the ",(0,n.kt)("inlineCode",{parentName:"p"},"tenzir-node")," executable to start a node that manages pipelines and\nstorage."),(0,n.kt)(r.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"binary",label:"Binary",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"tenzir-node\n")),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{}),"[12:43:22.789] node (v3.1.0-377-ga790da3049-dirty) is listening on 127.0.0.1:5158\n"))),(0,n.kt)(l.Z,{value:"docker",label:"Docker",mdxType:"TabItem"},(0,n.kt)("p",null,"  Expose the port of the listening node and provide a directory for storage:"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"mkdir storage\ndocker run -dt -p 5158:5158 -v storage:/var/lib/tenzir tenzir/tenzir --entry-point=tenzir-node\n")))),(0,n.kt)("h3",m({},{id:"import-data-into-a-node"}),"Import data into a node"),(0,n.kt)("p",null,"End a pipeline with the ",(0,n.kt)("a",m({parentName:"p"},{href:"/next/operators/sinks/import"}),(0,n.kt)("inlineCode",{parentName:"a"},"import"))," operator to ingest\ndata into a node:"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"tar xOzf zeek.tar.gz | tenzir '\n  read zeek\n  | import\n  '\n")),(0,n.kt)("p",null,"Filter the input with ",(0,n.kt)("a",m({parentName:"p"},{href:"/next/operators/transformations/where"}),(0,n.kt)("inlineCode",{parentName:"a"},"where"))," to select a\nsubset of events:"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"tar xOzf suricata.tar.gz | tenzir '\n  read suricata\n  | where #schema == \"suricata.alert\"\n  | import\n  '\n")),(0,n.kt)("h3",m({},{id:"export-data-from-a-node"}),"Export data from a node"),(0,n.kt)("p",null,"Start a pipeline with the ",(0,n.kt)("a",m({parentName:"p"},{href:"/next/operators/sources/export"}),(0,n.kt)("inlineCode",{parentName:"a"},"export"))," operator to\ninitiate a datastream from stored data at a node."),(0,n.kt)("p",null,'Get a "taste" of one event per schema:'),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"tenzir 'export | taste 1'\n")),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Output"),(0,n.kt)("p",null,"TODO")),(0,n.kt)("p",null,"As above, get the top 3 schemas of the Zeek schemas, but this time start the\npipeline over the historical data at the running node:"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"tenzir '\n  export\n  | measure \n  | summarize events=sum(events) by schema \n  | sort events desc \n  | head 3 \n  | write tsv\n  '\n")),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Output"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{}),"schema  events\nzeek.conn   583838\nzeek.ssl    42389\nzeek.files  21922\n"))),(0,n.kt)("p",null,"The above pipeline performs a full scan over the data at the node. Tenzir's\npipeline optimizer performs predicate push-down to avoid scans when possible.\nConsider this pipeline:"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"tenzir '\n  export\n  | where *.id.orig_h in 10.0.0.0/8\n  | write parquet to file local.parquet\n  '\n")),(0,n.kt)("p",null,"The optimizer coalesces the ",(0,n.kt)("inlineCode",{parentName:"p"},"export")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"where")," operators such that\n",(0,n.kt)("a",m({parentName:"p"},{href:"/next/language/expressions"}),"expression")," ",(0,n.kt)("inlineCode",{parentName:"p"},"*.id.orig_h in 10.0.0.0/8")," gets pushed\ndown to the index and storage layer."),(0,n.kt)("h2",m({},{id:"up-next"}),"Up Next"),(0,n.kt)("p",null,"Now that you got a first impression of Tenzir pipelines, dive deeper by"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"following the ",(0,n.kt)("a",m({parentName:"li"},{href:"/next/user-guides"}),"user guides")," with step-by-step tutorials of\ncommon use cases"),(0,n.kt)("li",{parentName:"ul"},"learning more about the ",(0,n.kt)("a",m({parentName:"li"},{href:"/next/language"}),"language"),", ",(0,n.kt)("a",m({parentName:"li"},{href:"/next/operators"}),"operators"),",\n",(0,n.kt)("a",m({parentName:"li"},{href:"/next/connectors"}),"connectors"),", ",(0,n.kt)("a",m({parentName:"li"},{href:"/next/formats"}),"formats"),", and the ",(0,n.kt)("a",m({parentName:"li"},{href:"/next/data-model"}),"data\nmodel")),(0,n.kt)("li",{parentName:"ul"},"understanding ",(0,n.kt)("a",m({parentName:"li"},{href:"/next/why-tenzir"}),"why")," we built Tenzir and how it compares to\nother systems")),(0,n.kt)("p",null,"We're here to help! If you have any questions, swing by our friendly ",(0,n.kt)("a",m({parentName:"p"},{href:"/discord"}),"community\nDiscord")," or open a ",(0,n.kt)("a",m({parentName:"p"},{href:"https://github.com/tenzir/tenzir/discussions"}),"GitHub\ndiscussion"),"."))}x.isMDXComponent=!0}}]);