import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon/Icon';
import './Rate.css';

class Rate extends Component {
  renderValue = isNull => {
    if (isNull) {
      return <span className="rate_text rate_text--empty">Портал без рейтинга</span>;
    }
    return <span className="rate_text">{this.props.value} из 5</span>;
  };

  renderFeedback = () => {
    const { total, notAnswered } = this.props.feedback;
    return (
      <ul className="rate_feedback">
        <li className="rate_feedbackItem">{total} отзывов, </li>
        <li className="rate_feedbackItem">{notAnswered} неотвеченных</li>
      </ul>
    );
  };

  render() {
    const isNull = this.props.value === null;

    return (
      <div className={['rate', this.props.className].join(' ')}>
        <Icon
          className="rate_icon"
          name="star"
          color={`${isNull ? '#bbbcc4' : '#ffaa30'}`}
          size={16}
        />
        {this.renderValue(isNull)}
        {!isNull && this.renderFeedback()}
      </div>
    );
  }
}

Rate.propTypes = {
  value: PropTypes.string,
  feedback: PropTypes.shape({
    total: PropTypes.number,
    notAnswered: PropTypes.number,
  }),
  className: PropTypes.string,
};
export default Rate;
