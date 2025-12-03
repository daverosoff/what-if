
import React from "react";

export default function ScoreInput({scores, setScores}) {
  const updateScore = (index, value) => {
    const newScores = [...scores];
    newScores[index] = value;
    setScores(newScores);
  };

  return (
    <div>
      <h2>Enter Your 12 Quiz Scores</h2>
      {scores.map((score, i) => (
        <input
          key={i}
          type="number"
          value={score}
          onChange={(e) => updateScore(i, e.target.value)}
          style={{margin: "5px"}}
        />
      ))}
    </div>
  );
}
