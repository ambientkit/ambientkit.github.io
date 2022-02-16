"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2829],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(n),h=r,m=c["".concat(p,".").concat(h)]||c[h]||g[h]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9210:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return u},default:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={},p="Screenshots",l={unversionedId:"introduction/screenshots",id:"introduction/screenshots",title:"Screenshots",description:"Below are screenshots of a full web app with links to the plugins to help explain the architecture.",source:"@site/docs/introduction/screenshots.md",sourceDirName:"introduction",slug:"/introduction/screenshots",permalink:"/docs/docs/introduction/screenshots",editUrl:"https://github.com/ambientkit/docs/tree/main/packages/create-docusaurus/templates/shared/docs/introduction/screenshots.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Welcome!",permalink:"/docs/docs/introduction/quickstart"},next:{title:"Components",permalink:"/docs/docs/architecture/components"}},u=[],g={toc:u};function c(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"screenshots"},"Screenshots"),(0,i.kt)("p",null,"Below are screenshots of a full web app with links to the plugins to help explain the architecture."),(0,i.kt)("p",null,"The terminal shows the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ambientkit/plugin/tree/main/logger/zaplogger/zaplogger.go"},"logger plugin")," that outputs based on log level."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Terminal",src:n(4721).Z,width:"836",height:"850"})),(0,i.kt)("p",null,"The home screen is from the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ambientkit/plugin/tree/main/generic/simplelogin/simplelogin.go"},"simplelogin plugin")," and demonstrates the styling from the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ambientkit/plugin/tree/main/generic/bearcss/bearcss.go"},"bearcss plugin"),". Routing is handled through the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ambientkit/plugin/tree/main/router/awayrouter/awayrouter.go"},"awayrouter plugin"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Home",src:n(2968).Z,width:"522",height:"443"})),(0,i.kt)("p",null,"The login page takes a username and password (handled by the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ambientkit/plugin/tree/main/generic/simplelogin/simplelogin.go"},"simplelogin plugin"),"). The password hash is read from the environment variable: ",(0,i.kt)("inlineCode",{parentName:"p"},"AMB_PASSWORD_HASH"),". The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ambientkit/plugin/tree/main/sessionmanager/scssession/scssession.go"},"scssession plugin")," handles the session creation and stores to the local filesystem, but supports any storage system via a plugin that satisfies the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ambientkit/ambient/tree/main/ambient_sessionstorer.go"},(0,i.kt)("inlineCode",{parentName:"a"},"SessionStorer"))," interface."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Login",src:n(8756).Z,width:"521",height:"393"})),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ambientkit/plugin/tree/main/generic/pluginmanager/pluginmanager.go"},"pluginmanager plugin")," provides an easy way to modify plugins."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Plugin Manager",src:n(2321).Z,width:"507",height:"588"})),(0,i.kt)("p",null,"The settings page (part of the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ambientkit/plugin/tree/main/generic/pluginmanager/pluginmanager.go"},"pluginmanager plugin"),") allows you to customize the value that gets displayed in the meta tag that is set by the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ambientkit/plugin/tree/main/generic/author/author.go"},"author plugin"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Settings",src:n(5726).Z,width:"518",height:"302"})),(0,i.kt)("p",null,"The grants page (part of the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ambientkit/plugin/tree/main/generic/pluginmanager/pluginmanager.go"},"pluginmanager plugin"),") allows you to allow or deny modifications to the app by the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ambientkit/plugin/tree/main/generic/author/author.go"},"author plugin"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Grants",src:n(7504).Z,width:"517",height:"323"})),(0,i.kt)("p",null,"Once enabled, the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ambientkit/plugin/tree/main/generic/author/author.go"},"author plugin")," modifies the HTML header (through the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ambientkit/plugin/tree/main/templateengine/htmlengine/htmlengine.go"},"htmlengine plugin"),") to add in a meta tag with the value from the settings page."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"HTML",src:n(738).Z,width:"576",height:"105"})),(0,i.kt)("p",null,"The backend storage is provided by the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ambientkit/plugin/tree/main/storage/gcpbucketstorage/gcpbucketstorage.go"},"gcpbucketstorage plugin")," and is stored in a JSON file on the local filesystem, but supports any storage system via a plugin that satisfies the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ambientkit/ambient/tree/main/ambient_datastorer.go"},(0,i.kt)("inlineCode",{parentName:"a"},"DataStorer"))," interface."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Storage",src:n(7620).Z,width:"470",height:"559"})))}c.isMDXComponent=!0},7504:function(e,t,n){t.Z=n.p+"assets/images/grants-5ddf1116aad379c65519f2e8af1d7d6f.png"},2968:function(e,t,n){t.Z=n.p+"assets/images/home-bed04adecc46e12c3a5e403c64ed81b4.png"},738:function(e,t,n){t.Z=n.p+"assets/images/htmlauthor-323b7f9c1583e42b940cba8961f19f90.png"},8756:function(e,t,n){t.Z=n.p+"assets/images/login-06af5d336cfbabebb92f1b94752c554c.png"},2321:function(e,t,n){t.Z=n.p+"assets/images/pluginmanager-d33a08b8d4a06fadf8691d17577d42ea.png"},5726:function(e,t,n){t.Z=n.p+"assets/images/settings-225152187ad8f996467d3d968f9788de.png"},7620:function(e,t,n){t.Z=n.p+"assets/images/storage-5413d40e5dd6836fe04facea007afd36.png"},4721:function(e,t,n){t.Z=n.p+"assets/images/terminal-75df42399044d8b6361aee62d8c4af02.png"}}]);