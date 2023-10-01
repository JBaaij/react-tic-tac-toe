import {
  ColumnIsSameValue,
  DiagonalIsSameValue,
  GridCellValue,
  RowIsSameValue,
} from './types';

interface GridArguments {
  size: number;
}

export const createGrid = (args: GridArguments)=> {
  const { size } = args;
  return Array.from(Array(size), () => new Array(size).fill(0));
};

export const setGridCellValue = (args: {
  grid: number[][];
  cellValue: GridCellValue;
}) => {
  const { grid, cellValue } = args;
  const { x, y, value } = cellValue;
  const newGrid = [...grid]; // Create a new copy of the grid array
  newGrid[y] = [...newGrid[y]]; // Create a new copy of the row array
  newGrid[y][x] = value;
  return newGrid;
};

export const checkRowIsSameValue = (args: RowIsSameValue) => {
  const { grid, row, value } = args;
  return grid[row].every((cell) => cell === value);
};

export const checkColumnIsSameValue = (args: ColumnIsSameValue) => {
  const { grid, column, value } = args;
  return grid.every((row) => row[column] === value);
};

export const checkDiagonalIsSameValue = (args: DiagonalIsSameValue) => {
  const { grid, value } = args;
  const diagonal1 = grid.map((row, index) => row[index]);
  const diagonal2 = grid.map((row, index) => row[row.length - 1 - index]);
  return (
    diagonal1.every((cell) => cell === value) ||
    diagonal2.every((cell) => cell === value)
  );
};

export const getEmptyCells = (grid: number[][]) => {
  const emptyCells: GridCellValue[] = [];
  grid.forEach((row, y) => {
    row.forEach((cell, x) => {
      if (cell === 0) {
        emptyCells.push({ x, y, value: 0 });
      }
    });
  });
  return emptyCells;
}
