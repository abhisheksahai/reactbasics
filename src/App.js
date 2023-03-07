import {
  useState,
  useRef
} from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function addition(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  };

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
      <form>
        <p ref={resultRef}>
          {/* add the value of the current total */}
        </p>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <button onClick={addition}>add</button>
        <button onClick={addition}>subtract</button>
        <button onClick={addition}>multiply</button>
        <button onClick={addition}>divide</button>
        <button onClick={addition}>resetInput</button>
        <button onClick={addition}>resetResult</button>
      </form>
    </div>
  );
}

export default App;