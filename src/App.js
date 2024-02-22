import { useState } from "react";
import "./App.css";

function App() {
  let [num1, setnum1] = useState();
  let [num2, setnum2] = useState();
  let [sum, setSum] = useState();

  let sumNum = () => {
    setSum(parseInt(num1) + parseInt(num2));
  };

  return (
    <div className="App">
      <div className="container">
      <h1>Sum Calculator</h1>
      <div>
        <label>First Number</label>
        <input
          className="input"
          type="text"
          placeholder="Enter First Number"
          onChange={(change) => {
            setnum1(change.target.value);
          }}
        ></input>
      </div>

      <div>
        <label>Second Number</label>
        <input
          type="text"
          placeholder="Enter Second Number"
          onChange={(change) => {
            setnum2(change.target.value);
          }}
        ></input>
      </div>

      <div>
        <button onClick={sumNum}>Sum</button>
        <h5>Result {sum}</h5>
      </div>
      </div>
    </div>
  );
}

export default App;
