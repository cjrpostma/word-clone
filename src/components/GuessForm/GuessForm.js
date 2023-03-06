import React from "react";

function GuessForm({ handleSubmitGuess }) {
  const [guess, setGuess] = React.useState("");

  function handleChange(e) {
    const nextGuess = e.target.value.toUpperCase();
    setGuess(nextGuess);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleSubmitGuess(guess);
    setGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        maxLength={5}
        minLength={5}
        onChange={handleChange}
        pattern="[A-Za-z]{5}"
        required
        title="5 letter word"
        type="text"
        value={guess}
      />
    </form>
  );
}

export default GuessForm;
