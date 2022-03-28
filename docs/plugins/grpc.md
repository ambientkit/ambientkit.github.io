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
		// Middleware - executes top to bottom.
		sessPlugin,
		ambient.NewGRPCPlugin("yourmwplugin", "./yourmwplugin/cmd/plugin/yourmwplugin"),
	},
}
```

## Limitations

There are a few limitations when using gRPC plugins because of the nature of the communication. You will need to keep these use cases in mind:

- **storing values in request context**: if you are relying on `context` from `http.Request` in your middleware and routes to store and read values, it will be restricted to just your plugin. There is no way to serialize context values because you can't iterate over them so they won't pass between the server and plugin. The context is stored in a map from either the middleware or routes and then it's accessible by routes and funcmaps, respectively.
- **using non-primitives when passing data into templates**: if you try to pass in a template.HTML via vars, it will be converted to string after serialization/deserialization via gRPC since gRPC only supports primitives. The suggested approach is to use a FuncMap instead that returns escaped HTML (`template.HTML`). [Reference](https://github.com/golang/protobuf/issues/1302).
- **passing data into templates will be run through marshal/unmarshal in JSON**: if you don't use JSON tags and then use capital letters, gRPC will respect the capitalization. If you do use JSON tags, then gRPC will use the JSON tag as the name during serialization/deserialization. We force this even when using standard plugins so there is consistency between standard plugins and gRPC plugins. You can read more about here in the [Template Engine](/docs/architecture/template-engine) section.

If you want to take a closer look at the definitions, all of the data that is transferred between the server and the plugins is documented in these [`.proto` files](https://github.com/ambientkit/ambient/tree/main/pkg/grpcp/protobuf).

## Testing

There is a test suite that is shared between standard and gRPC plugins available in the [plugin repository](https://github.com/ambientkit/plugin/blob/main/pkg/grpctestutil/grpcp_test.go). It's separate from the `ambient` repository because it requires real plugins to do the testing so to limit dependencies back and forth, we separated them for now. If you find there are inconsistencies between when a plugin is accessed using the standard method vs the gRPC method, please [let us know](https://github.com/ambientkit/ambient/issues).