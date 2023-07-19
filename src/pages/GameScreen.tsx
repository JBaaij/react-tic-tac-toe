import TitleComponent from "../components/TitleComponent";
import LabelButton from "../components/LabelButton";

const GameScreen = () => {
    const onClick = () => {
        console.log("Game screen");
    }
    return (
        <div>
            <TitleComponent title={"Game screen"}/>
            <LabelButton className={'label-button-pink'} label={"Start game"} onClick={onClick}/>
        </div>
    );
}

export default GameScreen;
