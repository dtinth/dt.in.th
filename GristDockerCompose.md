---
public: true
title: Running Grist with Google Sign-In and External Storage on Docker Compose
created: 2024-11-16
updates:
  - date: 2025-05-15
    description: Added external object storage configuration
  - date: 2025-12-07
    description: Added configuration to enable service accounts
  - date: 2025-12-14
    description: Added list of tested object storage services; updated volume configuration to use named volume instead of bind mount
giscus: true
---

# Running Grist with Google Sign-In and External Storage on Docker Compose

This is how I [self-host](https://support.getgrist.com/self-managed/) [Grist](Grist) on Docker (through [Portainer](https://www.portainer.io/)) with:

- [Authentication](https://support.getgrist.com/self-managed/#how-do-i-set-up-authentication) via [Google Identity](https://developers.google.com/identity)
- [Object storage for document snapshots](https://support.getgrist.com/self-managed/#how-do-i-set-up-snapshots) and [external attachments](https://support.getgrist.com/self-managed/#how-do-i-enable-external-attachments)
- [Service accounts](GristServiceAccounts) for safer automation

## Required environment variables

`stack.env`

```sh
# Put a random string here (e.g. use `openssl rand -hex 32`)
GRIST_SESSION_SECRET=

# Put your public hostname here
APP_HOME_URL=https://your-domain.tld

# Set the default organization name
GRIST_SINGLE_ORG=grist

# OIDC settings for Google Sign-In
# Set Redirect URI to `https://your-domain.tld/oauth2/callback`
GRIST_OIDC_IDP_ISSUER=https://accounts.google.com
GRIST_OIDC_IDP_CLIENT_ID=
GRIST_OIDC_IDP_CLIENT_SECRET=
GRIST_OIDC_IDP_SKIP_END_SESSION_ENDPOINT=true

# Set to your Google Account email
# Otherwise, you will get "Access Denied" when logging in
# See: https://community.getgrist.com/t/automatically-add-new-users-to-an-organization/2001/10?u=thai
GRIST_DEFAULT_EMAIL=

# Set up cloud storage to reduce storage size on your VPS
# and offload attachments to an object storage service.
# For `GRIST_DOCS_MINIO_ENDPOINT`, do not include the protocol; only the hostname
# See: https://support.getgrist.com/self-managed/
GRIST_DOCS_MINIO_ACCESS_KEY=
GRIST_DOCS_MINIO_SECRET_KEY=
GRIST_DOCS_MINIO_BUCKET_REGION=
GRIST_DOCS_MINIO_BUCKET=
GRIST_DOCS_MINIO_ENDPOINT=
GRIST_EXTERNAL_ATTACHMENTS_MODE=snapshots

# Enable service accounts
# See: https://dt.in.th/GristServiceAccounts
GRIST_ENABLE_SERVICE_ACCOUNTS=true
```

## Docker Compose configuration

`docker-compose.yml`

```yaml
services:
  grist:
    image: gristlabs/grist
    restart: unless-stopped
    env_file: stack.env
    ports:
      - '127.0.0.1:8484:8484'
    volumes:
      - 'data:/persist'
volumes:
  data:
```

## Tested object storage services

- ✅ AWS S3
- ✅ Linode Object Storage
- ❌ Google Cloud Storage (via HMAC keys and XML API)
  - You can create and save Grist documents, but once the Grist container is restarted, the document cannot be reopened. The error message is: “Error accessing document — You can try reloading the document, or using recovery mode. Recovery mode opens the document to be fully accessible to owners, and inaccessible to others. It also disables formulas. [MinIOExternaiStorage.head did not get expected fields].” However, recovery mode does not work either.
