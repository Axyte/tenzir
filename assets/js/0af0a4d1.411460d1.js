"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[81091],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>p});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),M=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=M(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},w=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=M(n),w=r,p=d["".concat(c,".").concat(w)]||d[w]||s[w]||i;return n?a.createElement(p,o(o({ref:t},m),{},{components:n})):a.createElement(p,o({ref:t},m))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=w;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var M=2;M<i;M++)o[M]=n[M];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}w.displayName="MDXCreateElement"},16683:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>A,contentTitle:()=>x,default:()=>u,frontMatter:()=>p,metadata:()=>D,toc:()=>f});var a=n(3905),r=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&m(e,n,t[n]);if(l)for(var n of l(t))M.call(t,n)&&m(e,n,t[n]);return e},s=(e,t)=>i(e,o(t)),w=(e,t)=>{var n={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&M.call(e,a)&&(n[a]=e[a]);return n};const p={sidebar_position:2},x="Plugins",D={unversionedId:"architecture/plugins",id:"version-v4.15/architecture/plugins",title:"Plugins",description:"Tenzir has a plugin system that makes it easy to hook into various places of",source:"@site/versioned_docs/version-v4.15/architecture/plugins.md",sourceDirName:"architecture",slug:"/architecture/plugins",permalink:"/architecture/plugins",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.15/architecture/plugins.md",tags:[],version:"v4.15",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Design Goals",permalink:"/architecture/design-goals"},next:{title:"Actor Model",permalink:"/architecture/actor-model"}},A={},f=[{value:"Pipeline",id:"pipeline",level:2},{value:"Operator",id:"operator",level:3},{value:"Aggregation Function",id:"aggregation-function",level:3},{value:"Connector",id:"connector",level:2},{value:"Loader",id:"loader",level:3},{value:"Saver",id:"saver",level:3},{value:"Format",id:"format",level:2},{value:"Parser",id:"parser",level:3},{value:"Printer",id:"printer",level:3},{value:"System",id:"system",level:2},{value:"Command",id:"command",level:3},{value:"Store",id:"store",level:3},{value:"Component",id:"component",level:3}],g={toc:f},k="wrapper";function u(e){var t=e,{components:n}=t,r=w(t,["components"]);return(0,a.kt)(k,s(d(d({},g),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",d({},{id:"plugins"}),"Plugins"),(0,a.kt)("p",null,"Tenzir has a plugin system that makes it easy to hook into various places of\nthe data processing pipeline and add custom functionality in a safe and\nsustainable way. A set of customization points allow anyone to add new\nfunctionality that adds CLI commands, receives a copy of the input stream,\nspawns queries, or implements integrations with third-party libraries."),(0,a.kt)("p",null,"There exist ",(0,a.kt)("strong",{parentName:"p"},"dynamic plugins")," that come in the form shared libraries, and\n",(0,a.kt)("strong",{parentName:"p"},"static plugins")," that are compiled into libtenzir or Tenzir itself:"),(0,a.kt)("p",null,(0,a.kt)("figure",d({parentName:"p"},{className:"markdown-inline-svg"}),"\n  ",(0,a.kt)("svg",d({parentName:"figure"},{viewBox:"0 0 722.49 521.577",role:"img","aria-hidden":"true"}),"eyJ2ZXJzaW9uIjoiMSIsImVuY29kaW5nIjoiYnN0cmluZyIsImNvbXByZXNzZWQiOnRydWUsImVuY29kZWQiOiJ4nO1dWXPiSrJ+719B9Lw2mtqX82a84Vxy7+62b0xcdTAwMTAyXGKQWS2EXHKe6P8+WdhtiUViXHUwMDE1XHUwMDE251x1MDAxZTqibUtCKpXyyy+zctF/v2Uy3/1Bx/n+V+a70y/ZXHK37Nmv33+Y7S+O13XbLdhFhn932z2vNDyy5vud7l///rfd6VjBt6xSu/n+TafhNJ2W34Vj/1x1MDAwZv7OZP47/D90Lc8p+Xar2nCGX1x1MDAxOO5cbi7H8fjGQrs1vLLkXHUwMDA0K0FYcIDb3YOr+U5cdTAwMTn2VuxG11x09pSHXHUwMDE3Oiipoye5k7tk5/uHXrN1Rs57wUUrbqNx7Vx1MDAwZlx1MDAxYcNBddtwI8G+ru+1685Pt+zXYC9cdTAwMWXbXHUwMDFl9S2v3avWWk63O/Kddscuuf7AbEPoc+v7XGb8lVx0tvThL1x1MDAxYTrCfIMwNHbt3Xaj7Zlr/1x1MDAwYlxyP8HVXHUwMDFm7VK9XG5DaJU/j/E9u9Xt2Fx1MDAxZTyQ4LjXP3clgnPXXHUwMDFjt1rzzVx1MDAwMEjogs5wajlCWnIq+edcdTAwMGVzlc5RefiM/1x1MDAxM777Vvnj7lu9RiNcdTAwMTiY2bE/Llx1MDAxN2HZXGI9tFxc4fbs8GftSqGr1q59dX79unNx+Tn4XHUwMDExQbI9r/36/XPP74/fglx1MDAxMfU6ZftdPLDgjCuFXHUwMDE1fOjn/obbqo9cdTAwMGa20S7VXHUwMDAziVx1MDAxYW79/WNcdTAwMTlB1lGCjIlcdTAwMTRcYlx1MDAxMVx1MDAxZZrQWZLcei7uyl7x5ujU5m95dtwtXHUwMDE2d+x0SzIn6ZNkrDBWjFGtN1wiyvdF1D1TQpZcdTAwMGbzP5HY9av4un08nyj/iDvv6+VuN8/kwfNtw72zT26zb91cdTAwMTO+hvPu315cdTAwMWXULr28X3Rufz48dJ+Lt1WaTuj5Tt+fhjpBI1HHMUGaaknmRt3DfulXs+lW3N2bs1x1MDAwNq1cdTAwMTVcdTAwMGVVtV/cXHUwMDE06shSqKOUWJIoKlx1MDAxNdFcXGlcdTAwMTD2UVx1MDAxMIrkQKiZxVx1MDAxOSWMMqRcYqKYTEKSTVwiXHUwMDEycS4lYnh95DJdXHUwMDA2lUCAe8GkwFx1MDAwYshg8KzbLf/afTNcdTAwMTNOsYVHPmzkqFx1MDAwM7vpNlx1MDAwNiNcdTAwMGZ9KKwwfTdO6831vo9s32m4VSO431x1MDAxYk5lVKJ9XHUwMDE3jKvP3X67XHUwMDEz7C3BdWy35XhH5fHxtz236rbsxk3ENeGenfyf54EtorjE7PN/XHUwMDExevpdx1x1MDAxY2uERi1cdTAwMDdFNL7xXHUwMDEzilRcdTAwMTMtiKTzQ/Fg0Fx1MDAxZOSL9CV/+NJcdTAwMTO0k6/lXu+f0lxyRc7HoLhOJP6rgiukQtaEQoY0kUrJzWBQI8TD8rhcdTAwMGVcZv59IKiWgGCsISr4+MaAXHUwMDEyicZUksBcdTAwMWGaXHUwMDA1w4GHsq1n5D9cXDHfP2hy5OlGLt12KFx1MDAxZLNDR8zCJYCnSEljZ4pcckqm2KBTXGKPMy0x1yhpb2qqelx1MDAwZT3KXHUwMDFh7z9pXmj2325PkH3Xyfpn97eLW3QsLNabtei0XHUwMDA2s0FcdTAwMTLE5lx1MDAxNt/p95xqXHUwMDE2oUxbQoG7SLGmlOtRXHUwMDE2oVx1MDAxNFl8XHUwMDE1cY616Fx1MDAwNLJcdTAwMDT4SpxcbkyJwoRPXG441lx1MDAxM1x1MDAwMs4oRlx1MDAxNIWWaZIkXHUwMDEzheTKZILFyNZcdTAwMTj2aLiPflx1MDAxY4GUYMiOXHUwMDE3QyFNt1xcXHUwMDBla+lRXHUwMDE2maVex4llynDGuFx1MDAwNavQXCJDiE8wW55PVPTChqRUII55XHUwMDAw2VmIdOpccnly8rbn79Rbz7ve1V79vPy4ZYSivpRQJFxcXHUwMDAwg1x1MDAwMZcwnbw/LlXYUa9aslwik1dPXr2Ia/2X1+krXHUwMDA0Q8xcdTAwMDR08iPutMmv+SVOUyraylLA9lx1MDAwNIYg50ZF/DSnk6dC7DBEhU6SmTCego0pXFyEmCCUc5r06sJygrZcdTAwMWFcdTAwMTldNHrAXHUwMDA2mZ2EuGiGZlx1MDAxZeeiydFsgorY+MY/oCOKXHUwMDEwybiYP1hUuc1cdTAwMWXvXHUwMDExp3N/33l4eH0sXHUwMDFmvFx1MDAxZajn7WJcIrbaXHUwMDEy+6pMxFx1MDAxNMMyTP5JMlx1MDAxMXnA9YYuPJ7tt5BjXHUwMDEz9VDr3N/9w0RcdTAwMDZcdTAwMTQkXHUwMDEyXHUwMDE0XGK0ssRcdTAwMTjP7/DHT/NWMFx1MDAxMeMpYFwioVxiVlx1MDAxNFx1MDAxY5a/L1x1MDAxMeVcdTAwMTJcIqJcdTAwMTmKOYKIcpslXCI5vvFcdTAwMTNzVIBccqLw/Mbfs7zUJ9mzy+xcdTAwMGItPHePs3snTsfbLlwi4uhriYhzQrhcdTAwMTbrW8+OZaLHm1+/nnW/3MjTS9FmldO97ttcXEyUXHUwMDFhxog0o1x1MDAxOMGIg/Myv/TGz8ZWXHUwMDEwXHUwMDA2xykgXGaMudZCSJL0OtpcdTAwMTcyxm5CjDFDg0Ywxu5GXHUwMDE5XHUwMDAzXHUwMDEzMb71c8GAXHSkJFVk/vwg/dIrXHTn171P3Hvee+h59XZ/Y2bakvlBLFWcoUDRKfBcdTAwMTc3k+RWaFx1MDAxY1x1MDAxN3++8DZcdTAwMTW/zjynnC/sV3bc1b2XpFx1MDAxMo6ST1xmSpzjMIl0izTWJviq5/eK4lx1MDAxZl8qSVx1MDAwZaY6fSQnXGJcdTAwMDBcdTAwMGVG8jdenkuK42Zo/E1x3Dvcp9mUOtIlXHUwMDEyXG5JpVx1MDAwNJk/Slx1MDAxNL8qs1x1MDAwZbyV7W7NWSu/XHUwMDExNcpvXCKG33hJM1SO57eohFx1MDAxZsot8HSYRoRRqTRccqY9XHUwMDAwnuJcdTAwMTbjkmEhTGRWykCIP4BIXHUwMDEwktqkxy2yPlx1MDAxMVx1MDAxMMVcdTAwMWZxIFx1MDAxZlt+XHUwMDA3d7JcdTAwMTGAdn3b83Nuq+y2quNfcVrlYE9oyFx1MDAxZnVcbkdzVFxuXGbBXuqZ8SNcdTAwMGJcdTAwMWKzXHUwMDFjaWBZjbBJKlxyXHUwMDFkVbU7hk8sIVx1MDAxMTxcdTAwMGKYT2ruXHRPzErD7vq77WbT9WFcdTAwMDIu2m7LXHUwMDFmXHUwMDFm9fCOdlxmuGqOPZFhXHUwMDA091x1MDAxNN5cdTAwMDe62Fx1MDAxZDM0O+ako2ZI8FsmXHUwMDEw1eFcdTAwMWafv//nx9Sjs4RbXHUwMDAybkgowVx1MDAxMEZgmJLw97NYXHUwMDEwS1xujVx1MDAxOdVMUSlcdJ11RiBcdTAwMWZqUlx1MDAwMDFcYqRQ4Vx1MDAxNcn3XHUwMDEzTlxibHDCb+GfyyVERedcYlx1MDAxM06xxkjOr5p2rp7fuvLgqaRyZ+yU9/KyWi+k2/KWY5Z3KjLztWRcdTAwMTRcdTAwMGK6oehBUlx1MDAxOfQrXHUwMDE44GkxlEV0elx1MDAwN2VMg5lcdTAwMTBcdTAwMTKXmcR9le1cdTAwMWOfduROvdu/Qdmj3OnhrUq3oVxm6mtb0nZBbXJ4Jlx1MDAxMm8m+WNcdTAwMDXQxFxu93sml6QktGD7T1rwXHUwMDFh0oKjIM55pC9cZlxmqFx0sK5cYq43XHUwMDBi49f39zl8elwi88enp883XHUwMDFkj5P8yXqTKtdvnHMqwEijXHUwMDFjbF6ihNZcdTAwMDHrXGa/r5XFXHUwMDEwKFx1MDAwMsS5SWiLRLwjpFxcXHUwMDE28ZQzXHUwMDBisCs51UhMS62cQpKSXHUwMDBirVxiVZshyVx1MDAxNWLhsSSZpFx1MDAxZVx1MDAwMftcdTAwMTSHc0+T9vJ7XSfj15xM5yP95eIo89jzM6V2s+M2nHJcdTAwMDas8HZmVtpoQlxuZtmxjSuiZdZcdTAwMDWiVFx1MDAwZo22Llx1MDAxMDNcdTAwMTVBXFzMn849uOjvi5Ob/E7Br5Z9cl2/P3JrKdc8XHUwMDE0M1x1MDAwYoPS4Fx1MDAxOPxcdTAwMWKJwFFcdTAwMWNRPVxcUlx1MDAwYmFQO0ppMCZCjsg6rVxyXGZEKbhWWihulr1DWeWB+lx0qb139aMpfE/IxFfr3u1cdTAwMDGOXHUwMDEwVmGZXFxcdTAwMDLHIVx1MDAxNTpcdTAwMDPHe4NcdTAwMTbsLGVyPbdRjoDpzCW7ZYFcdTAwMWFx8flwuJxcdMBicEjA/eaIzG/lly/r/YOWV7yrnjpi/6ouKrXDbMpxXGKG81xiXHUwMDBlt1x1MDAwNoVYM1PGvsbkhn9Q+FUojO5cdTAwMTHBMFx1MDAxOHsw+/Ob4Vx1MDAxZapcdTAwMWO5hWqOuLp7dT6o+Z07WU85XGKlQODnXHUwMDAwXGKNylx1MDAwMVxiXHUwMDA0ZtdcdTAwMDZRiLVlXG6JNFx1MDAxN0QrRVRwKzEo5NQs7Vx1MDAxMrKZcPEh23/wLk+w51xuv1x1MDAwNf5+4cZrXHUwMDE012Qxb1x1MDAxYePXvu1/XHUwMDE1xKdfe1x1MDAxZFxij4yDgVlcdTAwMWKZXWW4XHUwMDA3mTWcuUFcdTAwMWXvOqVcdTAwMTTkXHUwMDBitDRayaEmXHUwMDE2QpRcYlx1MDAwNv/ArFx1MDAwZVVEXHUwMDA1gTDOLYWk4IhSRVx1MDAwNFx1MDAwZvVcdTAwMDL5w67UaFx1MDAwMKToXCJpV4lcdTAwMDTClqpqXHUwMDFjXHUwMDBihEWFu+LbXHRlgnBXXHUwMDE24EAlZ1oxqblZmFxmXHUwMDFk9Fx1MDAxZe1cImjiXudcbrnZ3fqBw16yd1Wkj4h+61Tuc/VpY0BcdTAwMTbilMNcdTAwMTgollx1MDAwMoxcdTAwMWZcdTAwMDCNmFx1MDAxY4VFXHUwMDA1XHUwMDA1XHUwMDA20Vx1MDAwMlx1MDAwZSNgwrKJUW1Z0I1aXHUwMDAy7kMyQlx1MDAxOVx1MDAxOOM4fM9cdTAwMTkjplx1MDAxNjabQV5MNfmsk2WJskCytUZcZlx1MDAxM4KQxiNnm4BFcL5v4Z+Laz+BXCL7uWFcdTAwMTNHRZro+dPc4sMrKVV/XHUwMDE4XHUwMDA0WINAXG6iNEGhNelhmZxcdTAwMTCWkpRKobDWLJRou07VSDiwmqBagOdgQrhTVlx1MDAxYmFcdTAwMWOCXHUwMDEwXCJcYqNgXHUwMDA20ZB78VnXzVx1MDAxOSNMiUVMnq3TjPHh3JBWXHUwMDAyxYg5kUBcdTAwMTZCgEU2RS9qSyOpOFx1MDAwNVx1MDAwMZBgXn5cdTAwMThcdTAwMTBcdTAwMGLryVx1MDAxYvqrcpc7eb2qXHUwMDFk7p3ulIr11lx1MDAwMzmeqquRJVx1MDAxOTAgXHUwMDA38sJcbi6pJlx1MDAwNyVg1NLoXHUwMDEz0Fx1MDAwMFx1MDAxMikkJsa0dVqSgNJnyHSVwSzkI5hcdTAwMGZXXHUwMDE2XHUwMDEzXHUwMDE4tlx1MDAwM3kpKTFcdTAwMTWzTlx1MDAxN1x0XHUwMDE085mAyIJaMnItJibkaqKBTDEyv1x1MDAxZlitOc7F06Ao97Nl+pZ9LvuXXHUwMDA3/ZTryFx1MDAxOeFcdTAwMThcdTAwMDHPXHUwMDExcywwkViZZ52Iklx1MDAwNPGwNNdwfVxu1o5cdTAwMDB3cFx1MDAxZUfQZLKBbpfrS9P/lKpccpYnfqEj+J6Z2N1saCTq2kku9lxiXHUwMDE5nfFcdTAwMGZuoJRULpBZIS51s9BnN+XXbPM866vT23x+vZlcdTAwMTVcdTAwMWJIiWTAkZpwrk2BnGDjQ1lPgiTR4Fx1MDAxY2CtXGIjI0mucYFWYFFcdTAwMDZcdTAwMTaZ2H5Ug0WAwq1Yk1x1MDAwZYjanpPp1uD/slx0LXq25zrdTFx1MDAwYnZmvi5cdTAwMTC66JiSXGaAXHUwMDAywURpXHUwMDAxhbEklC6w5it2X1x1MDAwNjVP4069j3M9cbLfvqittyviXHUwMDA2lEBMP7ZVYI9BuWBj9yGBXGaYp1wif4LOweZcdTAwMTNcdTAwMWFcZrzNXHUwMDAwP6m6mq+M3XxcdJ9HXjzZtd1w68RxSsdcdTAwMWFrSVx1MDAxN1ncjZeGdKKZUWZxXG4mMFx1MDAxNVx1MDAxYyOhx6qMXHUwMDA0JZZcdTAwMTKEg14jXGb2k7GRrVx1MDAwN+pcdTAwMTJZwO6Ig/tHKKNyiuGOXHUwMDA1t0xwRyHT/1x1MDAxYodjSVx1MDAxZslccphoXHUwMDE4P1kkrLp1q1x1MDAxYvF8kVx0r7lKpLCpbzBrXHUwMDE4gpFQfv7HUsLoc6daTtz6upeBKfiAXG7oXHUwMDExrkvAXHUwMDE15Fx1MDAxM0NcIsKUKVDKXHUwMDA1TKhcdTAwMTJqcsVly1Y3XHUwMDE4N1x1MDAwYlx1MDAxODDNlClNXHKNhb+eXHUwMDFkXHUwMDAzXHUwMDE3lnOcz/iq3Cwsa4Q1XHUwMDE5Wd/Iwj6LS1x1MDAwM1x1MDAwMrOUgsBccp51wkjkvZ9vXHUwMDFjdMHpvoV/LtdyI7LhXHUwMDFhYZyikSb/szSv6/fLj9fs/Oomh9RTST2oOq+mu4hjvHz6q9vagjxRKVx1MDAxMd9Mz43s4YPPL1x1MDAxYT9p4XBwcHLf7ZS97PV0w2m5nlx1MDAxYoto4VhcdTAwMTmO8lx1MDAwM2SkXHUwMDFigDHDgNFF/ID46UhlmVx1MDAwNVx1MDAxN1vW15aAhjWlXHUwMDE2a0y+jm1sS0koVLTtjW1nKNh0NLZcclx1MDAxN61PdkpcdTAwMDe2RIvULFd+NZuoMngoNHOnR3uFm8JcdTAwMTXZ3MtD1sQpK3a2rdiPXGLxpTnFxPNcdTAwMTkha+wkXHUwMDFkRyk/j3efX8/7R8e3XHJUxPg0J3PlXGJffENcclx1MDAwNWPPm1RcdTAwMTHFXHUwMDA2KVx1MDAxMMfkXHUwMDA2UEGIVCx0xCy8xT+/dHLgmLecjp65XHUwMDFjmV6Fmm+uVeHmXHUwMDFhuCfcM3eGzk9Fz1xcjFwiy9/Nm9GQJmJ+kiuW767fyqrbyFWbOY5cdTAwMWTv+SfR20VyX9w0XHUwMDE3U83Atljn+1x1MDAxMuJoozvw9lxuh9mbXHUwMDE2XHUwMDE5XHUwMDFjXHUwMDEzj7VEXHUwMDAztfWXslxcWtgoul9ccjXGXHUwMDFm41x1MDAwYrwmJ36Wt4KLUtE1l3JTib/JrrlcdTAwMWKnoqS65s7QzKnomotjqkGpqfzAUs9vXHUwMDAw0j45XHUwMDEzunfTwEdPV7u018/dPaV8XHUwMDExT4pRLlq1XHUwMDA34opcdTAwMGVcdTAwMTeWRFxuTlx1MDAxNkvxXFyBi1xu1zCxfu2NPV2eXHUwMDE3KsXD+lx1MDAwM/5/3Vx1MDAwNDF5j4tGelxcJrVXS7ZA56P4x5dKkpNilORS0Vx1MDAwNFx1MDAxMXPMuE5+XfFcdTAwMGJJLqkmiDNUfjpcdTAwMWH9ouhVRclNXHUwMDEytlTzg07IuzprXlx1MDAxY0qOXHUwMDFlkG+zs+f28952kdyqkapVSVx1MDAwZWnE0UhhSpIkV7lwq1x1MDAwMvPrXHUwMDE39Szsvf3mVZ/XequT3PY2MEuc5GLeT6fNXHUwMDFiUEw/+7nxXHUwMDE2//jSSXJqy1wia0xRYSpSNtNXRHFcdTAwMWTir21cdTAwMGaszeCDlFx1MDAwNNZIZK6GqdbUKlRXOlx1MDAxM5Hx9VDbwYBfXHUwMDFiV1NIg52v1Wa8vEqp8mY/+u7dQ1vtnZfY3U5V5lYnwKTian9cdTAwMDNcdTAwMDLEOLq9XHUwMDFmXHUwMDAzXHUwMDE54WiR11x1MDAxMcU/v3QyoEhhXFxNcFNIz2XSLPc3XGarzVD56Vxiq+FIjiOYYLBxwm8hnUlycrdw23u8eCnfdIq/XHUwMDA2XHUwMDFk3Pe8jYFuPSS3alxcbVU3XHUwMDBmplxcXHUwMDExtqmlTJ+/7O9l7fv9XHUwMDFimtuzXHUwMDBi7lG1e/ulJJdcdTAwMWEyQtGJjoRcYiY14/OTUfw8b1x1MDAwNVx1MDAxOaVcIrAmlEmPV/KfwNriZFx1MDAxNK+aU1x1MDAxMVhjOFx1MDAxYXRcXCAhXHUwMDE2WnOML9FYXHUwMDAwdGxse4JJXHUwMDFlNFx1MDAwMOvQXHUwMDAylNGVRyVNbGKvXHUwMDAwOSotws26ksCKKYmmtHFcdTAwMDTrwFx1MDAxMnrY3Fx1MDAwMFx1MDAwMyQwmmyvYl6EgVx1MDAwNFKbWZZcXKGjXFwsYyW1LrlFwbfockGNXCJzTDRFRDG6QLVg/Fx1MDAxM0xntaBQ1OJcdTAwMTSbLjWKaclHu64ygSyF4IFcdTAwMTBp6nVJdC+kOSBcdTAwMWJZLMioRblkpm9cdTAwMTbmhE9tXHUwMDEzx5SlXHUwMDA06FxmpGEomrGJ9yVJSVx1MDAxNSdqobdcdTAwMDVuXbXg3KV5WWQxeJ5cZjScIEAwREw2aMPMXCJcdTAwMTKmXUshwDLnasl6wVx1MDAxN3/fvby99zzxmLtcdTAwMTb584Gu5lx1MDAwZqdcclxuWea9XHRcdTAwMTIjLjBcdTAwMDbOXHUwMDBi9/L5MyZkUYqFXHUwMDE2pu04NZlGXHUwMDEzY1qiYHBKUeBY2eDI99daMIi16TVm2uhoZUDERlxu8lxisUxVXHUwMDFmyC1FWjAys15cdTAwMTBL+Fx1MDAwMpOEa8pcdTAwMTVcdTAwMDBXjJxcdTAwMGU8MbBehJam9lx1MDAwYkk4ctb5XCKxNzzdXHUwMDA06oLTfVx1MDAwYv9cXLjUikdaQ1xcaYCxJPP3nL+6se1j/6m4Pzg+yFx1MDAxZNxd7CMv/yvtanfMNZ+/78oqipZosIs0V6atzbA4dL7WK+CVmNrdXHJ1YNi28oz3li5cdTAwMDQzvDmHyrRPsV9st2E/NuA3P2iZknk0nXQzvtt04Pjp/laCPV1cdTAwMTZcdTAwMWFUkk1dRIy/hVx1MDAwNEcg0Wp+XHUwMDE1XHUwMDEzT3FbomJikjxWUSqGJFx1MDAwNNVcbs7/3tYlmPi4nvmmI6xcImgz78lKSqck31x1MDAwNVxch9GSaLeYXHUwMDFjzKd5XHUwMDA3zZd0i4m8+ELdYr59zOd3u9Mx/eScT6v1+4vrvOamSfXwY57L8ElcdTAwMWIoO0PX4Pe33/9cdTAwMDNcdTAwMDasi94ifQ==",(0,a.kt)("defs",{parentName:"svg"},(0,a.kt)("style",{parentName:"defs"},'@font-face{font-family:"Virgil";src:url(https://excalidraw.com/Virgil.woff2)}@font-face{font-family:"Cascadia";src:url(https://excalidraw.com/Cascadia.woff2)}')),(0,a.kt)("path",d({parentName:"svg"},{fill:"none",stroke:"#000",strokeLineCap:"round",d:"M56.385 80.265c59.58-.74 121.21 1.19 158.17 2.78m-159.14-2.12c36.44.99 72.66 1.39 159.96 1.12m.48-.87c-.39 84.64-.48 170.47-1.61 321.28m1.13-320.9c.98 97.09 1.24 194.03.25 320.68m1.39-.78c-62.25 1.35-124.79-.29-160.61-.98m159.47 1.31c-35.92.83-71.82.45-161.53-.72m1.44-.82c1.77-88.14.68-176.16-1.84-318.82m.56 320.53c2.8-102.59 1.71-204.33.75-320.15M275.405 79.595c49.79 2.99 96.58 4.5 158.31.6m-158.03 1c40.83 1.45 81.29 1.91 159.17.02m1.44-.62c.98 82.15-.99 164.95-1.05 322.12m-.7-321.15c.83 72.88 1.65 146.68 1.28 319.7m1.34.61c-57.52-1.76-115.55-1.5-163.58.42m161.46-.69c-58.91-.07-116.91-.23-160.1-.57m1.37-.78c-2.03-66.92-3.32-132.93-.87-319.6m.37 320.49c1.13-64.19 1.66-127.78-.44-318.87"})),(0,a.kt)("text",d({parentName:"svg"},{dominantBaseline:"text-before-edge",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"31.111",style:{whiteSpace:"pre"},transform:"translate(87.923 101.585)"}),"Tenzir"),(0,a.kt)("text",d({parentName:"svg"},{dominantBaseline:"text-before-edge",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"31.111",style:{whiteSpace:"pre"},transform:"translate(307.923 101.585)"}),"Tenzir"),(0,a.kt)("g",d({parentName:"svg"},{strokeLineCap:"round"}),(0,a.kt)("path",d({parentName:"g"},{fill:"#82c91e",strokeWidth:"0",d:"m73.945 160.225 120.1 1.52 1.78 40.34-118.67-2.02"})),(0,a.kt)("path",d({parentName:"g"},{fill:"none",stroke:"#000",d:"M74.895 160.515c35.83 2.44 68.31 2.26 118.98 1.28m-119 .52c23.64-1.39 48-.47 119.66-.24m1.01.44c-.81 8.75-1.04 20.87-.94 40.65m-.09-40.96c1 9.37.25 18 .64 38.45m1.26 2.79c-35.11-3.03-71.43-.29-121.35.11m120.74-2.52c-39.13.08-75.4.41-120.41.4m-1.9-.9c1.59-12.15.27-22.29-.22-37.35m1.03 38.29c1.06-8.75-.11-17.26 1.41-39.01"}))),(0,a.kt)("text",d({parentName:"svg"},{x:"30.32",dominantBaseline:"text-before-edge",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(104.875 172.085)"}),"libtenzir"),(0,a.kt)("g",d({parentName:"svg"},{strokeLineCap:"round"}),(0,a.kt)("path",d({parentName:"g"},{fill:"#82c91e",strokeWidth:"0",d:"m75.515 221.125 117.99-.17 3.12 40.71-122.05.38"})),(0,a.kt)("path",d({parentName:"g"},{fill:"none",stroke:"#000",d:"M76.415 223.445c36.27-2.52 71.34.22 118.65.11m-119.26-2.52c36.29 1.72 75.44 2.05 119.59.4m-1.9-.9c.83 12.04-.49 26.08-.22 42.65m1.03-41.71c1.08 7.63-.09 15.5 1.41 40.99m-.36-.25c-28.13.64-58.63-.96-118.68-.57m117.66.69c-32.15-.73-63.97.34-119.89-.05m1.03-1.53c.31-13.72-1.19-26.6.94-40.19m-2.1 40.14c.91-12.09 2.12-23.76 1.75-39.6"}))),(0,a.kt)("text",d({parentName:"svg"},{x:"55",dominantBaseline:"text-before-edge",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(80.195 232.085)"}),"Plugin A"),(0,a.kt)("g",d({parentName:"svg"},{strokeLineCap:"round"}),(0,a.kt)("path",d({parentName:"g"},{fill:"#82c91e",strokeWidth:"0",d:"m74.665 283.245 122.03-.42-.77 40.75-119.4-1.13"})),(0,a.kt)("path",d({parentName:"g"},{fill:"none",stroke:"#000",d:"M74.705 280.475c30.3 2.58 61.82 3.34 118.59 1.16m-117.92-.72c24.57-.19 51.83 1.69 119.19-.01m1.13 2.64c-1.99 8.09 1.01 17.49-1.13 39.12m-.15-41.35c.06 14.04-.31 26.9 1.3 40.47m.15-.69c-36.59.69-69.63-1.02-120.55-1.43m119.53 1.18c-28.09-.49-57.38-.8-119.49.51m-.08-.39c.51-9.12.55-17.86-.77-40.38m-.03 40.53c1.35-10.46.17-20.4.31-40.13"}))),(0,a.kt)("text",d({parentName:"svg"},{x:"55",dominantBaseline:"text-before-edge",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(80.195 292.085)"}),"Plugin B"),(0,a.kt)("g",d({parentName:"svg"},{strokeLineCap:"round"}),(0,a.kt)("path",d({parentName:"g"},{fill:"#82c91e",strokeWidth:"0",d:"m76.435 340.995 120.23-.71-.37 39.77-122.62-.11"})),(0,a.kt)("path",d({parentName:"g"},{fill:"none",stroke:"#000",d:"M77.155 340.065c35.36 2.7 72.03.59 119.12 2m-121.35-.85c26.79.56 52.4 1.83 120.47.29m-.69-.75c1.02 14.61-.69 26.07-1.43 39.71m1.18-38.02c.22 8.49-.09 16.27.51 38.3m-.39 1.3c-32.7.09-65.03-1.1-120.38-1.39m120.53 1.51c-34.98-2.04-69.44-1.86-120.13-.85m1.33 2.26c.3-16.45.22-33.41-1.44-41.15m-.09 38.67c.43-11.04.23-24.12.74-40.3"}))),(0,a.kt)("text",d({parentName:"svg"},{x:"55",dominantBaseline:"text-before-edge",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(80.195 352.085)"}),"Plugin C"),(0,a.kt)("g",d({parentName:"svg"},{strokeLineCap:"round"}),(0,a.kt)("path",d({parentName:"g"},{fill:"#82c91e",strokeWidth:"0",d:"m296.355 343.105 117.37-2.64-.04 40.47-119.2-1.03"})),(0,a.kt)("path",d({parentName:"g"},{fill:"none",stroke:"#000",d:"M294.175 341.705c30.1-1.97 61.26-2.62 120.31-1.6m-119.77 1.64c46.57-2.04 92.8-.49 120.52-.47m-1.27-.38c.01 12.68.78 25.48-.21 39.76m.85-39.48c-.32 14.48 1.1 29.82 1.21 40.77m.63-1.14c-49.91 2.13-96.99 1.08-119.76-.82m117.9 1.57c-29.55.15-58.99.65-118.66-.62m-2.37.34c2.51-15.37 2.79-29.71 3.28-39.46m-2 40.5c1.08-11.48-.58-20.14-.06-41.16"}))),(0,a.kt)("text",d({parentName:"svg"},{x:"55",dominantBaseline:"text-before-edge",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(300.195 352.085)"}),"Plugin C"),(0,a.kt)("g",d({parentName:"svg"},{strokeLineCap:"round"}),(0,a.kt)("path",d({parentName:"g"},{fill:"none",stroke:"#5c940d",strokeDashArray:["8","9"],strokeWidth:"1.5",d:"M34.055 440.575c-4.12-27.03-25.75-131.28-23.95-162.2 1.8-30.91 28.88-19.58 34.76-23.29"})),(0,a.kt)("path",d({parentName:"g"},{fill:"#5c940d",fillRule:"evenodd",strokeWidth:"0",d:"m45.975 256.285-14.07 7.32-.78-14.59 12.63 4.47"})),(0,a.kt)("path",d({parentName:"g"},{fill:"none",stroke:"#5c940d",strokeWidth:"1.5",d:"M43.595 255.775c-2.83.36-7.06 3.03-11.78 6.05m.93.69c-.19-2.72-2.47-4.65-.87-11.94m-.72-.06c4.54 1.3 10.3 3.54 14.89 4.74m-1.18-.17s0 0 0 0"}))),(0,a.kt)("path",d({parentName:"svg"},{fill:"none",stroke:"#000",strokeLineCap:"round",d:"M494.855 80.605c50.89.56 98.52 2.16 160.33-.71m-159.05 2.32c38.18-.28 77.96-.62 158.34-1.05m-.1-.39c-.84 115.11-.47 231.96 0 319.8m.98-318.79c-.52 113.15-.13 226.02-.76 319.39m1.47 2.16c-37.51-.73-76.08-1.69-162.45-.8m161.92-1.51c-40.08 2.15-81.3 2.11-161.17 1.55m-.43-1.77c3.18-87.82 1.75-178.2 1.95-319.31m-.22 320.65c-2.36-115.23-3.04-230.56-.62-320.42"})),(0,a.kt)("text",d({parentName:"svg"},{dominantBaseline:"text-before-edge",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"31.111",style:{whiteSpace:"pre"},transform:"translate(527.923 101.585)"}),"Tenzir"),(0,a.kt)("text",d({parentName:"svg"},{fill:"#e67700",dominantBaseline:"text-before-edge",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},transform:"translate(291.868 39.993)"}),"use the plugin API but compiled into libtenzir"),(0,a.kt)("text",d({parentName:"svg"},{x:"65.83",dominantBaseline:"text-before-edge",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(69.365 414.6)"}),"Dynamic Build"),(0,a.kt)("text",d({parentName:"svg"},{x:"65.83",dominantBaseline:"text-before-edge",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(289.365 414.6)"}),"Dynamic Build"),(0,a.kt)("text",d({parentName:"svg"},{x:"59.72",dominantBaseline:"text-before-edge",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(515.475 414.6)"}),"Static Build"),(0,a.kt)("g",d({parentName:"svg"},{strokeLineCap:"round"}),(0,a.kt)("path",d({parentName:"g"},{fill:"none",stroke:"#e67700",strokeDashArray:["8","9"],strokeWidth:"1.5",d:"M454.255 81.895c.63 22.96 9.84 112.6 5.29 138.56-4.56 25.95-27.02 14.18-32.61 17.16"})),(0,a.kt)("path",d({parentName:"g"},{fill:"#e67700",fillRule:"evenodd",strokeWidth:"0",d:"m425.895 237.895 12.88-8.35.04 15.71-11.88-7.03"})),(0,a.kt)("path",d({parentName:"g"},{fill:"none",stroke:"#e67700",strokeWidth:"1.5",d:"M427.325 238.525c5.13-2.91 9.2-6.32 14.28-8.82m-1.79 1.8c.66 2.97.35 7.9 1.53 11.55m-.15 1.47c-5.16-4.06-10.55-5.03-14.57-7.36m.31.45s0 0 0 0"}))),(0,a.kt)("g",d({parentName:"svg"},{strokeLineCap:"round"}),(0,a.kt)("path",d({parentName:"g"},{fill:"none",stroke:"#e67700",strokeDashArray:["8","9"],strokeWidth:"1.5",d:"M465.087 207.388c.52 9.69-.8 48.23 3.28 59.52 4.07 11.29 17.36 6.99 21.18 8.23"})),(0,a.kt)("path",d({parentName:"g"},{fill:"#e67700",fillRule:"evenodd",strokeWidth:"0",d:"m489.807 274.458-12.95 7.35-.76-12.97 12.67 4.6"})),(0,a.kt)("path",d({parentName:"g"},{fill:"none",stroke:"#e67700",strokeWidth:"1.5",d:"M488.207 274.908c-2.71.69-6.68 4.55-13.34 4.71m.63 1.51c-.3-2.94 1.61-4.71 1.57-11.55m-1.81-1.34c5.37.74 7.45 4.35 15.6 8.03m-1.31-1.13s0 0 0 0"}))),(0,a.kt)("text",d({parentName:"svg"},{fill:"#e67700",dominantBaseline:"text-before-edge",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},transform:"translate(291.868 10)"}),"Static Plugins"),(0,a.kt)("text",d({parentName:"svg"},{fill:"#5c940d",dominantBaseline:"text-before-edge",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},transform:"translate(35.195 491.577)"}),"are shared libraries next to libtenzir"),(0,a.kt)("text",d({parentName:"svg"},{fill:"#5c940d",dominantBaseline:"text-before-edge",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},transform:"translate(35.195 461.585)"}),"Dynamic Plugins"),(0,a.kt)("g",d({parentName:"svg"},{strokeLineCap:"round"}),(0,a.kt)("path",d({parentName:"g"},{fill:"none",stroke:"#5c940d",strokeDashArray:["8","9"],strokeWidth:"1.5",d:"M190.483 474.257c7.6-5.5 36.84-8.73 44.26-33.08 7.43-24.36-4-91.05.29-113.06 4.29-22.02 20.98-15.94 25.43-19.05"})),(0,a.kt)("path",d({parentName:"g"},{fill:"#5c940d",fillRule:"evenodd",strokeWidth:"0",d:"m261.593 310.847-12.7 6.45-4.16-11.62 16.87 2.94"})),(0,a.kt)("path",d({parentName:"g"},{fill:"none",stroke:"#5c940d",strokeWidth:"1.5",d:"M260.223 308.507c-3.35 3.07-5.59 5-11.23 10.84m-.57-.16c-.35-4.67-2-11.54-3.05-14.25m1.4.2c3.61 2.44 7.76 1.08 14.56 5.05m-.87-1.12s0 0 0 0"}))),(0,a.kt)("g",d({parentName:"svg"},{strokeLineCap:"round"}),(0,a.kt)("path",d({parentName:"g"},{fill:"#82c91e",strokeWidth:"0",d:"m294.145 163.405 121.31-1.07-.8 40.63-118.53-1.97"})),(0,a.kt)("path",d({parentName:"g"},{fill:"none",stroke:"#000",d:"M295.795 160.255c48.92 1.55 96.44 1.57 117.82-.47m-118.45 2.58c35.36-.69 70.25.6 120.99-.97m-2.94.53c3.66 9.36 3.39 21.48 1.84 41m0-41.85c-.35 14.73.78 29.85.63 39.6m1.24 1.93c-43.22 1.01-84.4-.49-121.22.17m120.07-.94c-47.42.73-91.46 1.21-121.55.46m1.66-1.95c.25-10.14-1.75-20.71-.49-39.8m-.95 41.08c.03-11.95 1.24-25.47.46-40.63"}))),(0,a.kt)("text",d({parentName:"svg"},{x:"30.32",dominantBaseline:"text-before-edge",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(324.875 172.085)"}),"libtenzir"),(0,a.kt)("g",d({parentName:"svg"},{strokeLineCap:"round"}),(0,a.kt)("path",d({parentName:"g"},{fill:"#fab005",strokeWidth:"0",d:"m295.455 222.335 119.2.63 1.47 38.03-120.56-.97"})),(0,a.kt)("path",d({parentName:"g"},{fill:"none",stroke:"#000",d:"M297.175 222.285c40.84.83 78.15-1.7 117.83.59m-119.32-1.76c30.38.36 61.13-.65 119.1.24m2.18-.45c-.67 17.1-2.31 32.74-.39 39.02m-1.54-38.87c1.08 13.14.6 25.16.62 39.97m-.45 2.19c-39.74-.89-79.59.17-118.36-2.07m117.41.28c-45.52.77-94.79 1.16-119.08.61m1.14.1c-2.14-8.93-1.06-22.17-.77-40.97m-1.16 41.21c1.51-8.88.82-17.53.28-39.88"}))),(0,a.kt)("text",d({parentName:"svg"},{x:"55",dominantBaseline:"text-before-edge",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(300.195 232.085)"}),"Plugin A"),(0,a.kt)("g",d({parentName:"svg"},{strokeLineCap:"round"}),(0,a.kt)("path",d({parentName:"g"},{fill:"#82c91e",strokeWidth:"0",d:"m294.655 282.965 121.47-1.97-.56 39.03-118.45 3.43"})),(0,a.kt)("path",d({parentName:"g"},{fill:"none",stroke:"#000",d:"M297.155 282.315c24.46-2.95 53.83.13 117.09-.78m-118.51.87c45.72-.44 89.66-.48 120.3-1.81m.66 2.05c-1.29 12.95.23 22.63-1.11 38.67m.58-39.89c-.54 9.21-.58 19.53-.63 41.03m-.03-.74c-41.93 2.03-82.93.41-118.41 1.03m119.02-.84c-40.85.2-78.86-.07-121.35.03m-.45 1.56c.85-12.47 1.01-21.37-1.08-43.4m2.37 41.48c-.37-12.72-.61-23.36-.28-39.61"}))),(0,a.kt)("text",d({parentName:"svg"},{x:"55",dominantBaseline:"text-before-edge",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(300.195 292.085)"}),"Plugin B"),(0,a.kt)("g",d({parentName:"svg"},{strokeLineCap:"round"}),(0,a.kt)("path",d({parentName:"g"},{fill:"#fab005",strokeWidth:"0",d:"m516.515 343.105 116.96-2.13-.18 42.08-117.86-2.43"})),(0,a.kt)("path",d({parentName:"g"},{fill:"none",stroke:"#000",d:"M514.705 340.805c24.4.72 51.09 2.36 118.52-.4m-118.73 2c40.68.51 78.66.24 119.84-.39m2.82-1.74c-3.85 10.67-2.06 22.36-2.42 40.53m.51-38.37c-1.19 11.74-.29 24.83-.98 39.36m.28-2.12c-39.63 2.69-76.98 3.74-119.13 3.13m119.38-.76c-41.84.84-83.72 1.06-118.96-.11m-.78-.09c1.47-13.83-.66-31.48-1.43-39.74m1.47 40.05c.12-11.32.03-23.02-.29-41.41"}))),(0,a.kt)("text",d({parentName:"svg"},{x:"55",dominantBaseline:"text-before-edge",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(520.195 352.085)"}),"Plugin C"),(0,a.kt)("g",d({parentName:"svg"},{strokeLineCap:"round"}),(0,a.kt)("path",d({parentName:"g"},{fill:"#fab005",strokeWidth:"0",d:"m513.475 160.975 119.82 2.08 2.14 37.57-119.55 2.02"})),(0,a.kt)("path",d({parentName:"g"},{fill:"none",stroke:"#000",d:"M513.405 160.865c30.41 2.11 58.63.01 122.32 2.25m-119.72-.85c28.32-1.26 57.35-1.24 118.57-1.52m-.93.68c2.17 12.19 1.48 19.44 1.82 39.31m-1.24-39.09c.92 12.47.06 23.99 1.18 39.18m-1.99 1.41c-36.16-.1-72.67-.57-117.16-2.14m119.09 2.05c-42.94.78-86.4.34-119.26.23m.76 1.2c-2.1-14.32-3.2-25.93-2.02-40.68m.65 39.19c-.05-9.71-.63-19.87.38-39.74"}))),(0,a.kt)("text",d({parentName:"svg"},{x:"30.32",dominantBaseline:"text-before-edge",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(544.875 172.085)"}),"libtenzir"),(0,a.kt)("g",d({parentName:"svg"},{strokeLineCap:"round"}),(0,a.kt)("path",d({parentName:"g"},{fill:"#fab005",strokeWidth:"0",d:"m513.295 223.055 122.14-2.43.45 42.02-121.65-.93"})),(0,a.kt)("path",d({parentName:"g"},{fill:"none",stroke:"#000",d:"M514.415 222.515c30.11-1.68 63.92 1.03 119.7-2.32m-119.3 1.8c45.41-.8 91.55-2.07 119.89.57m.72 1.02c-1 6.59-.27 15.89-.27 38.09m-.03-39.48c-1.25 15.02-.11 29.46.18 39.07m-.72 2.01c-23.71-.08-47.4-2.78-118.15-2.49m119.42 1.58c-41.58.24-82.88.68-120.6-.85m-.54-.03c-1.42-11.91-.22-23.64-.89-40.11m1.56 40.26c-.69-15.19.36-27.89-1.05-40.35"}))),(0,a.kt)("text",d({parentName:"svg"},{x:"55",dominantBaseline:"text-before-edge",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(520.195 232.085)"}),"Plugin A"),(0,a.kt)("g",d({parentName:"svg"},{strokeLineCap:"round"}),(0,a.kt)("path",d({parentName:"g"},{fill:"#fab005",strokeWidth:"0",d:"m515.435 280.625 120.45 2.02-1.65 39.07-119.5.29"})),(0,a.kt)("path",d({parentName:"g"},{fill:"none",stroke:"#000",d:"M513.225 280.405c34.2 2.15 64.28-.77 123.62 2.81m-122.51-1.2c44.41-1.76 88.7.06 120.2-1.21m.2 0c.78 11.61.47 24.23 2.17 38.85m-2.64-37.86c1.11 11.25 1.01 23.91-.03 38.9m1.18 2.11c-39.06-1.69-78.8-1.01-119.29-.92m119.71.05c-42.45 1.38-85.98.52-120.51.47m-1.7-.3c1.29-15.19.3-32.68 2.72-39.95m-1.54 38.59c.97-12.42-.55-27.5-.56-38.42"}))),(0,a.kt)("text",d({parentName:"svg"},{x:"55",dominantBaseline:"text-before-edge",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(520.195 292.085)"}),"Plugin B"),(0,a.kt)("path",d({parentName:"svg"},{fill:"none",stroke:"#c92a2a",strokeLineCap:"round",strokeWidth:"4",d:"M286.805 212.575c34.06 1.52 67.9 1.16 135.92-.28m-135.99 2.07c43.84-2.73 85.79-1.45 138.2-1.4m.49 2.18c-1.82 22.7-1.73 46.38-1.46 114.61m.1-116.04c-.52 32.05.28 63.95.76 114.96m-.11 1.21c-45.16 1.33-93.7 1.32-136.48.83m136.37-1.83c-47.74 1.14-94.06-.38-137.89-.36m-.95 2.48c2.43-30.9.47-59.85 2.39-118.2m-.54 115.91c-1.49-34.98.09-72.81.18-115.13"})),(0,a.kt)("g",d({parentName:"svg"},{strokeLineCap:"round"}),(0,a.kt)("path",d({parentName:"g"},{fill:"none",stroke:"#c92a2a",strokeDashArray:["8","9"],strokeWidth:"1.5",d:"M439.236 302.52c3.01 3.62 14.82 2.03 17.84 22.18 3.03 20.15-3.66 77.49.34 98.69 3.99 21.2 19.44 24.05 23.65 28.52"})),(0,a.kt)("path",d({parentName:"g"},{fill:"#c92a2a",fillRule:"evenodd",strokeWidth:"0",d:"m438.336 301.54 14.61 1.76-4.54 12.9-7.34-14.24"})),(0,a.kt)("path",d({parentName:"g"},{fill:"none",stroke:"#c92a2a",strokeWidth:"1.5",d:"M439.396 301.59c4.13 2.92 10.41 1.24 15.44 4.22m-.92-.26c-2.14 1.53-3.42 3.45-6.34 10.92m.04-1.28c-2.8-1.6-4.93-4.47-9.87-12.65m1.49-.02s0 0 0 0"}))),(0,a.kt)("text",d({parentName:"svg"},{fill:"#c92a2a",dominantBaseline:"text-before-edge",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},transform:"translate(415.195 491.577)"}),"are available at libtenzir build time  "),(0,a.kt)("text",d({parentName:"svg"},{fill:"#c92a2a",dominantBaseline:"text-before-edge",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},transform:"translate(415.195 461.585)"}),"Bundled Plugins")))),(0,a.kt)("p",null,"Plugins do not only exist for extensions by third parties, but Tenzir also\nimplements core functionality through the plugin API. Such plugins compile as\nstatic plugins. Because they are always built, we call them ",(0,a.kt)("em",{parentName:"p"},"builtins"),"."),(0,a.kt)("p",null,"Tenzir offers several customization points to exchange or enhance functionality\nselectively. Here is a list of available plugin categories and plugin types."),(0,a.kt)("h2",d({},{id:"pipeline"}),"Pipeline"),(0,a.kt)("p",null,"The following plugin types allow for adding ",(0,a.kt)("a",d({parentName:"p"},{href:"/pipelines"}),"pipeline")," logic."),(0,a.kt)("h3",d({},{id:"operator"}),"Operator"),(0,a.kt)("p",null,"The pipeline plugin adds a new ",(0,a.kt)("a",d({parentName:"p"},{href:"/operators"}),"pipeline operator")," that\nusers can reference in a pipeline definition."),(0,a.kt)("h3",d({},{id:"aggregation-function"}),"Aggregation Function"),(0,a.kt)("p",null,"The aggregation function plugin adds a new ",(0,a.kt)("a",d({parentName:"p"},{href:"/operators/summarize#aggregate-functions"}),"aggregation\nfunction"),"\nfor the ",(0,a.kt)("inlineCode",{parentName:"p"},"summarize")," pipeline operator that performs an incremental aggregation\nover a set of grouped input values of a single type."),(0,a.kt)("h2",d({},{id:"connector"}),"Connector"),(0,a.kt)("p",null,"The following plugin types allow for adding ",(0,a.kt)("a",d({parentName:"p"},{href:"/connectors"}),"connectors"),"."),(0,a.kt)("h3",d({},{id:"loader"}),"Loader"),(0,a.kt)("p",null,"The loader plugin defines the input side of a connector for use in the ",(0,a.kt)("inlineCode",{parentName:"p"},"from\nCONNECTOR read FORMAT")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"load CONNECTOR")," operators."),(0,a.kt)("h3",d({},{id:"saver"}),"Saver"),(0,a.kt)("p",null,"The saver plugin defines the output side of a connector for use in the ",(0,a.kt)("inlineCode",{parentName:"p"},"write\nFORMAT to CONNECTOR")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"save CONNECTOR")," operators."),(0,a.kt)("h2",d({},{id:"format"}),"Format"),(0,a.kt)("p",null,"The following plugin types allow for adding ",(0,a.kt)("a",d({parentName:"p"},{href:"/formats"}),"formats"),"."),(0,a.kt)("h3",d({},{id:"parser"}),"Parser"),(0,a.kt)("p",null,"The parser plugin defines the input side of a format for use in the ",(0,a.kt)("inlineCode",{parentName:"p"},"from\nCONNECTOR read FORMAT")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"parse FORMAT")," operators."),(0,a.kt)("h3",d({},{id:"printer"}),"Printer"),(0,a.kt)("p",null,"The parser plugin defines the output side of a format for use in the ",(0,a.kt)("inlineCode",{parentName:"p"},"write\nFORMAT to CONNECTOR")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"print FORMAT")," operators."),(0,a.kt)("h2",d({},{id:"system"}),"System"),(0,a.kt)("p",null,"The following plugin types allow for adding system-wide functionality."),(0,a.kt)("h3",d({},{id:"command"}),"Command"),(0,a.kt)("p",null,"The command plugin adds a new command to the ",(0,a.kt)("inlineCode",{parentName:"p"},"tenzir-ctl")," executable, at a\nconfigurable location in the command hierarchy. New commands can have\nsub-commands as well and allow for flexible structuring of the provided\nfunctionality."),(0,a.kt)("h3",d({},{id:"store"}),"Store"),(0,a.kt)("p",null,"Inside a partition, the store plugin implements the conversion from in-memory\nArrow record batches to the persistent format, and vice versa."),(0,a.kt)("admonition",d({},{title:"Store = Format",type:"tip"}),(0,a.kt)("p",{parentName:"admonition"},"Every store plugin is also a ",(0,a.kt)("a",d({parentName:"p"},{href:"#format"}),"format")," and acts as both\n",(0,a.kt)("a",d({parentName:"p"},{href:"#parser"}),"parser")," and ",(0,a.kt)("a",d({parentName:"p"},{href:"#printer"}),"printer"),".")),(0,a.kt)("h3",d({},{id:"component"}),"Component"),(0,a.kt)("p",null,"The component plugin spawns a component inside a node. A component is an\n",(0,a.kt)("a",d({parentName:"p"},{href:"actor-model"}),"actor")," and runs in parallel with all other components."),(0,a.kt)("p",null,"This plugin is the most generic mechanism to introduce new functionality."))}u.isMDXComponent=!0}}]);