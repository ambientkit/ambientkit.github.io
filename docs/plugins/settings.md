# Settings

Every plugin is able to have their own settings that are stored in the app configuration. If `Hide` is set to false or unset, then the settings are editable through the Plugin Manager.

A plugin that needs settings should use MVP code as well as the `Settings()` function. The `Settings()` function returns a list of settings that are specific to the plugin.

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
## Types of Settings

You can see all of the available setting types in the [model_setting.go](https://github.com/ambientkit/ambient/blob/main/model_setting.go) file.

### Fields

These fields are available when adding a setting. Only `Name` is required.

- **Name** - name of the setting that is displayed as a label to the user
- **Type** - the type of input that the user can interact with: `input`, `password`, `textarea`, or `checkbox`; defaults to: `input`
- **Description** - description displayed to the user to guide them; it supports both text and a single URL
- **Hide** - if true, will not allow users to edit the field from the Settings page; the plugin can use this field to store it's own internal data or provide another way for the user to configure the setting if it needs custom validation, needs to be in a different format, etc.
- **Default** - the default value that will load for the setting if it's blank

It's recommended to set each name as a constant variable since they shouldn't change. If a name does change between plugin versions, the user will have to update the setting value themselves.