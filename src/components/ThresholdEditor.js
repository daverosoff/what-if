
import React from "react";

export default function ThresholdEditor({thresholds, setThresholds}) {
  const updateThreshold = (grade, bin, value) => {
    const newThresholds = {...thresholds};
    newThresholds[grade][bin] = parseInt(value);
    setThresholds(newThresholds);
  };

  return (
    <div>
      <h2>Edit Thresholds</h2>
      <table border="1">
        <thead>
          <tr><th>Grade</th><th>90%+</th><th>80%+</th><th>70%+</th></tr>
        </thead>
        <tbody>
          {Object.keys(thresholds).map(grade => (
            <tr key={grade}>
              <td>{grade}</td>
              <td><input value={thresholds[grade][90]} onChange={(e)=>updateThreshold(grade,90,e.target.value)} /></td>
              <td><input value={thresholds[grade][80]} onChange={(e)=>updateThreshold(grade,80,e.target.value)} /></td>
              <td><input value={thresholds[grade][70]} onChange={(e)=>updateThreshold(grade,70,e.target.value)} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
