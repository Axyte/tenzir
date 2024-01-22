"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[77665],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,b=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(b,i(i({ref:t},p),{},{components:n})):r.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46851:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>v,default:()=>j,frontMatter:()=>b,metadata:()=>f,toc:()=>y});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(s)for(var n of s(t))l.call(t,n)&&p(e,n,t[n]);return e},u=(e,t)=>a(e,i(t)),m=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&l.call(e,r)&&(n[r]=e[r]);return n};const b={sidebar_custom_props:{connector:{loader:!0,saver:!0}}},v="s3",f={unversionedId:"connectors/s3",id:"version-Tenzir v4.7/connectors/s3",title:"s3",description:"Loads bytes from an Amazon S3 object. Saves bytes to an Amazon S3 object.",source:"@site/versioned_docs/version-Tenzir v4.7/connectors/s3.md",sourceDirName:"connectors",slug:"/connectors/s3",permalink:"/Tenzir v4.7/connectors/s3",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.7/connectors/s3.md",tags:[],version:"Tenzir v4.7",frontMatter:{sidebar_custom_props:{connector:{loader:!0,saver:!0}}},sidebar:"docsSidebar",previous:{title:"nic",permalink:"/Tenzir v4.7/connectors/nic"},next:{title:"stdin",permalink:"/Tenzir v4.7/connectors/stdin"}},k={},y=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;uri&gt;</code> (Loader, Saver)",id:"uri-loader-saver",level:3},{value:"<code>--anonymous</code> (Loader, Saver)",id:"--anonymous-loader-saver",level:3},{value:"Examples",id:"examples",level:2}],h={toc:y},O="wrapper";function j(e){var t=e,{components:n}=t,o=m(t,["components"]);return(0,r.kt)(O,u(d(d({},h),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",d({},{id:"s3"}),"s3"),(0,r.kt)("p",null,"Loads bytes from an Amazon S3 object. Saves bytes to an Amazon S3 object."),(0,r.kt)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,r.kt)("p",null,"Loader:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"s3 [--anonymous] <uri>\n")),(0,r.kt)("p",null,"Saver:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"s3 [--anonymous] <uri>\n")),(0,r.kt)("h2",d({},{id:"description"}),"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"s3")," loader connects to an S3 bucket to acquire raw bytes from an S3\nobject. The ",(0,r.kt)("inlineCode",{parentName:"p"},"s3")," saver writes bytes to an S3 object in an S3 bucket."),(0,r.kt)("p",null,"The connector tries to retrieve the appropriate credentials using AWS's\n",(0,r.kt)("a",d({parentName:"p"},{href:"https://docs.aws.amazon.com/sdk-for-java/latest/developer-guide/credentials-chain.html"}),"default credentials provider\nchain"),"."),(0,r.kt)("h3",d({},{id:"uri-loader-saver"}),(0,r.kt)("inlineCode",{parentName:"h3"},"<uri>")," (Loader, Saver)"),(0,r.kt)("p",null,"The path to the S3 object."),(0,r.kt)("p",null,"The syntax is\n",(0,r.kt)("inlineCode",{parentName:"p"},"s3://<bucket-name>/<full-path-to-object>(?<options>)"),"."),(0,r.kt)("p",null,"Options can be appended to the path as query parameters, as per\n",(0,r.kt)("a",d({parentName:"p"},{href:"https://arrow.apache.org/docs/r/articles/fs.html#connecting-directly-with-a-uri"}),"Arrow"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For S3, the options that can be included in the URI as query parameters are\n",(0,r.kt)("inlineCode",{parentName:"p"},"region"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"scheme"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"endpoint_override"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"access_key"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"secret_key"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"allow_bucket_creation"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"allow_bucket_deletion"),".")),(0,r.kt)("h3",d({},{id:"--anonymous-loader-saver"}),(0,r.kt)("inlineCode",{parentName:"h3"},"--anonymous")," (Loader, Saver)"),(0,r.kt)("p",null,"Ignore any predefined credentials and try to load/save with anonymous\ncredentials."),(0,r.kt)("h2",d({},{id:"examples"}),"Examples"),(0,r.kt)("p",null,"Read CSV from an object ",(0,r.kt)("inlineCode",{parentName:"p"},"obj.csv")," in the bucket ",(0,r.kt)("inlineCode",{parentName:"p"},"examplebucket"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"from s3 s3://examplebucket/obj.csv read csv\n")),(0,r.kt)("p",null,"Read JSON from an object ",(0,r.kt)("inlineCode",{parentName:"p"},"test.json")," in the bucket ",(0,r.kt)("inlineCode",{parentName:"p"},"examplebucket"),", but using a\ndifferent, S3-compatible endpoint:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"from s3 s3://examplebucket/test.json?endpoint_override=s3.us-west.mycloudservice.com\n")))}j.isMDXComponent=!0}}]);