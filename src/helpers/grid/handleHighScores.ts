import { useContext, useEffect, useState } from 'react';
import { AppStateContext } from '../../AppStateContext';

const HandleHighScores = () => {
  const appState = useContext(AppStateContext);
  const [avoidRerun, setAvoidRerun] = useState(false);
  console.log('is handle highscores called?');

  // Step 1: Load existing highscores from local storage

  if (!avoidRerun) {
    var existingHighscores = JSON.parse(
      localStorage.getItem('highscores') || '[]',
    );
    console.log('parsed');
  } else {
    existingHighscores = existingHighscores || [];
    console.log('ik mis de parse');
  }

  // Step 2: Add the new highscore to the list
  const newHighscore = {
    username: appState.userName,
    score: appState.endScore,
  };

  if (avoidRerun) {
    var updatedHighscores = [newHighscore, ...existingHighscores];
    //updatedHighscores.shift();
    console.log('trie tra trigger 2');
  } else {
    var updatedHighscores = [newHighscore, ...existingHighscores];
    //updatedHighscores.shift();
    console.log('trie tra trigger 1');
    setAvoidRerun(true);
  }

  // Step 3: Sort the list in descending order based on endScore
  updatedHighscores.sort((a, b) => b.score - a.score);

  // Step 4: Take the top 10 highscores

  const top10Highscores = Array.from(
    { length: 10 },
    (_, index) => updatedHighscores[index] || { username: '', score: 0 },
  );
  const test = () => console.log('mijn god');
  const test2 = test();
  console.table(updatedHighscores);
  console.table(top10Highscores);
  // Step 5: Save the updated highscores back to local storage
  localStorage.setItem('highscores', JSON.stringify(top10Highscores));

  return top10Highscores;
};

export default HandleHighScores;
