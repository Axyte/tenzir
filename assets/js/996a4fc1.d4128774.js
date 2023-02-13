"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[319],{3905:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>k});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var c=a.createContext({}),d=function(t){var e=a.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},m=function(t){var e=d(t.components);return a.createElement(c.Provider,{value:e},t.children)},s="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,c=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),s=d(r),u=n,k=s["".concat(c,".").concat(u)]||s[u]||p[u]||l;return r?a.createElement(k,o(o({ref:e},m),{},{components:r})):a.createElement(k,o({ref:e},m))}));function k(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i[s]="string"==typeof t?t:n,o[1]=i;for(var d=2;d<l;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},52991:(t,e,r)=>{r.d(e,{Z:()=>g});var a=r(67294),n=r(86010),l=r(53438),o=r(39960),i=r(13919),c=r(95999);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function m(t){let{href:e,children:r}=t;return a.createElement(o.Z,{href:e,className:(0,n.Z)("card padding--lg",d.cardContainer)},r)}function s(t){let{href:e,icon:r,title:l,description:o}=t;return a.createElement(m,{href:e},a.createElement("h2",{className:(0,n.Z)("text--truncate",d.cardTitle),title:l},r," ",l),o&&a.createElement("p",{className:(0,n.Z)("text--truncate",d.cardDescription),title:o},o))}function p(t){let{item:e}=t;const r=(0,l.Wl)(e);return r?a.createElement(s,{href:r,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function u(t){let{item:e}=t;const r=(0,i.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,l.xz)(e.docId??void 0);return a.createElement(s,{href:e.href,icon:r,title:e.label,description:n?.description})}function k(t){let{item:e}=t;switch(e.type){case"link":return a.createElement(u,{item:e});case"category":return a.createElement(p,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function f(t){let{className:e}=t;const r=(0,l.jA)();return a.createElement(g,{items:r.items,className:e})}function g(t){const{items:e,className:r}=t;if(!e)return a.createElement(f,t);const o=(0,l.MN)(e);return a.createElement("section",{className:(0,n.Z)("row",r)},o.map(((t,e)=>a.createElement("article",{key:e,className:"col col--6 margin-bottom--lg"},a.createElement(k,{item:t})))))}},64507:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>m});var a=r(87462),n=(r(67294),r(3905)),l=r(52991);const o={sidebar_position:0},i="Formats",c={unversionedId:"understand/formats/README",id:"understand/formats/README",title:"Formats",description:"A format provide can provide the following",source:"@site/docs/understand/formats/README.md",sourceDirName:"understand/formats",slug:"/understand/formats/",permalink:"/docs/understand/formats/",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/understand/formats/README.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"docsSidebar",previous:{title:"Taxonomies",permalink:"/docs/understand/data-model/taxonomies"},next:{title:"Arrow",permalink:"/docs/understand/formats/arrow"}},d={},m=[],s={toc:m},p="wrapper";function u(t){let{components:e,...o}=t;return(0,n.kt)(p,(0,a.Z)({},s,o,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"formats"},"Formats"),(0,n.kt)("p",null,"A ",(0,n.kt)("strong",{parentName:"p"},"format")," provide can provide the following\n",(0,n.kt)("a",{parentName:"p",href:"/docs/understand/architecture/components"},"components"),":"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Source"),": an input format that provides a\n",(0,n.kt)("a",{parentName:"li",href:"/docs/understand/architecture/plugins#reader"},"reader"),"\nimplementation that parses data."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Sink"),": an output format that provides a\n",(0,n.kt)("a",{parentName:"li",href:"/docs/understand/architecture/plugins#writer"},"writer")," implementation that\nprints data.")),(0,n.kt)("p",null,"Sources and sinks compose with a carrier unless they have one built in.\nThe table below shows the current support of input (source) and output (sink)\nformats."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Format"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Input"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Output"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"formats/arrow"},"Arrow")),(0,n.kt)("td",{parentName:"tr",align:null},"Apache Arrow IPC"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"formats/ascii"},"ASCII")),(0,n.kt)("td",{parentName:"tr",align:null},"Textual data representation"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"formats/cef"},"CEF")),(0,n.kt)("td",{parentName:"tr",align:null},"Common Event Format (CEF)"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"formats/csv"},"CSV")),(0,n.kt)("td",{parentName:"tr",align:null},"Comma-separated Values (CSV)"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"formats/json"},"JSON")),(0,n.kt)("td",{parentName:"tr",align:null},"Newline-delimited JSON (NDJSON)"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"formats/netflow"},"NetFlow")),(0,n.kt)("td",{parentName:"tr",align:null},"NetFlow v5, v9, and IPFIX"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"formats/pcap"},"PCAP")),(0,n.kt)("td",{parentName:"tr",align:null},"Packet handling via libpcap"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"formats/suricata"},"Suricata")),(0,n.kt)("td",{parentName:"tr",align:null},"Suricata EVE JSON"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"formats/zeek"},"Zeek")),(0,n.kt)("td",{parentName:"tr",align:null},"Zeek TSV logs"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"null")),(0,n.kt)("td",{parentName:"tr",align:null},"A null sink discards all data"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"test")),(0,n.kt)("td",{parentName:"tr",align:null},"Random event generator"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c")))),(0,n.kt)("p",null,"Conceptually, getting data in and out of VAST involves two steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Acquiring data over a carrier medium by performing I/O"),(0,n.kt)("li",{parentName:"ol"},"Converting data between the carrier-native format and Apache Arrow")),(0,n.kt)("p",null,"Sometimes (1) and (2) may not be separable, e.g., when a third-party library\nexposes structured data and performs the needed I/O itself. Because of this\nentanglement, we treat these cases separatetely:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Format",src:r(35433).Z+"#gh-light-mode-only",width:"2320",height:"1306"}),"\n",(0,n.kt)("img",{alt:"Format",src:r(78937).Z+"#gh-dark-mode-only",width:"2320",height:"1306"})),(0,n.kt)("p",null,"In the left case, data input and output is a blackbox and cannot be separated in\nthe format. In the right case, we have control about carrier and format\nindependently, allowing us to mix and match the two."),(0,n.kt)("p",null,"The list below covers all formats that VAST supports."),(0,n.kt)(l.Z,{mdxType:"DocCardList"}))}u.isMDXComponent=!0},78937:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/format.dark-838e5d19cb61810dfd18ca7b55d6b2ae.png"},35433:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/format.light-cb66082100d907d0174603b5e2b59eb7.png"}}]);