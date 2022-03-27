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

## Limitations

There are a few limitations when using gRPC plugins because of the nature of the communication. You will need to keep these use cases in mind:

- **storing values in request context**: if you are relying on `context` from `http.Request` in your middleware and routes to store and read values, they won't behave as you expect because there is no way to serialize context values. You can't iterate over them so there isn't an easy way to get those values out to send them back and forth.
- **using non-primitives when passing data into templates**: if you try to pass in a template.HTML via vars, it will be converted to string after serialization/deserialization via gRPC since gRPC only supports primitives. The suggested approach is to use a funcMap instead that returns escaped HTML (`template.HTML`). [Reference](https://github.com/golang/protobuf/issues/1302).
- **passing data into templates that has JSON tags**: if you don't use JSON tags and then use capital letters, gRPC will respect the capitalization. If you do use JSON tags, then gRPC will use the JSON tag as the name during serialization/deserialization. It's recommended to leave the tags off.

If you want to take a closer look at the definitions, all of the data that is transferred between the server and the plugins is documented in these [`.proto` files](https://github.com/ambientkit/ambient/tree/main/pkg/grpcp/protobuf).
