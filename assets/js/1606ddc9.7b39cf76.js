"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[45795],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,f=c["".concat(s,".").concat(u)]||c[u]||d[u]||i;return n?r.createElement(f,l(l({ref:t},m),{},{components:n})):r.createElement(f,l({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},11184:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>v,default:()=>N,frontMatter:()=>f,metadata:()=>k,toc:()=>b});var r=n(3905),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&m(e,n,t[n]);if(o)for(var n of o(t))p.call(t,n)&&m(e,n,t[n]);return e},d=(e,t)=>i(e,l(t)),u=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const f={sidebar_custom_props:{format:{parser:!0,printer:!0}}},v="xsv",k={unversionedId:"formats/xsv",id:"version-Tenzir v4.7/formats/xsv",title:"xsv",description:"Reads and writes lines with separated values.",source:"@site/versioned_docs/version-Tenzir v4.7/formats/xsv.md",sourceDirName:"formats",slug:"/formats/xsv",permalink:"/Tenzir v4.7/formats/xsv",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.7/formats/xsv.md",tags:[],version:"Tenzir v4.7",frontMatter:{sidebar_custom_props:{format:{parser:!0,printer:!0}}},sidebar:"docsSidebar",previous:{title:"tsv",permalink:"/Tenzir v4.7/formats/tsv"},next:{title:"yaml",permalink:"/Tenzir v4.7/formats/yaml"}},h={},b=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;field-sep&gt;</code>",id:"field-sep",level:3},{value:"<code>&lt;list-sep&gt;</code>",id:"list-sep",level:3},{value:"<code>&lt;null-value&gt;</code>",id:"null-value",level:3},{value:"<code>--allow-comments</code>",id:"--allow-comments",level:3},{value:"Examples",id:"examples",level:2}],g={toc:b},y="wrapper";function N(e){var t=e,{components:n}=t,a=u(t,["components"]);return(0,r.kt)(y,d(c(c({},g),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",c({},{id:"xsv"}),"xsv"),(0,r.kt)("p",null,"Reads and writes lines with separated values."),(0,r.kt)("h2",c({},{id:"synopsis"}),"Synopsis"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"csv [--allow-comments]\nssv [--allow-comments]\ntsv [--allow-comments]\nxsv <field-sep> <list-sep> <null-value> [--allow-comments]\n")),(0,r.kt)("h2",c({},{id:"description"}),"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"xsv")," format is a generalization of ",(0,r.kt)("a",c({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Comma-separated_values"}),"comma-separated values (CSV)")," data\nin tabular form with a more flexible separator specification supporting tabs,\ncommas, and spaces. The first line in an XSV file is the header that describes\nthe field names. The remaining lines contain concrete values. One line\ncorresponds to one event, minus the header."),(0,r.kt)("p",null,"The following table juxtaposes the available XSV configurations:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Format"),(0,r.kt)("th",c({parentName:"tr"},{align:"center"}),"Field Separator"),(0,r.kt)("th",c({parentName:"tr"},{align:"center"}),"List Separator"),(0,r.kt)("th",c({parentName:"tr"},{align:"center"}),"Null Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"/Tenzir%20v4.7/formats/csv"}),(0,r.kt)("inlineCode",{parentName:"a"},"csv"))),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),(0,r.kt)("inlineCode",{parentName:"td"},",")),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),(0,r.kt)("inlineCode",{parentName:"td"},";")),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"empty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"/Tenzir%20v4.7/formats/ssv"}),(0,r.kt)("inlineCode",{parentName:"a"},"ssv"))),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),(0,r.kt)("inlineCode",{parentName:"td"},"<space>")),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),(0,r.kt)("inlineCode",{parentName:"td"},",")),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),(0,r.kt)("inlineCode",{parentName:"td"},"-"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"/Tenzir%20v4.7/formats/tsv"}),(0,r.kt)("inlineCode",{parentName:"a"},"tsv"))),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),(0,r.kt)("inlineCode",{parentName:"td"},"\\t")),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),(0,r.kt)("inlineCode",{parentName:"td"},",")),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),(0,r.kt)("inlineCode",{parentName:"td"},"-"))))),(0,r.kt)("p",null,"Like the ",(0,r.kt)("a",c({parentName:"p"},{href:"/Tenzir%20v4.7/formats/json"}),(0,r.kt)("inlineCode",{parentName:"a"},"json"))," parser, the XSV parser infers types automatically.\nConsider this piece of CSV data:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-csv"}),"ip,sn,str,rec.a,rec.b\n1.2.3.4,10.0.0.0/8,foo bar,-4.2,/foo|bar/\n")),(0,r.kt)("p",null,"Here's the schema that the parser infers from the above data:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-yaml",metastring:"title=test.schema",title:"test.schema"}),"record:\n  - ip: ip\n  - sn: subnet\n  - str: string\n  - record:\n    - a: double\n    - b: pattern\n")),(0,r.kt)("p",null,"Note that nested records have dot-separated field names."),(0,r.kt)("h3",c({},{id:"field-sep"}),(0,r.kt)("inlineCode",{parentName:"h3"},"<field-sep>")),(0,r.kt)("p",null,"Specifies the string that separates fields."),(0,r.kt)("h3",c({},{id:"list-sep"}),(0,r.kt)("inlineCode",{parentName:"h3"},"<list-sep>")),(0,r.kt)("p",null,"Specifies the string that separates list elements ",(0,r.kt)("em",{parentName:"p"},"within")," a field."),(0,r.kt)("h3",c({},{id:"null-value"}),(0,r.kt)("inlineCode",{parentName:"h3"},"<null-value>")),(0,r.kt)("p",null,"Specifies the string that denotes an absent value."),(0,r.kt)("h3",c({},{id:"--allow-comments"}),(0,r.kt)("inlineCode",{parentName:"h3"},"--allow-comments")),(0,r.kt)("p",null,"Treat lines beginning with ",(0,r.kt)("inlineCode",{parentName:"p"},"'#'")," as comments."),(0,r.kt)("h2",c({},{id:"examples"}),"Examples"),(0,r.kt)("p",null,"Read CSV from stdin:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"from stdin read csv\n")),(0,r.kt)("p",null,"Write a multi-schema stream of events to a directory in TSV format, with one\nfile per unique schema:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"to directory /tmp/result write tsv\n")))}N.isMDXComponent=!0}}]);