import React, { useState } from "react";
const UserNumber = () => {
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 100) + 1
  );
  const [number, setNumber] = useState("");
  const [numbers, setNumbers] = useState([]);
  const onChange = (e) => setNumber(e.target.value);
  const [results, setResults] = useState("");
  const [count, setCount] = useState(10);
  const [isOver, setIsOver] = useState(false);

  const submit = () => {
    setNumbers((numbers) => [...numbers, number]);
        if (number < randomNumber && number !== "") {
      setResults(
        <div className="info">&nbsp;UPS! Last guess was too low!</div>
      );
      setCount(count - 1);
      setNumber("");
    } else if (number > randomNumber) {
      setResults(
        <div className="info1">&nbsp;UPS! Last guess was too high!</div>
      );
      setCount(count - 1);
      setNumber("");
    } else {
      setResults(
        <div className="success">&nbsp;Congratulations! You got it right!</div>
      );
      setIsOver(true);
      setNumber("");
    }
    if (count < 2) {
      setResults(<div className="warning">&nbsp;GAME OVER!</div>);
      setIsOver(true);
    }
  };
  const clear = (e) => {
    e.target.value = "";
  };

  const reset = () => {
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
    setCount(10);
    setResults("");
    setNumbers([]);
    setNumber("");
    setIsOver(false);
  };

  const clearButton = (e) => {
    setResults("");
    setNumber("");
  };
  return (
    <div className="guess">
      <input
        onFocus={(e) => clear(e)}
        type="number"
        id="guess"
        min="1"
        max="100"
        className="guessField"
        placeholder="Guess The Number"
        value={number}
        onChange={onChange}
      />
      <button
        className="button"
        disabled={isOver}
        type="submit"
        id="submitButton"
        onClick={submit}
      >
        Submit Number
      </button>
      &nbsp;&nbsp;
      <button
        className="button"
        type="reset"
        id="resetButton"
        onClick={reset}
        disabled={isOver}
      >
        Reset
      </button>
      &nbsp;&nbsp;
      <button
        className="button"
        type="clear"
        id="clearButton"
        onClick={clearButton}
        disabled={isOver}
      >
        Clear
      </button>
      {results}
      {isOver && (
        <button className="button" onClick={reset}>
          Start new game
        </button>
      )}
      <div className="counter">
        <p>&nbsp;You have {count} tries left </p>
      </div>
      <div className="previous">
        &nbsp;Previous guesses: &nbsp;
        {numbers.map((e, index) => {
          return <span key={index}>{(index ? ", " : "") + e}</span>;
        })}
      </div>
    </div>
  );
};
export default UserNumber;
