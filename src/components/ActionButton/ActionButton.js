import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Icon from '../../components/Icon/Icon';
import './ActionButton.css';

class ActionButton extends Component {
  state = {
    isVisible: false,
  };

  toggleButton = () => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };
  render() {
    const { state, className } = this.props;
    const { isVisible } = this.state;

    return (
      <div className={['action', className].join(' ')} onClick={this.toggleButton}>
        <Icon
          className={`action_btn ${isVisible ? 'action_btn--active' : ''}`}
          name="dots"
          color="#e6ecf2"
          size={12}
        />
        <div className={`action_info ${isVisible ? 'action_info--visible' : ''}`}>
          <span className="action_text">{state === 'disabled' ? 'Включить' : 'Выключить'}</span>
        </div>
      </div>
    );
  }
}

ActionButton.propTypes = {
  state: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ActionButton;
