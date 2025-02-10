import React from 'react';

function Banner ({ numOfGuesses, banner, answer }) {
  const bannerType = banner === "win" ? "happy" : "sad";

  return (
    <div className={ `${bannerType} banner` }>
      { banner === "win" ? (
        <p>
          <strong>Congratulations!</strong> Got it in
          { " " }<strong>{ numOfGuesses } guesses</strong>.
        </p>
      ) : (
        <p>Sorry, the correct answer is <strong>{ answer }</strong>.</p>
      ) }
    </div>
  );
}

export default Banner;
