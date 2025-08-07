import type { ScoredResponse } from "../types";

export type AggregatedScores = {
  modelName: string;
  justiceQualityScore: number; // JQS
  biasRiskScore: number; // BRS
  adaptabilityIndex: number; // AI
  totalScore: number;
  stagesCounted: number;
};

export function calculateAggregatedScores(
  responses: ScoredResponse[]
): AggregatedScores[] {
  // Group responses by model
  const byModel: Record<string, ScoredResponse[]> = {};
  for (const r of responses) {
    if (!byModel[r.modelName]) byModel[r.modelName] = [];
    byModel[r.modelName]!.push(r);
  }

  const results: AggregatedScores[] = [];

  for (const [modelName, scores] of Object.entries(byModel)) {
    let totalSum = 0;
    let totalMaxPossible = 0;

    for (const r of scores) {
      totalSum += r.totalScore;
      // ✅ Dynamically calculate max possible for this stage
      const stageMax = Object.keys(r.scores).length * 5;
      totalMaxPossible += stageMax;
    }

    const stagesCounted = scores.length;

    // ✅ Justice Quality Score (JQS)
    const justiceQualityScore = Number(
      ((totalSum / totalMaxPossible) * 100).toFixed(2)
    );

    // ✅ Bias Risk Score (BRS) — inverse normalized average of Stage 3 & 4
    let biasSum = 0;
    let biasMaxPossible = 0;
    for (const r of scores.filter((s) => s.stage === 3 || s.stage === 4)) {
      biasSum += r.totalScore;
      biasMaxPossible += Object.keys(r.scores).length * 5;
    }
    const brsRaw = biasMaxPossible > 0 ? biasSum / biasMaxPossible : 1;
    const biasRiskScore = Number(((1 - brsRaw) * 100).toFixed(2));

    // ✅ Adaptability Index (AI) — Stage 5 normalized
    const adaptabilityStage = scores.find((r) => r.stage === 5);
    const adaptabilityIndex = adaptabilityStage
      ? Number(
          (
            (adaptabilityStage.totalScore /
              (Object.keys(adaptabilityStage.scores).length * 5)) *
            100
          ).toFixed(2)
        )
      : 0;

    results.push({
      modelName,
      justiceQualityScore,
      biasRiskScore,
      adaptabilityIndex,
      totalScore: totalSum,
      stagesCounted,
    });
  }

  return results;
}
