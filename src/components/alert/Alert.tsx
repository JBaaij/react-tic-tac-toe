import React from 'react';
import PropTypes from 'prop-types';
import './Alert.css';

interface AlertBoxProps {
    name: string;
    okOnClick: () => void;
}
const AlertBox = ({ name, okOnClick }: AlertBoxProps) => {
    return (
        <div className="alert-box">
            <div className="alert-content">
                <p>Player {name} has won</p>
                <button onClick={okOnClick}>OK</button>
            </div>
        </div>
    );
}

AlertBox.propTypes = {
    name: PropTypes.string.isRequired,
    okOnClick: PropTypes.func.isRequired,
};

export default AlertBox;

