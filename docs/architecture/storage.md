# Storage System

Ambient is a dynamic app that allows you make changes to it while it is running like enabling/disabling plugins, changing site information, etc. Those changes are stored in a JSON configuration object and then written to a storage system so it's persistent. Since there is a storage system, multiple instances of the app can run at the same time and access the same storage system to keep them consistent. This allows Ambient to support container and serverless architectures with ease because that storage system can be shared.

To protect the configuration, the storage system supports encryption so the JSON object is protected as it's saved.

If you're using filesystem storage or cloud block storage, the JSON configuration is typically named `site.bin`.

There are four storage system plugins in the library:

- [awsbucketstorage](https://github.com/ambientkit/plugin/tree/main/storage/awsbucketstorage) - backend storage support for Amazon S3 buckets
- [azureblobstorage](https://github.com/ambientkit/plugin/tree/main/storage/azureblobstorage) - backend storage support for Azure Blob Storage
- [gcpbucketstorage](https://github.com/ambientkit/plugin/tree/main/storage/gcpbucketstorage) - backend storage support for Google Cloud Storage buckets
- [localstorage](https://github.com/ambientkit/plugin/tree/main/storage/localstorage) - backend storage support using local filesystem

You can also write your own storage plugin to support more systems.

We also created a helper package that chooses the correct storage system based on environment variables for AWS, Azure, and Google Cloud.

```go
storage := cloudstorage.StorageBasedOnCloud("storage/site.bin", "storage/session.bin")
```