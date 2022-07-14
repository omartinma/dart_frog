"use strict";(self.webpackChunkdart_frog_docs=self.webpackChunkdart_frog_docs||[]).push([[168],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=i,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},160:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],s={sidebar_position:6},c="Serving Static Files \ud83d\udcc1",l={unversionedId:"basics/serving-static-files",id:"basics/serving-static-files",title:"Serving Static Files \ud83d\udcc1",description:"Dart Frog supports serving static files including images, text, json, html, and more. To serve static files, place the files within the public directory at the root of the project.",source:"@site/docs/basics/serving-static-files.md",sourceDirName:"basics",slug:"/basics/serving-static-files",permalink:"/dart_frog/docs/basics/serving-static-files",draft:!1,editUrl:"https://github.com/verygoodventures/dart_frog/tree/main/docs/docs/basics/serving-static-files.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docs",previous:{title:"Testing \ud83e\uddea",permalink:"/dart_frog/docs/basics/testing"},next:{title:"Additional Resources \ud83d\udcda",permalink:"/dart_frog/docs/basics/resources"}},p={},u=[],d={toc:u};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"serving-static-files-"},"Serving Static Files \ud83d\udcc1"),(0,o.kt)("p",null,"Dart Frog supports serving static files including images, text, json, html, and more. To serve static files, place the files within the ",(0,o.kt)("inlineCode",{parentName:"p"},"public")," directory at the root of the project."),(0,o.kt)("p",null,"For example, if you create a file in ",(0,o.kt)("inlineCode",{parentName:"p"},"public/hello.txt")," which contains the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Hello World!\n")),(0,o.kt)("p",null,"The contents of the file will be available at ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8080/hello.txt"},"http://localhost:8080/hello.txt"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"public")," directory can also contain static files within subdirectories. For example, if you create an image in ",(0,o.kt)("inlineCode",{parentName:"p"},"public/images/unicorn.png"),", the contents of the file will be available at ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8080/images/unicorn.png"},"http://localhost:8080/images/unicorn.png"),"."),(0,o.kt)("p",null,"When running a development server, static files can be added, removed, and modified without needing to restart the server thanks to hot reload \u26a1\ufe0f."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Static file support requires ",(0,o.kt)("inlineCode",{parentName:"p"},"dart_frog ^0.0.2-dev.7")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"dart_frog_cli ^0.0.1-dev.8"))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"/public")," folder must be at the root of the project and cannot be renamed. This is the only directory used to serve static files.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"In production, only files that are in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/public")," directory at build time will be served.")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Be sure not to have a static file with the same name as a file in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/routes")," directory as this will result in a conflict.")))}f.isMDXComponent=!0}}]);