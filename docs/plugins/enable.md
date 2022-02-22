# Enable & Disable

The `Enable()` and `Disable()` functions are optional. They allow the plugin to perform tasks when the plugin is enabled or disabled. Examples of why a plugin would need to use these functions:

- start or stop a background task
- connect or disconnect with a database or data store

## Enable

The `Enable()` function handles the setting of the [Toolkit](/docs/plugins/toolkit) so it's available for use in other functions. It's already set in the PluginBase so you don't have to redefine it:

```go title="base.go"
// Enable is to enable the plugin. Toolkit should be saved.
func (p *PluginBase) Enable(toolkit *Toolkit) error {
	p.Toolkit = toolkit
	return nil
}
```

If you do need to override it to perform additional plugin initialization, you should call the base function like this. It's recommended to call it like this becuase if the `Enable()` function happens to change in Ambient, you still get all the benefits it provides in your plugin.

```go
// Enable is to enable the plugin. Toolkit should be saved.
func (p *Plugin) Enable(toolkit *Toolkit) error {
	err := p.PluginBase.Enable(toolkit)
	if err != nil {
		return err
	}
    // Put your additional logic here.
	return nil
}
```

If the function returns an error, the plugin will not be enabled. Examples of why a plugin would fail to enable:

- it cannot connect to a database or data store with the given credentials
- it is missing a setting or configuration that is required at enable time
- it is missing another plugin from being enabled first

## Disable

If you have tasks that need to happen when a plugin is disabled, you can define your own `Disable()` function. It's shaped like this:

```go
// Disable handles any plugin cleanup tasks.
func (p *Plugin) Disable() error {
	return nil
}
```

If the function returns an error, the plugin will not be disabled. This is to prevent the app from behaving unexpectedly. Examples of why a plugin would fail to disable:

- a background task is still processing and disabling would result in data loss
- another plugin may need to be disabled first if it relies on this plugin