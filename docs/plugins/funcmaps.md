# Funcmaps

The `FuncMap()` function returns a `template.FuncMap` that can be used in the templates. They can also be used in assets which is pretty cool.

A [plugin](https://github.com/ambientkit/plugin/blob/main/generic/disqus/diqus.go) that needs a FuncMap for templates should use MVP code as well as the `Assets()` function.

```go
// FuncMap returns a callable function when passed in a request.
func (p *Plugin) FuncMap() func(r *http.Request) template.FuncMap {
	return func(r *http.Request) template.FuncMap {
		fm := make(template.FuncMap)
		fm["disqus_PageURL"] = func() string {
			return r.URL.Path
		}

		return fm
	}
}
```