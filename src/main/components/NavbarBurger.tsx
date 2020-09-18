import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {checkEnabledProperties} from "../helpers/util";

type NavbarBurgerProps = React.ComponentPropsWithoutRef<'a'> & {
  active?: boolean;
};

const NavbarBurger: React.FC<NavbarBurgerProps> = (originalProps) => {
  const { className, active, ...props } = originalProps;
  const classes = classNames(className, 'navbar-burger', 'burger', checkEnabledProperties(originalProps, ['active']));
  return <a className={classes} {...props} role={'button'} aria-label={'menu'} aria-expanded={'false'}>
    <span aria-hidden={'true'} />
    <span aria-hidden={'true'} />
    <span aria-hidden={'true'} />
  </a>;
};

NavbarBurger.displayName = 'NavbarBurger';

NavbarBurger.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool
};

export default NavbarBurger;

// @ts-ignore
export { NavbarBurgerProps, NavbarBurger }