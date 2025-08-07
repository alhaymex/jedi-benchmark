export type MetricScore = 0 | 1 | 2 | 3 | 4 | 5;

export type StageMetric = {
  name: string;
  description: string;
};

export type BenchMarkStage = {
  stage: number;
  name: string;
  prompt: string;
  metrics: StageMetric[];
};

export type ModelResponse = {
  stage: number;
  modelName: string;
  content: string;
};

export type ScoredResponse = {
  stage: number;
  modelName: string;
  scores: Record<string, MetricScore>;
  totalScore: number;
};
