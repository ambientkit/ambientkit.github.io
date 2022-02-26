# Library

We've built out an [initial library](/plugins) that you can use in your apps or you can fork and modify to fit your needs.

## Logger

- [logruslogger](https://github.com/ambientkit/plugin/tree/main/logger/logruslogger) - logging using [`sirupsen/logrus`](https://github.com/sirupsen/logrus)
- [zaplogger](https://github.com/ambientkit/plugin/tree/main/logger/zaplogger) - logging using [`uber-go/zap`](https://github.com/uber-go/zap)

## Storage System

- [awsbucketstorage](https://github.com/ambientkit/plugin/tree/main/storage/awsbucketstorage) - backend storage support for Amazon S3 buckets
- [azureblobstorage](https://github.com/ambientkit/plugin/tree/main/storage/azureblobstorage) - backend storage support for Azure Blob Storage
- [gcpbucketstorage](https://github.com/ambientkit/plugin/tree/main/storage/gcpbucketstorage) - backend storage support for Google Cloud Storage buckets
- [localstorage](https://github.com/ambientkit/plugin/tree/main/storage/localstorage) - backend storage support using local filesystem

## Session Manager

- [scssession](https://github.com/ambientkit/plugin/tree/main/sessionmanager/scssession) - session management using [`alexedwards/scs`](https://github.com/alexedwards/scs)

## Template Engine

- [htmlengine](https://github.com/ambientkit/plugin/tree/main/templateengine/htmlengine) - HTML templating using [`html/template`](https://pkg.go.dev/html/template) and [`embed.FS`](https://pkg.go.dev/embed) with [`oxtoacart/bpool`](https://github.com/oxtoacart/bpool) for template buffering

## Router

- [awayrouter](https://github.com/ambientkit/plugin/tree/main/router/awayrouter) - routing using fork of [`matryer/way`](https://github.com/ambientkit/away)
- [chirouter](https://github.com/ambientkit/plugin/tree/main/router/chirouter) - routing using [`go-chi/chi`](https://github.com/go-chi/chi) with [`paramconvert`](https://github.com/ambientkit/plugin/tree/main/pkg/paramconvert)
- [gorillamux](https://github.com/ambientkit/plugin/tree/main/router/gorillamux) - routing using [`gorilla/mux`](https://github.com/gorilla/mux)
- [jshttprouter](https://github.com/ambientkit/plugin/tree/main/router/jshttprouter) routing using [`julienschmidt/httprouter`](https://github.com/julienschmidt/httprouter) with [`paramconvert`](https://github.com/ambientkit/plugin/tree/main/pkg/paramconvert)
- [patrouter](https://github.com/ambientkit/plugin/tree/main/router/patrouter) - routing using [`bmizerany/pat`](https://github.com/bmizerany/pat) with [`paramconvert`](https://github.com/ambientkit/plugin/tree/main/pkg/paramconvert)

## Middleware

- [cors](https://github.com/ambientkit/plugin/tree/main/middleware/cors) - supports [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) on `/api/*` endpoints
- [etagcache](https://github.com/ambientkit/plugin/tree/main/middleware/etagcache) - supports [entity tag (ETag)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag)
- [gzipresponse](https://github.com/ambientkit/plugin/tree/main/middleware/gzipresponse) - adds [gzip](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Encoding) content compression to every response
- [healthcheck](https://github.com/ambientkit/plugin/tree/main/middleware/healthcheck) - returns a 200 HTTP status code on endpoint `/api/healthcheck`
- [jwt](https://github.com/ambientkit/plugin/tree/main/middleware/jwt) - supports JSON web tokens
- [logrequest](https://github.com/ambientkit/plugin/tree/main/middleware/logrequest) - output `info` log with timestamp, remote address, HTTP method, and URL for every request
- [notrailingslash](https://github.com/ambientkit/plugin/tree/main/middleware/notrailingslash) - strips trailing slashes from requests except on `/debug` endpoints to support [`http.pprof`](https://pkg.go.dev/net/http/pprof)
- [proxyrequest](https://github.com/ambientkit/plugin/tree/main/middleware/proxyrequest) - adds [`reverse proxy`](https://pkg.go.dev/net/http/httputil#NewSingleHostReverseProxy) to support forwarding API and UI requests to separate URLs, ports, or microservices
- [redirecttourl](https://github.com/ambientkit/plugin/tree/main/middleware/redirecttourl) - adds URL redirection if request doesn't match site URL
- [securedashboard](https://github.com/ambientkit/plugin/tree/main/middleware/securedashboard) - disallows unauthenticated access to `/dashboard` endpoints
- [uptimerobotok](https://github.com/ambientkit/plugin/tree/main/middleware/uptimerobotok) - sends a 200 HTTP status code when a HEAD request is sent to `/` to support [UptimeRobot](https://uptimerobot.com/)

## Generic

- [author](https://github.com/ambientkit/plugin/tree/main/generic/author) - adds a configurable [author](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#adding_an_author_and_description) meta tag to all HTML templates
- [bearblog](https://github.com/ambientkit/plugin/tree/main/generic/bearblog) - provides [Bear Blog](https://bearblog.dev/) like functionality for simple, markdown based articles
- [bearcss](https://github.com/ambientkit/plugin/tree/main/generic/bearcss) - adds CSS styling based on the [Bear Blog](https://bearblog.dev/)
- [charset](https://github.com/ambientkit/plugin/tree/main/generic/charset) - adds a configurable [charset](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta) meta tag to all HTML templates
- [debugpprof](https://github.com/ambientkit/plugin/tree/main/generic/debugpprof) - enables [`http.pprof`](https://pkg.go.dev/net/http/pprof) for HTTP server runtime profiling on `/debug/pprof` endpoints
- [description](https://github.com/ambientkit/plugin/tree/main/generic/description) - adds a configurable [description](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#adding_an_author_and_description) meta tag to all HTML templates
- [disqus](https://github.com/ambientkit/plugin/tree/main/generic/disqus) - adds [Disqus](https://disqus.com/) comment blocks to all Post layouts
- [envinfo](https://github.com/ambientkit/plugin/tree/main/generic/envinfo) - adds a page at `/dashboard/env` that displays all server environment variables
- [googleanalytics](https://github.com/ambientkit/plugin/tree/main/generic/googleanalytics) - adds [Google Analytics](https://analytics.google.com/) tracking code to every template
- [pluginmanager](https://github.com/ambientkit/plugin/tree/main/generic/pluginmanager) - adds a plugin management system that is available on the `/dashboard/plugins` endpoint
- [prism](https://github.com/ambientkit/plugin/tree/main/generic/prism) - adds syntax highlighting using [Prism](https://prismjs.com/) to markdown code blocks
- [robots](https://github.com/ambientkit/plugin/tree/main/generic/robots) - adds a simple `/robots.txt` endpoint for web crawlers
- [rove](https://github.com/ambientkit/plugin/tree/main/generic/rove) - run [MySQL migrations](https://github.com/josephspurrier/rove) on a database
- [rssfeed](https://github.com/ambientkit/plugin/tree/main/generic/rssfeed) - adds a [RSS feed](https://rss.com/blog/how-do-rss-feeds-work/) to the `/rss.xml` endpoint and adds a `link` tag to every template
- [simplelogin](https://github.com/ambientkit/plugin/tree/main/generic/simplelogin) - adds a login page with MFA support and dashboard page to customize site meta data
- [sitemap](https://github.com/ambientkit/plugin/tree/main/generic/sitemap) - adds a [Sitemap](https://www.sitemaps.org/protocol.html) to the `/sitemap.xml` endpoint
- [stackedit](https://github.com/ambientkit/plugin/tree/main/generic/stackedit) - adds the in-browser markdown editor, [StackEdit](https://stackedit.io/), to all textfields with the `id_content` ID. Built for use with the `bearblog` plugin
- [styles](https://github.com/ambientkit/plugin/tree/main/generic/styles) - adds configurable Favicon and CSS styles to all templates
- [viewport](https://github.com/ambientkit/plugin/tree/main/generic/viewport) - adds a mobile-optimized [viewport](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag) meta tag to all HTML templates