import React from 'react';
import './borderbutton.scss';

const BorderButton = ({ text }) => {
  return (
    <div>
      <button className="custom-border">{text}</button>
    </div>
  );
};

export default BorderButton;
