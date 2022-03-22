# Assets

The `Assets()` function returns a list of assets that can modify the template output. They can be used to link to local resources like stylesheets and javascript files or they can link to external resources. You can also define the header and footer for template output. Assets support templating from a string or from a template. You can even add HTML tags to the template output. They are pretty powerful and support a bunch of use cases.

A [plugin](https://github.com/ambientkit/plugin/blob/main/generic/simplelogin/simplelogin.go) that has assets should use MVP code as well as the `Assets()` function.

You can also use [FuncMaps](/docs/plugins/funcmaps) with assets because they are all parsed as HTML templates.

## Required Fields

You can see all of the available asset fields in the [asset.go](https://github.com/ambientkit/ambient/blob/main/asset.go) file.

### Asset Type

Asset type determines the type of asset.

- **AssetStylesheet** - asset is a stylesheet
- **AssetJavaScript** - asset is a JavaScript file
- **AssetGeneric** - asset is any other type of file

### Asset Location

Asset location is where the assets will be injected into the HTML template.

- **LocationHead** - injects at the bottom of the HTML `<head>` section
- **LocationBody** - injects at the bottom of the HTML `<body>` section
- **LocationHeader** - injects at the top the HTML `<header>` section
- **LocationMain** - injects at the bottom of the HTML `<main>` section
- **LocationFooter** - injects in the HTML `<footer>` section

The template engine uses this [template](https://github.com/ambientkit/plugin/blob/main/templateengine/htmlengine/layout/page.tmpl) when injecting in assets:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    {{block "PluginHeadContent" ""}}{{end}}
</head>
<body>
    <header>
        {{block "PluginHeaderContent" ""}}{{end}}
    </header>
    <main>
        {{template "content" ""}}
        {{block "PluginMainContent" ""}}{{end}}
    </main>
    <footer>
        {{block "PluginFooterContent" ""}}{{end}}
    </footer>
    {{block "PluginBodyContent" ""}}{{end}}
</body>
</html>
```

## Optional Fields

### Auth Type

Auth type determines whether an asset is injected based on user authentication status.

- **AuthAll** - injects asset for both anonymous and authenticated users
- **AuthAnonymousOnly** - injects asset for only anonymous users
- **AuthOnly** - injects asset for only authenticated users

### Attributes

Attributes are a list of HTML attributes on all asset types except on `AssetGeneric` without a `TagName`.

### Layout Type

Layout type determines whether an asset is injected based on layout type. `LayoutOnly` can contain a list of layout types where the asset will be injected. It will display on all layouts if not specified.

- **LayoutPage** - injects asset into pages
- **LayoutPost** - injects assets into posts

Pages and posts are essentially the same layout, but provide a standard way to differentiate. Posts should be used for blog content. Pages should be used for all other content like the home page, product pages, administrative pages, etc. The standardization allows plugins to inject content specifically for one type of layout. For example, the [disqus](https://github.com/ambientkit/plugin/blob/main/generic/disqus/diqus.go) plugin adds a way for visitors to comment on only posts.

### TagName

TagName can only be used with `AssetGeneric` and specifies the type of HTML element to create. If it's empty, then the asset will be injected on the page without a surrounding HTML element.

### ClosingTag

ClosingTag will add a closing tag to the element. It can only be used with `AssetGeneric` when `Inline` is not specified or is false.

### External

External, if true, will just use the path as the source of the element. It can only be used with `AssetStylesheet` and `AssetJavaScript`.

### Inline

Inline, if true, will output the contents from an embedded file (Path) or the contents (Content) after doing a find/replace (Replace).

### SkipExistCheck

SkipExistCheck, if true, will not try to check if a file exists, typically because it's managed by a route.

### Path

Path is the relative path to the embedded file (`/css/bear.css`) or the full path to the external asset (`https://example.com/global.css`).

### Content

Content is a raw string that will inject into the HTML. `Path` must be empty for content to be used and content is only used when `Inline` is true.

### Replace

Replace is a list of find and replace strings that are applied to the `Path` or `Content` when `Inline` is true. You can see an example [here](/docs/plugins/assets#inline-javascript).

## Usage Examples

For all the examples below, they would be added to the `Assets()` function:

```go
// Assets returns a list of assets and an embedded filesystem.
func (p *Plugin) Assets() ([]ambient.Asset, ambient.FileSystemReader) {
	arr := make([]ambient.Asset, 0)
	// All the code samples below would go here.
	return arr, &assets
}
```

### Title Tag

The example below injects a `<title>` tag to HTML `<head>` section to display both the page title and the site title.

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

The example below injects a description meta tag into the `<head>` section.

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

The example below injects an HTML template into the `<header>` section.

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

The example below injects a link tag into the head section.

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
func (p *Plugin) Assets() ([]ambient.Asset, ambient.FileSystemReader) {
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
func (p *Plugin) Assets() ([]ambient.Asset, ambient.FileSystemReader) {
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

### Inline JavaScript

For non-HTML files, you may need to do a find and replace to inject variables in the file. In this example, the JavaScript file content is injected into the body of the HTML template and then the placeholders are replaced with variables.

```go
//go:embed css/*.css js/*.js
var assets embed.FS

// Assets returns a list of assets and an embedded filesystem.
func (p *Plugin) Assets() ([]ambient.Asset, ambient.FileSystemReader) {
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

### Div Element

In this example, a `<div>` element is injected into the bottom of the `<main>` section of the HTML template.

```go
// Assets returns a list of assets and an embedded filesystem.
func (p *Plugin) Assets() ([]ambient.Asset, ambient.FileSystemReader) {
	return []ambient.Asset{
		{
			Filetype: ambient.AssetGeneric,
			Location: ambient.LocationMain,
			LayoutOnly: []ambient.LayoutType{
				ambient.LayoutPost,
			},
			TagName:    "div",
			ClosingTag: true,
			Attributes: []ambient.Attribute{
				{
					Name:  "id",
					Value: "disqus_thread",
				},
			},
		},
	}, nil
}
```

Sample result:

```html
<!DOCTYPE html>
<html lang="en">
<head>
</head>
<body>
    <header>
    </header>
    <main>
		<div id="disqus_thread"></div>
    </main>
    <footer>
    </footer>
</body>
</html>
```