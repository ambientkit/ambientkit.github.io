# grant

Approve all grant requests for either a specified plugin or all plugins.

:::tip Dev Console

The Ambient app needs to be running locally for the CLI to communicate. It will try to access the Dev Console via: http://localhost:8081/plugins

:::

Enable all grant requests for one plugin by plugin name.

```bash
grant author
```

Enable all grant requests for all plugins.

```bash
grant all
```

## Error: could not get plugin names

If you don't have the Ambient app running, when you try to use the command or auto-complete for the tab, you will receive an error message like this:

```
amb: could not get plugin names: error creating client: Get "http://localhost:8081/plugins": dial tcp [::1]:8081: connect: connection refused
```