---
public: true
title: A survey of JWT storage locations in client-side app SDKs
devto: https://dev.to/dtinth/a-survey-of-jwt-storage-locations-in-client-side-app-sdks-5n2
---

The question about where to store [JWTs](JWT) (and access tokens in general) is a common one where there seems to be no consensus among developers.[^wherejwt]

[^wherejwt]:
    - <https://twitter.com/swyx/status/1133780714988736512>
    - <https://www.reddit.com/r/webdev/comments/bpcleu/so_whats_the_issue_with_jwts_in_localstorage/>
    - <https://twitter.com/wesbos/status/1310637597480411138>
    - <https://stackoverflow.com/questions/44133536/is-it-safe-to-store-a-jwt-in-localstorage-with-reactjs>

Some believe that JWTs should never ever be stored in `localStorage`, while others believe that it’s okay to store them there. Each side has their own reasonings and explanations for their beliefs. It has been discussed at length, and in my opinion for far too long now.[^e]

[^e]: Whenever the topic of token storage is tangentially touched on, it seems someone has to declare “never store JWTs in localStorage” and derail the conversation. Happens so frequently, and it is fascinating to see the length people will sometimes go to to prove their point. When I pointed out about our defenses against XSS and untrusted assets, I got a reply “but the user may install a malicious software that can read storage. Here I created an extension that reads the localStorage of the website. See? localStorage bad.”

Rather than adding to this never-ending debate, let’s instead take a look at popular SDKs to see how they are storing their JWTs.

Rather than adding to this never-ending debate, let’s instead take a look at popular SDKs to see how they are helping single page applications (SPA) store their JWTs. Here we go!

---

## Auth0

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hamr6e5eb8e849qlwl8s.png)

- For SPAs, Auth0 does not store a JWT in client-side storage at all.

- Instead, Auth0 SDK embeds a hidden `<iframe>` which performs the [Authorization Code Flow with Proof Key for Code Exchange (PKCE)](https://auth0.com/docs/get-started/authentication-and-authorization-flow/authorization-code-flow-with-proof-key-for-code-exchange-pkce) in conjection with [Silent Authentication](https://auth0.com/docs/authenticate/login/configure-silent-authentication). This flow is performed every time the SPA is loaded, so the JWT is not persisted at any storage location. Additionally, token requests are performed in Web Workers, providing additional layer of security.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/c9nxznv539ozb86cwthp.png)

- The signed in state is maintained inside the `<iframe>` using `HttpOnly` cookies. None of the cookies are JWT.

- After the authentication flow is complete, then the `<iframe>` is removed from the DOM.

- Safari with Intelligent Tracking Protection blocks third-party cookies, which can [break the Silent authentication flow](https://auth0.com/docs/troubleshoot/authentication-issues/renew-tokens-when-using-safari). To work around this, you can [set up custom domains for Auth0 (requires a paid plan)](https://auth0.com/docs/customize/custom-domains) so that Auth0’s session cookies become a first-party one. Alternatively, the [Refresh Token Rotation functionality can be used](https://auth0.com/docs/troubleshoot/authentication-issues/renew-tokens-when-using-safari#workarounds), but then your signed-in state would be lost when you refresh the page, [unless you opt to store the tokens in `localStorage`](https://auth0.com/docs/libraries/auth0-single-page-app-sdk#change-storage-options).

---

## AWS Amplify

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zjocjrn77pcmqslesgbl.png)

- ID tokens, access tokens, and refresh tokens are stored in `localStorage`

- They are all JWTs. You know because they start with `eyJ`. They are RS256 signed.

---

## Firebase Auth

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cjuw4roacyycnee15xu8.png)

- [Firebase](Firebase) Auth stores the access token and refresh tokens in IndexedDB [by default](https://firebase.google.com/docs/auth/web/auth-state-persistence).

- The `accessToken` is a RS256-signed JWT. It also functions as an ID token (and are referred to as such in the documentation). Using RS256 JWT is convenient because [third-party apps can verify the ID token](https://firebase.google.com/docs/auth/admin/verify-id-tokens) using [Firebase’s public keys](https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com) without having to share any secret keys.

- Meanwhile, the refresh token is an opaque string.

---

## Supabase

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2wdyp4u9ifkq1306hztu.png)

- Supabase stores the access token and refresh token in `localStorage`.

- The access token is a HS256-signed JWT, while the refresh token is an opaque string.

---

## Conclusions

In conclusion, different auth SDKs implemented different default behaviors for storing tokens.

It is important to consider the context around choices made by these SDKs. Just because a few popular SDKs store tokens in `localStorage` doesn’t automatically mean that doing the same in our custom implementations will give us a secure authentication scheme; we also have to look at how these SDKs help developers protect the tokens from misuse.

If you have more examples to add, feel free to comment!
