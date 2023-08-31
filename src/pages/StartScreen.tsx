import TitleComponent from '../components/TitleComponent';
import LabelButton from '../components/LabelButton';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { createGrid, setGridCellValue } from '../helpers/grid/grid';
import './StartScreen.css';
import IconX from "../components/icons/IconX";
import IconO from "../components/icons/IconO";

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
        <IconX width={15} height={15}/>
        <div style={{width: 4}} />
        <IconO width={15} height={15}/>
      </div>
      <div className="box2">
        <h5 className="firstline">Pick player 1's mark </h5>
        <form className="box2-buttons">
          <div id="radiobut" style={{display: 'flex'}}>
            <input type="radio" id="ticx" name="choice" />
            <label htmlFor="ticx">
              <IconX width={30} height={30} color={"#ccc"}/>
            </label>
            <div style={{width: 4}} />
            <input type="radio" id="tico" name="choice" />
            <label htmlFor="tico">
              <IconO width={30} height={30} color={"#ccc"}/>
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
