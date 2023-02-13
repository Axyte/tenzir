"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3795],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var s=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=s.createContext({}),p=function(e){var t=s.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return s.createElement(u.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,m=c["".concat(u,".").concat(d)]||c[d]||h[d]||a;return n?s.createElement(m,o(o({ref:t},l),{},{components:n})):s.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65211:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var s=n(87462),r=(n(67294),n(3905));const a={sidebar_position:2},o="Snapshotting",i={unversionedId:"use/integrate/threatbus/understand/snapshotting",id:"use/integrate/threatbus/understand/snapshotting",title:"Snapshotting",description:"Traditional pub/sub only broadcasts the current de-facto state of a system.",source:"@site/docs/use/integrate/threatbus/understand/snapshotting.md",sourceDirName:"use/integrate/threatbus/understand",slug:"/use/integrate/threatbus/understand/snapshotting",permalink:"/docs/use/integrate/threatbus/understand/snapshotting",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/use/integrate/threatbus/understand/snapshotting.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Subscriptions and Message Passing",permalink:"/docs/use/integrate/threatbus/understand/subscription-message-passing"},next:{title:"Plugins",permalink:"/docs/use/integrate/threatbus/understand/plugins/"}},u={},p=[{value:"Requesting Snapshots",id:"requesting-snapshots",level:2},{value:"Point-To-Point Forwarding",id:"point-to-point-forwarding",level:2},{value:"Implementation",id:"implementation",level:2}],l={toc:p},c="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,s.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"snapshotting"},"Snapshotting"),(0,r.kt)("p",null,"Traditional pub/sub only broadcasts the current de-facto state of a system.\nPublished messages are either processed by a subscriber or not. Once a message\nhas passed the bus, it will not be published again."),(0,r.kt)("p",null,"This is problematic when it comes to security content, such as indicators of\ncompromise (IOCs). The relevance of IOCs usually spikes shortly after they get\nknown and then decays over time. In a usual pub/sub system, new subscribers will\nnot see previously published messages, even though they might still be very\nrelevant to them."),(0,r.kt)("p",null,"Threat Bus addresses this with the snapshot feature: ",(0,r.kt)("strong",{parentName:"p"},"New subscribers can ask\nfor a historic snapshot of security content.")),(0,r.kt)("h2",{id:"requesting-snapshots"},"Requesting Snapshots"),(0,r.kt)("p",null,"Requesting a snapshot is part of the subscription interface for clients.\nThe subscription data structure looks as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"@dataclass\nclass Subscription:\n  topic: str\n  snapshot: timedelta\n")),(0,r.kt)("p",null,"In case the requested ",(0,r.kt)("inlineCode",{parentName:"p"},"snapshot")," time delta is greater than zero, Threat Bus\nforwards the request to all plugins. How this request is handled is up to the\nimplementing plugin."),(0,r.kt)("h2",{id:"point-to-point-forwarding"},"Point-To-Point Forwarding"),(0,r.kt)("p",null,"Instead of publishing requested snapshot data again, Threat Bus uses a\npoint-to-point transmission model. Only the application that requests a snapshot\ngets to see the snapshot. That prevents all other subscribers from eventually\nseeing messages more than once."),(0,r.kt)("h2",{id:"implementation"},"Implementation"),(0,r.kt)("p",null,"Snapshotting is implemented by the application plugins. When a new subscriber\nasks for a snapshot, Threat Bus forwards the request to all implementing\nplugins. Apps ",(0,r.kt)("strong",{parentName:"p"},"optionally")," implement the snapshot feature."),(0,r.kt)("p",null,"For example, the MISP plugin implements such a handler. When Threat Bus invokes\nthe handler, the plugin performs a MISP API search for IOCs in the requested\ntime range. All found items are then passed back to the bus for distribution."))}h.isMDXComponent=!0}}]);