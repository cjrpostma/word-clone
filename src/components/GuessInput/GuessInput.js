import React from "react";

function GuessInput({ handleSubmitGuess, gameStatus }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  function handleChange(e) {
    const nextGuess = e.target.value.toUpperCase();
    setTentativeGuess(nextGuess);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={gameStatus !== "running"}
        id="guess-input"
        maxLength={5}
        minLength={5}
        onChange={handleChange}
        pattern="[A-Za-z]{5}"
        required
        title="5 letter word"
        type="text"
        value={tentativeGuess}
      />
    </form>
  );
}

export default GuessInput;
