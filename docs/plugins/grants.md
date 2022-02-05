# Grant Requests

The `GrantRequests()` function returns a list of permissions required by the plugin. The admin of the app must enable each of the permissions.

A [plugin](https://github.com/ambientkit/plugin/blob/main/generic/prism/prism.go) that needs to make changes to the app or interact with its data must include the MVP code as well as the `GrantRequests()` function.

```go
// GrantRequests returns a list of grants requested by the plugin.
func (p *Plugin) GrantRequests() []ambient.GrantRequest {
	return []ambient.GrantRequest{
		{Grant: ambient.GrantSiteAssetWrite, Description: "Access to add stylesheets and javascript to each page."},
		{Grant: ambient.GrantRouterRouteWrite, Description: "Access to create routes for accessing stylesheets."},
		{Grant: ambient.GrantPluginSettingRead, Description: "Read own plugin settings."},
	}
}
```

The function returns a `[]GrantRequest` object. You can see the full list of permissions in [model_grant.go](https://github.com/ambientkit/ambient/blob/main/model_grant.go).