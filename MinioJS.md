---
public: true
title: Minio JavaScript library snippets
---

The [Minio](https://www.npmjs.com/package/minio) [JavaScript](JavaScript) library can be used to talk with S3-compatible storage services, such as [Linode](Linode) [Object Storage](https://www.linode.com/docs/products/storage/object-storage/), [DigitalOcean Spaces](https://www.digitalocean.com/products/spaces), or [Oracle Cloud’s Object Storage](https://docs.oracle.com/en-us/iaas/Content/Object/Concepts/objectstorageoverview.htm).

```ts
import Minio from 'minio'

const minioClient = new Minio.Client({
  endPoint: 'ap-south-1.linodeobjects.com',
  useSSL: true,
  accessKey: process.env.AWS_ACCESS_KEY_ID,
  secretKey: process.env.AWS_SECRET_ACCESS_KEY,
})
```

Also install `@types/minio` for [TypeScript](TypeScript) typings.

## `endPoint`

```ts
// Oracle Cloud
endPoint = `${namespace}.compat.objectstorage.${region}.oraclecloud.com`

// Linode
endPoint = `${region}.linodeobjects.com`
```

## Uploading objects

```ts
await minioClient.putObject(bucketName, name, data, {
  // Headers, e.g.
  // 'Content-Type': 'application/json',
  // 'Cache-Control': 'max-age=300',
})
```

## Downloading objects

```ts
export async function loadObject(name) {
  const stream = await minioClient.getObject(bucketName, name)
  const buffers = []
  for await (const chunk of stream) {
    buffers.push(chunk)
  }
  return Buffer.concat(buffers)
}
```

## Generating presigned URLs

See example in [Generating Presigned GET URLs for S3-Compatible Object Storage with Deno and Minio JS SDK](DenoMinioPresignedGet)
