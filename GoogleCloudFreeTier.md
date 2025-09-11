---
title: Creating a free Google Cloud Compute Engine VM in Google Cloud Shell
public: true
---

:::lead
[Google Cloud](GoogleCloud) has a free tier that includes 1 e2-micro VM instance per month. Here's how I create a free compute instance using Google Cloud Shell.
:::

```bash
gcloud compute instances create longdist \
        --zone=us-west1-a \
        --machine-type=e2-micro \
        --image-family=debian-12 \
        --image-project=debian-cloud \
        --boot-disk-size=30GB \
        --scopes=https://www.googleapis.com/auth/cloud-platform \
        --network-tier=STANDARD
```

According to the [Compute Free Tier documentation](https://cloud.google.com/free/docs/compute-getting-started#about_the_compute_free_tier):

- **1 non-preemptible e2-micro VM instance** per month in one of these US regions:
  - Oregon: us-west1
  - Iowa: us-central1  
  - South Carolina: us-east1
- **30 GB-months standard persistent disk**
- **1 GB data transfer** from North America to all regions (excluding China and Australia) per month
- **Free external IP address** (no charge for external IP on free tier)

The free tier e2-micro instance limit is by time, not by instance. Each month, all e2-micro instances share a pool of hours equal to the total hours in the current month.

GPUs and TPUs are not included in the free tier and are always charged.