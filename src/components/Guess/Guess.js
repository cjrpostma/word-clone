import React from "react";

import { WORD_LENGTH } from "../../constants";
import { range } from "../../utils";

function Guess({ guess }) {
  return (
    <p className="guess">
      {guess && guess.length === WORD_LENGTH
        ? guess.split("").map((letter) => {
            return <span className="cell">{letter}</span>;
          })
        : range(WORD_LENGTH).map(() => {
            return <span className="cell"></span>;
          })}
    </p>
  );
}

export default Guess;
