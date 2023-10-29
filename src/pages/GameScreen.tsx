import {
  checkColumnIsSameValue,
  checkDiagonalIsSameValue,
  checkRowIsSameValue,
  createGrid,
  getEmptyCells,
  isEmpty,
  setGridCellValue,
} from '../helpers/grid/grid';
import { useCallback, useContext, useEffect, useState } from 'react';
import GridItem from '../components/game/GridItem';
import { GridCellValue } from '../helpers/grid/types';
import Alert from '../components/alert/Alert';
import Alert2 from '../components/alert/Alert2';
import { AppStateContext } from '../AppStateContext';
import CountBox from '../components/icons/CountBox';

const GameScreen = () => {
  const [grid, setGrid] = useState(createGrid({ size: 3 }));
  const [player, setPlayer] = useState<1 | 2>(1);
  const [isTicTacToe, setIsTicTacToe] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const appState = useContext(AppStateContext);
  const [turnNumber, setTurnNumber] = useState(1);
  const [gameNumber, setGameNumber] = useState(1);
  const [dummy, setDummy] = useState(false);
  const [playerScore, setPlayerScore] = useState(0);
  const isYourTurn = useCallback(
    (player: 1 | 2 | null) => {
      return player === appState.selectedChoice;
    },
    [appState.selectedChoice],
  );

  const getCPUPlayer = () => (appState.selectedChoice === 1 ? 2 : 1);
  const getPlayer = () => appState.selectedChoice;

  //const checkDraw = (turnNumber: number) => {

  const doPlayerMove = (value: GridCellValue) => {
    if (value.value !== 0) return;
    const newGrid = setGridCellValue({
      grid,
      cellValue: { ...value, value: player },
    });
    setGrid(newGrid);
  };

  const doRandomMove = (grid: number[][]) => {
    const emptyCells = getEmptyCells(grid);
    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    if (emptyCells.length === 0) {
      return;
    }
    const newCellValue: GridCellValue = {
      ...emptyCells[randomIndex],
      value: player,
    };
    const newGrid = setGridCellValue({ grid, cellValue: newCellValue });
    setGrid(newGrid);
  };

  const getPossibleWinningMoveByPlayer = (grid: number[][], player: 1 | 2) => {
    let possibleWinningMove: GridCellValue | null = null;
    grid.forEach((row, rowIndex) => {
      row.forEach((cell, cellIndex) => {
        if (cell !== 0) {
          return;
        }
        const newCellValue: GridCellValue = {
          x: cellIndex,
          y: rowIndex,
          value: player,
        };
        if (
          checkIsTicTacToe(
            setGridCellValue({ grid, cellValue: newCellValue }),
            player,
          )
        ) {
          possibleWinningMove = newCellValue;
        }
      });
    });
    return possibleWinningMove;
  };

  const doCPUMove = (grid: number[][]) => {
    const cpuWinningMove = getPossibleWinningMoveByPlayer(grid, getCPUPlayer());
    const playerWinningMove = getPossibleWinningMoveByPlayer(grid, getPlayer());
    if (cpuWinningMove) {
      setGrid(
        setGridCellValue({ grid, cellValue: cpuWinningMove as GridCellValue }),
      );
      return;
    }
    if (playerWinningMove) {
      setGrid(
        setGridCellValue({
          grid,
          cellValue: {
            ...(playerWinningMove as GridCellValue),
            value: getCPUPlayer(),
          } as GridCellValue,
        }),
      );
      return;
    }

    doRandomMove(grid);
  };

  const switchPlayer = () => {
    setPlayer(togglePlayer(player));
  };

  const onGridItemClick = (value: GridCellValue) => {
    if (isYourTurn(player)) doPlayerMove(value);
  };

  const checkIsTicTacToe = (grid: number[][], player: 1 | 2) => {
    const isOneOfRowsTheSame = grid.some((_row, index) => {
      const result = checkRowIsSameValue({ grid, row: index, value: player });
      return result;
    });
    const isOneOfColumnTheSame = grid.some((row, index) =>
      checkColumnIsSameValue({ grid, column: index, value: player }),
    );
    const isDiagonalTheSame = checkDiagonalIsSameValue({ grid, value: player });
    return isOneOfRowsTheSame || isOneOfColumnTheSame || isDiagonalTheSame;
  };

  const togglePlayer = (player: 1 | 2) => (player === 1 ? 2 : 1);

  useEffect(() => {
    const isTicTacToe = checkIsTicTacToe(grid, player);
    if (isTicTacToe) {
      if (player === appState.selectedChoice) {
        setPlayerScore(playerScore + 2);
      }
      setGameNumber(gameNumber + 1);
      setIsTicTacToe(true);
      return;
    }
    if (turnNumber === grid.length * grid.length) {
      setPlayerScore(playerScore + 1);
      setGameNumber(gameNumber + 1);
      switchPlayer();
      setIsDraw(true);
    }
    if (!isEmpty(grid)) {
      switchPlayer();
      setTurnNumber(turnNumber + 1);
    }
  }, [grid]);

  useEffect(() => {
    if (!isYourTurn(player) && !dummy) {
      doCPUMove(grid);
    }
    if (!isYourTurn(player) && dummy) {
      setDummy(false);
      switchPlayer();
    }
  }, [player]);

  const onReset = useCallback(() => {
    setTurnNumber(1);
    setIsDraw(false);
    setGrid(createGrid({ size: 3 }));
    setPlayer(appState.selectedChoice);
    if (!isYourTurn(player)) {
      setDummy(true);
      doCPUMove(grid);
    }
    setIsTicTacToe(false);
  }, []);
  // <IconX width={22} height={22} />
  return (
    <div>
      <CountBox labelText={`Gamenumber: ${gameNumber}`} />
      <CountBox labelText={`Playerscore: ${playerScore}`} />
      <div className="contgrid">
        {grid.map((row, rowIndex) => {
          return row.map((cell, cellIndex) => {
            const gridValue: GridCellValue = {
              x: cellIndex,
              y: rowIndex,
              value: grid[rowIndex][cellIndex],
            };
            return (
              <GridItem
                onClick={onGridItemClick}
                value={gridValue}
                key={cellIndex}
              />
            );
          });
        })}
        {isTicTacToe && <Alert name={player.toString()} okOnClick={onReset} />}
        {isDraw && <Alert2 okOnClick={onReset} />}
      </div>
    </div>
  );
};

export default GameScreen;
