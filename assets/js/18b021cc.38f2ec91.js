"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[205],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6571:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=["components"],i={},s="Welcome!",p={unversionedId:"introduction/quickstart",id:"introduction/quickstart",title:"Welcome!",description:"Ambient is a framework in Go for building web apps using plugins. You can use the plugins already included to stand up a blog just like the Bear Blog or create your own plugins to build your own app. Plugins can be enabled/disabled while the app is running which means routes as well as middleware can also modified without restarting the app. Plugins must be granted permissions above being enabled which provides you with better control over your app.",source:"@site/docs/introduction/quickstart.md",sourceDirName:"introduction",slug:"/introduction/quickstart",permalink:"/docs/docs/introduction/quickstart",editUrl:"https://github.com/ambientkit/docs/blob/main/docs/introduction/quickstart.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",next:{title:"Screenshots",permalink:"/docs/docs/introduction/screenshots"}},u=[{value:"Getting Started",id:"getting-started",children:[{value:"What you&#39;ll need",id:"what-youll-need",children:[],level:3},{value:"Generate an App",id:"generate-an-app",children:[],level:3}],level:2}],c={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"welcome"},"Welcome!"),(0,l.kt)("p",null,"Ambient is a framework in Go for building web apps using plugins. You can use the plugins already included to stand up a blog just like the ",(0,l.kt)("a",{parentName:"p",href:"https://bearblog.dev/"},"Bear Blog")," or create your own plugins to build your own app. Plugins can be enabled/disabled while the app is running which means routes as well as middleware can also modified without restarting the app. Plugins must be granted permissions above being enabled which provides you with better control over your app."),(0,l.kt)("p",null,"Let's discover Ambient in ",(0,l.kt)("strong",{parentName:"p"},"less than 5 minutes"),"."),(0,l.kt)("h2",{id:"getting-started"},"Getting Started"),(0,l.kt)("h3",{id:"what-youll-need"},"What you'll need"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://go.dev/doc/install"},"Go")," version 1.13 or above (module support)."),(0,l.kt)("li",{parentName:"ul"},"You'll also need tools like ",(0,l.kt)("a",{parentName:"li",href:"https://git-scm.com/"},"Git")," and ",(0,l.kt)("a",{parentName:"li",href:"https://www.gnu.org/software/make/manual/make.html"},"Make"),", but they are probably already installed.")),(0,l.kt)("h3",{id:"generate-an-app"},"Generate an App"),(0,l.kt)("p",null,"To build a full app (",(0,l.kt)("a",{parentName:"p",href:"/docs/docs/introduction/screenshots"},"screenshots"),"), run these commands."),(0,l.kt)("p",null,"Build the Ambient interactive CLI (amb) in the current folder."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'bash -c "$(curl -fsSL https://raw.githubusercontent.com/ambientkit/amb/main/bash/install.sh)"\n')),(0,l.kt)("p",null,"Run the app."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./amb\n")),(0,l.kt)("p",null,"Clone the ambient template by typing this command and pressing Enter."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"createapp\n")),(0,l.kt)("p",null,"Exit by typing ",(0,l.kt)("inlineCode",{parentName:"p"},"exit")," or pressing Ctrl+D."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"exit\n")),(0,l.kt)("p",null,"Change to the new project folder."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd ambapp\n")),(0,l.kt)("p",null,"Download the Go dependencies."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"go mod download\n")),(0,l.kt)("p",null,"Create the session and site files in the storage folder."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"make storage\n")),(0,l.kt)("p",null,"Create the .env file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"make env\n")),(0,l.kt)("p",null,"Generate a new private key and append to your .env file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"make privatekey >> .env\n")),(0,l.kt)("p",null,"Generate a new password hash (replace with your password) and append to your .env file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"make passhash passwordhere >> .env\n")),(0,l.kt)("p",null,"Start the webserver on port 8080 (local development with no Docker)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"make run-env\n")),(0,l.kt)("p",null,"The login page is located at: ",(0,l.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/login")),(0,l.kt)("p",null,"To login, you'll need:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"the default username: ",(0,l.kt)("inlineCode",{parentName:"li"},"admin")),(0,l.kt)("li",{parentName:"ul"},"the password from the ",(0,l.kt)("inlineCode",{parentName:"li"},"make passhash passwordhere")," step. It's the value from the .env file for which the ",(0,l.kt)("inlineCode",{parentName:"li"},"AMB_PASSWORD_HASH")," was derived.")),(0,l.kt)("p",null,"Once you are logged in, you should see a new menu option call ",(0,l.kt)("inlineCode",{parentName:"p"},"Plugins"),". From this screen, you'll be able to use the Plugin Manager to make changes to state, permissions, and settings for all plugins."))}d.isMDXComponent=!0}}]);