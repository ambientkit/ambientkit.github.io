# Session Manager

A [session manager](https://github.com/ambientkit/plugin/blob/main/sessionmanager/scssession/scssession.go) authenticates and verify users.

A session manager plugin must include, at a minimum, the code below with the `SessionManager()` function. It should also include a `Middleware()` function to verify users when they try to access authenticated routes. You can read more about [Middleware](#middleware) in the section below. Notice the `*ambient.PluginBase` object is included in the struct because it can be used by the `Middleware()` function.

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

// SessionManager returns the session manager.
func (p *Plugin) SessionManager(logger ambient.Logger, ss ambient.SessionStorer) (ambient.AppSession, error) {
	// Add your code here.
	return nil, nil
}

// Middleware returns router middleware.
func (p *Plugin) Middleware() []func(next http.Handler) http.Handler {
	return []func(next http.Handler) http.Handler{
		// Add your code here.
	}
}
```

The `SessionManager()` function should return an object that satisfies the [`AppSession`](https://github.com/ambientkit/ambient/blob/main/ambient_session.go) interface. The `Middleware()` function should return an object that satisfies the `[]func(next http.Handler) http.Handler` definition.

```go title="ambient_session.go"
// AppSession represents a user session.
type AppSession interface {
	AuthenticatedUser(r *http.Request) (string, error)
	Login(r *http.Request, username string)
	Logout(r *http.Request)
	LogoutAll(r *http.Request) error
	Persist(r *http.Request, persist bool)
	SetCSRF(r *http.Request) string
	CSRF(r *http.Request) bool
	SessionValue(r *http.Request, name string) string
	SetSessionValue(r *http.Request, name string, value string) error
	DeleteSessionValue(r *http.Request, name string)
}
```

## Test Suite

You can also run the session manager test suite against your plugin to make sure it meets all the requirements.

```go title="sessmgr_test.go"
package sessmgr_test

import (
	"net/http"
	"testing"

	"github.com/ambientkit/ambient"
	"github.com/ambientkit/plugin/pkg/sessmgrtestsuite"
)

// Run the standard session manager test suite.
func TestMain(t *testing.T) {
	ts := sessmgrtestsuite.New()
	ts.Run(t, func() (ambient.AppSession, func(next http.Handler) http.Handler) {
		return setup(t) // Replace with your own setup function.
	})
}
```