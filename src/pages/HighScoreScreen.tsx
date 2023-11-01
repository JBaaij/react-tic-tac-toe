import TitleComponent from '../components/TitleComponent';
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
      <div>
        {highScores.map((score, index) => (
          <div key={index}>
            <LabelBox
              labelRanking={index + 1}
              labelText={score.username}
              labelScore={score.score}
            />
          </div>
        ))}
      </div>
      <div>
        <LabelButton
          label={'Delete Highscores'}
          onClick={deleteHighscores}
          className="vscpu"
        />
      </div>
      <div>
        <LabelButton
          label={'Go to Start'}
          onClick={onNavigateGoToStartScreen}
          className="vsplayer"
        />
      </div>
    </div>
  );
};

export default HighScoreScreen;
