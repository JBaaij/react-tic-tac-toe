import TitleComponent from '../components/TitleComponent';
import LabelButton from '../components/LabelButton';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';
import { createGrid, setGridCellValue } from '../helpers/grid/grid';
import './StartScreen.css';
import IconX from '../components/icons/IconX';
import IconO from '../components/icons/IconO';

const StartScreen = () => {
  const [grid, setGrid] = useState(createGrid({ size: 3 }));
  const [currentPlayer, setCurrentPlayer] = useState(1); // [1, 2]
  const navigate = useNavigate();
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [alertNoChoice, setAlertNoChoice] = useState(false);

  const onPlayGame = () => {
    if (selectedChoice === 'ticx' || selectedChoice === 'tico') {
      navigate('/game');
    }
    if (selectedChoice === null) {
      setAlertNoChoice(true);
    }
  };

  const onNavigateToGame = () => {
    navigate('/game');
  };

  const onNavigateToHighscores = () => {
    navigate('/highscore');
  };

  useEffect(() => {
    console.log('mounted');
  }, []);

  useEffect(() => {
    console.log(grid);
  }, [grid, currentPlayer]);

  return (
    <div className="container">
      <div className="box1">
        <IconX width={22} height={22} />
        <div style={{ width: 4 }} />
        <IconO width={22} height={22} />
      </div>
      <div className="box2">
        <h5 className="firstline">Pick player 1's mark </h5>

        <h5 className="secondline">Remember : X goes first New Game</h5>
        <form>
          <input type="text" id="nameInput" placeholder="Enter your name" />
          <button id="submitButton">Submit</button>
        </form>
        <form className="box2-buttons">
          <div id="radiobut" style={{ display: 'flex' }}>
            <input
              type="radio"
              id="ticx"
              name="choice"
              checked={selectedChoice === 'ticx'}
              onChange={() => setSelectedChoice('ticx')}
            />
            <label htmlFor="ticx">
              <div style={{ marginLeft: 210 }} />
              <IconX
                width={30}
                height={30}
                color={selectedChoice === 'ticx' ? '#EDB809' : '#ccc'}
              />
            </label>

            <input
              type="radio"
              id="tico"
              name="choice"
              checked={selectedChoice === 'tico'}
              onChange={() => setSelectedChoice('tico')}
            />
            <label htmlFor="tico">
              <IconO
                width={30}
                height={30}
                color={selectedChoice === 'tico' ? '#EDB809' : '#ccc'}
              />
            </label>
          </div>

          {alertNoChoice && <p> Please choose player X or O</p>}
        </form>
      </div>
      <LabelButton
        label={'New Game (vs CPU)'}
        onClick={onPlayGame}
        className="vscpu"
      />
      <LabelButton
        label={'New Game (vs Player)'}
        onClick={onNavigateToGame}
        className="vsplayer"
      />
      <LabelButton
        label={'Go to Highscores'}
        onClick={onNavigateToHighscores}
        className="gotohigh"
      />
    </div>
  );
};
export default StartScreen;
