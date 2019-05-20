import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SyncInfo from '../../components/SyncInfo/SyncInfo';
import Rate from '../../components/Rate/Rate';
import Button from '../../components/Button/Button';
import Icon from '../../components/Icon/Icon';

import './InfoItem.css';

class InfoItem extends Component {
  render() {
    const { title, syncInfo, rate, isActive, isActionRequired } = this.props;
    const infoItemClass = `infoItem ${!isActive ? 'infoItem--active' : 'infoItem--disabled'}`;

    return (
      <section className={infoItemClass}>
        <div className="infoItem_header">
          <h3 className="infoItem_title">{title}</h3>
          <SyncInfo total={syncInfo.total} done={syncInfo.done} searching={syncInfo.searching} />
        </div>
        <Rate value={rate.value} feedback={rate.feedback} />
        {isActionRequired && (
          <Button value="Требует действий">
            <Icon name="bell" color={'#ffffff'} />
          </Button>
        )}
      </section>
    );
  }
}

InfoItem.propTypes = {
  title: PropTypes.string.isRequired,
  syncInfo: PropTypes.shape({
    total: PropTypes.number.isRequired,
    done: PropTypes.number,
    searching: PropTypes.number,
  }),
  rate: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.any]).isRequired,
    feedback: PropTypes.shape({
      total: PropTypes.number,
      notAnswered: PropTypes.number,
    }),
  }),
  isActive: PropTypes.bool.isRequired,
  isActionRequired: PropTypes.bool,
};

export default InfoItem;
