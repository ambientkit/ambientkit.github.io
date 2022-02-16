# Plugins

Plugins are the building blocks for an Ambient web app. They must implement (satisfy) an interface to be usable by Ambient.

## Boot Process

To help you understand how an Ambient app works, this is the process it follows during boot:

- Load logger plugin by calling `Logger()` func.
- Load storage plugin by calling `Storage()` func.
- Enable and grant permissions to trusted plugins.
- Load session manager plugin by calling `SessionManager()` func.
- Load template engine plugin by calling `TemplateEngine()` func.
- Load router plugin by calling `Router()` func.
- Load each plugin (except those above) only if enabled in `site.bin` file:
  - Enable plugin by calling `Enable()` and passing in `ambient.Toolkit`.
  - Add routes from plugin to router by calling `Routes()`.
  - Load assets from plugin by calling `Assets()`.
- Load each middleware plugin (first handler is the handler from router):
  - Wrap the middleware around the previous handler by calling `Middleware()` func and adding a conditional so it's only run if enabled in `site.bin` file.
- Pass the handler to `ListenAndServe()` func.

## Plugin Loader

To boot an Ambient app, you will need to load plugins by populating the `ambient.PluginLoader` struct. The minimum plugins required to boot are covered in [Components](/docs/docs/architecture/components).

## Considerations

A few things to note:

- An Ambient app can have a plugin enabled or disabled while it's running (through the pluginmanager). It will then load or unload the plugin making changes to routes, assets, and middleware.
- When a change to the app is made or data is read or modified in `site.bin` file, the permissions of the plugin are checked first to ensure the user granted the plugin permissions to perform their action. The permissions are stored in the `site.bin` file.
- Logger plugin and storage plugin are automatically trusted because they are loaded before the plugin system boots.
- Router plugin and template engine plugin are automatically trusted because they are explicitly passed to the plugin system.
- Logger, storage, template engine, and router won't have the `Enable()` func called so it will only be able to use parts of the toolkit that are passed in when their respective functions are called. You can also remove the `*ambient.PluginBase` and `*ambient.Toolkit` from the main struct since they won't be used. You can see [zaplogger](https://github.com/ambientkit/plugin/blob/main/logger/zaplogger/zaplogger.go) as an example.
- Session manager should always have a middleware component to it so shouldn't be listed in the Plugins section, but it should be listed in the Middleware section. Be sure to define it only once and then use it as both a parameter for `ambient.PluginLoader.SessionManager` and `ambient.PluginLoader.Middleware`. You define it in middleware so you can control when it gets called relative to other middleware.
- Plugin manager should be in the trusted plugins list since it's required to enable other plugins.