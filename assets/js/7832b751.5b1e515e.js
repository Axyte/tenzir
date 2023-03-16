"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6325],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=d(a),u=r,k=m["".concat(p,".").concat(u)]||m[u]||c[u]||i;return a?n.createElement(k,l(l({ref:t},s),{},{components:a})):n.createElement(k,l({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},21409:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>g,default:()=>v,frontMatter:()=>k,metadata:()=>N,toc:()=>f});var n=a(3905),r=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,s=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&s(e,a,t[a]);if(o)for(var a of o(t))d.call(t,a)&&s(e,a,t[a]);return e},c=(e,t)=>i(e,l(t)),u=(e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&d.call(e,n)&&(a[n]=e[n]);return a};const k={sidebar_position:1},g="Build",N={unversionedId:"setup/build",id:"version-v3.0/setup/build",title:"Build",description:"VAST uses CMake as build system. Aside from a modern C++20",source:"@site/versioned_docs/version-v3.0/setup/build.md",sourceDirName:"setup",slug:"/setup/build",permalink:"/docs/setup/build",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/main/web/versioned_docs/version-v3.0/setup/build.md",tags:[],version:"v3.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Download",permalink:"/docs/setup/download"},next:{title:"Install",permalink:"/docs/setup/install/"}},b={},f=[{value:"Dependencies",id:"dependencies",level:2},{value:"Compile",id:"compile",level:2},{value:"Test",id:"test",level:2},{value:"Install",id:"install",level:2},{value:"Clean",id:"clean",level:2}],h={toc:f},y="wrapper";function v(e){var t=e,{components:a}=t,r=u(t,["components"]);return(0,n.kt)(y,c(m(m({},h),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",m({},{id:"build"}),"Build"),(0,n.kt)("p",null,"VAST uses ",(0,n.kt)("a",m({parentName:"p"},{href:"https://cmake.org"}),"CMake")," as build system. Aside from a modern C++20\ncompiler, you need to ensure availability of the dependencies in the table\nbelow."),(0,n.kt)("admonition",m({},{title:"Deterministic Builds via Nix",type:"tip"}),(0,n.kt)("p",{parentName:"admonition"},"We provide a Nix flake to setup an environment in which all dependencies are\navailable. Run ",(0,n.kt)("inlineCode",{parentName:"p"},"nix develop")," inside the main source directory. You can also\ndelegate the entire build process to Nix by invoking ",(0,n.kt)("inlineCode",{parentName:"p"},"nix build"),", but be aware\nthat this method does not support incremental\nbuilds.")),(0,n.kt)("h2",m({},{id:"dependencies"}),"Dependencies"),(0,n.kt)("p",null,"Every ",(0,n.kt)("a",m({parentName:"p"},{href:"https://github.com/tenzir/vast/releases"}),"release")," of VAST includes an\n",(0,n.kt)("a",m({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Software_bill_of_materials"}),"SBOM")," in\n",(0,n.kt)("a",m({parentName:"p"},{href:"https://spdx.dev"}),"SPDX")," format that lists all dependencies and their versions."),(0,n.kt)("div",{align:"center",class:"padding-bottom--md"},(0,n.kt)("a",{class:"button button--md button--primary margin-right--md",href:"/download/sbom.spdx"},"Latest SBOM")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:"center"}),"Required"),(0,n.kt)("th",m({parentName:"tr"},{align:"center"}),"Dependency"),(0,n.kt)("th",m({parentName:"tr"},{align:"center"}),"Version"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u2713"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"C++ Compiler"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"C++20 required"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"VAST is tested to compile with GCC >= 10.0 and Clang >= 13.0.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u2713"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),(0,n.kt)("a",m({parentName:"td"},{href:"https://cmake.org"}),"CMake")),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),">= 3.19"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Cross-platform tool for building, testing and packaging software.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u2713"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),(0,n.kt)("a",m({parentName:"td"},{href:"https://github.com/actor-framework/actor-framework"}),"CAF")),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),">= 0.18.7"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Implementation of the actor model in C++. (Bundled as submodule.)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u2713"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),(0,n.kt)("a",m({parentName:"td"},{href:"https://www.openssl.org"}),"OpenSSL")),(0,n.kt)("td",m({parentName:"tr"},{align:"center"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Utilities for secure networking and cryptography.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u2713"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),(0,n.kt)("a",m({parentName:"td"},{href:"https://google.github.io/flatbuffers/"}),"FlatBuffers")),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),">= 1.12.0"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Memory-efficient cross-platform serialization library.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u2713"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),(0,n.kt)("a",m({parentName:"td"},{href:"https://arrow.apache.org"}),"Apache Arrow")),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),">= 8.0.0"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Required for in-memory data representation. Must be built with Compute, Zstd and Parquet enabled.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u2713"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),(0,n.kt)("a",m({parentName:"td"},{href:"https://github.com/google/re2"}),"re2")),(0,n.kt)("td",m({parentName:"tr"},{align:"center"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Required for regular expressione evaluation.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u2713"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),(0,n.kt)("a",m({parentName:"td"},{href:"https://github.com/jbeder/yaml-cpp"}),"yaml-cpp")),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),">= 0.6.2"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Required for reading YAML configuration files.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u2713"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),(0,n.kt)("a",m({parentName:"td"},{href:"https://github.com/simdjson/simdjson"}),"simdjson")),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),">= 3.1.0"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Required for high-performance JSON parsing. (Bundled as submodule.)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u2713"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),(0,n.kt)("a",m({parentName:"td"},{href:"https://github.com/gabime/spdlog"}),"spdlog")),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),">= 1.5"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Required for logging.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u2713"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),(0,n.kt)("a",m({parentName:"td"},{href:"https://fmt.dev"}),"fmt")),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),">= 7.1.3"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Required for formatted text output.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u2713"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),(0,n.kt)("a",m({parentName:"td"},{href:"https://github.com/Cyan4973/xxHash"}),"xxHash")),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),">= 0.8.0"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Required for computing fast hash digests.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u2713"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),(0,n.kt)("a",m({parentName:"td"},{href:"https://github.com/Tessil/robin-map"}),"robin-map")),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),">= 0.6.3"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Fast hash map and hash set using robin hood hashing. (Bundled as subtree.)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"\u2713"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),(0,n.kt)("a",m({parentName:"td"},{href:"https://github.com/FastFloat/fast_float"}),"fast_float")),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),">= 3.2.0"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Required for parsing floating point numbers. (Bundled as submodule.)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"center"})),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),(0,n.kt)("a",m({parentName:"td"},{href:"https://yarnpkg.com"}),"yarn")),(0,n.kt)("td",m({parentName:"tr"},{align:"center"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Required for building the web frontend.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"center"})),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),(0,n.kt)("a",m({parentName:"td"},{href:"https://www.tcpdump.org"}),"libpcap")),(0,n.kt)("td",m({parentName:"tr"},{align:"center"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Required for PCAP import, export, and pivoting to and from PCAP traces.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"center"})),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),(0,n.kt)("a",m({parentName:"td"},{href:"https://stiffstream.com/en/products/restinio.html"}),"restinio")),(0,n.kt)("td",m({parentName:"tr"},{align:"center"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Required for providing a REST API")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"center"})),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),(0,n.kt)("a",m({parentName:"td"},{href:"http://www.doxygen.org"}),"Doxygen")),(0,n.kt)("td",m({parentName:"tr"},{align:"center"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Required to build documentation for libvast.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"center"})),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),(0,n.kt)("a",m({parentName:"td"},{href:"https://github.com/jgm/pandoc"}),"Pandoc")),(0,n.kt)("td",m({parentName:"tr"},{align:"center"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Required to build manpage for VAST.")))),(0,n.kt)("p",null,"The minimum specified versions reflect those versions that we use in CI and\nmanual testing. Older versions may still work in select cases."),(0,n.kt)("h2",m({},{id:"compile"}),"Compile"),(0,n.kt)("p",null,"Building VAST involves the following steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",m({parentName:"p"},{href:"/docs/setup/download"}),"Download the latest release")," or clone the repository\nrecursively:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"git clone --recursive https://github.com/tenzir/vast\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Configure the build with CMake. For faster builds, we recommend passing\n",(0,n.kt)("inlineCode",{parentName:"p"},"-G Ninja")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"cmake"),"."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),'cd vast\ncmake -B build\n# CMake defaults to a "Debug" build. When performance matters, use "Release"\ncmake -B build -DCMAKE_BUILD_TYPE=Release  \n')),(0,n.kt)("p",{parentName:"li"},"Optionally, you can use the CMake TUI to visually configure the build:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"ccmake build\n")),(0,n.kt)("p",{parentName:"li"},"The source tree also contains a set of CMake presets that combine various\nconfiguration options into curated build flavors. You can list them with:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"cmake --list-presets\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Build the executable:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"cmake --build build --target all\n")))),(0,n.kt)("h2",m({},{id:"test"}),"Test"),(0,n.kt)("p",null,"After you have built the executable, run the unit and integration tests to\nverify that your build works as expected:"),(0,n.kt)("ol",m({},{start:4}),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Run component-level unit tests:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"ctest --test-dir build\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Run end-to-end integration tests:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"cmake --build build --target integration\n")))),(0,n.kt)("h2",m({},{id:"install"}),"Install"),(0,n.kt)("ol",m({},{start:6}),(0,n.kt)("li",{parentName:"ol"},"Install VAST system-wide.",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"cmake --install build\n")))),(0,n.kt)("p",null,"If you prefer to install into a custom install prefix, install with ",(0,n.kt)("inlineCode",{parentName:"p"},"--prefix\n/path/to/install/prefix"),"."),(0,n.kt)("p",null,"To remove debug symbols from the installed binaries and libraries, pass\n",(0,n.kt)("inlineCode",{parentName:"p"},"--strip"),"."),(0,n.kt)("p",null,"To install only files relevant for running VAST and not for plugin development\npass ",(0,n.kt)("inlineCode",{parentName:"p"},"--component Runtime"),"."),(0,n.kt)("h2",m({},{id:"clean"}),"Clean"),(0,n.kt)("p",null,"In case you want to make changes to your build environment, we recommend\ndeleting the build tree entirely:"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"rm -rf build\n")),(0,n.kt)("p",null,"This avoids subtle configuration glitches of transitive dependencies. For\nexample, CMake doesn't disable assertions when switching from a ",(0,n.kt)("inlineCode",{parentName:"p"},"Debug")," to\na ",(0,n.kt)("inlineCode",{parentName:"p"},"Release")," build, but would do so when starting with a fresh build of type\n",(0,n.kt)("inlineCode",{parentName:"p"},"Release"),"."))}v.isMDXComponent=!0}}]);