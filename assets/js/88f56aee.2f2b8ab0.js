"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[99057],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(r),h=a,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||i;return r?n.createElement(m,o(o({ref:t},d),{},{components:r})):n.createElement(m,o({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},71246:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>f,default:()=>g,frontMatter:()=>m,metadata:()=>y,toc:()=>b});var n=r(3905),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&d(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&d(e,r,t[r]);return e},u=(e,t)=>i(e,o(t)),h=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const m={sidebar_custom_props:{operator:{transformation:!0}}},f="chart",y={unversionedId:"operators/chart",id:"version-Tenzir v4.9/operators/chart",title:"chart",description:"Add metadata to a schema, necessary for rendering as a chart.",source:"@site/versioned_docs/version-Tenzir v4.9/operators/chart.md",sourceDirName:"operators",slug:"/operators/chart",permalink:"/Tenzir v4.9/operators/chart",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.9/operators/chart.md",tags:[],version:"Tenzir v4.9",frontMatter:{sidebar_custom_props:{operator:{transformation:!0}}},sidebar:"docsSidebar",previous:{title:"batch",permalink:"/Tenzir v4.9/operators/batch"},next:{title:"compress",permalink:"/Tenzir v4.9/operators/compress"}},v={},b=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>--title &lt;title&gt;</code>",id:"--title-title",level:3},{value:"<code>-x|--x-axis &lt;field&gt;</code> (<code>line</code>, <code>area</code>, and <code>bar</code> charts only)",id:"-x--x-axis-field-line-area-and-bar-charts-only",level:3},{value:"<code>-y|--y-axis &lt;field&gt;</code> (<code>line</code>, <code>area</code>, and <code>bar</code> charts only)",id:"-y--y-axis-field-line-area-and-bar-charts-only",level:3},{value:"<code>--name &lt;field&gt;</code> (<code>pie</code> chart only)",id:"--name-field-pie-chart-only",level:3},{value:"<code>--value &lt;field&gt;</code> (<code>pie</code> chart only)",id:"--value-field-pie-chart-only",level:3},{value:"Examples",id:"examples",level:2}],k={toc:b},x="wrapper";function g(e){var t=e,{components:r}=t,a=h(t,["components"]);return(0,n.kt)(x,u(p(p({},k),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",p({},{id:"chart"}),"chart"),(0,n.kt)("p",null,"Add metadata to a schema, necessary for rendering as a chart."),(0,n.kt)("h2",p({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{}),"chart line [--title <title>] [-x|--x-axis <field>] [-y|--y-axis <field>]\nchart area [--title <title>] [-x|--x-axis <field>] [-y|--y-axis <field>]\nchart bar  [--title <title>] [-x|--x-axis <field>] [-y|--y-axis <field>]\nchart pie  [--title <title>] [--name <field>] [--value <field>]\n")),(0,n.kt)("h2",p({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"chart")," operator adds attributes to the schema of the input events,\nthat are used to guide rendering of the data as a chart.\nThe operator does no rendering itself."),(0,n.kt)("h3",p({},{id:"--title-title"}),(0,n.kt)("inlineCode",{parentName:"h3"},"--title <title>")),(0,n.kt)("p",null,"Set the chart title. Defaults to the schema name."),(0,n.kt)("h3",p({},{id:"-x--x-axis-field-line-area-and-bar-charts-only"}),(0,n.kt)("inlineCode",{parentName:"h3"},"-x|--x-axis <field>")," (",(0,n.kt)("inlineCode",{parentName:"h3"},"line"),", ",(0,n.kt)("inlineCode",{parentName:"h3"},"area"),", and ",(0,n.kt)("inlineCode",{parentName:"h3"},"bar")," charts only)"),(0,n.kt)("p",null,"Set the field used for the X-axis. Defaults to the first field in the schema."),(0,n.kt)("p",null,"Values in this field must be strictly increasing\n(sorted in ascending order, without duplicates)\nwhen creating a ",(0,n.kt)("inlineCode",{parentName:"p"},"line")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"area")," chart,\nor unique when creating a ",(0,n.kt)("inlineCode",{parentName:"p"},"bar")," chart."),(0,n.kt)("h3",p({},{id:"-y--y-axis-field-line-area-and-bar-charts-only"}),(0,n.kt)("inlineCode",{parentName:"h3"},"-y|--y-axis <field>")," (",(0,n.kt)("inlineCode",{parentName:"h3"},"line"),", ",(0,n.kt)("inlineCode",{parentName:"h3"},"area"),", and ",(0,n.kt)("inlineCode",{parentName:"h3"},"bar")," charts only)"),(0,n.kt)("p",null,"Set the field used for the Y-axis. Defaults to the second field in the schema."),(0,n.kt)("h3",p({},{id:"--name-field-pie-chart-only"}),(0,n.kt)("inlineCode",{parentName:"h3"},"--name <field>")," (",(0,n.kt)("inlineCode",{parentName:"h3"},"pie")," chart only)"),(0,n.kt)("p",null,"Set the field used for the names of the segments.\nDefaults to the first field in the schema."),(0,n.kt)("p",null,"Values in this field must be unique."),(0,n.kt)("h3",p({},{id:"--value-field-pie-chart-only"}),(0,n.kt)("inlineCode",{parentName:"h3"},"--value <field>")," (",(0,n.kt)("inlineCode",{parentName:"h3"},"pie")," chart only)"),(0,n.kt)("p",null,"Set the field used for the value of a segment.\nDefaults to the second field in the schema."),(0,n.kt)("h2",p({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Render most common ",(0,n.kt)("inlineCode",{parentName:"p"},"src_ip")," values in ",(0,n.kt)("inlineCode",{parentName:"p"},"suricata.flow")," events as a bar chart:"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{}),'export\n| where #schema == "suricata.flow"\n| top src_ip\n/* -x and -y are defaulted to `src_ip` and `count` */\n| chart bar --title "Most common src_ip values"\n')),(0,n.kt)("p",null,"Render historical import throughput statistics as a line chart:"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{}),'metrics\n| where #schema == "tenzir.metrics.operator"\n| where source == true\n| summarize bytes=sum(output.approx_bytes) by timestamp resolution 1s\n| sort timestamp desc\n| chart line -x timestamp -y bytes --title "Import volume over time"\n')))}g.isMDXComponent=!0}}]);