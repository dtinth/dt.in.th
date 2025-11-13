---
title: PocketBase with LINE Login
public: true
---

# PocketBase with LINE Login

To set up [PocketBase](PocketBase) to use LINE Login as an OAuth2 identity provider for authentication, first create a LINE Login channel in the [LINE Developers Console](https://developers.line.biz/console/).

- Note the **Channel ID** and **Secret** from the LINE Login channel settings.
  - This will be the **Client ID** and **Client Secret** in PocketBase OAuth2 configuration.
- Set the **Callback URL** in LINE Developers Console to `https://yourdomain.com/api/oauth2-redirect`
  - Replace `yourdomain.com` with your PocketBase domain.

## Update `users` collection fields

1. **Remove email validation.** Edit the `users` collection and remove the “non-empty” validation requirement from the `email` field. This allows users to sign up with LINE without providing an email address.

2. **Add `externalId` field.** Add a new _text_ field to the `users` collection to store the LINE user ID.

3. **Create a unique index on `externalId`.** This is to ensure no two users can have the same LINE user ID.

## Set up OAuth2 configuration

Again in `users` collection settings, go to the **Options** tab, and under **Auth Methods**, enable **OAuth2** and configure the following:

1. **Add the `oidc` provider.** Configure the provider with these settings:

   | Setting                  | Value                                          |
   | :----------------------- | :--------------------------------------------- |
   | **Auth URL**             | `https://access.line.me/oauth2/v2.1/authorize` |
   | **Token URL**            | `https://api.line.me/oauth2/v2.1/token`        |
   | **Fetch user info from** | User info URL                                  |
   | **User info URL**        | `https://api.line.me/oauth2/v2.1/userinfo`     |
   | **Support PKCE**         | ✓ (enabled)                                    |

2. **Set up field mapping.** Expand **Optional users create fields map** section and map OAuth2 response fields to PocketBase user fields:

   - `OAuth2 full name` → `name`
   - `OAuth2 avatar` → `avatar`
   - `OAuth2 id` → `externalId`
