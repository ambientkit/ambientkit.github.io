"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7459],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),g=i,f=m["".concat(l,".").concat(g)]||m[g]||c[g]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6645:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],s={},l="Permission System (Grants)",p={unversionedId:"plugins/permissions",id:"plugins/permissions",title:"Permission System (Grants)",description:"Granular read and write access must be explicitly requested by a plugin through a grant request and then explicitly approved by the administrator of the app in order for a plugin to get the permission required to make changes to the app configuration. The full list of grants available is here.",source:"@site/docs/plugins/permissions.md",sourceDirName:"plugins",slug:"/plugins/permissions",permalink:"/docs/plugins/permissions",editUrl:"https://github.com/ambientkit/ambientkit.github.io/blob/main/docs/plugins/permissions.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tookit",permalink:"/docs/plugins/toolkit"},next:{title:"Library",permalink:"/docs/plugins/library"}},u=[],c={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"permission-system-grants"},"Permission System (Grants)"),(0,o.kt)("p",null,"Granular read and write access must be explicitly requested by a plugin through a ",(0,o.kt)("a",{parentName:"p",href:"/docs/plugins/grants"},"grant request")," and then explicitly approved by the administrator of the app in order for a plugin to get the permission required to make changes to the app configuration. The full list of grants available is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ambientkit/ambient/blob/main/grant.go"},"here"),"."),(0,o.kt)("p",null,"Plugins are only allowed to interact with the Ambient app when:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"administrator enables a plugin"),(0,o.kt)("li",{parentName:"ol"},"plugin requests a grant"),(0,o.kt)("li",{parentName:"ol"},"administrator approves the grant request")),(0,o.kt)("p",null,"The only other way a plugin can run without the three step process above is if the plugin is listed as a Trusted Plugin. The core plugins (logger, storage engine, router, template engine, and session manager) do not need to be added to the trusted plugin list because the app cannot function without them so they are trusted implicitly."))}m.isMDXComponent=!0}}]);