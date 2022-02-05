"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[782],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),g=i,f=m["".concat(u,".").concat(g)]||m[g]||p[g]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7391:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],s={},u="Settings",l={unversionedId:"plugins/settings",id:"plugins/settings",title:"Settings",description:"The Settings() function returns a list of settings that can be edited from the pluginmanager UI.",source:"@site/docs/plugins/settings.md",sourceDirName:"plugins",slug:"/plugins/settings",permalink:"/docs/docs/plugins/settings",editUrl:"https://github.com/ambientkit/docs/tree/main/packages/create-docusaurus/templates/shared/docs/plugins/settings.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Grant Requests",permalink:"/docs/docs/plugins/grants"},next:{title:"Assets",permalink:"/docs/docs/plugins/assets"}},c=[],p={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"settings"},"Settings"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Settings()")," function returns a list of settings that can be edited from the pluginmanager UI."),(0,a.kt)("p",null,"A ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ambientkit/plugin/blob/main/generic/simplelogin/simplelogin.go"},"plugin")," that has configurable settings should use MVP code as well as the ",(0,a.kt)("inlineCode",{parentName:"p"},"Settings()")," function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// Settings returns a list of user settable fields.\nfunc (p *Plugin) Settings() []ambient.Setting {\n    return []ambient.Setting{\n        {\n            Name:    Username,\n            Default: "admin",\n        },\n        {\n            Name:    Password,\n            Default: p.passwordHash,\n            Type:    ambient.InputPassword,\n            Hide:    true,\n        },\n        {\n            Name: MFAKey,\n            Type: ambient.InputPassword,\n        },\n        {\n            Name:    LoginURL,\n            Default: "admin",\n            Hide:    true,\n        },\n        {\n            Name: Author,\n        },\n        {\n            Name: Subtitle,\n            Hide: true,\n        },\n        {\n            Name: Description,\n            Type: ambient.Textarea,\n        },\n        {\n            Name: Footer,\n            Type: ambient.Textarea,\n            Hide: true,\n        },\n        {\n            Name: AllowHTMLinMarkdown,\n            Type: ambient.Checkbox,\n        },\n    }\n}\n')),(0,a.kt)("p",null,"You can see all of the available setting types in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ambientkit/ambient/blob/main/model_setting.go"},"model_setting.go")," file."))}m.isMDXComponent=!0}}]);