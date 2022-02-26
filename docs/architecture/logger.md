# Logger

Developing a logging strategy is a good practice when you start building an app because it will help you develop and troubleshoot more quickly. Ambient supports the following log levels in plugins:
- **Debug** - detailed tracing for use by app developers. Examples: when a function is called, detailed error messages, loop logic, etc.
- **Info** - informational messages for end users and system administrators. Examples: enabling a plugin, starting web server, etc.
- **Warn** - potentially harmful situation for end users and system administrators. Examples: plugin denied access because it's missing a grant, etc.
- **Error** - error occurred that will affect program execution. Examples: plugin not found, cannot enable plugin, etc.

There is also a `Fatal` log level that is available to only the core Ambient app because a plugin should not have the ability to terminate the app.

A logger should be enabled as early as possible so all logs are routed to the right system. Typically, the loading of environment variables occurs before the logger is set up so it's ok to use the built-in log package for those early exists. The Ambient app does return the logger once the app is created.

```go title="main.go"
import (
	"log"

	"github.com/ambientkit/ambient"
	"github.com/ambientkit/ambient-template/cmd/myapp/app"
	"github.com/ambientkit/plugin/logger/zaplogger"
	"github.com/ambientkit/plugin/storage/localstorage"
)

func main() {
	// ...
	// Create the ambient app.
	plugins := app.Plugins()
	ambientApp, logger, err := ambient.NewApp("myapp", "1.0",
		zaplogger.New(),
		ambient.StoragePluginGroup{
			Storage: localstorage.New("storage/site.bin", "storage/session.bin"),
		},
		plugins)
	if err != nil {
		log.Fatalln(err.Error())
	}
	// ...
}
```

There are two loggers available in the library:

- [logruslogger](https://github.com/ambientkit/plugin/tree/main/logger/logruslogger) - logging using [`sirupsen/logrus`](https://github.com/sirupsen/logrus)
- [zaplogger](https://github.com/ambientkit/plugin/tree/main/logger/zaplogger) - logging using [`uber-go/zap`](https://github.com/uber-go/zap)