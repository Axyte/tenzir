"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[27],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39072:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>f,default:()=>w,frontMatter:()=>h,metadata:()=>g,toc:()=>y});var a=n(3905),o=Object.defineProperty,i=Object.defineProperties,r=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&c(e,n,t[n]);if(s)for(var n of s(t))p.call(t,n)&&c(e,n,t[n]);return e},u=(e,t)=>i(e,r(t)),m=(e,t)=>{var n={};for(var a in e)l.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n};const h={},f="Transform",g={unversionedId:"use/transform/README",id:"use/transform/README",title:"Transform",description:"VAST has powerful features for transforming [data in",source:"@site/docs/use/transform/README.md",sourceDirName:"use/transform",slug:"/use/transform/",permalink:"/docs/next/use/transform/",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/main/web/docs/use/transform/README.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Export",permalink:"/docs/next/use/export/"},next:{title:"Introspect",permalink:"/docs/next/use/introspect/"}},k={},y=[{value:"Define a pipeline",id:"define-a-pipeline",level:2},{value:"Modify data at rest",id:"modify-data-at-rest",level:2},{value:"Delete old data when reaching storage quota",id:"delete-old-data-when-reaching-storage-quota",level:3},{value:"Transform old data when reaching storage quota",id:"transform-old-data-when-reaching-storage-quota",level:3},{value:"Transform data after exceeding a retention span",id:"transform-data-after-exceeding-a-retention-span",level:3},{value:"Trigger a compaction manually",id:"trigger-a-compaction-manually",level:3}],b={toc:y},v="wrapper";function w(e){var t=e,{components:n}=t,o=m(t,["components"]);return(0,a.kt)(v,u(d(d({},b),o),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",d({},{id:"transform"}),"Transform"),(0,a.kt)("p",null,"VAST has powerful features for transforming ",(0,a.kt)("a",d({parentName:"p"},{href:"#modify-data-in-motion"}),"data in\nmotion")," and ",(0,a.kt)("a",d({parentName:"p"},{href:"#modify-data-at-rest"}),"data at rest"),". Both\naspects rely on ",(0,a.kt)("a",d({parentName:"p"},{href:"/docs/next/understand/pipelines"}),"pipelines")," as building\nblock."),(0,a.kt)("h2",d({},{id:"define-a-pipeline"}),"Define a pipeline"),(0,a.kt)("p",null,"To reference and use a pipeline as building block, you must add give it a unique\nname under the key ",(0,a.kt)("inlineCode",{parentName:"p"},"vast.pipelines")," in the configuration file:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-yaml"}),'vast:\n  pipelines:\n     example: |\n       hash --salt="B3IwnumKPEJDAA4u" src_ip\n       | summarize \n           pkts_toserver=sum(flow.pkts_toserver),\n           pkts_toclient=sum(flow.pkts_toclient),\n           bytes_toserver=sum(flow.bytes_toserver),\n           bytes_toclient=sum(flow.bytes_toclient),\n           start=min(flow.start),\n           end=max(flow.end)\n         by\n           src_ip,\n           dest_ip\n')),(0,a.kt)("p",null,"This ",(0,a.kt)("inlineCode",{parentName:"p"},"example")," pipeline consists of two operators, ",(0,a.kt)("inlineCode",{parentName:"p"},"hash")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"summarize")," that\nexecute in sequential order."),(0,a.kt)("p",null,"Have a look at ",(0,a.kt)("a",d({parentName:"p"},{href:"/docs/next/understand/operators/"}),"all available\noperators")," to understand what\nother transformations you can apply."),(0,a.kt)("h2",d({},{id:"modify-data-at-rest"}),"Modify data at rest"),(0,a.kt)("h3",d({},{id:"delete-old-data-when-reaching-storage-quota"}),"Delete old data when reaching storage quota"),(0,a.kt)("p",null,"VAST's disk-monitoring feature enables periodic deletion of events based on\nutilized disk storage. To limit the disk space used by the VAST database,\nconfigure a disk quota:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"vast start --disk-quota-high=1TiB\n")),(0,a.kt)("p",null,"Whenever VAST detects that its database directory has grown to exceed the\nconfigured quota, it will erase the oldest data in the database. It is possible\nto specify an additional ",(0,a.kt)("inlineCode",{parentName:"p"},"--disk-quota-low")," option to define a corridor for\nthe disk space usage. This can be used to avoid having VAST running permanently\nat the upper limit and to instad batch the deletion operations together."),(0,a.kt)("p",null,"The full set of available options looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-yaml"}),"vast:\n  start:\n    # Triggers removal of old data when the DB dir exceeds the disk budget.\n    disk-budget-high: 0K\n    # When the DB dir exceeds the budget, VAST erases data until the directory size\n    # falls below this value.\n    disk-budget-low: 0K\n    # Seconds between successive disk space checks.\n    disk-budget-check-interval: 90\n")),(0,a.kt)("admonition",d({},{type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"When using this method, we recommend placing the log file outside of the\ndatabase directory. It counts towards the size calculations, but cannot be\nautomatically deleted during a deletion cycle.")),(0,a.kt)("h3",d({},{id:"transform-old-data-when-reaching-storage-quota"}),"Transform old data when reaching storage quota"),(0,a.kt)("p",null,"Instead of just deleting data periodically, VAST can also trigger ",(0,a.kt)("strong",{parentName:"p"},"spatial\ncompaction")," when exceeding a given disk budget. A spatial compaction cycle\ntransforms data until disk usage falls below the budget, e.g., by removing\ncolumns or rows from certain events, or by deleting them entirely."),(0,a.kt)("p",null,"When the disk budget exceeds the configured threshold, VAST decides what data\nto compact. The compaction ",(0,a.kt)("em",{parentName:"p"},"mode")," defines how this happens. Currently, there\nexists only one mode: ",(0,a.kt)("a",d({parentName:"p"},{href:"#weighted-age"}),"weighted age"),"."),(0,a.kt)("p",null,"This compaction mode selects all events according to a ",(0,a.kt)("em",{parentName:"p"},"weighted age"),". To\ncompute the weighted age, VAST divides the actual age of an event with the\nweight assigned to this event type. For example, applying a weight of 100 to an\nevent that is 100 days old would yield a weighted age of 1 day. This causes it\nto be transformed after events that are 50 days old. Conversely, a weights less\nthan one results in an older weighted age, resulting in earlier consideration in\na compaction cycle."),(0,a.kt)("p",null,"The default weight is 1 for all event types. Here is an example configuration\nthat adjusts the weights:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-yaml"}),"vast:\n  plugins: [compaction]\nplugins:\n  compaction:\n    space:\n      mode: weighted-age\n      interval: 6 hours\n      disk-budget-high: 10TiB\n      disk-budget-low:   8TiB\n      weights:\n        - weight: 0.1\n          types: [suricata.flow]\n          #pipeline: fancy_flow_compaction\n        - weight: 100\n          types: [suricata.alert]\n          #pipeline: fancy_alert_compaction\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"pipeline")," key for each type is optional. If present, the corresponding\npipeline processes all matching events. If absent, VAST deletes matching events."),(0,a.kt)("p",null,"Two additional keys are useful to fine-tune the behavior of the compaction\nplugin:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"compaction.space.scan-binary"),": an absolute path to a binary that should be\nexecuted to determine the current disk usage"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"compaction.space.step-size"),": adjust how many compaction candidates should be\nprocessed before re-checking the size of the database directory")),(0,a.kt)("h3",d({},{id:"transform-data-after-exceeding-a-retention-span"}),"Transform data after exceeding a retention span"),(0,a.kt)("p",null,"VAST triggers temporal compaction according to a set of rules that define how\nto transform events after they reach a specfic age. This declarative\nspecification makes it easy to express fine-grained data retention policies,\nwhich is often needed for regulatory requirements and compliance."),(0,a.kt)("p",null,"For each compaction cycle, VAST processes all rules and identifies what subset\nof the data has become subject to transformation. To this end, each rule\ndefines a ",(0,a.kt)("em",{parentName:"p"},"minimum")," age, i.e., a lower bound that must be exceeded before the\ncorresponding events undergo their configured pipeline."),(0,a.kt)("p",null,"To configure temporal compaction, provide a list of compaction rules under the\nkey ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins.compaction.time")," in the VAST configuration. A compaction rule\ndefines the minimum age using key ",(0,a.kt)("inlineCode",{parentName:"p"},"after"),", the pipeline to apply with the\nkey ",(0,a.kt)("inlineCode",{parentName:"p"},"pipeline"),", the scope in terms of schema using the key ",(0,a.kt)("inlineCode",{parentName:"p"},"types"),", and a name\nto uniquely refer to the rule. Omitting the ",(0,a.kt)("inlineCode",{parentName:"p"},"types")," key causes temporal\ncompaction rules to be applied to all schemas."),(0,a.kt)("p",null,"By default, a compaction rule consumes its input, i.e. it erases the original\nevents from the database and replaces them with the transformed events. The\n",(0,a.kt)("inlineCode",{parentName:"p"},"preserve-input")," option can be specified on a temporal compaction rule to override\nthis behavior and to keep the input partitions available."),(0,a.kt)("admonition",d({},{type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"VAST applies each rule only once per partition and stores the applied rule name\nwithin the partition meta data. If you rename a rule in the configuration and\nreload a new compaction configuration, already compacted partitions will undergo\nanother round of compaction.")),(0,a.kt)("p",null,"The pipelines referenced in the compaction configuration must be defined in the\nVAST configuration."),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-yaml"}),'vast:\n  plugins: [compaction]\n  pipelines:\n    anonymize_urls: |\n      replace net.url="xxx"\n    aggregate_flows: |\n       summarize \n         pkts_toserver=sum(flow.pkts_toserver),\n         pkts_toclient=sum(flow.pkts_toclient),\n         bytes_toserver=sum(flow.bytes_toserver),\n         bytes_toclient=sum(flow.bytes_toclient),\n         start=min(flow.start),\n         end=max(flow.end)\n       by\n         timestamp,\n         src_ip,\n         dest_ip\n       resolution\n         10 mins\nplugins:\n  compaction:\n    time:\n      # How often to check the `after` condition below.\n      interval: 1 day\n      rules:\n        - after: 2 days\n          name: uri_scrubbing\n          pipeline: anonymize_urls\n          types:\n            - zeek.http\n            - suricata.http\n        - after: 7 days\n          name: flow_reduction\n          pipeline: aggregate_flows\n          keep: true\n          types:\n            - suricata.flow\n')),(0,a.kt)("h3",d({},{id:"trigger-a-compaction-manually"}),"Trigger a compaction manually"),(0,a.kt)("p",null,"You can also interact with the compaction plugin on the command line, through\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"compaction")," subcommand. Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"list")," subcommand to show all configured\ncompaction rules:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"vast compaction list\n")),(0,a.kt)("p",null,"You can then trigger a compaction manually with the ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," sub-command:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"vast compaction run <rule>\n")),(0,a.kt)("admonition",d({},{type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"compaction")," plugin needs to be loaded both by the client and the server process to\nuse the ",(0,a.kt)("inlineCode",{parentName:"p"},"vast compaction")," subcommand.")),(0,a.kt)("p",null,"For an overview of the current status of the compaction plugin, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"vast status")," subcommand:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"vast status | jq .compaction\n")))}w.isMDXComponent=!0}}]);