# Tookit

Almost all plugins have access to a toolkit that gives them access to approved services that they can use. The Toolkit object includes methods from these:

- Logger - plugin safe logger with all methods except `Fatal()` since plugins shouldn't be able to terminate the app
- Router - plugin safe router with a route recorder so routes can be disabled when a plugin is disabled. It also applies the `AMB_URL_PREFIX` environment variable if set.
- Renderer - plugin safe template engine that adds a Funcmap of `URLPrefix` to all templates
- SecureSite - plugin safe API for interacting with the application that is governed by the permission system (grants)

Each of the objects above have a layer of abstraction around them to prevent plugins from getting access other exported methods. You can see an example [here](https://go.dev/play/p/zVxZeA3dJ4n) where a plugin could potentially convert an object back to it's native type and then have access to any of the exported methods. The layer of abstraction around each object provides protection against this type of attack.

It also contains these helper functions:

- Redirect - redirect to new URL
- Path - URL with proper URL prefix
- JSON - write JSON output to response writer
- JSONPretty - write pretty JSON output to response writer