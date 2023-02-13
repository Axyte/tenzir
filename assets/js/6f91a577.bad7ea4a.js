"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8152],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>w});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},M=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),M=r,w=d["".concat(l,".").concat(M)]||d[M]||m[M]||i;return n?a.createElement(w,o(o({ref:t},c),{},{components:n})):a.createElement(w,o({ref:t},c))}));function w(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=M;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}M.displayName="MDXCreateElement"},5759:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:1},o="Pipelines",p={unversionedId:"understand/query-language/pipelines",id:"understand/query-language/pipelines",title:"Pipelines",description:"A pipeline is chain of operators that represents a dataflow. An",source:"@site/docs/understand/query-language/pipelines.md",sourceDirName:"understand/query-language",slug:"/understand/query-language/pipelines",permalink:"/docs/understand/query-language/pipelines",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/understand/query-language/pipelines.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Expressions",permalink:"/docs/understand/query-language/expressions"},next:{title:"Operators",permalink:"/docs/understand/query-language/operators/"}},l={},s=[{value:"Define a pipeline",id:"define-a-pipeline",level:2},{value:"Launch pipelines dynamically (experimental)",id:"launch-pipelines-dynamically-experimental",level:2}],c={toc:s},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pipelines"},"Pipelines"),(0,r.kt)("p",null,"A pipeline is chain of ",(0,r.kt)("a",{parentName:"p",href:"operators"},"operators")," that represents a dataflow. An\noperator consumes data, performs a transformation, and produces new data,\npossibly with a different schema. Think of it as UNIX pipes where output from\none command is input to the next."),(0,r.kt)("p",null,(0,r.kt)("figure",{parentName:"p",className:"markdown-inline-svg"},"\n  ",(0,r.kt)("svg",{parentName:"figure",viewBox:"0 0 629 130.067",role:"img","aria-hidden":"true"},"eyJ2ZXJzaW9uIjoiMSIsImVuY29kaW5nIjoiYnN0cmluZyIsImNvbXByZXNzZWQiOnRydWUsImVuY29kZWQiOiJ4nO1abVPaSlx1MDAxNP7ur3C4X1u67y/9hlhbqoKKKHqn41x1MDAwNFhCJCQxiVx1MDAwNdvxv98lKkmQYFx1MDAxMLR4KzMq2Zfs2c3znOecY35vbG5cdTAwMTbCXHUwMDFiT1x1MDAxNT5vXHUwMDE21Kht2FbHN4aFXHUwMDBm4/afylx1MDAwZizX0V0oulx1MDAwZdxrv1x1MDAxZI3shaFcdTAwMTd8/vTJ8LxiPKvYdlx1MDAwN3czla1cdTAwMDbKXHRcdTAwMDM99l99vbn5O/qdWMtX7dBwTFtFXHUwMDEzoq54OVx1MDAwMqZcdTAwMWKrrlx1MDAxM61cZjmUlFPA+WSEXHUwMDE1bOvlQtXR3V3DXHUwMDBlVNwzbipcdTAwMWNa5ZqzPzpuXHUwMDEwdnPplFx1MDAwZauhX0qs2rVsu1x1MDAxZd7YkVWBq3dcdTAwMTL3XHUwMDA1oe/21anVXHR747Wn2rNm+e612XNUXHUwMDEwpOa4ntG2wptxXHUwMDFiiLd3d1x1MDAwNJ8345aRvsIsvlx1MDAxZc9Aieu7tcuu7frjtf9cdTAwMDHRJ169ZbT7pjbB6STHXHUwMDE4pFx1MDAwYuMxw4dcdTAwMWSh+L49ZZm9MH34gYpOXHUwMDE1cs4wR1x1MDAxOMW7XHUwMDE5r+BVOtFcdTAwMDP+kdy507nfuXNt27FR444v06BIXHUwMDAyI1x1MDAwNY5QjcKJtYlHaatSpWeo04+j/mjbZzVcdTAwMGZccvaMwmTc7f232KBrr2PcIVx1MDAwMzJKXHUwMDE541x1MDAxOGOO41xy2pbTn7bVdtv9XHUwMDE4TFHr7YfZIE7ZmcAvo1n4XHUwMDE1XHUwMDEyYH3qTOaG7+w9z4Zvz2j3rn21XHUwMDBlXHUwMDAwpmlcdTAwMDDz5Vx1MDAwMCxQW0I1XHUwMDAzwHBcdTAwMDaA0SNcdTAwMDBjIVx1MDAxMOJI8pXhd5VcdTAwMTCLn6XrhHXrV+TnWKp1x1x1MDAxOFj2TepxRNjTZ7NthEagwuT5XHUwMDA1Si9cdTAwMWHdhaSGl2zLXHUwMDFjw7PQ1ttQflxuuaGlvfhkwMDqdJKuua1tMPQ9/UpcdTAwMWWX6vqWaTmGfTxl4lxcLs1cdTAwMTVcdTAwMDRKMlx0XHUwMDA19UdIhHNcdTAwMTMqvOqbXFyIkumew5pzsnfm21x1MDAxNbLeekDRavWg1Wl3O61cdTAwMTl0XHUwMDAyufSAXCJcdTAwMDRcdTAwMDBGXHSOv4xcdTAwMWPcPa9RtSarRlx1MDAxYo/qg12zReqlyk5dpdUh5Y/XT1x1MDAwZSjMQi+VkjHIZf5oZv5prKlcdTAwMWNQ9DpyIHOpXHUwMDAxhFx1MDAxMkuGXHUwMDA0Xl04sz5yUPOUb4Su/6p68IRLndaDiY1z2Vx1MDAxNNk8g00ok006Slx1MDAwNVxcXHUwMDEylD+4ujxcdTAwMWV8s9lVo7Tbk6JRXHUwMDE53lx1MDAxONXGl+doXHUwMDAxej0uXHUwMDAxUJRcdTAwMWNQyiVcIoSAKWYxWIRcdTAwMWMwyoGAXHUwMDE0SbpcdTAwMTTPukZcdTAwMGJcdTAwMDD6mGf5slx1MDAwNiwkXHUwMDAzXHUwMDEy4kVkXCL2/1x1MDAwZjhA9y23z2dcdTAwMWZ8XHUwMDBl+4LQ8MMty+lYjjk9RTmdjFx1MDAxZdtcYsKyO1x1MDAxOFihNuPAtZxwekR035Lvu8OeMjoz7pzZ541vl5bL+Ntm/FCii8n3XHUwMDFmXHUwMDFmnlx1MDAxZU1cdTAwMTLDN5J/XHUwMDE35iaabnzgpmScXG6mXHUwMDE5mpubXHUwMDE3Z0O/XFyyh+beV2ZcXG75p7WfQW29uclcYixcIlx0JFx1MDAxMEhq/NF45fuorVxiJaFCU5dI3f3nuCm5XHUwMDA0QEvgXCJcdNE7Nd9cdTAwMDQ15+ZRXHT6TVx1MDAxN9Y04DBcdTAwMDM4fyRqUthsdq/aLNiTg7686rVcYjxf7zyKrbiutmRcdTAwMWUlXGKUgEBcdTAwMTI/lJfMo4Jcbi1cdTAwMWZcXOyfn/CzXHUwMDBlOlx1MDAwNM3wqnVaXmVcdTAwMWW1XGKX50I4s6yWXHUwMDE5+UHtbzGAeIEywPzjWNNEir1SXS1fXCJFOcFcdTAwMThcdTAwMDHwennUs+Ti7eRRT7jUXHUwMDE151GZRWosXHUwMDEwQ1x1MDAxY4L8eVTDXHUwMDAzXHUwMDFkLIYnO9+G11eUNZr1Yfh1vWM1LmBcdTAwMTEjXCIo1D+YQPEoVuP6XHUwMDE3XHUwMDExXHUwMDEy607GlqLZUrFcdTAwMWGHnOqkT76nUX9XrMaz1U67XVx1MDAwMSjH+Vx0eiCUdWxQ3qx+M9BXKvd3XHUwMDFks7rewZpcdTAwMDBrXHUwMDE1rEFcdTAwMDCJdouIv0601mqcXHUwMDFkXHUwMDBl/Fx1MDAwM9D0qlx1MDAxNXSwTUqN1k7tbUVrLFx1MDAwYr9cYmr8QpmsXG4/hd/5x7Gm0ZqYLs794bI3gpLrnF+uXGbAf3m49oRTXXG4xrPoXHUwMDA0XHUwMDA1IUAglPg301N02m1tNWtHJ8EuUHVJXHUwMDFjXHUwMDFiNa+rfL3jNYlgXHUwMDExUkQw1a6DJepcdTAwMTRcdTAwMGbhmlx1MDAxMJJcdTAwMTDJpFx1MDAwNFx1MDAxMjG+XHUwMDE00ZarezMqXGLijCzCs/eA7U1cdTAwMDRsWVonM8mJNSRcdOE8f2FCXHUwMDAx0UXV8vbl+b572pV2l1x1MDAxZvV21pybeCp7oi9cdTAwMTOqJVx1MDAxMFx1MDAxZFx1MDAxMzCRmt1cdTAwMTFcdTAwMTBcdTAwMDHOOFx1MDAxMGCF7ye8tNDh3EJXLFx1MDAxNmdqXHUwMDFjRqmh+TUudL0sgUttYlrNxobM5Yox5vPM1yFQZmRcYnWIXHUwMDA0XHUwMDE4klwif1x1MDAxOfqo20fmL/s7sFx1MDAwN8fie8h2zd5+Vlx1MDAxZG9NMptHr/OQbLooxvmz6Vwi8lx1MDAwNYZCQESRwItkNu+C9UqCJVLDP6InJ2Cw8FxmkWXSUqIosl97wlxmXG6m08DcLK+OTtBBxaxcdTAwMWHlX1dcdTAwMTeNoyM6svyL9Vx1MDAxNkUmUFx1MDAxMXLOXHUwMDA1XCJcYmBB01x1MDAxMSuU05ashvM09q3zKI9cdTAwMDRh4yj1/1i6P7A8lc6iVpFcdTAwMGI+Vycn1txxaOOehVx1MDAwNcPz6qE+p4kvLfy01HBrVjZcdTAwMTJ9xvMjXHUwMDA2jsGuXCJcdTAwMTd8u3H7XHUwMDFma7Q3pSJ9",(0,r.kt)("defs",{parentName:"svg"},(0,r.kt)("style",{parentName:"defs"},'@font-face{font-family:"Virgil";src:url(https://excalidraw.com/Virgil.woff2)}@font-face{font-family:"Cascadia";src:url(https://excalidraw.com/Cascadia.woff2)}')),(0,r.kt)("g",{parentName:"svg",strokeLineCap:"round"},(0,r.kt)("path",{parentName:"g",fill:"#00a4f1",strokeWidth:"0",d:"m8.18 79.33 122.92-.74-.74 37.76-120.32-.22"}),(0,r.kt)("path",{parentName:"g",fill:"none",stroke:"#000",d:"M10.33 77.36c29.93-1.76 54.7.42 117.75-.3m-118.14.05c33.53-.01 68.52-.15 119.68 1.14m1.15 1.42c-1.9 8.46.25 18.85.9 38.03m-1.54-40.06c-.46 12.28.69 22.7-.46 41.11m1.44-2.75c-32.14 1.86-59.83.05-122.44 2.95m121.89-1.84c-35.81-.63-72.92-1.21-120.45.68m-.96-.75c.43-13.15 2.54-24.75 1.61-37.35m-.55 38.24c.57-14.57-.92-28.85.18-40.91"})),(0,r.kt)("text",{parentName:"svg",x:"55",y:"14",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(15 88)"},"Dataset"),(0,r.kt)("g",{parentName:"svg",strokeLineCap:"round"},(0,r.kt)("path",{parentName:"g",fill:"#bdcfdb",strokeWidth:"0",d:"m169.6 76.5 98.45.19 3.44 41.34-100.17-.84"}),(0,r.kt)("path",{parentName:"g",fill:"none",stroke:"#000",d:"M168.67 78.95c32.43-.85 61.72.97 99.54.29m-98.1-1.45c26.03 1.44 52.61.77 99.41.05m1.24 1.85c.97 7.16 1.47 17.77-.91 39.61m.54-42.28c-1.64 14.11-.18 26.19-.21 40.16m-1.89.65c-28.47.56-57.44 1.68-97.73-.22m100.08-.32c-27.03 1.43-53.97 1.97-100.1.35m.14 1.43c-2.57-9.56 1.36-21.24-2.14-42.98m.49 42.66c.54-15.61-.1-31.77 1.26-40.66"})),(0,r.kt)("text",{parentName:"svg",x:"45",y:"14",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(175 88)"},"Operator"),(0,r.kt)("path",{parentName:"svg",fill:"none",stroke:"#000",strokeLineCap:"round",strokeWidth:"2",d:"M150.07 78c-.15 6.86-.04 35.07.11 42.07M151.8 80c.22 6.55.94 32.07.68 38.41M290.19 78.755c.15 6.56.68 33.03.88 39.56m.74-40.31c.07 6.71-1.61 35.05-1.81 41.92"}),(0,r.kt)("g",{parentName:"svg",strokeLineCap:"round"},(0,r.kt)("path",{parentName:"g",fill:"#bdcfdb",strokeWidth:"0",d:"m308.3 78.51 102.63.07-.85 40.64-101.08.07"}),(0,r.kt)("path",{parentName:"g",fill:"none",stroke:"#000",d:"M310.28 77.31c24.07-.51 51.5 2.9 98.54 1.63m-97.9-1.83c20.49.3 41.03.14 98.78 1.59m1.97-1.25c-.47 17.2-1.56 32.46-2.33 38.73m-.25-37.5c.88 12.15 1.21 24.31 1.43 38.57m1.46.6c-32.86.85-59.28-1.19-103.08 1.24m101.19-.12c-19.83-.01-40.33-.22-100.32-.51m-1.71 1.47c1.05-9.68 2.06-18.71 2.91-39.95m-1.6 38.89c.82-13.66 1.03-25.71.08-41.67"})),(0,r.kt)("text",{parentName:"svg",x:"45",y:"14",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(315 88)"},"Operator"),(0,r.kt)("path",{parentName:"svg",fill:"none",stroke:"#000",strokeLineCap:"round",strokeWidth:"2",d:"M431.415 78.936c0 6.76-1.15 33.96-1.18 40.6m-.23-41.54c.45 6.41 2.3 32.83 2.37 39.85"}),(0,r.kt)("g",{parentName:"svg",strokeLineCap:"round"},(0,r.kt)("path",{parentName:"g",fill:"#bdcfdb",strokeWidth:"0",d:"m449.97 78.02 98.95.46-.84 37.64-98.56 1.01"}),(0,r.kt)("path",{parentName:"g",fill:"none",stroke:"#000",d:"M451.04 76.5c29.28 3.82 58.86 4.06 98.81-.03m-100.4 2.07c35.59.65 72.68-.03 101.52.33m-1.43.05c-1.12 14.76 2.63 27.48 2.39 38.3m-1.45-38.23c-.4 12.51-.48 23.57.39 39.56m-1.98-2.15c-24.09 1.55-44.94 1.62-98.81 2.82m99.42-.78c-23.98-.07-48.79-.77-100.15.06m.15.56c-1.4-11.25 2.11-23.31.36-40.61m-.28 40.48c-.67-8.63.98-17.96.24-41.28"})),(0,r.kt)("text",{parentName:"svg",x:"45",y:"14",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(455 88)"},"Operator"),(0,r.kt)("path",{parentName:"svg",fill:"none",stroke:"#000",strokeLineCap:"round",strokeWidth:"2",d:"M571.352 78.99c.38 6.69.84 34.09.97 40.94M570.002 78c.42 6.29 1.68 33.63 1.98 40.35"}),(0,r.kt)("text",{parentName:"svg",x:"15.5",y:"32",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"36",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(588 68)"},"..."),(0,r.kt)("path",{parentName:"svg",fill:"none",stroke:"#e67700",strokeLineCap:"round",d:"M171.11 58.99c13.3-3.38 29.31-16.81 79.08-20.32 49.77-3.51 169.59-3.99 219.54-.75 49.95 3.24 66.86 16.98 80.18 20.19m-379.67.35c13.11-3.81 29.34-18.36 79.1-21.57 49.76-3.21 169.35-1.42 219.48 2.31 50.13 3.73 67.49 17.08 81.29 20.07"}),(0,r.kt)("text",{parentName:"svg",x:"28",y:"14",fill:"#e67700",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(332.178 10)"},"Pipeline")))),(0,r.kt)("p",null,"The basic idea is that a query consists of two connected pieces: a ",(0,r.kt)("em",{parentName:"p"},"dataset")," to\nrepresent a data source and a ",(0,r.kt)("em",{parentName:"p"},"pipeline")," as a squence of operators to process\nthe data."),(0,r.kt)("p",null,"To date, a VAST ",(0,r.kt)("a",{parentName:"p",href:"expressions"},"expression")," takes the role of a dataset and you\ncan only ",(0,r.kt)("a",{parentName:"p",href:"/docs/use/transform"},"define a pipeline")," statically in the YAML\nconfiguration. Being able to execute pipeline as part of the query is our most\nrequested feature, and we are actively working on bringing this ability into the\nquery language."),(0,r.kt)("h2",{id:"define-a-pipeline"},"Define a pipeline"),(0,r.kt)("p",null,"Add a uniquely named pipeline under the key ",(0,r.kt)("inlineCode",{parentName:"p"},"vast.pipelines")," in the\nconfiguration file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'vast:\n  pipelines:\n     example: |\n       hash --salt="B3IwnumKPEJDAA4u" src_ip\n       | summarize \n           pkts_toserver=sum(flow.pkts_toserver),\n           pkts_toclient=sum(flow.pkts_toclient),\n           bytes_toserver=sum(flow.bytes_toserver),\n           bytes_toclient=sum(flow.bytes_toclient),\n           start=min(flow.start),\n           end=max(flow.end)\n         by\n           src_ip,\n           dest_ip\n')),(0,r.kt)("p",null,"The above ",(0,r.kt)("inlineCode",{parentName:"p"},"example")," pipeline consists of two operators, ",(0,r.kt)("inlineCode",{parentName:"p"},"hash")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"summarize"),"\nthat execute in sequential order."),(0,r.kt)("p",null,"Please consult the ",(0,r.kt)("a",{parentName:"p",href:"/docs/use/transform"},"section on data transformation")," on\nwhere you can deploy pipelines today. Have a look at ",(0,r.kt)("a",{parentName:"p",href:"operators"},"all available\noperators")," to better understand what you can do with the data."),(0,r.kt)("h2",{id:"launch-pipelines-dynamically-experimental"},"Launch pipelines dynamically (experimental)"),(0,r.kt)("p",null,"As an alternative to configuration file-based pipelines, the ",(0,r.kt)("inlineCode",{parentName:"p"},"export")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"import")," commands support launching a dynamically defined pipeline. The\n",(0,r.kt)("inlineCode",{parentName:"p"},"export")," command and the data loaded by the ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," command will provide the\nrespective beginning datasets."),(0,r.kt)("p",null,"This dynamic pipeline is an optional string parameter, with operators chained\nby the ",(0,r.kt)("inlineCode",{parentName:"p"},"|")," delimiter. This pipeline can be put after an expression so it will\nonly be applied to the resulting dataset of that expression. For example:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"export json 'src_ip == 192.168.1.104 | select timestamp, flow_id, src_ip,\ndest_ip, src_port | drop timestamp'")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"import suricata < data/suricata/eve.json 'src_ip==147.32.84.165 &&\n(src_port==1181 || src_prt == 138) | select timestamp, flow_id, src_ip,\ndest_ip, src_port'")),(0,r.kt)("p",null,"Have a look at ",(0,r.kt)("a",{parentName:"p",href:"operators"},"all available operators")," for more details about the\nrespective pipeline operator string syntax. Please note that this feature is\nexperimental and the syntax may be subject to change."))}m.isMDXComponent=!0}}]);