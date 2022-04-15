# Router

A [router](https://github.com/ambientkit/plugin/blob/main/router/awayrouter/awayrouter.go) handles web requests based on the HTTP method and route.

A router system plugin must include, at a minimum, the code below with the `Router()` function. Notice the `*ambient.PluginBase` object is not included in the struct because this plugin type does need it.

```go
// Package mvp provides a template for building a plugin for Ambient apps.
package mvp

import (
	"github.com/ambientkit/ambient"
)

// Plugin represents an Ambient plugin.
type Plugin struct{}

// New returns a new mvp plugin.
func New() *Plugin {
	return &Plugin{}
}

// PluginName returns the plugin name.
func (p *Plugin) PluginName(context.Context) string {
	return "mvp"
}

// PluginVersion returns the plugin version.
func (p *Plugin) PluginVersion(context.Context) string {
	return "1.0.0"
}

// Router returns a router.
func (p *Plugin) Router(logger ambient.Logger, te ambient.Renderer) (ambient.AppRouter, error) {
	// Add your code here.
	return nil, nil
}
```

The function should:
- return an object that satisfies the [`AppRouter`](https://github.com/ambientkit/ambient/blob/main/ambient_router.go) interface.
- support wildcards in routes using braces: `/url/{param}`
  - if the router uses the alternative "colon" parameters (`/url/:param`), you can use the [paramconvert](https://github.com/ambientkit/plugin/blob/main/pkg/paramconvert/paramconvert.go) package. An example of it's usage is [here](https://github.com/ambientkit/plugin/blob/main/router/jshttprouter/router/method.go#L11).

```go title="ambient_router.go"
// AppRouter represents a router.
type AppRouter interface {
	Router

	ServeHTTP(w http.ResponseWriter, r *http.Request)
	SetNotFound(notFound http.Handler)
	SetServeHTTP(h func(w http.ResponseWriter, r *http.Request, status int, err error))
}

// Router represents a router.
type Router interface {
	Handle(method string, path string, fn func(http.ResponseWriter, *http.Request) error)
	Get(path string, fn func(http.ResponseWriter, *http.Request) error)
	Post(path string, fn func(http.ResponseWriter, *http.Request) error)
	Patch(path string, fn func(http.ResponseWriter, *http.Request) error)
	Put(path string, fn func(http.ResponseWriter, *http.Request) error)
	Delete(path string, fn func(http.ResponseWriter, *http.Request) error)
	Head(path string, fn func(http.ResponseWriter, *http.Request) error)
	Options(path string, fn func(http.ResponseWriter, *http.Request) error)
	StatusError(status int, err error) error
	Error(status int, w http.ResponseWriter, r *http.Request)
	Param(r *http.Request, name string) string
	Wrap(handler http.HandlerFunc) func(w http.ResponseWriter, r *http.Request) (err error)
}
```

## Custom Handler

The standard Go `http.HandlerFunc` looks like this:

```go title="net/http/server.go"
// The HandlerFunc type is an adapter to allow the use of
// ordinary functions as HTTP handlers. If f is a function
// with the appropriate signature, HandlerFunc(f) is a
// Handler that calls f.
type HandlerFunc func(ResponseWriter, *Request)

// ServeHTTP calls f(w, r).
func (f HandlerFunc) ServeHTTP(w ResponseWriter, r *Request) {
	f(w, r)
}
```

Ambient uses a [custom handler](https://github.com/ambientkit/plugin/blob/main/pkg/ambhandler/ambhandler.go) that requires a return of an error (which can be nil).

```go title="plugin/pkg/ambhandler/ambhandler.go"
// Handler represents an Ambient handler.
type Handler struct {
	HandlerFunc     func(w http.ResponseWriter, r *http.Request) (err error)
	CustomServeHTTP func(w http.ResponseWriter, r *http.Request, err error)
}

// ServeHTTP handles all the errors from the HTTP handlers.
func (fn Handler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	err := fn.HandlerFunc(w, r)

	if fn.CustomServeHTTP == nil {
		return
	}

	fn.CustomServeHTTP(w, r, err)
}
```

There are a few articles that talk about custom handlers - we use Matt Silverlock's method:

- [http.Handler and Error Handling in Go](http://blog.questionable.services/article/http-handler-error-handling-revisited/)
- [Error handling and Go](https://go.dev/blog/error-handling-and-go)

The advantage of a return value means that for every `return` in a handler, the developer has to specify an error or not. It's easy for a developer to do something like this where they return in a handler without writing a status code or content and the response will be a 200 with no content.

```go
func hello(w http.ResponseWriter, r *http.Request) {
	if r.Method != "POST" {
		// This return will send a 200 and no content.
		return
	}

	fmt.Fprint(w, "hello")
}
```

Once you add the return values, the developer must be explicit on what is returned in the response.

```go
func hello(w http.ResponseWriter, r *http.Request) (err error) {
	if r.Method != "POST" {
		// This return will send correctly a 403 and the default error message.
		return p.Mux.StatusError(http.StatusForbidden, nil)
	}

	fmt.Fprint(w, "hello")
	return nil // This means the default 200 will be sent.
}
```

You can then take it a step further and create functions that output to the writer with correct formats which makes the code very clean and understandable.

```go
func (h *Handler) hello(w http.ResponseWriter, r *http.Request) (err error) {
	if r.Method != "POST" {
		return h.JSON(w, http.StatusForbidden, nil)
	}

	return h.JSON(w, http.StatusOK, "hello")
}
```

This is what it would look like without the return value:

```go
func (h *Handler) hello(w http.ResponseWriter, r *http.Request) {
	if r.Method != "POST" {
		h.JSON(w, http.StatusForbidden, nil)
		// If this return is forgotten, it will cause an undesirable behavior.
		return
	}

	h.JSON(w, http.StatusOK, "hello")
}
```

## Test Suite

You can also run the router test suite against your plugin to make sure it meets all the requirements.

```go title="router_test.go"
package router_test

import (
	"testing"

	"github.com/ambientkit/ambient"
	"github.com/ambientkit/plugin/pkg/routertestsuite"
)

// Run the standard router test suite.
func TestMain(t *testing.T) {
	rt := routertestsuite.New()
	rt.Run(t, func() ambient.AppRouter {
		return New() // Replace with your own router.
	})
}
```