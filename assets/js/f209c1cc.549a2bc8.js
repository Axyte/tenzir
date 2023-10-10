"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[39451],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=l(n),m=i,f=u["".concat(p,".").concat(m)]||u[m]||c[m]||a;return n?r.createElement(f,s(s({ref:t},d),{},{components:n})):r.createElement(f,s({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:i,s[1]=o;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46391:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>k,default:()=>O,frontMatter:()=>f,metadata:()=>v,toc:()=>g});var r=n(3905),i=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(o)for(var n of o(t))l.call(t,n)&&d(e,n,t[n]);return e},c=(e,t)=>a(e,s(t)),m=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&l.call(e,r)&&(n[r]=e[r]);return n};const f={},k="zeek-tsv",v={unversionedId:"formats/zeek-tsv",id:"version-Tenzir v4.2/formats/zeek-tsv",title:"zeek-tsv",description:"Reads and writes Zeek tab-separated values.",source:"@site/versioned_docs/version-Tenzir v4.2/formats/zeek-tsv.md",sourceDirName:"formats",slug:"/formats/zeek-tsv",permalink:"/Tenzir v4.2/formats/zeek-tsv",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.2/formats/zeek-tsv.md",tags:[],version:"Tenzir v4.2",frontMatter:{},sidebar:"docsSidebar",previous:{title:"zeek-json",permalink:"/Tenzir v4.2/formats/zeek-json"},next:{title:"Data Model",permalink:"/Tenzir v4.2/data-model"}},y={},g=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>-s|--set-separator=&lt;string&gt;</code> (Printer)",id:"-s--set-separatorstring-printer",level:3},{value:"<code>-e|--empty-field=&lt;string&gt;</code> (Printer)",id:"-e--empty-fieldstring-printer",level:3},{value:"<code>-u|--unset-field=&lt;string&gt;</code> (Printer)",id:"-u--unset-fieldstring-printer",level:3},{value:"<code>-d|--disable-timestamp-tags</code> (Printer)",id:"-d--disable-timestamp-tags-printer",level:3},{value:"Examples",id:"examples",level:2}],b={toc:g},h="wrapper";function O(e){var t=e,{components:n}=t,i=m(t,["components"]);return(0,r.kt)(h,c(u(u({},b),i),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",u({},{id:"zeek-tsv"}),"zeek-tsv"),(0,r.kt)("p",null,"Reads and writes Zeek tab-separated values."),(0,r.kt)("h2",u({},{id:"synopsis"}),"Synopsis"),(0,r.kt)("p",null,"Parser:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"zeek-tsv\n")),(0,r.kt)("p",null,"Printer:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"zeek-tsv [-s|--set-separator=<string>] [-e|--empty-field=<string>]\n         [-u|--unset-field=<string>]\n")),(0,r.kt)("h2",u({},{id:"description"}),"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",u({parentName:"p"},{href:"https://zeek.org"}),"Zeek")," network security monitor comes with its own\ntab-separated value (TSV) format for representing logs. This format includes\nadditional header fields with field names, type annotations, and additional\nmetadata."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"zeek-tsv")," parser processes this metadata to extract a schema for the\nsubsequent log entries. Similarly, the ",(0,r.kt)("inlineCode",{parentName:"p"},"zeek-tsv")," printer (re)generates the TSV\nmetadata based on Tenzir's internal schema. Tenzir's data model is a superset of\nZeek's, so the conversion into Zeek TSV may be lossy. The Zeek types ",(0,r.kt)("inlineCode",{parentName:"p"},"count"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"real"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"addr")," map to the respective Tenzir types ",(0,r.kt)("inlineCode",{parentName:"p"},"uint64"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"double"),", and\n",(0,r.kt)("inlineCode",{parentName:"p"},"ip"),"."),(0,r.kt)("p",null,"Here's an example of a typical Zeek ",(0,r.kt)("inlineCode",{parentName:"p"},"conn.log")," in TSV form:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"#separator \\x09\n#set_separator  ,\n#empty_field  (empty)\n#unset_field  -\n#path conn\n#open 2014-05-23-18-02-04\n#fields ts  uid id.orig_h id.orig_p id.resp_h id.resp_p proto service duration  \u2026orig_bytes resp_bytes  conn_state  local_orig  missed_bytes  history orig_pkts \u2026orig_ip_bytes  resp_pkts resp_ip_bytes tunnel_parents\n#types  time  string  addr  port  addr  port  enum  string  interval  count coun\u2026t  string  bool  count string  count count count count table[string]\n1258531221.486539 Pii6cUUq1v4 192.168.1.102 68  192.168.1.1 67  udp - 0.163820  \u2026301  300 SF  - 0 Dd  1 329 1 328 (empty)\n1258531680.237254 nkCxlvNN8pi 192.168.1.103 137 192.168.1.255 137 udp dns 3.7801\u202625 350 0 S0  - 0 D 7 546 0 0 (empty)\n1258531693.816224 9VdICMMnxQ7 192.168.1.102 137 192.168.1.255 137 udp dns 3.7486\u202647 350 0 S0  - 0 D 7 546 0 0 (empty)\n1258531635.800933 bEgBnkI31Vf 192.168.1.103 138 192.168.1.255 138 udp - 46.72538\u20260  560 0 S0  - 0 D 3 644 0 0 (empty)\n1258531693.825212 Ol4qkvXOksc 192.168.1.102 138 192.168.1.255 138 udp - 2.248589\u2026  348  0 S0  - 0 D 2 404 0 0 (empty)\n1258531803.872834 kmnBNBtl96d 192.168.1.104 137 192.168.1.255 137 udp dns 3.7488\u202693 350 0 S0  - 0 D 7 546 0 0 (empty)\n1258531747.077012 CFIX6YVTFp2 192.168.1.104 138 192.168.1.255 138 udp - 59.05289\u20268  549 0 S0  - 0 D 3 633 0 0 (empty)\n1258531924.321413 KlF6tbPUSQ1 192.168.1.103 68  192.168.1.1 67  udp - 0.044779  \u2026303  300 SF  - 0 Dd  1 331 1 328 (empty)\n1258531939.613071 tP3DM6npTdj 192.168.1.102 138 192.168.1.255 138 udp - - - - S0\u2026  -  0 D 1 229 0 0 (empty)\n1258532046.693816 Jb4jIDToo77 192.168.1.104 68  192.168.1.1 67  udp - 0.002103  \u2026311  300 SF  - 0 Dd  1 339 1 328 (empty)\n1258532143.457078 xvWLhxgUmj5 192.168.1.102 1170  192.168.1.1 53  udp dns 0.0685\u202611 36  215 SF  - 0 Dd  1 64  1 243 (empty)\n1258532203.657268 feNcvrZfDbf 192.168.1.104 1174  192.168.1.1 53  udp dns 0.1709\u202662 36  215 SF  - 0 Dd  1 64  1 243 (empty)\n1258532331.365294 aLsTcZJHAwa 192.168.1.1 5353  224.0.0.251 5353  udp dns 0.1003\u202681 273 0 S0  - 0 D 2 329 0 0 (empty)\n")),(0,r.kt)("h3",u({},{id:"-s--set-separatorstring-printer"}),(0,r.kt)("inlineCode",{parentName:"h3"},"-s|--set-separator=<string>")," (Printer)"),(0,r.kt)("p",null,"Specifies the set separator."),(0,r.kt)("p",null,"Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"\\x09"),"."),(0,r.kt)("h3",u({},{id:"-e--empty-fieldstring-printer"}),(0,r.kt)("inlineCode",{parentName:"h3"},"-e|--empty-field=<string>")," (Printer)"),(0,r.kt)("p",null,"Specifies the separator for empty fields."),(0,r.kt)("p",null,"Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"(empty)"),"."),(0,r.kt)("h3",u({},{id:"-u--unset-fieldstring-printer"}),(0,r.kt)("inlineCode",{parentName:"h3"},"-u|--unset-field=<string>")," (Printer)"),(0,r.kt)("p",null,'Specifies the separator for unset "null" fields.'),(0,r.kt)("p",null,"Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"-"),"."),(0,r.kt)("h3",u({},{id:"-d--disable-timestamp-tags-printer"}),(0,r.kt)("inlineCode",{parentName:"h3"},"-d|--disable-timestamp-tags")," (Printer)"),(0,r.kt)("p",null,"Disables the ",(0,r.kt)("inlineCode",{parentName:"p"},"#open")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"#close")," timestamp tags."),(0,r.kt)("p",null,"Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("h2",u({},{id:"examples"}),"Examples"),(0,r.kt)("p",null,"Read a Zeek ",(0,r.kt)("inlineCode",{parentName:"p"},"conn.log")," from a file:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"from file /tmp/conn.log read zeek-tsv\n")),(0,r.kt)("p",null,"Read compressed Zeek TSV logs in one shot:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"gunzip -c *.gz | tenzir 'read zeek-tsv | ...'\n")),(0,r.kt)("p",null,"Write Zeek TSV into a directory, one file per schema:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"to directory /tmp/results write zeek-tsv\n")))}O.isMDXComponent=!0}}]);