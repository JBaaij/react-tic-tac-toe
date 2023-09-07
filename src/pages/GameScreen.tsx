import {checkRowIsSameValue, createGrid, setGridCellValue} from "../helpers/grid/grid";
import {useCallback, useEffect, useState} from "react";
import GridItem from "../components/game/GridItem";
import {GridCellValue} from "../helpers/grid/types";

const GameScreen = () => {
    // set ik local state met initial state van createGrid
    const [grid, setGrid] = useState(createGrid({ size: 3 }));
    // ts using <> to set type is called generic. In this case player can be 1 or 2
    const [player, setPlayer] = useState<1 | 2>(1);

    useEffect(() => {
        console.log({grid})
        const isFirstRowTheSame = checkRowIsSameValue({ grid, row: 0, value: 1 }) || checkRowIsSameValue({ grid, row: 0, value: 2 });
        console.log({isFirstRowTheSame})
    }, [grid]);

    const onGridItemClick = useCallback((value: GridCellValue) => {
        const newGrid = setGridCellValue({...value, value: player});
        setGrid(newGrid);
        setPlayer(player === 1 ? 2 : 1);
    }, [grid, player]);

    return (
        <div className="contgrid">
            {grid.map((row, rowIndex) => {
                return row.map((cell, cellIndex) => {
                    const gridValue: GridCellValue = {
                        grid,
                        x: cellIndex,
                        y: rowIndex,
                        value: grid[rowIndex][cellIndex],
                    };
                    return <GridItem onClick={onGridItemClick} value={gridValue} key={cellIndex}/>
                });
            })}
        </div>
    );
};

export default GameScreen;
