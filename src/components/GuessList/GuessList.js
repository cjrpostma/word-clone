import React from "react";

function GuessList({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((guess) => {
        return (
          <p className="guess" key={crypto.randomUUID()}>
            {guess}
          </p>
        );
      })}
    </div>
  );
}

export default GuessList;
