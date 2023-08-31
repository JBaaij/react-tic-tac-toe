import {createGrid, setGridCellValue} from "../helpers/grid/grid";
import {useCallback, useEffect, useState} from "react";
import GridItem from "../components/game/GridItem";
import {GridCellValue} from "../helpers/grid/types";

const GameScreen = () => {
    // set ik local state met initial state van createGrid
    const [grid, setGrid] = useState(createGrid({ size: 3 }));

    useEffect(() => {
        console.log({grid})
    }, [grid]);

    const onGridItemClick = useCallback((value: GridCellValue) => {
        const newGrid = setGridCellValue({...value, value: 1});
        setGrid(newGrid);
    }, [grid]);

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
