"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[92510],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=m(n),u=a,k=s["".concat(p,".").concat(u)]||s[u]||c[u]||i;return n?r.createElement(k,l(l({ref:t},d),{},{components:n})):r.createElement(k,l({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3720:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>h,default:()=>v,frontMatter:()=>k,metadata:()=>N,toc:()=>f});var r=n(3905),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(o)for(var n of o(t))m.call(t,n)&&d(e,n,t[n]);return e},c=(e,t)=>i(e,l(t)),u=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&m.call(e,r)&&(n[r]=e[r]);return n};const k={},h="Metrics",N={unversionedId:"metrics",id:"metrics",title:"Metrics",description:"This page describes the new, experimental metrics system. It should be",source:"@site/docs/metrics.md",sourceDirName:".",slug:"/metrics",permalink:"/next/metrics",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/metrics.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Taxonomies",permalink:"/next/data-model/taxonomies"},next:{title:"Legacy Metrics",permalink:"/next/metrics/legacy_metrics"}},g={},f=[{value:"<code>tenzir.metrics.operator</code>",id:"tenzirmetricsoperator",level:2},{value:"Examples",id:"examples",level:3}],y={toc:f},b="wrapper";function v(e){var t=e,{components:n}=t,a=u(t,["components"]);return(0,r.kt)(b,c(s(s({},y),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",s({},{id:"metrics"}),"Metrics"),(0,r.kt)("admonition",s({},{title:"Experimental",type:"caution"}),(0,r.kt)("p",{parentName:"admonition"},"This page describes the new, experimental metrics system. It should be\nconsidered unstable and may change at any time. The documentation for the\nlegacy metrics system is available ",(0,r.kt)("a",s({parentName:"p"},{href:"/next/metrics/legacy_metrics"}),"here"),".")),(0,r.kt)("p",null,"Metrics are stored as internal events in the database. To access these events,\nuse ",(0,r.kt)("inlineCode",{parentName:"p"},"export --internal")," followed by ",(0,r.kt)("inlineCode",{parentName:"p"},'where #schema == "<name>"'),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"<name>"),"\nis one of the following:"),(0,r.kt)("h2",s({},{id:"tenzirmetricsoperator"}),(0,r.kt)("inlineCode",{parentName:"h2"},"tenzir.metrics.operator")),(0,r.kt)("p",null,"Contains input and output measurements over some amount of time for a single\noperator instantiation."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:"right"}),"Field"),(0,r.kt)("th",s({parentName:"tr"},{align:"left"}),"Type"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),(0,r.kt)("inlineCode",{parentName:"td"},"pipeline_id")),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"The ID of the pipeline where the associated operator is from.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),(0,r.kt)("inlineCode",{parentName:"td"},"hidden")),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"True if the pipeline is running for the explorer.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),(0,r.kt)("inlineCode",{parentName:"td"},"operator_id")),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),(0,r.kt)("inlineCode",{parentName:"td"},"uint64")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"The ID of the operator inside the pipeline referenced above.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),(0,r.kt)("inlineCode",{parentName:"td"},"source")),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"True if this is the first operator in the pipeline.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),(0,r.kt)("inlineCode",{parentName:"td"},"transformation")),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"True if this is neither the first nor the last operator.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),(0,r.kt)("inlineCode",{parentName:"td"},"sink")),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"True if this is the last operator in the pipeline.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),(0,r.kt)("inlineCode",{parentName:"td"},"internal")),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"True if the data flow is considered to internal to Tenzir.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),(0,r.kt)("inlineCode",{parentName:"td"},"timestamp")),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),(0,r.kt)("inlineCode",{parentName:"td"},"time")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"The time when this event was emitted (immediately after the collection period).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),(0,r.kt)("inlineCode",{parentName:"td"},"input")),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),(0,r.kt)("inlineCode",{parentName:"td"},"record")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Measurement of the incoming data stream.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),(0,r.kt)("inlineCode",{parentName:"td"},"output")),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),(0,r.kt)("inlineCode",{parentName:"td"},"record")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Measurement of the outgoing data stream.")))),(0,r.kt)("p",null,"The records ",(0,r.kt)("inlineCode",{parentName:"p"},"input")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"output")," have the following schema:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:"right"}),"Field"),(0,r.kt)("th",s({parentName:"tr"},{align:"left"}),"Type"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),(0,r.kt)("inlineCode",{parentName:"td"},"unit")),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"The type of the elements, which is ",(0,r.kt)("inlineCode",{parentName:"td"},"void"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"bytes")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"events"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),(0,r.kt)("inlineCode",{parentName:"td"},"elements")),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),(0,r.kt)("inlineCode",{parentName:"td"},"uint64")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Number of elements that were seen during the collection period.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),(0,r.kt)("inlineCode",{parentName:"td"},"approx_bytes")),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),(0,r.kt)("inlineCode",{parentName:"td"},"uint64")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"An approximation for the number of bytes transmitted.")))),(0,r.kt)("h3",s({},{id:"examples"}),"Examples"),(0,r.kt)("p",null,"Show the total pipeline ingress in bytes for every day over the last week,\nexcluding pipelines are only run for the explorer:"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-c"}),'export --internal |\nwhere #schema == "tenzir.metrics.operator" |\nwhere timestamp > 1 week ago |\nwhere hidden == false && source == true  |\nsummarize bytes=sum(output.approx_bytes) by timestamp resolution 1 day\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Output"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-json"}),'{\n  "timestamp": "2023-11-08T00:00:00.000000",\n  "bytes": 79927223\n}\n{\n  "timestamp": "2023-11-09T00:00:00.000000",\n  "bytes": 51788928\n}\n{\n  "timestamp": "2023-11-10T00:00:00.000000",\n  "bytes": 80740352\n}\n{\n  "timestamp": "2023-11-11T00:00:00.000000",\n  "bytes": 75497472\n}\n{\n  "timestamp": "2023-11-12T00:00:00.000000",\n  "bytes": 55497472\n}\n{\n  "timestamp": "2023-11-13T00:00:00.000000",\n  "bytes": 76546048\n}\n{\n  "timestamp": "2023-11-14T00:00:00.000000",\n  "bytes": 68643200\n}\n'))),(0,r.kt)("p",null,"Show the three operator instantiations that produced the most events in total\nand their pipeline:"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-c"}),'export --internal |\nwhere #schema == "tenzir.metrics.operator" |\nwhere output.unit == "events" |\nsummarize events=max(output.elements) by pipeline_id, operator_id |\nsort events desc |\nhead 3\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Output"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-json"}),'{\n  "pipeline_id": "13",\n  "operator_id": 0,\n  "events": 391008694\n}\n{\n  "pipeline_id": "12",\n  "operator_id": 0,\n  "events": 246914949\n}\n{\n  "pipeline_id": "0",\n  "operator_id": 1,\n  "events": 83013294\n}\n'))))}v.isMDXComponent=!0}}]);