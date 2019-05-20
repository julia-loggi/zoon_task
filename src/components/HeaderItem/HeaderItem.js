import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Icon from '../../components/Icon/Icon';
import './HeaderItem.css';

class HeaderItem extends Component {
  render() {
    const { value, onClick, text, icon } = this.props;
    return (
      <div className="headerItem" onClick={onClick}>
        <div>
          <h2 className="headerItem_value">{value}</h2>
          <span className="headerItem_text">{text}</span>
        </div>
        <Icon className="headerItem_icon" name={icon} size={40} color="#58329e" />
      </div>
    );
  }
}

HeaderItem.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default HeaderItem;
