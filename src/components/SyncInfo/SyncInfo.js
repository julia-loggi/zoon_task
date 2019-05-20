import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './SyncInfo.css';

class SyncInfo extends Component {
  renderAll = () => {
    const { total, done, searching } = this.props;

    if (!done && !searching) {
      return `все ${total} заведений настроены`;
    }
    return `${total} заведений`;
  };

  render() {
    const { done, searching } = this.props;

    return (
      <ul className="syncInfo">
        <li className="syncInfo_item">{this.renderAll()}</li>
        {done && <li className="syncInfo_item">{done} настроено</li>}
        {searching && <li className="syncInfo_item">{searching} в поиске</li>}
      </ul>
    );
  }
}

SyncInfo.propTypes = {
  total: PropTypes.number.isRequired,
  done: PropTypes.number,
  searching: PropTypes.number,
};

export default SyncInfo;
