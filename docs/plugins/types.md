# Types of Plugins

Ambient supports the following types of plugin functions via the [Plugin interface](https://github.com/ambientkit/ambient/blob/main/ambient.go):

- logger (includes [test suite](/docs/docs/plugins/logger#test-suite))
- storage system
- session manager (includes [test suite](/docs/docs/plugins/session#test-suite))
- template engine
- router (includes [test suite](/docs/docs/plugins/router#test-suite))
- middleware
- routes
- grant requests
- settings
- assets
- funcmaps

The main difference between the plugins is what functions are implemented. Remember: there is a single interface that is used for all plugins so a single plugin could fulfill all the requirements of an app if desired.

## Generic Plugins

You will also be creating plugins that hold your business logic. They are plugins as well and probably the most important ones. You'll spend most of your time building your app inside of a plugin. Even business logic is treated like a plugin so it's reusable and follows conventions. Generic plugins use the remainder of the functions available to modify or interact with the app.