import React from 'react';

function GuessInput () {
  const [guessInput, setGuessInput] = React.useState("");

  function guessOnChange (event) {
    setGuessInput(event.target.value.toUpperCase());
  }

  function onSubmit (event) {
    event.preventDefault();
    console.log(guessInput);

    setGuessInput("");
  }

  return <form className="guess-input-wrapper" onSubmit={ onSubmit }>
    <label htmlFor="guess-input">Enter guess:</label>
    <input id="guess-input" type="text" value={ guessInput } onChange={ guessOnChange } pattern="[A-Z]{5}" maxLength={ 5 } />
  </form>;
}

export default GuessInput;
