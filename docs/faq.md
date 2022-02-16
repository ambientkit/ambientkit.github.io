# Frequently Asked Questions

## What is Ambient?

Ambient is a framework in Go for building web apps using plugins. You can use the plugins already included to stand up a blog just like the [Bear Blog](https://bearblog.dev/) or create your own plugins to build your own app. Plugins can be enabled/disabled while the app is running which means routes as well as middleware can also modified without restarting the app. Plugins must be granted permissions above being enabled which provides you with better control over your app.

## Why was it created?

Each time I write a new app, there is a lot of foundational code reuse. I created Ambient to help myself standardize existing code, enable/disable packages on demand, modify plugin behaviors using a configurable settings page, and build new functionality in a reusable way.

## Who is it for?

Ambient will probably appeal to individual developers or small development teams who need to build one or many apps using a pluggable framework. Large teams will probably want a more established framework - but if you find it works well, drop me a [line](https://twitter.com/josephspurrier) 😁 .

## How does it work?

Ambient is a web server that accepts an app name, app version, logger, storage system, and a collection of plugins (which must include a router, template engine, and session manager).

Plugins:
- have to satisfy [interfaces](https://github.com/ambientkit/ambient/blob/main/ambient.go) in order to work with Ambient.
- must request permissions and the admin must grant each permission.
- can modify or interact with almost any part of an app:
  - logging
  - session management
  - URL handling/routing for pages and API endpoints
  - middleware on routes
  - page templates
  - content for HTML head, content, navigation, footer, etc.

A [pluginmanager plugin](https://github.com/ambientkit/plugin/tree/main/generic/pluginmanager/pluginmanager.go) is included that allows you to:
  - Enable/disable a plugin
  - Grant permissions to a plugin
  - Modify the settings for a plugin

There is a [library of plugins](https://github.com/ambientkit/plugin) that you can use in your apps or use as a reference when creating your own plugins.