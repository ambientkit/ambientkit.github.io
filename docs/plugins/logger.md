# Logger

A [logger](https://github.com/ambientkit/plugin/blob/main/logger/logruslogger/logruslogger.go) outputs messages at different levels: fatal, error, warn, info, and debug. It's helpful when you can provide more information during troubleshooting by changing the log level because you can get to the bottom of issues quicker. The logger is used by the Ambient internal system and is made available to plugins as well.

A logger plugin must include, at a minimum, the code below with the `Logger()` function. Notice the `*ambient.PluginBase` object is not included in the struct because this plugin type does need it.

```go
// Package mvp provides a template for building a plugin for Ambient apps.
package mvp

import (
	"github.com/ambientkit/ambient"
)

// Plugin represents an Ambient plugin.
type Plugin struct{}

// New returns a new mvp plugin.
func New() *Plugin {
	return &Plugin{}
}

// PluginName returns the plugin name.
func (p *Plugin) PluginName() string {
	return "mvp"
}

// PluginVersion returns the plugin version.
func (p *Plugin) PluginVersion() string {
	return "1.0.0"
}

// Logger returns a logger.
func (p *Plugin) Logger(appName string, appVersion string) (ambient.AppLogger, error) {
	// Add your code here.
	return nil, nil
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
	Named(name string) AppLogger
	Name() string
}

// Logger represents the log service for the plugins.
type Logger interface {
	Log(level LogLevel, format string, v ...interface{})
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

## Test Suite

You can also run the logger test suite against your plugin to make sure it meets all the requirements.

```go title="logger_test.go"
package logger_test

import (
	"bufio"
	"testing"

	"github.com/ambientkit/ambient"
	"github.com/ambientkit/plugin/pkg/loggertestsuite"
)

// Run the standard logger test suite.
func TestMain(t *testing.T) {
	rt := loggertestsuite.New()
	rt.Run(t, func(writer *bufio.Writer) ambient.AppLogger {
		// Replace with your own logger.
		return logger.NewLogger("app", "1.0", writer)
	})
}
```
