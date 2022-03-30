# Permission System (Grants)

Granular read and write access must be explicitly requested by a plugin through a [grant request](/docs/plugins/grants) and then explicitly approved by the administrator of the app in order for a plugin to get the permission required to make changes to the app configuration. The full list of grants available is [here](https://github.com/ambientkit/ambient/blob/main/grant.go).

Plugins are only allowed to interact with the Ambient app when:

1. administrator enables a plugin
2. plugin requests a grant
3. administrator approves the grant request

## Trusted Plugins

When plugins are trusted, they will be enabled and all of their grants will be approved automatically. You also cannot disable the plugins when they are trusted.

The core plugins (logger, storage engine, router, template engine, and session manager) do not need to be added to the trusted plugin list because the app cannot function without them so they are trusted implicitly.

You can see an example below of how to add your plugin as well as mark it as trusted.

```go
import (
	"log"
	"os"

	"github.com/ambientkit/ambient"
	"github.com/yourname/mvp"
)

// Plugins defines the plugins.
func Plugins() *ambient.PluginLoader {
	return &ambient.PluginLoader{
		// Core plugins are implicitly trusted.
		Router:         nil,
		TemplateEngine: nil,
		SessionManager: nil,
		// Trusted plugins are those that are typically needed to boot so they
		// will be enabled and given full access.
		TrustedPlugins: map[string]bool{
			"mvp":   true, // Your plugin is trusted here.
		},
		Plugins: []ambient.Plugin{
			mvp.New(), // Your plugin is included here.
		},
		Middleware: []ambient.MiddlewarePlugin{},
	}
}
```