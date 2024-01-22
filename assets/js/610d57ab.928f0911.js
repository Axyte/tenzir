"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[89162],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=s(t),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return t?r.createElement(m,l(l({ref:n},p),{},{components:t})):r.createElement(m,l({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=f;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[d]="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},13175:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>y,contentTitle:()=>k,default:()=>O,frontMatter:()=>m,metadata:()=>v,toc:()=>h});var r=t(3905),o=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,d=(e,n)=>{for(var t in n||(n={}))c.call(n,t)&&p(e,t,n[t]);if(a)for(var t of a(n))s.call(n,t)&&p(e,t,n[t]);return e},u=(e,n)=>i(e,l(n)),f=(e,n)=>{var t={};for(var r in e)c.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&a)for(var r of a(e))n.indexOf(r)<0&&s.call(e,r)&&(t[r]=e[r]);return t};const m={sidebar_custom_props:{connector:{loader:!0,saver:!0}}},k="tcp",v={unversionedId:"connectors/tcp",id:"version-Tenzir v4.7/connectors/tcp",title:"tcp",description:"Loads bytes from a TCP or TLS connection.",source:"@site/versioned_docs/version-Tenzir v4.7/connectors/tcp.md",sourceDirName:"connectors",slug:"/connectors/tcp",permalink:"/Tenzir v4.7/connectors/tcp",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.7/connectors/tcp.md",tags:[],version:"Tenzir v4.7",frontMatter:{sidebar_custom_props:{connector:{loader:!0,saver:!0}}},sidebar:"docsSidebar",previous:{title:"stdout",permalink:"/Tenzir v4.7/connectors/stdout"},next:{title:"zmq",permalink:"/Tenzir v4.7/connectors/zmq"}},y={},h=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;endpoint&gt;</code>",id:"endpoint",level:3},{value:"<code>-c,--connect</code> (Loader)",id:"-c--connect-loader",level:3},{value:"<code>-l,--listen</code> (Saver)",id:"-l--listen-saver",level:3},{value:"<code>-o,--listen-once</code>",id:"-o--listen-once",level:3},{value:"<code>--tls</code>",id:"--tls",level:3},{value:"<code>--certfile</code>",id:"--certfile",level:3},{value:"<code>--keyfile</code>",id:"--keyfile",level:3},{value:"Examples",id:"examples",level:2}],b={toc:h},g="wrapper";function O(e){var n=e,{components:t}=n,o=f(n,["components"]);return(0,r.kt)(g,u(d(d({},b),o),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",d({},{id:"tcp"}),"tcp"),(0,r.kt)("p",null,"Loads bytes from a TCP or TLS connection."),(0,r.kt)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,r.kt)("p",null,"Loader:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"tcp [-c|--connect] [-o|--listen-once]\n    [--tls] [--certfile] [--keyfile] <endpoint>\n")),(0,r.kt)("p",null,"Saver:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"tcp [-l|--listen] [-o|--listen-once]\n    [--tls] [--certfile] [--keyfile] <endpoint>\n")),(0,r.kt)("h2",d({},{id:"description"}),"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"tcp")," loader establishes a TCP or TLS connection and reads bytes from it."),(0,r.kt)("p",null,"It can either connect to a remote endpoint, or listen on a given address and\nwait for incoming connections."),(0,r.kt)("h3",d({},{id:"endpoint"}),(0,r.kt)("inlineCode",{parentName:"h3"},"<endpoint>")),(0,r.kt)("p",null,"The address of the remote endpoint to connect to when using ",(0,r.kt)("inlineCode",{parentName:"p"},"--connect"),", and the\nbind address when using ",(0,r.kt)("inlineCode",{parentName:"p"},"--listen"),"."),(0,r.kt)("h3",d({},{id:"-c--connect-loader"}),(0,r.kt)("inlineCode",{parentName:"h3"},"-c,--connect")," (Loader)"),(0,r.kt)("p",null,"Connect to ",(0,r.kt)("inlineCode",{parentName:"p"},"<endpoint>")," instead of listening at it."),(0,r.kt)("h3",d({},{id:"-l--listen-saver"}),(0,r.kt)("inlineCode",{parentName:"h3"},"-l,--listen")," (Saver)"),(0,r.kt)("p",null,"Listen at ",(0,r.kt)("inlineCode",{parentName:"p"},"<endpoint>")," instead of connecting to it."),(0,r.kt)("h3",d({},{id:"-o--listen-once"}),(0,r.kt)("inlineCode",{parentName:"h3"},"-o,--listen-once")),(0,r.kt)("p",null,"When listening to a socket, only process a single connection instead of looping\nover all connecting clients forever."),(0,r.kt)("p",null,"Requires a loader or saver with ",(0,r.kt)("inlineCode",{parentName:"p"},"--listen"),"."),(0,r.kt)("h3",d({},{id:"--tls"}),(0,r.kt)("inlineCode",{parentName:"h3"},"--tls")),(0,r.kt)("p",null,"Wrap the connection into a TLS secured stream."),(0,r.kt)("h3",d({},{id:"--certfile"}),(0,r.kt)("inlineCode",{parentName:"h3"},"--certfile")),(0,r.kt)("p",null,"Path to a ",(0,r.kt)("inlineCode",{parentName:"p"},".pem")," file containing the TLS certificate for the server."),(0,r.kt)("p",null,"Ignored unless ",(0,r.kt)("inlineCode",{parentName:"p"},"--tls")," is also specified."),(0,r.kt)("h3",d({},{id:"--keyfile"}),(0,r.kt)("inlineCode",{parentName:"h3"},"--keyfile")),(0,r.kt)("p",null,"Path to a ",(0,r.kt)("inlineCode",{parentName:"p"},".pem")," file containing the private key for the certificate."),(0,r.kt)("p",null,"Ignored unless ",(0,r.kt)("inlineCode",{parentName:"p"},"--tls")," is also specified."),(0,r.kt)("h2",d({},{id:"examples"}),"Examples"),(0,r.kt)("p",null,"Read raw bytes by connecting to a TCP endpoint:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"load tcp://127.0.0.1:8000\n")),(0,r.kt)("p",null,"Test this locally by spinning up a local server with ",(0,r.kt)("inlineCode",{parentName:"p"},"socat"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"echo foo | socat TCP-LISTEN:8000 stdout\n")),(0,r.kt)("p",null,"Listen on localhost and wait for incoming TLS connections:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"load tcp://127.0.0.1:4000 --tls --certfile key_and_cert.pem --keyfile key_and_cert.pem -k\n")),(0,r.kt)("p",null,"The above example uses a self-signed certificate that can be generated like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"openssl req -x509 -newkey rsa:2048 -keyout key_and_cert.pem -out key_and_cert.pem -days 365 -nodes\n")),(0,r.kt)("p",null,"Test the endpoint locally by issuing a TLS connection:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"openssl s_client 127.0.0.1:4000\n")))}O.isMDXComponent=!0}}]);