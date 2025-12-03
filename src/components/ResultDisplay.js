
import React from "react";

const getNextGradeGoal = (bins, thresholds, currentGrade) => {
  const grades = Object.keys(thresholds);
  const currentIndex = grades.indexOf(currentGrade);
  if (currentIndex === 0) return "You already qualify for the highest grade!";

  const nextGrade = grades[currentIndex - 1];
  const req = thresholds[nextGrade];
  const goals = [];
  if (bins[90] < req[90]) goals.push(`${req[90] - bins[90]} more ≥90%`);
  if (bins[80] < req[80]) goals.push(`${req[80] - bins[80]} more ≥80%`);
  if (bins[70] < req[70]) goals.push(`${req[70] - bins[70]} more ≥70%`);

  return goals.length > 0
    ? `To reach ${nextGrade}, you need ${goals.join(", ")}.`
    : `You already qualify for ${nextGrade}!`;
};

export default function ResultDisplay({result, thresholds}) {
  const {grade, bins} = result;
  const goalHint = getNextGradeGoal(bins, thresholds, grade);

  return (
    <div>
      <h2>Your Grade: {grade}</h2>
      <p>90%+: {bins[90]}, 80%+: {bins[80]}, 70%+: {bins[70]}</p>
      <p style={{color: "blue"}}>{goalHint}</p>
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
