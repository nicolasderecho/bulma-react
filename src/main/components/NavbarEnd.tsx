import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

type NavbarEndProps = React.ComponentPropsWithoutRef<'div'>;

const NavbarEnd: React.FC<NavbarEndProps> = ({ className, ...props }) => {
  const classes = classNames(className, 'navbar-end');
  return <div className={classes} {...props} />;
};

NavbarEnd.displayName = 'NavbarEnd';

NavbarEnd.propTypes = {
  className: PropTypes.string
};

export default NavbarEnd;

export { NavbarEnd, NavbarEndProps }