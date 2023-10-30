import React from 'react';
import PropTypes from 'prop-types';
import './Alert.css';

interface AlertBoxProps {
  message: string;
  okOnClick: () => void;
}
const AlertBox2 = ({ message, okOnClick }: AlertBoxProps) => {
  return (
    <div className="alert-box">
      <div className="alert-content">
        <p>{message}</p>
        <button onClick={okOnClick}>OK</button>
      </div>
    </div>
  );
};

AlertBox2.propTypes = {
  message: PropTypes.string.isRequired,
  okOnClick: PropTypes.func.isRequired,
};

export default AlertBox2;
