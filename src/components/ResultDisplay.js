
import React from "react";

const orderedGrades = ["A","B+","B","B-","C+","C","C-","D"]; // highest → lowest

const getNextGradeGoal = (binsInput, thresholds, currentGrade) => {
  // guard: ensure bins has keys 90,80,70
  const bins = {
    90: binsInput?.[90] ?? 0,
    80: binsInput?.[80] ?? 0,
    70: binsInput?.[70] ?? 0
  };

  // If current grade is highest already
  if (currentGrade === orderedGrades[0]) {
    return "You already qualify for the highest grade!";
  }

  // If current grade isn't in thresholds (e.g., 'F'), aim for the lowest passing grade next ('D')
  let targetIndex;
  if (!thresholds[currentGrade]) {
    targetIndex = orderedGrades.indexOf("D");
    if (targetIndex === -1) {
      return "Thresholds are not configured for any passing grade.";
    }
  } else {
    const currentIndex = orderedGrades.indexOf(currentGrade);
    // If not found for some reason, aim for 'D'
    if (currentIndex === -1) {
      targetIndex = orderedGrades.indexOf("D");
    } else {
      // next higher grade (move up the list)
      targetIndex = Math.max(0, currentIndex - 1);
    }
  }

  const nextGrade = orderedGrades[targetIndex];
  const req = thresholds[nextGrade];

  // guard if thresholds missing nextGrade
  if (!req) {
    return `Thresholds for ${nextGrade} are not configured.`;
  }

  const goals = [];
  if (bins[90] < req[90]) goals.push(`${req[90] - bins[90]} more ≥90%`);
  if (bins[80] < req[80]) goals.push(`${req[80] - bins[80]} more ≥80%`);
  if (bins[70] < req[70]) goals.push(`${req[70] - bins[70]} more ≥70%`);

  return goals.length > 0
    ? `To reach ${nextGrade}, you need ${goals.join(", ")}.`
    : `You already qualify for ${nextGrade}!`;
};

export default function ResultDisplay({ result, thresholds }) {
  const grade = result?.grade ?? "F";
  const bins = result?.bins ?? { 90: 0, 80: 0, 70: 0 };
  const goalHint = getNextGradeGoal(bins, thresholds, grade);

  return (
    <div>
      <h2>Your Grade: {grade}</h2>
      <p>90%+: {bins[90]}, 80%+: {bins[80]}, 70%+: {bins[70]}</p>
      <p style={{ color: "blue" }}>{goalHint}</p>

      <div>
        <label>90%+</label>
        <progress value={bins[90]} max="12"></progress>
      </div>
      <div>
        <label>80%+</label>
        <progress value={bins[80]} max="12"></progress>
      </div>
      <div>
        <label>70%+</label>
        <progress value={bins[70]} max="12"></progress>
      </div>
    </div>
  );
}
