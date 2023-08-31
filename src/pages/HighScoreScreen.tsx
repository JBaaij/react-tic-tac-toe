import TitleComponent from '../components/TitleComponent';
import './HighScoreScreen.css';

const HighScoreScreen = () => {
  const onClick = () => {
    console.log('Game screen');
  };
  return (
    <div>
      <TitleComponent title={'High scores screen'} />
      <div id="highscore3" className="contgridl">
        <div id="texta" className="gridl-item">
          High Scores
        </div>
        <div id="textb" className="gridl-item">
          Ranking - - Name - - Points
        </div>
        <div id="textc" className="gridl-item">
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
        <button className="gridl-item" id="deleteScores">
          <h3>Delete High Scores</h3>
        </button>

        <button className="gridl-item" id="start">
          <h3>Go to Start</h3>
        </button>
      </div>
    </div>
  );
};

export default HighScoreScreen;
