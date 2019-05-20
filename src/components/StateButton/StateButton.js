import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon/Icon';
import './StateButton.css';

const StateButton = props => {
  const { text, isChecked, isLoading } = props;
  const iconName = isLoading ? 'loading' : 'check';
  const iconSize = isLoading ? 12 : 10;
  const iconColor = isChecked ? '#ffffff' : '#222222';

  return (
    <div className={`stateButton ${isChecked ? 'stateButton--checked' : ''}`}>
      <span className="stateButton_content">
        <Icon className="stateButton_icon" name={iconName} size={iconSize} color={iconColor} />
        {text}
      </span>
    </div>
  );
};

StateButton.default = {
  isChecked: false,
};

StateButton.propTypes = {
  text: PropTypes.string.isRequired,
  isChecked: PropTypes.bool,
  isLoading: PropTypes.bool,
};

export default StateButton;
