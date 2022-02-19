"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5885],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(t),m=i,d=c["".concat(l,".").concat(m)]||c[m]||g[m]||a;return t?r.createElement(d,o(o({ref:n},p),{},{components:t})):r.createElement(d,o({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8111:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var r=t(7462),i=t(3366),a=(t(7294),t(3905)),o=["components"],s={},l="Minimum Viable Plugin (MVP)",u={unversionedId:"plugins/mvp",id:"plugins/mvp",title:"Minimum Viable Plugin (MVP)",description:"To create the smallest package that can be used as a plugin, you can paste this code into a new file like this",source:"@site/docs/plugins/mvp.md",sourceDirName:"plugins",slug:"/plugins/mvp",permalink:"/docs/docs/plugins/mvp",editUrl:"https://github.com/ambientkit/docs/blob/main/docs/plugins/mvp.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Library",permalink:"/docs/docs/plugins/library"},next:{title:"Types of Plugins",permalink:"/docs/docs/plugins/types"}},p=[],g={toc:p};function c(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"minimum-viable-plugin-mvp"},"Minimum Viable Plugin (MVP)"),(0,a.kt)("p",null,"To create the smallest package that can be used as a plugin, you can paste this code into a new file like this: ",(0,a.kt)("inlineCode",{parentName:"p"},"plugin/mvp/mvp.go"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// Package mvp provides a template for building a plugin for Ambient apps.\npackage mvp\n\nimport (\n    "github.com/ambientkit/ambient"\n)\n\n// Plugin represents an Ambient plugin.\ntype Plugin struct {\n    // PluginBase is a struct that provides empty functions to satisfy the\n    // `Plugin` interface in ambient.go. This allows plugins to work with newer\n    // versions of the interface as long as functions defined below still match\n    // the interface.\n    *ambient.PluginBase\n}\n\n// New returns a new mvp plugin. This should be modified to include any values\n// or objects that need to be passed in before it\'s enabled. Any example would\n// be a password hash or a flag for debug mode.\nfunc New() *Plugin {\n    return &Plugin{\n        PluginBase: &ambient.PluginBase{},\n    }\n}\n\n// PluginName returns the plugin name. This name should match the package name.\n// PluginName should be globally unique. Only lowercase letters, numbers,\n// and underscores are permitted. Must start with with a letter.\nfunc (p *Plugin) PluginName() string {\n    return "mvp"\n}\n\n// PluginVersion returns the plugin version. This version must follow\n// https://semver.org/.\nfunc (p *Plugin) PluginVersion() string {\n    return "1.0.0"\n}\n')),(0,a.kt)("p",null,"To add the plugin to your Ambient app, you should add ",(0,a.kt)("inlineCode",{parentName:"p"},"mvp.New(),")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"plugin.go")," file, under the ",(0,a.kt)("inlineCode",{parentName:"p"},"Plugins")," section array:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// Plugins defines the plugins.\nfunc Plugins() *ambient.PluginLoader {\n    // Get the environment variables.\n    secretKey := os.Getenv("AMB_SESSION_KEY")\n    if len(secretKey) == 0 {\n        log.Fatalf("app: environment variable missing: %v\\n", "AMB_SESSION_KEY")\n    }\n\n    passwordHash := os.Getenv("AMB_PASSWORD_HASH")\n    if len(passwordHash) == 0 {\n        log.Fatalf("app: environment variable is missing: %v\\n", "AMB_PASSWORD_HASH")\n    }\n\n    // Define the session manager so it can be used as a core plugin and\n    // middleware.\n    sessionManager := scssession.New(secretKey)\n\n    return &ambient.PluginLoader{\n        // Core plugins are implicitly trusted.\n        Router:         awayrouter.New(nil),\n        TemplateEngine: htmlengine.New(),\n        SessionManager: sessionManager,\n        // Trusted plugins are required to boot the app so they will be\n        // given full access.\n        TrustedPlugins: map[string]bool{\n            "pluginmanager": true, // Page to manage plugins.\n            "simplelogin":   true, // Simple login page.\n            "bearcss":       true, // Bear Blog styling.\n        },\n        Plugins: []ambient.Plugin{\n            pluginmanager.New(),           // Page to manage plugins.\n            simplelogin.New(passwordHash), // Simple login page.\n            bearcss.New(),                 // Bear Blog styling.\n            mvp.New(),                     // Your new plugin.\n        },\n        Middleware: []ambient.MiddlewarePlugin{\n            // Middleware - executes bottom to top.\n            sessionManager,   // Session manager middleware.\n            logrequest.New(), // Log every request as INFO.\n        },\n    }\n}\n')),(0,a.kt)("p",null,"When you start the app, the plugin will not be enabled. You must login and then navigate to: http://localhost:8080/dashboard/plugins. Put a checkmark next to the plugin and then click the ",(0,a.kt)("strong",{parentName:"p"},"Save")," button at the bottom of the page. Your plugin is now enabled! It doesn't do anything so don't get too excited, but you've got the scaffolding of a plugin so on to the next step where you choose the type of plugin function to use."))}c.isMDXComponent=!0}}]);