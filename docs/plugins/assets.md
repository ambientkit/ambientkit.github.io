# Assets

The `Assets()` function returns a list of assets that can modify the template output. They can be used to link to local resources like stylesheets and javascript files or they can link to external resources. You can also define the header and footer for template output. Assets support templating from a string or from a template. You can even add HTML tags to the template output. They are pretty powerful and support a bunch of use cases.

A [plugin](https://github.com/ambientkit/plugin/blob/main/generic/simplelogin/simplelogin.go) that has assets should use MVP code as well as the `Assets()` function.

You can also use [FuncMaps](/docs/docs/plugins/funcmaps) with assets because they are all parsed as HTML templates.

Below is a few examples of how assets can be used to inject items.

```go
// Assets returns a list of assets and an embedded filesystem.
func (p *Plugin) Assets() ([]ambient.Asset, *embed.FS) {
	arr := make([]ambient.Asset, 0)

	siteTitle, err := p.Site.Title()
	if err == nil && len(siteTitle) > 0 {
		arr = append(arr, ambient.Asset{
			Filetype: ambient.AssetGeneric,
			Location: ambient.LocationHead,
			TagName:  "title",
			Inline:   true,
			Content:  fmt.Sprintf(`{{if .pagetitle}}{{.pagetitle}} | %v{{else}}%v{{end}}`, siteTitle, siteTitle),
		})
	}

	siteDescription, err := p.Site.PluginSettingString(Description)
	if err == nil && len(siteDescription) > 0 {
		arr = append(arr, ambient.Asset{
			Filetype:   ambient.AssetGeneric,
			Location:   ambient.LocationHead,
			TagName:    "meta",
			ClosingTag: false,
			Attributes: []ambient.Attribute{
				{
					Name:  "name",
					Value: "description",
				},
				{
					Name:  "content",
					Value: fmt.Sprintf("{{if .pagedescription}}{{.pagedescription}}{{else}}%v{{end}}", siteDescription),
				},
			},
		})
	}

	siteAuthor, err := p.Site.PluginSettingString(Author)
	if err == nil && len(siteAuthor) > 0 {
		arr = append(arr, ambient.Asset{
			Filetype:   ambient.AssetGeneric,
			Location:   ambient.LocationHead,
			TagName:    "meta",
			ClosingTag: false,
			Attributes: []ambient.Attribute{
				{
					Name:  "name",
					Value: "author",
				},
				{
					Name:  "content",
					Value: siteAuthor,
				},
			},
		})
	}

	arr = append(arr, ambient.Asset{
		Path:     "template/partial/nav.tmpl",
		Filetype: ambient.AssetGeneric,
		Location: ambient.LocationHeader,
		Inline:   true,
	})

	arr = append(arr, ambient.Asset{
		Path:     "template/partial/footer.tmpl",
		Filetype: ambient.AssetGeneric,
		Location: ambient.LocationFooter,
		Inline:   true,
	})

	return arr, &assets
}
```

You can see all of the available setting types in the [asset.go](https://github.com/ambientkit/ambient/blob/main/asset.go) file.

## Usage Examples

For all the examples below, they would be added to the `Assets()` function:

```go
// Assets returns a list of assets and an embedded filesystem.
func (p *Plugin) Assets() ([]ambient.Asset, *embed.FS) {
	arr := make([]ambient.Asset, 0)
	// All the code samples below would go here.
	return arr, &assets
}
```

### Title Tag

The code below:
- reads the site title from the app configuration
- if it's set, add a `<title>` tag to HTML `<head>` section
- the inner content of the tag should show the page title with site title if the page title exists
- oherwise, show just the site title

```go
siteTitle, err := p.Site.Title()
if err == nil && len(siteTitle) > 0 {
	arr = append(arr, ambient.Asset{
		Filetype: ambient.AssetGeneric,
		Location: ambient.LocationHead,
		TagName:  "title",
		Inline:   true,
		Content:  fmt.Sprintf(`{{if .pagetitle}}{{.pagetitle}} | %v{{else}}%v{{end}}`, siteTitle, siteTitle),
	})
}
```

Sample result:

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<title>Page Title | Site Title</title>
</head>
<body>
    <header>
    </header>
    <main>
    </main>
    <footer>
    </footer>
</body>
</html>
```

### Meta Description

```go
siteDescription, err := p.Site.PluginSettingString(Description)
if err == nil && len(siteDescription) > 0 {
	arr = append(arr, ambient.Asset{
		Filetype:   ambient.AssetGeneric,
		Location:   ambient.LocationHead,
		TagName:    "meta",
		ClosingTag: false,
		Attributes: []ambient.Attribute{
			{
				Name:  "name",
				Value: "description",
			},
			{
				Name:  "content",
				Value: fmt.Sprintf("{{if .pagedescription}}{{.pagedescription}}{{else}}%v{{end}}", siteDescription),
			},
		},
	})
}
```

Sample result:

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta name="description" content="The site description goes here.">
</head>
<body>
    <header>
    </header>
    <main>
    </main>
    <footer>
    </footer>
</body>
</html>
```

### Navigation Template

```go
arr = append(arr, ambient.Asset{
	Path:     "template/partial/nav.tmpl",
	Filetype: ambient.AssetGeneric,
	Location: ambient.LocationHeader,
	Inline:   true,
})
```

Sample result:

```html
<!DOCTYPE html>
<html lang="en">
<head>
</head>
<body>
    <header>
		<nav>
			<a href="{{URLPrefix}}/dashboard">Dashboard</a>
			<a href="{{URLPrefix}}/dashboard/posts">Edit Blog</a>
			<a href="{{URLPrefix}}/dashboard/plugins">Plugins</a>
		</nav>
    </header>
    <main>
    </main>
    <footer>
    </footer>
</body>
</html>
```

### Link tag

```go
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
```

Sample result:

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<link rel="canonical" href="https://example.com/page">
</head>
<body>
    <header>
    </header>
    <main>
    </main>
    <footer>
    </footer>
</body>
</html>
```

### Serve CSS from File

An embedded filesystem (`embded.FS`) can also be used with assets. In the example below, a `css/bear.css` file exists in a local folder and will be embedded and then served at a URL that is contructed by Ambient: 

```go
//go:embed css/*.css
var assets embed.FS

// Assets returns a list of assets and an embedded filesystem.
func (p *Plugin) Assets() ([]ambient.Asset, *embed.FS) {
	return []ambient.Asset{
		{
			Filetype: ambient.AssetStylesheet,
			Path:     "css/bear.css",
			Location: ambient.LocationHead,
		},
	}, &assets
}
```

Sample result:

To prevent collisions, the URL for the resource has the plugin in the name. The version of the plugin is also appended to the end to improve caching.

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<link rel="stylesheet" href="/plugins/bearcss/css/bear.css?v=1.0.0">
</head>
<body>
    <header>
    </header>
    <main>
    </main>
    <footer>
    </footer>
</body>
</html>
```

### Layout Selection

You can use `LayoutOnly` to set whether `LayoutPost` or `LayoutPage` layouts get the asset.

```go
// Assets returns a list of assets and an embedded filesystem.
func (p *Plugin) Assets() ([]ambient.Asset, *embed.FS) {
	return []ambient.Asset{
		{
			Path:     "css/disqus.css",
			Filetype: ambient.AssetStylesheet,
			Location: ambient.LocationHead,
			LayoutOnly: []ambient.LayoutType{
				ambient.LayoutPost,
			},
		},
	}, &assets
}
```

### Inline Find and Replace

For non-HTML files, you may need to do a find and replace to inject variables in the file. In this example, the JavaScript file content is injected into the body of the HTML template and then the placeholders are replaced with variables.

```go
// Assets returns a list of assets and an embedded filesystem.
func (p *Plugin) Assets() ([]ambient.Asset, *embed.FS) {
	return []ambient.Asset{
		{
			Path:     "js/disqus.js",
			Filetype: ambient.AssetJavaScript,
			Location: ambient.LocationBody,
			LayoutOnly: []ambient.LayoutType{
				ambient.LayoutPost,
			},
			Inline: true,
			Replace: []ambient.Replace{
				{
					Find:    "{{.DisqusID}}",
					Replace: disqusID,
				},
				{
					Find:    "{{.SiteURL}}",
					Replace: siteURL,
				},
			},
		},
	}, &assets
}
```

Sample result:

This is how it would look if find/replace was not performed so you can see what gets replaced.

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<link rel="stylesheet" href="/plugins/bearcss/css/bear.css?v=1.0.0">
</head>
<body>
    <header>
    </header>
    <main>
    </main>
    <footer>
    </footer>
    <script type="text/javascript">
	var disqus_config = function () {
		this.page.url = '{{.SiteURL}}{{disqus_PageURL}}';
	};
	(function () {
		var d = document, s = d.createElement('script');
		s.src = 'https://{{.DisqusID}}.disqus.com/embed.js';
		s.setAttribute('data-timestamp', +new Date());
		(d.head || d.body).appendChild(s);
	})();
    </script>
</body>
</html>
```