# Routes

The `Routes()` function registers HTTP handlers with the router.

A [plugin with routes](https://github.com/ambientkit/plugin/blob/main/generic/simplelogin/simplelogin.go) defined must include the MVP code as well as the `Routes()` function.

```go
// Routes gets routes for the plugin.
func (p *Plugin) Routes() {
	p.Mux.Get("/", p.home)
	p.Mux.Get("/login", p.login)
	p.Mux.Post("/login", p.loginPost)
	p.Mux.Get("/dashboard", p.dashboard)
	p.Mux.Get("/dashboard/logout", p.logout)
}
```

The function doesn't return any objects and shouldn't fail either. It also takes a special kind of HTTP handler - one that returns a HTTP status code and an error. A standard HTTP handler doesn't have any returns, but that makes it more difficult to standardize how to write out status codes and output errors so this new function definition improves on it.

```go
// Home renders the home template.
func (p *Plugin) Home(w http.ResponseWriter, r *http.Request) (status int, err error) {
	vars := make(map[string]interface{})
	vars["title"] = "Home"
	return p.Render.Page(w, r, assets, "template/content/home", p.funcMap(r), vars)
}
```