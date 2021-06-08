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
  const [disabled, setDisabled] = useState(false);

  const submit = () => {
    setNumbers((numbers) => [...numbers, number]);
    if (number < randomNumber && number !== "") {
      setResults(
        <div className="info">&nbsp;UPS! Last guess was too low!</div>
      );
      setCount(count - 1);
    } else if (number > randomNumber) {
      setResults(
        <div className="info">&nbsp;UPS! Last guess was too high!</div>
      );
      setCount(count - 1);
    } else {
      setResults(
        <div className="success">&nbsp;Congratulations! You got it right!</div>
        
      );
      setDisabled(<button id="submitButton" disabled={disabled} />);
      setDisabled(<button id="startButton" disabled={disabled} />);
      
    }
    if (count < 2) {
      setResults(<div className="gameover">
        <button className="startnew" disabled={disabled} type="button" id="startButton" class="startButton"
        onClick={reset}>Start new game</button>
        &nbsp;&nbsp;GAME OVER</div>);
        setDisabled(<button id="submitButton" disabled={disabled} />)
    }
  };
  const clear = (e) => {
    e.target.value = "";
  };
  
  const reset = () => {
    setRandomNumber(Math.floor(Math.random() * 100) +1);
    setCount(10);
    setResults('');
    setDisabled(false);
    setNumbers([]);
    setNumber('');
   
  }

  const clearButton = (e) => {
    setResults('');
    setNumber('');
  }
  return (
    <div className="guess">
      <input
          onFocus={(e) => clear(e)}
          type="number"
          id="guess"
          className="guessField"
          placeholder="Guess The Number"
          value={number}
          onChange={onChange}
        />
      <button className="button" disabled={disabled} type='submit' id='submitButton' onClick={submit}>Submit Number</button>
      &nbsp;&nbsp;
      <button className="button" type='reset' id='resetButton' onClick={reset}>Reset</button>
      &nbsp;&nbsp;
      <button className="button" type='clear' id='clearButton' onClick={clearButton}>Clear</button>
      {results}
      <div className="counter"><p>&nbsp;You have {count} tries left </p></div>
      <div className="previous">&nbsp;Previous guesses: &nbsp;
        {numbers.map((e, index) => {
          return <span key={index}>{(index ? ", " : "") + e}</span>;
        })}
      </div>
      
  
    </div>
  );
};
export default UserNumber;


