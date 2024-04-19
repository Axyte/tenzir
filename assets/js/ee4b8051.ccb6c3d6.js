"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[91927],{3905:(e,c,m)=>{m.d(c,{Zo:()=>s,kt:()=>w});var t=m(67294);function n(e,c,m){return c in e?Object.defineProperty(e,c,{value:m,enumerable:!0,configurable:!0,writable:!0}):e[c]=m,e}function a(e,c){var m=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);c&&(t=t.filter((function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable}))),m.push.apply(m,t)}return m}function r(e){for(var c=1;c<arguments.length;c++){var m=null!=arguments[c]?arguments[c]:{};c%2?a(Object(m),!0).forEach((function(c){n(e,c,m[c])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(m)):a(Object(m)).forEach((function(c){Object.defineProperty(e,c,Object.getOwnPropertyDescriptor(m,c))}))}return e}function i(e,c){if(null==e)return{};var m,t,n=function(e,c){if(null==e)return{};var m,t,n={},a=Object.keys(e);for(t=0;t<a.length;t++)m=a[t],c.indexOf(m)>=0||(n[m]=e[m]);return n}(e,c);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)m=a[t],c.indexOf(m)>=0||Object.prototype.propertyIsEnumerable.call(e,m)&&(n[m]=e[m])}return n}var o=t.createContext({}),l=function(e){var c=t.useContext(o),m=c;return e&&(m="function"==typeof e?e(c):r(r({},c),e)),m},s=function(e){var c=l(e.components);return t.createElement(o.Provider,{value:c},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var c=e.children;return t.createElement(t.Fragment,{},c)}},M=t.forwardRef((function(e,c){var m=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=l(m),M=n,w=d["".concat(o,".").concat(M)]||d[M]||p[M]||a;return m?t.createElement(w,r(r({ref:c},s),{},{components:m})):t.createElement(w,r({ref:c},s))}));function w(e,c){var m=arguments,n=c&&c.mdxType;if("string"==typeof e||n){var a=m.length,r=new Array(a);r[0]=M;var i={};for(var o in c)hasOwnProperty.call(c,o)&&(i[o]=c[o]);i.originalType=e,i[d]="string"==typeof e?e:n,r[1]=i;for(var l=2;l<a;l++)r[l]=m[l];return t.createElement.apply(null,r)}return t.createElement.apply(null,m)}M.displayName="MDXCreateElement"},97319:(e,c,m)=>{m.r(c),m.d(c,{assets:()=>f,contentTitle:()=>u,default:()=>A,frontMatter:()=>w,metadata:()=>x,toc:()=>g});var t=m(3905),n=Object.defineProperty,a=Object.defineProperties,r=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(e,c,m)=>c in e?n(e,c,{enumerable:!0,configurable:!0,writable:!0,value:m}):e[c]=m,d=(e,c)=>{for(var m in c||(c={}))o.call(c,m)&&s(e,m,c[m]);if(i)for(var m of i(c))l.call(c,m)&&s(e,m,c[m]);return e},p=(e,c)=>a(e,r(c)),M=(e,c)=>{var m={};for(var t in e)o.call(e,t)&&c.indexOf(t)<0&&(m[t]=e[t]);if(null!=e&&i)for(var t of i(e))c.indexOf(t)<0&&l.call(e,t)&&(m[t]=e[t]);return m};const w={sidebar_position:1},u="Syntax",x={unversionedId:"language/syntax",id:"version-Tenzir v4.11/language/syntax",title:"Syntax",description:"Tenzir comes with its own language to define pipelines, dubbed Tenzir Query",source:"@site/versioned_docs/version-Tenzir v4.11/language/syntax.md",sourceDirName:"language",slug:"/language/syntax",permalink:"/language/syntax",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.11/language/syntax.md",tags:[],version:"Tenzir v4.11",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Language",permalink:"/language"},next:{title:"Expressions",permalink:"/language/expressions"}},f={},g=[],D={toc:g},T="wrapper";function A(e){var c=e,{components:m}=c,n=M(c,["components"]);return(0,t.kt)(T,p(d(d({},D),n),{components:m,mdxType:"MDXLayout"}),(0,t.kt)("h1",d({},{id:"syntax"}),"Syntax"),(0,t.kt)("p",null,"Tenzir comes with its own language to define pipelines, dubbed ",(0,t.kt)("strong",{parentName:"p"},"Tenzir Query\nLanguage (TQL)"),".",(0,t.kt)("sup",d({parentName:"p"},{id:"fnref-1"}),(0,t.kt)("a",d({parentName:"sup"},{href:"#fn-1",className:"footnote-ref"}),"1"))),(0,t.kt)("admonition",d({},{title:"Why yet another query language? Why not SQL?",type:"info"}),(0,t.kt)("p",{parentName:"admonition"},'We often get asked "why did you create yet another query language?" or "why are\nyou not using SQL?". This is a valid question and we answer it in detail in our\n',(0,t.kt)("a",d({parentName:"p"},{href:"/faqs"}),"FAQs"),".")),(0,t.kt)("p",null,'Even though TQL is a transformation language, we call it a "query language" to\nallude to the outcome of getting the data in the desired form. The language\nis geared towards working with richly typed, structured data across multiple\nschemas.'),(0,t.kt)("p",null,"We put emphasis on the following principles when designing the language:"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},"Use natural language keywords where possible, e.g., verbs to convey actions."),(0,t.kt)("li",{parentName:"ol"},"Lean on operator names that are familiar to Unix and Powershell users"),(0,t.kt)("li",{parentName:"ol"},"Avoid gratuitous syntax elements like brackets, braces, quotes, or\npunctuations."),(0,t.kt)("li",{parentName:"ol"},"Exploit symmetries for an intuitive learning experience, e.g., ",(0,t.kt)("inlineCode",{parentName:"li"},"from")," and\n",(0,t.kt)("inlineCode",{parentName:"li"},"to")," have their duals ",(0,t.kt)("inlineCode",{parentName:"li"},"read")," and ",(0,t.kt)("inlineCode",{parentName:"li"},"write"),".")),(0,t.kt)("p",null,"Let's dive into an example:"),(0,t.kt)("p",null,(0,t.kt)("figure",d({parentName:"p"},{className:"markdown-inline-svg"}),"\n  ",(0,t.kt)("svg",d({parentName:"figure"},{viewBox:"0 0 742.392 65.1",role:"img","aria-hidden":"true"}),"eyJ2ZXJzaW9uIjoiMSIsImVuY29kaW5nIjoiYnN0cmluZyIsImNvbXByZXNzZWQiOnRydWUsImVuY29kZWQiOiJ4nO1a23LaSFx1MDAxMH33V1Dsq1HmfslbjK/Jhlx1MDAxMIgv2a3UllxmMshcYkmRXHUwMDA0xknl37dHXHUwMDBlllx1MDAxMFx1MDAxMCBliDZrlW3MTE93a6b7zJmWvu5VKtXkPnSqLytVZ9KxPbdcdTAwMWLZd9V90z52othccnzoXCLp9zhcdTAwMThFnVSynyRh/PLFXHUwMDBiO1xmrWyU1Vx0hlx1MDAwZiNcdTAwMWTPXHUwMDE5On5cdTAwMTKD7N/wvVL5mv7N2fJcXN9JZdPWzFx1MDAxMley2NpcYvzUKlx1MDAxNlx1MDAxYVx0zlx1MDAxNEWPXHUwMDEybnxcYqZcdTAwMTKnXHUwMDBi3Te2XHUwMDE3O1mPaaqeNlx1MDAxYfWjVvswrsmRdpM33eZRLcjM3rie107uvYd7sjv9UZRzKk6iYOBcXLrdpG+sXHUwMDE32lx1MDAxZsfFXHUwMDAx3H02KlxuRr2+78TxzJggtDtucm/aUOa+7fdSXHUwMDFkWcvESJCciFx1MDAxOUIwQ1x1MDAwNev1wFx1MDAwYlwiY/1cdTAwMGaUXpn9a7sz6IFcdTAwMTN+N5PpOF3WtTOZu+k9IWxcdTAwMTFKtCRcZlOKMMvmvu+4vX5cdTAwMDIyXGZZWklCmGJcdTAwMTJJRVnmiZPOO6ZcdTAwMTg6tCaZj8Z+eNZNl/9Tfmb87veZ8Ueel7lsOo5yIZONXHUwMDE5hV37YXmxUFQyoVx1MDAwNdO5XHUwMDEwgTBcdTAwMWFcdTAwMTTVeUFnsCBcIuLEjpJcdTAwMDPX77p+rzjE8btLejw7TurBcOgm4EYzcP2kKJHqfVx1MDAxNUXBXd+xu1x1MDAwYjQv7Vx1MDAwYo26LEfMlf1XyaJcIv3y+P+n/dXSbKW4Kqw8m1x1MDAxZF5Y81Xallx1MDAwN5K5SEFcdTAwMWTe1LlcdTAwMTltXHUwMDA1ZYhsNDO5idnLf37b31xmp5Smy3CKMcJcdTAwMTlCiqxcclOXk0nQTDo354PzO/z2cjw8aYzLXHUwMDBmU1Ihi1x1MDAwMlhpXHLAzDjJkGG7oEW1JZTUXGJRpDmTXFwsXHUwMDAyrTmUkpxohahQu0EphFx1MDAxMX9GqTlpgi0pXHUwMDExxSZHXGKFJaT7s72YK4Yhu6XSYrPMXo15xchcdTAwMTFkdryF8tdKlFpcdTAwMWWIa03FVmBcdNJwXHUwMDE5LFx1MDAxMYZcdTAwMDRFXHUwMDEyZemyXG6WXHUwMDBlXHUwMDE1jW7xyLuOWv94XHIvXHUwMDFhXvC4U3pYgqiyiIBcdTAwMDAjgnCai7ApLFx1MDAxMVx1MDAwYvZcdTAwMTWMieAgm+czT1x0Ujk2lKFcdTAwMTK2XHUwMDEwIVRhTlx1MDAxNTfxP1x1MDAwN1JaXGJNXHUwMDA1XHUwMDEzmVPPIPVcdTAwMGJAakacPDX1ysWwuVx1MDAwMEV0/lJipYKCg8CWJENcdTAwMDSiR1x1MDAxMcY5WqlAK0tcdTAwMTFcdTAwMDHkSShMXHUwMDE0fOTV1YpRitRWoSxxJslcIigjXHUwMDFhXHUwMDE3W1x1MDAxZk+CwL5cdTAwMDDONFufYrVfh6rRXHUwMDFihdiN3stzp1x1MDAwNoyLNcuPZVRZXHUwMDAywVIoolxyZmXZ+oBl3OxZnEssXHTCXHUwMDFh0YJnT4NlTFhKZpZcdTAwMWbhjMyTLMZcdTAwMDB9VelJ1k3gJ233y0NRYab12Fx1MDAxZbqemdtsKtP4hPlcdTAwMDHcyceEaX7luT1cdTAwMTOq1Vx1MDAwZbjrRDNRnLhcdTAwMWTbe1x1MDAxNEiCMOvtgCFcdTAwMWI28OhsXHUwMDBlx4LI7bm+7X1YbNRs+6fT+Ye057lcdTAwMDWNnZRcdTAwMTSYW/op6sC5Xn6iYVx1MDAxNCuJ1k+32882x31Vf/exiWJ2zo79i7s/S59ujOyq8LKQXHUwMDFlXHUwMDEwi0pcdTAwMDFkkiMgXHUwMDAxKJfs0/RcdTAwMDJ4V0gptpv0UoTiZ3owL421RVxyzHFcdEdcdTAwMTXYc/lM7YQwXHUwMDBiY8VcdTAwMDVcdTAwMTdKICZXb541ZGlcdTAwMDTHXGJcbtSPXHUwMDAxeM5cdTAwMTQ7ijFB+cq9XVtIQ3xcdTAwMDHXXHUwMDE3XFxjwX6kbqU2jFx1MDAwYupmz2uz6shcdTAwMWF1opmprklcdTAwMGJcdTAwMTCcXHUwMDExSbk0YI6IU1vt03bYhlx1MDAxMsXWKfpRgD/gSlx1MDAxYtRzPlx1MDAxZTj2wDt2m33WiFx1MDAwZvGbg8br+3b50Y9RS1JmOCiC36zIukOuoVx1MDAxOETUWlxcXHUwMDAznDCX1Nmy/D5cXCNcdTAwMWVccod2ZEbtmG8sMLxVzsGWZ1x1MDAxZEdcdTAwMDA8iGd73cpyhVxmu+rNNUru673xRetqcHHSdkufdYCqs1xiW2Qg2OJcdTAwMTj2XHUwMDA3oVx0lVrzgmfb5CPFgthcdTAwMWNcdTAwMWahafGr9Cn4m/OR/1q5YlOLJWJcdFx1MDAxNKli61x1MDAxNK8gPlx1MDAwNWVig/Jq/fSy9fn1rV8/XHUwMDFiTHTrquW33o8+lFx1MDAxZa8kXHUwMDAyQFx1MDAwMjpcdTAwMDRcXJVKgKdfUpKg0lqLJFBcdTAwMDYnOFx1MDAwMWFTboD6KY6Q4sqO6cGsza0yXHUwMDAziYqtj9U/zc1Eq1xyqn/+YPLXSSNcdTAwMWF7Z82aJ47HJ+TL6L70qcbpSmqglFx1MDAwMUZD3XOPQXfOXGayhZiScyYpuM+en2P8f4jBXHUwMDFjXVxcXVxy+I2IXHUwMDAx58XWKVxcgWtKXHUwMDEyydd/a+3owr16c93Q7aNY1Z3kbVx1MDAwZqtBWH60UtiihGOFpJJcXNNMTVx0iVx1MDAwMdGSSqTLfnL5ueJBXHUwMDEwJTuvXHUwMDFizNh8XG5isDTT5NJcdTAwMTevXGLTXHUwMDFjllx1MDAxNGe7zqpMe3/jNz9etFx1MDAwNl15Op60wmuS3Prd0mdcdTAwMWHBysL5R3LTXHUwMDA020pKcZFfwFx1MDAxZj79w+ZtMKF39FwiKPzQfMhtNamcSfhcdTAwMGLSqmh1m4nF+NI3r5lMXHUwMDFmaMj1a3FD/zjCndbNh3f1k6tRp/U2ukaHpU8shTTMKVx1MDAxNVx1MDAxYSOJXHUwMDA1kcU3XHUwMDFhYVx1MDAwYiNEMTj6XCLN8JZKcYhaeM2EQ0IpnC85bHtcdTAwMTNcdTAwMTP5SNzu0/bITZyKZVWSYNdJt9D0Rpm39518Vu0wbCcwj9D3kIfVsevcXHUwMDFkLFxih5v0qu59z1uTIY5Zkq/f9r79XHUwMDBilNuXfCJ9",(0,t.kt)("defs",{parentName:"svg"},(0,t.kt)("style",{parentName:"defs"},'@font-face{font-family:"Virgil";src:url(https://excalidraw.com/Virgil.woff2)}@font-face{font-family:"Cascadia";src:url(https://excalidraw.com/Cascadia.woff2)}')),(0,t.kt)("g",d({parentName:"svg"},{fillRule:"evenodd",strokeLineCap:"round"}),(0,t.kt)("path",d({parentName:"g"},{fill:"none",stroke:"#ced4da",strokeWidth:".5",d:"M11.233 11.446s0 0 0 0m0 0s0 0 0 0m.16 6.3c.94-2.32 3.64-4.11 5.03-6.66m-5.18 6.8c1.42-2.5 3.86-5.11 4.58-5.79m-5.95 10.42c4.11-1.15 7.73-6.09 13.49-11.88m-12.49 13.62c3.02-4.83 7.09-7.75 11.46-12.43m-9.34 16.74c3.31-5.63 9.9-11.22 14.27-17.16m-15.72 17.49c5.65-4.64 10.45-10.73 15.78-16.14m-14.37 21.62c5.2-7.08 13.68-14.09 18.79-22.03m-19.58 23.49c7.65-8.99 15.34-18.36 20.07-24.32m-19.8 29.39c6.64-6.72 15.33-17.25 24.74-27.92m-25.41 28.43c7.23-10.09 15.43-18.64 25.33-29.57m-26.43 36.53c10.68-14.68 24.13-27.09 32.09-35.29m-31.17 34.54c8.08-9.93 15.81-18.63 30.83-34.87m-29.03 41.02c8.97-11.27 18.82-23.25 34.52-42.12m-35.07 40.93c8.96-12.21 18.02-22.19 35.03-40.27m-29.92 41.81c5.68-8.73 13.47-18.14 35.35-43.83m-36.09 41.96c13.98-14.45 26.39-28.47 35.56-40.75m-27.83 39.77c7.15-9.89 21.27-23.73 35.5-38.45m-36.35 38.9c10.82-12.84 21.29-24.62 35.14-39.35m-32.74 38.45c17.12-14.32 28.04-30.47 38.94-38.43m-37.1 40.32c8.4-10.4 17.73-19.54 35.01-41.1m-29.4 42.78c11.92-15.74 25.69-32.53 36.63-43.23m-37.18 41.09c12.04-11.19 22.75-25.2 34.95-39.49m-29.52 38.14c8.18-6.83 13.66-14.67 34.54-39.34m-33.5 40.94c10.89-12.45 21-26.33 35.23-40.55m-33.16 39.84c16.45-11.15 28.57-26.46 37.64-40.21m-35.56 40.93c12.73-14.25 26.01-28.75 34.61-40.81m-29.72 39.07c7.18-5.87 15.07-13.7 37.24-37.56m-37.27 39.16c11.37-12.81 22.4-23.91 35.69-40.5m-28.6 43c6.73-12.44 19.22-25.44 34.28-41.13m-34.74 39.12c8.1-10.34 17.82-22.27 34.22-41.43m-28.2 40.69c11.26-16.09 25.8-28.44 32.12-38.37m-33.6 39.8c11.6-14.27 23.78-27.88 33.84-40.58m-30.65 41.85c9.78-9.94 16.01-15.49 34.39-37.24m-33.31 35.08c8.37-8.5 16.28-17.66 31.99-34.96m-25.33 37.14c8.24-11.5 19.04-23.9 29-34.72m-29.7 32.64c10.5-11.72 19.91-22.15 29.88-34.11m-25.68 32.64c8.56-6.18 18.95-16.73 28.96-28.03m-28.28 29.76c8.35-8.93 15.52-18.4 27.32-31.29m-21.42 31.87c6.74-5.3 11-14.43 24.9-28.39m-25.23 27.52c8.3-8.37 16.62-18.19 25.21-27.26m-18.71 27.73c2.47-5.7 8.99-14.11 22.43-26.03m-23.32 26.37c8.1-8.47 15.4-18.94 20.98-25.3m-15.59 26.57c5.34-9.79 14.8-15.63 20.21-23.89m-20.44 22.27c5-4.76 8.25-10.38 20.58-22.9"})),(0,t.kt)("path",d({parentName:"g"},{fill:"none",stroke:"#000",d:"M10.373 12.646c2.31 8.36-.87 19.39.15 36.95m1.62-38.44c-1.61 8.73-.27 17.76-.76 39.55m.72.83c31.9.28 62.62-.32 79.28 2.18m-81.04-1.29c21.4-.46 41.58-.45 81.19.75m.4-.91c7.65-5.81 14.17-12.99 20.65-18.37m-20.22 18.8c5.82-6.79 11.34-11.62 20.75-20.46m.87 2.07c-9.57-9.66-16.95-16.4-23.05-23.19m22.13 20.64c-7.26-5.51-14.32-13.49-21.59-19.61m.84 1.23c-20.27.36-41.34-2.46-82.31-2.74m83.17 1.84c-20.76-.7-38.36.06-81.06-1.69m-.88.66s0 0 0 0m0 0s0 0 0 0"}))),(0,t.kt)("g",d({parentName:"svg"},{fillRule:"evenodd",strokeLineCap:"round"}),(0,t.kt)("path",d({parentName:"g"},{fill:"none",stroke:"#ced4da",strokeWidth:".5",d:"M591.545 11.446s0 0 0 0m0 0s0 0 0 0m2.82 2.9c.93-.56 1.24-1.32 2.05-2.35m-1.94 2.08c.67-.65 1.33-1.54 1.96-2.39m.47 4.67c2.6-1.76 4.56-2.72 5.45-4.87m-4.89 5.18c1.28-1.49 3.14-3.08 4.42-5.37m-.95 7.89c.86-.24 1.3-2.74 7.01-7.78m-8.11 8.48c2.53-2.56 4.24-5.32 6.84-7.61m-4.69 9.89c1.94-1.89 6.59-5.01 11.06-10m-9.99 10.31c2.5-3.1 5.47-6.15 9.41-11.73m-4.87 15.83c2.78-5.8 9.52-11.13 10.9-15.8m-12.85 14.18c3.66-3.36 6.59-7.07 12.95-13.04m-8.15 15.6c3.73-3.59 6.44-9.11 13.68-15.35m-15.76 16.33c4.18-5.76 9.75-10.25 14.29-17.12m-29.66 41.08s0 0 0 0m0 0s0 0 0 0m18.61-19.52c6.74-7.87 9.69-14.04 16.59-20.23m-17.46 18.26c6.08-5.5 10.69-9.47 17.72-19.63m-30.99 39.77c15.46-16.09 28.13-29.95 35.72-38.77m-35.38 41.39c12.67-14.9 23.53-30.24 36.44-41.87m-29.13 39.19c8.43-9.27 20.79-21.27 34.18-40.85m-35.8 42.69c8.75-10.87 16.64-18.78 35.16-41.68m-32.02 40.16c13.04-12.16 23.08-21.85 37.49-38.66m-35.88 39.28c7.45-7.14 16.85-17.55 37.35-39.94m-31.23 39.66c7.09-8.61 16.23-20.52 36.57-38.2m-36.34 39.58c11.11-12.64 19.93-25.63 34.36-41.88m-30.64 39.76c14.18-11.92 22.92-25.07 36.57-40.52m-35.82 41.93c10.44-13.8 23.18-26.01 36.32-40.24m-30.99 40.11c11.55-11.1 20.85-26.37 34.39-41.65m-33.88 42.08c13.57-15.48 25.8-29.8 35.57-41.25m-30.3 40.46c8.82-8.85 20.16-22.43 37.19-40.64m-37 40.71c10.08-10.7 18.35-20.86 35.22-40.63m-30.46 41.07c11.4-14.26 26.01-29.43 35.88-39.47m-35.6 38.92c13.49-16.08 28.3-32.41 34.65-39.65m-29.68 39.37c9.19-11.14 19.1-19 35.62-39.23m-36.01 39.74c13.83-12.63 25.77-26.23 35.96-41m-28.98 40.28c13.48-13.92 26.59-29.72 33.3-39.91m-33.45 41.61c12.43-15.53 24.6-29.99 35.49-40.95m-30.72 38.88c7.27-6.33 15.72-17.87 36.09-40.57m-36.12 41.9c6.43-9.14 15.37-17.13 36.37-41.23m-31.09 40.76c14.09-17.53 26.02-29.86 34.9-39.21m-34.12 40.39c6.92-10.79 15.68-19.93 33.97-41.05m-28.62 42.61c10.09-14.49 19.32-25.95 34.87-44.89m-35.43 42.81c13.41-16.66 27.65-31.74 36.37-41.18m-33.29 41.49c8.01-6.7 18.35-17.64 37.57-42.37m-35.66 43.01c8.93-11.5 18.13-21.7 34.6-42.57m-27.82 43.46c6.62-11.25 16.86-24.13 35.55-43.69m-38.06 42.06c7.81-8.96 14.07-16.59 37.15-39.96m-32.67 41.73c13.83-19.65 28.63-32.68 36.27-44.15m-34.98 41.71c11.52-11.56 21.85-23.16 35.96-39.87m-32.01 41.54c10.25-10.89 22.58-23.84 35.68-42.74m-34.89 42.32c7.74-9.77 15.76-19.52 35.9-40.99m-31.51 42.49c10.68-11.11 19-21.17 35.9-41.53m-33.65 39.74c12.41-15.47 25.88-30.53 34.58-41.58m-30.14 40.24c11.98-13.18 22.87-24.36 34.86-41.54m-33.57 42.69c5.89-9.01 14.11-17.93 33.84-41.35m-28.71 43.02c11.26-13.17 18.95-26.7 35.39-41.28m-36.05 38.84c6.59-7.55 14.57-15.81 35.01-40.06m-31.07 38.66c12.42-8.82 22.64-24.32 30.78-32.77m-28.61 34.24c4.71-7.8 11.09-14.32 28.3-33.4m-22.54 35.04c5.54-8.44 11.87-15.27 22.46-29.82m-24.09 29.18c7.99-8.49 15.9-18.05 24.61-27.39m-17.72 26.9c5.79-8.14 14.22-16.04 18.31-19.71m-20.43 19.36c5.09-3.91 9.68-8.76 19.77-20.02m-13.7 20.05c4.67-3.84 9.41-11.81 11.87-15.47m-11.43 15.6c3.02-4.89 7.76-7.66 11.74-15.51m-5.86 14.67c3.28-3.56 5.25-5.14 6.53-7.9m-7.66 8.84c3.02-3.29 5.3-6.4 7.97-9.39"})),(0,t.kt)("path",d({parentName:"g"},{fill:"none",stroke:"#000",d:"M591.595 10.286c4.08 7.89 10.83 13.16 22.7 21.75m-23.44-20.7c5.27 3.94 11.45 9.72 23.12 20.99m.66.52c-7.62 6.95-16.2 12.96-23.14 18.08m21.95-18.52c-9.58 6.86-17.05 14.98-21.29 18.19m.7-1.15c30.31-.01 59.89 2.01 136.61 3.15m-138.48-.61c31.86.4 63.99-.22 139.69-.57m-.59-1.96c2.2-6.12.48-15.74 2.31-37.72m-1.86 40.26c-.05-13.66.98-26.07 1.4-39.65m-2.66.47c-36.47-4.17-74.8-.94-137.36-2.41m139.25.95c-51.97.57-102.49-.26-140.03.87m.41-.78s0 0 0 0m0 0s0 0 0 0"}))),(0,t.kt)("g",d({parentName:"svg"},{fillRule:"evenodd",strokeLineCap:"round"}),(0,t.kt)("path",d({parentName:"g"},{fill:"none",stroke:"#ced4da",strokeWidth:".5",d:"M111.497 13.687s0 0 0 0m0 0s0 0 0 0m2.81 2.42c1.16-1.18 2.39-2.16 2.62-2.71m-2.48 2.9c.95-1.08 1.79-2 2.87-3.08m-1.2 7.21c2.62-2.22 4.78-5.88 6.04-6.89m-4.91 6.53c.81-1.74 1.92-3.35 4.51-6.61m-2.07 7.95c3.8-3.37 5.22-5.82 7.58-9.1m-6.79 9.45c2.63-2.32 5.12-6.99 7.42-8.77m-6.01 10.47c3.21.4 6.88-2.38 11.43-9.25m-11.14 10.64c3.36-2.94 4.93-5.33 10.2-11.89m-8.01 16.36c4.6-6.38 10.74-10.83 12.79-17.84m-10.37 16.14c2.1-3.72 4.11-6.93 11.83-15.22m-10.9 17.12c1.7-2.93 7.98-6.95 16.78-15.8m-15.64 17.17c3.38-4.75 7.09-7.17 13.89-16.61m-29.8 40.42s0 0 0 0m0 0s0 0 0 0m18.79-21.9c7.1-8.41 12.71-14.74 18.65-18.39m-18.54 18.51c5.51-5.85 11.94-14.69 16.73-19.15m-29.7 40.76c13.28-11.98 21.96-25.98 34.98-39.4m-35.14 40.16c7.05-9.75 15.77-20.61 35.31-41.45m-32.42 40.03c15.16-14.38 28.74-31.73 36.19-41.7m-34.54 43.04c13.61-16.27 26.73-31.91 37.06-42.72m-30.08 42.68c10.12-10.87 20.29-23.47 33.86-43.24m-35.33 43.42c13.52-14.94 27.14-31.53 37.51-43.55m-30.91 44.03c7.66-9.03 16.06-17.84 35.54-42.75m-36.23 41.8c9.93-13.7 21.56-26.17 34.66-41.94m-32.07 43.57c16.57-18.27 27.22-30.56 38.38-45.32m-37.28 43.92c15.51-16.6 28.76-31.69 36.62-42.63m-30.91 41.55c8.61-10.68 18.49-22.34 35.31-42.92m-35.42 42.89c14.67-13.37 27.69-29.93 37.77-41.83m-30.11 42.32c6.55-7.84 11.63-18.09 33.46-42.62m-34.48 42.78c13.67-15.95 28.95-32.76 35.19-41.3m-32.16 40.82c12.3-12.19 20.43-22.92 39.75-42.44m-38.26 42.06c13.97-16.17 28.31-30.29 36.25-40.25m-29.89 43.05c7.82-13.68 20.5-25.87 35.34-43.43m-36.47 41.14c14.98-16.21 29.78-32.79 37.06-41.44m-30.96 40.61c7.23-6.37 14.81-16.46 37.13-41.58m-37.72 41.81c8.53-7.93 16.07-18.34 35.99-41.08m-30.35 41.14c11.38-13.92 25.07-31.26 36.27-39.96m-37.57 40.85c14.32-13.73 28.13-30.07 38.14-42.94m-30.88 40.92c11.06-11.74 24.98-28.83 35.02-39.83m-34.81 42.64c6.78-10.95 14.58-19.11 34.21-41.45m-29.03 42.48c9.27-14.89 19.4-25.33 32.56-39.96m-32.89 38.01c8.77-10.71 16.91-20.49 32.35-37.12m-29.46 39.23c11.23-9.57 18.03-18.05 30.4-37.66m-28.69 36.75c8.49-10.25 16.41-19.86 29.49-35.45m-23.43 34.4c6.3-10.04 14.5-20.83 27.1-30.69m-28.86 31.02c5.9-7.35 10.98-13.93 28.17-30.9m-24.07 31.56c11.06-9.07 16.77-15.36 26.81-31.1m-25.82 30.68c7.51-9.16 16.56-16.9 27-28.74m-18.83 27.33c5.19-7.03 11.07-11.32 22.09-26.66m-24.04 28.25c9.07-10.52 16.84-21.39 23.49-26.41m-18.66 24.68c7.44-7.71 15.04-14.32 21.13-21.16m-20.78 22.68c5.89-8.53 13.3-15.16 21.26-23.93m-17.84 24.38c6.59-5.94 11.01-10.47 21.13-19.36m-19.03 19.82c5.78-8.09 11.37-14.14 17.48-20.77"})),(0,t.kt)("path",d({parentName:"g"},{fill:"none",stroke:"#000",d:"M112.067 12.327c4.72 6.43 12.09 14.98 17.9 21.21m-18.68-20.59c4.98 5.45 9.78 10.84 20.31 21.73m-2.01.38c-4.44 4.21-7.68 10.05-17.34 18.11m20.02-20.39c-6.74 5.66-12.3 12.56-20.59 21.75m-.34-.46c31.15-.87 60.27-2 98.72 1.03m-97.89-.68c30.1.24 62.37-.82 98.8-1.32m-.86-.33c8.75-6.51 15.72-11.51 19.61-17.76m-18.38 19.26c4.94-5.66 12.05-10.02 20.46-18.41m-.83.22c-6.74-9.41-10.32-14.98-21.33-22.42m21.1 21.53c-4.73-7.1-10.97-12.99-21.3-23.38m1.65 2.2c-23.91-1.55-50.09 1.22-99.85-.26m99.03-.21c-34.23-.47-67.38 1.04-98.81.25m.04-.1s0 0 0 0m0 0s0 0 0 0"}))),(0,t.kt)("text",d({parentName:"svg"},{x:"23.438",dominantBaseline:"text-before-edge",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(149.841 21.452)"}),"where"),(0,t.kt)("g",d({parentName:"svg"},{fillRule:"evenodd",strokeLineCap:"round"}),(0,t.kt)("path",d({parentName:"g"},{fill:"none",stroke:"#ced4da",strokeWidth:".5",d:"M231.233 11.446s0 0 0 0m0 0s0 0 0 0m2.33 3.13c.77-.42.91-.86 2.9-2.37m-2.91 2.62c.81-.87 2.03-2.15 2.8-3.04m.2 6.41c2.17-3.65 3.88-5.2 4.8-6.85m-4.8 6.15c1.15-1.79 2.34-3.4 5.57-5.89m-2.38 8.22c.61-1.46 2.86-4.62 8.18-6.99m-8.72 8.56c.93-2.91 3.01-4.44 7.21-9.54m-5.12 14.04c5.02-3.93 7.38-8.51 10.15-13.21m-9.68 11.08c1.95-2.76 4.68-6.53 10.78-13.15m-9.79 16.84c8.06-6.5 10.73-14.44 13.09-14.54m-11.81 13.98c1.92-3.32 5.36-6.63 12.6-14.41m-11.9 16.97c6.58-4.18 10.13-7.02 16.95-16.21m-14.29 16.15c5.5-4.59 9.26-10.77 16.54-17.95m-33.22 43.28s0 0 0 0m0 0s0 0 0 0m19.07-22.52c3.01-3.32 9.27-7.29 19.36-18.88m-20.09 21.09c7.49-10.06 14.27-17.16 19.43-23.54m-30.41 44.67c4.8-9.68 14.91-19.08 34.35-46.06m-37.04 45.13c12.38-15.54 25.51-28.7 39.21-43.67m-34.07 44.29c9.09-11.55 17.28-21.98 39.83-42.65m-39.26 42.33c12.31-14.75 26.61-30.5 37.63-42.96m-30.8 44.29c10.66-13.59 21.14-30 37.69-44.79m-38.15 43.42c10.64-13.38 21.2-25.59 36.03-43.77m-30.39 44.56c12.51-14.05 23.22-28.87 36.46-44.52m-38.47 42.98c12.08-13.32 23.4-26.98 38.91-42.85m-31.24 41.5c8.07-9.13 19.69-24.16 37.7-42.88m-38.13 43.97c14.76-16.46 28.36-34.02 36.24-42.41m-33.28 42.63c12.76-14.68 23.85-28.85 39.91-41.89m-37.68 43.31c10.55-13.07 20.59-24.95 35.51-44.21m-30.05 43.03c6.39-12.1 15.73-21.93 38.64-44.58m-39.89 45.3c13.71-15.28 26.26-30.94 37.7-43.47m-31.65 41.87c8.16-10.23 21.11-22.46 38.4-42.99m-39.17 43.19c15.45-14.95 29.39-31.87 37.3-42.92m-32.79 42.89c15-15.41 25.54-27.74 40.74-42.14m-39.12 42.63c9.92-10.69 19.53-21.94 36.29-42.81m-31.72 44.93c12.37-15.49 26.8-31.74 36.2-44.08m-36.01 43.23c9.75-12.53 20.74-25.08 38.15-42.86m-34.28 42.35c7.92-10.59 18.13-18.34 40.29-43.82m-38.28 43.97c9.4-10.73 17.33-20.9 37.89-44.31m-34.91 45.67c12.73-15.54 26.53-30.78 37.54-45.41m-36.01 42.81c13.64-15.7 27.67-31.74 37.96-41.9m-32.59 41.9c11.66-12.73 26.72-29.96 34.22-38.09m-33.24 38.3c11.95-14.41 26.25-30.21 33.09-40.07m-26.64 41.43c11.37-13.68 20.48-29.39 28.78-36.43m-29.82 35.26c10.19-12.58 19.1-23.6 30.67-35.11m-27.12 34.5c6.07-8.49 14.58-13.75 28.11-30.71m-27.26 30.62c9.49-11.36 19.75-20.81 29.07-33.5m-22.15 34.15c4.19-4.31 9.28-13.83 24.73-28.95m-27.33 28.99c7.8-6.02 14.43-13.47 26.75-29.94m-19.02 28.71c9.11-8.15 18-21.25 24.17-24.19m-24.99 25.43c5.03-7.8 12.05-13.42 23.69-26.69m-18.62 25.66c7.72-6.54 13.87-13.66 20.97-22.45m-21.89 22.87c9.35-8.86 18.23-18.95 21.37-23.48m-16.08 24.77c4.02-3.87 10.78-8.78 18.67-22.78m-17.87 21.73c6.62-7.47 12.33-13.56 18.8-19.55"})),(0,t.kt)("path",d({parentName:"g"},{fill:"none",stroke:"#000",d:"M229.693 9.996c8.24 11.34 15.05 20.12 19.94 23.79m-18.53-22.56c6.8 9.33 14.4 19.1 19.28 23.96m-.44.49c-2.07 4.2-7.4 7.26-20.11 18.04m20.28-18.92c-6.04 6.74-11.49 12.48-19.77 19.34m.74.01c37-1.33 74 .9 99.54-1.15m-101.04 1.53c28.11-1.79 54.91-2.02 101.23-1.46m-.25.02c7.76-6 13.37-14.37 19.37-19.18m-20.43 19.95c6.13-3.83 10.35-8.45 20.71-20.51m-1.16-1.3c-2.4-4.89-9.36-8.86-17.95-21.71m19.82 23.19a683.49 683.49 0 0 1-20.2-22.68m1.93-.69c-39.97 3.19-78.4 2.02-100.6.37m98.59.27c-36.63 2.03-73.8 1.62-98.74 1.42m-.67-.77s0 0 0 0m0 0s0 0 0 0"}))),(0,t.kt)("text",d({parentName:"svg"},{x:"42.188",dominantBaseline:"text-before-edge",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(254.968 21.452)"}),"summarize"),(0,t.kt)("g",d({parentName:"svg"},{fillRule:"evenodd",strokeLineCap:"round"}),(0,t.kt)("path",d({parentName:"g"},{fill:"none",stroke:"#ced4da",strokeWidth:".5",d:"M470.324 12.957s0 0 0 0m0 0s0 0 0 0m3.16 2.57c.19-.42 1.02-.76 1.96-2.31m-2.21 2.49c.82-.85 1.37-1.47 2.16-2.53m.49 5.07c1.92-1.82 3.44-4.14 4.73-4.58m-5.11 5.15c1.91-2.44 4.6-4.42 5.29-5.97m-2.7 8.6c1.73-2.53 4.79-2.55 6.78-7.1m-6.47 6.71c1.89-1.5 2.87-2.89 7.52-8.15m-2.78 12.58c1.14-3.06 1.63-4.77 7.58-14.08m-9.39 12.71c2.8-3.78 6.05-7.04 10.98-11.85m-6.2 14.39c2.16-6.8 6.51-9.42 8.72-11.8m-10.44 11.27c4.14-4.15 6.78-6.84 11.39-13.14m-7.61 16.19c3.69-2.75 4.59-4.95 14.55-15.21m-14.66 16.97c2.74-5.02 8.63-10.72 13.65-17.72m-29.94 40.75s0 0 0 0m0 0s0 0 0 0m17.79-20.93c6.33-4 10.48-8.74 19.42-18.76m-18.67 17.72c3.39-3.33 8.22-9.34 16.16-18.31m-31.48 41.86c11.12-11.21 19.82-25.97 38.5-41.16m-37.43 39.08c12.77-12.37 25.26-26.42 36.17-41.63m-30.93 41.24c8.63-10.84 21.33-19.54 37.36-40.55m-37.12 41.79c14.18-15.58 26.07-29.08 36.45-40.3m-30.47 42.26c9.55-15.92 23.08-27.66 35.51-43.08m-34.84 40.38c11.98-14.27 22.12-27.27 35.49-40.21m-28.75 41.51c11.25-15.88 23.59-31 33.86-40.8m-36.19 39.68c11.34-13.08 24.42-26.48 35.63-41.58m-31.76 43.66c14.58-18.44 29.87-33.84 39.56-44.75m-37.72 43.43c9.72-13.31 21.49-25.8 35.99-42.15m-31.31 39.94c9.02-11.39 21.39-19.89 35.53-40.93m-33.92 41.77c8.02-10.31 14.75-19.49 33.94-39.14m-31.55 38.67c10.01-10.78 23.45-22.9 38.92-38.4m-37.15 40.82c9.05-11.69 19.33-23.16 35.57-43.3m-31.44 41.76c13.06-12.28 22.71-23.48 38.63-41.17m-36.74 42.06c7.31-8.87 15.06-19.27 35.25-40.86m-29.28 39.18c12.27-13.88 28.46-29.99 33.83-40.29m-34.93 41.94c8.33-9.87 15.85-19.82 36.1-41.55m-31.2 41.48c10.56-12.04 16.55-20.36 35.41-41.77m-35.85 41.29c8.17-9.62 16.98-17.08 35.45-40.62m-31.64 40.32c11.09-8.48 21.08-19.86 36.54-42.67m-33.61 42.9c9.43-12.32 19.63-23.3 35.43-40.78m-31.89 40.88c9.18-9.83 14.58-17.85 38.11-39m-37.17 38.96c14.01-15.67 28.62-31.61 36.4-40.28m-32.57 42.46c14.86-16.84 26.07-29.78 36.01-38.02m-35.21 36.82c9.49-10.46 17.36-21.77 34.18-39.1m-27.48 39.91c8.23-15.22 20.63-26.92 30.4-35.78m-30.81 34.02c8.84-11.22 20.68-23.38 29.39-34.45m-26.01 33.19c10.37-7.1 16.31-15.48 30.48-32.84m-29.79 33.56c9.63-8.44 18.79-20.64 28.19-32.62m-22.42 35.6c7.53-12.56 16.5-19.98 24.45-32.95m-24.11 32.03c8.44-9.14 15.19-18.93 26.23-29.54m-19.67 29.44c5.29-8.99 11.91-12.59 20.84-28.14m-22.77 26.25c9.31-8.37 17.73-18.02 23.98-25.98m-17.11 26.94c3.98-4.53 8.69-10.36 21.84-24.21m-22.59 24.2c7.05-7.65 12.43-14.75 20.11-24.91"})),(0,t.kt)("path",d({parentName:"g"},{fill:"none",stroke:"#000",d:"M469.464 13.367c3.81 4.22 9.05 7.23 22.22 19.18m-21.76-19.49c5 5.47 9.26 8.63 19.52 18.94m2.67 1.26c-8.46 6.55-17.08 14.34-21.73 21.24m19.44-20.91c-3.6 4.24-7.95 7.91-18.69 19.29m-1.15-.73c30.78 2.06 64.4-.18 99.81 2.15m-99.45-1.7c36.71-.94 74.99-1.1 100.79-.33m-.58 1.49c3.05-5.76 9.52-10.81 18.37-21.12m-17.92 21.24c6.95-7.19 13.7-15.73 18.94-21.18m1.65-.65c-8.95-5.4-15.51-14.62-21.54-20.6m20.85 21.86c-8.04-7.73-14.14-13.93-19.74-19.97m-1.04.85c-36.78-1.82-72.41-2.8-98.36-1.34m98.52.62c-38.73-1.06-76.75-.39-99.3-.95m-.66.44s0 0 0 0m0 0s0 0 0 0"}))),(0,t.kt)("text",d({parentName:"svg"},{x:"18.75",dominantBaseline:"text-before-edge",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(512.811 21.452)"}),"head"),(0,t.kt)("g",d({parentName:"svg"},{fillRule:"evenodd",strokeLineCap:"round"}),(0,t.kt)("path",d({parentName:"g"},{fill:"none",stroke:"#ced4da",strokeWidth:".5",d:"M350.324 13.332s0 0 0 0m0 0s0 0 0 0m2.86 2.7c.8-.31 1.22-1.25 2.11-2.4m-1.82 2.27c.57-.66 1.15-1.46 1.98-2.22m.29 5.54c1.5-2.27 3.73-3.85 5.96-6.05m-6.37 5.96c2.29-1.47 3.51-3.61 5.32-5.58m-2.39 7.54c3.05.05 2.57-1.65 6.65-7.01m-6.07 7.63c2.38-2.88 5.61-6.62 6.55-8.07m-3.09 11.53c2.33-4.03 6.33-11.19 9.09-11.17m-10.04 9.92c2.93-2.8 6.06-5.55 10.92-11.02m-8.69 12.65c3.07-1.26 6.27-4.69 13.09-11.33m-11.71 12.2c1.81-1.58 4.51-5.65 10.97-13.7m-7.69 18c1.31-2.71 7.22-8.05 13.86-16.16m-15.62 16.72c4.58-4.5 6.58-8.04 15.24-17.28m-29.95 40.34s0 0 0 0m0 0s0 0 0 0m19.73-19.91c3.67-4.15 8.35-9.23 14.39-20.91m-16.2 20.26c7.32-8.76 12.74-14.97 17.24-19.34m-30.34 41.84c12.24-18.61 27.25-30.21 36.71-45.05m-36.54 43.75c13-13.99 23.43-28.28 35.68-42.2m-31.9 40.54c15.3-11.29 26.13-26.21 38.38-40.27m-35.86 40.59c11.11-12.33 22.71-24.93 34.84-39.62m-31.72 39.82c16.77-15.86 29.45-32.16 37.94-39.74m-35.76 39.6c10.75-13.83 24.79-27.97 35.71-39.98m-30.42 40.51c11.62-14.92 24.17-27.79 35.3-42.48m-36.87 42.33c10.51-10.18 18.39-20.85 37.13-39.99m-31.48 39.01c10.2-9.47 18.83-19.15 36.61-38.54m-37.26 39.83c9.8-10.47 19.85-21.9 36.74-41.92m-31.7 39.79c12.56-8.29 20.47-21.76 35.77-36.93m-33.41 37.99c11.6-14.97 25.79-29.61 34.37-39.47m-31.68 39.92c14.81-13.02 25.01-22.65 36.95-41.71m-36.24 43.2c14.29-16.46 27.87-33.59 36.65-41.9m-28.4 39.52c8.62-9.65 17.49-19.15 32.04-39.88m-34.06 41.69c6.97-9.95 14.9-17 36.44-41.92m-31.64 42.3c11.85-11.22 18.87-22.99 35.21-41.49m-34.62 41.19c9.31-12.27 21.06-24.33 35.33-41.79m-28.5 40.05c10.91-13.98 25.48-30.71 32.36-39.55m-34.09 40.28c15-14.22 26.96-30.59 35.18-41.21m-29.92 43.15c13.72-15.09 23.14-30.67 35.65-42.13m-35.08 40.05c13.8-15.44 27.27-30.69 34.63-41.47m-29.17 41.05c12.23-15.63 29.26-29.22 36.98-40.22m-37.59 41.4c8.73-9.11 17.12-18.13 36.5-41.24m-30.34 40.74c8.26-9.56 19.74-19.41 31.24-36.11m-31.79 37c8.75-12.3 19.49-22.81 33.16-37.03m-30.24 36.34c11.37-10.92 23.4-22.92 33.56-32.85m-32.76 34.15c9.08-9.1 16.57-19.06 31.68-36.58m-24.73 36.52c5.66-7.56 16.04-20.27 28.18-33.94m-28.87 34.06c7.19-9.41 13.17-17.16 28.75-32.63m-24.05 30.82c7.96-6.49 13.92-17.39 26.29-30.2m-25.11 32.15c5.8-9.04 14.16-16.16 24.51-29.64m-18.63 27.29c6.28-3.53 9.3-12.32 23.41-24.64m-23.95 26.47c7.43-8.14 14.53-17.18 21.94-26.87m-16.84 27.38c4.77-6.06 11.39-12.31 20.72-26.05m-20.24 24.79c3.38-4.91 7.59-10.75 20.19-23.8"})),(0,t.kt)("path",d({parentName:"g"},{fill:"none",stroke:"#000",d:"M348.794 13.182c5.07 2.88 11.91 8.8 20.06 19.9m-18.43-18.76c5.2 4.17 10.05 9.14 20.58 18.7m.07-.21c-7.17 6.56-12.73 14.31-22.56 19.62m21.99-18.26c-4.73 4.07-8.41 8.15-19.99 19.54m-1.63 1.03c33.35-1.83 64.13.34 102.89-2.89m-101.98.89c38.07.19 75.45.25 100.07.71m-1.32-.07c6.63-5.31 10.88-10.97 22.95-21.68m-20.87 22.53c5.52-7.63 11.32-13.48 20.26-21.53m-1.24 1.62c-3.8-6.41-8.16-11.04-18.86-19.79m18.66 17.94c-5.16-5.08-9.22-9.5-18.45-18.43m-.93-.65c-22.49-.37-45.44.45-97.99-1.23m98.21 1.27c-22.78 1.18-46.26-.03-99.55-.71m-.41.61s0 0 0 0m0 0s0 0 0 0"}))),(0,t.kt)("text",d({parentName:"svg"},{x:"18.75",dominantBaseline:"text-before-edge",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(392.558 21.452)"}),"sort"),(0,t.kt)("text",d({parentName:"svg"},{x:"28.125",dominantBaseline:"text-before-edge",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(29.42 21.446)"}),"export"),(0,t.kt)("text",d({parentName:"svg"},{x:"51.563",dominantBaseline:"text-before-edge",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(620.487 21.675)"}),"write .. to")))),(0,t.kt)("p",null,"Here is how you write this pipeline in the Tenzir language, with inline comments\ndescribing what each operator does:"),(0,t.kt)("pre",null,(0,t.kt)("code",d({parentName:"pre"},{className:"language-cpp"}),'/* 1. Start pipeline to data at a Tenzir node */\nexport\n/* 2. Filter out a subset of events (predicate gets pushed down) */\n| where #schema == "zeek.weird" && note == "SSL::Invalid_Server_Cert"\n/* 3. Aggregate them by destination IP */\n| summarize count(num) by id.resp_h\n/* 4. Sort by frequency */\n| sort\n/* 5. Take the top-20 items */\n| head 20\n/* 6. Write the output as JSON to standard output */\n| write json to stdout\n')),(0,t.kt)("p",null,"If you are curious why we created our own language as opposed to using SQL,\nplease consult our ",(0,t.kt)("a",d({parentName:"p"},{href:"../faqs"}),"FAQs"),"."),(0,t.kt)("div",d({},{className:"footnotes"}),(0,t.kt)("hr",{parentName:"div"}),(0,t.kt)("ol",{parentName:"div"},(0,t.kt)("li",d({parentName:"ol"},{id:"fn-1"}),"We pronounce it ",(0,t.kt)("em",{parentName:"li"},"teaquel"),".",(0,t.kt)("a",d({parentName:"li"},{href:"#fnref-1",className:"footnote-backref"}),"\u21a9")))))}A.isMDXComponent=!0}}]);