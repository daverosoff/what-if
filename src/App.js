
import React, { useState } from "react";
import ScoreInput from "./components/ScoreInput";
import ThresholdEditor from "./components/ThresholdEditor";
import ResultDisplay from "./components/ResultDisplay";

const defaultThresholds = {
  A: {90: 10, 80: 8, 70: 2},
  "B+": {90: 8, 80: 6, 70: 4},
  B: {90: 6, 80: 4, 70: 6},
  "B-": {90: 4, 80: 2, 70: 8},
  "C+": {90: 2, 80: 2, 70: 8},
  C: {90: 2, 80: 2, 70: 4},
  "C-": {90: 1, 80: 1, 70: 4},
  D: {90: 0, 80: 0, 70: 4}
};

function App() {
  const [scores, setScores] = useState(Array(12).fill(""));
  const [thresholds, setThresholds] = useState(defaultThresholds);
  const [result, setResult] = useState(null);

  const computeGrade = () => {
    const bins = {90: 0, 80: 0, 70: 0};
    scores.forEach(s => {
      const val = parseFloat(s);
      if (!isNaN(val)) {
        if (val >= 90) bins[90]++;
        else if (val >= 80) bins[80]++;
        else if (val >= 70) bins[70]++;
      }
    });

    // fixed order: from highest to lowest
    const orderedGrades = ["A", "B+", "B", "B-", "C+", "C", "C-", "D"]
    let grade = "F";
    for (const g of orderedGrades) {
      const req = thresholds[g];
        if (bins[90] >= req[90] && bins[80] >= req[80] && bins[70] >= req[70]) {
          grade = g;
          break;
        }
    }

    setResult({grade, bins});
  };

  return (
    <div style={{padding: "20px"}}>
      <h1>What-If Grade Calculator</h1>
      <ScoreInput scores={scores} setScores={setScores} />
      <button onClick={computeGrade}>Compute Grade</button>
      {result && <ResultDisplay result={result} thresholds={thresholds} />}
      <ThresholdEditor thresholds={thresholds} setThresholds={setThresholds} />
    </div>
  );
}

export default App;
