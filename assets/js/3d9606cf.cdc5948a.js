"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[353],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},34268:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={},c="AWS",u={unversionedId:"understand-vast/aws",id:"understand-vast/aws",title:"AWS",description:"Architecture Choices",source:"@site/docs/understand-vast/aws.md",sourceDirName:"understand-vast",slug:"/understand-vast/aws",permalink:"/vast/docs/understand-vast/aws",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/docs/docs/understand-vast/aws.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Actor Model",permalink:"/vast/docs/understand-vast/actor-model"}},l={},d=[{value:"Architecture Choices",id:"architecture-choices",level:2},{value:"VPC Infrastructure",id:"vpc-infrastructure",level:2},{value:"Images and Registries",id:"images-and-registries",level:2}],p={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"aws"},"AWS"),(0,i.kt)("h2",{id:"architecture-choices"},"Architecture Choices"),(0,i.kt)("p",null,"The AWS architecture builds on serverless principles to deliver a scalable\ncloud-native deployment option. To combine continuously running services with\ndynamic ad-hoc tasks, we use Lambda and Fargate as building blocks for on-demand\nquery capacity while continuously ingesting data."),(0,i.kt)("p",null,"Specifically, we embed the long-running VAST server in a Fargate task\ndefinition, which allows for flexible resource allocation based on compute\nresource needs. VAST mounts EFS storage for maximum flexibility and\npay-as-you-go scaling. The VAST client performs short-running ad-hoc tasks, like\ningesting a file or running query. We map such actions to Lambda functions."),(0,i.kt)("h2",{id:"vpc-infrastructure"},"VPC Infrastructure"),(0,i.kt)("p",null,"The provided Terraform script creates the following architecture within a given\nVPC:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53797/157026500-8845d8bc-59cf-4de2-881e-e82fbd84da26.png",alt:"VAST VPC\nArchitecture"})),(0,i.kt)("p",null,"The assumption is that the VPC has an Internet Gateway attached. Given a CIDR\nblock within this VPC, Terraform creates two subnets:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"VAST Subnet"),": a private subnet where the VAST nodes and other security\ntools run."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Gateway Subnet"),": a public subnet to talk to other AWS services and the\nInternet")),(0,i.kt)("h2",{id:"images-and-registries"},"Images and Registries"),(0,i.kt)("p",null,"Both Lambda and Fargate deploy VAST as a Docker image. Fargate runs the official\n",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/tenzir/vast"},"tenzir/vast")," image. Lambda imposes two\nadditional requirements:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The image must contain the Lambda Runtime Interface"),(0,i.kt)("li",{parentName:"ol"},"ECR must host the image in the region where the Lambda is deployed")),(0,i.kt)("p",null,"For that reason, our toolchain builds a Lambda-specific image locally and pushes\nit to a private ECR repository."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53797/157065561-82cf8bc6-b314-4439-b66f-c8e3a93e431b.png",alt:"Docker\nworkflow"})))}m.isMDXComponent=!0}}]);