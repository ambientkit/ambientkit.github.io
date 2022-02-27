# Grant Requests

The `GrantRequests()` function returns a list of permissions required by the plugin. The admin of the app must enable each of the permissions.

A [plugin](https://github.com/ambientkit/plugin/blob/main/generic/prism/prism.go) that needs to make changes to the app or interact with its data must include the MVP code as well as the `GrantRequests()` function.

Below is an example of the [bearblog](https://github.com/ambientkit/plugin/blob/main/generic/bearblog/bearblog.go) plugin and all the permissions it requests in order to run properly:

```go title="bearblog.go"
// GrantRequests returns a list of grants requested by the plugin.
func (p *Plugin) GrantRequests() []ambient.GrantRequest {
	return []ambient.GrantRequest{
		{Grant: ambient.GrantUserAuthenticatedRead, Description: "Show different menus to authenticated vs unauthenticated users."},
		{Grant: ambient.GrantUserAuthenticatedWrite, Description: "Access to login and logout the user."},
		{Grant: ambient.GrantUserPersistWrite, Description: "Access to set session as persistent."},
		{Grant: ambient.GrantPluginSettingRead, Description: "Read own plugin settings."},
		{Grant: ambient.GrantPluginSettingWrite, Description: "Write own plugin settings."},
		{Grant: ambient.GrantSitePostRead, Description: "Read all site posts."},
		{Grant: ambient.GrantSitePostWrite, Description: "Create and edit site posts."},
		{Grant: ambient.GrantSiteSchemeRead, Description: "Read site scheme."},
		{Grant: ambient.GrantSiteSchemeWrite, Description: "Update the site scheme."},
		{Grant: ambient.GrantSiteURLRead, Description: "Read the site URL."},
		{Grant: ambient.GrantSiteURLWrite, Description: "Update the site URL."},
		{Grant: ambient.GrantSiteTitleRead, Description: "Read the site title."},
		{Grant: ambient.GrantSiteTitleWrite, Description: "Update the site title."},
		{Grant: ambient.GrantSiteContentRead, Description: "Read home page content."},
		{Grant: ambient.GrantSiteContentWrite, Description: "Update home page content."},
		{Grant: ambient.GrantSiteAssetWrite, Description: "Access to write blog meta tags to the header and add a nav and footer."},
		{Grant: ambient.GrantSiteFuncMapWrite, Description: "Access to create global FuncMaps for templates."},
		{Grant: ambient.GrantRouterRouteWrite, Description: "Access to create routes for editing the blog posts."},
	}
}
```

The function returns a `[]GrantRequest` object. You can see the full list of permissions in [grant.go](https://github.com/ambientkit/ambient/blob/main/grant.go). Even trusted plugins need to request permissions.

## Denied Message

When a plugin does not have a grant request approved, you will see a warning message like this:

```bash
WARN    myapp v1.0      pluginsystem: denied plugin (securedashboard) access to the data item, requires grant: router.middleware:write
```

## Trusted Plugins

The types of plugins that don't need to request grants since they are required to boot the application are:

- logger
- storage system
- router
- template engine
- session manager