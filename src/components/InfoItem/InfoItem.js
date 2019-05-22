import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SyncInfo from '../../components/SyncInfo/SyncInfo';
import Rate from '../../components/Rate/Rate';
import Button from '../../components/Button/Button';
import Icon from '../../components/Icon/Icon';
import StateButton from '../StateButton/StateButton';
import CheckItem from '../CheckItem/CheckItem';
import ActionButton from '../ActionButton/ActionButton';
import './InfoItem.css';

class InfoItem extends Component {
  renderSyncInfo = () => {
    const { syncInfo } = this.props;
    if (!syncInfo) {
      return null;
    }
    return <SyncInfo total={syncInfo.total} done={syncInfo.done} searching={syncInfo.searching} />;
  };

  renderCheckList = () => {
    const { checkList } = this.props;
    if (!checkList || !checkList.length) {
      return null;
    }

    return (
      <div className="infoItem_checkList">
        {this.props.checkList.map(item => (
          <CheckItem
            key={item.text}
            className="infoItem_check"
            text={item.text}
            isDone={item.isDone}
          />
        ))}
      </div>
    );
  };

  render() {
    const {
      title,
      rate,
      isActionRequired,
      stateInfo,
      updatesAmount,
      className,
      state,
    } = this.props;
    const infoItemClass = `infoItem ${
      state === 'active' ? 'infoItem--active' : 'infoItem--disabled'
    }`;

    return (
      <section className={[infoItemClass, className].join(' ')}>
        <header className="infoItem_header">
          <h3
            className={`infoItem_title ${state === 'disabled' ? 'infoItem_title--disabled' : ''}`}
          >
            {title}
          </h3>
          {this.renderSyncInfo()}
        </header>
        <div className="infoItem_main">
          {stateInfo && <StateButton text={stateInfo.text} state={stateInfo.state} />}
          {this.renderCheckList()}
        </div>
        <footer className="infoItem_footer">
          {rate && <Rate value={rate.value} feedback={rate.feedback} />}
          {updatesAmount && (
            <span className="infoItem_updatesInfo">{updatesAmount} обновления</span>
          )}
          {state === 'creating' && (
            <span className="infoItem_disabledText">Поиск заведений: 15 из 78…</span>
          )}
          {isActionRequired && (
            <Button value="Требует действий" className="infoItem_footerBtn">
              <Icon className="infoItem_footerBtnIcon" name="bell" color="#ffffff" size={14} />
            </Button>
          )}
          {state === 'disabled' && (
            <span className="infoItem_disabledText">Площадка отключена</span>
          )}
        </footer>
        <ActionButton className="infoItem_action" state={state} />
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
    value: PropTypes.string,
    feedback: PropTypes.shape({
      total: PropTypes.number,
      notAnswered: PropTypes.number,
    }),
  }),
  updatesAmount: PropTypes.number,
  state: PropTypes.oneOf(['active' | 'creating' | 'disabled']).isRequired,
  isActionRequired: PropTypes.bool,
  className: PropTypes.string,
};

export default InfoItem;
