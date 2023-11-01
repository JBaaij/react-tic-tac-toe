import { useContext, useEffect, useState } from 'react';
import { AppStateContext } from '../../AppStateContext';
const HandleHighScores = () => {
  const appState = useContext(AppStateContext);
  const [avoidRerun, setAvoidRerun] = useState(1);
  console.log('is handle highscores called?');

  // Step 1: Load existing highscores from local storage
  const existingHighscores = JSON.parse(
    localStorage.getItem('highscores') || '[]',
  );

  // Create a new high score object
  const newHighscore = {
    username: appState.userName,
    score: appState.endScore,
  };

  // Add the new high score to the existing highscores
  const updatedHighscores = [...existingHighscores, newHighscore];

  // Use filter to remove duplicates based on both username and score
  const filteredHighscores = updatedHighscores.filter((score, index, self) => {
    return (
      self.findIndex(
        (s) => s.username === score.username && s.score === score.score,
      ) === index
    );
  });

  // Sort the array in descending order based on the score
  filteredHighscores.sort((a, b) => b.score - a.score);

  // Take the top 10 highscores
  const top10Highscores = filteredHighscores.slice(0, 10);

  // Fill in missing positions with empty usernames and zero scores
  while (top10Highscores.length < 10) {
    top10Highscores.push({
      username: '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0',
      score: 0,
    });
  }
  if (top10Highscores.length > 0 && top10Highscores[0].username.trim() === '') {
    top10Highscores[0].username = '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0';
  }
  // Save the updated highscores back to local storage
  localStorage.setItem('highscores', JSON.stringify(top10Highscores));

  return top10Highscores.map((score, index) => ({
    ...score,
    ranking: index + 1,
  }));
};

export default HandleHighScores;
