import TitleComponent from '../components/TitleComponent';
import './HighScoreScreen.css';
import LabelButton from '../components/LabelButton';
import {useNavigate} from "react-router-dom";

const HighScoreScreen = () => {
  const navigate = useNavigate();
  const onNavigateGoToStartScreen = () => {
    navigate('/');
  };

  return (
    <div>
      <TitleComponent title={'High scores screen'} />

      <div id="highscore3" className="contgridl">
        <div className="gridl-item-yellow gridl-item">
          High Scores
        </div>
        <div className="gridl-item-blue gridl-item">
          Ranking - - Name - - Points
        </div>
        <div className="gridl-item-blue gridl-item">
          Win: 2 points - - Draw: 1 point
        </div>
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
