# Settings

Every plugin is able to have their own settings that are editable through the Plugin Manager. The `Settings()` function returns a list of settings that can be edited from the pluginmanager UI.

A [plugin](https://github.com/ambientkit/plugin/blob/main/generic/simplelogin/simplelogin.go) that has configurable settings should use MVP code as well as the `Settings()` function.

```go
// Settings returns a list of user settable fields.
func (p *Plugin) Settings() []ambient.Setting {
	return []ambient.Setting{
		{
			Name:    Username,
			Default: "admin",
		},
		{
			Name:    Password,
			Default: p.passwordHash,
			Type:    ambient.InputPassword,
			Hide:    true,
		},
		{
			Name: MFAKey,
			Type: ambient.InputPassword,
		},
		{
			Name:    LoginURL,
			Default: "admin",
			Hide:    true,
		},
		{
			Name: Author,
		},
		{
			Name: Subtitle,
			Hide: true,
		},
		{
			Name: Description,
			Type: ambient.Textarea,
		},
		{
			Name: Footer,
			Type: ambient.Textarea,
			Hide: true,
		},
		{
			Name: AllowHTMLinMarkdown,
			Type: ambient.Checkbox,
		},
	}
}
```

You can see all of the available setting types in the [model_setting.go](https://github.com/ambientkit/ambient/blob/main/model_setting.go) file.