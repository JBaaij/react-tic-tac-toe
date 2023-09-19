type Grid = number[][];

interface WinningMove {
  row: number;
  col: number;
}

interface PotentialWinResult {
  grid: Grid;
  winningMove?: WinningMove;
  value: number;
}
let playMove = true;

const playedMove = (playMove: boolean) => {
  playMove = false;
};

export const checkPotentialWinRow = (
  grid: Grid,
  value: number,
): PotentialWinResult | null => {
  const oppositePlayer = value === 1 ? 2 : 1;
  for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
    const row = grid[rowIndex];
    const emptyCells = row.reduce<number[]>((acc, cell, colIndex) => {
      if (cell === 0) {
        acc.push(colIndex);
      }
      return acc;
    }, []);

    if (
      emptyCells.length === 1 &&
      row.filter((cellValue) => cellValue === value).length ===
        grid.length - 1 &&
      playMove
    ) {
      const columnIndex = emptyCells[0];
      const newGrid = [...grid];
      newGrid[rowIndex][columnIndex] = value;
      return {
        grid: newGrid,
        //winningMove: { row: rowIndex, col: columnIndex },
        value,
      };
    }
    if (
      emptyCells.length === 1 &&
      row.filter((cellValue) => cellValue === oppositePlayer).length ===
        grid.length - 1
    ) {
      playedMove(false);
      console.log('oppositePlayer:', oppositePlayer, 'value after', value);
      const columnIndex = emptyCells[0];
      const newGrid = [...grid];
      newGrid[rowIndex][columnIndex] = value;

      return {
        grid: newGrid,
        //winningMove: { row: rowIndex, col: columnIndex },
        value,
      };
    }
  }

  return null;
};

export const checkPotentialWinColumn = (
  grid: Grid,
  value: number,
): PotentialWinResult | null => {
  for (let colIndex = 0; colIndex < grid.length; colIndex++) {
    const oppositePlayer = value === 1 ? 2 : 1;
    const column = grid.map((row) => row[colIndex]);
    const emptyCells = column.reduce<number[]>((acc, cell, rowIndex) => {
      if (cell === 0) {
        acc.push(rowIndex);
      }
      return acc;
    }, []);

    if (
      emptyCells.length === 1 &&
      column.filter((cellValue) => cellValue === value).length ===
        grid.length - 1 &&
      playMove
    ) {
      playedMove(false);
      const rowIndex = emptyCells[0];
      const newGrid = [...grid];
      newGrid[rowIndex][colIndex] = value;
      return {
        grid: newGrid,
        //winningMove: { row: rowIndex, col: colIndex },
        value,
      };
    }
    if (
      emptyCells.length === 1 &&
      column.filter((cellValue) => cellValue === oppositePlayer).length ===
        grid.length - 1 &&
      playMove
    ) {
      playedMove(false);
      const rowIndex = emptyCells[0];
      const newGrid = [...grid];
      newGrid[rowIndex][colIndex] = value;
      return {
        grid: newGrid,
        //winningMove: { row: rowIndex, col: colIndex },
        value,
      };
    }
  }

  return null;
};

export const checkPotentialWinDiagonal = (
  grid: Grid,
  value: number,
): PotentialWinResult | null => {
  const oppositePlayer = value === 1 ? 2 : 1;
  const diagonal1 = grid.map((row, index) => row[index]);
  const diagonal2 = grid.map((row, index) => row[row.length - 1 - index]);

  const emptyCells1 = diagonal1.reduce<number[]>((acc, cell, index) => {
    if (cell === 0) {
      acc.push(index);
    }
    return acc;
  }, []);

  const emptyCells2 = diagonal2.reduce<number[]>((acc, cell, index) => {
    if (cell === 0) {
      acc.push(index);
    }
    return acc;
  }, []);

  if (
    emptyCells1.length === 1 &&
    diagonal1.filter((cellValue) => cellValue === value).length ===
      grid.length - 1 &&
    playMove
  ) {
    const index = emptyCells1[0];
    const newGrid = [...grid];
    newGrid[index][index] = value;
    return { grid: newGrid, winningMove: { row: index, col: index }, value };
  }

  if (
    emptyCells2.length === 1 &&
    diagonal2.filter((cellValue) => cellValue === value).length ===
      grid.length - 1 &&
    playMove
  ) {
    playedMove(false);
    const index = emptyCells2[0];
    const newGrid = [...grid];
    newGrid[index][grid.length - 1 - index] = value;
    return {
      grid: newGrid,
      //winningMove: { row: index, col: grid.length - 1 - index },
      value,
    };
  }
  if (
    emptyCells1.length === 1 &&
    diagonal1.filter((cellValue) => cellValue === oppositePlayer).length ===
      grid.length - 1 &&
    playMove
  ) {
    playedMove(false);
    const index = emptyCells1[0];
    const newGrid = [...grid];
    newGrid[index][index] = value;
    return { grid: newGrid, winningMove: { row: index, col: index }, value };
  }

  if (
    emptyCells2.length === 1 &&
    diagonal2.filter((cellValue) => cellValue === oppositePlayer).length ===
      grid.length - 1 &&
    playMove
  ) {
    playedMove(false);
    const index = emptyCells2[0];
    const newGrid = [...grid];
    newGrid[index][grid.length - 1 - index] = value;
    return {
      grid: newGrid,
      //winningMove: { row: index, col: grid.length - 1 - index },
      value,
    };
  }
  return null;
};
