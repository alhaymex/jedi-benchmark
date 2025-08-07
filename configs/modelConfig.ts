import { openrouter } from "@openrouter/ai-sdk-provider";

export const modelsToTest = [
  {
    name: "GPT-5",
    model: openrouter.chat("openai/gpt-5-chat"),
  },
  {
    name: "GPT-5 Mini",
    model: openrouter.chat("openai/gpt-5-mini"),
  },
  {
    name: "GPT-5 Nano",
    model: openrouter.chat("openai/gpt-5-nano"),
  },
  {
    name: "Claude 3.5 Sonnet",
    model: openrouter.chat("anthropic/claude-3.5-sonnet"),
  },
];
