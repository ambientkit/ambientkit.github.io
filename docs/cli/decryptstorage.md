# decryptstorage

Decrypt the data storage (storage/site.bin) for a running Ambient app.

:::tip Dev Console

The Ambient app needs to be running locally for the CLI to communicate. It will try to access the Dev Console via: http://localhost:8081/plugins

:::

Decrypt the data storage.

```bash
encryptstorage
```

## Error: could not get plugin names

If you don't have the Ambient app running, when you try to use the command or auto-complete for the tab, you will receive an error message like this:

```
amb: could not get plugin names: error creating client: Get "http://localhost:8081/plugins": dial tcp [::1]:8081: connect: connection refused
```