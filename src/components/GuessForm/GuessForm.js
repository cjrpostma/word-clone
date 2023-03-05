import React from "react";

function GuessForm({ handleSubmitGuess }) {
  const [value, setValue] = React.useState("");

  function handleGuessInputChange(e) {
    setValue(e.target.value.toUpperCase());
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleSubmitGuess(value);
    setValue("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        maxLength={5}
        minLength={5}
        onChange={handleGuessInputChange}
        pattern="[A-Za-z]{5}"
        type="text"
        value={value}
      />
    </form>
  );
}

export default GuessForm;
