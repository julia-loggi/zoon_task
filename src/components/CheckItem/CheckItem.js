import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon/Icon';
import './CheckItem.css';

const CheckItem = props => {
  const { text, isDone, className } = props;
  return (
    <div className={['checkItem', className].join(' ')}>
      <Icon className="checkItem_icon" name={`${isDone ? 'check' : ''}`} size={8} />
      <span className="checkItem_text">{text}</span>
    </div>
  );
};

CheckItem.propTypes = {
  text: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

export default CheckItem;
