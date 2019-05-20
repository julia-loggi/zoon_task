import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';

import './Rate.css';

const Rate = props => {
  return (
    <div className="rate">
      <Icon className="rate_icon" name="star" color="#ffaa30" size={16} />
      <span className="rate_text">{props.value} из 5</span>
    </div>
  );
};

Rate.propTypes = {
  value: PropTypes.number.isRequired,
};
export default Rate;
