# Environment Variables

You can set the web server `PORT` to values other than `8080`.

When `AMB_LOCAL` is set to `true`:

- data storage will use the local filesystem instead of Google Cloud Storage
- if you try to access the app, it will listen on all IPs/addresses, instead of redirecting like it does in production

You can use `envdetect.RunningLocalDev()` to detect if the flag is set to true or not.

When `AMB_TIMEZONE` is set to a timezone like `America/New_York`, the app will use that timezone. This is required if using time-based packages like MFA.

When `AMB_URL_PREFIX` is set to a path like `/api`, the app will serve requests from `/api/...`. This is helpful if you are running behind a proxy or are hosting multiple websites from a single URL.