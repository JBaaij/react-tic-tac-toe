import React from 'react';
import PropTypes from 'prop-types';
import './Label.css';

interface CountBoxProps {
  labelText: string;
}
const CountBox = ({ labelText }: CountBoxProps) => {
  return (
    <div className="label-box">
      <div className="label-content">
        <p>{labelText}</p>
      </div>
    </div>
  );
};

CountBox.propTypes = {
  labelText: PropTypes.string.isRequired,
};

export default CountBox;
