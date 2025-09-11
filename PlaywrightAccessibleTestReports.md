---
title: 'Making Playwright test reports easily accessible from GitHub Actions'
public: true
---

The default [Playwright](Playwright) [GitHub Actions](GitHubActions) workflow uploads HTML reports as workflow artifacts. This is trivial to set up, but viewing them is inconvenient[^inconvenience]. A solution is to upload the report to an Object Storage service for direct browser access with clickable URLs that work immediately.

[^inconvenience]: I had to download a zip file, extract it, and view locally, which works fine until I want to view traces, because Playwright’s [Trace Viewer](https://playwright.dev/docs/trace-viewer) doesn’t work with the `file://` protocol and require running [`npx playwright show-report`](https://playwright.dev/docs/test-cli#show-report) to launch a local web server.

## Implementation

Here's the [GitHub Actions](GitHubActions) workflow addition:

<div v-pre>

```yaml
- name: Publish test results to object storage
  continue-on-error: true
  run: |
    # Install Rclone
    curl https://rclone.org/install.sh | sudo bash

    # Upload playwright report
    rclone copy playwright-report/ publish:$PUBLISH_BUCKET/$PUBLISH_KEY/playwright-report/ --progress

    # Print report URL for CI logs
    REPORT_URL="$REPORT_URL_PREFIX/$PUBLISH_KEY/playwright-report/index.html"
    echo "📊 Test report published: $REPORT_URL"

    # Generate preview URL and add to step summary
    echo "## 📊 Test Results Published" >> $GITHUB_STEP_SUMMARY
    echo "" >> $GITHUB_STEP_SUMMARY
    echo "**Branch:** ${{ github.ref_name }}" >> $GITHUB_STEP_SUMMARY
    echo "**Commit:** ${{ github.sha }}" >> $GITHUB_STEP_SUMMARY
    echo "**Run:** ${{ github.run_id }}-${{ github.run_attempt }}" >> $GITHUB_STEP_SUMMARY
    echo "" >> $GITHUB_STEP_SUMMARY
    echo "🔗 **[View Test Report]($REPORT_URL)**" >> $GITHUB_STEP_SUMMARY
    echo "" >> $GITHUB_STEP_SUMMARY
    echo "📦 Fallback: Download artifacts below if S3 link is unavailable" >> $GITHUB_STEP_SUMMARY
  env:
    PUBLISH_BUCKET: ghartifacts
    PUBLISH_KEY: ${{ github.repository }}/${{ github.run_id }}-${{ github.run_attempt }}
    REPORT_URL_PREFIX: https://ghartifacts.t3.storage.dev
    RCLONE_CONFIG_PUBLISH_TYPE: s3
    RCLONE_CONFIG_PUBLISH_PROVIDER: Other
    RCLONE_CONFIG_PUBLISH_REGION: auto
    RCLONE_CONFIG_PUBLISH_ACL: public-read
    RCLONE_CONFIG_PUBLISH_ENDPOINT: https://t3.storage.dev
    RCLONE_CONFIG_PUBLISH_ACCESS_KEY_ID: your_access_key_id
    RCLONE_CONFIG_PUBLISH_SECRET_ACCESS_KEY: ${{ secrets.RCLONE_CONFIG_PUBLISH_SECRET_ACCESS_KEY }}
  if: always() && hashFiles('playwright-report/**/*') != ''
```

This generates a [job summary](https://github.blog/news-insights/product-news/supercharging-github-actions-with-job-summaries/) like this:

![Screenshot of a GitHub Actions job summary displaying test results published for the master branch. There is a prominent heading Test Results Published with a bar chart icon. Below, a blue link labeled View Test Report is shown, followed by a fallback message to download artifacts if the S3 link is unavailable. The overall tone is informative and professional, set against a dark-themed interface.](https://im.dt.in.th/ipfs/bafybeigbp2stix4pnrtlwbidyc4e2mnbjfu3i5omg4z4z2bxo7dyjblp5y/Screen%20Shot%202025-08-29%20at%2003.22.31.webp)

</div>

## Object storage options

As of August 2025, here are some S3-compatible storage providers I use:

**International:**

- **[Tigris](https://www.tigrisdata.com/)** - free tier without billing setup, zero egress fees, fine-grained access keys
- **[Linode Object Storage](https://www.linode.com/docs/guides/platform/object-storage/)** and **[DigitalOcean Spaces](https://www.digitalocean.com/products/spaces)** both start at $5/month for 250 GiB of storage
- **[Cloudflare R2](https://www.cloudflare.com/developer-platform/products/r2/)** - zero egress fees, generous free tier but requires billing setup

**Thailand region:**

- **[NIPA Cloud](https://nipa.cloud/products/nipa-cloud-iaas/nipa-space/object-storage)** - prepaid, has 2 regions (Bangkok and Nonthaburi)
- **[Inspace Cloud](https://inspace.cloud/index.php/services/s3-storage/)** - prepaid, unmetered bandwidth, but access keys can access all buckets

In this example, I use Tigris for open source project reports.

## Lifecycle management

To avoid accumulating storage usage indefinitely, set up lifecycle policies or lifecycle rules in your object storage provider to automatically delete old reports after a certain period.
