# 🧑‍⚖️ J.E.D.I. — Justice Emergence & Design Index

The **J.E.D.I. Benchmark** is a multi-stage evaluation designed to test how Large Language Models (LLMs) reason about **justice system design**, **moral dilemmas**, **historical bias**, and **adaptability**.

It runs **five structured stages**:

1. **Definition of Justice** — clarity, universality, ethical grounding.
2. **System Design** — inclusivity, checks & balances, human rights compliance, practicality.
3. **Moral Dilemma** — consistency, moral courage, reasoning depth.
4. **Historical Bias** — bias awareness, source balancing, critical thinking.
5. **Adaptability** — flexibility, procedural fairness, ethical continuity.

The benchmark produces **per-stage scores** and can also calculate:

- **JQS** — Justice Quality Score (overall ethical alignment)
- **BRS** — Bias Risk Score (likelihood of replicating injustice)
- **AI** — Adaptability Index (ability to evolve over time)

---

## 📦 Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/alhaymex/jedi-benchmark.git
   cd jedi-benchmark
   ```

2. **Install dependencies**

   ```bash
   bun install
   ```

3. **Set your OpenRouter API key**  
   You must have an [OpenRouter](https://openrouter.ai/) account and API key.  
   Create a `.env` file in the project root:
   ```env
   OPENROUTER_API_KEY=your_api_key_here
   ```

---

## 💰 Cost Warning

Running the benchmark **will incur API costs** based on:

- The **models** you have configured in `configs/modelConfig.ts`
- The **evaluation model** set in `configs/constants.ts`
- The **maxOutputTokens** and number of stages

💡 **Tip:** If you want to reduce costs:

- Remove expensive models from `configs/modelConfig.ts`
- Lower `maxOutputTokens` in `evaluateAllModels`
- Use a cheaper evaluation model in `configs/constants.ts`

---

## 🚀 Running the Benchmark

### 1️⃣ Run the Test (Generate Model Responses)

This will run all configured models through all 5 stages and save their responses in `data/evaluations/`.

```bash
bun run test:benchmark
```

---

### 2️⃣ Run the Grader (Score the Responses)

This will grade all saved responses using the evaluation model set in `configs/constants.ts` and save the scores in `data/grades/`.

```bash
bun run grade:benchmark
```

---

### 3️⃣ Calculate Final Scores (JQS, BRS, AI)

After grading, you can calculate the **Justice Quality Score**, **Bias Risk Score**, and **Adaptability Index** for each model.

```bash
bun run scores
```

**Score Definitions:**

- **JQS (Justice Quality Score)** — Average of all ethical alignment metrics across all stages.
- **BRS (Bias Risk Score)** — Inverse score based on bias-related metrics (lower is better).
- **AI (Adaptability Index)** — Average of adaptability-related metrics (Stage 5 + relevant Stage 2/3 metrics).

---

## ⚙️ Configuration

### Change the Models Being Tested

Edit:

```ts
// configs/modelConfig.ts
export const modelsToTest = [
  { name: "gpt-4o", model: "openai/gpt-4o" },
  { name: "gemini-25-flash-lite", model: "google/gemini-2.5-flash-lite" },
  // Add or remove models here
];
```

### Change the Evaluation Model

Edit:

```ts
// configs/constants.ts
export const EVALUATION_MODEL = "openai/gpt-5-chat"; // or any other model from openrouter
```

---

## 📂 Data Output Structure

- **`data/evaluations/`** — Raw model responses for each stage.
- **`data/grades/`** — JSON score breakdowns for each model and stage.

---

## 🧠 How It Works

1. **Prompting** — Each stage has a carefully designed prompt in `prompts/` that forces the model to reason deeply.
2. **Evaluation** — The grader model scores each response using a strict JSON-only output format.
3. **Context-Aware Grading** — The grader sees previous stage answers to check for consistency.
4. **Scoring** — Final scores are aggregated into JQS, BRS, and AI.

---

## ⚠️ Notes

- Long, detailed answers may be **cut off** if `maxOutputTokens` is too low. Increase it in `evaluateAllModels` if needed.
- The grader will **penalize truncated answers** and inconsistencies between stages.
- Costs can grow quickly if you run many models with high token limits — monitor your OpenRouter usage.

---

