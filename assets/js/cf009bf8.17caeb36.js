"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[66075],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>s});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),M=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=M(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},w=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=M(n),w=a,s=p["".concat(l,".").concat(w)]||p[w]||d[w]||c;return n?r.createElement(s,o(o({ref:t},m),{},{components:n})):r.createElement(s,o({ref:t},m))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=w;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var M=2;M<c;M++)o[M]=n[M];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}w.displayName="MDXCreateElement"},77703:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>A,contentTitle:()=>x,default:()=>N,frontMatter:()=>s,metadata:()=>D,toc:()=>T});var r=n(3905),a=Object.defineProperty,c=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&m(e,n,t[n]);if(i)for(var n of i(t))M.call(t,n)&&m(e,n,t[n]);return e},d=(e,t)=>c(e,o(t)),w=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&M.call(e,r)&&(n[r]=e[r]);return n};const s={},x="Run",D={unversionedId:"use/run/README",id:"use/run/README",title:"Run",description:"We are in the middle of renaming VAST to Tenzir in multiple steps. The",source:"@site/docs/use/run/README.md",sourceDirName:"use/run",slug:"/use/run/",permalink:"/docs/next/use/run/",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/main/web/docs/use/run/README.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Use",permalink:"/docs/next/use/"},next:{title:"Import",permalink:"/docs/next/use/import/"}},A={},T=[{value:"Start a server",id:"start-a-server",level:2},{value:"Stop a server",id:"stop-a-server",level:2},{value:"Spawn a client",id:"spawn-a-client",level:2},{value:"Client connection failure",id:"client-connection-failure",level:2}],u={toc:T},f="wrapper";function N(e){var t=e,{components:n}=t,a=w(t,["components"]);return(0,r.kt)(f,d(p(p({},u),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",p({},{id:"run"}),"Run"),(0,r.kt)("admonition",p({},{title:"Renaming in progress!",type:"caution"}),(0,r.kt)("p",{parentName:"admonition"},"We are in the middle of renaming VAST to Tenzir in multiple steps. The\ndocumentation here might not reflect the current project state at the moment.")),(0,r.kt)("p",null,"Running Tenzir means spawning a process of the ",(0,r.kt)("inlineCode",{parentName:"p"},"tenzirctl")," executable. A Tenzir\nprocess can operate in two modes:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Server"),": runs continuously and listens on a network socket accepting\nconnections."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Client"),": connects to the server to (1) submit a request and receive a\nresponse, (2) publish data, or (3) subscribe to data.")),(0,r.kt)("admonition",p({},{title:"Tenzir Node",type:"info"}),(0,r.kt)("p",{parentName:"admonition"},"A server contains a special component called the ",(0,r.kt)("em",{parentName:"p"},"node")," that acts as container\nfor pluggable components implemented as\n",(0,r.kt)("a",p({parentName:"p"},{href:"/docs/next/develop/architecture/actor-model"}),"actors"),". In the future, Tenzir will\nbe able to connect multiple nodes together to create a distributed system.")),(0,r.kt)("p",null,"A standard deployment consists of a server close to the data sources and\nmultiple clients that publish events and submit queries:"),(0,r.kt)("p",null,(0,r.kt)("figure",p({parentName:"p"},{className:"markdown-inline-svg"}),"\n  ",(0,r.kt)("svg",p({parentName:"figure"},{viewBox:"0 0 720 240.649",role:"img","aria-hidden":"true"}),"eyJ2ZXJzaW9uIjoiMSIsImVuY29kaW5nIjoiYnN0cmluZyIsImNvbXByZXNzZWQiOnRydWUsImVuY29kZWQiOiJ4nO1cXGlT47hcdTAwMTb9zq+geF87XHUwMDFlSVfrfKNptmYnzdK8mqKcxFx1MDAwNIOzjO1cdTAwMDTCVP/3d1x1MDAxNVx1MDAxNttJXHUwMDFjJ1x1MDAwNDphXHUwMDFl7qpcdTAwMGXxXCJdS/fccyRd5Z+l5eWVuNf2Vv5cXF7x7qtu4NdC927liz3f9cLIbzXxXHUwMDEy63+PWp2w2r/zOo7b0Z9//OG2207ylFNtNVx1MDAxZZ/0XHUwMDAyr+E141xi7/0vfl9e/qf/f6qu0KvGbrNcdTAwMWV4/Vx1MDAwN/qXkuooY2Tw9H6r2a+bKsNccjAhkzv86Fx1MDAxYlZcdTAwMTh7Nbx85Vx1MDAwNpGXXFyxp1bOmt9+llx1MDAwZlx1MDAwZs5oe6d6XHUwMDFm/PhcdL31U5bUe+VcdTAwMDdBOe5cdTAwMDV9u6JcdTAwMTa+S3ItisPWrXfm1+JrW/fA+bynwlanft30oijzTKvtVv24Z8+RxPjHRvhzOTlz32+B5Lt9XHUwMDAyNFx1MDAxOah7rVx1MDAxNbRCW/d/SP9Iaq+41ds6mtCsJfdUvVx1MDAxYa+5yT13z2/Ek3KvPb9+XHUwMDFk48l0XV6/VVx1MDAwMVx1MDAwNFxiTlxye7lgK2hv1/o9/Ff6xZu1p1x1MDAxN3/u8qTT6dOZX4mp9v71QWdJO0zGaWLvPn55h1RcdTAwMDfLS7pZ2rvbbTQrrunsrq2SXHUwMDFllFde7vv19FdiZ6ddc1x1MDAxZv2FSiVcdTAwMTllXHUwMDEyXGI15uV64Ddv8WKzXHUwMDEzXHUwMDA0yblW9TZxsaXUi1xmObdcdTAwMWKGrbtRjlxyWFOuY0tBhaSG8IlcdTAwMWR7073b3Wp+bW8pUj+pXHUwMDFjb3Z/7DaCXHUwMDFjx752q9ed0Ju/azNNXHUwMDFjfFVNmDFcdTAwMWMo0TLj6UxTXHUwMDA3qCRSMClcdTAwMTXTfCa/Z0xXPDns98Y4wDU1ilx1MDAxMCG1oXxcdTAwMThcdTAwMDVCO1KDXHUwMDAxrlx1MDAwMJiiclx1MDAxMFx1MDAxM4xcdTAwMTmOj8M0mMg41JDzv6V/plrNXHLjr36z5jfrg494zVrOlcCN4rVWo+HHaMZhy2/Gg3f0y121jn7tubVcdTAwMTElp6+txKE/XHUwMDEw7du20Czmk7+WXHUwMDEzn+l/efn7ry8j787tTntcZnZkUthS+jNcdTAwMGbMmaCTxrLOQzLDWoxA351cdTAwMTjIo1x1MDAwM9hvYqhcdTAwMDSe0zGUyOCWXHUwMDEz5YiB2qfD6lx1MDAxNb1iV2xcdTAwMDRHwVxijkrV/oRHQ1x1MDAxOFx1MDAxM7bhZ+IoVsxR42HKUi03XHUwMDA1TK9azbjsP/RNIJmzXHUwMDFibsNcdTAwMGZ6mb7tuyQ22Vrgo1HpVo08rLPPJjpz92rg163TrlTxXHUwMDAxL8z4c+yjgHu5oeHXammcVtFcdTAwMDRcdTAwMTfLXGa3J9FSrdCv+003+JG1cCzAiqSgyMNcdTAwMTlFQCNHqCmkYNyQm9e923Ll5oGz4/LmKW9J9bGkIONzlYJUMK6Z4mpOWvCxXHUwMDFmj8/IXtvoh/XVUvey3nmI9U7nPCtccjPxe0otOFx1MDAxZIhfRVx1MDAxZpzmubXQkkpO+OT0Mb41Plx1MDAwNH0wOWf6QHlFZT+cfPLHO/JHQVx1MDAwMH5ccn+MXHUwMDE5bfFcXI1GJVPSaEkmR9n+USeqheffgsugfXhy0K7Q82qcg7JFXHUwMDFhbWVlXHUwMDFhm4098lx1MDAwNlRpS15QXHUwMDA22lx1MDAwMcVcdTAwMTCAXHUwMDE0XHUwMDAzXHUwMDFhV5pcZlxyoig3TJAp2WSWUdQr4fV/MYpK9aE9SsPdl5SwlP58pbKTucpOXG7BlILUfFNcdTAwMTE4z2tcdTAwMTd7ULp66Fx1MDAxZIXy8LJ36VNtzGJcdTAwMGI7TrLQhPeC5mTCjlx1MDAxMUG0MpolcyFzXHUwMDEwdipqd7rbYv3vXHUwMDBlRDdcIip9+362sfGhhJ2GXFyvJlx1MDAxYUBpPvlwZXxrLKSw4yQr7IDPXdgpw7RcdTAwMDFNZ/LrXHUwMDBmJezKXthNq7TfIOxcblx1MDAwMvCgsHuy8FVcYqNcIn/qXHKHTVQpoiZnXHUwMDBlvt49h7272uXe99OHnbXL+44nxWIzXHUwMDA3XG5bx1xiXHUwMDE4XHUwMDFhQynjKKF0+vxbXHUwMDAyXHUwMDBl5FxivFxy8YhcdTAwMDRkXHUwMDExJVPSe1x1MDAwZXBcdTAwMTOGgphcdTAwMTFuqSn/XHUwMDAyuO226tFosPHRYFx1MDAwYryreFxm1OJWO1x1MDAwZmeZd1x1MDAxOFx1MDAwNFXfjldBioHJg1x1MDAxNNVMa6GUklx1MDAxM0NK3l9fyrCyXHUwMDEx7Fx1MDAwNZutU1pcdTAwMTL0KPy52JBiXHUwMDA2XHUwMDFjSlxmqFx1MDAwMfaSxpGcyHdClFx1MDAxOLHuNIwoTiVF/Z26MFx1MDAwN0RJYlJcdTAwMGJcdTAwMWHvjaj1bt+mXHUwMDA1wNSTJa9DXHUwMDE1z1x1MDAwNVx1MDAxNdeSXHUwMDAyXHUwMDE3k2Oqd3DGz3e7rXN+eKTukKrk9n1t0TBFXHUwMDFkgdxrJDCpXGbXRqhcZshoSlx1MDAxYvfRXHUwMDA16l1gNWo5d1x1MDAxOFaUgrKL0HKuTPVcdTAwMTbCcHJcXDmOM1x1MDAxNahcblXha2FlXHJcdTAwMTmLqb5hIzAlyJhcdTAwMTRcbtCEajnFXHUwMDAwq7b5dXWtvrEhj9a2Wl33uLd26nZcdTAwMTdcclVcdTAwMDNcdTAwMDMsTlx1MDAxZEmZppJpQJmlspAyxCFSKlwiJDdGc/YuXHUwMDAwXHUwMDEz2lx1MDAxMSBcdTAwMThcdTAwMDGBpKAt3IdcdTAwMDGnhCMwXHUwMDA0KFx1MDAxNKvSUFx1MDAwNUNzf0pcdTAwMTJO0PtHwy/B2e3m6s1O5WKr2alcdTAwMWNebLX2eNRdS9av8Ia9/bveXql+cr6xXHUwMDA3++3u7dnNhiTPM1x1MDAwM4tcdTAwMGXjhZhZzFxce9M5ReJQY3NXXGKndlx1MDAxYZEoIdLPXHUwMDBi5Vx1MDAxMGNcdTAwMDThnFx1MDAwMVx1MDAwMDGyuDxCXGZcdTAwMDF0fWXwIFwimVO2h1x1MDAwNEeiV1x1MDAwM5aIXHUwMDAzJEN0UXngXHUwMDEw65+Mo1x1MDAwNVx1MDAxNFxyMZApTjqcaFxyYDg6MlFQVFx1MDAxY1x1MDAwNcdcdTAwMGVAhZ1Mo1x1MDAxYVx1MDAxZslcdTAwMTanXHUwMDFkpYWx51FSXHUwMDFiVvi2QFx1MDAxZKo44Si+qVx1MDAwNCoyeS0oTVx1MDAwNZNcdTAwMTRcclx1MDAxM1x1MDAxY5tWXHUwMDE0lsa1Q5TSUuJcdTAwMDNcdTAwMDKkllx1MDAwM7ZcdTAwMDHnwEHY9yWaXHUwMDE1lWa7Tmijke2BcICsbVxifopCgEpcdTAwMWM9KFx1MDAwNqqwNKyeXHQpXHUwMDA0vovWNOsl2Ks4nGNcdTAwMDZjXHUwMDA16lxuRfhcdTAwMDSlXHR0XHUwMDAyW1x1MDAxNnC0Ulx1MDAwZficIVx1MDAxNGGLTqQphqdJbJNgfVx1MDAwNIQ0Smf6lDvK+qNRVEikJlHcbthcdTAwMGLcYF9SjNCAMjBdWok4jCnF8E2xRzWWLItcdTAwMGLkXHUwMDBlM0Ti+yowXHUwMDAyVU2mQHRwYNizjCO6hMFxRKGbSFx1MDAwN4dB2LNcdTAwMTRHP9h4PNN6Je6gq2HIR/ChW0p876JcdTAwMDJcdTAwMTm2XHUwMDFmXHUwMDE4XHUwMDEwoFx1MDAxOUVQXHUwMDBlWihcdTAwMWRi31nYaTpCNCl8YVx1MDAwNJlGN6ZcdTAwMDZjL1x1MDAwNl/0iEx5wrGtx7GHsUKmXG6LY+grwkZcZvRXbVxmy/peiTmcXHUwMDBi5ClLeOjQpLhDsFx1MDAxM1x02N7FJueacLua8WXwOsdoR1x1MDAxMFx1MDAxOIwhS5LCTsmLukvpz2m1XHUwMDE0No5cdTAwMWE8/aylNJqIIZRPno3q+j+hTG8uwijY90tnXHUwMDFkf2unsbb4WkrZ3sV4h3FCJmqpv1ZcbuhoXHUwMDFjpZRcdTAwMDbGteAwYNdUWipcdTAwMGXdZtR2w8yCe1pPXHUwMDE5JFx1MDAwNEtn3KQk3YuakuikXHUwMDE0UNkxYvOEh9NRMUCi/Taufcqpf6+cwlx1MDAwMTbH4IyhQ2GcXHUwMDAyyLJcdTAwMDdGMiRcdTAwMTZmUNBgTJHoXHUwMDEyReVpjJVIgYh1hZwkdaY4pDaJUVljsEXXkrRQTFGUXHUwMDA0SII4KsBcdTAwMDBMkSgzYVx1MDAwZuO8ZoKhdlx1MDAxM8hcdTAwMWFAaVFxQFx1MDAxYyRIzS3v45NcXKlscVxmgzIlXFzYpF4hTCGvKVRcdTAwMTFcXKHcQ/2FbVx1MDAwNFklilx1MDAxY49cdTAwMTKQciR6bNxiwYKINFaH4pugXHUwMDA12Vxiz1x1MDAxY5RcdTAwMTVcYmQhqF2OwFx1MDAxMDKJYlx1MDAxOVx1MDAxNVx1MDAwMexhRVx1MDAwMZ6yakpcdTAwMTlcdTAwMWKVdarpZiNcdTAwMDBNc1crkV5RVahpXHUwMDE4IDpZjXpwVladb2F7Pap+1by16IvwXHUwMDFjnczOXHUwMDFhmP4wNsHTI1x1MDAwM1CGXCLXSn9sXGJUL3SmaeD3plx1MDAwMFxmnOiLaOroZJpPXG74pIBcdTAwMTHlfVLA8/Gvplx1MDAwMC9cYvx2NHpKXHUwMDE1XHLMZVx1MDAwMYZ9iapyXG5cdTAwMTbYL99cdTAwMDQ3Xm0jXHUwMDE07HL1xjs9u/e7q1x1MDAwYs9cdTAwMDKZuFx1MDAwZprjXHUwMDEw09hcdTAwMWM0XHUwMDFj/zJiZlxc/ru6XHUwMDFhXHUwMDE58ClSXHUwMDBiujYlXG6dJKniJeJTXHUwMDFjnUhcdTAwMWMjUsU4ck9q/e1Z9Fx1MDAxM4I8QHFcXDqHiP/70jDHOnZBkqHId21FuNbETLGwfbdB1m/3umfnpUpblz04+H7Xqiy2a0s96Npz3T6C7EQxYOvZ1rJnTDJ0XHUwMDFm6lx1MDAxN1V382jXra5cdTAwMDVcdTAwMTdcdTAwMTfERNun7Vx1MDAxNFx1MDAxYZaX85JcZr+MKzZcdTAwMDK+s+v90PTO2+pcbr5cdTAwMTbXLmvN0cU+5qwn5Vx1MDAwZVx1MDAwMW1OyYsp6TiAXHUwMDE2jlpcdTAwMThgmuTF8a28kMmLUi/YpkagqOOU/tyU8q65i1x1MDAwNWH9XHUwMDFkNjXms5JcdTAwMTBammmSrVx1MDAwZa5cdTAwMGVcdTAwMGaPrt3j2vHRT9Zt69Ll1uXOx+KkeW9ppFx1MDAxONdcdTAwMTjIqbbyvzkpnURcclU6a9zeheK8dbBNj8on4nZ2UtKHq0b2olx1MDAxZkfbblx0Ot9ly4+Pelx1MDAxZoyUcrdK2rVcdTAwMWb8R6bIo1x1MDAxYd/MXHUwMDFmgpXmv1dScGl/osPMhJdPVlx1MDAxYc9KXHUwMDA1gf01rJSHMJGfqIiRUU/3qzRcdTAwMDfXq/f65CiurLq3bF//zY8vrtZcdTAwMTeNkFxuMlx1MDAxNVx1MDAxNV+kTEVcdTAwMTCS4THbxqxcdTAwMDWA278xTzF/9zFPXHUwMDA100FUXHRFNZVaTz6aXHUwMDFhP7hcXNDdx+lfaXuLyYcxu49cdTAwMWTCbVx1MDAxYVx1MDAxNIJaXHUwMDAzpH5cXCHZjKxcdTAwMWNcdTAwMDNcXDNqwFx1MDAxMCO0XHUwMDE4ojV0cKZcdTAwMTWlUyXaL/Jm5FRcdTAwMTB4+kW+ScY7fXRWO9b+XHUwMDEyselswk5jcyO5oZlcdTAwMTS0lbrbtu9jXHUwMDFjI7jQmlx1MDAxOUalfJmFT1x1MDAwMs3H21x1MDAwN53jTfZcdTAwMTj2o6S8pfTn1NvaeP5UJWBcdTAwMTdQStjkLFxci1x1MDAwZc/WLjfCe+P/aJfCxtZVpbHge3CEMo6kwPTgxjZAwcvkwI63t6Th1LTXuFxyXHUwMDAzoFx1MDAwNMOh4oyTl7NuxLHZqL+NiMudSlRccv2KN1x1MDAxNVx1MDAxZL/TXpzEmFdSMpW529yYQJGrXHSdfCQ5fmT9UVx1MDAxOHnGqZd8RqaOVlx1MDAwNChyhk1cdTAwMDBmo1x1MDAxMlx1MDAxYYiDIZTZdG1cbpZdXHUwMDA2XHUwMDAxp1xyUKXkVHj7iHw8fqSX4mPiSCRarrVN9lNGm9SS8zNcdTAwMWJrx65cdTAwMDdqojGMKpksY89ExyMo9/clPOS6kj1KQ170VnRsctdCNFji15P/dFx1MDAxMJd/n97fna5XVjd+XHUwMDFlXHUwMDA2+7vf6/7N5eKTsVx1MDAxZaZippSjlFx1MDAwMp7eKfuWVMxHrIOP2Fx1MDAxMss0MjGV82ViLpPtXCLvzsRHXHUwMDFkL+wtXHUwMDAyXHUwMDBiP1x1MDAxYfKIqaUn1K647XY5xvZ5aeeVru/dfVx1MDAxZJ1cZmHzIZaemt06v9fvnl9Lv/5cdTAwMDfjb9ubIn0=",(0,r.kt)("defs",{parentName:"svg"},(0,r.kt)("style",{parentName:"defs"},'@font-face{font-family:"Virgil";src:url(https://excalidraw.com/Virgil.woff2)}@font-face{font-family:"Cascadia";src:url(https://excalidraw.com/Cascadia.woff2)}')),(0,r.kt)("g",p({parentName:"svg"},{strokeLineCap:"round"}),(0,r.kt)("path",p({parentName:"g"},{fill:"#ced4da",strokeWidth:"0",d:"m28.28 148.43 99.77 2.41 16.03 2.75 3.06 6.04 2.73 4.87 1.54 44.28-5.92 13.53-4.96 4.29-11.62 3.93-98.74 1.42-14.18-4.89-1.37-5.77-2.53-6.48-2.12-51.43 3.7-3.84 3.78-6.17 12.64-3.71"})),(0,r.kt)("path",p({parentName:"g"},{fill:"none",stroke:"#000",d:"M30 150c35.2.33 71.11.35 100 0m-100 0c34.13-.66 68.25-.14 100 0m0 0c13.66 1.34 19.52 7.54 20 20m-20-20c11.93.93 20.56 7.21 20 20m0 0c1.36 15.49-.27 28.4 0 40m0-40c.49 16.66-.33 32.47 0 40m0 0c-1.69 12.9-7.3 19.66-20 20m20-20c1.24 14.27-5.4 19.5-20 20m0 0c-41.38-1.7-80.71.06-100 0m100 0c-27.42-.49-54.62-1.36-100 0m0 0c-12.96-1.16-18.81-7.99-20-20m20 20c-12.94.72-20.26-4.99-20-20m0 0c-1.86-15.74-.28-30.43 0-40m0 40c.98-15.36 1.28-31.06 0-40m0 0c.58-13.89 4.77-20.34 20-20m-20 20c-.31-12.8 7.46-17.91 20-20"}))),(0,r.kt)("g",p({parentName:"svg"},{strokeLineCap:"round"}),(0,r.kt)("path",p({parentName:"g"},{fill:"none",stroke:"#000",d:"M171.432 51.266c21.41 11.18 38.9 24.29 97.34 57.03m-98.67-56.72c30.54 18.96 59.94 35.87 100.8 57.97"})),(0,r.kt)("path",p({parentName:"g"},{fillRule:"evenodd",strokeWidth:"0",d:"m269.682 108.566-13.38-1.16 6.93-11.28 8.01 14.05"})),(0,r.kt)("path",p({parentName:"g"},{fill:"none",stroke:"#000",d:"M271.492 109.516c-2.26.11-7.26.83-16.48-2.23m15.48 2.46c-4.09.19-9.42-.89-13.88-1.52m-1.9.88c4.69-5.08 6.32-9.12 7.11-10.92m-5.52 10.21c1.38-2.21 1.84-5.2 5.69-11.42m1.05.11c2.13 2.86 4.59 7.57 8.22 13.11m-8.56-12.76c1.78 3.6 2.87 5.47 8.85 12.74m-.65-.63s0 0 0 0m0 0s0 0 0 0"}))),(0,r.kt)("text",p({parentName:"svg"},{x:"65",y:"18",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(15 177.5)"}),"Client"),(0,r.kt)("g",p({parentName:"svg"},{strokeLineCap:"round"}),(0,r.kt)("path",p({parentName:"g"},{fill:"#ced4da",strokeWidth:"0",d:"m31.9 10.78 98.05 1.04 12.42.18 6.23 4.59-.61 8.84.36 43.99-2.25 13.29-3.74 6.43-14.18.73-96.37-.77-12.22-1.79-7.12-7.06-1.3-3.83-1.22-50.55 2.95-8.39 6.08-5.87 12.66-2.23"})),(0,r.kt)("path",p({parentName:"g"},{fill:"none",stroke:"#000",d:"M30 10c36.6-2.57 71.34-.74 100 0M30 10c22.71.89 44.85.65 100 0m0 0c12.11.8 20.49 7.14 20 20m-20-20c14.33-1.32 18.84 8.49 20 20m0 0c1.9 13.62-.95 32.76 0 40m0-40c-.83 15.12-.3 30.51 0 40m0 0c1.08 14.14-5.57 19.56-20 20m20-20c2.23 14.62-6.72 18.07-20 20m0 0c-22.2 1.17-44.94-.79-100 0m100 0c-33.58-1.07-66.94-1.15-100 0m0 0c-12.99.63-20.23-5.21-20-20m20 20c-11.89-.49-20.65-8.9-20-20m0 0c1.77-11.49-.64-17.93 0-40m0 40c-.07-12.46-1.3-24.53 0-40m0 0c-.27-12.87 7.35-18.18 20-20M10 30C8.89 14.78 17.46 8.15 30 10"}))),(0,r.kt)("text",p({parentName:"svg"},{x:"65",y:"18",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(15 37.5)"}),"Client"),(0,r.kt)("g",p({parentName:"svg"},{strokeLineCap:"round"}),(0,r.kt)("path",p({parentName:"g"},{fill:"none",stroke:"#000",d:"M169.19 191.41c28.98-14.62 60.08-25.98 100.23-40.87m-100.33 39.4c34.4-13.89 67.01-25.9 100.74-39.28"})),(0,r.kt)("path",p({parentName:"g"},{fillRule:"evenodd",strokeWidth:"0",d:"m271.02 149.34-11.21 12.8-5.18-10.99 16.45-.92"})),(0,r.kt)("path",p({parentName:"g"},{fill:"none",stroke:"#000",d:"M269.22 151.72c-3.29.9-5.37 4.17-10.19 8.97m10.11-10.08c-2.01 3.35-5.4 7.28-9.8 10.18m.48.78c-2.25-3.38-4.38-7.13-5.35-11.14m4.37 11.03c-.75-3.64-2.08-6.55-3.88-11.33m.5-.07c3.89.65 6.8-.5 15.56 1.92m-16.87-2.63c5.82 1.12 9.66 1.4 15.04 1.15m.64.16s0 0 0 0m0 0s0 0 0 0"}))),(0,r.kt)("g",p({parentName:"svg"},{strokeLineCap:"round"}),(0,r.kt)("path",p({parentName:"g"},{fill:"#228be6",strokeWidth:"0",d:"m310.18 89.19 101.23-.41 9.08 4.15 5.04 4.3 3.07 8.61 1.57 46.11-4.8 10.11-1.38 4.23-12.22 3.83-102.12-2.05-10.98.85-6.22-6.17-2.05-8.4 1.08-50.24 2.97-6.92 4.51-4.89 12.21-1.46"})),(0,r.kt)("path",p({parentName:"g"},{fill:"none",stroke:"#000",d:"M310 90c18.57-.26 39.69.4 100 0m-100 0c36.11-.03 73.68-.2 100 0m0 0c14.2-1.15 18.99 8.25 20 20m-20-20c15.35-.05 21.07 8.87 20 20m0 0c1.48 8.32 1.46 14.76 0 40m0-40c.41 11.54.42 22.04 0 40m0 0c1.94 14.45-6.72 18.33-20 20m20-20c-1.93 11.84-6.57 19.31-20 20m0 0c-34.89-1.63-72.27-.05-100 0m100 0c-24.04-.35-48.53.07-100 0m0 0c-12.08-.43-20.56-8.61-20-20m20 20c-14.74-.42-21.61-4.71-20-20m0 0c.23-6.34-.38-15.68 0-40m0 40c.24-10.65.72-20.85 0-40m0 0c-.96-14.97 7.36-21.61 20-20m-20 20c.47-14.65 5.27-19.59 20-20"}))),(0,r.kt)("text",p({parentName:"svg"},{x:"65",y:"18",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(295 117.5)"}),"Server"),(0,r.kt)("text",p({parentName:"svg"},{y:"14",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},transform:"translate(204.953 49.758)"}),"Logs"),(0,r.kt)("text",p({parentName:"svg"},{y:"14",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},transform:"translate(183.11 139.64)"}),"Events"),(0,r.kt)("text",p({parentName:"svg"},{x:"7",y:"14",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"rotate(90 -10 100)"}),"..."),(0,r.kt)("g",p({parentName:"svg"},{fillRule:"evenodd",strokeLineCap:"round"}),(0,r.kt)("path",p({parentName:"g"},{fill:"#f1f2f2",strokeWidth:"0",d:"m330.603 161.647 3.61 63.64 11.81 5.48 14.88-2.11 20.52 1.42 8.53-3.89-1.59-67.42-6.16-2.98-21.17-.93-20.87.85-6.61 5.48"})),(0,r.kt)("path",p({parentName:"g"},{fill:"none",stroke:"#000",d:"M331.713 161.237c-.04 9.45-1.16 45.54-1 55.85.17 10.32 1.16 4.46 1.99 6.04.83 1.58.96 2.66 2.99 3.42 2.03.76 4.59.47 9.19 1.15 4.61.68 12.65 2.76 18.42 2.93 5.76.18 11.93-1 16.17-1.88 4.24-.87 7.39-2.32 9.25-3.36 1.86-1.05 1.52-1.61 1.91-2.91.4-1.29.46 4.78.47-4.88 0-9.66-.31-43.51-.44-53.05-.12-9.54.69-2.93-.3-4.2s-3.57-2.44-5.65-3.41c-2.08-.97-2.66-1.9-6.82-2.42-4.16-.53-12.77-.93-18.14-.74-5.37.19-9.75 1.16-14.07 1.89s-9.38 1.67-11.85 2.48c-2.48.8-2.66 2-2.99 2.37-.32.37.85.02 1.06-.17m-1.59.46c.37 9.62 2.17 47.22 2.54 57.78.37 10.56-.34 4.06-.34 5.57-.01 1.52-1.47 2.98.32 3.53 1.8.56 5.73-.62 10.47-.21 4.75.41 11.9 2.64 18.02 2.66 6.12.02 14.28-1.69 18.68-2.56 4.4-.86 6.17-2.11 7.73-2.64 1.55-.53 1.43.77 1.6-.56.16-1.33-.94 2.41-.61-7.43.34-9.83 2.53-42.11 2.63-51.58.1-9.46-.86-3.63-2.03-5.18-1.18-1.55-2.98-3.07-5.01-4.13-2.03-1.05-3.12-1.71-7.17-2.2-4.06-.5-12.12-.74-17.17-.77-5.05-.03-8.56-.42-13.15.59-4.59 1.02-12.07 4.25-14.4 5.49-2.33 1.24.71 1.7.41 1.97-.29.26-2.17-.34-2.16-.38"}))),(0,r.kt)("path",p({parentName:"svg"},{fill:"none",stroke:"#000",strokeLineCap:"round",d:"M330.655 203.767c.42.15 1.99 1.31 3.72 2.13 1.72.82 4.26 2.31 6.64 2.79 2.37.48 3.88-.32 7.58.08s9.59 2.19 14.6 2.32c5.01.13 11.27-.68 15.47-1.54 4.2-.85 7.66-2.47 9.73-3.59 2.06-1.12 2.15-2.67 2.64-3.13m-58.75-.14c.34.81.29 3.24 1.71 4.47 1.42 1.22 4.35 2.53 6.81 2.88 2.46.36 4.4-.49 7.93-.77 3.53-.28 8.06-.81 13.26-.9 5.21-.1 13.45.96 17.96.32 4.51-.64 7.37-3.08 9.11-4.18 1.74-1.1 1.13-2.52 1.31-2.4M332.06 181.52c.62.46.38 2.51 1.53 3.2 1.15.69 2.89.2 5.38.95 2.5.74 5.8 3.02 9.58 3.51 3.79.49 8.21-.25 13.15-.58 4.94-.33 12.04-.55 16.47-1.38 4.43-.82 8.04-2.59 10.1-3.57 2.07-.97 1.96-1.89 2.29-2.26m-59.39 2.46c.65.68.87 2.03 2.03 2.45 1.15.42 2.25-.07 4.9.07 2.64.15 7.3.33 10.97.8 3.67.47 5.95 2.18 11.04 2 5.09-.19 14.64-2.5 19.5-3.09 4.86-.6 7.93.38 9.67-.49 1.74-.87.82-4.4.77-4.74"})),(0,r.kt)("g",p({parentName:"svg"},{strokeLineCap:"round"}),(0,r.kt)("path",p({parentName:"g"},{fill:"#fff",strokeWidth:"0",d:"M346.93 155.96c5.21-.64 13.16-1.42 19.27-1.27 6.1.15 13.8 1.02 17.35 2.17 3.55 1.14 4.77 3.24 3.96 4.69-.8 1.46-4.28 3.16-8.79 4.03-4.5.88-12.18 1.25-18.24 1.22-6.07-.03-13.34-.73-18.15-1.39-4.82-.67-9.13-1.34-10.73-2.59-1.6-1.25-1.56-3.55 1.12-4.91 2.67-1.36 12.04-2.69 14.92-3.25 2.89-.55 1.91-.11 2.39-.08m5.22 0c5.68-.37 13.75.01 18.7.66 4.95.64 8.94 1.92 10.99 3.23 2.05 1.31 3.09 3.17 1.31 4.62-1.79 1.46-6.54 3.74-12.01 4.11-5.47.38-14.67-1.23-20.81-1.87-6.14-.64-12.17-1.07-16.03-1.97-3.85-.9-6.83-2.42-7.09-3.43-.27-1.02 1.66-1.61 5.5-2.66 3.84-1.06 14.37-3.46 17.55-3.68 3.17-.22 1.26 2.18 1.5 2.37"})),(0,r.kt)("path",p({parentName:"g"},{fill:"none",stroke:"#000",d:"M357.43 154.72c6.08-.24 13.7.42 18.63 1.27 4.93.85 9.49 2.49 10.95 3.84 1.46 1.34.48 3.1-2.19 4.24-2.66 1.14-8.19 2.11-13.78 2.6-5.59.49-13.87.94-19.77.36-5.89-.59-12.06-2.75-15.6-3.89-3.54-1.15-5.99-1.86-5.64-2.97.35-1.12 2.43-2.89 7.76-3.74 5.33-.85 19.14-1.12 24.23-1.35 5.08-.24 6.2-.03 6.26-.06m-2.74-.88c5.69.3 11.56 3.03 15.55 4.15 3.98 1.12 8.3 1.29 8.38 2.59.07 1.3-3.33 4.38-7.92 5.21-4.59.84-13.54-.37-19.6-.21-6.06.15-11.71 1.48-16.77 1.15-5.07-.34-11.21-1.71-13.61-3.17-2.4-1.46-3-4.16-.81-5.58 2.2-1.42 8.16-2.5 13.98-2.94 5.83-.45 17.48.36 20.96.27 3.47-.09-.11-.96-.1-.82"}))),(0,r.kt)("g",p({parentName:"svg"},{strokeLineCap:"round"}),(0,r.kt)("path",p({parentName:"g"},{fill:"#ced4da",strokeWidth:"0",d:"m591.77 150.12 97.88-2.05 13.39 6.47 3.78 3.83 2.96 6.61 1.38 43.82-2.33 12.77-5.49 5.1-12.17 4.17-103.16-1-10.35-4.14-5.18-3.95-1.84-5.72-.81-49.85 1.76-7.56 6.71-5.33 12.57-4.44"})),(0,r.kt)("path",p({parentName:"g"},{fill:"none",stroke:"#000",d:"M590 150c24.89.05 51.78-2.77 100 0m-100 0c25.37-.01 49.8-1.05 100 0m0 0c12.7-.34 21.08 7.48 20 20m-20-20c14.6-.5 22.23 7.95 20 20m0 0c-1.64 11.99-.93 24.93 0 40m0-40c-.78 8.03.02 16.46 0 40m0 0c1.19 12.01-6.32 20.63-20 20m20-20c-.26 15.01-5.22 19.51-20 20m0 0c-27.54-2.01-52.66-2.55-100 0m100 0c-25.53-.22-52.55-.23-100 0m0 0c-15.23-.34-20.27-6.21-20-20m20 20c-12.54 2.09-21.11-8.55-20-20m0 0c-.82-14.6.68-27.5 0-40m0 40c.03-8.83-.53-16.23 0-40m0 0c-1.41-14.83 5.41-18.33 20-20m-20 20c1.58-12.79 8.78-19.1 20-20"}))),(0,r.kt)("text",p({parentName:"svg"},{x:"65",y:"18",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(575 177.5)"}),"Client"),(0,r.kt)("g",p({parentName:"svg"},{strokeLineCap:"round"}),(0,r.kt)("path",p({parentName:"g"},{fill:"#ced4da",strokeWidth:"0",d:"m589.65 8.07 101.21 3.66 10.96 1.64 5.46 4.11 3.57 6.63.79 45.27-3.3 12.29-4.98 6.36-15.35 1.81-98.17-1.33-12.36-1.76-4.34-3.22-3.31-7.97-.74-49.44 4.21-7.83 5.38-6.62 10.31-.09"})),(0,r.kt)("path",p({parentName:"g"},{fill:"none",stroke:"#000",d:"M590 10c40.7-2.36 76.63 1.27 100 0m-100 0c37.5-1.04 76.38-.99 100 0m0 0c14.41.81 21.1 6.23 20 20m-20-20c15.57 1.29 19.94 4.74 20 20m0 0c-.86 9.77-2 16.45 0 40m0-40c-.06 12.93.35 26.35 0 40m0 0c.34 13.96-6.9 21.45-20 20m20-20c1.45 12.84-7.32 17.77-20 20m0 0c-22.19-2.63-48.49.48-100 0m100 0c-30.16-.54-61.85-.43-100 0m0 0c-13.6.46-19.31-4.85-20-20m20 20c-14.44-1.88-19.21-8.51-20-20m0 0c.59-13.55-1.62-24.5 0-40m0 40c-.4-13.94-.81-29.41 0-40m0 0c-1.26-11.66 8.04-19.52 20-20m-20 20c2.11-12.43 4.72-21.04 20-20"}))),(0,r.kt)("text",p({parentName:"svg"},{x:"65",y:"18",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(575 37.5)"}),"Client"),(0,r.kt)("text",p({parentName:"svg"},{x:"7",y:"14",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"rotate(90 270 380)"}),"..."),(0,r.kt)("g",p({parentName:"svg"},{strokeLineCap:"round"}),(0,r.kt)("path",p({parentName:"g"},{fill:"none",stroke:"#000",d:"M449.66 151.16c27.43 11.12 56.21 21.32 99.87 37.94m-99.61-39.85c33.76 13.59 68.32 27.46 99.88 39.12"})),(0,r.kt)("path",p({parentName:"g"},{fillRule:"evenodd",strokeWidth:"0",d:"m549.54 188.83-14.01 2.47 2.84-15.31 12.13 10.77"})),(0,r.kt)("path",p({parentName:"g"},{fill:"none",stroke:"#000",d:"M549.55 189.24c-4.86.68-8.64.63-15.09 1.12m15.28-2.55c-5.19.76-10.06 1.81-15.08 2m.49.22c-.01-4.03 2.8-5.11 4.16-11.81m-3.91 11.79c1.36-4.67 2.57-10.02 3.73-12.49m-.12 1.56c4.91 2.25 6.52 4.83 9.82 9.35m-9.81-10.52c2.75 2.34 6.17 5.18 11.23 9.96m-.45.5s0 0 0 0m0 0s0 0 0 0"}))),(0,r.kt)("text",p({parentName:"svg"},{y:"14",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},transform:"translate(469.613 137.27)"}),"Subscribe"),(0,r.kt)("g",p({parentName:"svg"},{strokeLineCap:"round"}),(0,r.kt)("path",p({parentName:"g"},{fill:"none",stroke:"#000",d:"M449.38 111.15c36.95-22.44 74.79-47.23 102.33-61.7m-101.55 61.22c22.67-13.63 45.27-27.28 101.95-60.82"})),(0,r.kt)("path",p({parentName:"g"},{fillRule:"evenodd",strokeWidth:"0",d:"m448.42 109.51 9.9-12.49 6.37 11.26-16.52 3.23"})),(0,r.kt)("path",p({parentName:"g"},{fill:"none",stroke:"#000",d:"M448.92 112.01c3.1-4.54 7.08-11.39 8.59-13.5m-8.01 13.14c1.58-2.98 3.16-5.83 8.31-12.85m.83.94c1.18 3.22 4.71 5.13 5.05 10.78m-6.59-12.03c2.89 4.11 5.98 8.62 7.53 10.79m-1.61-1.12c-5.62 2.01-11.01 3.48-14.94 2.37m16.34-1.55c-4.74.45-10.08 1.77-15.13 2.72m.09-.55s0 0 0 0m0 0s0 0 0 0"}))),(0,r.kt)("text",p({parentName:"svg"},{y:"14",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},transform:"translate(469.828 47.777)"}),"Query")))),(0,r.kt)("h2",p({},{id:"start-a-server"}),"Start a server"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"start")," command spins up a Tenzir server that blocks until told to\n",(0,r.kt)("a",p({parentName:"p"},{href:"#stop-a-server"}),"stop"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"tenzirctl start\n")),(0,r.kt)("p",null,"By default, a Tenzir server listens on localhost and TCP port 5158."),(0,r.kt)("p",null,"Usually you would invoke ",(0,r.kt)("inlineCode",{parentName:"p"},"tenzirctl start")," only for testing purposes in a\nterminal. In production you would typically use a service manager, e.g.,\n",(0,r.kt)("a",p({parentName:"p"},{href:"/docs/next/setup/install/linux#systemd"}),"systemd on Linux"),"."),(0,r.kt)("h2",p({},{id:"stop-a-server"}),"Stop a server"),(0,r.kt)("p",null,"There exist two ways stop a server:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Hit CTRL+C in the same TTY where you started Tenzir."),(0,r.kt)("li",{parentName:"ol"},"Send the process a SIGINT or SIGTERM signal, e.g., via ",(0,r.kt)("inlineCode",{parentName:"li"},"pkill -2 tenzir"),".\nSending Tenzir a SIGTERM is the same as (1).")),(0,r.kt)("p",null,"Option (3) comes in handy when you are working with a remote Tenzir server."),(0,r.kt)("h2",p({},{id:"spawn-a-client"}),"Spawn a client"),(0,r.kt)("p",null,"Every command except for ",(0,r.kt)("inlineCode",{parentName:"p"},"start")," is a client command that interacts with a\nserver. Run ",(0,r.kt)("inlineCode",{parentName:"p"},"tenzirctl help")," for a list of available commands."),(0,r.kt)("p",null,"To select a specific Tenzir server to connect to,\n",(0,r.kt)("a",p({parentName:"p"},{href:"/docs/next/setup/configure"}),"configure")," the endpoint, e.g., by providing\n",(0,r.kt)("inlineCode",{parentName:"p"},"--endpoint=host:port")," on the command line, exporting the environment variable\n",(0,r.kt)("inlineCode",{parentName:"p"},"TENZIR_ENDPOINT=host:port"),", or setting the configuration option\n",(0,r.kt)("inlineCode",{parentName:"p"},"tenzir.endpoint: host:port")," in your ",(0,r.kt)("inlineCode",{parentName:"p"},"tenzir.yaml"),"."),(0,r.kt)("h2",p({},{id:"client-connection-failure"}),"Client connection failure"),(0,r.kt)("p",null,"In the event of a connection failure, the clients will try to reconnect.\nThis process can be tuned by the two options in the configuration file:"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-yaml"}),"tenzir:\n  # The timeout for connecting to a Tenzir server. Set to 0 seconds to wait\n  # indefinitely.\n  connection-timeout: 5m\n\n  # The delay between two connection attempts. Set to 0 to try connecting\n  # without retries.\n  connection-retry-delay: 3s\n")))}N.isMDXComponent=!0}}]);