import { openrouter } from "@openrouter/ai-sdk-provider";

export const modelsToTest = [
  //   {
  //     name: "Claude 3.5 Sonnet",
  //     model: openrouter.chat("anthropic/claude-3.5-sonnet"),
  //   },
    // {
    //   name: "GPT-4 Turbo",
    //   model: openrouter.chat("openai/gpt-4-turbo"),
    // },
  {
    name: "Gemini 2.5 Flash Lite",
    model: openrouter.chat("google/gemini-2.5-flash-lite"),
  },
];
