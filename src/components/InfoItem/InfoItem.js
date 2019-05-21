import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SyncInfo from '../../components/SyncInfo/SyncInfo';
import Rate from '../../components/Rate/Rate';
import Button from '../../components/Button/Button';
import Icon from '../../components/Icon/Icon';

import './InfoItem.css';
import StateButton from '../StateButton/StateButton';
import CheckItem from '../CheckItem/CheckItem';

class InfoItem extends Component {
  render() {
    const {
      title,
      syncInfo,
      rate,
      isActive,
      isActionRequired,
      stateInfo,
      checkList,
    } = this.props;
    const infoItemClass = `infoItem ${
      !isActive ? 'infoItem--active' : 'infoItem--disabled'
    }`;

    return (
      <section className={infoItemClass}>
        <header className="infoItem_header">
          <h3 className="infoItem_title">{title}</h3>
          <SyncInfo
            total={syncInfo.total}
            done={syncInfo.done}
            searching={syncInfo.searching}
          />
        </header>
        <div>
          <StateButton text={stateInfo.text} state={stateInfo.state} />
          {checkList.map(item => (
            <CheckItem
              key={item.text}
              className="infoItem_check"
              text={item.text}
              isDone={item.isDone}
            />
          ))}
        </div>
        <footer className="infoItem_footer">
          <Rate value={rate.value} feedback={rate.feedback} />
          {isActionRequired && (
            <Button value="Требует действий">
              <Icon name="bell" color="#ffffff" />
            </Button>
          )}
          {!isActive && <span className="infoItem_disabledText">Плащадка отключена</span>}
        </footer>

        <span className="infoItem_extra">
          <Icon name="dots" color="#e6ecf2" size={12} />
        </span>
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
  stateInfo: PropTypes.shape({
    text: PropTypes.string,
    state: PropTypes.string,
  }),
  ckeckList: PropTypes.arrayOf({
    isDone: PropTypes.bool,
    text: PropTypes.string,
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
