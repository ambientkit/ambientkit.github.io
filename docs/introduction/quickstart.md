# Welcome!

Ambient is a framework in Go for building web apps using plugins. You can use the plugins already included to stand up a blog just like the [Bear Blog](https://bearblog.dev/) or create your own plugins to build your own app. Plugins can be enabled/disabled while the app is running which means routes as well as middleware can also modified without restarting the app. Plugins must be granted permissions above being enabled which provides you with better control over your app. Ambient also supports [compiled plugins using gRPC](/docs/plugins/grpc) via the [HashiCorp plugin system](https://github.com/hashicorp/go-plugin).

_**Note:** Ambient has an evolving API so it's not recommended for production quite yet, but would love your [feedback](https://github.com/ambientkit/ambient/issues/new/choose) as we get there._

Let's discover Ambient in **less than 5 minutes**.

## Getting Started

### What you'll need

- [Go](https://go.dev/doc/install) version 1.17 or above (module support).
- You'll also need tools like [Git](https://git-scm.com/) and [Make](https://www.gnu.org/software/make/manual/make.html), but they are probably already installed.

### Generate an App

To build a full app ([screenshots](/docs/introduction/screenshots)), run these commands.

Build the Ambient interactive CLI (amb) in the current folder.

```bash
bash -c "$(curl -fsSL https://raw.githubusercontent.com/ambientkit/amb/main/bash/install.sh)"
```

Run the app.

```bash
./amb
```

Clone the [ambient-template](https://github.com/ambientkit/ambient-template) by typing this command and pressing Enter.

```bash
createapp
```

Exit by typing `exit` or pressing Ctrl+D.

```bash
exit
```

Change to the new project folder.

```bash
cd ambapp
```

Initialize the project - this command will:
- download the Go dependencies
- create the session and site files in the storage folder
- create the .env file
- generate a new private key and append to your .env file
- generate a new password hash and append to your .env file.

Ensure you change `passwordhere` to your password.

```bash
make init passwordhere
```

Start the webserver on port 8080 (local development with no Docker).

```bash
make start
```

The login page is located at: `http://localhost:8080/login`

To login, you'll need:

- the default username: `admin`
- the password from above

Once you are logged in, you should see a new menu option call `Plugins`. From this screen, you'll be able to use the Plugin Manager to make changes to state, permissions, and settings for all plugins.