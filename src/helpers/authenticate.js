import { InteractiveBrowserCredential } from "@azure/identity";

function withInteractiveBrowserCredential() {
    const azcredential = new InteractiveBrowserCredential({
      tenantId: "72f988bf-86f1-41af-91ab-2d7cd011db47",
      clientId: "167b7ea7-3661-4d63-8e1e-9218746533c0"
    });
return azcredential;
}
export default withInteractiveBrowserCredential