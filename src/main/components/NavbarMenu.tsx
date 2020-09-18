import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {checkEnabledProperties} from "../helpers/util";

type NavbarMenuProps = React.ComponentPropsWithoutRef<'div'> & {
  active?: boolean;
}

const NavbarMenu: React.FC<NavbarMenuProps> = (originalProps) => {
  const { className, active, ...props } = originalProps;
  const classes = classNames(className, 'navbar-menu', checkEnabledProperties(originalProps, ['active']));
  return <div className={classes} {...props} />;
};

NavbarMenu.displayName = 'NavbarMenu';

NavbarMenu.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool
};

export default NavbarMenu;

export { NavbarMenu, NavbarMenuProps }