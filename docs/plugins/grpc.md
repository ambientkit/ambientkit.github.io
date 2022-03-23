# gRPC Compiled Plugins

Ambient also supports interacting with plugins over gRPC using the [HashiCorp plugin system](https://github.com/hashicorp/go-plugin). This allows you to compile plugins and then send data back and forth just like a standard plugin. A few reasons why you may choose to go this route:

- to dynamically load and unload plugins without restarting the application
- to write a plugin for Ambient in another language other than Go (it will require some non-trivial work to re-implement the plugin API)
- to isolate your application so plugins cannot affect your core application if they panic or leak memory
- to sell a plugin for Ambient, but don't want to distribute the source code

## Plugin 

To enable gRPC for your plugin, simply add a file to your plugin directory (`cmd/plugin/main.go`) and then update the information below with your plugin information. You must then build the binary by running: `go build`.

```go
package main

import (
	"os"

	"github.com/ambientkit/ambient/pkg/grpcp"
	"github.com/username/yourplugin"
	"github.com/hashicorp/go-hclog"
	"github.com/hashicorp/go-plugin"
)

func main() {
	plugin.Serve(&plugin.ServeConfig{
		HandshakeConfig: grpcp.Handshake,
		Plugins: map[string]plugin.Plugin{
			"yourplugin": &grpcp.GenericPlugin{Impl: yourplugin.New()},
		},
		Logger: hclog.New(&hclog.LoggerOptions{
			Level:      hclog.Debug,
			Output:     os.Stderr,
			JSONFormat: true,
		}),
		GRPCServer: plugin.DefaultGRPCServer,
	})
}

```

## Ambient Usage 

To reference the gRPC plugin in Ambient, add the plugin name and the path to the binary to the `Plugins` array. Currently, gRPC plugins can only be used for generic and middleware plugins, they can't be used for the other core plugins.

```go
plugins := &ambient.PluginLoader{
	// Core plugins are implicitly trusted.
	Router:         awayrouter.New(h),
	TemplateEngine: htmlengine.New(),
	SessionManager: sessPlugin,
	// Trusted plugins are those that are typically needed to boot so they
	// will be enabled and given full access.
	TrustedPlugins: trusted,
	Plugins: []ambient.Plugin{
		ambient.NewGRPCPlugin("yourplugin", "./yourplugin/cmd/plugin/yourplugin"),
	},
	Middleware: []ambient.MiddlewarePlugin{
		// Middleware - executes bottom to top.
		ambient.NewGRPCPlugin("yourmwplugin", "./yourmwplugin/cmd/plugin/yourmwplugin"),
		sessPlugin,
	},
}
```