import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

type NavbarStartProps = React.ComponentPropsWithoutRef<'div'>;

const NavbarStart: React.FC<NavbarStartProps> = ({ className, ...props }) => {
  const classes = classNames(className, 'navbar-start');
  return <div className={classes} {...props} />;
};

NavbarStart.displayName = 'NavbarStart';

NavbarStart.propTypes = {
  className: PropTypes.string
};

export default NavbarStart;

export { NavbarStart, NavbarStartProps }