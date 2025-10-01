---
title: How to retag a Docker image on a remote registry without pulling the image to local machine
public: true
---

# Remotely re-tagging a Docker image

::: lead
**tl;dr:** `docker buildx imagetools create $SOURCE --tag $TARGET`
:::

- Some managed app platform provides the ability to deploy images simply by pushing a [Docker](Docker) image to a predefined tag.

- For example, [DigitalOcean](DigitalOcean)’s App Platform has this option:

  ![](https://im.dt.in.th/ipfs/bafybeibineoxm7kf2dqnkklpn4ningoo53kvkfuejkjspc62upy4hpjzeu/image.webp)

- Usually one might do a **`docker pull && docker push`** in a deployment pipeline, but it’s a waste of bandwidth:

  ```sh
  SOURCE=registry.tld/service:commit-abcdef
  TARGET=registry.tld/service:staging

  docker pull $SOURCE
  docker tag $SOURCE $TARGET
  docker push $TARGET
  ```

  - Also, if the image is multi-platform, only the current platform will be retagged. This may be problematic if your CI runs on Intel but the deployment target runs on ARM e.g. Ampere or Graviton.

  - On some registries, they provide a CLI command to re-tag an image, but it’s specific to that platform. e.g. [Amazon ECR](https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-retag.html), [GCR](https://cloud.google.com/sdk/gcloud/reference/container/images/add-tag).

- Thanks to [Francois Nel’s StackOverflow answer on the question “Add remote tag to a docker image”](https://stackoverflow.com/a/70526615), now I know we can do this:

  ```sh
  SOURCE=registry.tld/service:commit-abcdef
  TARGET=registry.tld/service:staging

  docker buildx imagetools create $SOURCE --tag $TARGET
  ```

  And it supports multi-platform images!
