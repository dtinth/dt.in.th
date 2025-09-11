---
public: true
title: Some notes on Supabase Auth
created: 2024-08-19
---

Some notes on [Supabase](Supabase) Auth.

## SPA auth flow (implicit)

Supabase actually supports both [implicit flow](https://supabase.com/docs/guides/auth/sessions/implicit-flow) and [PKCE flow](https://supabase.com/docs/guides/auth/sessions/pkce-flow). Implicit flow is the default for SPAs. However some people prefer PKCE flow due to its extra security benefits.

1. SDK redirects to GoTrue server `/auth/v1/authorize?provider=…`.

2. GoTrue server performs the auth flow with the IDP.

3. GoTrue server redirects back to the SPA with these hash params:

   - `access_token`
   - `expires_at`
   - `expires_in`
   - `provider_token`
   - `refresh_token`
   - `token_type`

4. When the SDK running on the SPA is [initialized](https://github.com/supabase/auth-js/blob/v2.64.4/src/GoTrueClient.ts#L306), it [reads these hash params](https://github.com/supabase/auth-js/blob/v2.64.4/src/GoTrueClient.ts#L1389), [verifies the access token validity](https://github.com/supabase/auth-js/blob/v2.64.4/src/GoTrueClient.ts#L1475), constructs a [session](https://github.com/supabase/auth-js/blob/v2.64.4/src/lib/types.ts#L228), and [saves it to local storage](https://github.com/supabase/auth-js/blob/v2.64.4/src/GoTrueClient.ts#L336).

## Impersonation

During local development, it can be useful to impersonate a user for testing purposes. To do this, we can use the [Generate Link API](https://supabase.com/docs/reference/self-hosting-auth/generates-an-email-action-link) to generate a magic link for the user, then extract the access token from the link.

```
POST https://___.supabase.co/auth/v1/admin/generate_link
Authorization: Bearer <service_role_key>
Apikey: <anon_key>
Content-Type: application/json

{
  "type": "magiclink",
  "email": "email@domain.com"
}
```

Response will contain an `action_link`. Open this link in the browser to impersonate the user. Alternatively, make a request to this link and inspect the redirected URL to extract the `access_token` and `refresh_token`.

## Getting user info

```
GET https://___.supabase.co/auth/v1/user
Apikey: <anon_key>
Authorization: Bearer <access_token>
```

Example result:

```json
{
  "id": "ffffffff-ffff-4fff-ffff-ffffffffffff",
  "aud": "authenticated",
  "role": "authenticated",
  "email": "email@domain.com",
  "email_confirmed_at": "2024-04-08T17:47:05.269439Z",
  "phone": "",
  "confirmed_at": "2024-04-08T17:47:05.269439Z",
  "last_sign_in_at": "2024-08-19T19:26:52.897021Z",
  "app_metadata": {
    "provider": "keycloak",
    "providers": ["keycloak"]
  },
  "user_metadata": {
    "email": "email@domain.com",
    "email_verified": false,
    "full_name": "Thai Pangsakulyanont",
    "iss": "https://creatorsgarten.org",
    "name": "Thai Pangsakulyanont",
    "phone_verified": false,
    "provider_id": "ffffffffffffffffffffffff",
    "sub": "ffffffffffffffffffffffff"
  },
  "identities": [
    {
      "identity_id": "11111111-1111-4111-1111-111111111111",
      "id": "ffffffffffffffffffffffff",
      "user_id": "ffffffff-ffff-4fff-ffff-ffffffffffff",
      "identity_data": {
        "email": "email@domain.com",
        "email_verified": false,
        "full_name": "Thai Pangsakulyanont",
        "iss": "https://creatorsgarten.org",
        "name": "Thai Pangsakulyanont",
        "phone_verified": false,
        "provider_id": "ffffffffffffffffffffffff",
        "sub": "ffffffffffffffffffffffff"
      },
      "provider": "keycloak",
      "last_sign_in_at": "2024-04-08T17:47:05.263155Z",
      "created_at": "2024-04-08T17:47:05.263206Z",
      "updated_at": "2024-08-19T19:26:52.879341Z",
      "email": "email@domain.com"
    }
  ],
  "created_at": "2024-04-08T17:47:05.260547Z",
  "updated_at": "2024-08-19T19:26:52.912242Z",
  "is_anonymous": false
}
```

## Guidance for creating a separate API that uses Supabase auth

Let’s say Supabase auth is used to manage user session in the SPA, so that we don’t have to implement our own auth system.

However, we want to create a separate API that uses Supabase access token for authentication, but we want it somewhat decoupled from Supabase.

To do this, the app can exchange a Supabase access token for a stateless JWT token that can be used in subsequent requests to the API.
