# Best Practices

- Use the Ambient logger with all it's different levels: fatal, error, warn, info, and debug. You shouldn't use `log` or `fmt` package to output any messages because they are not standardized.
- If you run background jobs in your plugin, make sure you implement the `Disable()` function to stop the background job.
- When creating a funcmap, you must prefix each one with your plugin name so there are no collisions in the templates. An error message will be throw if any of the funcmaps are not named properly.
- You must return every permission your plugin needs to use in the `GrantRequests()` function. Otherwise, the plugin will not work properly when enabled.
- Routes can be overwritten by other plugins so it's best to namespace with the plugin name since plugin names are unique.

## FAQs

**What should determine the plugin boundary?**

You should group required items together in a plugin. For instance, a session manager should implement both the `SessionManager()` and `Middleware()` functions - it wouldn't make sense to separate into different plugins since they require each other.

You could group by feature. A login plugin will have multiple routes (`GET /login`, `POST /login`, `GET /logout`) so those should all be in the same plugin.

You could group by type as well. You may want to keep most of your middleware or code that modifies your header in the same plugin. For middleware, you may want to group these into a single plugin so you can use a single settings page to enable or disable each one: request logging, trail slash removal, and response gzip compression.

**How should I approach wrapping a package as a plugin?**

Regardless if you're using Ambient or not, Go packages should be designed so they can be reused by other people and projects without tightly coupling dependencies. If you are creating a new plugin, build the package so it follows [Go best practices](https://talks.golang.org/2013/bestpractices.slide) and then import it to the plugin package. That way you can use it with other apps as well.

**Should I be worried about creating too many plugins?**

If you feel like you have so many plugins that it's hard to find what you're looking for, it's probably too many plugins.

**Does the app run slower with more plugins?**

It will require a bit more startup time as you add plugins, but it shouldn't be noticeable.