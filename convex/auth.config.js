import { AuthConfig } from "convex/server";

export default {
  providers: [
    {
      // This must match the JWT issuer from your Clerk "convex" template.
      domain: process.env.CLERK_JWT_ISSUER_DOMAIN,
      applicationID: "convex",
    },
  ],
};
