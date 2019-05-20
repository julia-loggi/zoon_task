import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as icons from '../../components/Icons';
import './Icon.css';

const svg = (name, size, color, rotate) => {
  const IconComponent = icons[name];

  if (IconComponent === undefined) {
    return null;
  }

  const viewBox = '0 0 512 512';

  return (
    <svg width={size} height={size} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
      <IconComponent color={color} rotate={rotate} />
    </svg>
  );
};

class Icon extends Component {
  render() {
    const { name, color, rotate, className } = this.props;
    const size = parseInt(this.props.size, 10);
    return (
      <div
        className={['icon', className].join(' ')}
        style={{ width: size, height: size, rotate }}
        onClick={this.props.onClick}
      >
        {svg(name, size, color, rotate)}
      </div>
    );
  }
}

Icon.defaultProps = {
  color: '#58329e',
  size: 40,
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func,
};

export default Icon;
