import {
  useState,
  useRef
} from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);
  const [userInput, setuserInput] = useState(0);

  function addition(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  };

  function inputChangeHandler(e) {
    setuserInput(e.target.value);
  }

  function subtraction(e) {
  };

  function multiplication(e) {
  };

  function division(e) {
  };

  function resetInput(e) {
  };

  function resetResult(e) {
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
          ref={inputRef}
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