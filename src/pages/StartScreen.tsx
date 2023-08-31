import TitleComponent from '../components/TitleComponent';
import LabelButton from '../components/LabelButton';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { createGrid, setGridCellValue } from '../helpers/grid/grid';
import './StartScreen.css';

const StartScreen = () => {
  const [grid, setGrid] = useState(createGrid({ size: 3 }));
  const [currentPlayer, setCurrentPlayer] = useState(1); // [1, 2]
  const navigate = useNavigate();
  const onPlayGame = () => {
    const newGrid = setGridCellValue({
      grid,
      x: 1,
      y: 1,
      value: currentPlayer === 1 ? 1 : 2,
    });
    setGrid(newGrid);
    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
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
        <img
          className="icon-x1"
          src="../pages/assets/icon-x.svg"
          alt="icon-x"
        />
        <img
          className="icon-o1"
          src="../pages/assets/icon-o.svg"
          alt="icon-o"
        />
      </div>
      <div className="box2">
        <h5 className="firstline">Pick player 1's mark </h5>
        <form className="box2-buttons">
          <div id="radiobut">
            <input type="radio" id="ticx" name="choice" />
            <label htmlFor="ticx">
              <svg
                className="icon-x2"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z"
                  fill="#b2b2b2"
                  fill-rule="evenodd"
                />
              </svg>
            </label>

            <input type="radio" id="tico" name="choice" />
            <label htmlFor="tico">
              <svg
                className="icon-o2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64">
                <path
                  d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z"
                  fill="#b2b2b2"
                />
              </svg>
            </label>
          </div>
        </form>

        <h5 className="secondline">Remember : X goes first New Game</h5>
        <form>
          <input type="text" id="nameInput" placeholder="Enter your name" />
          <button id="submitButton">Submit</button>
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
