# Assets

The `Assets()` function returns a list of assets that can modify the template output. They can be used to link to local resources like stylesheets and javascript files or they can link to external resources. You can also define the header and footer for template output. Assets support templating from a string or from a template. You can even add HTML tags to the template output. They are pretty powerful and support a bunch of use cases.

A [plugin](https://github.com/ambientkit/plugin/blob/main/generic/simplelogin/simplelogin.go) that has assets should use MVP code as well as the `Assets()` function.

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