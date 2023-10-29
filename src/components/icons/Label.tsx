import React from 'react';
import PropTypes from 'prop-types';
import './Label.css';

interface LabelBoxProps {
  labelText: string;
}
const LabelBox = ({ labelText }: LabelBoxProps) => {
  return (
    <div className="label-box">
      <div className="label-content">
        <p>{labelText}</p>
      </div>
    </div>
  );
};

LabelBox.propTypes = {
  labelText: PropTypes.string.isRequired,
};

export default LabelBox;
