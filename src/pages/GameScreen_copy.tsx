import TitleComponent from '../components/TitleComponent';
import LabelButton from '../components/LabelButton';
import IconX from "../components/icons/IconX";
import IconO from "../components/icons/IconO";
import IconRestart from "../components/icons/IconRestart";

const GameScreen = () => {
  const onClick = () => {
    console.log('Game screen');
  };
  return (
    <div className="contgrid">
      <div id="itema" className="grid-upper">
          <div className="box1">
              <IconX width={20} height={20} />
              <div style={{ width: 4 }} />
              <IconO width={20} height={20} />
          </div>
      </div>
      <div id="itemb" className="grid-upper"></div>
      <div id="itemc" className="grid-upper">
          <div style={{padding: 4, backgroundColor: "#ffffff"}}>
            <IconRestart width={20} height={20}/>
          </div>
      </div>
      <div id="item1" className="grid-item"></div>
      <div id="item2" className="grid-item"></div>
      <div id="item3" className="grid-item"></div>
      <div id="item4" className="grid-item"></div>
      <div id="item5" className="grid-item"></div>
      <div id="item6" className="grid-item"></div>
      <div id="item7" className="grid-item"></div>
      <div id="item8" className="grid-item"></div>
      <div id="item9" className="grid-item"></div>
      <div id="itemd" className="grid-under"></div>
      <div id="iteme" className="grid-under"></div>
      <div id="itemf" className="grid-under"></div>
    </div>
  );
};

export default GameScreen;
