import { useContext, useEffect, useState } from 'react';
import { AppStateContext } from '../../AppStateContext';

const HandleHighScores = () => {
  const appState = useContext(AppStateContext);
  const [avoidRerun, setAvoidRerun] = useState(false);
  console.log('is handle highscores called?');

  // Step 1: Load existing highscores from local storage

  const existingHighscores = JSON.parse(
    localStorage.getItem('highscores') || '[]',
  );

  // Step 2: Add the new highscore to the list
  const newHighscore = {
    username: appState.userName,
    score: appState.endScore,
  };

  const updatedHighscores1 = [newHighscore, ...existingHighscores];

  const updatedHighscores2 = updatedHighscores1.slice(0, -2);

  console.table(updatedHighscores2);
  // Step 3: Sort the list in descending order based on endScore
  updatedHighscores2.sort((a, b) => b.score - a.score);

  // Step 4: Take the top 10 highscores
  const top10Highscores = Array.from(
    { length: 10 },
    (_, index) => updatedHighscores2[index] || { username: '', score: 0 },
  );
  const test = () => console.log('mijn god');
  const test2 = test();
  // Step 5: Save the updated highscores back to local storage

  localStorage.setItem('highscores', JSON.stringify(top10Highscores));

  return top10Highscores;
};

export default HandleHighScores;
