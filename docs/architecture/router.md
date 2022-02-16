# Router

The router determines which handlers are called when a request hits the application based on HTTP method (GET, POST, DELETE, etc.) and URL. Every router handles routes a little differently so if you want to extend a router that already exists, it needs to meet the minimum requirements

- must support parameters in URL paths: `/music/{band}/{song}`
- parameters in URLs must be surrounded in braces - if they use the convention where they start with a colon (`/music/:band/:song`), you can use the [`paramconvert`](https://github.com/ambientkit/plugin/tree/main/pkg/paramconvert) package to make it compatible with Ambient
- must support routes being added and removed via `Clear(method string, path string)` - when plugins are disabled while the app is running, the routes must no longer be accessible
- the order in which routes are added shouldn't matter. For instance, if `GET /app/{name}` is added before `GET /app`, it should behave the same as if they were added in reverse

There are five routers in the library:

- [awayrouter](https://github.com/ambientkit/plugin/tree/main/router/awayrouter) - routing using fork of [`matryer/way`](https://github.com/ambientkit/away)
- [chirouter](https://github.com/ambientkit/plugin/tree/main/router/chirouter) - routing using [`go-chi/chi`](https://github.com/go-chi/chi) with [`paramconvert`](https://github.com/ambientkit/plugin/tree/main/pkg/paramconvert)
- [gorillamux](https://github.com/ambientkit/plugin/tree/main/router/gorillamux) - routing using fork of [`gorilla/mux`](https://github.com/ambientkit/mux)
- [jshttprouter](https://github.com/ambientkit/plugin/tree/main/router/jshttprouter) routing using fork of [`julienschmidt/httprouter`](https://github.com/ambientkit/httprouter) with [`paramconvert`](https://github.com/ambientkit/plugin/tree/main/pkg/paramconvert)
- [patrouter](https://github.com/ambientkit/plugin/tree/main/router/patrouter) - routing using fork of [`bmizerany/pat`](https://github.com/ambientkit/pat) with [`paramconvert`](https://github.com/ambientkit/plugin/tree/main/pkg/paramconvert)

The `awayrouter` is also used for the [Dev Console](/docs/docs/cli/devconsole).