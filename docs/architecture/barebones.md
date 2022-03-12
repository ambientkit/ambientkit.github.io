# Barebones App

Follow these steps to create a barebones Ambient app. These steps are intentionally verbose to help with the understanding.

Create a few folders.

```bash
mkdir -p myapp/storage
```

Change to the `myapp` folder.

```bash
cd myapp
```

Initialize the Go module. You should swap out username for your GitHub username.

```bash
go mod init github.com/username/ambapp
```

Create the site file where the app configuration will be stored.

```bash
touch storage/site.bin
```

Create the session file where the user sessions will be stored.

```bash
touch storage/session.bin
```

Create an environment variable file to hold the session key for the Session Manager.

```bash
touch .env
```

In the `.env` file, paste in the line starting with `AMB_SESSION_KEY` from the output of this program (click `Run`): https://go.dev/play/p/PdQcNiw4WFz

Create a main.go file.

```go title="main.go"
package main

import (
	"log"
	"os"

	"github.com/ambientkit/ambient"
	"github.com/ambientkit/ambient/pkg/ambientapp"
	"github.com/ambientkit/ambient/pkg/envdetect"
	"github.com/ambientkit/plugin/logger/zaplogger"
	"github.com/ambientkit/plugin/router/awayrouter"
	"github.com/ambientkit/plugin/sessionmanager/scssession"
	"github.com/ambientkit/plugin/storage/localstorage"
	"github.com/ambientkit/plugin/templateengine/htmlengine"
	"github.com/joho/godotenv"
)

func main() {
	// Load the .env file if AMB_DOTENV=true.
	if envdetect.LoadDotEnv() {
		err := godotenv.Load()
		if err != nil {
			log.Fatalf("app: error loading .env file: %v\n", err.Error())
		}
	}

	// Create the ambient app.
	plugins := Plugins()
	ambientApp, logger, err := ambientapp.NewApp("myapp", "1.0",
		zaplogger.New(),
		ambient.StoragePluginGroup{
			Storage: localstorage.New("storage/site.bin", "storage/session.bin"),
		},
		plugins)
	if err != nil {
		log.Fatalln(err.Error())
	}

	// Load the plugins and return the handler.
	mux, err := ambientApp.Handler()
	if err != nil {
		logger.Fatal(err.Error())
	}

	// Start the web listener.
	ambientApp.ListenAndServe(mux)
}

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
		TrustedPlugins: map[string]bool{
			"hello": true,
		},
		Plugins: []ambient.Plugin{
			NewHelloPlugin(),
		},
		Middleware: []ambient.MiddlewarePlugin{
			// Middleware - executes bottom to top.
			sessionManager, // Session manager middleware.
		},
	}
}
```

Create a hello.go file.

```go title="hello.go"
package main

import (
	"net/http"

	"github.com/ambientkit/ambient"
)

// Plugin represents an Ambient plugin.
type Plugin struct {
	*ambient.PluginBase
}

// NewHelloPlugin returns a new hello plugin.
func NewHelloPlugin() *Plugin {
	return &Plugin{
		PluginBase: &ambient.PluginBase{},
	}
}

// PluginName returns the plugin name.
func (p *Plugin) PluginName() string {
	return "hello"
}

// PluginVersion returns the plugin version.
func (p *Plugin) PluginVersion() string {
	return "1.0.0"
}

// GrantRequests returns a list of grants requested by the plugin.
func (p *Plugin) GrantRequests() []ambient.GrantRequest {
	return []ambient.GrantRequest{
		{Grant: ambient.GrantRouterRouteWrite, Description: "Access to create default route."},
	}
}

// Routes sets routes for the plugin.
func (p *Plugin) Routes() {
	p.Mux.Get("/", func(w http.ResponseWriter, r *http.Request) (err error) {
		return p.Toolkit.JSON(w, http.StatusOK, map[string]interface{}{
			"message": "hello world!",
		})
	})
}
```

Download the dependencies - you can remove the last argument if running less than Go 1.17.

```bash
go mod tidy -compat=1.17
```

Start the app. `AMB_DOTENV=true` tells the app to load the session key from the `.env` file.

```bash
AMB_DOTENV=true go run .
```

You should be able to access the app at: http://localhost:8080

Your browser will output this message if everything was successful: `{"message":"hello world!"}`