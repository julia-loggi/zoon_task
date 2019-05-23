import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon/Icon';
import './StateButton.css';

const StateButton = props => {
  const { text, state } = props;
  const iconName = state === 'loading' ? 'loading' : 'check';
  const iconSize = state === 'loading' ? 12 : 10;
  const iconColor = state === 'done' ? '#ffffff' : '#222222';

  return (
    <div className={`stateButton ${state === 'done' ? 'stateButton--checked' : ''}`}>
      <span className="stateButton_content">
        <Icon className="stateButton_icon" name={iconName} size={iconSize} color={iconColor} />
        {text}
      </span>
    </div>
  );
};

StateButton.default = {
  state: 'loading',
};

StateButton.propTypes = {
  text: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
};

export default StateButton;
