---
public: true
title: Running Grist with Google Sign-In and External Storage on Docker Compose
---

# Running Grist with Google Sign-In and External Storage on Docker Compose

This is how I [self-host](https://support.getgrist.com/self-managed/) [Grist](Grist) on Docker (through [Portainer](https://www.portainer.io/)) with:

- Google sign-in
- Object storage for document snapshots and attachments

`stack.env`

```sh
# Put a random string here
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
# See: https://support.getgrist.com/self-managed/
GRIST_DOCS_MINIO_ACCESS_KEY=
GRIST_DOCS_MINIO_SECRET_KEY=
GRIST_DOCS_MINIO_BUCKET_REGION=
GRIST_DOCS_MINIO_BUCKET=
GRIST_DOCS_MINIO_ENDPOINT=
GRIST_EXTERNAL_ATTACHMENTS_MODE=snapshots
```

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
      - './persist:/persist'
```
