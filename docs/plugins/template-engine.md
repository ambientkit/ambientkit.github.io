# Template Engine

A [template engine](https://github.com/ambientkit/plugin/blob/main/templateengine/htmlengine/htmlengine.go) renders content to the `ResponseWriter`.

The template engine plugin must include the MVP code as well as the `TemplateEngine()` function.

```go
// TemplateEngine returns a template engine.
func (p *Plugin) TemplateEngine(logger ambient.Logger, injector ambient.AssetInjector) (ambient.Renderer, error) {
	tmpl := NewTemplateEngine(logger, injector)
	return tmpl, nil
}
```

The function should take in both the Logger and [`AssetInjector`](https://github.com/ambientkit/ambient/blob/main/ambient_injector.go).

```go title="ambient_injector.go"
// AssetInjector represents code that can inject files into a template.
type AssetInjector interface {
	Inject(injector LayoutInjector, t *template.Template, r *http.Request,
		layoutType LayoutType, vars map[string]interface{}) (*template.Template, error)
	DebugTemplates() bool
	EscapeTemplates() bool
}
```

The function should return an object that satisfies the [`Renderer`](https://github.com/ambientkit/ambient/blob/main/ambient_renderer.go) interface. The page and post allow you to define two different formats when rendering content so you can have the assets affect each differently.

```go title="ambient_renderer.go"
// Renderer represents a template renderer.
type Renderer interface {
	Page(w http.ResponseWriter, r *http.Request, assets embed.FS, templateName string,
		fm template.FuncMap, vars map[string]interface{}) (status int, err error)
	PageContent(w http.ResponseWriter, r *http.Request, content string,
		fm template.FuncMap, vars map[string]interface{}) (status int, err error)
	Post(w http.ResponseWriter, r *http.Request, assets embed.FS, templateName string,
		fm template.FuncMap, vars map[string]interface{}) (status int, err error)
	PostContent(w http.ResponseWriter, r *http.Request, content string,
		fm template.FuncMap, vars map[string]interface{}) (status int, err error)
	Error(w http.ResponseWriter, r *http.Request, content string, statusCode int,
		fm template.FuncMap, vars map[string]interface{}) (status int, err error)
}
```