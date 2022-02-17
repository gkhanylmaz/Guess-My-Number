import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("Start guessing...");
  const [number, setNumber] = useState("");
  const [score, setScore] = useState(20);
  const [highscore, setHighScore] = useState(0);

  useEffect(() => {
    setNumber(randomNumber());
  }, []);

  const randomNumber = () => {
    return Math.trunc(Math.random() * 20) + 1;
  };

  const againGame = () => {
    setNumber(randomNumber());
    setInput("");
    setMessage("Start guessing...");
    document.body.style.background = "#222";
    setScore(20);
  };

  const handleChange = (e) => {
    setInput(Number(e.target.value));
  };

  const gameMessage = () => {
    if (!input) {
      setMessage("No Number!");
    } else if (number === input) {
      setMessage("Corrent Number!");
      document.body.style.background = "green";
      if (highscore < score) {
        setHighScore(score);
      }
    } else if (number !== input) {
      if (score > 1) {
        number > input ? setMessage("Too Low !") : setMessage("Too High !");
        console.log({ number });
        console.log({ input });
        setScore(score - 1);
      } else {
        setMessage("You Lost!");
        document.body.style.background = "red";
      }
    }
  };
  return (
    <div className="App">
      <header>
        <h1>Guess My Number!</h1>
        <p className="between">(Between 1 and 20)</p>
        <button className="btn again" onClick={againGame}>
          Again!
        </button>
        <div className="number" id="number1">
          {" "}
          ?{" "}
        </div>
      </header>
      <main>
        <section className="left">
          <input
            type="number"
            value={input}
            className="guess"
            onChange={handleChange}
          />
          <button className="btn check" onClick={gameMessage}>
            Check!{" "}
          </button>
        </section>
        <section className="right">
          <p className="message">{message}</p>
          <p className="label-score">
            💯 Score: <span className="score"> {score}</span>
          </p>
          <p className="label-highscore">
            🥇 Highscore: <span className="highscore">{highscore}</span>
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
