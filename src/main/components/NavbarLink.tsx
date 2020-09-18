import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {checkEnabledProperties} from "../helpers/util";

type NavbarLinkProps = React.ComponentPropsWithoutRef<'a'> & {
  arrowless?: boolean;
}

const NavbarLink: React.FC<NavbarLinkProps> = (originalProps) => {
  const { className, arrowless, ...props } = originalProps;
  const classes = classNames(className, 'navbar-link', checkEnabledProperties(originalProps, ['arrowless']));
  // eslint-disable-next-line
  return <a className={classes} {...props} />;
};

NavbarLink.displayName = 'NavbarLink';

NavbarLink.propTypes = {
  className: PropTypes.string,
  arrowless: PropTypes.bool
};

export default NavbarLink;

export { NavbarLink, NavbarLinkProps }