import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {checkEnabledProperties, colorClassFor} from "../helpers/util";
import {COLORS, Color} from "../helpers/constants";
import { NavbarBrand, NavbarBrandProps } from "./NavbarBrand";
import { NavbarBurger, NavbarBurgerProps } from "./NavbarBurger";
import { NavbarMenu, NavbarMenuProps } from "./NavbarMenu";
import { NavbarStart, NavbarStartProps } from "./NavbarStart";
import { NavbarEnd, NavbarEndProps } from "./NavbarEnd";
import { NavbarItem, NavbarItemProps } from "./NavbarItem";
import { NavbarLink, NavbarLinkProps } from "./NavbarLink";
import { NavbarDropdown, NavbarDropdownProps } from "./NavbarDropdown";
import { NavbarDivider, NavbarDividerProps } from "./NavbarDivider";

type NavbarProps = React.ComponentPropsWithoutRef<'nav'> & {
  color?: Color;
  fixedTop?: boolean;
  fixedBottom?: boolean;
  transparent?: boolean;
  spaced?: boolean;
}

type NavbarComponent = React.FC<NavbarProps> & {
  Brand: React.FC<NavbarBrandProps>;
  Burger: React.FC<NavbarBurgerProps>;
  Menu: React.FC<NavbarMenuProps>;
  Start: React.FC<NavbarStartProps>;
  End: React.FC<NavbarEndProps>;
  Item: React.FC<NavbarItemProps>;
  Link: React.FC<NavbarLinkProps>;
  Dropdown: React.FC<NavbarDropdownProps>;
  Divider: React.FC<NavbarDividerProps>;
}

const Navbar: NavbarComponent = (originalProps) => {
  const { className, color, fixedTop, fixedBottom, transparent, spaced, ...props } = originalProps;
  const classes = classNames(className, 'navbar', checkEnabledProperties(originalProps, ['fixedTop', 'fixedBottom', 'transparent', 'spaced']), colorClassFor(color));
  return <nav className={classes} {...props} role={'navigation'} aria-label={'main navigation'} />;
};

Navbar.displayName = 'Navbar';

Navbar.Brand    = NavbarBrand;
Navbar.Burger   = NavbarBurger;
Navbar.Menu     = NavbarMenu;
Navbar.Start    = NavbarStart;
Navbar.End      = NavbarEnd;
Navbar.Item     = NavbarItem;
Navbar.Link     = NavbarLink;
Navbar.Dropdown = NavbarDropdown;
Navbar.Divider  = NavbarDivider;

Navbar.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(COLORS),
  fixedTop: PropTypes.bool,
  fixedBottom: PropTypes.bool,
  transparent: PropTypes.bool,
  spaced: PropTypes.bool
};

export default Navbar;

export {Navbar, NavbarProps, NavbarComponent}