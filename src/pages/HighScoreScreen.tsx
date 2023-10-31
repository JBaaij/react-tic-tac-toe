import TitleComponent from '../components/TitleComponent';
import './HighScoreScreen.css';
import LabelButton from '../components/LabelButton';
import { useNavigate } from 'react-router-dom';
import LabelBox from '../components/icons/Label';
import { useContext, useEffect, useState } from 'react';
import { AppStateContext } from '../AppStateContext';
//import { logEndScore } from '../helpers/grid/handelHighScores';

const HighScoreScreen = () => {
  const appState = useContext(AppStateContext);
  const navigate = useNavigate();
  const [refresh, setRefresh] = useState(false);
  const [avoidDoubleScore, setAvoidDoubleScore] = useState(false);
  const onNavigateGoToStartScreen = () => {
    navigate('/');
  };

  function deleteHighscores() {
    setRefresh(true);
    // Optionally, you can reset the state to an empty array if needed
    // setTop10Highscores([]);
  }

  useEffect(() => {
    if (refresh) {
      localStorage.removeItem('highscores');
      setRefresh(false); // Reset the refresh state
    }
  }, [refresh]);

  // Step 1: Load existing highscores from local storage

  const existingHighscores: { username: string; score: number }[] = JSON.parse(
    localStorage.getItem('highscores') || '[]',
  );

  // Step 2: Add the new highscore to the list
  const newHighscore: { username: string; score: number } = {
    username: appState.userName,
    score: appState.endScore,
  };

  const updatedHighscores: { username: string; score: number }[] = [
    ...existingHighscores,
    newHighscore,
  ];
  console.log(updatedHighscores);

  // Step 3: Sort the list in descending order based on endScore
  updatedHighscores.sort((a, b) => b.score - a.score);
  console.log(updatedHighscores);
  // Step 4: Take the top 10 highscores
  const top10Highscores: { username: string; score: number }[] = Array.from(
    { length: 10 },
    (_, index) => updatedHighscores[index] || { username: '', score: 0 },
  );

  // Step 5: Save the updated highscores back to local storage
  if (!avoidDoubleScore) {
    localStorage.setItem('highscores', JSON.stringify(top10Highscores));
    console.log('yoyo man');
  }
  // Step 6: Render the highscores table (assuming React component)

  return (
    <div>
      <TitleComponent title={'High scores screen'} />
      <LabelBox labelText="High Scores" />
      <LabelBox labelText="Win: 2 points - - Draw: 1 point" />
      <LabelBox labelText="Ranking - - Name - - Points" />
      <h2>Highscores</h2>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Username</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {top10Highscores.map((score, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{score.username}</td>
              <td>{score.score}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <LabelButton
        label={'Delete Highscores'}
        onClick={deleteHighscores}
        className="vscpu"
      />
      <LabelButton
        label={'Go to Start'}
        onClick={onNavigateGoToStartScreen}
        className="vsplayer"
      />
    </div>
  );
};

export default HighScoreScreen;
