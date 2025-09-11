---
public: true
title: Generating Presigned GET URLs for S3-Compatible Object Storage with Deno and Minio JS SDK
---

I had to generate [presigned GET URLs](https://docs.aws.amazon.com/AmazonS3/latest/userguide/ShareObjectPreSignedURL.html) for S3-compatible object storage service. Here’s a quick way to do it with [Deno](Deno) and the [Minio JS](MinioJS) [SDK](https://github.com/minio/minio-js/blob/master/docs/API.md).

```ts
// generate.ts
import { Client } from 'npm:minio'

const minioClient = new Client({
  endPoint: Deno.env.get('STORAGE_HOST'),
  useSSL: true,
  accessKey: Deno.env.get('STORAGE_AK'),
  secretKey: Deno.env.get('STORAGE_SK'),
})

const bucket = Deno.env.get('STORAGE_BUCKET')
const key = Deno.args[0]

const url = await minioClient.presignedGetObject(bucket, key, 3600, {
  'response-content-disposition': `attachment; filename="${key
    .split('/')
    .pop()}"`,
})

console.log(url)
```

To run:

```sh
deno --env-file --allow-net --allow-env generate.ts hello.txt
```
