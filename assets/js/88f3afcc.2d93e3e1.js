"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[80750],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||r;return n?o.createElement(k,i(i({ref:t},u),{},{components:n})):o.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},42511:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>b,default:()=>w,frontMatter:()=>k,metadata:()=>h,toc:()=>g});var o=n(3905),a=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&u(e,n,t[n]);return e},d=(e,t)=>r(e,i(t)),m=(e,t)=>{var n={};for(var o in e)p.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&l)for(var o of l(e))t.indexOf(o)<0&&s.call(e,o)&&(n[o]=e[o]);return n};const k={sidebar_position:6},b="Notebooks",h={unversionedId:"contribute/notebooks",id:"version-Tenzir v4.8/contribute/notebooks",title:"Notebooks",description:"We use Quarto notebooks as vehicle for self-contained",source:"@site/versioned_docs/version-Tenzir v4.8/contribute/notebooks.md",sourceDirName:"contribute",slug:"/contribute/notebooks",permalink:"/contribute/notebooks",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.8/contribute/notebooks.md",tags:[],version:"Tenzir v4.8",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docsSidebar",previous:{title:"Documentation",permalink:"/contribute/documentation"},next:{title:"Request for Comments (RFC)",permalink:"/contribute/rfc"}},f={},g=[{value:"Run the notebooks",id:"run-the-notebooks",level:2},{value:"Run within Docker",id:"run-within-docker",level:2},{value:"Add a notebook",id:"add-a-notebook",level:2},{value:"Create an example notebook",id:"create-an-example-notebook",level:3},{value:"Create a documentation page",id:"create-a-documentation-page",level:3},{value:"Create a blog post",id:"create-a-blog-post",level:3}],y={toc:g},N="wrapper";function w(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,o.kt)(N,d(c(c({},y),a),{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",c({},{id:"notebooks"}),"Notebooks"),(0,o.kt)("p",null,"We use ",(0,o.kt)("a",c({parentName:"p"},{href:"https://quarto.org/"}),"Quarto notebooks")," as vehicle for self-contained\nguides that illustrate how to use Tenzir."),(0,o.kt)("p",null,"Quarto notebooks have the file extension ",(0,o.kt)("inlineCode",{parentName:"p"},".qmd")," and manifest in various places\nacross the repository:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"examples/notebooks"),": various example notebooks"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"web/blog"),": blog posts written as notebook"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"web/docs"),": documnetation written as notebook")),(0,o.kt)("h2",c({},{id:"run-the-notebooks"}),"Run the notebooks"),(0,o.kt)("p",null,"We leverage Quarto as notebook frontend so that we can run multiple engines,\neach of which rely on different kernels. As we use a mix of Bash, Python, and R,\nyou need the following dependencies to run the notebooks:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",c({parentName:"li"},{href:"https://quarto.org/docs/get-started/"}),"Quarto")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",c({parentName:"li"},{href:"https://python-poetry.org/"}),"Poetry")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",c({parentName:"li"},{href:"https://www.r-project.org/"}),"R"))),(0,o.kt)("p",null,"To render a notebook, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"quarto render notebook.qmd\n")),(0,o.kt)("p",null,"Since the ",(0,o.kt)("inlineCode",{parentName:"p"},"web")," directory is a Quarto\n",(0,o.kt)("a",c({parentName:"p"},{href:"https://quarto.org/docs/projects/quarto-projects.html"}),"project"),", it suffices\nthere to run ",(0,o.kt)("inlineCode",{parentName:"p"},"quarto render")," to generate all contained notebooks."),(0,o.kt)("h2",c({},{id:"run-within-docker"}),"Run within Docker"),(0,o.kt)("p",null,"We also provide a Docker container to enable a reproducible execution of\nnotebooks. The container builds on top of the Tenzir container and adds Quarto,\nincluding all Python and R dependencies. This makes it easy to demonstrate\nTenzir features within a Quarto notebook."),(0,o.kt)("p",null,"Other services can be added to the context of the Quarto notebook execution by\nextending the Docker Compose setup with ",(0,o.kt)("a",c({parentName:"p"},{href:"https://github.com/tenzir/tenzir/tree/main/docker/"}),"extra\noverlays"),"."),(0,o.kt)("p",null,"The website build harness uses this Docker Compose environment to run Quarto\nnotebooks that represent more elaborate user guides or blog posts that. For\nexample, running ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn build")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"/web")," compiles the website only after having\nexecuted all notebooks via the Docker Compose environment. Similarly, the\n",(0,o.kt)("inlineCode",{parentName:"p"},"/examples/notebooks")," directory contains example notebooks that leverage this\nenvironment."),(0,o.kt)("p",null,"To get a shell in this Docker Compose environment, run the following in\n",(0,o.kt)("inlineCode",{parentName:"p"},"/examples/notebooks")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"/web"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"make docker TARGET=bash\n")),(0,o.kt)("h2",c({},{id:"add-a-notebook"}),"Add a notebook"),(0,o.kt)("p",null,"The Quarto syntax is a combinatiohn of\n",(0,o.kt)("a",c({parentName:"p"},{href:"https://quarto.org/docs/authoring/markdown-basics.html"}),"Markdown")," and supports\nexpressing computations in\n",(0,o.kt)("a",c({parentName:"p"},{href:"https://quarto.org/docs/computations/python.html"}),"Python"),",\n",(0,o.kt)("a",c({parentName:"p"},{href:"https://quarto.org/docs/computations/r.html"}),"R"),", and others. Various ",(0,o.kt)("a",c({parentName:"p"},{href:"https://quarto.org/docs/computations/execution-options.html"}),"execution\noptions"),"\nin the YAML frontmatter offer customization on how to run the code."),(0,o.kt)("p",null,"We chose Quarto as lingua franca for notebooks in this repository, because it\nrepresents a language-agnostic framework with an easy-to-use Markdown syntax."),(0,o.kt)("h3",c({},{id:"create-an-example-notebook"}),"Create an example notebook"),(0,o.kt)("p",null,"Adding an example notebook to the repository involves the following steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a new directory in ",(0,o.kt)("inlineCode",{parentName:"p"},"examples/notebooks")," that includes your notebook.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add Python dependencies to ",(0,o.kt)("inlineCode",{parentName:"p"},"pyproject.toml")," file for Poetry.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"quarto preview")," or other subcommands to work with your notebook."))),(0,o.kt)("h3",c({},{id:"create-a-documentation-page"}),"Create a documentation page"),(0,o.kt)("p",null,"You can use Quarto to write a Tenzir tutorial or guide in the form as a\nnotebook. Take a look at the directory ",(0,o.kt)("inlineCode",{parentName:"p"},"/docs/try")," for examples."),(0,o.kt)("p",null,"Adding a new documentation page involves the following steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Browse in ",(0,o.kt)("inlineCode",{parentName:"p"},"web/docs")," to the location where you want to add a new page\n",(0,o.kt)("inlineCode",{parentName:"p"},"web/blog"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the directory of your choice, create a file ",(0,o.kt)("inlineCode",{parentName:"p"},"new-page.qmd"),". This is the\nblog post.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use the frontmatter as usual to adjust ordering or perform cosmetic tweaks:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",c({parentName:"pre"},{className:"language-markdown"}),"---\nsidebar_position: 42\n---\n\n# My New Guide\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Write your notebook add Python dependencies into ",(0,o.kt)("inlineCode",{parentName:"p"},"web/pyproject.toml"),"\nand R depdencies into ",(0,o.kt)("inlineCode",{parentName:"p"},"web/DESCRIPTION"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn start")," and inspect your page locally."))),(0,o.kt)("h3",c({},{id:"create-a-blog-post"}),"Create a blog post"),(0,o.kt)("p",null,"Quarto makes it easy to write an entire blog post as a notebook. Take a look at\nthe directory ",(0,o.kt)("inlineCode",{parentName:"p"},"/web/blog/a-git-retrospective")," for an example."),(0,o.kt)("p",null,"Writing a new blog post involves the following steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a new directory in ",(0,o.kt)("inlineCode",{parentName:"p"},"web/blog")," that represents your blog post slug,\ne.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"web/blog/my-blog-post"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In that directory, create a file ",(0,o.kt)("inlineCode",{parentName:"p"},"index.qmd"),". This is the blog post.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add a frontmatter with blog post meta data, e.g.,:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",c({parentName:"pre"},{className:"language-markdown"}),"---\ntitle: My New Blog Post\nauthors: mavam\ndate: 2042-01-01\ntags: [quarto, notebooks, engineering, open-source]\n---\n\n# My Blog Post\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Write your blog post and add Python dependencies into ",(0,o.kt)("inlineCode",{parentName:"p"},"web/pyproject.toml"),"\nand R depdencies into ",(0,o.kt)("inlineCode",{parentName:"p"},"web/DESCRIPTION"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn start")," and inspect the blog post locally."))))}w.isMDXComponent=!0}}]);