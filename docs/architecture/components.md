# Components

Let's breakdown an Ambient web app. It needs a few things:

- environment variables
- logger
- storage system
- router
- template engine
- session manager

You'll see a more complete code sample on the [Barebones App](/docs/architecture/barebones) page, but this gives you an idea of how to populate the `PluginLoader{}` which is what an Ambient app requires along with the app name, app version, logger, and storage system:

```go
import (
	"log"
	"os"

	"github.com/ambientkit/ambient"
	"github.com/ambientkit/plugin/router/awayrouter"
	"github.com/ambientkit/plugin/sessionmanager/scssession"
	"github.com/ambientkit/plugin/templateengine/htmlengine"
)

// Plugins defines the plugins.
func Plugins() *ambient.PluginLoader {
	// Get the environment variables.
	secretKey := os.Getenv("AMB_SESSION_KEY")
	if len(secretKey) == 0 {
		log.Fatalf("app: environment variable missing: %v\n", "AMB_SESSION_KEY")
	}

	// Define the session manager so it can be used as a core plugin and
	// middleware.
	sessionManager := scssession.New(secretKey)

	return &ambient.PluginLoader{
		// Core plugins are implicitly trusted.
		Router:         awayrouter.New(nil),
		TemplateEngine: htmlengine.New(),
		SessionManager: sessionManager,
		// Trusted plugins are those that are typically needed to boot so they
		// will be enabled and given full access.
		TrustedPlugins: map[string]bool{},
		Plugins:        []ambient.Plugin{},
		Middleware: []ambient.MiddlewarePlugin{
			// Middleware - executes top to bottom.
			sessionManager, // Session manager middleware.
		},
	}
}
```