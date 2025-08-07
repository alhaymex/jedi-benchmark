import { createOpenRouter } from "@openrouter/ai-sdk-provider";

export const openRouterClient = createOpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY!,
});
