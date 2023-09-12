import {
    checkColumnIsSameValue,
    checkDiagonalIsSameValue,
    checkRowIsSameValue,
    createGrid,
    setGridCellValue
} from "../helpers/grid/grid";
import {useCallback, useEffect, useState} from "react";
import GridItem from "../components/game/GridItem";
import {GridCellValue} from "../helpers/grid/types";
import Alert from "../components/alert/Alert";

const GameScreen = () => {
    // set ik local state met initial state van createGrid
    const [grid, setGrid] = useState(createGrid({ size: 3 }));
    // ts using <> to set type is called generic. In this case player can be 1 or 2
    const [player, setPlayer] = useState<1 | 2>(1);
    const [isTicTacToe, setIsTicTacToe] = useState(false);

    const checkIsTicTacToe = (grid: number[][], player: 1 | 2) => {
        const isOneOfRowsTheSame = grid.some((row,  index) => checkRowIsSameValue({grid, row: index, value: player}));
        const isOneOfColumnTheSame = grid.some((row,  index) => checkColumnIsSameValue({grid, column: index, value: player}));
        const isDiagonalTheSame = checkDiagonalIsSameValue({grid, value: player});
        return isOneOfRowsTheSame || isOneOfColumnTheSame || isDiagonalTheSame;
    };

    const getPreviousPlayer = (player: 1 | 2) => {
        return player === 1 ? 2 : 1;
    }

    useEffect(() => {
        setIsTicTacToe(checkIsTicTacToe(grid, getPreviousPlayer(player)));
    }, [grid, player]);

    const onGridItemClick = useCallback((value: GridCellValue) => {
        if(value.value !== 0) return
        const newGrid = setGridCellValue({grid, cellValue: {...value, value: player}});
        setGrid(newGrid);
        setPlayer(player === 1 ? 2 : 1);
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
                    return <GridItem onClick={onGridItemClick} value={gridValue} key={cellIndex}/>
                });
            })}
            {isTicTacToe && <Alert name={getPreviousPlayer(player).toString()} okOnClick={onReset}/>}
        </div>
    );
};

export default GameScreen;
