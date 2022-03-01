# Storage System

A [storage system](https://github.com/ambientkit/plugin/blob/main/storage/gcpbucketstorage/gcpbucketstorage.go) stores the app settings (title, content, scheme, URL, etc.) as well as plugin status (enabled/disabled), settings, and permissions granted.

A storage system plugin must include, at a minimum, the code below with the `Storage()` function. Notice the `*ambient.PluginBase` object is not included in the struct because this plugin type does need it.

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

// Storage returns data and session storage.
func (p *Plugin) Storage(logger ambient.Logger) (ambient.DataStorer, ambient.SessionStorer, error) {
	// Add your code here.
	return nil, nil, nil
}
```

The function should return objects that satisfy the [`DataStorer`](https://github.com/ambientkit/ambient/blob/main/ambient_datastorer.go) interface and the [`SessionStorer`](https://github.com/ambientkit/ambient/blob/main/ambient_sessionstorer.go) interface. Notice you don't have to worry about the type of data. This makes it easy to read or write to any medium.

```go title="ambient_datastorer.go"
// DataStorer reads and writes data to an object.
type DataStorer interface {
	Save([]byte) error
	Load() ([]byte, error)
}
```

```go title="ambient_sessionstorer.go"
// SessionStorer reads and writes data to an object.
type SessionStorer interface {
	Save([]byte) error
	Load() ([]byte, error)
}
```