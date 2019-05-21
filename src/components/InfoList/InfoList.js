import React, { Component } from 'react';
import PropTypes from 'prop-types';

import InfoItem from '../../components/InfoItem/InfoItem';
import './InfoList.css';

class InfoList extends Component {
  render() {
    const { list } = this.props;

    return (
      <main className="infoList">
        {list.map(item => {
          const {
            title,
            syncInfo,
            state,
            rate,
            stateInfo,
            checkList,
            updatesAmount,
            isActionRequired,
          } = item;
          return (
            <InfoItem
              className="infoList_item"
              key={title}
              title={title}
              syncInfo={syncInfo}
              state={state}
              rate={rate}
              stateInfo={stateInfo}
              checkList={checkList}
              updatesAmount={updatesAmount}
              isActionRequired={isActionRequired}
            />
          );
        })}
      </main>
    );
  }
}

InfoList.propTypes = {
  list: PropTypes.array.isRequired,
};

export default InfoList;
