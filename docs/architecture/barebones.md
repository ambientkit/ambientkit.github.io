# Barebones App

Follow these steps to create a barebones Ambient application. These steps are intentionally verbose to help with the understanding.

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

Create the site file where the application configuration will be stored.

```bash
echo '{}'> storage/site.bin
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
	ambientApp, logger, err := ambient.NewApp("myapp", "1.0",
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
		TrustedPlugins: map[string]bool{},
		Plugins:        []ambient.Plugin{},
		Middleware: []ambient.MiddlewarePlugin{
			// Middleware - executes bottom to top.
			sessionManager, // Session manager middleware.
		},
	}
}
```

Download the dependencies - you can remove the last argument if running less than Go 1.17.

```bash
go mod tidy -compat=1.17
```

Start the application. `AMB_DOTENV=true` tells the application to load the session key from the `.env` file.

```bash
AMB_DOTENV=true go run main.go
```

You should be able to access the application at: http://localhost:8080

The application will output this message because there are no pages yet: `404 Darn, we cannot find the page.`