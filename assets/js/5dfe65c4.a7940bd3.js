"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[226],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(n),c=a,f=m["".concat(p,".").concat(c)]||m[c]||u[c]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},82844:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>k,default:()=>O,frontMatter:()=>f,metadata:()=>h,toc:()=>N});var r=n(3905),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&d(e,n,t[n]);return e},u=(e,t)=>i(e,o(t)),c=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const f={},k="json",h={unversionedId:"understand/formats/json",id:"understand/formats/json",title:"json",description:"Reads and writes JSON.",source:"@site/docs/understand/formats/json.md",sourceDirName:"understand/formats",slug:"/understand/formats/json",permalink:"/docs/next/understand/formats/json",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/main/web/docs/understand/formats/json.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"feather",permalink:"/docs/next/understand/formats/feather"},next:{title:"netflow",permalink:"/docs/next/understand/formats/netflow"}},y={},N=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>--selector=field[:prefix]</code> (Parser)",id:"--selectorfieldprefix-parser",level:3},{value:"<code>--unnest-separator=&lt;string&gt;</code> (Parser)",id:"--unnest-separatorstring-parser",level:3},{value:"<code>--pretty</code> (Printer)",id:"--pretty-printer",level:3},{value:"<code>--omit-nulls</code> (Printer)",id:"--omit-nulls-printer",level:3},{value:"<code>--omit-empty-records</code> (Printer)",id:"--omit-empty-records-printer",level:3},{value:"<code>--omit-empty-lists</code> (Printer)",id:"--omit-empty-lists-printer",level:3},{value:"<code>--omit-empty</code> (Printer)",id:"--omit-empty-printer",level:3},{value:"Examples",id:"examples",level:2}],v={toc:N},g="wrapper";function O(e){var t=e,{components:n}=t,a=c(t,["components"]);return(0,r.kt)(g,u(m(m({},v),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",m({},{id:"json"}),"json"),(0,r.kt)("p",null,"Reads and writes JSON."),(0,r.kt)("h2",m({},{id:"synopsis"}),"Synopsis"),(0,r.kt)("p",null,"Parser:"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{}),"json [--selector=field[:prefix]] [--unnest-separator=<string>]\n")),(0,r.kt)("p",null,"Printer:"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{}),"json [--pretty] [--omit-nulls] [--omit-empty-records] [--omit-empty-lists]\n     [--omit-empty]\n")),(0,r.kt)("h2",m({},{id:"description"}),"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"json")," format provides a parser and printer for JSON and ",(0,r.kt)("a",m({parentName:"p"},{href:"https://en.wikipedia.org/wiki/JSON_streaming#Line-delimited_JSON"}),"line-delimited\nJSON")," objects."),(0,r.kt)("p",null,"The default loader for the ",(0,r.kt)("inlineCode",{parentName:"p"},"json")," parser is ",(0,r.kt)("a",m({parentName:"p"},{href:"/docs/next/understand/connectors/stdin"}),(0,r.kt)("inlineCode",{parentName:"a"},"stdin")),"."),(0,r.kt)("p",null,"The default saver for the ",(0,r.kt)("inlineCode",{parentName:"p"},"json")," printer is ",(0,r.kt)("a",m({parentName:"p"},{href:"/docs/next/understand/connectors/stdout"}),(0,r.kt)("inlineCode",{parentName:"a"},"stdout")),"."),(0,r.kt)("h3",m({},{id:"--selectorfieldprefix-parser"}),(0,r.kt)("inlineCode",{parentName:"h3"},"--selector=field[:prefix]")," (Parser)"),(0,r.kt)("p",null,"Designates a field value as schema name, optionally with an added dot-separated\nprefix."),(0,r.kt)("p",null,"For example, the ",(0,r.kt)("a",m({parentName:"p"},{href:"/docs/next/understand/formats/suricata"}),"Suricata EVE JSON")," format includes a field\n",(0,r.kt)("inlineCode",{parentName:"p"},"event_type")," that signifies the log type. If we pass\n",(0,r.kt)("inlineCode",{parentName:"p"},"--selector=event_type:suricata"),", a field value of ",(0,r.kt)("inlineCode",{parentName:"p"},"flow")," will create a schema\nwith the name ",(0,r.kt)("inlineCode",{parentName:"p"},"suricata.flow"),"."),(0,r.kt)("h3",m({},{id:"--unnest-separatorstring-parser"}),(0,r.kt)("inlineCode",{parentName:"h3"},"--unnest-separator=<string>")," (Parser)"),(0,r.kt)("p",null,"A delimiter that, if present in keys, causes values to be treated as values of nested records."),(0,r.kt)("p",null,"A popular example of this is the ",(0,r.kt)("a",m({parentName:"p"},{href:"/docs/next/understand/formats/zeek-json"}),"Zeek JSON")," format. It includes\nthe fields ",(0,r.kt)("inlineCode",{parentName:"p"},"id.orig_h"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"id.orig_p"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"id.resp_h"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"id.resp_p")," at the\ntop-level. The data is best modeled as an ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," record with four nested fields\n",(0,r.kt)("inlineCode",{parentName:"p"},"orig_h"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"orig_p"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"resp_h"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"resp_p"),"."),(0,r.kt)("p",null,"Without an unnest separator, the data looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-json"}),'{\n  "id.orig_h" : "1.1.1.1",\n  "id.orig_p" : 10,\n  "id.resp_h" : "1.1.1.2",\n  "id.resp_p" : 5\n}\n')),(0,r.kt)("p",null,"With the unnest separator set to ",(0,r.kt)("inlineCode",{parentName:"p"},"."),", VAST reads the events like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-json"}),'{\n  "id" : {\n    "orig_h" : "1.1.1.1",\n    "orig_p" : 10,\n    "resp_h" : "1.1.1.2",\n    "resp_p" : 5\n  }\n}\n')),(0,r.kt)("h3",m({},{id:"--pretty-printer"}),(0,r.kt)("inlineCode",{parentName:"h3"},"--pretty")," (Printer)"),(0,r.kt)("p",null,"VAST defaults to line-delimited JSON output (JSONL or NDJSON). The ",(0,r.kt)("inlineCode",{parentName:"p"},"--pretty"),"\nflag switches to a tree-structured representation."),(0,r.kt)("h3",m({},{id:"--omit-nulls-printer"}),(0,r.kt)("inlineCode",{parentName:"h3"},"--omit-nulls")," (Printer)"),(0,r.kt)("p",null,"Strips ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," fields from the input."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-json"}),'{\n  "a": null\n  "b": [42, null, 43],\n  "c": {\n    "d": null\n    "e": 42\n  }\n}\n')),(0,r.kt)("p",null,"With ",(0,r.kt)("inlineCode",{parentName:"p"},"--omit-nulls"),", this example becomes:"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-json"}),'{\n  "b": 42,\n  "c": {\n    "e": 42\n  }\n}\n')),(0,r.kt)("h3",m({},{id:"--omit-empty-records-printer"}),(0,r.kt)("inlineCode",{parentName:"h3"},"--omit-empty-records")," (Printer)"),(0,r.kt)("p",null,"Strips empty records from the input."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-json"}),'{\n  "w": null\n  "x": {},\n  "y": {\n    "z": {}\n  }\n}\n')),(0,r.kt)("p",null,"With ",(0,r.kt)("inlineCode",{parentName:"p"},"--omit-empty-records"),", this example becomes:"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-json"}),'{\n  "w": 42,\n}\n')),(0,r.kt)("h3",m({},{id:"--omit-empty-lists-printer"}),(0,r.kt)("inlineCode",{parentName:"h3"},"--omit-empty-lists")," (Printer)"),(0,r.kt)("p",null,"Strips empty lists from the input."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-json"}),'{\n  "m": []\n  "n": {},\n  "o": {\n    "p": []\n  }\n}\n')),(0,r.kt)("p",null,"With ",(0,r.kt)("inlineCode",{parentName:"p"},"--omit-empty-lists"),", this example becomes:"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-json"}),'{\n  "m": {},\n  "o": {}\n}\n')),(0,r.kt)("h3",m({},{id:"--omit-empty-printer"}),(0,r.kt)("inlineCode",{parentName:"h3"},"--omit-empty")," (Printer)"),(0,r.kt)("p",null,"This options combines all other ",(0,r.kt)("inlineCode",{parentName:"p"},"--omit-*")," options."),(0,r.kt)("h2",m({},{id:"examples"}),"Examples"),(0,r.kt)("p",null,"Read JSON from stdin, either NDJSON or tree-structured:"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{}),"read json\n")),(0,r.kt)("p",null,"Write compact JSON without empty fields to a file:"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{}),"write json --omit-empty to file /tmp/result.json\n")),(0,r.kt)("p",null,"Pretty-print JSON in tree-structured form to stdout:"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{}),"write json --pretty\n")))}O.isMDXComponent=!0}}]);