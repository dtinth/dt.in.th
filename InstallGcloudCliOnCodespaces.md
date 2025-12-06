---
public: true
title: Installing Google Cloud CLI on GitHub Codespaces
created: 2025-05-09
giscus: true
---

# Installing Google Cloud CLI on GitHub Codespaces

Based on documentation in <https://cloud.google.com/sdk/docs/install#deb> as of 2025-05-07.

```sh
sudo apt-get update && \
  curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo gpg --dearmor -o /usr/share/keyrings/cloud.google.gpg && \
  echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] https://packages.cloud.google.com/apt cloud-sdk main" | sudo tee -a /etc/apt/sources.list.d/google-cloud-sdk.list && \
  sudo apt-get update && sudo apt-get install google-cloud-cli
```
