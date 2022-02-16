"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1789],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(t),d=a,g=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return t?r.createElement(g,i(i({ref:n},u),{},{components:t})):r.createElement(g,i({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5308:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],s={},c="Components",l={unversionedId:"architecture/components",id:"architecture/components",title:"Components",description:"Let's breakdown an Ambient web app. It needs a few things:",source:"@site/docs/architecture/components.md",sourceDirName:"architecture",slug:"/architecture/components",permalink:"/docs/docs/architecture/components",editUrl:"https://github.com/ambientkit/docs/tree/main/packages/create-docusaurus/templates/shared/docs/architecture/components.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Screenshots",permalink:"/docs/docs/introduction/screenshots"},next:{title:"Environment Variables",permalink:"/docs/docs/architecture/envars"}},u=[],p={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"components"},"Components"),(0,o.kt)("p",null,"Let's breakdown an Ambient web app. It needs a few things:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"environment variables"),(0,o.kt)("li",{parentName:"ul"},"logger"),(0,o.kt)("li",{parentName:"ul"},"storage system"),(0,o.kt)("li",{parentName:"ul"},"router"),(0,o.kt)("li",{parentName:"ul"},"template engine"),(0,o.kt)("li",{parentName:"ul"},"session manager")),(0,o.kt)("p",null,"You'll see a more complete code sample on the ",(0,o.kt)("a",{parentName:"p",href:"/docs/docs/architecture/barebones"},"Barebones App")," page, but this gives you an idea of how to populate the ",(0,o.kt)("inlineCode",{parentName:"p"},"PluginLoader{}")," which is what an Ambient app requires along with the app name, app version, logger, and storage system:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "log"\n    "os"\n\n    "github.com/ambientkit/ambient"\n    "github.com/ambientkit/plugin/router/awayrouter"\n    "github.com/ambientkit/plugin/sessionmanager/scssession"\n    "github.com/ambientkit/plugin/templateengine/htmlengine"\n)\n\n// Plugins defines the plugins.\nfunc Plugins() *ambient.PluginLoader {\n    // Get the environment variables.\n    secretKey := os.Getenv("AMB_SESSION_KEY")\n    if len(secretKey) == 0 {\n        log.Fatalf("app: environment variable missing: %v\\n", "AMB_SESSION_KEY")\n    }\n\n    // Define the session manager so it can be used as a core plugin and\n    // middleware.\n    sessionManager := scssession.New(secretKey)\n\n    return &ambient.PluginLoader{\n        // Core plugins are implicitly trusted.\n        Router:         awayrouter.New(nil),\n        TemplateEngine: htmlengine.New(),\n        SessionManager: sessionManager,\n        // Trusted plugins are those that are typically needed to boot so they\n        // will be enabled and given full access.\n        TrustedPlugins: map[string]bool{},\n        Plugins:        []ambient.Plugin{},\n        Middleware: []ambient.MiddlewarePlugin{\n            // Middleware - executes bottom to top.\n            sessionManager, // Session manager middleware.\n        },\n    }\n}\n')))}m.isMDXComponent=!0}}]);