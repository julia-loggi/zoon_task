import React from 'react';
import PropTypes from 'prop-types';

const QuestionMessage = props => (
  <svg viewBox="0 0 40 40">
    <path
      fill={props.color}
      fill-rule="nonzero"
      d="M36 0H4C1.8 0 .02 1.8.02 4L0 40l8-8h28c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zM22 24h-4v-4h4v4zm0-8h-4V8h4v8z"
    />
  </svg>
);
QuestionMessage.default = {};

QuestionMessage.propTypes = {
  color: PropTypes.string.isRequired,
};

export default QuestionMessage;
