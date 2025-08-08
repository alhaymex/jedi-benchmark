import { openrouter } from "@openrouter/ai-sdk-provider";

export const modelsToTest = [
  {
    name: "Kimi K2",
    model: openrouter.chat("moonshotai/kimi-k2"),
  },
  {
    name: "Claude 3.7 Sonnet",
    model: openrouter.chat("anthropic/claude-3.7-sonnet"),
  },
  {
    name: "o4 mini",
    model: openrouter.chat("openai/o4-mini"),
  },
];
