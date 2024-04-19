"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[18941],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||c[m]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},99659:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>k,default:()=>w,frontMatter:()=>f,metadata:()=>h,toc:()=>b});var r=n(3905),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&d(e,n,t[n]);if(s)for(var n of s(t))p.call(t,n)&&d(e,n,t[n]);return e},c=(e,t)=>i(e,o(t)),m=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const f={sidebar_custom_props:{format:{parser:!0}}},k="kv",h={unversionedId:"formats/kv",id:"version-Tenzir v4.10/formats/kv",title:"kv",description:"Reads key-value pairs by splitting strings based on regular expressions.",source:"@site/versioned_docs/version-Tenzir v4.10/formats/kv.md",sourceDirName:"formats",slug:"/formats/kv",permalink:"/Tenzir v4.10/formats/kv",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.10/formats/kv.md",tags:[],version:"Tenzir v4.10",frontMatter:{sidebar_custom_props:{format:{parser:!0}}},sidebar:"docsSidebar",previous:{title:"json",permalink:"/Tenzir v4.10/formats/json"},next:{title:"lines",permalink:"/Tenzir v4.10/formats/lines"}},v={},b=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;field_split&gt;</code>",id:"field_split",level:3},{value:"<code>&lt;value_split&gt;</code>",id:"value_split",level:3},{value:"Examples",id:"examples",level:2}],y={toc:b},g="wrapper";function w(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(g,c(u(u({},y),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",u({},{id:"kv"}),"kv"),(0,r.kt)("p",null,"Reads key-value pairs by splitting strings based on regular expressions."),(0,r.kt)("h2",u({},{id:"synopsis"}),"Synopsis"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"kv <field_split> <value_split>\n")),(0,r.kt)("h2",u({},{id:"description"}),"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"kv")," parser is usually used with the ",(0,r.kt)("a",u({parentName:"p"},{href:"/Tenzir%20v4.10/operators/parse"}),(0,r.kt)("inlineCode",{parentName:"a"},"parse")),"\noperator to extract key-value pairs from a given string, in particular if the\nkeys are not known before."),(0,r.kt)("p",null,"Incoming strings are first split into fields according to ",(0,r.kt)("inlineCode",{parentName:"p"},"<field_split>"),". This\ncan be a regular expression. For example, the input ",(0,r.kt)("inlineCode",{parentName:"p"},"foo: bar, baz: 42")," can be\nsplit into ",(0,r.kt)("inlineCode",{parentName:"p"},"foo: bar")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"baz: 42")," with the ",(0,r.kt)("inlineCode",{parentName:"p"},'",\\s*"')," (a comma, followed by any\namount of whitespace) as the field splitter. Note that the matched separators\nare removed when splitting a string."),(0,r.kt)("p",null,"Afterwards, the extracted fields are split into their key and value by\n",(0,r.kt)("inlineCode",{parentName:"p"},"<value_split>"),", which can again be a regular expression. In our example,\n",(0,r.kt)("inlineCode",{parentName:"p"},'":\\s*"')," could be used to split ",(0,r.kt)("inlineCode",{parentName:"p"},"foo: bar")," into the key ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," and its value\n",(0,r.kt)("inlineCode",{parentName:"p"},"bar"),", and similarly ",(0,r.kt)("inlineCode",{parentName:"p"},"baz: 42")," into ",(0,r.kt)("inlineCode",{parentName:"p"},"baz")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"42"),". The result would thus be\n",(0,r.kt)("inlineCode",{parentName:"p"},'{"foo": "bar", "baz": 42}'),". If the regex matches multiple substrings, only the\nfirst match is used."),(0,r.kt)("p",null,"The supported regular expression syntax is\n",(0,r.kt)("a",u({parentName:"p"},{href:"https://github.com/google/re2/wiki/Syntax"}),"RE2"),". In particular, this means that\nlookahead ",(0,r.kt)("inlineCode",{parentName:"p"},"(?=...)")," and lookbehind ",(0,r.kt)("inlineCode",{parentName:"p"},"(?<=...)")," are not supported by ",(0,r.kt)("inlineCode",{parentName:"p"},"kv")," at\nthe moment. However, if the regular expression has a capture group, it is assumed\nthat only the content of the capture group shall be used as the separator. This\nmeans that unsupported regular expressions such as ",(0,r.kt)("inlineCode",{parentName:"p"},"(?=foo)bar(?<=baz)")," can be\neffectively expressed as ",(0,r.kt)("inlineCode",{parentName:"p"},"foo(bar)baz")," instead."),(0,r.kt)("h3",u({},{id:"field_split"}),(0,r.kt)("inlineCode",{parentName:"h3"},"<field_split>")),(0,r.kt)("p",null,"The regular expression used to separate individual fields."),(0,r.kt)("h3",u({},{id:"value_split"}),(0,r.kt)("inlineCode",{parentName:"h3"},"<value_split>")),(0,r.kt)("p",null,"The regular expression used to separate a key from its value."),(0,r.kt)("h2",u({},{id:"examples"}),"Examples"),(0,r.kt)("p",null,"Extract comma-separated key-value pairs from ",(0,r.kt)("inlineCode",{parentName:"p"},"foo:1, bar:2,baz:3 , qux:4"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),'kv "\\s*,\\s*" ":"\n')),(0,r.kt)("p",null,"Extract key-value pairs from strings such as ",(0,r.kt)("inlineCode",{parentName:"p"},"FOO: C:\\foo BAR_BAZ: hello world"),".\nThis requires lookahead because the fields are separated by whitespace, but not\nevery whitespace acts as a field separator. Instead, we only want to split if\nthe whitespace is followed by ",(0,r.kt)("inlineCode",{parentName:"p"},"[A-Z][A-Z_]+:"),", i.e., at least two uppercase\ncharacters followed by a colon. We can express this as ",(0,r.kt)("inlineCode",{parentName:"p"},'"(\\s+)[A-Z][A-Z_]+:"'),",\nwhich yields ",(0,r.kt)("inlineCode",{parentName:"p"},"FOO: C:\\foo")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"BAR_BAZ: hello world"),". We then split the key\nfrom its value with ",(0,r.kt)("inlineCode",{parentName:"p"},'":\\s*"')," (only the first match is used to split them). The\nfinal result is thus ",(0,r.kt)("inlineCode",{parentName:"p"},'{"FOO": "C:\\foo", "BAR_BAZ": "hello world"}'),"."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),'kv "(\\s+)[A-Z][A-Z_]+:" ":\\s*"\n')))}w.isMDXComponent=!0}}]);