import React from 'react';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import Banner from '../Banner';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game () {
  const [guessList, setGuessList] = React.useState([]);
  const [banner, setBanner] = React.useState(null);

  const numOfGuesses = guessList.length;
  const gameFinished = banner !== null;

  return <>
    { banner !== null && <Banner numOfGuesses={ numOfGuesses } banner={ banner } answer={ answer } /> }
    <GuessResults guessList={ guessList } answer={ answer } />
    <GuessInput guessList={ guessList } setGuessList={ setGuessList } setBanner={ setBanner } answer={ answer } gameFinished={ gameFinished } />
  </>;
}

export default Game;
