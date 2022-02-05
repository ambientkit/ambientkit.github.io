# Minimum Viable Plugin (MVP)

To create the smallest package that can be used as a plugin, you can paste this code into a new file like this: `plugin/mvp/mvp.go`:

```go
// Package mvp provides a template for building a plugin for Ambient apps.
package mvp

import (
	"github.com/ambientkit/ambient"
)

// Plugin represents an Ambient plugin.
type Plugin struct {
	// PluginBase is a struct that provides empty functions to satisfy the
	// `Plugin` interface in ambient.go. This allows plugins to work with newer
	// versions of the interface as long as functions defined below still match
	// the interface.
	*ambient.PluginBase
	// Toolkit is an object that should be assigned when the plugin is enabled
	// so the plugin can interact with the Logger, Router, Renderer, and
	// SecureSite. If the plugin tries to interact with the toolkit before the
	// plugin is enabled, it will be nil.
	*ambient.Toolkit
}

// New returns a new mvp plugin. This should be modified to include any values
// or objects that need to be passed in before it's enabled. Any example would
// be a password hash or a flag for debug mode.
func New() *Plugin {
	return &Plugin{
		PluginBase: &ambient.PluginBase{},
	}
}

// PluginName returns the plugin name. This name should match the package name.
// PluginName should be globally unique. Only lowercase letters, numbers,
// and underscores are permitted. Must start with with a letter.
func (p *Plugin) PluginName() string {
	return "mvp"
}

// PluginVersion returns the plugin version. This version must follow
// https://semver.org/.
func (p *Plugin) PluginVersion() string {
	return "1.0.0"
}

// Enable accepts the toolkit and stores it for use when enabled.
func (p *Plugin) Enable(toolkit *ambient.Toolkit) error {
	p.Toolkit = toolkit
	return nil
}
```

To add the plugin to your Ambient app, you should add `mvp.New(),` to the `plugin.go` file, under the `Plugins` section array:

```go
// Plugins defines the plugins.
func Plugins() *ambient.PluginLoader {
	// Get the environment variables.
	secretKey := os.Getenv("AMB_SESSION_KEY")
	if len(secretKey) == 0 {
		log.Fatalf("app: environment variable missing: %v\n", "AMB_SESSION_KEY")
	}

	passwordHash := os.Getenv("AMB_PASSWORD_HASH")
	if len(passwordHash) == 0 {
		log.Fatalf("app: environment variable is missing: %v\n", "AMB_PASSWORD_HASH")
	}

	// Define the session manager so it can be used as a core plugin and
	// middleware.
	sessionManager := scssession.New(secretKey)

	return &ambient.PluginLoader{
		// Core plugins are implicitly trusted.
		Router:         awayrouter.New(nil),
		TemplateEngine: htmlengine.New(),
		SessionManager: sessionManager,
		// Trusted plugins are required to boot the app so they will be
		// given full access.
		TrustedPlugins: map[string]bool{
			"pluginmanager": true, // Page to manage plugins.
			"simplelogin":   true, // Simple login page.
			"bearcss":       true, // Bear Blog styling.
		},
		Plugins: []ambient.Plugin{
			pluginmanager.New(),           // Page to manage plugins.
			simplelogin.New(passwordHash), // Simple login page.
			bearcss.New(),                 // Bear Blog styling.
			mvp.New(),                     // Your new plugin.
		},
		Middleware: []ambient.MiddlewarePlugin{
			// Middleware - executes bottom to top.
			sessionManager,   // Session manager middleware.
			logrequest.New(), // Log every request as INFO.
		},
	}
}
```

When you start the app, the plugin will not be enabled. You must login and then navigate to: http://localhost:8080/dashboard/plugins. Put a checkmark next to the plugin and then click the **Save** button at the bottom of the page. Your plugin is now enabled! It doesn't do anything so don't get too excited, but you've got the scaffolding of a plugin so on to the next step where you choose the type of plugin function to use.