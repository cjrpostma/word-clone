import React from "react";

import { WORD_LENGTH } from "../../constants";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
  const guessResult = guess && checkGuess(guess, answer);

  return (
    <p className="guess">
      {guessResult
        ? guessResult.map((letterResult) => {
            return (
              <span
                className={`cell ${letterResult.status}`}
                key={crypto.randomUUID()}
              >
                {letterResult.letter}
              </span>
            );
          })
        : range(WORD_LENGTH).map(() => {
            return <span className="cell" key={crypto.randomUUID()}></span>;
          })}
    </p>
  );
}

export default Guess;
