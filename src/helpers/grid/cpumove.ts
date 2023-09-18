export const makeRandomCpuMove = (
  grid: number[][],
  player: number,
): [number[][], number] => {
  console.log('check 1');

  // Find all empty cells using map and filter
  const emptyCells: [number, number][] = grid
    .flatMap((row, rowIndex) =>
      row.map((cell, colIndex) => (cell === 0 ? [rowIndex, colIndex] : null)),
    )
    .filter((cell) => cell !== null) as [number, number][];
  console.log(emptyCells);

  // If there are empty cells and the player is 2, choose a random one
  if (emptyCells.length > 0 && player === 2) {
    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    const [row, col] = emptyCells[randomIndex];
    console.log('randomIndex:', randomIndex);
    console.log('emptyCells[randomIdex]', emptyCells[randomIndex]);

    // Make the random move by updating the grid
    const newGrid = grid.map((rowArray, rowIndex) =>
      rowIndex === row
        ? rowArray.map((cell, colIndex) => (colIndex === col ? player : cell))
        : rowArray,
    );

    player = 1;
    console.log('updated?', newGrid, player);
    // Toggle player for the next move

    return [newGrid, player];
  }

  // If no empty cells are available, return the original grid and player
  return [grid, player];
};
