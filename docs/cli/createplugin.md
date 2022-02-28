# createplugin

Create a new Ambient plugin on your computer.

Create a new plugin package with defaults. 

```bash
createplugin
```

You can also run by specifying your own arguments.

```bash
createapp -folder plugin/myplugin -template mvp
```

## Available Templates

- `mvp` - creates a plugin package with the `PluginName()` and `PluginVersion()` functions
- `full` - creates a plugin package with all the plugin functions