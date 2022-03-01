# Middleware

[Middleware](https://github.com/ambientkit/plugin/blob/main/sessionmanager/scssession/scssession.go) runs code before or after a route is served. It's useful for tasks like loging a request, checking if the user is authenticated, and compressing the response.

A middleware plugin must include, at a minimum, the code below with the `Middleware()` function. Notice the `*ambient.PluginBase` object is included in the struct because it can be used by the `Middleware()` function.

```go
// Package mvp provides a template for building a plugin for Ambient apps.
package mvp

import (
	"net/http"

	"github.com/ambientkit/ambient"
)

// Plugin represents an Ambient plugin.
type Plugin struct {
	*ambient.PluginBase
}

// New returns a new mvp plugin.
func New() *Plugin {
	return &Plugin{
		PluginBase: &ambient.PluginBase{},
	}
}

// PluginName returns the plugin name.
func (p *Plugin) PluginName() string {
	return "mvp"
}

// PluginVersion returns the plugin version.
func (p *Plugin) PluginVersion() string {
	return "1.0.0"
}

// Middleware returns router middleware.
func (p *Plugin) Middleware() []func(next http.Handler) http.Handler {
	return []func(next http.Handler) http.Handler{
		// Add your code here.
	}
}
```

The `Middleware()` function should return an object that satisfies the `[]func(next http.Handler) http.Handler` definition. The middleware load from bottom to top so be sure to organize them accordingly. They will also be ordered based on the position in the `plugin.go` file.

## URL Path

Middleware also has access to the [Toolkit](/docs/plugins/toolkit). One of the Toolkit functions you should use when working with comparing URLs is:

- `Path(url string) string` - returns a URL with proper URL prefix based on the `AMB_URL_PREFIX` environment variable; this should be used in middleware when comparing paths. You can see examples in [notrailingslash](https://github.com/ambientkit/plugin/blob/main/middleware/notrailingslash/notrailingslash.go) and [securedashboard](https://github.com/ambientkit/plugin/blob/main/middleware/securedashboard/securedashboard.go)