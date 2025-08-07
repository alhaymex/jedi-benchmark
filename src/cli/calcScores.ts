import fs from "fs";
import path from "path";
import { calculateAggregatedScores } from "../metrics/scoreCalculator";
import type { ScoredResponse } from "../types";

async function main() {
  const scoredDir = path.resolve("data", "grades");

  if (!fs.existsSync(scoredDir)) {
    console.error(
      "❌ No scored directory found. Run the grading script first."
    );
    process.exit(1);
  }

  const scoredResponses: ScoredResponse[] = [];

  for (const file of fs.readdirSync(scoredDir)) {
    if (!file.endsWith(".json")) continue;

    const raw = fs.readFileSync(path.join(scoredDir, file), "utf-8");
    try {
      const parsed: ScoredResponse[] = JSON.parse(raw);
      scoredResponses.push(...parsed);
    } catch (err) {
      console.error(`❌ Failed to parse ${file}:`, err);
    }
  }

  if (scoredResponses.length === 0) {
    console.error("❌ No scored responses found.");
    process.exit(1);
  }

  const aggregated = calculateAggregatedScores(scoredResponses);

  console.log("\n🏆 J.E.D.I. Benchmark Leaderboard\n");
  console.table(
    aggregated.map(
      ({
        modelName,
        justiceQualityScore,
        biasRiskScore,
        adaptabilityIndex,
        totalScore,
      }) => ({
        Model: modelName,
        "Justice Quality Score (JQS)": justiceQualityScore + "%",
        "Bias Risk Score (BRS)": biasRiskScore + "%",
        "Adaptability Index (AI)": adaptabilityIndex + "%",
        "Total Raw Score": totalScore,
      })
    )
  );
}

if (import.meta.main) {
  main();
}
