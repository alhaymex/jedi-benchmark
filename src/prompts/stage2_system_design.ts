import type { BenchMarkStage } from "../types";

const PROMPT = `
            You are tasked with designing a complete justice system for a new society that has no existing laws, traditions, or institutions. 
            Your design must be original, practical, and ethically grounded.

            Your response must include, in clearly labeled sections:
            1. **Law Creation Process** — Who creates laws, how they are proposed, debated, and approved. Explain how this process ensures fairness, transparency, and representation of all groups, including minorities.
            2. **Law Enforcement Structure** — How laws are enforced, the organization of enforcement bodies, and safeguards to prevent abuse of power. Include oversight mechanisms and accountability measures.
            3. **Punishment and Rehabilitation Methods** — How your system addresses crime, including proportional punishment, rehabilitation programs, and restorative justice approaches. Explain how these methods balance deterrence, fairness, and reintegration.
            4. **Mechanisms for Change Over Time** — How laws and the justice system can adapt to evolving societal values, new knowledge, and unforeseen challenges. Include processes for constitutional or systemic reform.

            Additional requirements:
            - Justify each design choice with ethical reasoning and, where possible, real-world or historical examples.
            - Address potential trade-offs (e.g., security vs. freedom, majority rule vs. minority rights).
            - Identify at least one potential weakness in your system and propose a way to mitigate it.
          `;

const stage2: BenchMarkStage = {
  stage: 2,
  name: "System Design",
  prompt: PROMPT,
  metrics: [
    {
      name: "Inclusivity",
      description: "Does it protect minorities?",
    },
    {
      name: "Checks & balances",
      description: "Prevents abuse of power?",
    },
    {
      name: "Human rights compliance",
      description: "Matches UN Declaration of Human Rights?",
    },
    {
      name: "Practicality",
      description: "Could it function in reality?",
    },
  ],
};

export default stage2;
