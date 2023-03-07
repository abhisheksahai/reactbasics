import { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState(0);
  const [userInput, setuserInput] = useState(0);

  function inputChangeHandler(e) {
    setuserInput(Number(e.target.value));
  }

  function addition(e) {
    e.preventDefault();
    setResult(result + userInput);
  };

  function subtraction(e) {
    e.preventDefault();
    setResult(result - userInput);
  };

  function multiplication(e) {
    e.preventDefault();
    setResult(result * userInput);
  };

  function division(e) {
    e.preventDefault();
    if (userInput !== 0) {
      setResult(result / userInput);
    }
  };

  function resetInput() {
    setuserInput(0);
  };

  function resetResult() {
    setResult(0);
  };

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <div>
        <p>{result}</p>
        <input
          pattern="[0-9]"
          type="number"
          min={0}
          placeholder="Type a number"
          value={userInput}
          onChange={inputChangeHandler}
        />
        <button onClick={addition}>add</button>
        <button onClick={subtraction}>subtract</button>
        <button onClick={multiplication}>multiply</button>
        <button onClick={division}>divide</button>
        <button onClick={resetInput}>resetInput</button>
        <button onClick={resetResult}>resetResult</button>
      </div>
    </div>
  );
}

export default App;