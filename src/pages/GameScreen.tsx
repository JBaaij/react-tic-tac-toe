import {
  checkColumnIsSameValue,
  checkDiagonalIsSameValue,
  checkRowIsSameValue,
  createGrid, getEmptyCells,
  setGridCellValue,
} from '../helpers/grid/grid';
import {useCallback, useContext, useEffect, useState} from 'react';
import GridItem from '../components/game/GridItem';
import {GridCellValue} from '../helpers/grid/types';
import Alert from '../components/alert/Alert';
import {AppStateContext} from '../AppStateContext';

const GameScreen = () => {
  const [grid, setGrid] = useState(createGrid({ size: 3 }));
  const [player, setPlayer] = useState<1 | 2>(1);
  const [isTicTacToe, setIsTicTacToe] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const appState = useContext(AppStateContext);

  const isYourTurn = useCallback((player: 1 | 2 | null) => {
    return player === appState.selectedChoice;
  }, [appState.selectedChoice]);

  const getCPUPlayer = () => appState.selectedChoice === 1 ? 2 : 1;
  const getPlayer = () => appState.selectedChoice;

  const doPlayerMove = (value: GridCellValue) => {
    if (value.value !== 0) return;
    const newGrid = setGridCellValue({grid, cellValue: { ...value, value: player }});
    setGrid(newGrid);
    switchPlayer();
  };

  const doRandomMove = (grid: number[][]) => {
    const emptyCells = getEmptyCells(grid);
    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    if(emptyCells.length === 0) {
      return;
    }
    const newCellValue: GridCellValue = {...emptyCells[randomIndex], value: player}
    const newGrid = setGridCellValue({grid, cellValue: newCellValue});
    switchPlayer();
    setGrid(newGrid);
  }

  const getPossibleWinningMoveByPlayer = (grid: number[][], player: 1 | 2) => {
    let possibleWinningMove: GridCellValue | null = null;
    grid.forEach((row, rowIndex) => {
      row.forEach((cell, cellIndex) => {
        if(cell !== 0) {
          return;
        }
        const newCellValue: GridCellValue = {x: cellIndex, y: rowIndex, value: player,};
        if (checkIsTicTacToe(setGridCellValue({grid, cellValue: newCellValue}), player)) {
          possibleWinningMove = newCellValue;
        }
      })
    });
    return possibleWinningMove;
  };

  const doCPUMove = (grid: number[][]) => {
    const cpuWinningMove = getPossibleWinningMoveByPlayer(grid, getCPUPlayer());
    const playerWinningMove = getPossibleWinningMoveByPlayer(grid, getPlayer());
    if(cpuWinningMove) {
      switchPlayer();
      setGrid(setGridCellValue({grid, cellValue: cpuWinningMove as GridCellValue}));
      return;
    }
    if(playerWinningMove) {
      switchPlayer();
      setGrid(setGridCellValue({grid, cellValue: {...playerWinningMove as GridCellValue, value: getCPUPlayer()} as GridCellValue}));
      return;
    }

    doRandomMove(grid);
  };

  const switchPlayer = () => setPlayer(togglePlayer(player));

  const onGridItemClick = (value: GridCellValue) => {
    if(isYourTurn(player)) doPlayerMove(value);
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

  const togglePlayer = (player: 1 | 2) => player === 1 ? 2 : 1;

  useEffect(() => {
    setIsTicTacToe(checkIsTicTacToe(grid, player));
    console.log(isYourTurn(player))
    if(!isYourTurn(player)) {
        doCPUMove(grid);
    }
  }, [player, grid]);

  const onReset = useCallback(() => {
    setGrid(createGrid({ size: 3 }));
    setPlayer(1);
    if(!isYourTurn(player)) doCPUMove(grid)
    setIsTicTacToe(false);
  }, []);

  return (
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
      {isTicTacToe && (
        <Alert
          name={player.toString()}
          okOnClick={onReset}
        />
      )}
    </div>
  );
};

export default GameScreen;
