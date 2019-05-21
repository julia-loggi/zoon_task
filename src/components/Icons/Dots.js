import React from 'react';
import PropTypes from 'prop-types';

const Dots = props => (
  <svg viewBox="0 0 4 18">
    <g fill={props.color} fillRule="evenodd">
      <circle cx="2" cy="2" r="2" />
      <circle cx="2" cy="9" r="2" />
      <circle cx="2" cy="16" r="2" />
    </g>
  </svg>
);
Dots.default = {};

Dots.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Dots;
