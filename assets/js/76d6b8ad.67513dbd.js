"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[29373],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(n),u=i,k=c["".concat(p,".").concat(u)]||c[u]||d[u]||r;return n?a.createElement(k,l(l({ref:t},m),{},{components:n})):a.createElement(k,l({ref:t},m))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4195:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>h,default:()=>v,frontMatter:()=>k,metadata:()=>N,toc:()=>f});var a=n(3905),i=Object.defineProperty,r=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&m(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&m(e,n,t[n]);return e},d=(e,t)=>r(e,l(t)),u=(e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n};const k={sidebar_position:2},h="Coding Style",N={unversionedId:"contribute/coding-style",id:"version-v4.17/contribute/coding-style",title:"Coding Style",description:"This page documents the coding style for the languages we use.",source:"@site/versioned_docs/version-v4.17/contribute/coding-style.md",sourceDirName:"contribute",slug:"/contribute/coding-style",permalink:"/contribute/coding-style",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.17/contribute/coding-style.md",tags:[],version:"v4.17",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Git and GitHub Workflow",permalink:"/contribute/workflow"},next:{title:"Build Environment",permalink:"/contribute/build-environment"}},g={},f=[{value:"Documentation",id:"documentation",level:2},{value:"EditorConfig",id:"editorconfig",level:2},{value:"Scripting Languages",id:"scripting-languages",level:2},{value:"Shell Scripts",id:"shell-scripts",level:3},{value:"Python",id:"python",level:3},{value:"Web Development",id:"web-development",level:2},{value:"CMake",id:"cmake",level:2},{value:"General",id:"general",level:3},{value:"Formatting",id:"formatting",level:3},{value:"C++",id:"c",level:2},{value:"General",id:"general-1",level:3},{value:"Header",id:"header",level:3},{value:"Classes",id:"classes",level:3},{value:"Naming",id:"naming",level:3},{value:"Breaking",id:"breaking",level:3},{value:"Template Metaprogramming",id:"template-metaprogramming",level:3},{value:"Logging",id:"logging",level:3},{value:"Comments",id:"comments",level:3},{value:"External Files",id:"external-files",level:3},{value:"Unit Tests",id:"unit-tests",level:3},{value:"Continuous Integration",id:"continuous-integration",level:3},{value:"Code Coverage",id:"code-coverage",level:3}],y={toc:f},b="wrapper";function v(e){var t=e,{components:n}=t,i=u(t,["components"]);return(0,a.kt)(b,d(c(c({},y),i),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",c({},{id:"coding-style"}),"Coding Style"),(0,a.kt)("p",null,"This page documents the coding style for the languages we use."),(0,a.kt)("h2",c({},{id:"documentation"}),"Documentation"),(0,a.kt)("p",null,"When documenting bugs, deficiencies, future tasks, or noteworthy things in the\ncode, we use two keywords that most editors and tools recognize: ",(0,a.kt)("inlineCode",{parentName:"p"},"FIXME:")," and\n",(0,a.kt)("inlineCode",{parentName:"p"},"TODO:"),". We use ",(0,a.kt)("inlineCode",{parentName:"p"},"FIXME")," for a ",(0,a.kt)("em",{parentName:"p"},"known bug")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"TODO")," for everything else. The\nsubsequent ",(0,a.kt)("inlineCode",{parentName:"p"},":")," is important for tooling, such as syntax highlighters. Here are\ntwo examples:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-cpp"}),"// FIXME: this currently fails on FreeBSD.\n// FIXME: this algorithms is broken for i < 0.\n")),(0,a.kt)("p",null,"A typical ",(0,a.kt)("inlineCode",{parentName:"p"},"TODO")," could be:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-python"}),"# TODO: refactor this code to separate mechanism from policy.\n# TODO: add another argument to process user-defined tags.\n")),(0,a.kt)("h2",c({},{id:"editorconfig"}),"EditorConfig"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Some projects in the Tenzir organization provide ",(0,a.kt)("inlineCode",{parentName:"li"},".editorconfig")," files. Please\nrespect the settings defined in these. For many editors, plugins exist to\nautomatically apply EditorConfig files.")),(0,a.kt)("h2",c({},{id:"scripting-languages"}),"Scripting Languages"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Scripts are executables (",(0,a.kt)("inlineCode",{parentName:"p"},"chmod +x path/to/your-script"),") and words in\ntheir names are separated using dashes (",(0,a.kt)("inlineCode",{parentName:"p"},"your-script")," over ",(0,a.kt)("inlineCode",{parentName:"p"},"your_script"),").")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The first line of a script should be a shebang, e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"'#!/bin/sh'")," or\n",(0,a.kt)("inlineCode",{parentName:"p"},"#!/usr/bin/env python3"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The second line is empty.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Starting at the third line, write a comment detailing usage instructions, and\na short and concise description of the script."))),(0,a.kt)("h3",c({},{id:"shell-scripts"}),"Shell Scripts"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Prefer to use POSIX sh when possible.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Tenzir uses ",(0,a.kt)("a",c({parentName:"p"},{href:"https://github.com/koalaman/shellcheck"}),"ShellCheck")," for linting.\nPull request review feedback for shell scripts is in parts based on ShellCheck."))),(0,a.kt)("h3",c({},{id:"python"}),"Python"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"We use Python 3, with no special restrictions for newer features. Specify the\nminimum required version in the shebang, e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"#!/usr/bin/env python3.6"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Use ",(0,a.kt)("a",c({parentName:"p"},{href:"https://github.com/psf/black"}),"black")," for linting. Black is a heavily\nopinionated tool for both formatting and linting, and we found its opinion to\nbe a good standard for us to use."))),(0,a.kt)("h2",c({},{id:"web-development"}),"Web Development"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"All web-based projects in the Tenzir organization define style checkers and\nlinters in their respective configuration files, so they are automatically\napplied.")),(0,a.kt)("h2",c({},{id:"cmake"}),"CMake"),(0,a.kt)("p",null,"CMake is the build scaffold of Tenzir."),(0,a.kt)("h3",c({},{id:"general"}),"General"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Prefer targets and properties over variables.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Don't use global ",(0,a.kt)("em",{parentName:"p"},"include_directories"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Export consumable targets to both build and install directories.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Assign sensible export names for your targets, the ",(0,a.kt)("inlineCode",{parentName:"p"},"tenzir::")," namespace is\nimplicitly prefixed."))),(0,a.kt)("h3",c({},{id:"formatting"}),"Formatting"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The cmake files are formatted with\n",(0,a.kt)("a",c({parentName:"li"},{href:"https://github.com/cheshirekow/cmake_format"}),"cmake-format"),".")),(0,a.kt)("h2",c({},{id:"c"}),"C++"),(0,a.kt)("p",null,"Tenzir's core is written in C++. We follow a style based on STL, ",(0,a.kt)("a",c({parentName:"p"},{href:"http://google-styleguide.googlecode.com/svn/trunk/cppguide.xml"}),"Google\nstyle"),", and ",(0,a.kt)("a",c({parentName:"p"},{href:"https://github.com/actor-framework/actor-framework/blob/master/CONTRIBUTING.md"}),"CAF style")," guidelines."),(0,a.kt)("h3",c({},{id:"general-1"}),"General"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Minimize vertical whitespace within functions. Use comments to separate\nlogical code blocks.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"const")," keyword precedes the type, e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"const T&")," as opposed to\n",(0,a.kt)("inlineCode",{parentName:"p"},"T const&"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"*")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"&")," bind to the ",(0,a.kt)("em",{parentName:"p"},"type"),", e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"T* arg")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"T *arg"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"When declaring variables and functions, provide the ",(0,a.kt)("a",c({parentName:"p"},{href:"https://en.cppreference.com/w/cpp/language/storage_duration"}),"storage class\nspecifier")," (",(0,a.kt)("inlineCode",{parentName:"p"},"extern"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"static"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"thread_local"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"mutable"),") first, followed\nby the ",(0,a.kt)("a",c({parentName:"p"},{href:"https://en.cppreference.com/w/cpp/language/declarations#Specifiers"}),"declaration specifiers")," in order of ",(0,a.kt)("inlineCode",{parentName:"p"},"friend"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"inline"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"virtual"),",\n",(0,a.kt)("inlineCode",{parentName:"p"},"explicit"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"constexpr"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"consteval"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"constinit"),"."))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Always use ",(0,a.kt)("inlineCode",{parentName:"p"},"auto")," to declare a variable unless you cannot initialize it\nimmediately or if you actually want a type conversion. In the latter case,\nprovide a comment why this conversion is necessary.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Never use unwrapped, manual resource management such as ",(0,a.kt)("inlineCode",{parentName:"p"},"new")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"delete"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Never use ",(0,a.kt)("inlineCode",{parentName:"p"},"typedef"),"; always write ",(0,a.kt)("inlineCode",{parentName:"p"},"using T = X")," in favor of ",(0,a.kt)("inlineCode",{parentName:"p"},"typedef X T"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Keywords are always followed by a whitespace: ",(0,a.kt)("inlineCode",{parentName:"p"},"if (...)"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"template <...>"),",\n",(0,a.kt)("inlineCode",{parentName:"p"},"while (...)"),", etc.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Do not add whitespace when negating an expression with ",(0,a.kt)("inlineCode",{parentName:"p"},"!"),":"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",c({parentName:"pre"},{className:"language-cpp"}),"if (!sunny())\n  stay_home()\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Opening braces belong onto the same line:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",c({parentName:"pre"},{className:"language-cpp"}),"struct foo {\n  void f() {\n  }\n};\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Use inline functions for trivial code, such as getters/setters or\nstraight-forward logic that does not span more than 3 lines."))),(0,a.kt)("h3",c({},{id:"header"}),"Header"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Header filenames end in ",(0,a.kt)("inlineCode",{parentName:"p"},".hpp")," and implementation filenames in ",(0,a.kt)("inlineCode",{parentName:"p"},".cpp"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"All header files should use ",(0,a.kt)("inlineCode",{parentName:"p"},"#pragma once")," to prevent multiple inclusion.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Don't use ",(0,a.kt)("inlineCode",{parentName:"p"},"#include")," when a forward declarations suffices. It can make sense\nto outsource forward declarations into a separate file per module. The file\nname should be ",(0,a.kt)("inlineCode",{parentName:"p"},"<MODULE>/fwd.h"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Include order is from high-level to low-level headers, e.g.,"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",c({parentName:"pre"},{className:"language-cpp"}),'// iff a matching header exists\n#include "tenzir/matching_header.hpp"\n\n#include "tenzir/logger.hpp"\n\n#include <3rd/party.hpp>\n\n#include <memory>\n\n#include <sys/types.h>\n')),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"clang-format")," is configured to automatically change the include order\naccordingly. Includes separated by preprocessor directives need to be sorted\nmanually."),(0,a.kt)("p",{parentName:"li"},"Within each section, the order should be alphabetical. Tenzir includes should\nalways be in double quotes and relative to the source directory, whereas\nsystem-wide includes in angle brackets. See below for an example on how to\nstructure includes in unit tests.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"As in the standard library, the order of parameters when declaring a function\nis: inputs, then outputs. API coherence and symmetry trumps this rule, e.g.,\nwhen the first argument of related functions model the same concept."))),(0,a.kt)("h3",c({},{id:"classes"}),"Classes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Use the order ",(0,a.kt)("inlineCode",{parentName:"p"},"public"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"protected"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"private")," for functions and members in\nclasses.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Mark single-argument constructors as ",(0,a.kt)("inlineCode",{parentName:"p"},"explicit")," to avoid implicit conversions;\nuse ",(0,a.kt)("inlineCode",{parentName:"p"},"explicit(false)")," to indicate that a non-explicit constructor is\nintentional.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The order of member functions within a class is: constructors, operators,\nmutating members, accessors.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Friends first: put friend declaration immediate after opening the class.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Put declarations (and/or definitions) of assignment operators right after the\nconstructors, and all other operators at the bottom of the public section.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Use structs for state-less classes or when the API is the struct's state.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Prefer types with value semantics over reference semantics.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Use the ",(0,a.kt)("a",c({parentName:"p"},{href:"http://en.cppreference.com/w/cpp/language/rule_of_three"}),"rule of zero or rule of\nfive"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"When providing a move constructor and move-assignment operator, declare them\nas ",(0,a.kt)("inlineCode",{parentName:"p"},"noexcept"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Use brace-initialization for member construction when possible. Only use\nparenthesis-initialization to avoid calling a ",(0,a.kt)("inlineCode",{parentName:"p"},"std::initializer_list"),"\noverload."))),(0,a.kt)("h3",c({},{id:"naming"}),"Naming"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Class names, constants, and function names are lowercase with underscores.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Template parameter types should be written in CamelCase.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Types and variables should be nouns, while functions performing an action\nshould be "command" verbs. Getter and setter functions should be nouns. We do\nnot use an explicit ',(0,a.kt)("inlineCode",{parentName:"p"},"get_")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"set_")," prefix. Classes used to implement\nmetaprogramming functions also should use verbs, e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"remove_const"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"All library macros should start with ",(0,a.kt)("inlineCode",{parentName:"p"},"TENZIR_")," to avoid potential clashes with\nexternal libraries.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Names of (i) classes/structs, (ii) functions, and (iii) enums should be\nlower case and delimited by underscores.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Put non-API implementation into namespace ",(0,a.kt)("inlineCode",{parentName:"p"},"detail"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Member variables have an underscore (",(0,a.kt)("inlineCode",{parentName:"p"},"_"),") as suffix, unless they constitute\nthe public interface. Getters and setters use the same member name without\nthe suffix.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Put static non-const variables in an anonymous namespace.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Name generic temporary or input variables ",(0,a.kt)("inlineCode",{parentName:"p"},"x"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"y"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"z"),". If such\nvariables represent a collection of elements, use their plural form ",(0,a.kt)("inlineCode",{parentName:"p"},"xs"),",\n",(0,a.kt)("inlineCode",{parentName:"p"},"ys"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"zs"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Prefix counter variables with ",(0,a.kt)("inlineCode",{parentName:"p"},"num_"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If a function has a return value, use ",(0,a.kt)("inlineCode",{parentName:"p"},"result")," as variable name."))),(0,a.kt)("h3",c({},{id:"breaking"}),"Breaking"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Break constructor initializers after the comma, use two spaces for\nindentation, and place each initializer on its own line (unless you don't\nneed to break at all):"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",c({parentName:"pre"},{className:"language-cpp"}),'my_class::my_class()\n  : my_base_class{some_function()},\n    greeting_{"Hello there! This is my_class!"},\n    some_bool_flag_{false} {\n  // ok\n}\n\nother_class::other_class() : name_{"tommy"}, buddy_{"michael"} {\n  // ok\n}\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Break function arguments after the comma for both declaration and invocation:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",c({parentName:"pre"},{className:"language-cpp"}),"a_rather_long_return_type f(const std::string& x,\n                            const std::string& y) {\n  // ...\n}\n")),(0,a.kt)("p",{parentName:"li"},"If that turns out intractable, break directly after the opening parenthesis:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",c({parentName:"pre"},{className:"language-cpp"}),"template <typename T>\nblack_hole_space_time_warp f(\n  typename const T::gravitational_field_manager& manager,\n  typename const T::antimatter_clustear& cluster) {\n  // ...\n}\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Break template parameters without indentation:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",c({parentName:"pre"},{className:"language-cpp"}),"template <class T>\nauto identity(T x) {\n  return x;\n}\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Break trailining return types without indentation if they cannot fit on the\nsame line:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",c({parentName:"pre"},{className:"language-cpp"}),"template <class T>\nauto compute_upper_bound_on_compressed_data(T x)\n-> std::enable_if_t<std::is_integral_v<T>, T> {\n  return detail::bound(x);\n}\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Break before binary and ternary operators:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",c({parentName:"pre"},{className:"language-cpp"}),"if (today_is_a_sunny_day()\n    && it_is_not_too_hot_to_go_swimming()) {\n  // ...\n}\n")))),(0,a.kt)("h3",c({},{id:"template-metaprogramming"}),"Template Metaprogramming"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"typename")," keyword only to access dependent types. For general\ntemplate parameters, use ",(0,a.kt)("inlineCode",{parentName:"p"},"class")," instead:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",c({parentName:"pre"},{className:"language-cpp"}),"template <class T>\nstruct foo {\n  using type = typename T::type;\n};\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," for generic, unconstrained template parameters and ",(0,a.kt)("inlineCode",{parentName:"p"},"x")," for generic\nfunction arguments. Suffix both with ",(0,a.kt)("inlineCode",{parentName:"p"},"s")," for template parameter packs:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",c({parentName:"pre"},{className:"language-cpp"}),"template <class T, class... Ts>\nauto f(T x, Ts... xs) {\n  // ...\n}\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Break ",(0,a.kt)("inlineCode",{parentName:"p"},"using name = ...")," statements always directly after ",(0,a.kt)("inlineCode",{parentName:"p"},"=")," if they do not\nfit in one line.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Use one level of indentation per "open" template and place the closing ',(0,a.kt)("inlineCode",{parentName:"p"},">"),",\n",(0,a.kt)("inlineCode",{parentName:"p"},">::type")," or ",(0,a.kt)("inlineCode",{parentName:"p"},">::value")," on its own line. For example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",c({parentName:"pre"},{className:"language-cpp"}),"using optional_result_type =\n  typename std::conditional<\n    std::is_same<result_type, void>::value,\n    bool,\n    optional<result_type>\n  >::type;\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'When dealing with "ordinary" templates, use indentation based on the position\nof the last opening ',(0,a.kt)("inlineCode",{parentName:"p"},"<"),":"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",c({parentName:"pre"},{className:"language-cpp"}),"using type = quite_a_long_template_which_needs_a_break<std::string,\n                                                       double>;\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"When adding new type traits, also provide ",(0,a.kt)("inlineCode",{parentName:"p"},"*_t")," and/or ",(0,a.kt)("inlineCode",{parentName:"p"},"*_v")," helpers:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",c({parentName:"pre"},{className:"language-cpp"}),"template <class T>\nusing my_trait_t = typename my_trait<T>::type;\n\ntemplate <class T>\nconstexpr auto my_trait_v = my_trait<T>::value;\n")))),(0,a.kt)("h3",c({},{id:"logging"}),"Logging"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Available log levels are ",(0,a.kt)("inlineCode",{parentName:"p"},"ERROR"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"WARN"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"INFO"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"VERBOSE"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"DEBUG")," and\n",(0,a.kt)("inlineCode",{parentName:"p"},"TRACE"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Messages can be sent by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"TENZIR_<level>")," macros.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Try to restrict usage of the ",(0,a.kt)("inlineCode",{parentName:"p"},"TENZIR_INFO")," message type to the main actors.\nInfo is the chattiest level that most users will see, so it should require\nno or only little understanding of Tenzir's system architecture for the\nreader to understand.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"TENZIR_TRACE_SCOPE")," macro to elicit an additional message at the exit\nof the current scope. The trace level can be used to create a trace of the\ncall stack with fine grained control over its depth. Since the size of trace\nmessages can quickly go out of hand, omit trace messages from helper functions\nand generic algorithm implementations."))),(0,a.kt)("h3",c({},{id:"comments"}),"Comments"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Doxygen comments start with ",(0,a.kt)("inlineCode",{parentName:"p"},"///"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Use Markdown instead of Doxygen formatters.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"@cmd")," rather than ",(0,a.kt)("inlineCode",{parentName:"p"},"\\cmd"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Document pre- and post-conditions with ",(0,a.kt)("inlineCode",{parentName:"p"},"@pre")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"@post")," (where appropriate).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Reference other parameters with emphasis:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",c({parentName:"pre"},{className:"language-cpp"}),"/// @param x A number between 0 and 1.\n/// @param y Scales *x* by a constant factor.\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"@tparam")," to document template parameters.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"For simple getters or obvious functions returning a value, use a one-line\n",(0,a.kt)("inlineCode",{parentName:"p"},"@returns")," statement:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",c({parentName:"pre"},{className:"language-cpp"}),"/// @returns The answer.\nint f();\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"//")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"/*")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"*/")," to define basic comments that should not be\nswallowed by Doxygen."))),(0,a.kt)("h3",c({},{id:"external-files"}),"External Files"),(0,a.kt)("p",null,"When integrating 3rd-party code into the code base, use the following scaffold:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-cpp"}),"//    _   _____   __________\n//   | | / / _ | / __/_  __/     Visibility\n//   | |/ / __ |_\\ \\  / /          Across\n//   |___/_/ |_/___/ /_/       Space and Time\n//\n// SPDX-FileCopyrightText: (c) 2022 The Tenzir Contributors\n// SPDX-License-Identifier: BSD-3-Clause\n//\n// This file comes from a 3rd party and has been adapted to fit into the Tenzir\n// code base. Details about the original file:\n//\n// - Repository: https://github.com/Microsoft/GSL\n// - Commit:     d6b26b367b294aca43ff2d28c50293886ad1d5d4\n// - Path:       GSL/include/gsl/gsl_byte\n// - Author:     Microsoft\n// - Copyright:  (c) 2015 Microsoft Corporation. All rights reserved.\n// - License:    MIT\n\n(code here)\n")),(0,a.kt)("h3",c({},{id:"unit-tests"}),"Unit Tests"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Every new feature must come with unit tests.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The filename and path should mirror the component under test. For example,\nthe component ",(0,a.kt)("inlineCode",{parentName:"p"},"tenzir/detail/feature.hpp")," should have a test file called\n",(0,a.kt)("inlineCode",{parentName:"p"},"test/detail/feature.cpp"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The include order in unit tests resembles the order for standard headers,\nexcept that unit test includes and the suite definition comes at the top.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Make judicious use of ",(0,a.kt)("em",{parentName:"p"},"fixtures")," for prepping your test environment.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The snippet below illustrates a simple example for a new component\n",(0,a.kt)("inlineCode",{parentName:"p"},"tenzir/foo.hpp")," that would go into ",(0,a.kt)("inlineCode",{parentName:"p"},"test/foo.cpp"),"."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",c({parentName:"pre"},{className:"language-cpp"}),'//    _   _____   __________\n//   | | / / _ | / __/_  __/     Visibility\n//   | |/ / __ |_\\ \\  / /          Across\n//   |___/_/ |_/___/ /_/       Space and Time\n//\n// SPDX-FileCopyrightText: (c) 2022 The Tenzir Contributors\n// SPDX-License-Identifier: BSD-3-Clause\n\n#define SUITE foo\n\n#include "tenzir/foo.hpp" // Unit under test\n\n#include "test.hpp"       // Unit test framework and scaffolding\n\n#include <iostream>       // standard library includes\n\n#include <caf/...>        // CAF includes\n\n#include "tenzir/..."     // Tenzir includes\n\nusing namespace tenzir;\n\nnamespace {\n\nstruct fixture {\n  fixture() {\n    // Setup\n    context = 42;\n  }\n\n  ~fixture() {\n    // Teardown\n    context = 0;\n  }\n\n  int context;\n};\n\n} // namespace <anonymous>\n\nFIXTURE_SCOPE(foo_tests, fixture)\n\nTEST(construction) {\n  MESSAGE("default construction");\n  foo x;\n  MESSAGE("assignment");\n  x = 42;\n  CHECK_EQUAL(x, context);\n}\n\nFIXTURE_SCOPE_END()\n')))),(0,a.kt)("h3",c({},{id:"continuous-integration"}),"Continuous Integration"),(0,a.kt)("p",null,"We use GitHub Actions to build and test each commit. Merging a pull request\nrequires that all checks pass for the latest commit in the branch. GitHub\ndisplays the status of the individual checks in the pull request."),(0,a.kt)("h3",c({},{id:"code-coverage"}),"Code Coverage"),(0,a.kt)("p",null,"The GitHub Actions workflow ",(0,a.kt)("a",c({parentName:"p"},{href:"https://github.com/tenzir/tenzir/actions/workflows/analysis.yaml"}),"Analysis")," contains a ",(0,a.kt)("em",{parentName:"p"},"Code\nCoverage")," job that runs unit tests for libtenzir and bundled plugins, and\nintegration tests for Tenzir with bundled plugins to create a detailed line\ncoverage report. The CI creates and uploads reports as an artifact in the\nAnalysis workflow as part of every pull request and for every merge to master."),(0,a.kt)("p",null,"In addition to the local report, the workflow uploads the coverage report to\n",(0,a.kt)("a",c({parentName:"p"},{href:"https://app.codecov.io/gh/tenzir/tenzir"}),"Codecov"),", which offers a visual interface for seeing coverage\nchanges introduced by code changes:"),(0,a.kt)("p",null,(0,a.kt)("a",c({parentName:"p"},{href:"https://app.codecov.io/gh/tenzir/tenzir"}),(0,a.kt)("img",c({parentName:"a"},{src:"https://codecov.io/gh/tenzir/tenzir/branch/master/graphs/tree.svg?token=T9JgpY4KHO",alt:"Codecov Report"})))),(0,a.kt)("p",null,"Each block represents a single file in the project. The size and color of each\nblock is represented by the number of statements and the coverage,\nrespectively."),(0,a.kt)("p",null,"Codecov offers also a ",(0,a.kt)("a",c({parentName:"p"},{href:"https://codecov.io/gh/tenzir/tenzir/branch/master/graphs/sunburst.svg?token=T9JgpY4KHO"}),"sunburst")," and ",(0,a.kt)("a",c({parentName:"p"},{href:"https://codecov.io/gh/tenzir/tenzir/branch/master/graphs/sunburst.svg?token=T9JgpY4KHO"}),"icicle"),"\ngraph, visualizing the same data with a different approach."),(0,a.kt)("p",null,"To generate a coverage report locally, create a new Debug build of Tenzir with\nthe CMake option ",(0,a.kt)("inlineCode",{parentName:"p"},"-D TENZIR_ENABLE_CODE_COVERAGE=ON")," and run the ",(0,a.kt)("inlineCode",{parentName:"p"},"ccov")," build\ntarget. This creates a coverage report in ",(0,a.kt)("inlineCode",{parentName:"p"},"<path/to/build-dir>/ccov"),"."))}v.isMDXComponent=!0}}]);