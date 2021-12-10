---
title: "Fast Custom Integration Docs: Authentication"
description: Getting Started with Fast with a Custom Integration! Learn about authentication.
keywords: Fast authentication

enableToc: true
redirectFrom:
  - /developer-portal/fast-api-reference-authentication/
---

# Fast Custom Integration Authentication

Fast's Custom Integration is intended for merchants who have custom built their own eCommerce site and want to use Fast checkout to eliminate the friction around checkout for their users and reduce cart abandonment!

Custom Integrations with Fast require some development work in order to properly ingest calls from Fast to your system for new orders or updates, as well as occasional calls to Fast for things like refunds. Our technical integration docs can be found below*.*

# Onboarding

**Merchant API URL**

We will ask you to provide your "Merchant API URL". This URL should look something like: `https://api.your-store.com`.

This is the base URL we will use for sending API requests for the defined APIs that need to be implemented as part of this integration. For example, if you have used `https://api.your-store.com` as your Merchant URL then when we call the defined `/fast/v1/create` API we will send the request as `https://api.your-store.com/fast/v1/create`

**API Access Token**

We will generate an API Access Token during onboarding. You can view this token via the Fast UI once, so be sure to copy and store this in a safe place where you normally store your credentials (i.e. AWS Secret Store). This API Token will be used to authenticate your calls to Fast, discussed below.

**App ID**

We will assign your app a unique identifier during onboarding. This ID will be included in every call you make to Fast in the Headers, discussed below.

**App Secret**

This secret is only required for programmatically revoking or rotating your API Access Token via our APIs. We also provide the option to perform those actions in the Fast UI. If you are planning on revoking or rotating via the APIs reach out to Fast customer support and they will be able to provide you with the App Secret to perform this action programmatically.

# Authenticating Calls to Fast

When sending an API request to Fast, you will need to include your API Access Token and your App ID in the Headers of your call

```html
X-Fast-App: <app_id> X-Fast-App-Auth: <access_token></access_token></app_id>
```

For each API call you make to Fast, we will ask that you include the `app_id` in the headers as `X-Fast-App`. We will ensure that the `access_token` used in the headers (as `X-Fast-App-Auth`) matches the expected `access_token` for that app.

# Access Token Revocation

The initial access token provided during onboarding does not have an expiration, and is valid to use unless it is explicitly revoked. We provide two different methods for updating your access token.

**Rotating Your Token**

Rotating your token sets a **48 hour expiry for your current token**, and generates a new token. During the expiry window both the old and new API Tokens will be considered valid by Fast. Once the expiry window is over, the old API Token will cease to be valid and Fast will reject all calls using that token as Unauthorized.

You can rotate your token via the Fast dashboard, or programmatically via the `/v1/apps/<app_id>/token/rotate` API.

```json
POST /v1/apps/<app_id>/token/rotate

Request
{
  "app_secret": "daQT6XwpETlaZ26pcpYjXO5omzB8NgOYqkhfrITdKI4"
}

Response
{
    "new_access_token": "81ea246c6811c669fcdcbdffb3601b84c846d57d11",
    "old_token_expiry": 1613513984
}
```

**Immediately Revoking Your Token**

Revoking your token is provided as an option in case your existing API Token has been compromised. This will cause all calls to Fast using the old token to immediately be rejected as Unauthorized, and should only be used in situations where it is absolutely necessary.

You can revoke your token via the Fast dashboard, or programmatically via the `/v1/apps/<app_id>/revoke` and `/v1/apps/<app_id>/create` API. Both APIs require that the `app_secret` be passed as part of the body of the request

```json
POST /v1/apps/<app_id>/token/revoke

Request
{
  "app_secret": "daQT6XwpETlaZ26pcpYjXO5omzB8NgOYqkhfrITdKI4",
    "access_token": "81ea246c6811c669fcdcbdffb3601b84c846d57d11eaaedcf5bb020a96f22d05"
}

Response
{
    "expired_at": 1613513984
}
```

```json
POST /v1/apps/<app_id>/token/create

Request
{
  "app_secret": "daQT6XwpETlaZ26pcpYjXO5omzB8NgOYqkhfrITdKI4"
}

Response
{
    "access_token": "81ea246c6811c669fcdcbdffb3601b84c846d57d11eaaedcf5bb020a96f22d05"
}
```

# Validating Calls From Fast

In order to allow you to verify that calls to your server are in fact, from Fast, we will be including a signed JWT with our calls as the Authorization header of the call. The JWT will be signed via RSA256 with one of Fast's private keys. The key used for signing will be referenced by the key identified (`kid`) in the header of the JWT. We provide an API for fetching Fast's JWKs (`/v1/oauth2/jwks`) which provides a map of Key Identifiers to the public key needed to verify the signature.

**Headers**

```python
Authorization: Bearer <jwt_token>
```

**JWT Format**

```json
HEADER
{
 "alg": "RSA256",
 "kid": "vK-TF3bs-EY7zyp_Hke8-1Md-NrFeq0WY45HECHzqSE" // the Key Identifier to determine the public key to verify the signature
 "typ": "JWT"
}

PAYLOAD
{
    "iss": "api.fast.co", // should also be the origin of the request
    "aud": "a2c74070-c22a-42e8-a0b2-adce2210a3a7", // your app id
    "exp": "1611362912", // UNIX time of expiration. Must be less than current time
  "iat": "1611251846" // UNIX time of issue
}
```

**Example Snippet**

Depending on your tech stack, there are a variety of open source libraries available for both retrieving signing keys and verifying the JWT. Below is an example snippet for NodeJS, using the [`jwks-rsa` library](https://github.com/auth0/node-jwks-rsa) for retrieving the signing token, and the [`jsonwebtoken` library](https://www.npmjs.com/package/jsonwebtoken) for verifying the token.

```jsx
import jsonwebtoken from 'jsonwebtoken';
import JwksRsa from 'jwks-rsa';
import { APP_ID } from '@config/config'

interface IFastPayloadData {
  iat:         number;
  exp:         number;
  aud:         string;
  iss:         string;
}

export class JwtService {

  private readonly fastJwksClient: JwksRsa.JwksClient;

  constructor() {
      this.fastJwksClient = JwksRsa({
          cache: true,
          jwksRequestsPerMinute: 6, // Limit JWKS network calls to 6 a minute
          cacheMaxEntries: 2, // no more than two signing keys will be active at a time
          cacheMaxAge: 21600, // 6 hour caching period
          jwksUri: 'https://api.fast.co/v1/oauth2/jwks'
      });
  }

    /**
   * Decode and verify Fast JWT
   *
   * @param jwt
   */
‍
  public async verifyFastJwt(jwt: string): Promise<ifastpayloaddata> {</ifastpayloaddata>
      const token = jsonwebtoken.decode(jwt, {complete: true}) as { [key: string]: any}
      // throws if the key ID can’t be found
      const key = await this.fastJwksClient.getSigningKeyAsync(token.kid)
      // throws if the signature is invalid, token is expired, algorithm doesn’t match,
      // or audience doesn’t match the app ID
      jsonwebtoken.verify(jwt, key.getPublicKey(), {
          algorithms: ['RS256'],
          audience: APP_ID,
      });
      return token.payload as IFastPayloadData
  }
}
```
