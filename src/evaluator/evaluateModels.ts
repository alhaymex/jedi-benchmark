import "dotenv/config";
import { modelsToTest } from "../../configs/modelConfig";
import { generateText } from "ai";
import fs from "fs";
import type { BenchMarkStage, ModelResponse } from "../types";
import stage3 from "../prompts/stage3_dilemma";
import stage1 from "../prompts/stage1_definition";
import stage2 from "../prompts/stage2_system_design";
import stage4 from "../prompts/stage4_historical_bias";
import stage5 from "../prompts/stage5_adaptability";
import path from "path";
import { slugify } from "../lib/utils";

const allStages: BenchMarkStage[] = [stage1, stage2, stage3, stage4, stage5];

export async function evaluateAllModels() {
  const outputDir = path.resolve("data", "evaluations");
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

  for (const { name, model } of modelsToTest) {
    console.log(`\n🔍 Running benchmark for: ${name}`);

    // ✅ Reset results for each model
    const results: ModelResponse[] = [];

    for (const stage of allStages) {
      console.log(`  🧪 Stage ${stage.stage}: ${stage.name}`);

      const { text } = await generateText({
        model,
        prompt: stage.prompt,
        maxOutputTokens: 3000, // optional: increase to avoid truncation
      });

      results.push({
        stage: stage.stage,
        modelName: name,
        content: text,
      });
    }

    const safeFileName = slugify(name) + ".json";
    const outPath = path.join(outputDir, safeFileName);

    fs.writeFileSync(outPath, JSON.stringify(results, null, 2));
    console.log(`✅ Saved responses for ${name} to ${outPath}`);
  }
}

if (import.meta.main) {
  await evaluateAllModels();
}
