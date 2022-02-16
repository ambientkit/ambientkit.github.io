# Screenshots

Below are screenshots of a full app with links to the plugins to help explain the architecture.

The terminal shows the [logger plugin](https://github.com/ambientkit/plugin/tree/main/logger/zaplogger/zaplogger.go) that outputs based on log level.

![Terminal](/img/screenshots/terminal.png)

The home screen is from the [simplelogin plugin](https://github.com/ambientkit/plugin/tree/main/generic/simplelogin/simplelogin.go) and demonstrates the styling from the [bearcss plugin](https://github.com/ambientkit/plugin/tree/main/generic/bearcss/bearcss.go). Routing is handled through the [awayrouter plugin](https://github.com/ambientkit/plugin/tree/main/router/awayrouter/awayrouter.go).

![Home](/img/screenshots/home.png)

The login page takes a username and password (handled by the [simplelogin plugin](https://github.com/ambientkit/plugin/tree/main/generic/simplelogin/simplelogin.go)). The password hash is read from the environment variable: `AMB_PASSWORD_HASH`. The [scssession plugin](https://github.com/ambientkit/plugin/tree/main/sessionmanager/scssession/scssession.go) handles the session creation and stores to the local filesystem, but supports any storage system via a plugin that satisfies the [`SessionStorer`](https://github.com/ambientkit/ambient/tree/main/ambient_sessionstorer.go) interface.

![Login](/img/screenshots/login.png)

The [pluginmanager plugin](https://github.com/ambientkit/plugin/tree/main/generic/pluginmanager/pluginmanager.go) provides an easy way to modify plugins.

![Plugin Manager](/img/screenshots/pluginmanager.png)

The settings page (part of the [pluginmanager plugin](https://github.com/ambientkit/plugin/tree/main/generic/pluginmanager/pluginmanager.go)) allows you to customize the value that gets displayed in the meta tag that is set by the [author plugin](https://github.com/ambientkit/plugin/tree/main/generic/author/author.go).

![Settings](/img/screenshots/settings.png)

The grants page (part of the [pluginmanager plugin](https://github.com/ambientkit/plugin/tree/main/generic/pluginmanager/pluginmanager.go)) allows you to allow or deny modifications to the app by the [author plugin](https://github.com/ambientkit/plugin/tree/main/generic/author/author.go).

![Grants](/img/screenshots/grants.png)

Once enabled, the [author plugin](https://github.com/ambientkit/plugin/tree/main/generic/author/author.go) modifies the HTML header (through the [htmlengine plugin](https://github.com/ambientkit/plugin/tree/main/templateengine/htmlengine/htmlengine.go)) to add in a meta tag with the value from the settings page.

![HTML](/img/screenshots/htmlauthor.png)

The backend storage is provided by the [gcpbucketstorage plugin](https://github.com/ambientkit/plugin/tree/main/storage/gcpbucketstorage/gcpbucketstorage.go) and is stored in a JSON file on the local filesystem, but supports any storage system via a plugin that satisfies the [`DataStorer`](https://github.com/ambientkit/ambient/tree/main/ambient_datastorer.go) interface.

![Storage](/img/screenshots/storage.png)