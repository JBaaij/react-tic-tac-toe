import TitleComponent from "../components/TitleComponent";
import LabelButton from "../components/LabelButton";
import {useNavigate} from "react-router-dom";

const StartScreen = () => {
    const navigate = useNavigate();
    const onClick = () => {
        navigate("/game")
    }

    return (
        <div>
            <TitleComponent title={"Start screen"}/>
            <LabelButton label={"Start game"} onClick={onClick}/>
        </div>
    );
}

export default StartScreen;
