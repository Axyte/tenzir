"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[13266],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),f=o,m=c["".concat(s,".").concat(f)]||c[f]||d[f]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},78348:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>k,contentTitle:()=>h,default:()=>w,frontMatter:()=>m,metadata:()=>v,toc:()=>g});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))u.call(t,r)&&p(e,r,t[r]);return e},d=(e,t)=>a(e,i(t)),f=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const m={},h="Deduplicate events",v={unversionedId:"user-guides/deduplicate-events",id:"version-Tenzir v4.12/user-guides/deduplicate-events",title:"Deduplicate events",description:"The deduplicate provides is a powerful",source:"@site/versioned_docs/version-Tenzir v4.12/user-guides/deduplicate-events.md",sourceDirName:"user-guides",slug:"/user-guides/deduplicate-events",permalink:"/Tenzir v4.12/user-guides/deduplicate-events",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.12/user-guides/deduplicate-events.md",tags:[],version:"Tenzir v4.12",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Enrich with Threat Intel",permalink:"/Tenzir v4.12/user-guides/enrich-with-threat-intel/"},next:{title:"Integrations",permalink:"/Tenzir v4.12/integrations"}},k={},g=[{value:"Analyze unique host pairs",id:"analyze-unique-host-pairs",level:2},{value:"Remove duplicate alerts",id:"remove-duplicate-alerts",level:2},{value:"Produce a finite amount of retro lookups",id:"produce-a-finite-amount-of-retro-lookups",level:2}],y={toc:g},b="wrapper";function w(e){var t=e,{components:r}=t,o=f(t,["components"]);return(0,n.kt)(b,d(c(c({},y),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",c({},{id:"deduplicate-events"}),"Deduplicate events"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",c({parentName:"p"},{href:"/Tenzir%20v4.12/operators/deduplicate"}),(0,n.kt)("inlineCode",{parentName:"a"},"deduplicate"))," provides is a powerful\nmechanism to remove duplicate events in a pipeline."),(0,n.kt)("p",null,"There are numerous use cases for deduplication, such as reducing noise,\noptimizing costs and make threat detection and response more efficent. Read our\n",(0,n.kt)("a",c({parentName:"p"},{href:"/blog/reduce-cost-and-noise-with-deduplication"}),"blog post")," for high-level\ndiscussion."),(0,n.kt)("h2",c({},{id:"analyze-unique-host-pairs"}),"Analyze unique host pairs"),(0,n.kt)("p",null,"Let's say you're investigating an incident and would like get a better of\npicture of what entities are involved in the communication. To this end, you\nwould like to extract all unique host pairs to identify who communicated with\nwhom."),(0,n.kt)("p",null,"Here's how this looks like with Zeek data:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{}),'export\n| where #schema == "zeek.conn"\n| deduplicate id.orig_h, id.resp_h\n')),(0,n.kt)("p",null,"Providing ",(0,n.kt)("inlineCode",{parentName:"p"},"id.orig_h")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"id.resp_h")," to the operator restricts the output to\nall unique host pairs. Note that flipped connections occur twice here, i.e., A \u2192\nB as well as B \u2192 A are present."),(0,n.kt)("h2",c({},{id:"remove-duplicate-alerts"}),"Remove duplicate alerts"),(0,n.kt)("p",null,"Are you're overloaded with alerts, like every analyst? Let's remove some noise\nfrom our alerts."),(0,n.kt)("p",null,"First, let's check what our alert dataset looks like:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{}),'export\n| where #schema == "suricata.alert"\n| top alert.signature\n| head 5\n')),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "alert.signature": "ET MALWARE Cobalt Strike Beacon Observed",\n  "count": 117369\n}\n{\n  "alert.signature": "SURICATA STREAM ESTABLISHED packet out of window",\n  "count": 103198\n}\n{\n  "alert.signature": "SURICATA STREAM Packet with invalid ack",\n  "count": 21960\n}\n{\n  "alert.signature": "SURICATA STREAM ESTABLISHED invalid ack",\n  "count": 21920\n}\n{\n  "alert.signature": "ET JA3 Hash - [Abuse.ch] Possible Dridex",\n  "count": 16870\n}\n')),(0,n.kt)("p",null,"Hundreds of thousands of alerts! Maybe I'm just interested in one per hour per\nhost affected host pair? Here's the pipeline for this:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{}),'from /tmp/eve.json --follow\n| where #schema == "suricata.alert"\n| deduplicate src_ip, dest_ip, alert.signature --timeout 1 hour\n| import\n')),(0,n.kt)("h2",c({},{id:"produce-a-finite-amount-of-retro-lookups"}),"Produce a finite amount of retro lookups"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",c({parentName:"p"},{href:"/Tenzir%20v4.12/operators/lookup"}),(0,n.kt)("inlineCode",{parentName:"a"},"lookup"))," operator offers automated live and retro\nmatching. For every context update, it generates a point query to locate events\nwith the given value. For frequent data points, e.g., the IP address ",(0,n.kt)("inlineCode",{parentName:"p"},"127.0.0.1"),",\nthis can create a massive amount of retro hits."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"deduplicate")," operator can avoid potential overload and reduce retro matches\nto a constant number of hits. For example, to receive at most 100 hits from a\nretrospective lookup, use this pipeline:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{}),"lookup --retro feodo --field dest_ip\n| deduplicate --limit 100 feodo.value\n")))}w.isMDXComponent=!0}}]);