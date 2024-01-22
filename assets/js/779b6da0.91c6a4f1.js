"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[28886],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>w});var c=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},m=Object.keys(e);for(c=0;c<m.length;c++)n=m[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(c=0;c<m.length;c++)n=m[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=c.createContext({}),l=function(e){var t=c.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return c.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return c.createElement(c.Fragment,{},t)}},M=c.forwardRef((function(e,t){var n=e.components,r=e.mdxType,m=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=l(n),M=r,w=p["".concat(o,".").concat(M)]||p[M]||d[M]||m;return n?c.createElement(w,a(a({ref:t},s),{},{components:n})):c.createElement(w,a({ref:t},s))}));function w(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var m=n.length,a=new Array(m);a[0]=M;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[p]="string"==typeof e?e:r,a[1]=i;for(var l=2;l<m;l++)a[l]=n[l];return c.createElement.apply(null,a)}return c.createElement.apply(null,n)}M.displayName="MDXCreateElement"},80987:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>x,default:()=>D,frontMatter:()=>w,metadata:()=>u,toc:()=>v});var c=n(3905),r=Object.defineProperty,m=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&s(e,n,t[n]);if(i)for(var n of i(t))l.call(t,n)&&s(e,n,t[n]);return e},d=(e,t)=>m(e,a(t)),M=(e,t)=>{var n={};for(var c in e)o.call(e,c)&&t.indexOf(c)<0&&(n[c]=e[c]);if(null!=e&&i)for(var c of i(e))t.indexOf(c)<0&&l.call(e,c)&&(n[c]=e[c]);return n};const w={sidebar_custom_props:{operator:{sink:!0}}},x="serve",u={unversionedId:"operators/serve",id:"version-Tenzir v4.7/operators/serve",title:"serve",description:"Make events available under the [/serve REST API",source:"@site/versioned_docs/version-Tenzir v4.7/operators/serve.md",sourceDirName:"operators",slug:"/operators/serve",permalink:"/Tenzir v4.7/operators/serve",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.7/operators/serve.md",tags:[],version:"Tenzir v4.7",frontMatter:{sidebar_custom_props:{operator:{sink:!0}}},sidebar:"docsSidebar",previous:{title:"select",permalink:"/Tenzir v4.7/operators/select"},next:{title:"shell",permalink:"/Tenzir v4.7/operators/shell"}},f={},v=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>--buffer-size &lt;buffer-size&gt;</code>",id:"--buffer-size-buffer-size",level:3},{value:"<code>&lt;serve-id&gt;</code>",id:"serve-id",level:3},{value:"Examples",id:"examples",level:2},{value:"Read a Zeek conn.log, 100 events at a time:",id:"read-a-zeek-connlog-100-events-at-a-time",level:3},{value:"Wait for an initial event",id:"wait-for-an-initial-event",level:3}],A={toc:v},k="wrapper";function D(e){var t=e,{components:n}=t,r=M(t,["components"]);return(0,c.kt)(k,d(p(p({},A),r),{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h1",p({},{id:"serve"}),"serve"),(0,c.kt)("p",null,"Make events available under the ",(0,c.kt)("a",p({parentName:"p"},{href:"/api#/paths/~1serve/post"}),(0,c.kt)("inlineCode",{parentName:"a"},"/serve")," REST API\nendpoint"),"."),(0,c.kt)("h2",p({},{id:"synopsis"}),"Synopsis"),(0,c.kt)("pre",null,(0,c.kt)("code",p({parentName:"pre"},{}),"serve [--buffer-size <buffer-size>] <serve-id>\n")),(0,c.kt)("h2",p({},{id:"description"}),"Description"),(0,c.kt)("p",null,"The ",(0,c.kt)("inlineCode",{parentName:"p"},"serve")," operator bridges between pipelines and the corresponding ",(0,c.kt)("inlineCode",{parentName:"p"},"/serve"),"\n",(0,c.kt)("a",p({parentName:"p"},{href:"/api#/paths/~1serve/post"}),"REST API endpoint"),":"),(0,c.kt)("p",null,(0,c.kt)("figure",p({parentName:"p"},{className:"markdown-inline-svg"}),"\n  ",(0,c.kt)("svg",p({parentName:"figure"},{viewBox:"0 0 820 160.847",role:"img","aria-hidden":"true"}),"eyJ2ZXJzaW9uIjoiMSIsImVuY29kaW5nIjoiYnN0cmluZyIsImNvbXByZXNzZWQiOnRydWUsImVuY29kZWQiOiJ4nO1Z2VLbSFx1MDAxNH3nKyjPKyi9L3mzg1x0TFx1MDAxMsJiXHUwMDA3yEyKXHUwMDEyUtvWIEtCkllC8e/TkrG1WF5cdTAwMDA7eGpcIqqwfbvVfVt9z7nntlx1MDAxZTY2N2vxfaBq7zdr6s4yXcdcdTAwMGXN29pWYr9RYeT4nm5C6e/IXHUwMDFmhFbas1x1MDAxN8dB9P7dOzNcYozsLsPy+8M7lav6yosj3fcv/Xtz8yH9n5vLdTyV9k2t2Uyc47L1wPfSWVx1MDAwNSOAU4nG7U60oyeKla1cdTAwMWI7plx1MDAxYqmsJTHVXHUwMDA2Le9cZvxcdTAwMTR++1x1MDAxONGdI/aPbym0nU3acVxc9yS+d4crMq3eIMy5XHUwMDE0xaF/pU5cdTAwMWQ77ul2WLKP77P9OHFg3Fx1MDAxY/qDbs9TUVS4yVx1MDAwZkzLie9cdTAwMTNcdTAwMWJcdTAwMDBjq+l100Eyy13Sg1x1MDAxMINcdTAwMTCKIIKUcyhotuBkXHUwMDAwLLkhucBcdTAwMDRIRCBcdTAwMTKs5NlcdTAwMDff9cPEsz9AemWuXZrWVVf759lZXHUwMDFmS9nENrM+t0/rXHUwMDE1mU895XR7sbaRzFx1MDAxNqn0oUNcdTAwMGWpnlx1MDAwMuV6J1x1MDAxM1x1MDAwNPt2uvM/skdcdTAwMWSafbWfbsqX+v3R52BcdTAwMGZ8jT5f9FutRvfs3DwtPD/Pfnp+3sB1M++ThmYurrLRXHUwMDA3gW1cdTAwMGWjXHUwMDAwMsk4Z5hcdTAwMTBcdTAwMDKyx6Zj7ao8nOtbV1x1MDAxNYFcdTAwMTPFZlx1MDAxODdcdTAwMWPPdrxu+Vx1MDAxNuXZU1pcXDOKP/j9vpPEwqHveHG5RzpuPVxm/dueMu2Kkae2XHUwMDA1yXBcdTAwMTmQkiv7tpnFTvpj/P3H1vzeZG539sz+otBcdTAwMWZcdTAwMDFcdTAwMDPkL/i86bBBKeJcdTAwMTAzLlx1MDAwNFx1MDAwMFx1MDAxNEC1XHLps1x1MDAxNpjzdyP/+bj1PE5cdTAwMTJcdTAwMDSWrSNOoowzJFx1MDAwMcxQOI+U0D78eL673zm4XHUwMDBlLtvnN1x1MDAwN0wpTNaelFx1MDAxMPrPkFx1MDAxMlx1MDAxMZqQmMSZXHUwMDBmvzlpnTlcdJVI4zeHvYbDzGTPqkhcZjNWto5IXGbp6GSMXHUwMDAysjCJtYN63Sd+s3ta/354ctz7elx1MDAxMXXgkkks8rWqXFwmh2EhXHIqXHUwMDAxkprDJEOIXHUwMDE2KIzARSlMXHUwMDAxXGYxnE1hSipLdSYpjFx1MDAxMkMgwjRcdTAwMTVcdTAwMDBBXHUwMDA1Y3KS0SZcdI0xrXuBXFxccqE9jFx1MDAwM2xcdTAwMTRD6Mny+LY8l3PsqZxcdTAwMTiurS+vd759+fo9wFx1MDAxNyfRWVx1MDAwZtw1wXazlmGm1vGtQVx1MDAxYSV6tzlcdTAwMTZcYlx1MDAwMoSRwFx1MDAwMPJcXKeuXHUwMDE5pFrbkJhojFIqkH7IZHLtv4xhk6ydbdFSKXZq1JXuXohhYnVcdTAwMTdXXHUwMDExXGbCtGxcdTAwMWRcdTAwMTFcZoZcdTAwMTJIjIBYmGBmb/K6XHUwMDEyjFx1MDAxNFx1MDAwNlx1MDAxNIBr+uBaKUlcXGRcdTAwMThMsVx1MDAwMVxi1qlcdTAwMDAzXcZCQEueLYliqIG4lEwgpuszwbNZxlx1MDAxNEMnKzmCkFx1MDAwNlxiXCJvUcmNXHUwMDAz8CFcdTAwMTeWXHUwMDBiZZpCYFx1MDAwZVPfuOVxXHUwMDE0zavgqo7vxSfOz5QuQcG6a/ZcdTAwMWT3vlx1MDAxMEMpYrSDx82T1t9e/XC/Vmiqu043XHUwMDAxUM3SXHUwMDBmRIVcdTAwMDVsxY5luuNcdTAwMGWxXHUwMDFmZK2WnszUXHUwMDE1S7g/wSx+6HRcdTAwMWTPdFvTJ05qnb1RPEAjl1xmL81IpZWQzjz4ZVqD5J5JiVxuIJSUQinh4sc4e4Houl43bFx1MDAxZLTOdi122LTuflx1MDAxZa07XHUwMDE3XHUwMDEwUSqYXig2oEr+XsZcdTAwMDR8XHUwMDExdVx1MDAwMaXOfFx1MDAwMkiRqb//tby43v10Jzq++Vx0nV5cdTAwMWbef1x1MDAxYjSvjm/2quTFNjI0wzLN9kBoamdaPEzqXHUwMDBianCu95hhSjQomJgtL6b51Du6aKCdz1x1MDAxMT6KrY9A4bO9xpeTKp/ApFx1MDAwN1x1MDAxMzO+QLbU4tBcdTAwMTmG+a8vXHUwMDBm+avESqisuOR5RlOQT1UskLNkW/Oie1x1MDAxZU3N3qQ1pSnKZtFcdTAwMTSmy6Spacc6kFWc60A0yVRcdTAwMDAwrqHEVqNRJplcbs9nqlnSZXbeKoRpWbpsVY9bKcFzM4JW0/TO/jyXjZvm8T+dxqe23b9YrVwimom+aaVcdTAwMDLMZaZcdH1cdTAwMDCgRCB/fDdcdTAwMGZ41atec+AxJFxmgChCXHUwMDFhWZwyhFx1MDAwYsAjgFx1MDAxYWTl+lx1MDAwMCNDYF0pJLUvhqiiUMjZxiDkiDKd9VYjXHUwMDE33uB49UVSvlx1MDAxZVx1MDAwNC9cdTAwMTXxfce28/moqOPnpZGytC84spCoh+JFmMWIl61jzEpcbijQNefimn62ylpTzFx1MDAxMslccoSYgJBcdTAwMDMkOMwgkGJcdTAwMTZjg1x1MDAxM631OOKC6i+85NhyQEuZoTEridBcdTAwMTlSO1x1MDAwMis0flx1MDAwNWpcdTAwMTFcIlxmQvomqF1RjlxcQTJ7XHUwMDFkJ+y1Woe/urIvzrlcZvxPe1x0XG5cdTAwMDGaqpZcdTAwMDWhXHUwMDFhXHUwMDExlC1+vvftOti5bodn8HLnY68tdm5C9qG97vjHgFx1MDAxYkBjmzFINf55ttzhO1BpXGIkiYYkQZhL/jr8v+4lqHZCXHUwMDEwXHUwMDA23uI07/c70ORaq3eg4lX9n+fNcyv0NFx1MDAwNKtcYochUraO+IYgXCKI0EBcXJhv5kT3evJcckpTPSOMXHUwMDEywVx1MDAxMNKiokg4hFx1MDAxOURqXHLAsNZcdTAwMWRcdTAwMWO+qkiIQ9OLXHUwMDAyM9QoruKcqlxunVx1MDAwMENottPETyjVXub47kl1QKiLXHUwMDFizHN5YVx1MDAxZVxyXHUwMDE1ILYszoG5XHUwMDE3Mc/gXHUwMDFjL1x0zGHXYVx1MDAwNG88IaBmXHUwMDA2wUmsp6mNTlxyajeOum1UsHgnvVx1MDAxMtWSxn9cdTAwMTJoKj1seNx4/Fx1MDAxN4m24lx0In0=",(0,c.kt)("defs",{parentName:"svg"},(0,c.kt)("style",{parentName:"defs"},'@font-face{font-family:"Virgil";src:url(https://excalidraw.com/Virgil.woff2)}@font-face{font-family:"Cascadia";src:url(https://excalidraw.com/Cascadia.woff2)}')),(0,c.kt)("g",p({parentName:"svg"},{fillRule:"evenodd",strokeLineCap:"round"}),(0,c.kt)("path",p({parentName:"g"},{fill:"none",stroke:"#ced4da",strokeWidth:".5",d:"M118.046 51.487s0 0 0 0m0 0s0 0 0 0m-.29 5.75c2.07-1.06 4.07-3.64 5.23-4.93m-4.91 5.23c1.28-.82 2.68-2.41 5.23-5.57m-5.89 11.95c5.01-3.06 7.67-8.03 10.85-13.76m-9.45 14.08c.92-4.02 4.22-6.56 9.91-12.29m-10.64 17.98c4.84-4.21 8.43-6.87 16.43-16.97m-17.19 17.32c6.34-7.11 13.31-12.96 16.69-18.27m-16.58 23.87c7.1-7.73 14.6-15.38 22.71-25.92m-22.21 25.85c6.85-6.7 13.01-12.93 20.54-24.64m-21.56 29.18c9.84-8.68 21.11-23.63 26.33-26.86m-24.21 28.8c7.99-10.4 17.32-20.4 26.19-29.67m-26.39 36.98c9.76-17.17 24.91-27.17 31.98-37.81m-33.15 35.79c13.1-13.85 25.35-27.53 31.37-36.59m-28.08 40.02c7.37-11.99 19.37-23.14 35.95-39.82m-37.75 41.43c10.4-9.55 17.42-20.94 36.18-40.34m-29.25 39.47c10.31-14.2 25.66-29.16 33.28-41.17m-35.83 42.86c13.74-15.77 27.97-32.86 36.19-41.92m-29.47 39.6c10.05-8.3 19.44-17.97 35.82-39.17m-35.7 40.74c12.13-13.31 24.47-27.56 34.6-40.05m-29.5 38.33c9.25-8.78 21.56-21.84 36.24-40.13m-37.32 42.49c10.54-11.58 20.42-22.85 36.11-41.23m-27.94 38.64c5.37-9.3 18.07-19.56 33.47-39.84m-35.09 42.01c6.52-8.32 13.68-15.94 34.45-42.18m-30.02 43.2c10.7-11.45 20.05-25.84 33.22-41.34m-33.54 40.71c8.08-9.45 15.33-17.6 34.89-39.61m-28.37 36.94c13.42-11.57 25.72-24.88 31.36-33.69m-32.01 35.54c11.06-12.16 21.22-23.9 31.61-37m-25.69 36.53c10.15-12.84 21.48-22.46 29.93-32.43m-29.88 32.68c7.9-10.17 16.41-19.42 29.7-33.1m-24.89 33.63c7.4-9.87 17.29-23.13 27.15-32.85m-25.85 32.07c7.63-10.16 17.23-20.23 25.18-31.11m-22.49 32.92c10.82-8.94 15.08-19.1 26.72-28.01m-24.49 26.67c6.26-7.08 14.13-16.01 24.31-26.78m-20.08 26.78c7.61-7.46 13.58-13.05 23.19-25.71m-22.84 24.69c6.62-6.45 12.83-12.93 20.95-23.32m-14.32 24.37c5.94-6.98 8.03-11.5 18.61-21.25m-20.32 21.6c7.54-8.86 14.87-17.65 19.19-22.22"})),(0,c.kt)("path",p({parentName:"g"},{fill:"none",stroke:"#000",strokeDashArray:["1.5","7"],strokeWidth:"1.5",d:"M116.916 51.107c1.56 11.76 2.6 25.4 1.01 38.9m1.08.35c15.35 1.37 35.74-.82 57.3 2.34m.64-1.35c4.39-3.99 9.95-8.39 22.98-19.43m-.84 1.15c-5.03-6.79-9.24-9.03-20.67-22.44m-.89 2.61c-20.36-.22-43.19-2.93-60.48-3.44m1 1.69s0 0 0 0"}))),(0,c.kt)("g",p({parentName:"svg"},{fillRule:"evenodd",strokeLineCap:"round"}),(0,c.kt)("path",p({parentName:"g"},{fill:"none",stroke:"#ced4da",strokeWidth:".5",d:"M198.046 51.487s0 0 0 0m0 0s0 0 0 0m3.18 2.89c.41-.45.84-1.09 1.87-2.41m-1.94 2.25c.35-.58.69-1.16 1.75-2.46m-.24 4.96c2.34-1.54 3.44-1.86 5.53-4.57m-4.49 5.38c1.67-1.64 3.32-3.75 5.26-6.27m-2.75 8.73c2.92-.93 3.97-3.49 7.4-7.42m-7.12 7.5c2.87-3 5.18-6.07 7.06-8.65m-3.45 11.91c3.88-3.17 4.98-8.84 10.55-11.84m-11.76 11.83c3.58-4.72 6.5-7.06 10.69-12.56m-7.33 14.35c3.22-2.6 6.74-4 13.4-14.64m-13.86 14.03c5.33-2.94 9.06-8.28 13.21-13.12m-8.93 16.66c5.9-5.8 8.5-13.21 13.55-15.63m-15.3 15.49c6.19-5.82 12.11-11.65 15.12-17.15m-29.95 41.75s0 0 0 0m0 0s0 0 0 0m16.5-19.84c6.98-9.37 11.7-14.06 17.88-22.3m-15.45 21.33c6.37-6.66 11.85-14.08 16.98-20.83m-31.6 43.55c7.1-8.47 13.88-16.42 36.49-42.9m-36.16 42.02c12.69-13.79 24.07-27.65 36.24-41.86m-30.58 41.98c10.63-11.88 20.91-24.74 35.1-40.29m-35.75 39.06c12-11.75 22.05-24.78 35.43-40.82m-30.47 41.53c8.09-8.34 15.74-21.22 36.94-43.6m-35.93 43.84c9.77-13.17 19.46-24.25 35.34-42.25m-30.48 41.49c11.82-13.07 26.12-28.69 38.07-39.23m-36.52 39.41c8.43-9.01 16.25-19.24 34.87-41.3m-29.81 40.07c8.82-10.05 15.68-19.76 34.35-37.92m-35.1 38.24c7.64-7.05 14.84-15.34 33.94-38.61m-28.96 37.33c7.52-7.65 17.62-15.54 32.83-33.36m-33.19 35.64c9.05-11.35 18.16-21.08 32.93-37.08m-28.88 37.22c6.49-5.81 13.09-16.18 31.68-34.75m-28.91 35.05c9.54-13.52 21.9-25.54 28.56-34.37m-23.65 35.34c10.01-11.52 19.13-20.39 26.3-32.04m-25.87 30c10.03-10.83 19.96-23.2 26.06-30.11m-20.32 29.42c6.07-5.41 8.21-10.08 22.53-25.96m-23.11 26.95c4.44-6.38 11.7-13.53 24.36-27.97m-20.93 28.55c5.42-6.88 10.72-11.84 22.1-24.94m-21.3 24.9c7.5-10.71 16.12-19.49 21.49-26.58m-16.95 24.73c6.17-7.1 11.64-13.67 19.19-21.94m-18.04 23.03c3.9-5.31 8.27-10.14 19.2-22.36"})),(0,c.kt)("path",p({parentName:"g"},{fill:"none",stroke:"#000",strokeDashArray:["1.5","7"],strokeWidth:"1.5",d:"M198.696 49.537c8.36 7.78 13.98 15.38 19.35 20.3m-1.68 1.97c-3.79 3.98-12.53 13.34-19.92 20.06m.53-.17c17.35.04 35.34.27 59.32-.41m1.98-.77c5.99-4.2 12.14-12.15 21.37-20.7m.32 3.1c-6.32-8.86-15.51-15.59-23.03-21.7m2.36.52c-17.84 1.24-33.49.89-60.88.59m-.37-.84s0 0 0 0"}))),(0,c.kt)("g",p({parentName:"svg"},{strokeLineCap:"round"}),(0,c.kt)("path",p({parentName:"g"},{fill:"none",stroke:"#e03131",d:"M362.02 72.507c9.01-.08 45.82-.93 55.01-1.09m-53.42.57c9.39.09 46.29.79 55.61.92"})),(0,c.kt)("path",p({parentName:"g"},{fill:"#e03131",strokeWidth:"0",d:"M421.67 64.067c1.43.24 2.39 2.21 3.4 3.84 1.01 1.63 2.73 3.99 2.66 5.94-.06 1.95-1.78 4.4-3.04 5.76-1.27 1.35-2.81 2.52-4.55 2.36-1.74-.15-4.41-2.24-5.88-3.31-1.48-1.07-2.54-1.52-2.96-3.1-.41-1.58-.13-4.86.47-6.38.61-1.52 1.53-1.99 3.18-2.74 1.65-.75 5.3-1.89 6.72-1.76 1.42.12 1.81 2.21 1.81 2.52m-3.37-2.18c1.87-.16 3.17.54 4.46 1.51 1.29.96 2.95 2.78 3.29 4.27.34 1.49-.46 3.26-1.24 4.66-.79 1.4-1.94 2.67-3.46 3.75-1.53 1.08-4.07 2.87-5.71 2.73-1.64-.13-3.29-1.89-4.13-3.54-.84-1.64-1.08-4.47-.91-6.31.17-1.84 1.06-3.41 1.94-4.74.88-1.34 2.49-3.03 3.34-3.28.85-.26 1.37 1.46 1.78 1.75"}))),(0,c.kt)("text",p({parentName:"svg"},{x:"27.64",fill:"#e03131",dominantBaseline:"text-before-edge",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(371.781 6.553)"}),"REST"),(0,c.kt)("text",p({parentName:"svg"},{x:"27.64",y:"25",fill:"#e03131",dominantBaseline:"text-before-edge",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(371.781 6.553)"}),"API"),(0,c.kt)("g",p({parentName:"svg"},{strokeLineCap:"round"}),(0,c.kt)("path",p({parentName:"g"},{fill:"none",stroke:"#1e1e1e",d:"M457.156 71.487c13.17.04 65.49.28 78.9.17m-77.16-1.22c13.62.27 66.31 2.62 79.35 2.84"})),(0,c.kt)("path",p({parentName:"g"},{fill:"#1e1e1e",fillRule:"evenodd",strokeWidth:"0",d:"m457.626 71.377 14.29-6.95-.56 11.57-12.72-6.24"})),(0,c.kt)("path",p({parentName:"g"},{fill:"none",stroke:"#1e1e1e",d:"M457.156 70.247c3.19.69 5.09-2.66 13.86-4.52m-14.46 5.9c3.25-1.94 6.23-3.23 14.3-6.4m-1.19-.16c1.25 4.72 2.2 8.14.45 12.97m1.17-13.38c-.4 4.83.04 10.06-.1 13.81m-1.28-.8c-2.68-2.31-4.14-1.99-12.56-6.15m13.53 6.67c-5.61-2.96-9.8-4.24-13.52-6.82m-.2.12s0 0 0 0m0 0s0 0 0 0"}))),(0,c.kt)("g",p({parentName:"svg"},{strokeLineCap:"round"}),(0,c.kt)("path",p({parentName:"g"},{fill:"none",stroke:"#ced4da",strokeWidth:".5",d:"M545.376 19.187s0 0 0 0m0 0s0 0 0 0m-.26 6.39c2.04-3.08 5.8-6.34 10.49-12.07m-10.49 12.07c4.03-4.64 8.66-8.79 10.49-12.07m-14.69 23c7.49-6.95 11.94-13.02 20.34-23.4m-20.34 23.4c5.24-4.05 9.48-9.14 20.34-23.4m-20.6 29.8c5.39-7.35 12.39-15.56 26.9-30.95m-26.9 30.95c10.43-11.77 21.52-24.14 26.9-30.95m-26.51 36.59c8.2-11.38 20.29-21.29 30.18-34.72m-30.18 34.72c9.2-10.36 15.87-20.04 30.18-34.72m-30.44 41.12c10.75-12.43 23-30.31 35.43-40.76m-35.43 40.76c9.28-10.52 17.56-21.15 35.43-40.76m-35.03 46.4c14.75-16.13 29.03-33.84 40.67-46.79m-40.67 46.79c8.59-8.4 17.03-18.07 40.67-46.79m-40.94 53.19c17.48-21.38 32.62-38.42 45.93-52.83m-45.93 52.83c16.08-19.23 31.7-38.74 45.93-52.83m-46.19 59.23c14.6-16.76 23.46-28.58 51.83-59.62m-51.83 59.62c10.21-11.93 21.93-25.2 51.83-59.62m-51.43 65.26c17.69-17.68 34.26-37.85 56.42-64.9m-56.42 64.9c20.75-23.43 42.16-48.1 56.42-64.9m-56.68 71.3c24.1-28.24 49.37-55.22 62.32-71.7m-62.32 71.7c15.77-17.7 31.49-36.39 62.32-71.7m-61.93 77.34c16.26-17.72 30.98-33.57 66.92-76.98m-66.92 76.98c21.34-26.99 45.78-52.82 66.92-76.98m-67.18 83.38c21.91-24.3 45.9-53.89 72.17-83.02m-72.17 83.02c16.28-21.71 36.01-41.05 72.17-83.02m-72.43 89.42c22.62-24.23 46.68-50.4 78.07-89.81m-78.07 89.81c18-21.59 34.17-40.48 78.07-89.81m-78.33 96.2c34.42-39.31 67.73-76.94 83.32-95.84m-83.32 95.84c18.52-20.91 35.38-42.52 83.32-95.84m-81.62 99.98c25.79-30.55 48.12-59.32 87.26-100.38m-87.26 100.38c30.29-35.82 59.89-69.24 87.26-100.38m-86.86 106.02c26.3-30.9 48.45-56.32 91.85-105.66m-91.85 105.66c32.71-36.05 63.74-74.68 91.85-105.66m-89.49 109.04c24.93-31.51 54.68-62.08 95.13-109.43m-95.13 109.43c31.66-36.21 63.77-73.88 95.13-109.43m-92.11 112.05c19.42-22.51 41.93-49.15 97.1-111.69m-97.1 111.69c34.75-40.34 68.89-79.88 97.1-111.69m-93.43 113.56c22.54-25.02 44.59-49.15 99.07-113.96m-99.07 113.96c37.6-43.48 75.08-86.03 99.07-113.96m-95.39 115.83c22.51-24.45 42.55-49.03 100.38-115.47m-100.38 115.47c27.08-31.95 55.8-64.27 100.38-115.47m-95.39 115.83c26.54-30 52.76-59.33 101.03-116.22m-101.03 116.22c40.38-43.75 80.14-89.84 101.03-116.22m-96.7 117.34c26.77-30.65 56.24-63.16 103.65-119.25m-103.65 119.25c32.49-39.33 65.86-76.84 103.65-119.25m-99.32 120.36c29.15-32.78 57.45-68.97 104.31-120m-104.31 120c25.1-27.15 49.33-55.59 104.31-120m-98.67 119.61c28.4-29.91 54-59.18 103-118.49m-103 118.49c39.47-44.93 80.35-90.58 103-118.49m-98.01 118.85c39.57-45.86 77.32-91.48 102.34-117.74m-102.34 117.74c31.54-36.41 62.27-72.67 102.34-117.74m-96.7 117.34c35.96-40.76 71.21-82.71 100.38-115.47m-100.38 115.47c35.5-41.3 70.28-82.48 100.38-115.47m-95.39 115.83c33.71-40.68 69.96-78.7 99.06-113.96m-99.06 113.96c32.6-39 66.39-78.08 99.06-113.96m-93.42 113.57c34.13-39.25 68.8-77.16 96.44-110.94m-96.44 110.94c19.23-23.99 40.66-47.66 96.44-110.94m-91.45 111.3c21.32-23.16 41.81-47.99 93.82-107.92m-93.82 107.92c35.85-40.79 73.08-83.51 93.82-107.92m-88.83 108.28c27.76-33.52 58.74-64.91 90.53-104.15m-90.53 104.15c28.2-34.25 58.55-68.75 90.53-104.15m-84.89 103.76c27-29.22 53.37-61.42 85.94-98.87m-85.94 98.87c22.92-27.62 47.5-54.68 85.94-98.87m-80.95 99.23c33.23-36.12 64.26-73.04 81.35-93.59m-81.35 93.59c27.39-33.51 56.04-64.46 81.35-93.59m-75.71 93.19c25.98-33.68 56.92-65.51 77.41-89.05m-77.41 89.05c26.29-29.75 52.83-60.26 77.41-89.05m-72.42 89.41c24.68-29.78 50.85-63.21 72.82-83.77m-72.82 83.77c20.12-23.22 41.89-47.32 72.82-83.77m-67.18 83.38c13.44-17.73 27.86-33.89 66.92-76.98m-66.92 76.98c18.58-20.9 36.15-41.45 66.92-76.98m-61.93 77.34c18.42-21.74 39.73-42.33 61.67-70.95m-61.67 70.95c18.53-20.95 38.01-43.25 61.67-70.95m-56.03 70.55c18.75-23.85 41.75-46.47 56.42-64.9m-56.42 64.9c14.7-17.42 28.94-34.74 56.42-64.9m-51.43 65.26c17.49-17.84 34.2-39.81 51.17-58.87m-51.17 58.87c14.38-16.71 28.21-34.24 51.17-58.87m-45.53 58.48c17.36-15.85 31.79-34.27 45.27-52.08m-45.27 52.08c12.78-15.64 25.87-31.33 45.27-52.08m-40.28 52.44c6.98-10.52 19.33-20.32 40.67-46.79m-40.67 46.79c10.89-11.94 20.87-24.21 40.67-46.79m-35.03 46.39c12.12-16.58 25.43-28.77 34.77-40m-34.77 40c8.66-11.23 19.52-19.96 34.77-40m-29.78 40.36c4.14-8.18 11.49-15.12 29.52-33.96m-29.52 33.96c11.72-13.96 23.82-26.38 29.52-33.96m-23.88 33.57c8.03-10.58 18.34-18.36 24.27-27.93m-24.27 27.93c9.11-11.79 19.54-21.25 24.27-27.93m-17.32 26.02c3.85-5.09 7.62-9.7 17.06-19.62m-17.06 19.62c6.25-7.72 12.72-15.32 17.06-19.62"})),(0,c.kt)("path",p({parentName:"g"},{fill:"none",stroke:"#1e1e1e",d:"M568.046 11.487c20.04.56 39.93-.42 100 0m-100 0c24.8-.69 50.2-.17 100 0m0 0c19.03.68 29.07 10.47 30 30m-30-30c20.42-.12 27.73 8.7 30 30m0 0c-1.05 20.79-.27 39.63 0 60m0-60c-.2 18.04-.19 37.32 0 60m0 0c1.63 20.54-9.09 31.42-30 30m30-30c.29 19.01-10.14 30.27-30 30m0 0c-38.82-1.09-76.76.98-100 0m100 0c-28.92.05-58.37 1.36-100 0m0 0c-21.61 1.03-30.68-11.08-30-30m30 30c-21.35.45-30.3-8.69-30-30m0 0c-2.22-16.48.19-32.21 0-60m0 60c.04-16.11-.63-32.57 0-60m0 0c-.95-21.15 9.28-29.81 30-30m-30 30c.93-18.96 8.35-29.63 30-30"}))),(0,c.kt)("text",p({parentName:"svg"},{x:"16.42",fill:"#1e1e1e",dominantBaseline:"text-before-edge",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(601.626 58.987)"}),"App"),(0,c.kt)("text",p({parentName:"svg"},{x:"28.2",fill:"#1e1e1e",dominantBaseline:"text-before-edge",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(470.827 87.258)"}),"HTTP"),(0,c.kt)("g",p({parentName:"svg"},{fillRule:"evenodd",strokeLineCap:"round"}),(0,c.kt)("path",p({parentName:"g"},{fill:"none",stroke:"#ced4da",strokeWidth:".5",d:"M280.679 53.338s0 0 0 0m0 0s0 0 0 0m3.03 2.68c.25-.81.62-.83 1.88-2.57m-2.02 2.38c.75-.39 1.07-1.02 2.15-2.13m-.24 5.97c3.01-2.25 4.04-5.88 6.44-5.57m-6.04 5.57c1.92-2.76 4.03-4.66 5.7-6.36m-1.93 9.26c1.78-3.15 1.91-5 7.12-9.58m-8.04 9.28c3.07-3.52 6.64-6.36 7.04-8.71m-4.42 12.3c5.25-6.02 6.62-9.29 11.74-13.05m-11.11 12.02c1.81-2.59 4.18-5.26 9.68-12.11m-7.79 15.51c3.89-5.1 7.34-6.24 14.61-13.63m-14.16 11.72c4.86-3.39 8.17-7.32 12.29-12.02m-8.97 16.82c3.7-6.56 6.3-7.57 16.23-17.72m-16.07 17.25c3.92-5.18 9.4-10.75 14.36-16.44m-30.03 40.14s0 0 0 0m0 0s0 0 0 0m16.58-21.58c5.39-2.74 9.52-7.13 18.22-20.99m-16.63 21.95c3.65-4.53 7.99-9.6 16.42-19.34m-27.91 39.13c9.57-13.73 22.06-24.06 35.84-38.66m-37.72 39.34c10.5-12.06 22.32-25.34 36.76-41.73m-30.84 40.12c10.09-10.06 19.23-21.97 36.4-38.44m-36.77 39.68c12.84-14.01 24.22-28.44 35.32-40.51m-28.98 40.82c11.82-14.53 23.63-29.36 33.94-42.79m-35.39 42.53c12.39-12.07 21.18-23.91 35.69-39.79m-30.19 41.65c7.46-9.65 18.6-18.88 34.38-42.47m-33.71 41.3c13.21-15.06 25.01-28.39 36.09-40.79m-30.43 42.28c12.6-17.62 28.57-34.43 36.4-41.81m-36.5 39.7c12-14.73 25.53-29.07 36.25-40.99m-30.53 40.39c7.41-7.27 15.77-17.01 32.92-38.58m-33.94 38.89c10.5-11.9 22.04-25.53 34.92-40.1m-28.94 42.36c8.86-8.78 14.32-18.72 33.59-44.1m-35.27 42.87c11.42-11.76 20.75-23.82 36.28-42.13m-30.47 40.11c8.59-5.92 14.59-14.47 34.36-39.14m-33.69 41.55c8.33-9.75 16.32-19.38 35.6-41.27m-31.08 41.77c11.93-16.35 27.61-30.54 33.27-39m-33.37 37.17c9.18-7.91 18.16-17.44 34.97-37m-27.92 37.46c7.1-10 12.89-15.31 25.89-32.22m-26.14 32.18c10.57-12.97 20.28-25.15 26.76-32.8m-24.08 32.81c8.66-5.6 10.87-9.36 24.55-24.86m-21.97 24.85c6.34-9.05 13.63-17.73 22.87-26.4m-20 27.95c7.85-7.66 11.54-9.31 17.81-22.73m-15.7 20.66c4.76-5.8 9.93-10.25 18.13-20.04m-12.25 22.41c5.25-7.47 8.12-12.79 9.84-15.07m-11.57 13.41c5.03-5.23 9.55-9.49 13.6-14.19m-8.76 13.65c3.2-1.47 5.01-3.67 7.52-7.49m-6.7 8.25c2.1-1.78 3.37-3.67 6.99-7.89"})),(0,c.kt)("path",p({parentName:"g"},{fill:"none",stroke:"#1e1e1e",d:"M281.059 52.738c2.9 4.88 7.2 9.49 19.71 20.81m-20.19-20.18c8.54 8.81 16.02 15.42 20.24 20.49m-1.81-.2c-5.31 7.97-9.25 14.02-16.46 18.4m17.99-18.95c-5.62 6.06-9.41 10.25-19.84 20.69m.82-2.42c26.02 1.19 56.64 2.33 78.84 3.89m-80.61-2.2c27.03.37 51.79-.27 81.81-.72m-2.2 1.47c1.41-10.47 1.61-15.86 1.64-40.02m-.01 38.6c.2-11.71.01-21.74.29-38.18m.17-2.76c-31.11 2.53-58.37 3.43-80.49 1.89m79.14-.46c-20.59.65-44.29-1.2-79.06-.46m-.36.91s0 0 0 0m0 0s0 0 0 0"})))))),(0,c.kt)("p",null,"Pipelines ending with the ",(0,c.kt)("inlineCode",{parentName:"p"},"serve")," operator exit when all events have been\ndelivered over the corresponding endpoint."),(0,c.kt)("h3",p({},{id:"--buffer-size-buffer-size"}),(0,c.kt)("inlineCode",{parentName:"h3"},"--buffer-size <buffer-size>")),(0,c.kt)("p",null,"The buffer size specifies the maximum number of events to keep in the ",(0,c.kt)("inlineCode",{parentName:"p"},"serve"),"\noperator to make them instantly available in the corresponding endpoint before\nthrottling the pipeline execution."),(0,c.kt)("p",null,"Defaults to ",(0,c.kt)("inlineCode",{parentName:"p"},"64Ki"),"."),(0,c.kt)("h3",p({},{id:"serve-id"}),(0,c.kt)("inlineCode",{parentName:"h3"},"<serve-id>")),(0,c.kt)("p",null,"The serve id is an identifier that uniquely identifies the operator. The ",(0,c.kt)("inlineCode",{parentName:"p"},"serve"),"\noperator errors when receiving a duplicate serve id."),(0,c.kt)("h2",p({},{id:"examples"}),"Examples"),(0,c.kt)("h3",p({},{id:"read-a-zeek-connlog-100-events-at-a-time"}),"Read a Zeek conn.log, 100 events at a time:"),(0,c.kt)("pre",null,(0,c.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"tenzir 'from file path/to/conn.log read zeek-tsv | serve zeek-conn-logs'\n")),(0,c.kt)("pre",null,(0,c.kt)("code",p({parentName:"pre"},{className:"language-bash"}),'curl \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  -d \'{"serve_id": "zeek-conn-logs", "continuation_token": null, "timeout": "1s", "max_events": 100}\' \\\n  http://localhost:5160/api/v0/serve\n')),(0,c.kt)("p",null,"This will return up to 100 events, or less if the specified timeout of 1 second\nexpired."),(0,c.kt)("p",null,"Subsequent results for further events must specify a continuation token. The\ntoken is included in the response under ",(0,c.kt)("inlineCode",{parentName:"p"},"next_continuation_token")," if there are\nfurther events to be retrieved from the endpoint."),(0,c.kt)("h3",p({},{id:"wait-for-an-initial-event"}),"Wait for an initial event"),(0,c.kt)("p",null,"This pipeline will produce 10 events after 3 seconds of doing nothing."),(0,c.kt)("pre",null,(0,c.kt)("code",p({parentName:"pre"},{className:"language-bash"}),'tenzir "shell \\"sleep 3; jq --null-input \'{foo: 1}\'\\" | read json | repeat 10 | serve slow-events"\n')),(0,c.kt)("pre",null,(0,c.kt)("code",p({parentName:"pre"},{className:"language-bash"}),'curl \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  -d \'{"serve_id": "slow-events", "continuation_token": null, "timeout": "5s", "min_events": 1}\' \\\n  http://localhost:5160/api/v0/serve\n')),(0,c.kt)("p",null,"The call to ",(0,c.kt)("inlineCode",{parentName:"p"},"/serve")," will wait up to 5 seconds for the first event from the pipeline arriving at the serve operator,\nand return immediately once the first event arrives."))}D.isMDXComponent=!0}}]);