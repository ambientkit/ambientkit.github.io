# Welcome!

Ambient is a framework in Go for building web apps using plugins. You can use the plugins already included to stand up a blog just like the [Bear Blog](https://bearblog.dev/) or create your own plugins to build your own web app. Plugins can be enabled/disabled while the app is running which means routes as well as middleware can also modified without restarting the app. Plugins must be granted permissions above being enabled which provides you with better control over your web app.

Let's discover Ambient in **less than 5 minutes**.

## Getting Started

### What you'll need

- [Go](https://go.dev/doc/install) version 1.13 or above (module support).
- You'll also need tools like [Git](https://git-scm.com/) and [Make](https://www.gnu.org/software/make/manual/make.html), but they are probably already installed.

### Generate a Web App

To build a full web app ([screenshots](https://github.com/ambientkit/ambient#screenshots)), run these commands:

```bash
# Build the Ambient interactive CLI (amb) in the current folder.
bash -c "$(curl -fsSL https://raw.githubusercontent.com/ambientkit/amb/main/bash/install.sh)"

# Run the app.
./amb

# Clone the ambient template by typing this command and pressing Enter.
createapp

# Exit by typing `exit` or pressing Ctrl+D.
exit

# Change to the new project folder.
cd ambapp

# Create the .env file.
make env

# Download the Go dependencies.
go mod download

# Generate a new private key.
make privatekey

# Generate a new password hash (replace with your password).
make passhash passwordhere

# Create the session and site files in the storage folder.
make storage

# Start the webserver on port 8080 (local development with no Docker).
make run-env
```

The login page is located at: `http://localhost:8080/login`

To login, you'll need:

- the default username is: `admin`
- the password from the .env file for which the `AMB_PASSWORD_HASH` was derived

Once you are logged in, you should see a new menu option call `Plugins`. From this screen, you'll be able to use the Plugin Manager to make changes to state, permissions, and settings for all plugins.