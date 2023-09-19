import {
  checkColumnIsSameValue,
  checkDiagonalIsSameValue,
  checkRowIsSameValue,
  createGrid,
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
  const appState = useContext(AppStateContext);

  const isYourTurn = useCallback((player: 1 | 2 | null) => {
    return player === appState.selectedChoice;
  }, [appState.selectedChoice]);

  const doMove = (value: GridCellValue) => {
    if (isYourTurn(player)) doPlayerMove(value);
    doCPUMove(value);
  };

  const doPlayerMove = (value: GridCellValue) => {
    if (value.value !== 0) return;
    const newGrid = setGridCellValue({grid, cellValue: { ...value, value: player }});
    setGrid(newGrid);
  };

  const canPlayerHaveTicTacToe = (grid: number[][], player: 1 | 2) => {
    const hasWinPotentials = grid.map((row, rowIndex) => {
      return row.map((cell, cellIndex) => {
        const newCellValue: GridCellValue = {
          x: cellIndex,
          y: rowIndex,
          value: player,
        };
        if (cell === 0) {
          const newGrid = setGridCellValue({grid, cellValue: newCellValue});
          if (checkIsTicTacToe(newGrid, player)) {
            return true;
          }
        }
        return false;
      })
    });
    return hasWinPotentials.some(row => row.some(cell => cell === true));
  };

  const doCPUMove = (value: GridCellValue) => {
    if(canPlayerHaveTicTacToe(grid, 2)) {
      // do it
    }
    if(canPlayerHaveTicTacToe(grid, 1)) {
      // block it
    };
    // random move
  };

  const switchPlayer = () => setPlayer(togglePlayer(player));

  const onGridItemClick = (value: GridCellValue) => {
    doMove(value);
    switchPlayer();
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

  const getPreviousPlayer = (player: 1 | 2) => {
    return player === 1 ? 2 : 1;
  };

  const togglePlayer = (player: 1 | 2) => player === 1 ? 2 : 1;

  useEffect(() => {
    setIsTicTacToe(checkIsTicTacToe(grid, getPreviousPlayer(player)));
  }, [grid]);

  const onReset = useCallback(() => {
    setGrid(createGrid({ size: 3 }));
    setPlayer(1);
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
          name={getPreviousPlayer(player).toString()}
          okOnClick={onReset}
        />
      )}
    </div>
  );
};

export default GameScreen;
