import React from 'react';
import PropTypes from 'prop-types';
import './Label.css';

interface LabelBoxProps {
  labelRanking?: number;
  labelText?: string;
  labelScore?: number;
}

const LabelBox = ({ labelRanking, labelText, labelScore }: LabelBoxProps) => {
  return (
    <div className="label-box">
      <div className="ranking">{labelRanking}</div>
      <div className="label-content">{labelText}</div>
      <div className="score">{labelScore}</div>
    </div>
  );
};

LabelBox.propTypes = {
  labelText: PropTypes.string.isRequired,
};

export default LabelBox;
