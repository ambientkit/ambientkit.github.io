# Middleware

[Middleware](https://github.com/ambientkit/plugin/blob/main/sessionmanager/scssession/scssession.go) runs code before or after a route is served. It's useful for tasks like loging a request, checking if the user is authenticated, and compressing the response.

A middleware plugin must include the MVP code as well as the `Middleware()` function.

```go
// Middleware returns router middleware.
func (p *Plugin) Middleware() []func(next http.Handler) http.Handler {
	return []func(next http.Handler) http.Handler{
		p.sessionManager.LoadAndSave,
	}
}
```

The `Middleware()` function should return an object that satisfies the `[]func(next http.Handler) http.Handler` definition. The middleware load from bottom to top so be sure to organize them accordingly. They will also be ordered based on the position in the `plugin.go` file.

## URL Path

Middleware also has access to the [Toolkit](/docs/plugins/toolkit). One of the Toolkit functions you should use when working with comparing URLs is:

- `Path(url string) string` - returns a URL with proper URL prefix based on the `AMB_URL_PREFIX` environment variable; this should be used in middleware when comparing paths. You can see examples in [notrailingslash](https://github.com/ambientkit/plugin/blob/main/middleware/notrailingslash/notrailingslash.go) and [securedashboard](https://github.com/ambientkit/plugin/blob/main/middleware/securedashboard/securedashboard.go)