export const makeRandomCpuMove = (
  grid: number[][],
  player: number,
): [number[][], number] => {
  console.log('check 1');
  const emptyCells: [number, number][] = [];

  // Find all empty cells
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === 0) {
        emptyCells.push([row, col]);
      }
    }
  }

  // If there are empty cells, choose a random one
  if (emptyCells.length > 0 && player === 2) {
    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    const [row, col] = emptyCells[randomIndex];

    // Make the random move by updating the grid
    const newGrid = [...grid];
    newGrid[row][col] = player;
    player = 1;
    console.log({ newGrid, player });
    // Toggle player for the next move

    return [newGrid, player];
  }

  // If no empty cells are available, return the original grid and player
  return [grid, player];
};
