import { inngest } from "./client.js";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    // Wait 1 second
    await step.sleep("wait-a-moment", "1s");

    // Return a response
    return { message: `Hello ${event.data.email}!` };
  }
);
