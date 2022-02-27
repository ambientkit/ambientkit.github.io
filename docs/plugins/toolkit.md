# Tookit

Almost all plugins have access to a toolkit that gives them access to approved services that they can use. The Toolkit object includes methods from these:

- **Logger** - plugin safe logger with all methods except `Fatal()` since plugins shouldn't be able to terminate the app
- **Router** - plugin safe router with a route recorder so routes can be disabled when a plugin is disabled. It also applies the `AMB_URL_PREFIX` environment variable if set.
- **Renderer** - plugin safe template engine that adds a Funcmap of `URLPrefix` to all templates
- **SecureSite** - plugin safe API for interacting with the application that is governed by the permission system (grants)

Each of the objects above have a layer of abstraction around them to prevent plugins from getting access other exported methods. You can see an example [here](https://go.dev/play/p/zVxZeA3dJ4n) where a plugin could potentially convert an object back to it's native type and then have access to any of the exported methods. The layer of abstraction around each object provides protection against this type of attack.

## Toolkit Limited Access

The types of plugins that don't have access to the toolkit are:

- **Logger** - it has to be loaded first so it only has access to the app name and app version
- **Storage System** - it only has access to the logger
- **Session Manager** - it only has access to the logger and the session storage, but it's middleware does get access to the Toolkit
- **Template Engine** - it only has access to the logger and the asset injector
- **Router** - it only has access to the logger and the renderer (template engine)

## Helpers

It also contains these [helper](https://github.com/ambientkit/ambient/blob/main/toolkit.go) functions:

- `Redirect(w http.ResponseWriter, r *http.Request, url string, code int)` - redirects to new URL
- `Path(url string) string` - returns a URL with proper URL prefix based on the `AMB_URL_PREFIX` environment variable; this should be used in middleware when comparing paths. You can see examples in [notrailingslash](https://github.com/ambientkit/plugin/blob/main/middleware/notrailingslash/notrailingslash.go) and [securedashboard](https://github.com/ambientkit/plugin/blob/main/middleware/securedashboard/securedashboard.go)
- `JSON(w http.ResponseWriter, status int, response interface{}) (int, error)` - convert a struct or map to JSON and then send to the client
- `JSONPretty(w http.ResponseWriter, status int, response interface{}) (int, error)` - same as JSON, but outputs it with indenting so it's in a more readable format

The Toolkit is passed into plugins via the [`Enable()`](/docs/plugins/enable) method.