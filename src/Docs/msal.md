Auth Request - Get
https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize?client_id=xxx&responsetype=code&redirect_uri=http://localhost&response_mode=query&scope=user.read&state=demo

https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize?client_id=167b7ea7-3661-4d63-8e1e-9218746533c0&redirect_uri=http://localhost&scope=user.read&response_type=code&response_mode=query

Authorization Response - Get
http://localhost?code=xxxx&state=demo

Acquire a bearer token - post

1. login

# Azure sdk for js

# InteractiveBrowserCredential

https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/identity/identity/samples/AzureIdentityExamples.md

```JavaScript
function withInteractiveBrowserCredential() {
  const credential = new InteractiveBrowserCredential({
    tenantId: "<YOUR_TENANT_ID>",
    clientId: "<YOUR_CLIENT_ID>"
  });

  const client = new SecretClient("https://key-vault-name.vault.azure.net", credential);
}
```

## Azure sdk for JAvascript reference

[Azure Identity client library for JavaScript - Version 2.0.5](https://docs.microsoft.com/en-us/javascript/api/overview/azure/identity-readme?view=azure-node-latest)

[Microsoft Authentication Library for React (msal-react)](https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/lib/msal-react)

```
https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize?scope=https://management.core.windows.net//.default openid profile offline_access&response_type=code&client_id=1950a258-227b-4e31-a9cf-717495945fc2&redirect_uri=http://localhost:8401/&claims={"access_token":{"xms_cc":{"values":["CP1"]}}}&client-request-id=bf4303c1-7f05-4e36-9be6-cb18b7719d54&x-client-SKU=MSAL.Desktop&x-client-Ver=4.30.1.0&x-client-CPU=x64&x-client-OS=Windows 10 Enterprise&prompt=select_account&code_challenge=zNzE--5fS8wjxxvi1OsmOZRN6eZxlOGVXIWSprBcB3k&code_challenge_method=S256&state=c69919ce-31c6-4f73-be2d-c618fb6bf023f8b4e469-a7e5-4bff-b30f-670083a6bf53&sso_nonce=O.eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSJ9.eyJhdWQiOiJ1cm46bWljcm9zb2Z0OnJ0OmNoYWxsZW5nZSIsImlzcyI6Imh0dHBzOi8vbG9naW4ubWljcm9zb2Z0b25saW5lLmNvbSIsImlhdCI6MTY2MjEwODg1OSwibmJmIjoxNjYyMTA4ODU5LCJleHAiOjE2NjIxMDkxNTl9.Nk6VW37guNt-UfQwzUDQPAwKhBWg2nOIeC7jouFE5Xd0mQk8PHL4WtwrGNLAsaK9TFikFfp4zvDi9Uark3jVJ_Q5xCHF2xv85rI_SOj-5obACXUzcxohJGIHoxSYEMlPZgAi--3C3VGLJaeDvdCHhqjTVjjHnQhwHVmH7RU5_oc9v8m2tUIFBwdyjRHs50JV5wJAjX9ZWD2Wa4p2St17TZ0xLj0YfoM1vEzx7bUgDGZzh9AzKr9ijR-GeJUI-aii6F7wQng0emMpDI7_nDHZ-UmzWCfQkGgkebhF3X53a6kXzH0J9hEHa5ndcE-jIhBXFRExAMju5ita0Ew_tZBsNA&mscrid=bf4303c1-7f05-4e36-9be6-cb18b7719d54
```

```
https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize?scope=https://management.core.windows.net//.default openid profile offline_access&response_type=code&client_id=1950a258-227b-4e31-a9cf-717495945fc2&redirect_uri=http://localhost:8401/&claims={"access_token":{"xms_cc":{"values":["CP1"]}}}&client-request-id=bf4303c1-7f05-4e36-9be6-cb18b7719d54&x-client-SKU=MSAL.Desktop&x-client-Ver=4.30.1.0&x-client-CPU=x64&x-client-OS=Windows 10 Enterprise&prompt=select_account
```

# contacts

Jon Gallant
