"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[362],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),f=i(n),m=a,d=f["".concat(s,".").concat(m)]||f[m]||l[m]||c;return n?r.createElement(d,u(u({ref:t},p),{},{components:n})):r.createElement(d,u({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,u=new Array(c);u[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,u[1]=o;for(var i=2;i<c;i++)u[i]=n[i];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6198:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return i},toc:function(){return p},default:function(){return f}});var r=n(7462),a=n(3366),c=(n(7294),n(3905)),u=["components"],o={},s="Funcmaps",i={unversionedId:"plugins/funcmaps",id:"plugins/funcmaps",title:"Funcmaps",description:"The FuncMap() function returns a template.FuncMap that can be used in the templates. They can also be used in assets which is pretty cool.",source:"@site/docs/plugins/funcmaps.md",sourceDirName:"plugins",slug:"/plugins/funcmaps",permalink:"/docs/docs/plugins/funcmaps",editUrl:"https://github.com/ambientkit/docs/tree/main/packages/create-docusaurus/templates/shared/docs/plugins/funcmaps.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Assets",permalink:"/docs/docs/plugins/assets"},next:{title:"Best Practices",permalink:"/docs/docs/plugins/practices"}},p=[],l={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,u);return(0,c.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"funcmaps"},"Funcmaps"),(0,c.kt)("p",null,"The ",(0,c.kt)("inlineCode",{parentName:"p"},"FuncMap()")," function returns a ",(0,c.kt)("inlineCode",{parentName:"p"},"template.FuncMap")," that can be used in the templates. They can also be used in assets which is pretty cool."),(0,c.kt)("p",null,"A ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/ambientkit/plugin/blob/main/generic/disqus/diqus.go"},"plugin")," that needs a FuncMap for templates should use MVP code as well as the ",(0,c.kt)("inlineCode",{parentName:"p"},"Assets()")," function."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-go"},'// FuncMap returns a callable function when passed in a request.\nfunc (p *Plugin) FuncMap() func(r *http.Request) template.FuncMap {\n    return func(r *http.Request) template.FuncMap {\n        fm := make(template.FuncMap)\n        fm["disqus_PageURL"] = func() string {\n            return r.URL.Path\n        }\n\n        return fm\n    }\n}\n')))}f.isMDXComponent=!0}}]);