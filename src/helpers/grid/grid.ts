import {ColumnIsSameValue, DiagonalIsSameValue, GridCellValue, RowIsSameValue} from "./types";

export const createGrid = (args: {
    size: number;
}) => {
    const { size } = args;
    return Array.from(Array(size), () => new Array(size).fill(0));
};

export const setGridCellValue = (args: GridCellValue) => {
    const { grid, x, y, value } = args;
    grid[y][x] = value;
};

export const checkRowIsSameValue = (args: RowIsSameValue) => {
    const { grid, row, value } = args;
    return grid[row].every(cell => cell === value);
};

export const checkColumnIsSameValue = (args: ColumnIsSameValue) => {
    const { grid, column, value } = args;
    return grid.every(row => row[column] === value);
};

export const checkDiagonalIsSameValue = (args: DiagonalIsSameValue) => {
    const { grid, value } = args;
    const diagonal1 = grid.map((row, index) => row[index]);
    const diagonal2 = grid.map((row, index) => row[row.length - 1 - index]);
    return diagonal1.every(cell => cell === value) || diagonal2.every(cell => cell === value);
};
