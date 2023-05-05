"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3842],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=l(n),d=r,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||p;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,o=new Array(p);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var l=2;l<p;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98646:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>g,default:()=>w,frontMatter:()=>h,metadata:()=>b,toc:()=>y});var a=n(3905),r=Object.defineProperty,p=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&u(e,n,t[n]);if(i)for(var n of i(t))l.call(t,n)&&u(e,n,t[n]);return e},m=(e,t)=>p(e,o(t)),d=(e,t)=>{var n={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&l.call(e,a)&&(n[a]=e[a]);return n};const h={},g="Plugin Development",b={unversionedId:"use/integrate/threatbus/understand/plugins/plugin-development",id:"version-VAST v3.0/use/integrate/threatbus/understand/plugins/plugin-development",title:"Plugin Development",description:"This page provides a simply overview of the steps necessary for plugin",source:"@site/versioned_docs/version-VAST v3.0/use/integrate/threatbus/understand/plugins/plugin-development.md",sourceDirName:"use/integrate/threatbus/understand/plugins",slug:"/use/integrate/threatbus/understand/plugins/plugin-development",permalink:"/docs/use/integrate/threatbus/understand/plugins/plugin-development",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/main/web/versioned_docs/version-VAST v3.0/use/integrate/threatbus/understand/plugins/plugin-development.md",tags:[],version:"VAST v3.0",frontMatter:{},sidebar:"docsSidebar",previous:{title:"RabbitMQ Backbone Plugin",permalink:"/docs/use/integrate/threatbus/understand/plugins/backbones/rabbitmq"},next:{title:"Understand",permalink:"/docs/understand/"}},f={},y=[{value:"Configuration &amp; Extension",id:"configuration--extension",level:2},{value:"Implementation Specs",id:"implementation-specs",level:3},{value:"Stoppable Workers",id:"stoppable-workers",level:4}],k={toc:y},v="wrapper";function w(e){var t=e,{components:n}=t,r=d(t,["components"]);return(0,a.kt)(v,m(c(c({},k),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",c({},{id:"plugin-development"}),"Plugin Development"),(0,a.kt)("p",null,"This page provides a simply overview of the steps necessary for plugin\ndevelopment. We recommend to use a ",(0,a.kt)("a",c({parentName:"p"},{href:"https://docs.python.org/3/tutorial/venv.html"}),"virtual\nenvironment")," for all development\nactivities."),(0,a.kt)("p",null,"Clone the Threat Bus project, setup a virtual env, and install ",(0,a.kt)("inlineCode",{parentName:"p"},"threatbus")," and\nsome plugins with the in development mode:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{}),"git clone https://github.com/tenzir/threatbus.git\ncd threatbus\npython -m venv --system-site-packages venv\nsource venv/bin/activate\nmake dev-mode\n")),(0,a.kt)("h2",c({},{id:"configuration--extension"}),"Configuration & Extension"),(0,a.kt)("p",null,"A plugin must define a ",(0,a.kt)("inlineCode",{parentName:"p"},"setup.py"),". Whenever a plugin is installed, you have to\nadd a corresponding configuration section to ",(0,a.kt)("inlineCode",{parentName:"p"},"threatbus"),"' ",(0,a.kt)("inlineCode",{parentName:"p"},"config.yaml"),". That\nsection has to be named after the ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," in the entry-point declaration of the\nplugin's ",(0,a.kt)("inlineCode",{parentName:"p"},"setup.py")," file."),(0,a.kt)("p",null,"Please adhere to the ",(0,a.kt)("a",c({parentName:"p"},{href:"https://pluggy.readthedocs.io/en/latest/#a-complete-example"}),"plugin naming\nconventions"),"\nproposed by ",(0,a.kt)("a",c({parentName:"p"},{href:"https://pypi.org/project/pluggy/"}),"pluggy")," and always prefix your\nplugin name with ",(0,a.kt)("inlineCode",{parentName:"p"},"threatbus-"),"."),(0,a.kt)("p",null,"Plugins can either be apps or backbones. Application plugins add new\nfunctionality to Threat Bus and allow communication with applications that\nconsume or produce security content (e.g., Zeek or Suricata). Backbone plugins\nadd a new storage and distribution backend to Threat Bus (e.g., in-memory or\nRabbitMQ)."),(0,a.kt)("p",null,"Consider the following example setup:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Plugin folder structure:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"plugins\n\u251c\u2500\u2500 apps\n|   \u2514\u2500\u2500 threatbus_myapp\n\u2502       \u251c\u2500\u2500 setup.py\n|       \u2514\u2500\u2500 threatbus_myapp\n            \u2514\u2500\u2500 plugin.py\n\u2514\u2500\u2500 backbones\n    \u2514\u2500\u2500 threatbus_mybackbone\n        \u251c\u2500\u2500 setup.py\n        \u2514\u2500\u2500 threatbus_mybackbone\n            \u2514\u2500\u2500 plugin.py\n"))),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"setup.py")," file for a new plugin call ",(0,a.kt)("inlineCode",{parentName:"li"},"myapp"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",c({parentName:"pre"},{className:"language-py"}),'from setuptools import setup\nsetup(\n  name="threatbus-myapp",\n  install_requires="threatbus",\n  entry_points={"threatbus.app": ["myapp = threatbus_myapp.plugin"]},\n  packages=["threatbus_myapp"],\n)\n'))),(0,a.kt)("li",{parentName:"ul"},"The corresponding ",(0,a.kt)("inlineCode",{parentName:"li"},"config.yaml")," entry for the new plugin",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",c({parentName:"pre"},{className:"language-yaml"}),"...\nplugins:\n  apps:\n    myapp:\n      some-property: some-value\n")))),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"setup.py")," file for the backbone plugin would look similar, except that the\n",(0,a.kt)("inlineCode",{parentName:"p"},"entrypoint")," declaration must instead refer to ",(0,a.kt)("inlineCode",{parentName:"p"},"threatbus.backbone")," instead of\n",(0,a.kt)("inlineCode",{parentName:"p"},"threatbus.app"),"."),(0,a.kt)("h3",c({},{id:"implementation-specs"}),"Implementation Specs"),(0,a.kt)("p",null,"Threat Bus uses ",(0,a.kt)("a",c({parentName:"p"},{href:"https://pypi.org/project/pluggy/"}),"pluggy")," for plugin\nmanagement. Hence, users must implement the\n",(0,a.kt)("a",c({parentName:"p"},{href:"https://pluggy.readthedocs.io/en/latest/#implementations"}),"hookspecs")," defined in\nthe Threat Bus core project. Think of ",(0,a.kt)("inlineCode",{parentName:"p"},"hookspecs")," as an interface definition\nfor plugins."),(0,a.kt)("p",null,"Find these plugin specifications in\n",(0,a.kt)("a",c({parentName:"p"},{href:"https://github.com/tenzir/threatbus/blob/master/threatbus/appspecs.py"}),"threatbus/appspecs.py"),"\nand\n",(0,a.kt)("a",c({parentName:"p"},{href:"https://github.com/tenzir/threatbus/blob/master/threatbus/backbonespecs.py"}),"threatbus/backbonespecs.py"),".\nFor any plugin, you should at least implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," function."),(0,a.kt)("h4",c({},{id:"stoppable-workers"}),"Stoppable Workers"),(0,a.kt)("p",null,"Threat Bus plugins are encouraged to use Python threads, so a busy plugin can\nnever block the main thread and Threat Bus stays operational. For that, we offer\nthe\n",(0,a.kt)("a",c({parentName:"p"},{href:"https://github.com/tenzir/threatbus/blob/master/threatbus/stoppable_worker.py"}),"StoppableWorker"),"\nbase-class to model plugin's busy work. Implementing that class also facilitates\na graceful shutdown. Please use this class when implementing your own Threat Bus\nplugin."),(0,a.kt)("p",null,"All officially maintained Threat Bus plugins implement ",(0,a.kt)("inlineCode",{parentName:"p"},"StoppableWorker"),". Refer\nto any of the existing plugins for an example."))}w.isMDXComponent=!0}}]);