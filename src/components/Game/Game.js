import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessForm from "../GuessForm/GuessForm";
import GuessResult from "../GuessResult/GuessResult";
import Banner from "../Banner/Banner";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const result = React.useMemo(() => {
    return checkGuess(guesses[guesses.length - 1], answer);
  }, [guesses]);

  const isWinner =
    result &&
    result.every((letter) => {
      return letter.status === "correct";
    });

  function handleSubmitGuess(tentativeGuess) {
    setGuesses([...guesses, tentativeGuess]);
  }

  return (
    <>
      Put a game here!
      {(isWinner === true || guesses.length === 6) && (
        <Banner
          answer={answer}
          isWinner={isWinner}
          guessCount={guesses.length}
        />
      )}
      <GuessResult answer={answer} guesses={guesses} />
      <GuessForm handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
