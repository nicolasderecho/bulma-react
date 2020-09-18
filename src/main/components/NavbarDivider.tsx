import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

type NavbarDividerProps = React.ComponentPropsWithoutRef<'hr'>;

const NavbarDivider: React.FC<NavbarDividerProps> = ({ className, ...props }) => {
  const classes = classNames(className, 'navbar-divider');
  return <hr className={classes} {...props} />;
};

NavbarDivider.displayName = 'NavbarDivider';

NavbarDivider.propTypes = {
  className: PropTypes.string
};

export default NavbarDivider;

export { NavbarDivider, NavbarDividerProps }