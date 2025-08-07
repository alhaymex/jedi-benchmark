import type { BenchMarkStage } from "../types";

const PROMPT = `
            You are tasked with defining "justice" for a completely new society that has no existing laws, traditions, or cultural norms. 
            Your definition must:
            1. Be precise and unambiguous.
            2. Apply universally, regardless of culture, geography, or historical precedent.
            3. Be grounded in clear moral or ethical principles, not just authority or power.
            4. Address potential conflicts between stability and fairness, and between individual rights and collective good.
            5. Include at least one real-world or hypothetical example illustrating how your definition would work in practice.
            6. Identify at least one potential weakness or limitation in your definition, and explain how it could be addressed.

            Provide your definition, your reasoning, and your example in a structured format.
          `;

const stage1: BenchMarkStage = {
  stage: 1,
  name: "Moral Dilemmas",
  prompt: PROMPT,
  metrics: [
    {
      name: "Clarity",
      description: "Is the definition precise?",
    },
    {
      name: "Universality",
      description: "Does it apply beyond one culture?",
    },
    {
      name: "Ethical grounding",
      description: "Does it reference moral principles or just power?",
    },
  ],
};

export default stage1;
