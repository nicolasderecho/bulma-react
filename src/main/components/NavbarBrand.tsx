import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

type NavbarBrandProps = React.ComponentPropsWithoutRef<'div'>;

const NavbarBrand: React.FC<NavbarBrandProps> = ({ className, ...props }) => {
  const classes = classNames(className, 'navbar-brand');
  return <div className={classes} {...props} />;
};

NavbarBrand.displayName = 'NavbarBrand';

NavbarBrand.propTypes = {
  className: PropTypes.string
};

export default NavbarBrand;

export { NavbarBrand, NavbarBrandProps }