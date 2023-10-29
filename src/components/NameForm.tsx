import React, { useContext, useState } from 'react';
import { AppStateContext } from '../AppStateContext'; // Import your existing global context

function NameForm() {
  const [buttonState, setButtonState] = useState({
    backgroundColor: 'rgb(237, 184, 9)',
    text: 'Submit',
  });
  const { userName, setUserName } = useContext(AppStateContext);

  const handleButtonClick = () => {
    if (userName.trim() === '') {
      alert('Please enter your name.');
    } else {
      console.log(userName);
      // You can perform any other actions with the name here
      setButtonState({
        backgroundColor: 'rgb(10, 220, 210)',
        text: 'Submitted!',
      });
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button
        style={{
          backgroundColor: buttonState.backgroundColor,
        }}
        onClick={handleButtonClick}>
        {buttonState.text}
      </button>
    </div>
  );
}

export default NameForm;
