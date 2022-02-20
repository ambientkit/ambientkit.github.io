"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"category","label":"Introduction","items":[{"type":"link","label":"Quickstart","href":"/docs/docs/introduction/quickstart","docId":"introduction/quickstart"},{"type":"link","label":"Screenshots","href":"/docs/docs/introduction/screenshots","docId":"introduction/screenshots"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Architecture","items":[{"type":"link","label":"Components","href":"/docs/docs/architecture/components","docId":"architecture/components"},{"type":"link","label":"Environment Variables","href":"/docs/docs/architecture/envars","docId":"architecture/envars"},{"type":"link","label":"Logger","href":"/docs/docs/architecture/logger","docId":"architecture/logger"},{"type":"link","label":"Storage System","href":"/docs/docs/architecture/storage","docId":"architecture/storage"},{"type":"link","label":"Router","href":"/docs/docs/architecture/router","docId":"architecture/router"},{"type":"link","label":"Template Engine","href":"/docs/docs/architecture/template-engine","docId":"architecture/template-engine"},{"type":"link","label":"Session Manager","href":"/docs/docs/architecture/session","docId":"architecture/session"},{"type":"link","label":"Barebones App","href":"/docs/docs/architecture/barebones","docId":"architecture/barebones"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Plugins","items":[{"type":"link","label":"Overview","href":"/docs/docs/plugins/overview","docId":"plugins/overview"},{"type":"link","label":"Toolkit","href":"/docs/docs/plugins/toolkit","docId":"plugins/toolkit"},{"type":"link","label":"Permission System (Grants)","href":"/docs/docs/plugins/permissions","docId":"plugins/permissions"},{"type":"link","label":"Library","href":"/docs/docs/plugins/library","docId":"plugins/library"},{"type":"link","label":"Your First Plugin (MVP)","href":"/docs/docs/plugins/mvp","docId":"plugins/mvp"},{"type":"link","label":"Types of Plugins","href":"/docs/docs/plugins/types","docId":"plugins/types"},{"type":"link","label":"Logger","href":"/docs/docs/plugins/logger","docId":"plugins/logger"},{"type":"link","label":"Storage System","href":"/docs/docs/plugins/storage","docId":"plugins/storage"},{"type":"link","label":"Session Manager","href":"/docs/docs/plugins/session","docId":"plugins/session"},{"type":"link","label":"Template Engine","href":"/docs/docs/plugins/template-engine","docId":"plugins/template-engine"},{"type":"link","label":"Middleware","href":"/docs/docs/plugins/middleware","docId":"plugins/middleware"},{"type":"link","label":"Router","href":"/docs/docs/plugins/router","docId":"plugins/router"},{"type":"link","label":"Routes","href":"/docs/docs/plugins/routes","docId":"plugins/routes"},{"type":"link","label":"Grant Requests","href":"/docs/docs/plugins/grants","docId":"plugins/grants"},{"type":"link","label":"Settings","href":"/docs/docs/plugins/settings","docId":"plugins/settings"},{"type":"link","label":"Assets","href":"/docs/docs/plugins/assets","docId":"plugins/assets"},{"type":"link","label":"FuncMaps","href":"/docs/docs/plugins/funcmaps","docId":"plugins/funcmaps"},{"type":"link","label":"Enable & Disable","href":"/docs/docs/plugins/enable","docId":"plugins/enable"},{"type":"link","label":"Doc Generation","href":"/docs/docs/plugins/docgen","docId":"plugins/docgen"},{"type":"link","label":"Best Practices","href":"/docs/docs/plugins/practices","docId":"plugins/practices"}],"collapsible":true,"collapsed":true},{"type":"category","label":"CLI","items":[{"type":"link","label":"Install amb","href":"/docs/docs/cli/amb","docId":"cli/amb"},{"type":"link","label":"Dev Console","href":"/docs/docs/cli/devconsole","docId":"cli/devconsole"},{"type":"link","label":"createapp","href":"/docs/docs/cli/createapp","docId":"cli/createapp"},{"type":"link","label":"enable","href":"/docs/docs/cli/enable","docId":"cli/enable"},{"type":"link","label":"grant","href":"/docs/docs/cli/grant","docId":"cli/grant"},{"type":"link","label":"encryptstorage","href":"/docs/docs/cli/encryptstorage","docId":"cli/encryptstorage"},{"type":"link","label":"decryptstorage","href":"/docs/docs/cli/decryptstorage","docId":"cli/decryptstorage"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Template","items":[{"type":"link","label":"ambient-template","href":"/docs/docs/template/app","docId":"template/app"},{"type":"link","label":"Automatic Rebuilds","href":"/docs/docs/template/autorebuild","docId":"template/autorebuild"},{"type":"link","label":"Swagger Generation","href":"/docs/docs/template/swagger","docId":"template/swagger"},{"type":"link","label":"App Settings","href":"/docs/docs/template/settings","docId":"template/settings"}],"collapsible":true,"collapsed":true},{"type":"link","label":"FAQ","href":"/docs/docs/faq","docId":"faq"}]},"docs":{"architecture/barebones":{"id":"architecture/barebones","title":"Barebones App","description":"Follow these steps to create a barebones Ambient app. These steps are intentionally verbose to help with the understanding.","sidebar":"tutorialSidebar"},"architecture/components":{"id":"architecture/components","title":"Components","description":"Let\'s breakdown an Ambient web app. It needs a few things:","sidebar":"tutorialSidebar"},"architecture/envars":{"id":"architecture/envars","title":"Environment Variables","description":"Environment variables are one way to get information into the app at runtime. At a minimum, Ambient (more precisely the Session Manager) needs to have a session key so it can encrypt user sessions. Ambient is not opinioned about how you load the environment variables so you can load them from anywhere. We use the github.com/joho/godotenv package for reading from .env files.","sidebar":"tutorialSidebar"},"architecture/logger":{"id":"architecture/logger","title":"Logger","description":"Developing a logging strategy is a good practice when you start building an app because it will help you develop and troubleshoot more quickly. Ambient supports the following log levels in plugins:","sidebar":"tutorialSidebar"},"architecture/router":{"id":"architecture/router","title":"Router","description":"The router determines which handlers are called when a request hits the app based on HTTP method (GET, POST, DELETE, etc.) and URL. Every router handles routes a little differently so if you want to extend a router that already exists, it needs to meet the minimum requirements","sidebar":"tutorialSidebar"},"architecture/session":{"id":"architecture/session","title":"Session Manager","description":"The session manager handles all aspects of a user session like:","sidebar":"tutorialSidebar"},"architecture/storage":{"id":"architecture/storage","title":"Storage System","description":"Ambient is a dynamic app that allows you make changes to it while it is running like enabling/disabling plugins, changing site information, etc. Those changes are stored in a JSON configuration object and then written to a storage system so it\'s persistent. Since there is a storage system, multiple instances of the app can run at the same time and access the same storage system to keep them consistent. This allows Ambient to support container and serverless architectures with ease because that storage system can be shared.","sidebar":"tutorialSidebar"},"architecture/template-engine":{"id":"architecture/template-engine","title":"Template Engine","description":"The template engine is what parses, and modifies, and organizes HTML content before it\'s sent back to the requesting client. It provides a lot of the extensibility that makes the Ambient plugin architecture possible. If you are returning JSON or XML, you won\'t need to use the template engine.","sidebar":"tutorialSidebar"},"cli/amb":{"id":"cli/amb","title":"amb","description":"Ambient has a CLI app called amb that allows you to create new projects and interact with running apps.","sidebar":"tutorialSidebar"},"cli/createapp":{"id":"cli/createapp","title":"createapp","description":"Create a new Ambient app on your computer.","sidebar":"tutorialSidebar"},"cli/decryptstorage":{"id":"cli/decryptstorage","title":"decryptstorage","description":"Decrypt the data storage (storage/site.bin) for a running Ambient app.","sidebar":"tutorialSidebar"},"cli/devconsole":{"id":"cli/devconsole","title":"Dev Console","description":"The Dev Console is a web API that the amb CLI uses to make changes to an Ambient app configuration. It allows the CLI to make changes without the need for access to sensitive values like encryption keys that are used to encrypt the app configuration. It\'s disabled by default, but can be enabled and configured in an Ambient app using environment variables. It should be disabled in production so the app configuration cannot be modified without explicit permission.","sidebar":"tutorialSidebar"},"cli/enable":{"id":"cli/enable","title":"enable","description":"Enable either a specified plugin or all plugins for a running Ambient app.","sidebar":"tutorialSidebar"},"cli/encryptstorage":{"id":"cli/encryptstorage","title":"encryptstorage","description":"Encrypt the data storage (storage/site.bin) for a running Ambient app.","sidebar":"tutorialSidebar"},"cli/grant":{"id":"cli/grant","title":"grant","description":"Approve all grant requests for either a specified plugin or all plugins.","sidebar":"tutorialSidebar"},"faq":{"id":"faq","title":"Frequently Asked Questions","description":"What is Ambient?","sidebar":"tutorialSidebar"},"introduction/quickstart":{"id":"introduction/quickstart","title":"Welcome!","description":"Ambient is a framework in Go for building web apps using plugins. You can use the plugins already included to stand up a blog just like the Bear Blog or create your own plugins to build your own app. Plugins can be enabled/disabled while the app is running which means routes as well as middleware can also modified without restarting the app. Plugins must be granted permissions above being enabled which provides you with better control over your app.","sidebar":"tutorialSidebar"},"introduction/screenshots":{"id":"introduction/screenshots","title":"Screenshots","description":"Below are screenshots of a full app with links to the plugins to help explain the architecture.","sidebar":"tutorialSidebar"},"plugins/assets":{"id":"plugins/assets","title":"Assets","description":"The Assets() function returns a list of assets that can modify the template output. They can be used to link to local resources like stylesheets and javascript files or they can link to external resources. You can also define the header and footer for template output. Assets support templating from a string or from a template. You can even add HTML tags to the template output. They are pretty powerful and support a bunch of use cases.","sidebar":"tutorialSidebar"},"plugins/docgen":{"id":"plugins/docgen","title":"Doc Generation","description":"The goal of the documentation is to make it easy for other developers to see how the plugin will behave when it\'s added to their Ambient app. Also, documentation is not always fun to write and keep updated so this should help!","sidebar":"tutorialSidebar"},"plugins/enable":{"id":"plugins/enable","title":"Enable & Disable","description":"The Enable() and Disable() functions are optional. They allow the plugin to perform tasks when the plugin is enabled or disabled. Examples of why a plugin would need to use these functions:","sidebar":"tutorialSidebar"},"plugins/funcmaps":{"id":"plugins/funcmaps","title":"FuncMaps","description":"FuncMaps are how you can call functions in HTML templates to return data. They are a map of functions that can take in parameters. You can read more about them with examples here.","sidebar":"tutorialSidebar"},"plugins/grants":{"id":"plugins/grants","title":"Grant Requests","description":"The GrantRequests() function returns a list of permissions required by the plugin. The admin of the app must enable each of the permissions.","sidebar":"tutorialSidebar"},"plugins/library":{"id":"plugins/library","title":"Library","description":"We\'ve built out an initial library that you can use in your apps or you can fork and modify to fit your needs.","sidebar":"tutorialSidebar"},"plugins/logger":{"id":"plugins/logger","title":"Logger","description":"A logger outputs messages at different levels: fatal, error, warn, info, and debug. It\'s helpful when you can provide more information during troubleshooting by changing the log level because you can get to the bottom of issues quicker. The logger is used by the Ambient internal system and is made available to plugins as well.","sidebar":"tutorialSidebar"},"plugins/middleware":{"id":"plugins/middleware","title":"Middleware","description":"Middleware runs code before or after a route is served. It\'s useful for tasks like loging a request, checking if the user is authenticated, and compressing the response.","sidebar":"tutorialSidebar"},"plugins/mvp":{"id":"plugins/mvp","title":"Minimum Viable Plugin (MVP)","description":"To create the smallest package that can be used as a plugin, you can paste this code into a new file like this","sidebar":"tutorialSidebar"},"plugins/overview":{"id":"plugins/overview","title":"Plugins","description":"Plugins are the building blocks for an Ambient web app. They must implement (satisfy) an interface to be usable by Ambient.","sidebar":"tutorialSidebar"},"plugins/permissions":{"id":"plugins/permissions","title":"Permission System (Grants)","description":"Granular read and write access must be explicitly requested by a plugin through a grant request and then explicitly approved by the administrator of the app in order for a plugin to get the permission required to make changes to the app configuration. The full list of grants available is here.","sidebar":"tutorialSidebar"},"plugins/practices":{"id":"plugins/practices","title":"Best Practices","description":"- Use the Ambient logger with all it\'s different levels: error, warn, info, and debug. You shouldn\'t use log or fmt package to output any messages because they are not standardized.","sidebar":"tutorialSidebar"},"plugins/router":{"id":"plugins/router","title":"Router","description":"A router handles web requests based on the HTTP method and route.","sidebar":"tutorialSidebar"},"plugins/routes":{"id":"plugins/routes","title":"Routes","description":"The Routes() function registers HTTP handlers with the router.","sidebar":"tutorialSidebar"},"plugins/session":{"id":"plugins/session","title":"Session Manager","description":"A session manager authenticates and verify users.","sidebar":"tutorialSidebar"},"plugins/settings":{"id":"plugins/settings","title":"Settings","description":"Every plugin is able to have their own settings that are stored in the app configuration. If Hide is set to false or unset, then the settings are editable through the Plugin Manager.","sidebar":"tutorialSidebar"},"plugins/storage":{"id":"plugins/storage","title":"Storage System","description":"A storage system stores the app settings (title, content, scheme, URL, etc.) as well as plugin status (enabled/disabled), settings, and permissions granted.","sidebar":"tutorialSidebar"},"plugins/template-engine":{"id":"plugins/template-engine","title":"Template Engine","description":"A template engine renders content to the ResponseWriter.","sidebar":"tutorialSidebar"},"plugins/toolkit":{"id":"plugins/toolkit","title":"Tookit","description":"Almost all plugins have access to a toolkit that gives them access to approved services that they can use. The Toolkit object includes methods from these:","sidebar":"tutorialSidebar"},"plugins/types":{"id":"plugins/types","title":"Types of Plugins","description":"Ambient supports the following types of plugin functions via the Plugin interface:","sidebar":"tutorialSidebar"},"template/app":{"id":"template/app","title":"ambient-template","description":"The ambient-template repository contains a full app to demonstrate how to use the Ambient pluggable web framework.","sidebar":"tutorialSidebar"},"template/autorebuild":{"id":"template/autorebuild","title":"Automatic Rebuilds","description":"If you would like to make changes to the code that rebuilds automatically, it\'s recommended to use air to help streamline your workflow.","sidebar":"tutorialSidebar"},"template/settings":{"id":"template/settings","title":"App Settings","description":"In the main.go file, you can modify your log level with SetLogLevel():","sidebar":"tutorialSidebar"},"template/swagger":{"id":"template/swagger","title":"Swagger Generation","description":"You can easily generate a Swagger spec for the API from annotations in the code.","sidebar":"tutorialSidebar"}}}')}}]);