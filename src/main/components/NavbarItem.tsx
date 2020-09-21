import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {htmlElementFor, isEnabled} from "../helpers/util";
import {HtmlElement} from "../helpers/constants";
import {checkEnabledProperties} from "../helpers/util";

type NavbarItemProps = React.ComponentPropsWithoutRef<'a' | 'div'> & {
  as?: HtmlElement;
  component?: React.FC<React.ComponentProps<any>>;
  expanded?: boolean;
  tab?: boolean;
  active?: boolean;
  hoverable?: boolean;
  dropdown?: boolean;
  dropdownUp?: boolean;
}

const NavbarItem: React.FC<NavbarItemProps> = (originalProps) => {
  const { className, as, component, expanded, tab, active, hoverable, dropdown, dropdownUp, ...props } = originalProps;
  const defaultElement =  isEnabled(originalProps, 'dropdown') ? 'div' : 'a';
  const Element = component || htmlElementFor(as, defaultElement);
  const classes = classNames(className, 'navbar-item', checkEnabledProperties(originalProps, ['dropdown', 'dropdownUp'], {prefix: 'has'}), checkEnabledProperties(originalProps, ['expanded', 'tab', 'active', 'hoverable']));
  return <Element className={classes} {...props} />;
};

NavbarItem.displayName = 'NavbarItem';

NavbarItem.propTypes = {
  className: PropTypes.string,
  expanded: PropTypes.bool,
  tab: PropTypes.bool,
  active: PropTypes.bool,
  hoverable: PropTypes.bool,
  dropdown: PropTypes.bool,
  dropdownUp: PropTypes.bool
};

export default NavbarItem;

export { NavbarItem, NavbarItemProps }