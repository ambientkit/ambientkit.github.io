"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1039],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,b=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(b,a(a({ref:t},u),{},{components:n})):r.createElement(b,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3214:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={},s="Dev Console",l={unversionedId:"cli/devconsole",id:"cli/devconsole",title:"Dev Console",description:"The Dev Console is a web API that the amb CLI uses to make changes to an Ambient app configuration. It allows the CLI to make changes without the need for access to sensitive values like encryption keys that are used to encrypt the app configuration. It's disabled by default, but can be enabled and configured in an Ambient app using environment variables. It should be disabled in production so the app configuration cannot be modified without explicit permission.",source:"@site/docs/cli/devconsole.md",sourceDirName:"cli",slug:"/cli/devconsole",permalink:"/docs/docs/cli/devconsole",editUrl:"https://github.com/ambientkit/docs/blob/main/docs/cli/devconsole.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"amb",permalink:"/docs/docs/cli/amb"},next:{title:"createapp",permalink:"/docs/docs/cli/createapp"}},u=[],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dev-console"},"Dev Console"),(0,i.kt)("p",null,"The Dev Console is a web API that the ",(0,i.kt)("inlineCode",{parentName:"p"},"amb")," CLI uses to make changes to an Ambient app configuration. It allows the CLI to make changes without the need for access to sensitive values like encryption keys that are used to encrypt the app configuration. It's disabled by default, but can be enabled and configured in an Ambient app using ",(0,i.kt)("a",{parentName:"p",href:"/docs/docs/architecture/envars#dev-console"},"environment variables"),". It should be disabled in production so the app configuration cannot be modified without explicit permission."))}d.isMDXComponent=!0}}]);