import React, { Component } from 'react';

import InfoList from '../../components/InfoList/InfoList';
import { mock } from '../../mock';
import Header from '../../components/Header/Header';

class MainPage extends Component {
  render() {
    return (
      <div className="page">
        <Header list={mock.headerList} />
        <InfoList list={mock.infoList} />
      </div>
    );
  }
}

export default MainPage;
