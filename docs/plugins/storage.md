# Storage System

A [storage system](https://github.com/ambientkit/plugin/blob/main/storage/gcpbucketstorage/gcpbucketstorage.go) stores the web app settings (title, content, scheme, URL, etc.) as well as plugin status (enabled/disabled), settings, and permissions granted.

The storage system plugin must include the MVP code as well as the `Storage()` function.

```go
// Storage returns data and session storage.
func (p *Plugin) Storage(logger ambient.Logger) (ambient.DataStorer, ambient.SessionStorer, error) {
	// Load the bucket from the environment variable.
	bucket := os.Getenv(BucketEnv)
	if len(bucket) == 0 {
		return nil, nil, fmt.Errorf("%v: environment variable, %v, is missing", p.PluginName(), BucketEnv)
	}

	ds := store.NewGCPStorage(bucket, p.sitePath)
	ss := store.NewGCPStorage(bucket, p.sessionPath)

	return ds, ss, nil
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