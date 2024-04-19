"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[84340],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(f,i(i({ref:n},s),{},{components:t})):r.createElement(f,i({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},64534:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>k,default:()=>O,frontMatter:()=>f,metadata:()=>v,toc:()=>b});var r=t(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,d=(e,n)=>{for(var t in n||(n={}))p.call(n,t)&&s(e,t,n[t]);if(l)for(var t of l(n))c.call(n,t)&&s(e,t,n[t]);return e},u=(e,n)=>a(e,i(n)),m=(e,n)=>{var t={};for(var r in e)p.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&l)for(var r of l(e))n.indexOf(r)<0&&c.call(e,r)&&(t[r]=e[r]);return t};const f={sidebar_custom_props:{connector:{loader:!0,saver:!0}}},k="udp",v={unversionedId:"connectors/udp",id:"connectors/udp",title:"udp",description:"Loads bytes from and saves bytes to a UDP socket.",source:"@site/docs/connectors/udp.md",sourceDirName:"connectors",slug:"/connectors/udp",permalink:"/next/connectors/udp",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/connectors/udp.md",tags:[],version:"current",frontMatter:{sidebar_custom_props:{connector:{loader:!0,saver:!0}}},sidebar:"docsSidebar",previous:{title:"tcp",permalink:"/next/connectors/tcp"},next:{title:"zmq",permalink:"/next/connectors/zmq"}},h={},b=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;endpoint&gt;</code>",id:"endpoint",level:3},{value:"<code>-c,--connect</code> (Loader)",id:"-c--connect-loader",level:3},{value:"<code>-n,--insert-newlines</code> (Saver, Loader)",id:"-n--insert-newlines-saver-loader",level:3},{value:"Examples",id:"examples",level:2}],y={toc:b},g="wrapper";function O(e){var n=e,{components:t}=n,o=m(n,["components"]);return(0,r.kt)(g,u(d(d({},y),o),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",d({},{id:"udp"}),"udp"),(0,r.kt)("p",null,"Loads bytes from and saves bytes to a UDP socket."),(0,r.kt)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,r.kt)("p",null,"Loader:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"udp [-c|--connect] [-n|--insert-newlines] <endpoint>\n")),(0,r.kt)("p",null,"Saver:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"udp <endpoint>\n")),(0,r.kt)("h2",d({},{id:"description"}),"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"udp")," connector supports UDP sockets. The loader reads blocks of\nbytes from the socket, and the saver writes them to the socket."),(0,r.kt)("p",null,"The loader defaults to creating a socket in listening mode. Use ",(0,r.kt)("inlineCode",{parentName:"p"},"--connect")," if\nthe loader should initiate the connection instead."),(0,r.kt)("p",null,"When you have a socket in listening mode, use ",(0,r.kt)("inlineCode",{parentName:"p"},"0.0.0.0")," to accept connections on\nall interfaces. The ",(0,r.kt)("a",d({parentName:"p"},{href:"/next/operators/nics"}),(0,r.kt)("inlineCode",{parentName:"a"},"nics"))," operator lists all all\navailable interfaces."),(0,r.kt)("h3",d({},{id:"endpoint"}),(0,r.kt)("inlineCode",{parentName:"h3"},"<endpoint>")),(0,r.kt)("p",null,"The address of the remote endpoint to connect to when using ",(0,r.kt)("inlineCode",{parentName:"p"},"--connect"),", and the\nbind address when using ",(0,r.kt)("inlineCode",{parentName:"p"},"--listen"),"."),(0,r.kt)("h3",d({},{id:"-c--connect-loader"}),(0,r.kt)("inlineCode",{parentName:"h3"},"-c,--connect")," (Loader)"),(0,r.kt)("p",null,"Connect to ",(0,r.kt)("inlineCode",{parentName:"p"},"<endpoint>")," instead of listening at it."),(0,r.kt)("h3",d({},{id:"-n--insert-newlines-saver-loader"}),(0,r.kt)("inlineCode",{parentName:"h3"},"-n,--insert-newlines")," (Saver, Loader)"),(0,r.kt)("p",null,"Append a newline character (",(0,r.kt)("inlineCode",{parentName:"p"},"\\n"),") at the end of every datagram."),(0,r.kt)("p",null,"This option comes in handy in combination with line-based parsers downstream,\nsuch as NDJSON."),(0,r.kt)("h2",d({},{id:"examples"}),"Examples"),(0,r.kt)("p",null,"Import JSON via UDP by listenting on IP address ",(0,r.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," at port ",(0,r.kt)("inlineCode",{parentName:"p"},"56789"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"from udp://127.0.0.1:56789\n| import\n")),(0,r.kt)("p",null,"Use a shell to test the UDP loader with netcat:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash",metastring:'title="Shell 1"',title:'"Shell','1"':!0}),"tenzir 'from udp://127.0.0.1:56789'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash",metastring:'title="Shell 2"',title:'"Shell','2"':!0}),"jq -n '{foo: 42}' | nc -u 127.0.0.1 56789\n")),(0,r.kt)("p",null,"Send the Tenzir version as CSV file to a remote endpoint via UDP:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"version\n| write csv\n| save udp 127.0.0.1:56789\n")),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"nc -ul 127.0.0.1 56789")," to spin up a UDP server to test the above pipeline."))}O.isMDXComponent=!0}}]);