import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {checkEnabledProperties} from "../helpers/util";

type NavbarDropdownProps = React.ComponentPropsWithoutRef<'div'> & {
  right?: boolean;
}

const NavbarDropdown: React.FC<NavbarDropdownProps> = (originalProps) => {
  const { className, right, ...props } = originalProps;
  const classes = classNames(className, 'navbar-dropdown', checkEnabledProperties(props, ['right']));
  return <div className={classes} {...props} />;
};

NavbarDropdown.displayName = 'NavbarDropdown';

NavbarDropdown.propTypes = {
  className: PropTypes.string
};

export default NavbarDropdown;

export { NavbarDropdown, NavbarDropdownProps }