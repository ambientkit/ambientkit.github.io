# Router

A [router](https://github.com/ambientkit/plugin/blob/main/router/awayrouter/awayrouter.go) handles web requests based on the HTTP method and route.

A router plugin must include the [MVP](mvp) code as well as the `Router()` function.

```go
// Router returns a router.
func (p *Plugin) Router(logger ambient.Logger, te ambient.Renderer) (ambient.AppRouter, error) {
	// Set up the default router.
	mux := router.New()

	// Set the NotFound and custom ServeHTTP handlers.
	p.setupRouter(logger, mux, te)

	return mux, nil
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
	Clear(method string, path string)
	SetNotFound(notFound http.Handler)
	SetServeHTTP(h func(w http.ResponseWriter, r *http.Request, status int, err error))
}

// Router represents a router.
type Router interface {
	Get(path string, fn func(http.ResponseWriter, *http.Request) (int, error))
	Post(path string, fn func(http.ResponseWriter, *http.Request) (int, error))
	Patch(path string, fn func(http.ResponseWriter, *http.Request) (int, error))
	Put(path string, fn func(http.ResponseWriter, *http.Request) (int, error))
	Delete(path string, fn func(http.ResponseWriter, *http.Request) (int, error))
	Head(path string, fn func(http.ResponseWriter, *http.Request) (int, error))
	Options(path string, fn func(http.ResponseWriter, *http.Request) (int, error))
	Error(status int, w http.ResponseWriter, r *http.Request)
	Param(r *http.Request, name string) string
	Wrap(handler http.HandlerFunc) func(w http.ResponseWriter, r *http.Request) (status int, err error)
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

Ambient uses a [custom handler](https://github.com/ambientkit/plugin/blob/main/pkg/ambhandler/ambhandler.go) that requires a return of both a HTTP status code as well as an error (which can be nil).

```go title="plugin/pkg/ambhandler/ambhandler.go"
// Handler represents an Ambient handler.
type Handler struct {
	HandlerFunc     func(w http.ResponseWriter, r *http.Request) (status int, err error)
	CustomServeHTTP func(w http.ResponseWriter, r *http.Request, status int, err error)
}

// ServeHTTP handles all the errors from the HTTP handlers.
func (fn Handler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	status, err := fn.HandlerFunc(w, r)

	if fn.CustomServeHTTP == nil {
		return
	}

	fn.CustomServeHTTP(w, r, status, err)
}
```

There are a few articles that talk about custom handlers:

- [Error handling and Go](https://go.dev/blog/error-handling-and-go)
- [Custom Handlers and Avoiding Globals in Go Web Applications](https://blog.questionable.services/article/custom-handlers-avoiding-globals/)

The advantage of return values means that for every `return` in a handler, the developer has to specify the response. It's easy for a developer to do something like this where they return in a handler without writing a status code or content and the response will be a 200 with no content.

```go
func hello(w http.ResponseWriter, r *http.Request) {
	if r.Method != "POST" {
		// This return will send incorrectly a 200 and no content.
		return
	}

	fmt.Fprint(w, "hello")
}
```

Once you add the return values, the developer must be explicit on what is returned in the response.

```go
func hello(w http.ResponseWriter, r *http.Request) (status int, err error) {
	if r.Method != "POST" {
		// This return will send correctly a 403 and the default error message.
		return http.StatusForbidden, nil
	}

	fmt.Fprint(w, "hello")
	return http.StatusOK, nil
}
```

You can then take it a step further and create functions that output to the writer with correct formats which makes the code very clean and understandable.

```go
func (h *Handler) hello(w http.ResponseWriter, r *http.Request) (status int, err error) {
	if r.Method != "POST" {
		return h.JSON(w, http.StatusForbidden, nil)
	}

	return h.JSON(w, http.StatusOK, "hello")
}
```

This is what it would look like without the return values:

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