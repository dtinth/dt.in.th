---
title: GitHub Actions + GCP Authentication without Secrets
created: 2026-01-17
public: true
---

# GitHub Actions + GCP Authentication without Secrets

[Workload Identity Federation](https://docs.cloud.google.com/iam/docs/workload-identity-federation) lets [GitHub Actions](GitHubActions) authenticate with [Google Cloud](GoogleCloud) without storing [service account](GoogleCloudServiceAccount) keys. Instead, [GitHub](GitHub)'s [OpenID Connect (OIDC) token](JWT) is exchanged for a short-lived GCP access token. This way, there is no secrets to rotate, as tokens are short-lived and generated on demand

The following placeholders are used in the commands below:

<!-- prettier-ignore -->
| Placeholder | Description |
| --- | --- |
| `PROJECT_ID` | GCP project ID (e.g. `playground-12345`) |
| `PROJECT_NUMBER` | GCP project number (e.g. `123456789012`) obtained from step 1 |
| `GITHUB_ORG` | GitHub organization or user name |
| `GITHUB_REPO` | GitHub repository name |

1. Obtain the project number:

   ```bash
   gcloud projects describe PROJECT_ID --format="value(projectNumber)"
   ```

2. [Create a Workload Identity Pool](https://docs.cloud.google.com/iam/docs/manage-workload-identity-pools-providers#create-pools)

   ```bash
   gcloud iam workload-identity-pools create "github" \
     --project="PROJECT_ID" \
     --location="global" \
     --display-name="GitHub Actions Pool"
   ```

3. [Create a Workload Identity Provider](https://docs.cloud.google.com/iam/docs/manage-workload-identity-pools-providers#manage-providers)

   ```bash
   gcloud iam workload-identity-pools providers create-oidc "my-repo" \
     --project="PROJECT_ID" \
     --location="global" \
     --workload-identity-pool="github" \
     --display-name="GitHub Actions Provider" \
     --attribute-mapping="google.subject=assertion.sub,attribute.actor=assertion.actor,attribute.repository=assertion.repository,attribute.repository_owner=assertion.repository_owner" \
     --attribute-condition="assertion.repository_owner == 'GITHUB_ORG'" \
     --issuer-uri="https://token.actions.githubusercontent.com"
   ```

   The `--attribute-condition` restricts access to the specified GitHub org/user. With these attribute mappings, you can use them as a [principal identifier](https://docs.cloud.google.com/iam/docs/principal-identifiers) when granting access to GCP resources.

   For example, to only allow a specific repository (`GITHUB_ORG/GITHUB_REPO`) to access a GCP resource, you can grant access to the principal identifier:

   ```
   principalSet://iam.googleapis.com/projects/PROJECT_NUMBER/locations/global/workloadIdentityPools/github/attribute.repository/GITHUB_ORG/GITHUB_REPO
   ```

4. [Create a Service Account](https://docs.cloud.google.com/iam/docs/service-accounts-create)

   ```bash
   gcloud iam service-accounts create "SERVICE_ACCOUNT_NAME" \
     --project="PROJECT_ID" \
     --display-name="GitHub Actions - my-repo"
   ```

5. [Grant Permissions to the Service Account](https://docs.cloud.google.com/iam/docs/granting-changing-revoking-access)

   ```bash
   gcloud projects add-iam-policy-binding PROJECT_ID \
     --member="serviceAccount:SERVICE_ACCOUNT_NAME@PROJECT_ID.iam.gserviceaccount.com" \
     --role="roles/bigquery.dataEditor" \
     --condition=None
   ```

6. [Allow GitHub to Impersonate the Service Account](https://docs.cloud.google.com/iam/docs/manage-access-service-accounts)

   ```bash
   gcloud iam service-accounts add-iam-policy-binding \
     "SERVICE_ACCOUNT_NAME@PROJECT_ID.iam.gserviceaccount.com" \
     --project="PROJECT_ID" \
     --role="roles/iam.workloadIdentityUser" \
     --member="principalSet://iam.googleapis.com/projects/PROJECT_NUMBER/locations/global/workloadIdentityPools/github/attribute.repository/GITHUB_ORG/GITHUB_REPO"
   ```

7. [Enable the IAM Credentials API](https://console.cloud.google.com/apis/library/iamcredentials.googleapis.com)

   ```bash
   gcloud services enable iamcredentials.googleapis.com --project=PROJECT_ID
   ```

8. [Use in GitHub Actions](https://github.com/google-github-actions/auth)

   ```yaml
   jobs:
     my-job:
       runs-on: ubuntu-latest
       permissions:
         contents: read
         id-token: write
       steps:
         - uses: actions/checkout@v4
         - uses: google-github-actions/auth@v2
           with:
             workload_identity_provider: projects/PROJECT_NUMBER/locations/global/workloadIdentityPools/github/providers/my-repo
             service_account: SERVICE_ACCOUNT_NAME@PROJECT_ID.iam.gserviceaccount.com
         # Now authenticated with GCP
   ```

   The `id-token: write` permission is required for the OIDC token exchange.
