# Plugin Functions

Ambient supports the following types of plugin functions via the [plugin interfaces](https://github.com/ambientkit/ambient/blob/main/ambient.go):

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

The main difference between the plugins is what functions are implemented. You'll spend most of your time building your app inside of a plugin. Even business logic is treated like a plugin so it's reusable and follows conventions. Generic plugins use the remainder of the functions available to modify or interact with the app.