import React, { Component } from 'react';
import PropTypes from 'prop-types';

import HeaderItem from '../../components/HeaderItem/HeaderItem';
import './Header.css';

class Header extends Component {
  render() {
    const { list } = this.props;

    return (
      <header className="header">
        {list.map(item => {
          const { value, text, icon } = item;
          return (
            <HeaderItem
              className="header_item"
              key={value}
              value={value}
              text={text}
              icon={icon}
              onClick={() => console.log('click: ' + text)}
            />
          );
        })}
      </header>
    );
  }
}

Header.propTypes = {
  list: PropTypes.array.isRequired,
};

export default Header;
