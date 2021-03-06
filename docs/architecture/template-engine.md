# Template Engine

The template engine is what parses, modifies, and organizes HTML content before it's sent back to the requesting client. It provides a lot of the extensibility that makes the Ambient plugin architecture possible. If you are returning JSON or XML, you won't need to use the template engine.

The template engine plugin, [htmlengine](https://github.com/ambientkit/plugin/tree/main/templateengine/htmlengine), uses the Go standard library, [`html/template`](https://pkg.go.dev/html/template), and provides a few nice features:

- template buffering through [`oxtoacart/bpool`](https://github.com/oxtoacart/bpool) - this allows template errors to be caught before returning them to the client
- isolated template parsing - parses plugin template separately so they don't conflict or have access to other plugin information
- embedded filesystem using [`embed.FS`](https://pkg.go.dev/embed) - all plugins that serve content can have files embedded for single binary web deployments
- template escaping by default
- template debugging that can be enabled to show which plugins have modified which blocks of HTML
- templates will throw an error if they are [missing keys](https://pkg.go.dev/text/template#Template.Option) - you can disable by passing in a var like this: `vars["amb.option"]="missingkey=default"`
- template vars will be marshalled to JSON and then back to a `map[string]interface{}` to ensure there are consistencies between standard plugins and gRPC plugins - this affects non-primitive types like `time.Time` because it will be stored as a string so if you're modifying using FuncMaps, you need to accept a string, then do a parse like this: `time.Parse(time.RFC3339, t)`

The template engine also accepts an `AssetInjector` from Ambient which is extremely powerful and gives plugins the ability to:

- add routes to serve static files like CSS and JavaScript from the embedded filesystem
- embed CSS and JavaScript
- inject HTML tags or elements to the `head`, `header`, `main`, `body`, and `footer` sections of a `Page` or `Post`
- inject HTML templates or strings into a `Page` or `Post`
- inject plugin `Settings` into strings or HTML templates using [`funcmaps`](/docs/plugins/funcmaps)

You can see examples of injecting assets [here](/docs/plugins/assets).