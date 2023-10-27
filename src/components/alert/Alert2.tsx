import React from 'react';
import PropTypes from 'prop-types';
import './Alert.css';

interface AlertBoxProps {
  okOnClick: () => void;
}
const AlertBox2 = ({ okOnClick }: AlertBoxProps) => {
  return (
    <div className="alert-box">
      <div className="alert-content">
        <p>It's a draw!</p>
        <button onClick={okOnClick}>OK</button>
      </div>
    </div>
  );
};

AlertBox2.propTypes = {
  okOnClick: PropTypes.func.isRequired,
};

export default AlertBox2;
