import TitleComponent from '../components/TitleComponent';
import './HighScoreScreen.css';
import LabelButton from '../components/LabelButton';
import { useNavigate } from 'react-router-dom';
import LabelBox from '../components/icons/Label';
import { useContext, useEffect } from 'react';
import { AppStateContext } from '../AppStateContext';
//import { logEndScore } from '../helpers/grid/handelHighScores';

const HighScoreScreen = () => {
  const appState = useContext(AppStateContext);
  const navigate = useNavigate();

  const onNavigateGoToStartScreen = () => {
    navigate('/');
  };

  useEffect(() => {
    console.log(`username ${appState.userName}`);
    console.log(`endScore ${appState.endScore}`);
  }, [appState.endScore]);

  return (
    <div>
      <TitleComponent title={'High scores screen'} />
      <LabelBox labelText="High Scores" />
      <LabelBox labelText="Win: 2 points - - Draw: 1 point" />
      <LabelBox labelText="Ranking - - Name - - Points" />
      <p>{appState.userName}</p>
      <p>{appState.playerScore}</p>
      <div id="highscore3" className="contgridl">
        <div id="gridl1" className="gridl-item"></div>
        <div id="gridl2" className="gridl-item"></div>
        <div id="gridl3" className="gridl-item"></div>
        <div id="gridl4" className="gridl-item"></div>
        <div id="gridl5" className="gridl-item"></div>
        <div id="gridl6" className="gridl-item"></div>
        <div id="gridl7" className="gridl-item"></div>
        <div id="gridl8" className="gridl-item"></div>
        <div id="gridl9" className="gridl-item"></div>
        <div id="gridl10" className="gridl-item"></div>

        <LabelButton
          label={'Delete Highscores'}
          onClick={onNavigateGoToStartScreen}
          className="vscpu"
        />
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
