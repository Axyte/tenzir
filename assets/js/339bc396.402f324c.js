"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[63826],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),f=o,y=m["".concat(i,".").concat(f)]||m[f]||u[f]||a;return r?n.createElement(y,s(s({ref:t},c),{},{components:r})):n.createElement(y,s({ref:t},c))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[m]="string"==typeof e?e:o,s[1]=l;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},30566:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>d,default:()=>k,frontMatter:()=>y,metadata:()=>g,toc:()=>h});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&c(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&c(e,r,t[r]);return e},u=(e,t)=>a(e,s(t)),f=(e,t)=>{var r={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const y={sidebar_custom_props:{format:{parser:!0}}},d="syslog",g={unversionedId:"formats/syslog",id:"version-v4.14/formats/syslog",title:"syslog",description:"Reads syslog messages.",source:"@site/versioned_docs/version-v4.14/formats/syslog.md",sourceDirName:"formats",slug:"/formats/syslog",permalink:"/v4.14/formats/syslog",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.14/formats/syslog.md",tags:[],version:"v4.14",frontMatter:{sidebar_custom_props:{format:{parser:!0}}},sidebar:"docsSidebar",previous:{title:"suricata",permalink:"/v4.14/formats/suricata"},next:{title:"time",permalink:"/v4.14/formats/time"}},v={},h=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}],b={toc:h},O="wrapper";function k(e){var t=e,{components:r}=t,o=f(t,["components"]);return(0,n.kt)(O,u(m(m({},b),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",m({},{id:"syslog"}),"syslog"),(0,n.kt)("p",null,"Reads syslog messages."),(0,n.kt)("h2",m({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{}),"syslog\n")),(0,n.kt)("h2",m({},{id:"description"}),"Description"),(0,n.kt)("p",null,'Syslog is a standard format for message logging.\nTenzir supports reading syslog messages in both the standardized "Syslog Protocol" format\n(',(0,n.kt)("a",m({parentName:"p"},{href:"https://tools.ietf.org/html/rfc5424"}),"RFC 5424"),'), and the older "BSD syslog Protocol" format\n(',(0,n.kt)("a",m({parentName:"p"},{href:"https://tools.ietf.org/html/rfc3164"}),"RFC 3164"),")."),(0,n.kt)("p",null,"Depending on the syslog format, the result can be different.\nHere's an example of a syslog message in RFC 5424 format:"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{}),'<165>8 2023-10-11T22:14:15.003Z mymachineexamplecom evntslog 1370 ID47 [exampleSDID@32473 eventSource="Application" eventID="1011"] Event log entry\n')),(0,n.kt)("p",null,"With this input, the parser will produce the following output, with the schema name ",(0,n.kt)("inlineCode",{parentName:"p"},"syslog.rfc5424"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-json"}),'{\n  "facility": 20,\n  "severity": 5,\n  "version": 8,\n  "timestamp": "2023-10-11T22:14:15.003000",\n  "hostname": "mymachineexamplecom",\n  "app_name": "evntslog",\n  "process_id": "1370",\n  "message_id": "ID47",\n  "structured_data": {\n    "exampleSDID@32473": {\n      "eventSource": "Application",\n      "eventID": 1011\n    }\n  },\n  "message": "Event log entry"\n}\n')),(0,n.kt)("p",null,"Here's an example of a syslog message in RFC 3164 format:"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{}),"<34>Nov 16 14:55:56 mymachine PROGRAM: Freeform message\n")),(0,n.kt)("p",null,"With this input, the parser will produce the following output, with the schema name ",(0,n.kt)("inlineCode",{parentName:"p"},"syslog.rfc3164"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-json"}),'{\n  "facility": 4,\n  "severity": 2,\n  "timestamp": "Nov 16 14:55:56",\n  "hostname": "mymachine",\n  "app_name": "PROGRAM",\n  "process_id": null,\n  "content": "Freeform message"\n}\n')),(0,n.kt)("h2",m({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Read a syslog file:"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{}),"from mylog.log read syslog\n")))}k.isMDXComponent=!0}}]);