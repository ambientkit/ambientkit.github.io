# Session Manager

A [session manager](https://github.com/ambientkit/plugin/blob/main/sessionmanager/scssession/scssession.go) authenticates and verify users.

The session manager plugin must include the MVP code as well as the `SessionManager()` function. It should also include a `Middleware()` function to verify users when they try to access authenticated routes. You can get more information in the the [Middleware](#middleware) section below.

```go
// SessionManager returns the session manager.
func (p *Plugin) SessionManager(logger ambient.Logger, ss ambient.SessionStorer) (ambient.AppSession, error) {
	// Set up the session storage provider.
	en := websession.NewEncryptedStorage(p.sessionKey)
	store, err := websession.NewJSONSession(ss, en)
	if err != nil {
		return nil, err
	}

	sessionName := "session"

	p.sessionManager = scs.New()
	p.sessionManager.Lifetime = 24 * time.Hour
	p.sessionManager.Cookie.Persist = false
	p.sessionManager.Store = store
	p.sess = websession.New(sessionName, p.sessionManager)

	return p.sess, nil
}

// Middleware returns router middleware.
func (p *Plugin) Middleware() []func(next http.Handler) http.Handler {
	return []func(next http.Handler) http.Handler{
		p.sessionManager.LoadAndSave,
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