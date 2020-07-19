import React from 'react';
import './bordertext.scss';

const BorderText = ({ text }) => {
  return (
    <div>
      <button className="custom-border">{text}</button>
    </div>
  );
};

export default BorderText;
