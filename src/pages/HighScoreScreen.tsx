import TitleComponent from '../components/TitleComponent';
import './HighScoreScreen.css';
import LabelButton from '../components/LabelButton';
import { useNavigate } from 'react-router-dom';
import LabelBox from '../components/icons/Label';
import { useContext, useEffect, useState } from 'react';
import { AppStateContext } from '../AppStateContext';
import HandleHighScores from '../helpers/grid/handleHighScores';
//import { logEndScore } from '../helpers/grid/handelHighScores';

const HighScoreScreen = () => {
  const appState = useContext(AppStateContext);
  const navigate = useNavigate();
  const [refresh, setRefresh] = useState(false);
  const [avoidDoubleScore, setAvoidDoubleScore] = useState(false);
  const onNavigateGoToStartScreen = () => {
    navigate('/');
  };
  interface Highscore {
    username: string;
    score: number;
  }

  const highScores: Highscore[] = HandleHighScores() || [];

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
  // const executeHighScores = HandleHighScores();

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
          {highScores.map((score, index) => (
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
