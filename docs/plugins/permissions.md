# Permission System (Grants)

Granular read and write access must be explicitly requested by a plugin through a [grant request](/docs/plugins/grants) and then explicitly approved by the administrator of the app in order for a plugin to get the permission required to make changes to the app configuration. The full list of grants available is [here](https://github.com/ambientkit/ambient/blob/main/grant.go).

Plugins are only allowed to interact with the Ambient app when:

1. administrator enables a plugin
2. plugin requests a grant
3. administrator approves the grant request

The only other way a plugin can run without the three step process above is if the plugin is listed as a Trusted Plugin. The core plugins (logger, storage engine, router, template engine, and session manager) do not need to be added to the trusted plugin list because the app cannot function without them so they are trusted implicitly.