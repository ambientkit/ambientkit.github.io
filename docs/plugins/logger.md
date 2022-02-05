# Logger

A [logger](https://github.com/ambientkit/plugin/blob/main/logger/logruslogger/logruslogger.go) outputs messages at different levels: fatal, error, warn, info, and debug. It's helpful when you can provide more information during troubleshooting by changing the log level because you can get to the bottom of issues quicker. The logger is used by the Ambient internal system and is made available to plugins as well.

The logger plugin must include the MVP code as well as the `Logger()` function.

```go
// Logger returns a logger.
func (p *Plugin) Logger(appName string, appVersion string) (ambient.AppLogger, error) {
	// Create the logger.
	p.log = NewLogger(appName, appVersion)
	return p.log, nil
}
```

The function should return an object that satisfies the [`AppLogger`](https://github.com/ambientkit/ambient/blob/main/ambient_logger.go) interface. You should probably also add in an option to output in either human readable format (tabs) or JSON to make it easy to work with in development or in production.

```go title="ambient_logger.go"
package ambient

// AppLogger represents the log service for the app.
type AppLogger interface {
	Logger

	// Fatal is reserved for the app level only.
	Fatal(format string, v ...interface{})
	SetLogLevel(level LogLevel)
}

// Logger represents the log service for the plugins.
type Logger interface {
	Debug(format string, v ...interface{})
	Info(format string, v ...interface{})
	Warn(format string, v ...interface{})
	Error(format string, v ...interface{})
}

// LogLevel is a log level.
type LogLevel int

const (
	// LogLevelDebug is for debugging output. It's very verbose.
	LogLevelDebug LogLevel = iota
	// LogLevelInfo is for informational messages. It shows messages on services
	// starting, stopping, and users logging in.
	LogLevelInfo
	// LogLevelWarn is for behavior that may need to be fixed. It shows
	// permission warnings for plugins.
	LogLevelWarn
	// LogLevelError is for messages when something is wrong with the
	// app and it needs to be corrected.
	LogLevelError
	// LogLevelFatal is for messages when the app cannot continue and
	// will halt.
	LogLevelFatal
)
```