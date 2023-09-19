import {
  checkColumnIsSameValue,
  checkDiagonalIsSameValue,
  checkRowIsSameValue,
  createGrid,
  setGridCellValue,
} from '../helpers/grid/grid';
import { useCallback, useContext, useEffect, useState } from 'react';
import GridItem from '../components/game/GridItem';
import { GridCellValue } from '../helpers/grid/types';
import Alert from '../components/alert/Alert';
import { AppStateContext } from '../AppStateContext';
import { makeRandomCpuMove } from '../helpers/grid/cpumove';
import {
  checkPotentialWinRow,
  checkPotentialWinColumn,
  checkPotentialWinDiagonal,
} from '../helpers/grid/checkwin';

const GameScreen = () => {
  const [grid, setGrid] = useState(createGrid({ size: 3 }));
  const [player, setPlayer] = useState<1 | 2>(1);
  const CpuNoSmartMove = (grid: number[][], player: number) => {
    if (player === 2) {
      const [newGrid, newPlayer] = makeRandomCpuMove(grid, player);
      setGrid(newGrid);
    }
  };
  const [isTicTacToe, setIsTicTacToe] = useState(false);
  const [smartMove, setSmartMove] = useState(false);

  const goToCpu = (newGrid: number[][]) => {
    const isPlayer1Winner = checkIsTicTacToe(newGrid, 1);

    if (isPlayer1Winner) {
      setIsTicTacToe(true);
      let player = 1;
      window.alert(`Player ${player.toString()} has won!`);
      onReset();
      return;
    }
    const player = 2;
    if (checkSmartRow(newGrid, player)) {
      return;
      // Handle smart move logic
    }
    if (checkSmartColumn(newGrid, player)) {
      return;
      // Handle smart move logic
    }
    if (checkSmartDiagonal(newGrid, player)) {
      return;
      // Handle smart move logic
    } else {
      //const player = 2;
      CpuNoSmartMove(newGrid, player);
    }
  };

  const onGridItemClick = useCallback(
    (value: GridCellValue) => {
      if (value.value !== 0) return;
      const newGrid = setGridCellValue({
        grid,
        cellValue: { ...value, value: 1 },
      });

      setGrid(newGrid);
      goToCpu(newGrid);
    },
    [grid, isTicTacToe],
  );

  const appState = useContext(AppStateContext);

  const checkIsTicTacToe = (grid: number[][], player: 1 | 2) => {
    const isOneOfRowsTheSame = grid.some((row, index) => {
      const result = checkRowIsSameValue({ grid, row: index, value: player });
      return result;
    });
    const isOneOfColumnTheSame = grid.some((row, index) =>
      checkColumnIsSameValue({ grid, column: index, value: player }),
    );
    const isDiagonalTheSame = checkDiagonalIsSameValue({ grid, value: player });
    return isOneOfRowsTheSame || isOneOfColumnTheSame || isDiagonalTheSame;
  };
  type Grid = number[][];
  interface PotentialWinResult {
    grid: Grid;
    value: number;
  }
  const checkSmartRow = (
    grid: Grid,
    player: 1 | 2,
  ): PotentialWinResult | null => {
    return checkPotentialWinRow(grid, player);
  };

  const checkSmartColumn = (
    grid: Grid,
    player: 1 | 2,
  ): PotentialWinResult | null => {
    return checkPotentialWinColumn(grid, player);
  };

  const checkSmartDiagonal = (
    grid: Grid,
    player: 1 | 2,
  ): PotentialWinResult | null => {
    return checkPotentialWinDiagonal(grid, player);
  };

  const getPreviousPlayer = (player: 1 | 2) => {
    return player === 1 ? 2 : 1;
  };

  useEffect(() => {
    setIsTicTacToe(checkIsTicTacToe(grid, getPreviousPlayer(player)));
  }, [grid, player]);

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
