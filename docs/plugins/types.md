# Types of Plugins

Ambient supports the following types of plugin functions via the [Plugin interface](https://github.com/ambientkit/ambient/blob/main/ambient.go):

- logger
- storage system
- session manager
- template engine
- router
- middleware
- routes
- grant requests
- settings
- assets
- funcmaps

There are also plugins that fall outside this list (most of them). They use the remainder of the functions to modify or interact with the app. Since a single interface is used for all plugins, a single plugin could essentially serve all the purposes, but then it wouldn't reall

The main difference between the plugins is what functions are called in them.