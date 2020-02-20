import React from "react";
import "./styles.css";

const bin2dec = b => {
  let d = 0;
  console.log(b.length);
  for (let i = b.length - 1; i >= 0; i--) {
    d = d + b[i] * Math.pow(2, b.length - 1 - i);
  }
  return d;
};
export default function App() {
  const [value, setValue] = React.useState("");

  return (
    <div className="App">
      <h1>Bin2Dec</h1>
      <h2>Enter a Binary number to get its Dec Value</h2>
      <div>
        Binary:{" "}
        <input
          type="text"
          value={value}
          maxLength="8"
          onChange={e => setValue(e.target.value.replace(/(?:[^1\,0]*)/g, ""))}
        />
      </div>
      <div>Dec:{bin2dec(value)}</div>
    </div>
  );
}
