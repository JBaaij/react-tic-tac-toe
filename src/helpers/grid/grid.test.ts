import {
    setGridCellValue,
    createGrid,
    checkRowIsSameValue,
    checkColumnIsSameValue,
    checkDiagonalIsSameValue,
} from './grid';
import {ColumnIsSameValue, DiagonalIsSameValue, GridCellValue, RowIsSameValue} from "./types";

describe('Grid functions', () => {
    let grid: number[][];

    beforeEach(() => {
        // Initialize the grid before each test
        grid = createGrid({ size: 3 });
    });

    describe('setGridCellValue', () => {
        it('should set the value of a cell in the grid', () => {
            const args: GridCellValue = { grid, x: 1, y: 2, value: 1 };
            setGridCellValue(args);
            expect(grid[2][1]).toEqual(1);
        });
    });

    describe('createGrid', () => {
        it('should create a grid of the specified size filled with 0s', () => {
            const size = 4;
            const result = createGrid({ size });
            expect(result.length).toEqual(size);
            expect(result.every(row => row.every(cell => cell === 0))).toBe(true);
        });
    });

    describe('checkRowIsSameValue', () => {
        it('should return true if all cells in the row have the same value', () => {
            grid[1] = [1, 1, 1];
            const args:RowIsSameValue = { grid, row: 1, value: 1 };
            const result = checkRowIsSameValue(args);
            expect(result).toBe(true);
        });

        it('should return false if not all cells in the row have the same value', () => {
            grid[2] = [2, 1, 2];
            const args: RowIsSameValue = { grid, row: 2, value: 2 };
            const result = checkRowIsSameValue(args);
            expect(result).toBe(false);
        });
    });

    describe('checkColumnIsSameValue', () => {
        it('should return true if all cells in the column have the same value', () => {
            grid.forEach(row => (row[1] = 2));
            const args: ColumnIsSameValue = { grid, column: 1, value: 2 };
            const result = checkColumnIsSameValue(args);
            expect(result).toBe(true);
        });

        it('should return false if not all cells in the column have the same value', () => {
            grid.forEach(row => (row[0] = 1));
            grid[2][0] = 2;
            const args: ColumnIsSameValue = { grid, column: 0, value: 1 };
            const result = checkColumnIsSameValue(args);
            expect(result).toBe(false);
        });
    });

    describe('checkDiagonalIsSameValue', () => {
        it('should return true if all cells in any diagonal have the same value', () => {
            grid = [
                [1, 0, 0],
                [0, 1, 0],
                [0, 0, 1]
            ];
            const args: DiagonalIsSameValue = { grid, value: 1 };
            const result = checkDiagonalIsSameValue(args);
            expect(result).toBe(true);
        });

        it('should return false if not all cells in any diagonal have the same value', () => {
            grid = [
                [1, 0, 0],
                [0, 1, 0],
                [0, 0, 2]
            ];
            const args: DiagonalIsSameValue = { grid, value: 1 };
            const result = checkDiagonalIsSameValue(args);
            expect(result).toBe(false);
        });
    });
});
