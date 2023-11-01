import { useContext } from 'react';
import { AppStateContext } from '../../AppStateContext';
const HandleHighScores = () => {
  const appState = useContext(AppStateContext);
  const existingHighscores = JSON.parse(
    localStorage.getItem('highscores') || '[]',
  );
  const newHighscore = {
    username: appState.userName,
    score: appState.endScore,
  };
  const updatedHighscores = [...existingHighscores, newHighscore];
  const filteredHighscores = updatedHighscores.filter((score, index, self) => {
    return (
      self.findIndex(
        (s) => s.username === score.username && s.score === score.score,
      ) === index
    );
  });
  filteredHighscores.sort((a, b) => b.score - a.score);
  const top10Highscores = filteredHighscores.slice(0, 10);
  while (top10Highscores.length < 10) {
    top10Highscores.push({
      username: '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0',
      score: 0,
    });
  }
  if (top10Highscores.length > 0 && top10Highscores[0].username.trim() === '') {
    top10Highscores[0].username = '';
  }
  localStorage.setItem('highscores', JSON.stringify(top10Highscores));

  return top10Highscores.map((score, index) => ({
    ...score,
    ranking: index + 1,
  }));
};

export default HandleHighScores;
