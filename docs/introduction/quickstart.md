# Welcome!

Ambient is a framework in Go for building web apps using plugins. You can use the plugins already included to stand up a blog just like the [Bear Blog](https://bearblog.dev/) or create your own plugins to build your own app. Plugins can be enabled/disabled while the app is running which means routes as well as middleware can also modified without restarting the app. Plugins must be granted permissions above being enabled which provides you with better control over your app.

Let's discover Ambient in **less than 5 minutes**.

## Getting Started

### What you'll need

- [Go](https://go.dev/doc/install) version 1.13 or above (module support).
- You'll also need tools like [Git](https://git-scm.com/) and [Make](https://www.gnu.org/software/make/manual/make.html), but they are probably already installed.

### Generate an App

To build a full app ([screenshots](/docs/docs/introduction/screenshots)), run these commands.

Build the Ambient interactive CLI (amb) in the current folder.

```bash
bash -c "$(curl -fsSL https://raw.githubusercontent.com/ambientkit/amb/main/bash/install.sh)"
```

Run the app.

```bash
./amb
```

Clone the ambient template by typing this command and pressing Enter.

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

Download the Go dependencies.

```bash
go mod download
```

Create the session and site files in the storage folder.

```bash
make storage
```

Create the .env file.

```bash
make env
```

Generate a new private key and append to your .env file.

```bash
make privatekey >> .env
```

Generate a new password hash (replace with your password) and append to your .env file.

```bash
make passhash passwordhere >> .env
```

Start the webserver on port 8080 (local development with no Docker).

```bash
make run-env
```

The login page is located at: `http://localhost:8080/login`

To login, you'll need:

- the default username: `admin`
- the password from the `make passhash passwordhere` step. It's the value from the .env file for which the `AMB_PASSWORD_HASH` was derived.

Once you are logged in, you should see a new menu option call `Plugins`. From this screen, you'll be able to use the Plugin Manager to make changes to state, permissions, and settings for all plugins.