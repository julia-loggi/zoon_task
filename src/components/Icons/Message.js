import React from 'react';
import PropTypes from 'prop-types';

const Message = props => (
  <svg viewBox="0 0 40 40">
    <path
      fill={props.color}
      className="icon_fill"
      fillRule="nonzero"
      d="M40 4c-.02-2.2-1.8-4-4-4H4C1.8 0 0 1.8 0 4v24c0 2.2 1.8 4 4 4h28l8 8V4zm-8 20H8v-4h24v4zm0-6H8v-4h24v4zm0-6H8V8h24v4z"
    />
  </svg>
);
Message.default = {};

Message.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Message;
