import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


import CONSTANTS from '../../../constants';

const roles = [null].concat(Object.keys(CONSTANTS.ROLES).map(key => CONSTANTS.ROLES[key]));

const Help = ({
  className,
  style,
  children,
  color,
}) => (
  <p
    style={style}
    className={classnames('help', className, {
      [`is-${color}`]: color,
    })}
  >
    {children}
  </p>
);

Help.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  color: PropTypes.oneOf(roles),
  children: PropTypes.node,
};

Help.defaultProps = {
  children: null,
  className: '',
  style: {},
  color: null,
};

export default Help;
