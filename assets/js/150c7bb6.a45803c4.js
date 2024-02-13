"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[24783],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(r),u=n,f=p["".concat(c,".").concat(u)]||p[u]||h[u]||i;return r?a.createElement(f,o(o({ref:t},d),{},{components:r})):a.createElement(f,o({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},40181:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>g,frontMatter:()=>f,metadata:()=>y,toc:()=>v});var a=r(3905),n=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&d(e,r,t[r]);if(l)for(var r of l(t))s.call(t,r)&&d(e,r,t[r]);return e},h=(e,t)=>i(e,o(t)),u=(e,t)=>{var r={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&s.call(e,a)&&(r[a]=e[a]);return r};const f={sidebar_custom_props:{operator:{transformation:!0}}},m="chart",y={unversionedId:"operators/chart",id:"operators/chart",title:"chart",description:"Add metadata to a schema, necessary for rendering as a chart.",source:"@site/docs/operators/chart.md",sourceDirName:"operators",slug:"/operators/chart",permalink:"/next/operators/chart",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/operators/chart.md",tags:[],version:"current",frontMatter:{sidebar_custom_props:{operator:{transformation:!0}}},sidebar:"docsSidebar",previous:{title:"batch",permalink:"/next/operators/batch"},next:{title:"compress",permalink:"/next/operators/compress"}},b={},v=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>--title &lt;title&gt;</code>",id:"--title-title",level:3},{value:"<code>-x|--x-axis &lt;field&gt;</code> (<code>line</code>, <code>area</code>, and <code>bar</code> charts only)",id:"-x--x-axis-field-line-area-and-bar-charts-only",level:3},{value:"<code>-y|--y-axis &lt;field&gt;</code> (<code>line</code>, <code>area</code>, and <code>bar</code> charts only)",id:"-y--y-axis-field-line-area-and-bar-charts-only",level:3},{value:"<code>--name &lt;field&gt;</code> (<code>pie</code> chart only)",id:"--name-field-pie-chart-only",level:3},{value:"<code>--value &lt;field&gt;</code> (<code>pie</code> chart only)",id:"--value-field-pie-chart-only",level:3},{value:"Examples",id:"examples",level:2}],x={toc:v},k="wrapper";function g(e){var t=e,{components:r}=t,n=u(t,["components"]);return(0,a.kt)(k,h(p(p({},x),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",p({},{id:"chart"}),"chart"),(0,a.kt)("p",null,"Add metadata to a schema, necessary for rendering as a chart."),(0,a.kt)("h2",p({},{id:"synopsis"}),"Synopsis"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{}),"chart line   [--title <title>] [-x|--x-axis <field>] [-y|--y-axis <field>]\nchart area   [--title <title>] [-x|--x-axis <field>] [-y|--y-axis <field>]\nchart bar    [--title <title>] [-x|--x-axis <field>] [-y|--y-axis <field>]\nchart pie    [--title <title>] [--name <field>] [--value <field>]\n")),(0,a.kt)("h2",p({},{id:"description"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"chart")," operator adds attributes to the schema of the input events,\nthat are used to guide rendering of the data as a chart.\nThe operator does no rendering itself."),(0,a.kt)("h3",p({},{id:"--title-title"}),(0,a.kt)("inlineCode",{parentName:"h3"},"--title <title>")),(0,a.kt)("p",null,"Set the chart title. Defaults to the schema name."),(0,a.kt)("h3",p({},{id:"-x--x-axis-field-line-area-and-bar-charts-only"}),(0,a.kt)("inlineCode",{parentName:"h3"},"-x|--x-axis <field>")," (",(0,a.kt)("inlineCode",{parentName:"h3"},"line"),", ",(0,a.kt)("inlineCode",{parentName:"h3"},"area"),", and ",(0,a.kt)("inlineCode",{parentName:"h3"},"bar")," charts only)"),(0,a.kt)("p",null,"Set the field used for the X-axis. Defaults to the first field in the schema."),(0,a.kt)("h3",p({},{id:"-y--y-axis-field-line-area-and-bar-charts-only"}),(0,a.kt)("inlineCode",{parentName:"h3"},"-y|--y-axis <field>")," (",(0,a.kt)("inlineCode",{parentName:"h3"},"line"),", ",(0,a.kt)("inlineCode",{parentName:"h3"},"area"),", and ",(0,a.kt)("inlineCode",{parentName:"h3"},"bar")," charts only)"),(0,a.kt)("p",null,"Set the field used for the Y-axis. Defaults to the second field in the schema."),(0,a.kt)("h3",p({},{id:"--name-field-pie-chart-only"}),(0,a.kt)("inlineCode",{parentName:"h3"},"--name <field>")," (",(0,a.kt)("inlineCode",{parentName:"h3"},"pie")," chart only)"),(0,a.kt)("p",null,"Set the field used for the names of the segments.\nDefaults to the first field in the schema."),(0,a.kt)("h3",p({},{id:"--value-field-pie-chart-only"}),(0,a.kt)("inlineCode",{parentName:"h3"},"--value <field>")," (",(0,a.kt)("inlineCode",{parentName:"h3"},"pie")," chart only)"),(0,a.kt)("p",null,"Set the field used for the value of a segment.\nDefaults to the second field in the schema."),(0,a.kt)("h2",p({},{id:"examples"}),"Examples"),(0,a.kt)("p",null,"Render most common ",(0,a.kt)("inlineCode",{parentName:"p"},"src_ip")," values in ",(0,a.kt)("inlineCode",{parentName:"p"},"suricata.flow")," events as a bar chart:"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{}),'export\n| where #schema == "suricata.flow"\n| top src_ip\n/* -x and -y are defaulted to `src_ip` and `count` */\n| chart bar --title "Most common src_ip values"\n')),(0,a.kt)("p",null,"Render historical import throughput statistics as a line chart:"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{}),'metrics\n| where #schema == "tenzir.metrics.operator"\n| where source == true\n| summarize bytes=sum(output.approx_bytes) by timestamp resolution 1s\n| sort timestamp desc\n| chart line -x timestamp -y bytes --title "Import volume over time"\n')))}g.isMDXComponent=!0}}]);