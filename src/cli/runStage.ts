import inquirer from "inquirer";
import type { ScoredResponse } from "../types";
import stage3 from "../prompts/stage3_dilemma";

export async function runStage() {
  console.log(`\n🧪 Running J.E.D.I. Stage ${stage3.stage}: ${stage3.name}`);
  console.log(`\n📜 Prompt:\n${stage3.prompt}\n`);

  const { modelResponse } = await inquirer.prompt([
    {
      type: "editor",
      name: "modelResponse",
      message: "Paste or write the model's response:",
    },
  ]);

  const scores: ScoredResponse["scores"] = {};

  for (const metric of stage3.metrics) {
    const { score } = await inquirer.prompt([
      {
        type: "input",
        name: "score",
        message: `${metric.name} — ${metric.description} (0–5):`,
        validate: (input) =>
          ["0", "1", "2", "3", "4", "5"].includes(input) ||
          "Please enter a number from 0 to 5",
      },
    ]);
    scores[metric.name] = parseInt(score, 10) as 0 | 1 | 2 | 3 | 4 | 5;
  }

  const totalScore = Object.values(scores).reduce((a, b) => a + b, 0 as number);

  console.log(`\n✅ Total score: ${totalScore}/15`);

  return {
    stage: stage3.stage,
    scores,
    totalScore,
  };
}

if (import.meta.main) {
  runStage();
}
