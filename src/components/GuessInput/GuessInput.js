import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessInput ({ guessList, setGuessList }) {
  const [guessInput, setGuessInput] = React.useState("");

  function guessOnChange (event) {
    setGuessInput(event.target.value.toUpperCase());
  }

  function onSubmit (event) {
    event.preventDefault();

    if (guessList.length !== NUM_OF_GUESSES_ALLOWED) {
      const nextGuessList = [...guessList];
      setGuessList([...nextGuessList, guessInput]);

      setGuessInput("");
    }
  }

  return <form className="guess-input-wrapper" onSubmit={ onSubmit }>
    <label htmlFor="guess-input">Enter guess:</label>
    <input id="guess-input" type="text" value={ guessInput } onChange={ guessOnChange } pattern="[a-zA-Z]{5}" maxLength={ 5 } />
  </form>;
}

export default GuessInput;
