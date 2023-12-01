"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[76965],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9601:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>y,default:()=>T,frontMatter:()=>h,metadata:()=>v,toc:()=>f});var r=n(3905),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&c(e,n,t[n]);return e},d=(e,t)=>i(e,o(t)),m=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const h={},y="Python Library",v={unversionedId:"python",id:"version-Tenzir v4.5/python",title:"Python Library",description:"Tenzir ships with a Python library to enable interaction with Tenzir with",source:"@site/versioned_docs/version-Tenzir v4.5/python.md",sourceDirName:".",slug:"/python",permalink:"/Tenzir v4.5/python",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.5/python.md",tags:[],version:"Tenzir v4.5",frontMatter:{},sidebar:"docsSidebar",previous:{title:"REST API",permalink:"/Tenzir v4.5/rest-api"},next:{title:"Configuration",permalink:"/Tenzir v4.5/configuration"}},k={},f=[{value:"Install the PyPI package",id:"install-the-pypi-package",level:2},{value:"Use the Tenzir Python library",id:"use-the-tenzir-python-library",level:2},{value:"Quickstart",id:"quickstart",level:3},{value:"Overview",id:"overview",level:3},{value:"class Tenzir",id:"class-tenzir",level:3},{value:"export",id:"export",level:4},{value:"count",id:"count",level:4},{value:"status",id:"status",level:4},{value:"class TableSlice",id:"class-tableslice",level:3},{value:"class TenzirRow",id:"class-tenzirrow",level:3}],b={toc:f},g="wrapper";function T(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(g,d(u(u({},b),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",u({},{id:"python-library"}),"Python Library"),(0,r.kt)("p",null,"Tenzir ships with a Python library to enable interaction with Tenzir with\nprimitives that integrate well with the Python ecosystem. We distribute the\nlibrary as PyPI package called ",(0,r.kt)("a",u({parentName:"p"},{href:"https://pypi.org/project/tenzir/"}),"tenzir"),"."),(0,r.kt)("admonition",u({},{title:"Experimental",type:"warning"}),(0,r.kt)("p",{parentName:"admonition"},"The Python library is considered experimental and subject to change without\nnotice.")),(0,r.kt)("h2",u({},{id:"install-the-pypi-package"}),"Install the PyPI package"),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"pip")," to install Tenzir:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"pip install tenzir\n")),(0,r.kt)("h2",u({},{id:"use-the-tenzir-python-library"}),"Use the Tenzir Python library"),(0,r.kt)("h3",u({},{id:"quickstart"}),"Quickstart"),(0,r.kt)("p",null,"The following snippet illustrates a small script to query Tenzir."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-py"}),'#!/usr/bin/env python3\n\nimport asyncio\nfrom tenzir import Tenzir, to_json_rows\n\nasync def example():\n    tenzir = Tenzir()\n\n    generator = tenzir.export("192.168.1.103", limit=10)\n    async for row in to_json_rows(generator):\n        print(row)\n\nasyncio.run(example())\n')),(0,r.kt)("h3",u({},{id:"overview"}),"Overview"),(0,r.kt)("p",null,"The Python library is meant to expose all the Tenzir features that are relevant\nin a Python environment. For now though, it is still in active development and\nonly the following interfaces are exposed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"export")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"count")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"status"))),(0,r.kt)("p",null,"Many options that exist on the CLI are not mapped to the library. The idea here\nis to avoid overwhelming the API with options that are actually not needed when\ninteracting with Tenzir from Python."),(0,r.kt)("h3",u({},{id:"class-tenzir"}),"class Tenzir"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-py"}),"    class Tenzir(\n        endpoint: Optional[str]\n    )\n")),(0,r.kt)("p",null,"Create a connection to a Tenzir node that is listening at the specified\nendpoint. If no enpdoint is given the ",(0,r.kt)("inlineCode",{parentName:"p"},"TENZIR_ENDPOINT")," environment variable is\nused, if that is also not present the ",(0,r.kt)("inlineCode",{parentName:"p"},"tenzir.endpoint")," value from a local\n",(0,r.kt)("inlineCode",{parentName:"p"},"tenzir.yaml")," configuration file is used. In case that value is also not present\nthe default connection endpoint of ",(0,r.kt)("inlineCode",{parentName:"p"},"127.0.0.1:5158")," is used."),(0,r.kt)("h4",u({},{id:"export"}),"export"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-py"}),"    coroutine export(\n        expression: str,\n        mode: ExportMode = ExportMode.HISTORICAL,\n        limit: int = 100\n    ) -> AsyncIterable[TableSlice]\n")),(0,r.kt)("p",null,"Evaluate an expression in a Tenzir node and receive the resulting events in an\nasynchronous stream of ",(0,r.kt)("inlineCode",{parentName:"p"},"TableSlices"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"mode")," argument can be set to one of ",(0,r.kt)("inlineCode",{parentName:"p"},"HISTORICAL"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"CONTINUOUS"),", or\n",(0,r.kt)("inlineCode",{parentName:"p"},"UNIFIED"),". A historical export evaluates the expression against data\nthat is stored in the Tenzir database, the resulting output stream ends\nwhen all eligible data has been evaluated. A ",(0,r.kt)("inlineCode",{parentName:"p"},"CONTINUOUS")," one looks at data\nas it flows into the node, it will continue to run until the event limit is\nreached, it gets discarded, or the node terminates."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"limit")," argument sets an upper bound on the number of events that should\nbe produced. The special value ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," indicates that the number of results is\nunbounded."),(0,r.kt)("h4",u({},{id:"count"}),"count"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-py"}),"    coroutine count(\n        expression: str\n    ) -> int\n")),(0,r.kt)("p",null,"Evaluate the sum of all events in the database that match the given expression."),(0,r.kt)("h4",u({},{id:"status"}),"status"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-py"}),"    coroutine status() -> dict\n")),(0,r.kt)("p",null,"Retrieve the current status from Tenzir."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-py"}),">>> st = await tenzir.status()\n>>> pprint.pprint(st[\"system\"])\n{'current-memory-usage': 729628672,\n 'database-path': '/var/lib/tenzir',\n 'in-memory-table-slices': 0,\n 'peak-memory-usage': 729628672,\n 'swap-space-usage': 0}\n")),(0,r.kt)("h3",u({},{id:"class-tableslice"}),"class TableSlice"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-py"}),"    coroutine collect_pyarrow(\n        stream: AsyncIterable[TableSlice],\n    ) -> dict[str, list[pyarrow.Table]]\n")),(0,r.kt)("p",null,"Collect a stream of ",(0,r.kt)("inlineCode",{parentName:"p"},"TableSlice")," and return a dictionary of ",(0,r.kt)("a",u({parentName:"p"},{href:"https://arrow.apache.org/docs/python/index.html"}),"Arrow\ntables")," indexed by schema name."),(0,r.kt)("h3",u({},{id:"class-tenzirrow"}),"class TenzirRow"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"TenzirRow"),' is a Python native representation of an "event" from Tenzir. It\nconsists of a ',(0,r.kt)("inlineCode",{parentName:"p"},"name")," and a ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," dictionary."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-py"}),"    coroutine to_json_rows(\n        stream: AsyncIterable[TableSlice],\n    ) -> AsyncIterable[TenzirRow]\n")),(0,r.kt)("p",null,"Convert a stream of ",(0,r.kt)("inlineCode",{parentName:"p"},"TableSlice"),"s to a stream of ",(0,r.kt)("inlineCode",{parentName:"p"},"TenzirRow"),"s."))}T.isMDXComponent=!0}}]);