import { helloWorld } from "@/lib/src/inngest/functions";
import { inngest } from "@/lib/src/inngest/client";
import { serve } from "inngest/next";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [helloWorld],
});


