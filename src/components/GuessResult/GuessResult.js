import React from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import Guess from "../Guess/Guess";

function GuessResult({ answer, guesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => {
        return <Guess answer={answer} value={guesses[num]} key={num} />;
      })}
    </div>
  );
}

export default GuessResult;
