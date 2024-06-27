"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[69658],{3905:(e,t,c)=>{c.d(t,{Zo:()=>o,kt:()=>s});var a=c(67294);function n(e,t,c){return t in e?Object.defineProperty(e,t,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[t]=c,e}function r(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,a)}return c}function m(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?r(Object(c),!0).forEach((function(t){n(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):r(Object(c)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}function M(e,t){if(null==e)return{};var c,a,n=function(e,t){if(null==e)return{};var c,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)c=r[a],t.indexOf(c)>=0||(n[c]=e[c]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)c=r[a],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(n[c]=e[c])}return n}var i=a.createContext({}),l=function(e){var t=a.useContext(i),c=t;return e&&(c="function"==typeof e?e(t):m(m({},t),e)),c},o=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},w="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},x=a.forwardRef((function(e,t){var c=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,o=M(e,["components","mdxType","originalType","parentName"]),w=l(c),x=n,s=w["".concat(i,".").concat(x)]||w[x]||d[x]||r;return c?a.createElement(s,m(m({ref:t},o),{},{components:c})):a.createElement(s,m({ref:t},o))}));function s(e,t){var c=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=c.length,m=new Array(r);m[0]=x;var M={};for(var i in t)hasOwnProperty.call(t,i)&&(M[i]=t[i]);M.originalType=e,M[w]="string"==typeof e?e:n,m[1]=M;for(var l=2;l<r;l++)m[l]=c[l];return a.createElement.apply(null,m)}return a.createElement.apply(null,c)}x.displayName="MDXCreateElement"},45924:(e,t,c)=>{c.r(t),c.d(t,{assets:()=>D,contentTitle:()=>p,default:()=>X,frontMatter:()=>s,metadata:()=>A,toc:()=>T});var a=c(3905),n=Object.defineProperty,r=Object.defineProperties,m=Object.getOwnPropertyDescriptors,M=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,o=(e,t,c)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:c}):e[t]=c,w=(e,t)=>{for(var c in t||(t={}))i.call(t,c)&&o(e,c,t[c]);if(M)for(var c of M(t))l.call(t,c)&&o(e,c,t[c]);return e},d=(e,t)=>r(e,m(t)),x=(e,t)=>{var c={};for(var a in e)i.call(e,a)&&t.indexOf(a)<0&&(c[a]=e[a]);if(null!=e&&M)for(var a of M(e))t.indexOf(a)<0&&l.call(e,a)&&(c[a]=e[a]);return c};const s={title:"Tenzir v4.13",authors:["dominiklohmann"],date:new Date("2024-05-10T00:00:00.000Z"),tags:["release","maintenance","performance","leef","syslog"],comments:!0},p=void 0,A={permalink:"/blog/tenzir-v4.13",source:"@site/blog/tenzir-v4.13/index.md",title:"Tenzir v4.13",description:"We've just released [Tenzir",date:"2024-05-10T00:00:00.000Z",formattedDate:"May 10, 2024",tags:[{label:"release",permalink:"/blog/tags/release"},{label:"maintenance",permalink:"/blog/tags/maintenance"},{label:"performance",permalink:"/blog/tags/performance"},{label:"leef",permalink:"/blog/tags/leef"},{label:"syslog",permalink:"/blog/tags/syslog"}],readingTime:2.125,hasTruncateMarker:!0,authors:[{name:"Dominik Lohmann",title:"Engineering Manager",url:"https://github.com/dominiklohmann",email:"dominik@tenzir.com",imageURL:"https://github.com/dominiklohmann.png",key:"dominiklohmann"}],frontMatter:{title:"Tenzir v4.13",authors:["dominiklohmann"],date:"2024-05-10T00:00:00.000Z",tags:["release","maintenance","performance","leef","syslog"],comments:!0},prevItem:{title:"Tenzir v4.14",permalink:"/blog/tenzir-v4.14"},nextItem:{title:"Tenzir v4.12",permalink:"/blog/tenzir-v4.12"}},D={authorsImageUrls:[void 0]},T=[],f={toc:T},g="wrapper";function X(e){var t=e,{components:c}=t,n=x(t,["components"]);return(0,a.kt)(g,d(w(w({},f),n),{components:c,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We've just released ",(0,a.kt)("a",w({parentName:"p"},{href:"https://github.com/tenzir/tenzir/releases/tag/v4.13.0"}),"Tenzir\nv4.13"),", a release\nfocusing on stability and incremental improvements over the ",(0,a.kt)("a",w({parentName:"p"},{href:"/blog/tags/release"}),"feature-packed past\nreleases"),"."),(0,a.kt)("p",null,(0,a.kt)("figure",w({parentName:"p"},{className:"markdown-inline-svg"}),"\n  ",(0,a.kt)("svg",w({parentName:"figure"},{viewBox:"0 0 772.383 181.254",role:"img","aria-hidden":"true"}),"eyJ2ZXJzaW9uIjoiMSIsImVuY29kaW5nIjoiYnN0cmluZyIsImNvbXByZXNzZWQiOnRydWUsImVuY29kZWQiOiJ4nO2ca1PiSFx1MDAxN8ffz6eg3LdDtu+XfScgglxu6ohcdTAwMGX6PFtWgFx1MDAwMJGQQFx1MDAxMmR0ar77dlBJgISLXHUwMDBiTJxcdTAwMWSsUul0OifJ+Z1/n+aE758ymVx1MDAwM/9pYFx1MDAxY/yVOTC+NXXLbLn6+OBz0P5ouJ7p2GpcdTAwMTOavPeckduc9Oz6/sD7688/9cFAXHUwMDBi99KaTv9lT8My+obte6rv/9T7TOb75HfkWL7xzZ/0nbSGR5JkvrHq2JODQi5cdTAwMTFBQnI67WHaLeNbMJpcdTAwMGVvwsFMr6CO71x1MDAxYi21pa1bnlx1MDAxMW5cdJpcdTAwMGXq5k2FNHFjRE/0+2+3g7rf80C4e9u0rCv/yZqY6Tnq1MJtnu86PeOr2fK7gUVz7Ul7uc6o07Vccs+b2cdcdTAwMTnoTdN/XG7aXHUwMDAwmLbqdmcyRthcdTAwMTKcIESSa1x1MDAwMDJcdTAwMDEk5FRcdTAwMTA03Vx1MDAxYezPXGLWXHUwMDAwpUxcblx1MDAwMTBcdTAwMTZEzNmVdyzHXHLs+lx1MDAwM1x1MDAxYcFPaFlDb/Y6yjy7Ne3ju7rtXHJ0V92+sN/49Ywx18Kr3zXMTtdcdTAwMGask1pokGdMLjyTXHUwMDE4UVx1MDAwNFF4XHUwMDFlwXFcdTAwMDbl1sQn/lx1MDAwZa+2q/eNcrCHPbKs6CWzW6+XbGZDI9hwXHUwMDE0ca9wqNGgpb/cdcghxVhdXHUwMDExgWRor2XavfnhLKfZi3GUtmP7V+bzxO3YTGtR75tWcNHxtHniyurKnVx1MDAxZFx1MDAxZFx1MDAxNVx1MDAwZmZaXHUwMDBmLbNcdTAwMTM49UFTWWu4M/7um1xum2mHvtlqWZFcdTAwMWLTVIfSTdtwJ5fm4Lg1KoLmXHUwMDE3e8iyV8+5XHUwMDBi+MBcdTAwMGK0XHUwMDFk9nZcXLNj2rpVi7VEnbdRmt4rXHJN2n98jufSNZr+i1x1MDAwZsbAXHQpmG99o1x1MDAxM4HgXHUwMDA3XG5cdTAwMWU6eEgnOl6fzlx1MDAxNaeaTjpcdTAwMTnVOEuiXHUwMDEzI41ti84/2m2jKeVcIplRK6dgkrDtXHUwMDE1SyhcdTAwMDRcdTAwMTJcdTAwMDIqM3bN5euG0MVm3Gwm/Efufnxsnvb78Tl+2Jed9c4zubMvkexcdTAwMTS8QpGQIbiyLmaP8nZ83XWdcWTc1/+2XHUwMDE5TJZilih/XCJcdDBcIiBgXHR80fXxMnpfKl4l1+tccvPuxYNgh9nLy3Ha8Vx1MDAxMlxcY1x1MDAwNMbjxcG+xI8yXHKtqX6IqslcbpfsP6R+V0+e5XR2pH9ccv5ksS/Xd+WnXHUwMDFiflg8luLR75Bk/Zu3ZYtcblx1MDAxOPG++fkpg1JcbixQeG1CQtn6hK4413RcdTAwMTK6VFx1MDAwMOVcdTAwMTZcdTAwMDVwKaHriiDhXFxcdTAwMTDJQUpFMD5Gp0+sYCQ6zMFAkYRcdTAwMTKTOFx1MDAxNI7WR2H49anCr1x1MDAwYuNcbjZq45r5gPP2XHUwMDEzTjlcblx1MDAwNEFNeVx1MDAxNo5cdTAwMTcrti+xQkKD66pcdTAwMTWUSGJcbvh/Sa5q+YtcdTAwMWRplX9+31x1MDAwM6OCXvXOdXl6Xr3N+rcgWatmXGbZS6pcdTAwMDa5XHUwMDE0nCOEZVxmncX16VxccaKppFx1MDAxM4slQsVp2oSKM1x1MDAwZTmGJKVCXHUwMDE1XHUwMDFmn1MoVCBx1obU1cWSxKZVJ1x1MDAxYkzaasi7Rbx/UoaVy+PWWfe+emyknFx1MDAwNVx1MDAwMpesKe4vrVp/TVx1MDAxMVx1MDAwMcg5XHUwMDEwcvfztvTo1MnVeXVHQjU4XHUwMDE1lefD8WU+XHUwMDA3L1x1MDAxZcbN51J2dEqThWrWkm2mVImzSMbVRFx1MDAxZIJYOE/Xh3PFiaZcdTAwMTLOpUKVuoxcblx1MDAwMVx1MDAwMFx1MDAxOOSI7HxcdTAwMDb5PqGKXHUwMDBmz2lcdTAwMTQqmcRcdTAwMDKhRFx1MDAxMOVcdTAwMTFxKdX1+iz0YVFcdTAwMTRcbpdGzb3p54dcdTAwMGZcdTAwMDVy4147aWdcdTAwMDF8vJRKXHUwMDAwIFx0hmjXPKRHqa5cdTAwMGK7yqiaR+OmeUSPa0auPajAjlWtXHUwMDEynCxUM4bsRaeChT8qIcNxQrXBJ9MrTjSVcC5d+ktdRoWh4IiTiCGp0qn46JxCnaI4kVx1MDAwNchcYlx1MDAwNULwuNWFr+uzUMC5XFx96JZcdTAwMWGHR+ePN0yy5vHTTcpZgFx1MDAxOGuUU1x1MDAwMnCsUL2xQGnAXHUwMDAy31x1MDAxOVx1MDAwYpxqjEvJXHUwMDEwpFx1MDAwMoGoXGJNyUBcdTAwMGJkUEJcdTAwMTGHe1hq+FmKXHUwMDE13tM3xco7tq1cIr7jJuiWZbT9JarlO4MkyZoxeV6fYlx1MDAwZTuvUvRdVFwikVg8JYlcdTAwMTRS+VxcXHUwMDFjlPX1oYTy7sril87tw7BS9etcdTAwMThcdTAwMTlcdTAwMDU2SD2UUiPKsSimkkVXgiaZlEBcdTAwMWFHSrxcdTAwMDRRl1xisDmztsekmqVcdTAwMTJKJeGCU8lcdTAwMTlcco+0hElMVdBcdTAwMDBo92qVXHUwMDFlJouO29eVUXslcuGg2+FxmUpiouZMgou4dM5cXFx1MDAxZsiSTcrnpeFVuS/Rw93zwFx1MDAxZpFyLuVAXHUwMDEyKTUogUBcInbd8VUlJaA7njFiXHJSqFRS4Y84Jjg81Fx1MDAxMiSJXG5cIoL8wnWNi0hqmrZfXHUwMDFjZ1x1MDAwZbglaVx1MDAwNHS+NazboEJN3Fx1MDAwNFxiJ2Qhir31Ucxccm5cdTAwMGVcdTAwMDfn1Yth/cu19dC/zXZcdTAwMDbDtGvjclx1MDAxNNnekrd3oVxilbRDSlx0/mVcdTAwMTdZPjaLQe84XHUwMDE2+Vx1MDAxMlx1MDAxNDmSXFxN1WJK/Fx1MDAxYoCsz1wiXHUwMDE0XYN0st2saYtibexcdTAwMWbqpbKdclx1MDAxNpUvL1lI2UtcdTAwMTFxzFx1MDAxMspcInZcdTAwMWNwyoBcdTAwMDBcdTAwMWZzUur5uuvnlFeZdmd+XHUwMDE3w24lbLF0z887/b7pKzMuXHUwMDFj0/bne0zGPVxmqoq7hr5w0mrkxG2DYLjZNaPwv0x4TyZvpv///Xl1b1x1MDAxNOn+Kfp3U2JcdTAwMTFLLEuGkCFIIIgrJmlcdTAwMDC+PrKidy3zp+7pXHUwMDE5tb+w00GxIWrF1Msn/lx1MDAxOMhCqFx1MDAxMk9cItlvZP8zyKpcdTAwMDQzXHRZQiQkgMXVKTfA4frE3n2juaebaq5h2Fxyr/vAXHUwMDA3jZ4/SjmxXHUwMDEzkVx1MDAxNSqBY1xmc/U7vFx1MDAwNpPVIJ5cdTAwMWFkMVx1MDAwZVx1MDAxZabCv5H99ZB9efYoTmYxn29cclx1MDAxZq+jXHUwMDA0KaWVMZ8wNtBcdTAwMDbP/4BT67hRXHUwMDFkXHUwMDFlXHUwMDFl9s69/vVX389cdTAwMWLZtC9cdTAwMTghtFRmsSaBlFx1MDAxNCmfpULQObu2xKxcdTAwMDZVuKBcdTAwMTBBwFx1MDAwNEOAsLhCXHUwMDAwXHUwMDEw5ERcdTAwMDRcdTAwMDXsXHUwMDAwXHUwMDA0MI/Ej1chVmFcdTAwMDVKXG4+aMq6N6zVvYl8OjLH9YHvmnOf0m+X7uR7XHUwMDFkvLKLt3lrXHUwMDAxgCSKNkUq61winMbyv8HTRaWad3eKhl6F3+f0hpfte/V89UPzL/fC/1wi7WRcdTAwMTXswVx1MDAwNlxiIVx1MDAwZlx1MDAxN3d+s74x6zNcdTAwMWJ3J+LZhbu5IdMrXHUwMDFlxkhe8kJcdTAwMWMptyZcImb1uYE2mI37dX00qvY6NeP6sVvOnVx1MDAxYo8np92tgt1ygpu6xyrXbSbQ2yhcdTAwMWVcdTAwMTKTmlxu+bGK+pZ6bVL2iFHiTFx1MDAxNHJcdFx1MDAwMUcorii7gXLrO+xcdTAwMTh4XHUwMDE3l3els3qJ1PP+XHUwMDFk5EUhiml3WIKZXHUwMDA21byAQSpwsFY967FcdTAwMWNrSKhcdTAwMWb60/NHwoiyXHUwMDBloI9ZzvM7f8y8Y8mHwuRvj0BcdTAwMDTioFYzXHUwMDBl2vz60JbL5ZP69fjhht7Lm/uvVf2ZmZVcdTAwMDRou3qzO3KNnz+BXHUwMDE0XHUwMDE0aExcdTAwMDKIsVx1MDAwNFjSyFx1MDAxY/rl25O4puSXQql+cUGSJ5Bg8lpcdTAwMGWtIY2m0Y6RXHUwMDE4laZcbk4kpDJgI1rTM6WYMY1cdTAwMDJlXHUwMDAwJjwof5CL6SNcdTAwMTaQXCLMYbhsXHUwMDE1pXrqR1x1MDAwN3qhUu7d3d95Plx1MDAwMy1klW5LXVR8qyPdXHUwMDEz/EKiyINav+F/e2GgUVwiXHUwMDE4xSo5oDQoRo7urtxE+ShHROVcdTAwMGVKZlx1MDAwNV81XFxcdTAwMTZp6kJcdTAwMDNOJVx1MDAwYlxu2TBcdTAwMGKdI3gt+NSq8aCyTypcdTAwMDOxlERcdTAwMDCVVS1cdTAwMWJccq4zXHUwMDFhxlx1MDAwNFx1MDAwMSWJiFx1MDAwMUpmjFPnKoNcdTAwMGZcdTAwMTOV5WpAXHUwMDA0XHUwMDA12yhyblx1MDAxYTiTikN4ZC4zP9tcdOompYhccpuF9cNmz/RYL2ta7ducrlOvVqxDP+XFzELl1VBcdTAwMDDBJVx1MDAwMExiODfTYUJjQOXegkNcdTAwMDHhvytmTlxmmlxmaniSXHUwMDFjKVwimIp7cYXMyiOhmmcoaVx1MDAwM0SlXG5g4VFcdTAwMWNFXHUwMDA0VPInQ1x1MDAxM3/BmFx1MDAxOSkmQSqThZhQXHUwMDAxgzyWRmqCV9SWmP2B40ZcdTAwMDDZR3nJ/DG3U+2FUfLz3lxcYEhcdTAwMTiKJXqDryZ57JbE2XM5d1x1MDAwNkCjVJaV0qj9+PxcdTAwMWWi0Vxc+zpEh6RuQrSSXGJcdTAwMTXZpVxmSqaYpJGg9rKOzjWBXHUwMDE0z4IqXHUwMDFmXHUwMDA04t9cdTAwMTGt05Zox1x1MDAxMI0h16BcdTAwMWFeaVx1MDAxY2BxXHUwMDBm0y1m3VxcqVx1MDAxYmWQhVx1MDAwZftcdTAwMTMymW2AuX6VV9VcdTAwMTlnXFwj67gtw1VTnYzxXHUwMDE42JjxnUzTNZRlXHUwMDE5S3c7hvt/u6H7za7hfc4ojlxc53HSt902m6ZhN5+SKsVWPo73Xpi3bnZCNPj0XHUwMDFhj1x1MDAwZvTB4MpXXHUwMDAzq60vseHg0TTGudhcXDp4XHUwMDA10XxcdTAwMTJLXHUwMDAyPo3gpn//8enHP7FcdTAwMWFvvyJ9",(0,a.kt)("defs",{parentName:"svg"},(0,a.kt)("style",{parentName:"defs"},'@font-face{font-family:"Virgil";src:url(https://excalidraw.com/Virgil.woff2)}@font-face{font-family:"Cascadia";src:url(https://excalidraw.com/Cascadia.woff2)}@font-face{font-family:"Assistant";src:url(https://app.excalidraw.com//dist/excalidraw-assets/Assistant-Regular.woff2)}')),(0,a.kt)("g",w({parentName:"svg"},{strokeLineCap:"round"}),(0,a.kt)("path",w({parentName:"g"},{fill:"#ffec99",strokeWidth:"0",d:"m516.247 11.13 99.73-.41-.78 40.79-98.61-2.16"})),(0,a.kt)("path",w({parentName:"g"},{fill:"none",stroke:"#1e1e1e",d:"M515.807 10c26.63 1.51 51.19 1 100 0m-100 0c29.36-.65 58.09-.27 100 0m0 0c1.99 9.66.98 19.18 0 40m0-40c.62 14.09.24 27.43 0 40m0 0c-22.68-1.59-42.71.56-100 0m100 0c-33.98-1.14-66.76-.95-100 0m0 0c1.43-14.59-.02-25.16 0-40m0 40c.41-10.31.01-21.05 0-40"}))),(0,a.kt)("text",w({parentName:"svg"},{x:"18.75",y:"15.45",fill:"#1e1e1e",dominantBaseline:"alphabetic",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(547.057 20.4)"}),"LEEF"),(0,a.kt)("path",w({parentName:"svg"},{fill:"none",stroke:"#1e1e1e",strokeLineCap:"round",d:"M515.807 70c18.68-.6 40.58.7 100 0m-100 0c25.43-1.4 50.38-1.33 100 0m0 0c-.2 14.1-1.15 26.34 0 40m0-40c.79 13.59 1.11 29.45 0 40m0 0c-23.18-.13-47.01 1.43-100 0m100 0c-25.05.41-47.98-.48-100 0m0 0c1.3-9.2-.92-21.25 0-40m0 40c-1.2-14.09-.63-27.32 0-40"})),(0,a.kt)("text",w({parentName:"svg"},{x:"28.125",y:"15.45",fill:"#1e1e1e",dominantBaseline:"alphabetic",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(537.682 80.4)"}),"Syslog"),(0,a.kt)("path",w({parentName:"svg"},{fill:"none",stroke:"#1e1e1e",strokeLineCap:"round",d:"M635.807 130c28.23-.15 56.08 2.8 100 0m-100 0c36.19-1.4 71.04-1.25 100 0m0 0c-1.4 12.07.74 26.98 0 40m0-40c-.52 15.34-.41 31.26 0 40m0 0c-22.15-.14-47.3-.99-100 0m100 0c-35.84-.49-70.66-.37-100 0m0 0c1.84-16.07-1.01-26.66 0-40m0 40c.52-12.67-.28-24.59 0-40"})),(0,a.kt)("text",w({parentName:"svg"},{x:"14.063",y:"15.45",fill:"#1e1e1e",dominantBaseline:"alphabetic",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(671.744 140.4)"}),"TCP"),(0,a.kt)("path",w({parentName:"svg"},{fill:"none",stroke:"#1e1e1e",strokeLineCap:"round",d:"M635.807 70c33.65-.14 71.4.44 100 0m-100 0c24.72 1.1 48.49 1.1 100 0m0 0c1.6 13.49-1.19 25.6 0 40m0-40c-.78 11.93 1.11 22.08 0 40m0 0c-33.73-1.78-66.38-.98-100 0m100 0c-33.92 1.22-68.18 1.09-100 0m0 0c-1.27-13.93-1.23-26.35 0-40m0 40c.67-9.58.94-21.88 0-40"})),(0,a.kt)("text",w({parentName:"svg"},{x:"18.75",y:"15.45",fill:"#1e1e1e",dominantBaseline:"alphabetic",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(667.057 80.4)"}),"JSON"),(0,a.kt)("path",w({parentName:"svg"},{fill:"none",stroke:"#1e1e1e",strokeLineCap:"round",d:"M515.807 130c27.66.68 55.16.78 100 0m-100 0c24.02 1.8 47.93 1.49 100 0m0 0c-.39 11.7-1.51 19.03 0 40m0-40c-.51 8.55.41 16.26 0 40m0 0c-39.92-2.4-76.34-1.46-100 0m100 0c-23.38.93-46.34 1.5-100 0m0 0c-1.01-11.59.81-23.67 0-40m0 40c.7-14.32-1.11-28.31 0-40"})),(0,a.kt)("text",w({parentName:"svg"},{x:"14.063",y:"15.45",fill:"#1e1e1e",dominantBaseline:"alphabetic",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(551.744 140.4)"}),"UDP"),(0,a.kt)("text",w({parentName:"svg"},{y:"14.016",fill:"#1e1e1e",dominantBaseline:"alphabetic",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},transform:"translate(383.615 140)"}),"Connector"),(0,a.kt)("text",w({parentName:"svg"},{y:"14.016",fill:"#1e1e1e",dominantBaseline:"alphabetic",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},transform:"translate(389.508 60.072)"}),"Formats"),(0,a.kt)("text",w({parentName:"svg"},{y:"14.016",fill:"#1e1e1e",dominantBaseline:"alphabetic",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},transform:"translate(749.23 80)"}),"..."),(0,a.kt)("text",w({parentName:"svg"},{y:"14.016",fill:"#1e1e1e",dominantBaseline:"alphabetic",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},transform:"translate(749.23 140)"}),"..."),(0,a.kt)("path",w({parentName:"svg"},{fill:"none",stroke:"#1e1e1e",strokeLineCap:"round",d:"M565.807 110c-.22 5.47-.05 11.23 0 20m0-20c-.17 4.03.1 8.2 0 20M685.807 110c.41 6.39-.02 11.92 0 20m0-20c.44 5.71.48 10.14 0 20M565.828 50c-.28 7.27.24 14.83 0 20m0-20c.14 4.65-.08 8.95 0 20"})),(0,a.kt)("g",w({parentName:"svg"},{strokeLineCap:"round"}),(0,a.kt)("path",w({parentName:"g"},{fill:"none",stroke:"#1e1e1e",d:"M475.807 111.254c1.35-20.14-.12-43.35.17-101.25m-.17 101.25c1.32-21.22.13-43.11.17-101.25M460.807 111.184c4.25 1.52 6.39.72 15 .07m-15-.07c4.01.52 6.36.65 15 .07M490.807 111.324c-2.3 1.43-6.71.59-15-.07m15 .07c-2.52.71-6.7.81-15-.07"})),(0,a.kt)("path",w({parentName:"g"},{fill:"#1e1e1e",fillRule:"evenodd",strokeWidth:"0",d:"m477.607 9.084 6.19 14.34-14.34-1.52 5.25-10.31"})),(0,a.kt)("path",w({parentName:"g"},{fill:"none",stroke:"#1e1e1e",d:"M475.977 10.004c2.37 4.45 2.64 6.59 6.4 13.56m-6.4-13.56c2.1 3.52 2.58 6.59 6.4 13.56m0 0c-4.08.26-6.19-.74-12.67.06m12.67-.06c-2.99.33-5.56-.35-12.67.06m0 0c2.7-2.32 2.63-8.26 6.27-13.62m-6.27 13.62c2.25-5.66 5.06-11.04 6.27-13.62m0 0s0 0 0 0m0 0s0 0 0 0"}))),(0,a.kt)("g",w({parentName:"svg"},{strokeLineCap:"round"}),(0,a.kt)("path",w({parentName:"g"},{fill:"none",stroke:"#1e1e1e",d:"M475.807 171.254c.83-12.21.68-21.64 0-41.25m0 41.25c.17-14.37.52-29.4 0-41.25M460.807 170.994c4.74-.73 8.71.69 15 .26m-15-.26c5.41.5 11.08.47 15 .26M490.807 171.514c-3.42-.77-7.61.51-15-.26m15 .26c-5.39.23-10.54.01-15-.26M490.807 129.654c-3.42-.6-7.61.83-15 .35m15-.35c-5.4.45-10.54.45-15 .35M460.807 130.344c4.74-.89 8.71.36 15-.34m-15 .34c5.42.29 11.08.04 15-.34"}))),(0,a.kt)("path",w({parentName:"svg"},{fill:"none",stroke:"#1e1e1e",strokeDashArray:["1.5","7"],strokeLineCap:"round",strokeWidth:"1.5",d:"M635.807 10c32.8-1.85 65.41-1.26 100 0m0 0c1.14 17.2-1.19 32.15 0 40m0 0c-36.82-.93-75.69-.71-100 0m0 0c-1.32-13.26-1-26.04 0-40M686.15 50.627c1.07 6.68.51 13.92 0 20"})),(0,a.kt)("g",w({parentName:"svg"},{fillRule:"evenodd",strokeLineCap:"round"}),(0,a.kt)("path",w({parentName:"g"},{fill:"none",stroke:"#e9ecef",strokeWidth:".5",d:"M100.73 24.832s0 0 0 0m0 0s0 0 0 0m3.02 2.62c.6-1.07 1.61-1.93 1.97-2.26m-1.97 2.26c.34-.56.9-1.11 1.97-2.26m.39 5.64c1.93-1.99 2.08-3.94 5.25-6.03m-5.25 6.03c1.6-1.96 3.98-3.9 5.25-6.03m-2.23 8.66c.88-1.48 4.52-4.69 7.22-8.3m-7.22 8.3c1.64-1.69 2.83-3.75 7.22-8.3m-4.86 11.68c3.91-2.13 6.16-5.82 9.84-11.32m-9.84 11.32c2.57-2.24 4.81-5.62 9.84-11.32m-6.82 13.94c5.54-4.93 8.67-6.63 12.47-14.34m-12.47 14.34c5.33-5.28 9.89-11.7 12.47-14.34m-10.11 17.72c5.2-4.04 9.06-10.01 15.09-17.36m-15.09 17.36c5.06-6.62 10.83-12.48 15.09-17.36m-12.07 19.98c7.13-7.46 13.46-14.45 17.06-19.62m-17.06 19.62c5.7-7.25 12.02-14.18 17.06-19.62m-14.69 23c5.07-5.93 14.01-15.81 20.33-23.39m-20.33 23.39c5.2-4.55 9.15-10.3 20.33-23.39m-17.31 26.02c8.01-10.77 15.3-19.16 22.3-25.66m-22.3 25.66c7.62-9.83 16.53-18.81 22.3-25.66m-19.29 28.28c8.77-8.29 15.91-17.3 24.28-27.92m-24.28 27.92c9.65-10.38 19.16-21.96 24.28-27.92m-51.44 65.26c4.78-4.82 8.52-7.28 17.06-19.62m-17.06 19.62c7.06-7.67 12.23-14.57 17.06-19.62m12.47-14.34c12.11-12.69 20.52-26.09 26.9-30.94m-26.9 30.94c5.76-7.55 13.69-14.42 26.9-30.94m-51.44 65.26c22.91-27.23 44.39-50.43 57.08-65.66m-57.08 65.66c11.41-13.73 23.61-27.18 57.08-65.66m-51.44 65.27c10.98-13.76 26.53-31.09 56.43-64.91m-56.43 64.91c19.66-22.89 39.43-46.82 56.43-64.91m-51.44 65.27c16.19-17.58 31.23-34.85 56.42-64.91m-56.42 64.91c20.94-21.21 39.02-43.43 56.42-64.91m-50.78 64.51c14.33-15.87 26.51-31.75 56.43-64.9m-56.43 64.9c20.2-23.91 39.45-46.55 56.43-64.9m-51.44 65.26c16.59-20.8 31.29-36.96 56.42-64.9m-56.42 64.9c18.57-21.38 38.5-44.22 56.42-64.9m-51.43 65.26c23.63-24.85 44.02-53.45 56.42-64.9m-56.42 64.9c13.29-14.49 27.19-30.3 56.42-64.9m-50.78 64.51c11.16-14.6 23.57-27.88 56.42-64.91m-56.42 64.91c13.62-16.25 27.97-30.78 56.42-64.91M143 92.052c13.94-12.69 25.49-27.03 56.42-64.91M143 92.052c18.34-20.21 35.16-41.35 56.42-64.91m-50.78 64.51c18.7-18.27 35.04-37.23 55.77-64.15m-55.77 64.15c19.35-21.61 39.3-44 55.77-64.15m-50.78 64.51c11.43-13.43 21.97-27.44 56.42-64.9m-56.42 64.9c12.96-16.03 26.29-31.13 56.42-64.9m-50.78 64.51c18.99-18.97 36.28-40.54 55.77-64.15m-55.77 64.15c13.9-15.59 27.3-31.57 55.77-64.15m-50.78 64.51c17.99-22.53 40.88-47.38 55.76-64.15m-55.76 64.15c17.74-20.2 37.68-43.39 55.76-64.15m-50.12 63.76c17.07-22.6 39.37-43.28 55.77-64.16m-55.77 64.16c22.19-24.94 44.58-51.65 55.77-64.16m-50.78 64.52c13.7-16.16 31.11-36.3 55.76-64.15m-55.76 64.15c17.34-19.83 33.42-40.3 55.76-64.15m-50.12 63.75c14.33-15.99 32.18-37.76 51.17-58.87m-51.17 58.87c16.05-20.22 33.92-37.9 51.17-58.87m-46.18 59.23c10.65-14.47 26.64-30.14 45.92-52.83m-45.92 52.83c15.81-18.57 31.11-36.2 45.92-52.83m-40.28 52.44c15.23-15.94 27.81-29.89 40.68-46.8m-40.68 46.8c9.68-10.99 19.29-21.41 40.68-46.8m-35.69 47.16c7.37-10.34 16.5-19.72 35.43-40.76m-35.43 40.76c14.1-15.09 25.86-29.97 35.43-40.76m-29.79 40.36c10.25-12.89 20.83-21.77 30.18-34.71m-30.18 34.71c5.09-7.39 11.38-14.12 30.18-34.71m-25.19 35.07c8.02-11.14 20.53-20.74 24.93-28.68m-24.93 28.68c5.72-7.24 12.76-14.51 24.93-28.68m-19.29 28.29c4.61-4.82 8.88-11.29 19.68-22.64m-19.68 22.64c8.12-8.26 14.1-17.09 19.68-22.64m-14.69 23c4.9-5.64 10.12-11.05 14.43-16.61m-14.43 16.61c5.5-6.6 11.16-11.65 14.43-16.61m-8.79 16.21c4.15-3.68 7.66-8.63 9.19-10.56m-9.19 10.56c2.94-3.94 7.23-7.51 9.19-10.56m-4.2 10.92c.3-.45 1.41-2.36 3.94-4.53m-3.94 4.53c1.53-1.46 3.14-3.67 3.94-4.53"})),(0,a.kt)("path",w({parentName:"g"},{fill:"none",stroke:"#000",d:"M100.73 24.832c12.1 11.57 19.89 25.2 30.55 33.04m-30.55-33.04c11.9 12.78 23.06 25.72 30.55 33.04m0 0c-11.24 13.73-22.08 26.09-33.47 33.47m33.47-33.47c-12.6 12.59-23.46 23.94-33.47 33.47m0 0c32.58 2.53 64.24.62 133.87 0m-133.87 0c35.32-.65 71.52.73 133.87 0m0 0c-.75-14.78-1.28-28.54-.62-63.41m.62 63.41c.85-15.1.19-28.37-.62-63.41m0 0c-40.37.83-76.35-.63-130.33-3.1m130.33 3.1c-38.36-.84-75.75-.47-130.33-3.1m0 0s0 0 0 0m0 0s0 0 0 0"}))),(0,a.kt)("text",w({parentName:"svg"},{y:"18.583",fill:"#1e1e1e",dominantBaseline:"alphabetic",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"21.213",style:{whiteSpace:"pre"},transform:"translate(143.22 45.952)"}),"import"),(0,a.kt)("text",w({parentName:"svg"},{x:"158.552",y:"14.016",fill:"#1e1e1e",dominantBaseline:"alphabetic",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(10 115.168)"}),"Now re-ordering events to create larger"),(0,a.kt)("text",w({parentName:"svg"},{x:"158.552",y:"34.016",fill:"#1e1e1e",dominantBaseline:"alphabetic",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(10 115.168)"}),"batches, improving efficiency.")))))}X.isMDXComponent=!0}}]);