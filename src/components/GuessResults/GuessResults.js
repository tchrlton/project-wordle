import React from 'react';

function GuessResults ({ guessList }) {
  return <div className="guess-results">
    { guessList.length > 0 && guessList.map(guess => {
      const key = crypto.randomUUID();

      return (
        <p key={ key } className="guess">{ guess }</p>
      )
    }) }
  </div>;
}

export default GuessResults;
