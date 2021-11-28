import React, { useState } from "react";
import "./App.css";

export default function App() {
  let [sideLen, setSideLen] = useState(5);
  let [isSquare, setIsSquare] = useState(false);

  function updateSideLen(e) {
    const inputLen = parseInt(e.target.value);

    if (inputLen < 0 || inputLen > 10) {
      alert("You input an invalid value!");
      setSideLen(5);
      return;
    }

    setSideLen(inputLen);
  }

  function getImages() {
    let output = [];
    // rows
    for (let i = 0; i < sideLen; i++) {
      // columns
      for (let j = 0; j < sideLen; j++) {
        const key = i + "-" + j;
        let imageName = "baseball.jpg";

        // if is triangle, make image blank
        if (j < sideLen - i - 1 && !isSquare) {
          imageName = "blank.png";
        }

        // add image to output
        output.push(
          <img
            src={imageName}
            alt={imageName}
            key={key} // key needs to be unique in element array
            className="App-img"
            onClick={() => {
              alert(`Row: ${i}, Col: ${j}`);
            }}
          />
        );
      }
      output.push(<br key={i + "-" + sideLen} />);
    }

    return output;
  }

  return (
    <div className="App">
      <div className="App-inputs">
        <span>Side Length ( &lt;= 10):</span>
        <input
          type="number"
          min="0"
          max="10"
          value={sideLen}
          onChange={updateSideLen}
        />
        <input
          type="checkbox"
          id="drawCheckbox"
          checked={isSquare}
          onChange={(e) => setIsSquare(e.target.checked)}
        />
        <label htmlFor="drawCheckbox">Draw Square?</label>
      </div>
      <hr />
      {getImages()}
    </div>
  );
}
