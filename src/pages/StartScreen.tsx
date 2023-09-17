import TitleComponent from '../components/TitleComponent';
import LabelButton from '../components/LabelButton';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useCallback, useContext } from 'react';
import { createGrid, setGridCellValue } from '../helpers/grid/grid';
import './StartScreen.css';
import IconX from '../components/icons/IconX';
import IconO from '../components/icons/IconO';
import { AppStateContext } from '../AppStateContext';

const StartScreen = () => {
  const [grid, setGrid] = useState(createGrid({ size: 3 }));
  const [currentPlayer, setCurrentPlayer] = useState(1); // [1, 2]
  const navigate = useNavigate();
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);
  const [alertNoChoice, setAlertNoChoice] = useState(false);
  const appState = useContext(AppStateContext);

  const onPlayGame = () => {
    if (selectedChoice === 1 || selectedChoice === 2) {
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

  const onRadioButtonClick = (choice: number) => {
    setSelectedChoice(choice);
  };

  useEffect(() => {
    console.log(appState.selectedChoice);
    console.log(selectedChoice);
  }, [selectedChoice]);

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
              checked={appState.selectedChoice === 1}
              onChange={() => onRadioButtonClick(1)}
            />
            <label htmlFor="ticx">
              <div style={{ marginLeft: 210 }} />
              <IconX
                width={30}
                height={30}
                color={selectedChoice === 1 ? '#EDB809' : '#ccc'}
              />
            </label>

            <input
              type="radio"
              id="tico"
              name="choice"
              checked={selectedChoice === 2}
              onChange={() => setSelectedChoice(2)}
            />
            <label htmlFor="tico">
              <IconO
                width={30}
                height={30}
                color={selectedChoice === 2 ? '#EDB809' : '#ccc'}
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
