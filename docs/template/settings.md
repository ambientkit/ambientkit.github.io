# App Settings

In the `main.go` file, you can modify your log level with `SetLogLevel()`:

```go title="main.go"
ambientApp, err := ambientapp.NewApp(...)
ambientApp.SetLogLevel(ambient.LogLevelDebug)
ambientApp.SetLogLevel(ambient.LogLevelInfo)
ambientApp.SetLogLevel(ambient.LogLevelError)
ambientApp.SetLogLevel(ambient.LogLevelFatal)
```

You can enable `span` tags around HTML elements to determine which content is loaded from which plugins with `SetDebugTemplates()`:

```go title="main.go"
ambientApp, err := ambientapp.NewApp(...)
ambientApp.SetDebugTemplates(true)
```

You can disable template escaping with `SetEscapeTemplates()`:

```go title="main.go"
ambientApp, err := ambientapp.NewApp(...)
ambientApp.SetEscapeTemplates(false)
```