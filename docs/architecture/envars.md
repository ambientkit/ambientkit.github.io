# Environment Variables

Environment variables are one way to get information into the app at runtime. At a minimum, Ambient (more precisely the Session Manager) needs to have a session key so it can encrypt user sessions. Ambient is not opinioned about how you load the environment variables so you can load them from anywhere. We use the [`github.com/joho/godotenv`](https://github.com/joho/godotenv) package for reading from `.env` files.

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

## Built-In Environment Variables

These environment variables are used through an Ambient app and can be used in plugins as well.

### Suggested

Session key to encrypt the cookie store. Generate with: `make privatekey`. This is not required, but suggested when using [ambient-template](https://github.com/ambientkit/ambient-template) because it's tied into the Makefile and the deployments to the cloud providers.

```env
AMB_SESSION_KEY=b9e44f3b54a1a6e6b8062a40612240c00b91fbf3830f912b9db2b87c81967820
```

Password hash that is base64 encoded. Generate with: `make passhash passwordhere`. This is not required, but suggested when using [ambient-template](https://github.com/ambientkit/ambient-template) because it's tied into the Makefile and the deployments to the cloud providers.

```env
AMB_PASSWORD_HASH=JDJhJDEwJGNYRGYxcU10WmFDaVR1ZXk3NDdqMWV2bFE0cm0yenE4anl5WTJxYlVQQktkY3p5RnFTUzUy
```

### Optional

Set the port the HTTP server will listen on. Default is: `8080`

```bash
PORT=8080
```

Set the URL prefix if behind a proxy. Default is: unset

```bash
AMB_URL_PREFIX=/api
```

Set the time zone values from: [https://golang.org/src/time/zoneinfo_abbrs_windows.go](https://golang.org/src/time/zoneinfo_abbrs_windows.go). Required if using MFA or another time reliant function. Default is: unset

```bash
 AMB_TIMEZONE=America/New_York
```

LoadDotEnv returns true if the AMB_DOTENV environment variable is set to true. Easy way to to control when `.env` is loaded. Sample code is above. Default is: `false`

```bash
AMB_DOTENV=true
```

When `AMB_LOCAL` is set to `true` (default is: `false`):

- data storage will use the local filesystem instead of the cloud provider storage for storing the app configuration

```bash
AMB_LOCAL=true
```

### Dev Console

Enable the Dev Console so the `amb` CLI can interact with the app. You should not enable this in production. Default is: `false`

```bash
AMB_DEVCONSOLE_ENABLE=true
```

Set the URL for the Dev console that the `amb` CLI connects to. Default is: `http://localhost`

```bash
AMB_DEVCONSOLE_URL=http://localhost
```

Set the port for the Dev Console that `amb` CLI connects to. Default is: `8081`

```bash
AMB_DEVCONSOLE_PORT=8081
```

### Cloud Provider Environment Varibles

There is also a package available in the plugin repository that will use the correct cloud storage based on where it's deployed called [cloudstorage](https://github.com/ambientkit/plugin/tree/main/pkg/cloudstorage). The [ambient-template](https://github.com/ambientkit/ambient-template) repository uses it.