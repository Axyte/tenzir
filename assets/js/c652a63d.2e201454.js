"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[19925],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),f=a,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||i;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},19131:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>g,default:()=>O,frontMatter:()=>d,metadata:()=>y,toc:()=>k});var n=r(3905),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&p(e,r,t[r]);return e},m=(e,t)=>i(e,o(t)),f=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const d={},g="Suricata",y={unversionedId:"integrations/suricata",id:"version-Tenzir v4.7/integrations/suricata",title:"Suricata",description:"Suricata is network monitor with a rule matching engine",source:"@site/versioned_docs/version-Tenzir v4.7/integrations/suricata.md",sourceDirName:"integrations",slug:"/integrations/suricata",permalink:"/integrations/suricata",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.7/integrations/suricata.md",tags:[],version:"Tenzir v4.7",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Splunk",permalink:"/integrations/splunk"},next:{title:"Velociraptor",permalink:"/integrations/velociraptor"}},v={},k=[{value:"Ingest EVE JSON logs into a node",id:"ingest-eve-json-logs-into-a-node",level:2},{value:"Import from a file",id:"import-from-a-file",level:3},{value:"Import from a Unix domain socket",id:"import-from-a-unix-domain-socket",level:3}],b={toc:k},h="wrapper";function O(e){var t=e,{components:r}=t,a=f(t,["components"]);return(0,n.kt)(h,m(u(u({},b),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"suricata"}),"Suricata"),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"https://suricata.io/"}),"Suricata")," is network monitor with a rule matching engine\nto detect threats."),(0,n.kt)("h2",u({},{id:"ingest-eve-json-logs-into-a-node"}),"Ingest EVE JSON logs into a node"),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"https://docs.suricata.io/en/latest/output/eve/eve-json-output.html"}),"EVE JSON"),"\nis the log format in which Suricata generates events."),(0,n.kt)("p",null,"A typical Suricata configuration looks like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-yaml",metastring:"title=suricata.yaml",title:"suricata.yaml"}),"outputs:\n  # Extensible Event Format (nicknamed EVE) event log in JSON format\n  - eve-log:\n      enabled: yes\n      filetype: regular #regular|syslog|unix_dgram|unix_stream|redis\n      filename: eve.json\n")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"filetype")," setting determines how you'd process the log file."),(0,n.kt)("h3",u({},{id:"import-from-a-file"}),"Import from a file"),(0,n.kt)("p",null,"By default, Suricata uses the file type ",(0,n.kt)("inlineCode",{parentName:"p"},"regular"),". Ingest into a node as\nfollows:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"from /path/to/eve.json read suricata\n| import\n")),(0,n.kt)("h3",u({},{id:"import-from-a-unix-domain-socket"}),"Import from a Unix domain socket"),(0,n.kt)("p",null,"If your ",(0,n.kt)("inlineCode",{parentName:"p"},"filetype")," setting is ",(0,n.kt)("inlineCode",{parentName:"p"},"unix_stream"),", you need to create a Unix domain\nsocket first, e.g., like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"nc -U -l /tmp/eve.socket\n")),(0,n.kt)("p",null,"Then you can use the same pipeline as above, since Tenzir's\n",(0,n.kt)("a",u({parentName:"p"},{href:"/connectors/file"}),(0,n.kt)("inlineCode",{parentName:"a"},"file"))," automatically detects the file type."))}O.isMDXComponent=!0}}]);