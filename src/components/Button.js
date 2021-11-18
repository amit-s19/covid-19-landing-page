import React from 'react';
import './Button.css';

const STYLES = ['btn-tomato', 'btn-tomato-light'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  return (
    <button
      className={`${checkButtonStyle}`}
      // onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
