# FuncMaps

FuncMaps are how you can call functions in HTML templates to return data. They are a map of functions that can take in parameters. You can read more about them with examples [here](https://pkg.go.dev/text/template#FuncMap).

The `FuncMap()` function should accept an http.Request and then return a `template.FuncMap`. The reason it accepts a request is sometimes information around the current user or request is needed by the functions. Below is an example of how to return a page URL to a template.

```go title="plugin.go"
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

You can then call the FuncMap in a template like this:

```html title="template.html"
<!DOCTYPE html>
<html lang="en">
<head>
</head>
<body>
    <main>
		The page URL is: {{disqus_PageURL}}
    </main>
</body>
</html>
```

## FuncMaps in Assets

You can also use FuncMaps in the [`Assets()`](/docs/docs/plugins/assets) function since they are parsed as HTML templates.

```go title="plugin.go"
// Assets returns a list of assets and an embedded filesystem.
func (p *Plugin) Assets() ([]ambient.Asset, *embed.FS) {
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

// FuncMap returns a callable function when passed in a request.
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