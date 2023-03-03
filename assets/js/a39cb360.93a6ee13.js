"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6263],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),b=n,f=d["".concat(s,".").concat(b)]||d[b]||u[b]||o;return r?a.createElement(f,i(i({ref:t},c),{},{components:r})):a.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},39336:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>v,default:()=>_,frontMatter:()=>f,metadata:()=>m,toc:()=>y});var a=r(3905),n=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&c(e,r,t[r]);return e},u=(e,t)=>o(e,i(t)),b=(e,t)=>{var r={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&p.call(e,a)&&(r[a]=e[a]);return r};const f={sidebar_position:3},v="Ansible",m={unversionedId:"setup/deploy/ansible",id:"setup/deploy/ansible",title:"Ansible",description:"The Ansible role for VAST allows for easy integration of VAST into",source:"@site/docs/setup/deploy/ansible.md",sourceDirName:"setup/deploy",slug:"/setup/deploy/ansible",permalink:"/docs/setup/deploy/ansible",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/setup/deploy/ansible.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"AWS",permalink:"/docs/setup/deploy/aws"},next:{title:"AWS with Pro version",permalink:"/docs/setup/deploy/aws-pro"}},h={},y=[{value:"Example",id:"example",level:2},{value:"Variables",id:"variables",level:2},{value:"<code>config_file</code> (required)",id:"config_file-required",level:3},{value:"<code>read_write_paths</code>",id:"read_write_paths",level:3},{value:"<code>vast_archive</code>",id:"vast_archive",level:3},{value:"<code>vast_debian_package</code>",id:"vast_debian_package",level:3}],g={toc:y},k="wrapper";function _(e){var t=e,{components:r}=t,n=b(t,["components"]);return(0,a.kt)(k,u(d(d({},g),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",d({},{id:"ansible"}),"Ansible"),(0,a.kt)("p",null,"The Ansible role for VAST allows for easy integration of VAST into\nexisting Ansible setups. The role uses either the VAST Debian package or\nthe tarball installation method depending on which is appropriate for the\ntarget environment.\nThe role definition is in the ",(0,a.kt)("a",d({parentName:"p"},{href:"https://github.com/tenzir/vast/tree/master/ansible/roles/vast"}),(0,a.kt)("inlineCode",{parentName:"a"},"ansible/roles/vast")),"\ndirectory of the VAST repository. You need a local copy of this directory so you\ncan use it in your playbook."),(0,a.kt)("h2",d({},{id:"example"}),"Example"),(0,a.kt)("p",null,"This example playbook shows how to run a VAST service on the machine\n",(0,a.kt)("inlineCode",{parentName:"p"},"example_vast_server"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-yaml"}),"- name: Deploy vast\n  become: true\n  hosts: example_vast_server\n  remote_user: example_ansible_user\n  roles:\n    - role: vast\n      vars:\n        config_file: ./vast.yaml\n        read_write_paths: [ /tmp ]\n        vast_archive: ./vast.tar.gz\n        vast_debian_package: ./vast.deb\n")),(0,a.kt)("h2",d({},{id:"variables"}),"Variables"),(0,a.kt)("h3",d({},{id:"config_file-required"}),(0,a.kt)("inlineCode",{parentName:"h3"},"config_file")," (required)"),(0,a.kt)("p",null,"A path to a ",(0,a.kt)("a",d({parentName:"p"},{href:"/docs/setup/configure#configuration-files"}),(0,a.kt)("inlineCode",{parentName:"a"},"vast.yaml"))," relative to\nthe playbook."),(0,a.kt)("h3",d({},{id:"read_write_paths"}),(0,a.kt)("inlineCode",{parentName:"h3"},"read_write_paths")),(0,a.kt)("p",null,"A list of paths that VAST shall be granted access to in addition to its own\nstate and log directories."),(0,a.kt)("h3",d({},{id:"vast_archive"}),(0,a.kt)("inlineCode",{parentName:"h3"},"vast_archive")),(0,a.kt)("p",null,"A tarball of VAST structured like those that can be downloaded from the ",(0,a.kt)("a",d({parentName:"p"},{href:"https://github.com/tenzir/vast/releases"}),"GitHub\nReleases Page"),". This is used for target\ndistributions that are not based on the ",(0,a.kt)("inlineCode",{parentName:"p"},"apt")," package manager."),(0,a.kt)("h3",d({},{id:"vast_debian_package"}),(0,a.kt)("inlineCode",{parentName:"h3"},"vast_debian_package")),(0,a.kt)("p",null,"A Debian package (",(0,a.kt)("inlineCode",{parentName:"p"},".deb"),"). This package is used for Debian and Debian based\nLinux distributions."))}_.isMDXComponent=!0}}]);