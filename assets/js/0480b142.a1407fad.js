"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[836],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3584:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={},s="Frequently Asked Questions",u={unversionedId:"faq",id:"faq",title:"Frequently Asked Questions",description:"What is Ambient?",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/docs/docs/faq",editUrl:"https://github.com/ambientkit/docs/blob/main/docs/faq.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"App Settings",permalink:"/docs/docs/template/settings"}},p=[{value:"What is Ambient?",id:"what-is-ambient",children:[],level:2},{value:"Why was it created?",id:"why-was-it-created",children:[],level:2},{value:"Who is it for?",id:"who-is-it-for",children:[],level:2},{value:"How does it work?",id:"how-does-it-work",children:[],level:2}],c={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,i.kt)("h2",{id:"what-is-ambient"},"What is Ambient?"),(0,i.kt)("p",null,"Ambient is a framework in Go for building web apps using plugins. You can use the plugins already included to stand up a blog just like the ",(0,i.kt)("a",{parentName:"p",href:"https://bearblog.dev/"},"Bear Blog")," or create your own plugins to build your own app. Plugins can be enabled/disabled while the app is running which means routes as well as middleware can also modified without restarting the app. Plugins must be granted permissions above being enabled which provides you with better control over your app."),(0,i.kt)("h2",{id:"why-was-it-created"},"Why was it created?"),(0,i.kt)("p",null,"Each time I write a new app, there is a lot of foundational code reuse. I created Ambient to help myself standardize existing code, enable/disable packages on demand, modify plugin behaviors using a configurable settings page, and build new functionality in a reusable way."),(0,i.kt)("h2",{id:"who-is-it-for"},"Who is it for?"),(0,i.kt)("p",null,"Ambient will probably appeal to individual developers or small development teams who need to build one or many apps using a pluggable framework. Large teams will probably want a more established framework - but if you find it works well, drop me a ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/josephspurrier"},"line")," \ud83d\ude01 ."),(0,i.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,i.kt)("p",null,"Ambient is a web server that accepts an app name, app version, logger, storage system, and a collection of plugins (which must include a router, template engine, and session manager)."),(0,i.kt)("p",null,"Plugins:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"have to satisfy ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ambientkit/ambient/blob/main/ambient.go"},"interfaces")," in order to work with Ambient."),(0,i.kt)("li",{parentName:"ul"},"must request permissions and the admin must grant each permission."),(0,i.kt)("li",{parentName:"ul"},"can modify or interact with almost any part of an app:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"logging"),(0,i.kt)("li",{parentName:"ul"},"session management"),(0,i.kt)("li",{parentName:"ul"},"URL handling/routing for pages and API endpoints"),(0,i.kt)("li",{parentName:"ul"},"middleware on routes"),(0,i.kt)("li",{parentName:"ul"},"page templates"),(0,i.kt)("li",{parentName:"ul"},"content for HTML head, content, navigation, footer, etc.")))),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ambientkit/plugin/tree/main/generic/pluginmanager/pluginmanager.go"},"pluginmanager plugin")," is included that allows you to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enable/disable a plugin"),(0,i.kt)("li",{parentName:"ul"},"Grant permissions to a plugin"),(0,i.kt)("li",{parentName:"ul"},"Modify the settings for a plugin")),(0,i.kt)("p",null,"There is a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ambientkit/plugin"},"library of plugins")," that you can use in your apps or use as a reference when creating your own plugins."))}d.isMDXComponent=!0}}]);