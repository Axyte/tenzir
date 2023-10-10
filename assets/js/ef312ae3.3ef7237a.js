"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[74931],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=i,f=m["".concat(s,".").concat(u)]||m[u]||c[u]||o;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},53383:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>y,default:()=>N,frontMatter:()=>f,metadata:()=>k,toc:()=>b});var r=n(3905),i=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&d(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&d(e,n,t[n]);return e},c=(e,t)=>o(e,a(t)),u=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const f={sidebar_position:2},y="Modules",k={unversionedId:"data-model/modules",id:"version-Tenzir v4.3/data-model/modules",title:"Modules",description:"A module creates a namespace for [type",source:"@site/versioned_docs/version-Tenzir v4.3/data-model/modules.md",sourceDirName:"data-model",slug:"/data-model/modules",permalink:"/data-model/modules",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.3/data-model/modules.md",tags:[],version:"Tenzir v4.3",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Schemas",permalink:"/data-model/schemas"},next:{title:"Taxonomies",permalink:"/data-model/taxonomies"}},h={},b=[{value:"Type Definition Rules",id:"type-definition-rules",level:2},{value:"Module Directory Lookup",id:"module-directory-lookup",level:2}],g={toc:b},v="wrapper";function N(e){var t=e,{components:n}=t,i=u(t,["components"]);return(0,r.kt)(v,c(m(m({},g),i),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",m({},{id:"modules"}),"Modules"),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"module")," creates a namespace for ",(0,r.kt)("a",m({parentName:"p"},{href:"/data-model/type-system"}),"type\ndefinitions#type-construction"),", ",(0,r.kt)("a",m({parentName:"p"},{href:"/pipelines"}),"pipelines"),",\nand ",(0,r.kt)("a",m({parentName:"p"},{href:"/data-model/taxonomies"}),"taxonomy")," elements in single YAML file."),(0,r.kt)("admonition",m({},{title:"Work in Progress",type:"warning"}),(0,r.kt)("p",{parentName:"admonition"},"While you can already ",(0,r.kt)("a",m({parentName:"p"},{href:"/user-guides/show-available-schemas"}),"show schema\ndefinitions"),", it is unfortunately not\nyet possible write them in the same syntax. We are working towards closing this\ngap, as tracked by ",(0,r.kt)("a",m({parentName:"p"},{href:"https://github.com/tenzir/public-roadmap/issues/15"}),"the corresponding roadmap\nitem"),".")),(0,r.kt)("h2",m({},{id:"type-definition-rules"}),"Type Definition Rules"),(0,r.kt)("p",null,"All defined type names and aliases share one ",(0,r.kt)("em",{parentName:"p"},"global")," identifier namespace.\nIntroducing a new type definition or alias adds a symbol to this namespace. The\nfollowing rules exist to make manipulation of the namespace manageable:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Tenzir processes all directories of the ",(0,r.kt)("inlineCode",{parentName:"p"},"tenzir.module-dirs")," option ",(0,r.kt)("em",{parentName:"p"},"in\norder"),", creating a union of all type definitions.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Within")," a specified module directory, all type definitions must be unique,\ni.e., no types can have the same name.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Across")," directories, later definitions can override existing ones from\nprevious directories. This allows users to adapt existing types by providing\nan alternate definition in a separate module directory.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Resolving aliases to custom types follows a 2-phase lookup, which makes it\npossible to use a custom type and define it afterwards in the module file.\nThe 2-phase lookup only works within a module directory."))),(0,r.kt)("admonition",m({},{type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"Tenzir processes all directories ",(0,r.kt)("em",{parentName:"p"},"recursively"),". This means you are free to split\nthe content over a directory structure of your choice.")),(0,r.kt)("h2",m({},{id:"module-directory-lookup"}),"Module Directory Lookup"),(0,r.kt)("p",null,"Tenzir ships with modules containing type definitions and aliases for common\nformats, such as Zeek or Suricata logs. Pre-installed modules reside in\n",(0,r.kt)("inlineCode",{parentName:"p"},"<datadir>/tenzir/modules"),", and additional search paths for user-provided\nmodules can be set in the configuration file ",(0,r.kt)("inlineCode",{parentName:"p"},"tenzir.yaml")," by adjusting the\n",(0,r.kt)("inlineCode",{parentName:"p"},"tenzir.module-dirs")," option."),(0,r.kt)("p",null,"Tenzir looks at module directories in the following order:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<datadir>/tenzir/module")," for system-wide module files bundled with Tenzir,\nwhere ",(0,r.kt)("inlineCode",{parentName:"p"},"<datadir>")," is the platform-specific directory for data files, e.g.,\n",(0,r.kt)("inlineCode",{parentName:"p"},"<install-prefix>/share"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<sysconfdir>/tenzir/modules")," for system-wide configuration, where\n",(0,r.kt)("inlineCode",{parentName:"p"},"<sysconfdir>")," is the platform-specific directory for configuration files,\ne.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"<install-prefix>/etc"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"~/.config/tenzir/modules")," for user-specific configuration. Tenzir respects\nthe XDG base directory specification and its environment variables.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"An ordered, comma-separated list of directories passed using\n",(0,r.kt)("inlineCode",{parentName:"p"},"--module-dirs=path/to/modules")," on the command line. This corresponds to the\noption ",(0,r.kt)("inlineCode",{parentName:"p"},"tenzir.module-dirs"),"."))),(0,r.kt)("admonition",m({},{title:"Changing Tenzir modules",type:"caution"}),(0,r.kt)("p",{parentName:"admonition"},"We recommend to avoid making changes to module files in\n",(0,r.kt)("inlineCode",{parentName:"p"},"<datadir>/tenzir/modules"),", as this can break updates to Tenzir. If you need to\nmake adaptations of builtin types, you can modify them in your own module\ndirectory with the help of record type operations.")))}N.isMDXComponent=!0}}]);