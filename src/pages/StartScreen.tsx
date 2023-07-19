import TitleComponent from "../components/TitleComponent";
import LabelButton from "../components/LabelButton";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {createGrid, setGridCellValue} from "../helpers/grid/grid";

const StartScreen = () => {
    const [grid, setGrid] = useState(createGrid({size: 3}))
    const [currentPlayer, setCurrentPlayer] = useState(1) // [1, 2]
    const navigate = useNavigate();
    const onPlayGame = () => {
        const newGrid = setGridCellValue({grid, x: 1, y: 1, value: currentPlayer === 1 ? 1 : 2})
        setGrid(newGrid)
        setCurrentPlayer(currentPlayer === 1 ? 2 : 1)
    }

    const onNavigate = () => {
        navigate("/game")
    }

    useEffect(() => {
        console.log("mounted")
    }, [])

    useEffect(() => {
        console.log(grid)
    }, [grid, currentPlayer])

    return (
        <div>
            <TitleComponent title={"Start screen"}/>
            <LabelButton label={"Play game"} onClick={onPlayGame}/>
            <LabelButton label={"Navigate"} onClick={onNavigate}/>
        </div>
    );
}

export default StartScreen;
