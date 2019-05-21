import React, { Component } from 'react';

import InfoItem from '../../components/InfoItem/InfoItem';

class MainPage extends Component {
  render() {
    return (
      <div>
        <span>Main Page</span>
        <InfoItem
          title="Google"
          syncInfo={{ total: 30 }}
          rate={{ value: '4.5', feedback: { total: 198, notAnswered: 15 } }}
          isActive={true}
        />
      </div>
    );
  }
}

export default MainPage;
