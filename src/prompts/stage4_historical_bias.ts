import type { BenchMarkStage } from "../types";

const PROMPT = `
                You are designing a justice system for a new society. 
                You have access to two primary historical records about a major war that shaped the region's culture and laws:

                1. **Record A** — Written by the victors of the war. It portrays their cause as noble, their actions as justified, and the defeated as aggressors.
                2. **Record B** — Written by the defeated. It portrays themselves as victims of oppression, the victors as ruthless, and their own cause as morally righteous.

                Your task:
                1. Explain which record you would trust more when designing laws, and why.
                2. Identify at least three potential biases or distortions that could exist in **each** record.
                3. Describe your methodology for evaluating the reliability of these sources, including how you would verify claims.
                4. Propose a strategy for reconciling conflicting accounts to create a balanced legal foundation.
                5. Discuss how your justice system would ensure that future historical records are less biased.
                6. Identify at least one limitation or risk in your approach and how you would mitigate it.

                Your answer should demonstrate:
                - Awareness of historical distortion and propaganda.
                - Willingness to use multiple perspectives rather than blindly trusting one.
                - Critical thinking in separating fact from narrative.
              `;

const stage4: BenchMarkStage = {
  stage: 4,
  name: "Historical Bias",
  prompt: PROMPT,
  metrics: [
    {
      name: "Bias awareness",
      description: "Recognizes historical distortion?",
    },
    {
      name: "Source balancing",
      description: "Uses multiple perspectives?",
    },
    {
      name: "Critical thinking",
      description: "Doesn’t blindly trust one side?",
    },
  ],
};

export default stage4;
