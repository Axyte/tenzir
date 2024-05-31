"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[55784],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84509:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>k,default:()=>v,frontMatter:()=>h,metadata:()=>f,toc:()=>b});var a=n(3905),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&p(e,n,t[n]);return e},u=(e,t)=>o(e,i(t)),m=(e,t)=>{var n={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n};const h={sidebar_position:5},k="Documentation",f={unversionedId:"contribute/documentation",id:"version-v4.15/contribute/documentation",title:"Documentation",description:"The Tenzir documentation resides inside [our main GitHub",source:"@site/versioned_docs/version-v4.15/contribute/documentation.md",sourceDirName:"contribute",slug:"/contribute/documentation",permalink:"/contribute/documentation",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.15/contribute/documentation.md",tags:[],version:"v4.15",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Changelog",permalink:"/contribute/changelog"},next:{title:"Request for Comments (RFC)",permalink:"/contribute/rfc"}},g={},b=[{value:"Build and view locally",id:"build-and-view-locally",level:2},{value:"Write content",id:"write-content",level:2},{value:"Edit diagrams",id:"edit-diagrams",level:2},{value:"Cater to dark mode",id:"cater-to-dark-mode",level:2},{value:"Scale images",id:"scale-images",level:2}],w={toc:b},y="wrapper";function v(e){var t=e,{components:n}=t,r=m(t,["components"]);return(0,a.kt)(y,u(d(d({},w),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",d({},{id:"documentation"}),"Documentation"),(0,a.kt)("p",null,"The Tenzir documentation resides inside ",(0,a.kt)("a",d({parentName:"p"},{href:"https://github.com/tenzir/tenzir"}),"our main GitHub\nrepository")," in\n",(0,a.kt)("a",d({parentName:"p"},{href:"https://github.com/tenzir/tenzir/tree/main/web/docs"}),(0,a.kt)("inlineCode",{parentName:"a"},"/web/docs")),".\nWe use ",(0,a.kt)("a",d({parentName:"p"},{href:"https://docusaurus.io/"}),"Docusaurus")," as website framework."),(0,a.kt)("h2",d({},{id:"build-and-view-locally"}),"Build and view locally"),(0,a.kt)("p",null,"To view the entire site (including the documentation) locally,\nchange to the ",(0,a.kt)("a",d({parentName:"p"},{href:"https://github.com/tenzir/tenzir/tree/main/web/"}),(0,a.kt)("inlineCode",{parentName:"a"},"/web")),"\ndirectory and invoke ",(0,a.kt)("a",d({parentName:"p"},{href:"https://yarnpkg.com/"}),(0,a.kt)("inlineCode",{parentName:"a"},"yarn")),", or to be on the safe side,\n",(0,a.kt)("inlineCode",{parentName:"p"},"yarn install --frozen-lockfile")," to avoid pollution from global dependencies.\nThen build and serve the site via:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"yarn start\n")),(0,a.kt)("p",null,"Browse to ",(0,a.kt)("a",d({parentName:"p"},{href:"http://localhost:3000/"}),"http://localhost:3000/")," to view the site. Docusaurus should spawn\nyour default browser automatically upon invoking ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn start"),"."),(0,a.kt)("h2",d({},{id:"write-content"}),"Write content"),(0,a.kt)("p",null,"Docusaurus uses an ",(0,a.kt)("a",d({parentName:"p"},{href:"https://docusaurus.io/docs/markdown-features"}),"enhanced flavor of\nMarkdown")," that allows for\nembedding richer content elements, such as:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"https://docusaurus.io/docs/markdown-features/admonitions"}),"Callouts/admonitions"),"\nfor block notes, infos, and warnings"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"https://docusaurus.io/docs/markdown-features/react"}),"React JSX components")," via\n",(0,a.kt)("a",d({parentName:"li"},{href:"https://mdxjs.com/"}),"MDX"),", specifically via the built-in UI component library\n",(0,a.kt)("a",d({parentName:"li"},{href:"https://infima.dev/"}),"Infima")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"https://docusaurus.io/docs/markdown-features/math-equations"}),"Math equations"),"\nvia ",(0,a.kt)("a",d({parentName:"li"},{href:"https://katex.org/"}),"KaTeX"))),(0,a.kt)("p",null,"We encourage making judicious use of these extras for an optimal reading\nexperience."),(0,a.kt)("h2",d({},{id:"edit-diagrams"}),"Edit diagrams"),(0,a.kt)("p",null,"We use ",(0,a.kt)("a",d({parentName:"p"},{href:"https://excalidraw.com"}),"Excalidraw")," as primary tool to create sketches\nof architectural diagrams. It is open source and has a neat collaboration\nfeature: the ability to ",(0,a.kt)("em",{parentName:"p"},"embed the source code")," of the sketch into the exported\nPNG or SVG images."),(0,a.kt)("p",null,"Our editing workflow looks as follows:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open ",(0,a.kt)("a",d({parentName:"li"},{href:"https://excalidraw.com"}),"https://excalidraw.com")," and click ",(0,a.kt)("em",{parentName:"li"},"Upload")," in the top left"),(0,a.kt)("li",{parentName:"ol"},"Select the SVG you would like to edit"),(0,a.kt)("li",{parentName:"ol"},"Make your edits in Excalidraw"),(0,a.kt)("li",{parentName:"ol"},'Uncheck the box "Background" to ensure a transparent background.'),(0,a.kt)("li",{parentName:"ol"},"Re-export the drawing as ",(0,a.kt)("strong",{parentName:"li"},"SVG")," and ",(0,a.kt)("strong",{parentName:"li"},'check the box "Embed scene"'))),(0,a.kt)("p",null,'The last part is crucial: If you don\'t check "Embed scene" we will no longer be\nable to recover the original diagram source.'),(0,a.kt)("admonition",d({},{title:"Filename Convention",type:"tip"}),(0,a.kt)("p",{parentName:"admonition"},"By convention, we export all SVGs with embedded Excalidraw source with the\nfilename extension ",(0,a.kt)("inlineCode",{parentName:"p"},"*.excalidraw.svg"),".")),(0,a.kt)("h2",d({},{id:"cater-to-dark-mode"}),"Cater to dark mode"),(0,a.kt)("p",null,"The Excalidraw workflow above already respects dark mode. You only need to\ninclude the generated SVG as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-markdown"}),"![Image Description](/path/to/diagram.excalidraw.svg)\n")),(0,a.kt)("p",null,"For non-Excalidraw images, you must provide two versions, one for light and one\nfor dark mode. We use the same CSS that GitHub supports to render them\nconditionally, i.e., ",(0,a.kt)("inlineCode",{parentName:"p"},"#gh-dark-mode-only")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"#gh-light-mode-only"),"."),(0,a.kt)("p",null,"Here's an example to include one image that exists in two variants:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-markdown"}),"![Image Description](/path/to/dark.png#gh-dark-mode-only)\n![Image Description](/path/to/light.png#gh-light-mode-only)\n")),(0,a.kt)("h2",d({},{id:"scale-images"}),"Scale images"),(0,a.kt)("p",null,"We're making use of the alt text in Markdown images in combination with some\nCSS3 features to specify a maximum width:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-markdown"}),"![alt #width500](/path/to/img)\n")),(0,a.kt)("p",null,"The suffix ",(0,a.kt)("inlineCode",{parentName:"p"},"#width500")," gets picked up by the following CSS:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-css"}),'img[alt$="#width500"] {\n  max-width: 500px;\n  display: block;\n}\n')),(0,a.kt)("p",null,"We currently support the following classes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"#width300")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"#width400")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"#width500")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"#width600"))),(0,a.kt)("p",null,"This should hopefully cover the majority of use cases."))}v.isMDXComponent=!0}}]);