export interface DiagonalIsSameValue {
    grid: number[][];
    value: GridValue;
}

export interface ColumnIsSameValue {
    grid: number[][];
    column: number;
    value: GridValue;
}

export interface RowIsSameValue {
    grid: number[][];
    row: number;
    value: GridValue;
}

export interface GridCellValue {
    x: number;
    y: number;
    value: GridValue;
}

export type GridValue = 0 | 1 | 2;
