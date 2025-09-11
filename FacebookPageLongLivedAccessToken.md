---
public: true
title: Getting a long-lived access token for a Facebook page
---

:::lead
To get a **long-lived access token for a Facebook page that does not expire**:
:::

## Overview

![](https://im.dt.in.th/ipfs/bafybeiehqutj5geel4urecqsqou4awpfe6nounmksqlmn4ctlrwln2atmm/image.webp)

1. Get a “short-lived user access token”
2. Exchange it for a “long-lived user access token”
3. Use the “long-lived user access token” to obtain a “long-lived page access token”

## Get a “short-lived user access token”

1. Go to [Graph API Explorer](https://developers.facebook.com/tools/explorer/)

2. Under "Permissions", select `pages_manage_posts` and `pages_manage_engagement`

3. Click **Generate Access Token**. You will be prompted to log in and grant permissions. Select the pages you want to use the app with. Once authorized, you will get a user access token that expires in 1 hour.

## Exchange it for a “long-lived user access token”

4. Copy the short-lived user access token

5. Go to [Access Token Debugger](https://developers.facebook.com/tools/debug/accesstoken/).

6. Paste the access token and click **Debug**.

7. Click **Extend Access Token**. This will generate a long-lived access token that expires in 60 days.

## Get a “long-lived page access token”

8. Copy the long-lived access token

9. Paste it back into the Graph API Explorer.

10. Using the explorer, perform a request: GET `me/accounts`. You will find the page ID, page name, and access token.

Since the access token is created from the long-lived access token, it will not expire (even if the user access token expires after 60 days).
