import TitleComponent from '../components/TitleComponent';
import LabelButton from '../components/LabelButton';

const GameScreen = () => {
  const onClick = () => {
    console.log('Game screen');
  };
  return (
    <div className="contgrid">
      <div id="itema" className="grid-upper">
        <img
          className="icon-x3"
          src="../pages/assets/icon-x.svg"
          alt="icon-x"
        />
        <img
          className="icon-o3"
          src="../pages/assets/icon-o.svg"
          alt="icon-o"
        />
      </div>
      <div id="itemb" className="grid-upper"></div>
      <div id="itemc" className="grid-upper">
        <img
          id="icon-restart"
          src="../pages/assets/icon-restart.svg"
          alt="icon-xrestart"
        />
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
