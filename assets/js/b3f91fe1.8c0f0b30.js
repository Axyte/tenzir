"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[61840],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8096:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>k,default:()=>N,frontMatter:()=>h,metadata:()=>f,toc:()=>v});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&c(e,n,t[n]);if(s)for(var n of s(t))p.call(t,n)&&c(e,n,t[n]);return e},u=(e,t)=>a(e,i(t)),m=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const h={sidebar_custom_props:{operator:{source:!0,transformation:!0}}},k="shell",f={unversionedId:"operators/shell",id:"version-v4.14/operators/shell",title:"shell",description:"Executes a system command and hooks its stdin and stdout into the pipeline.",source:"@site/versioned_docs/version-v4.14/operators/shell.md",sourceDirName:"operators",slug:"/operators/shell",permalink:"/v4.14/operators/shell",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.14/operators/shell.md",tags:[],version:"v4.14",frontMatter:{sidebar_custom_props:{operator:{source:!0,transformation:!0}}},sidebar:"docsSidebar",previous:{title:"set",permalink:"/v4.14/operators/set"},next:{title:"show",permalink:"/v4.14/operators/show"}},g={},v=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;command&gt;</code>",id:"command",level:3},{value:"Examples",id:"examples",level:2}],y={toc:v},b="wrapper";function N(e){var t=e,{components:n}=t,o=m(t,["components"]);return(0,r.kt)(b,u(d(d({},y),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",d({},{id:"shell"}),"shell"),(0,r.kt)("p",null,"Executes a system command and hooks its stdin and stdout into the pipeline."),(0,r.kt)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"shell <command>\n")),(0,r.kt)("h2",d({},{id:"description"}),"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"shell")," operator executes the provided command by spawning a new process.\nThe input of the operator is forwarded to the child's standard input. Similarly,\nthe child's standard output is forwarded to the output of the operator."),(0,r.kt)("h3",d({},{id:"command"}),(0,r.kt)("inlineCode",{parentName:"h3"},"<command>")),(0,r.kt)("p",null,"The command to execute and hook into the pipeline processing."),(0,r.kt)("p",null,"The value of ",(0,r.kt)("inlineCode",{parentName:"p"},"command")," is a single string. If you would like to pass a command\nline as you would on the shell, use single or double quotes for escaping, e.g.,\n",(0,r.kt)("inlineCode",{parentName:"p"},"shell 'jq -C'")," or ",(0,r.kt)("inlineCode",{parentName:"p"},'shell "jq -C"'),". The command is interpreted by ",(0,r.kt)("inlineCode",{parentName:"p"},"/bin/sh -c"),"."),(0,r.kt)("h2",d({},{id:"examples"}),"Examples"),(0,r.kt)("p",null,"Show a live log from the ",(0,r.kt)("inlineCode",{parentName:"p"},"tenzir-node")," service:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),'shell "journalctl -u tenzir-node -f | read json"\n')),(0,r.kt)("p",null,"Consider the use case of converting CSV to JSON:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"tenzir 'read csv | write json' | jq -C\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"write json")," operator produces NDJSON. Piping this output to ",(0,r.kt)("inlineCode",{parentName:"p"},"jq")," generates a\ncolored, tree-structured variation that is (arguably) easier to read. Using the\n",(0,r.kt)("inlineCode",{parentName:"p"},"shell"),' operator, you can integrate Unix tools that rely on\nstdin/stdout for input/output as "native" operators that process raw bytes. For\nexample, in this pipeline:'),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"write json | save stdout\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("a",d({parentName:"p"},{href:"/v4.14/operators/write"}),(0,r.kt)("inlineCode",{parentName:"a"},"write"))," operator produces raw bytes and ",(0,r.kt)("a",d({parentName:"p"},{href:"/v4.14/operators/save"}),(0,r.kt)("inlineCode",{parentName:"a"},"save")),"\naccepts raw bytes. The ",(0,r.kt)("inlineCode",{parentName:"p"},"shell")," operator therefore fits right in the middle:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),'write json | shell "jq -C" | save stdout\n')),(0,r.kt)("p",null,"Using ",(0,r.kt)("a",d({parentName:"p"},{href:"/v4.14/language/user-defined-operators"}),"user-defined operators"),", we can\nexpose this (potentially verbose) post-processing more succinctly in the\npipeline language:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-yaml",metastring:'{0} title="tenzir.yaml"',"{0}":!0,title:'"tenzir.yaml"'}),'tenzir:\n  operators:\n    jsonize:\n      write json | shell "jq -C" | save stdout\n')),(0,r.kt)("p",null,"Now you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"jsonize")," as a custom operator in a pipeline:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"tenzir 'read csv | where field > 42 | jsonize' < file.csv\n")),(0,r.kt)("p",null,"This mechanism allows for wrapping also more complex invocation of tools.\n",(0,r.kt)("a",d({parentName:"p"},{href:"https://zeek.org"}),"Zeek"),", for example, converts packets into structured network\nlogs. Tenzir already has support for consuming Zeek output with the formats\n",(0,r.kt)("a",d({parentName:"p"},{href:"/v4.14/formats/zeek-json"}),(0,r.kt)("inlineCode",{parentName:"a"},"zeek-json"))," and\n",(0,r.kt)("a",d({parentName:"p"},{href:"/v4.14/formats/zeek-tsv"}),(0,r.kt)("inlineCode",{parentName:"a"},"zeek-tsv")),". But that requires attaching yourself\ndownstream of a Zeek instance. Sometimes you want instant Zeek analytics given a\nPCAP trace."),(0,r.kt)("p",null,"With the ",(0,r.kt)("inlineCode",{parentName:"p"},"shell")," operator, you can script a Zeek invocation and readily\npost-process the output with a rich set of operators, to filter, reshape,\nenrich, or route the logs as structured data. Let's define a ",(0,r.kt)("inlineCode",{parentName:"p"},"zeek")," operator for\nthat:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-yaml",metastring:'{0} title="tenzir.yaml"',"{0}":!0,title:'"tenzir.yaml"'}),'tenzir:\n  operators:\n    zeek:\n      shell "zeek -r - LogAscii::output_to_stdout=T\n             JSONStreaming::disable_default_logs=T\n             JSONStreaming::enable_log_rotation=F\n             json-streaming-logs"\n      | read zeek-json\n')),(0,r.kt)("p",null,"Processing a PCAP trace now is a matter of calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"zeek")," operator:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"gunzip -c example.pcap.gz |\n  tenzir 'zeek | select id.orig_h, id.orig_p, id.resp_h | head 3'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-json"}),'{"id": {"orig_h": null, "resp_h": null, "resp_p": null}}\n{"id": {"orig_h": "192.168.168.100", "resp_h": "83.135.95.78", "resp_p": 0}}\n{"id": {"orig_h": "192.168.168.100", "resp_h": "83.135.95.78", "resp_p": 22}}\n')),(0,r.kt)("p",null,"NB: because ",(0,r.kt)("inlineCode",{parentName:"p"},"zeek")," (= ",(0,r.kt)("inlineCode",{parentName:"p"},"shell"),") reads bytes, we can drop the implicit ",(0,r.kt)("inlineCode",{parentName:"p"},"load\nstdin")," source operator in this pipeline."))}N.isMDXComponent=!0}}]);