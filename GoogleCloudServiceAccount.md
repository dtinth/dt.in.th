---
public: true
title: Google Cloud Service Account
---

:::lead
[Google Cloud](GoogleCloud) lets you create [up to 100](https://cloud.google.com/iam/quotas#quotas) [**service accounts**](https://cloud.google.com/iam/docs/service-account-overview) per project.
:::

Service accounts are normally used by applications (compute workload) to authenticate with Google Cloud services. In other words, your application can access Google Cloud resources _on behalf of_ the service account. In essense, your application _impersonates_ the service account.

![image](https://github.com/dtinth/notes.dt.in.th/assets/193136/afbec6ea-f09f-4263-8b2e-8a8910703c10)

Service accounts also support OpenID Connect, so [you can also use them to authenticate between your own services](GoogleCloudServiceAccountIdToken).