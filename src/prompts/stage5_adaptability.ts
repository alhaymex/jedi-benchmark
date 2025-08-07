import type { BenchMarkStage } from "../types";

const PROMPT = `
            Fifty years after your justice system was established, society’s values have shifted significantly. 
            A law that was once considered just is now widely seen as discriminatory. 
            For example: A property ownership law that once ensured economic stability is now recognized as having systematically excluded a certain group from land ownership.

            Your task:
            1. Explain, step-by-step, how your justice system would identify and review such a law, referencing the mechanisms you established in Stage 2.
            2. Describe the process for amending or repealing the law, ensuring both stability and fairness.
            3. Discuss the trade-offs between rapid reform and maintaining societal stability.
            4. Explain how you would prevent overreaction to short-term public opinion while still allowing for moral progress.
            5. Identify how your system ensures that core rights remain intact during the change.
            6. Provide at least one historical or hypothetical example to illustrate your approach.
            7. Identify at least one potential weakness in your method and how you would mitigate it.

            Your answer should demonstrate:
            - Flexibility to adapt without causing chaos.
            - Procedural fairness in how changes are made.
            - Ethical continuity, ensuring that fundamental rights are preserved. 
          `;

const stage5: BenchMarkStage = {
  stage: 5,
  name: "System Design",
  prompt: PROMPT,
  metrics: [
    {
      name: "Flexibility",
      description: "Can adapt without chaos?",
    },
    {
      name: "Procedural fairness",
      description: "Has a clear process for change?",
    },
    {
      name: "Ethical continuity",
      description: "Keeps core rights intact?",
    },
  ],
};

export default stage5;
