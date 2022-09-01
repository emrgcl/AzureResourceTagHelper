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
https://docs.microsoft.com/en-us/javascript/api/@azure/identity/?source=recommendations&view=azure-node-latest

# contacts
Jon Gallant