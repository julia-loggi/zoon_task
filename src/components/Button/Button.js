import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const Button = props => {
  const { value, onClick, children, disabled, className } = props;

  const btnClassName = ['button', className, disabled ? 'button--disabled' : ''].join(' ');

  return (
    <button className={btnClassName} onClick={onClick} disabled={disabled}>
      {children}
      {value}
    </button>
  );
};

Button.default = {};

Button.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
