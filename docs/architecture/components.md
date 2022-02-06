# Components

Let's breakdown an Ambient web app. It needs a few things:

- environment variables
- logger
- storage system
- router
- session manager

## Environment Variables

Environment variables are one way to get information into the application at runtime. At a minimum, Ambient (more precisely the Session Manager) needs to have a session key so it can encrypt user sessions. Ambient is not opinioned about how you load the environment variables so you can load them from anywhere. We use the [`github.com/joho/godotenv`](https://github.com/joho/godotenv) package for reading from `.env` files.

You can also use the `envdetect.LoadDotEnv()` call to determine if `AMB_DOTENV=true` so you have control over when the `.env` file is loaded.

```go title="main.go"
import (
	"log"

	"github.com/ambientkit/ambient/pkg/envdetect"
	"github.com/joho/godotenv"
)

func main() {
	// Load the .env file if AMB_DOTENV=true.
	if envdetect.LoadDotEnv() {
		err := godotenv.Load()
		if err != nil {
			log.Fatalf("app: error loading .env file: %v\n", err.Error())
		}
	}
	// ...
}
```

## Logger

Developing a logging strategy is a good practice when you start building an application because it will help you develop and troubleshoot more quickly. Ambient supports the following log levels in plugins:
- Debug
- Info
- Warn
- Error

There is also a `Fatal` log level that is available to only the core Ambient application because a plugin should not have the ability to terminate the application.

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

## Storage System

Ambient is a dynamic application that allows you make changes to it while it is running like enabling/disabling plugins, changing site information, etc. Those changes are stored in a JSON configuration object and then written to a storage system so it's persistent. Since there is a storage system, multiple instances of the application can run at the same time and access the same storage system to keep them consistent. This allows Ambient to support container and serverless architectures with ease because that storage system can be shared.

To protect the configuration, the storage system supports encryption so the JSON object is protected as it's saved.

If you're using filesystem storage or cloud block storage, the JSON configuration is typically named `site.bin`.

There are four storage system plugins in the library:

- [awsbucketstorage](https://github.com/ambientkit/plugin/tree/main/storage/awsbucketstorage) - backend storage support for Amazon S3 buckets
- [azureblobstorage](https://github.com/ambientkit/plugin/tree/main/storage/azureblobstorage) - backend storage support for Azure Blob Storage
- [gcpbucketstorage](https://github.com/ambientkit/plugin/tree/main/storage/gcpbucketstorage) - backend storage support for Google Cloud Storage buckets
- [localstorage](https://github.com/ambientkit/plugin/tree/main/storage/localstorage) - backend storage support using local filesystem

You can also write your own storage plugin to support more systems.

We also created a helper package that chooses the correct storage system based on environment variables for AWS, Azure, and Google Cloud.

```go
storage := cloudstorage.StorageBasedOnCloud("storage/site.bin", "storage/session.bin")
```

## Router

The router determines which handlers are called when a request hits the application. 

## Session Manager

The session manager handles all aspects of a user session like:

- user login
- user logout
- checking if the user is authenticated
- storing data in the session for the user
- cross-site request forgery (CSRF) protection