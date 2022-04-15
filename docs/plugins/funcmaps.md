# FuncMaps

FuncMaps are how you can call functions in HTML templates to return data. They are a map of functions that can take in parameters. You can read more about them with examples [here](https://pkg.go.dev/text/template#FuncMap).

The `FuncMap()` function should return a callable function that accepts an http.Request and then returns a `template.FuncMap`. The reason it accepts a request is sometimes information around the current user or request is needed by the functions.

Below is an example of how to define a FuncMap.

```go
// FuncMap returns a callable function that accepts a request.
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

Your handler should pass in `p.FuncMap()` so the template can use it.

```go title="plugin_route.go"
func (p *Plugin) welcomeView(w http.ResponseWriter, r *http.Request) (err error) {
	vars := make(map[string]interface{})
	vars["title"] = "Welcome"
	return p.Render.Page(w, r, assets, "template/view.tmpl", p.FuncMap(), vars)
}
```

You can then call the FuncMap in a template.

```html title="template/view.html"
<h1>{{.title}}</h1>
<p>The page URL is: {{disqus_PageURL}}</p>
```

## Global Functions

These functions are always available in templates so don't try to overwrite them.

`URLPrefix` returns the `AMB_URL_PREFIX` environment variable. Here is an example of how you would use it:

```html
<a href="{{URLPrefix}}/dashboard/posts/new">New post</a>
```

`TrustHTML` returns prevents the [HTML](https://pkg.go.dev/html/template#HTML) from being escaped.

```html
{{.content | TrustHTML}}
```

`TrustHTMLAttr` returns prevents the [HTML attributes](https://pkg.go.dev/html/template#HTMLAttr) from being escaped. For example: ` dir="ltr"`.

```html
{{.content | TrustHTMLAttr}}
```

`TrustJS` returns prevents the [JavaScript](https://pkg.go.dev/html/template#JS) from being escaped.

```html
{{.content | TrustJS}}
```

`TrustJSStr` returns prevents the [JavaScript characters](https://pkg.go.dev/html/template#JSStr) from being escaped.

```html
{{.content | TrustJSStr}}
```

`TrustSrcset` returns prevents the [srcset](https://pkg.go.dev/html/template#Srcset) from being escaped.

```html
{{.content | TrustSrcset}}
```

## Namespaces

FuncMaps are global which means all of the maps are combined before rendering the template. To prevent collisions, each function must have a key that is prefixed with the name of the plugin. For instance, for the `disqus` plugin, all FuncMaps should start with `disqus_`.

```go
fm["disqus_PageURL"] = func() string {
	return r.URL.Path
}
```

If the key does not include the prefix of the plugin, Ambient will automatically add the prefix (`disqus_*`) so it's a best practice to include it for consistency.

## FuncMaps in Assets

You can also use FuncMaps in the [`Assets()`](/docs/plugins/assets) function since they are parsed as HTML templates.

```go
// Assets returns a list of assets and an embedded filesystem.
func (p *Plugin) Assets(context.Context) ([]ambient.Asset, ambient.FileSystemReader) {
	arr := make([]ambient.Asset, 0)

	arr = append(arr, ambient.Asset{
		Filetype:   ambient.AssetGeneric,
		Location:   ambient.LocationHead,
		TagName:    "link",
		ClosingTag: false,
		Attributes: []ambient.Attribute{
			{
				Name:  "rel",
				Value: "canonical",
			},
			{
				Name:  "href",
				Value: `{{if .canonical}}{{.canonical}}{{else}}{{bearblog_PageURL}}{{end}}`,
			},
		},
	})

	return arr, &assets
}

// FuncMap returns a callable function that accepts a request.
func (p *Plugin) FuncMap() func(r *http.Request) template.FuncMap {
	return func(r *http.Request) template.FuncMap {
		fm := make(template.FuncMap)
		fm["bearblog_PageURL"] = func() string {
			siteURL, err := p.Site.FullURL()
			if err != nil {
				p.Log.Warn("bearblog: error getting site URL: %v", err.Error())
			}

			return path.Join(siteURL, r.URL.Path)
		}

		return fm
	}
}
```