"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1394],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(n),f=a,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||o;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8445:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={},c="Session Manager",u={unversionedId:"architecture/session",id:"architecture/session",title:"Session Manager",description:"The session manager handles all aspects of a user session like:",source:"@site/docs/architecture/session.md",sourceDirName:"architecture",slug:"/architecture/session",permalink:"/docs/docs/architecture/session",editUrl:"https://github.com/ambientkit/docs/blob/main/docs/architecture/session.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Template Engine",permalink:"/docs/docs/architecture/template-engine"},next:{title:"Barebones App",permalink:"/docs/docs/architecture/barebones"}},l=[],p={toc:l};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"session-manager"},"Session Manager"),(0,o.kt)("p",null,"The session manager handles all aspects of a user session like:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"user login"),(0,o.kt)("li",{parentName:"ul"},"user logout"),(0,o.kt)("li",{parentName:"ul"},"checking if the user is authenticated"),(0,o.kt)("li",{parentName:"ul"},"storing data in the session for the user"),(0,o.kt)("li",{parentName:"ul"},"cross-site request forgery (CSRF) protection")),(0,o.kt)("p",null,"This is one session manager plugin in the library:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ambientkit/plugin/tree/main/sessionmanager/scssession"},"scssession")," - session management using ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/alexedwards/scs"},(0,o.kt)("inlineCode",{parentName:"a"},"alexedwards/scs")))))}m.isMDXComponent=!0}}]);