---
title: 'Deploying Firebase Hosting from GitHub Actions with no stored secrets'
public: true
created: 2026-07-10
---

# Deploying Firebase Hosting from GitHub Actions with no stored secrets

When deploying from [GitHub Actions](GitHubActions) to [Firebase](Firebase) Hosting, normally you would have to create a service account key, and store it as action secrets. This introduced a long-term secret to manage. But thanks to [Workload Identity Federation between GitHub Actions and Google Cloud](GitHubActionsGCP), we can have GitHub Actions deploy to Firebase Hosting with:

- No service account keys
- No GitHub Actions secrets

## Prerequisites

You need:

- Firebase project ID
- GitHub repository name

## Cloud Shell setup script

This step configures your Google Cloud project to trust GitHub Actions workflow runs from your repository. Run the following commands in [Cloud Shell](https://console.cloud.google.com/?cloudshell=true).

Setting up variables:

```bash
PROJECT_ID=your-project-id
PROJECT_NUMBER=$(gcloud projects describe $PROJECT_ID --format='value(projectNumber)')
REPO=your-org/your-repo
```

Provisioning things:

```bash
# Name of the service account
SA=github-deployer

# Enable APIs - otherwise you will get SERVICE_DISABLED error
gcloud services enable iamcredentials.googleapis.com firebasehosting.googleapis.com \
  --project=$PROJECT_ID

# Create a service account with no key
gcloud iam service-accounts create $SA --project=$PROJECT_ID

gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member="serviceAccount:$SA@$PROJECT_ID.iam.gserviceaccount.com" \
  --role="roles/firebasehosting.admin"

# Create a Workload Identity pool
gcloud iam workload-identity-pools create github \
  --project=$PROJECT_ID --location=global \
  --display-name="GitHub Actions"

# Create a GitHub OIDC provider, fenced to this repo
gcloud iam workload-identity-pools providers create-oidc github \
  --project=$PROJECT_ID --location=global \
  --workload-identity-pool=github \
  --issuer-uri="https://token.actions.githubusercontent.com" \
  --attribute-mapping="google.subject=assertion.sub,attribute.repository=assertion.repository" \
  --attribute-condition="assertion.repository=='$REPO'"

# Let only that repo impersonate the deployer
gcloud iam service-accounts add-iam-policy-binding "$SA@$PROJECT_ID.iam.gserviceaccount.com" \
  --project=$PROJECT_ID \
  --role="roles/iam.workloadIdentityUser" \
  --member="principalSet://iam.googleapis.com/projects/$PROJECT_NUMBER/locations/global/workloadIdentityPools/github/attribute.repository/$REPO"
```

## GitHub Actions workflow

<div v-pre>

```yaml
permissions:
  contents: read
  id-token: write # lets the runner mint the OIDC token

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - id: auth
        uses: google-github-actions/auth@v3
        with:
          workload_identity_provider: projects/PROJECT_NUMBER/locations/global/workloadIdentityPools/github/providers/github
          service_account: github-deployer@PROJECT_ID.iam.gserviceaccount.com
          token_format: access_token # firebase can't use the WIF file
          create_credentials_file: false

      - uses: actions/setup-node@v6
        with: { node-version: 22 }

      - name: Deploy to live channel
        env:
          FIREBASE_TOKEN: ${{ steps.auth.outputs.access_token }}
        run: npx --yes firebase-tools@latest deploy --only hosting --project PROJECT_ID --non-interactive
```

</div>

## Why each setting is there

<!-- prettier-ignore -->
| Setting | Why it's needed | Skip it and... |
| --- | --- | --- |
| `iamcredentials.googleapis.com` enabled | Impersonating the service account calls the IAM Credentials API | every run 403s with `SERVICE_DISABLED`, before Firebase is ever touched |
| `--attribute-condition="assertion.repository=='$REPO'"` | First fence: restricts which repo's tokens Google will federate at all | any GitHub repo, in any org, could ask this provider for a token |
| `principalSet://.../attribute.repository/$REPO` binding | Second fence: only that repo's federated identity may impersonate the SA | federation could succeed but impersonation would still be denied |
| `roles/firebasehosting.admin` on the SA | Minimum role that can deploy Hosting sites and preview channels | `firebase deploy` fails with a permission error |
| `id-token: write` in workflow `permissions` | Lets the runner mint the OIDC token in the first place | `auth@v3` fails immediately — there's no token to federate |
| `token_format: access_token` | The Firebase CLI's auth layer only understands classic access tokens, not the `external_account` credentials file `auth` writes by default | `firebase-tools` fails with `Failed to authenticate, have you run firebase login?`, even though the GCP auth step itself succeeded |
| `create_credentials_file: false` | No credentials file is needed once you're passing `access_token` directly | harmless if left on — just an unused file `firebase-tools` ignores |
| `FIREBASE_TOKEN` env var | This is the interface `firebase-tools` actually checks for CI auth | the CLI falls back to interactive login, which hangs in Actions |

The two fences (attribute condition + `principalSet` binding) are both keyed on `$REPO`, which is why it's safe to commit the provider path and service account email straight into the workflow YAML — they're identifiers, not secrets. See [GitHubActionsGCP](GitHubActionsGCP) for more on that.
