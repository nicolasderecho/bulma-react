import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {MenuLabel, MenuLabelProps} from "./MenuLabel";
import {MenuList, MenuListProps} from "./MenuList";

type MenuProps = React.ComponentPropsWithoutRef<'aside'>;

type MenuComponent = React.FC<MenuProps> & {
  Label: React.FC<MenuLabelProps>;
  List: React.FC<MenuListProps>;
}

const Menu: MenuComponent = ({ className, ...props }) => {
  const classes = classNames(className, 'menu');
  return <aside className={classes} {...props} />;
};

Menu.displayName = 'Menu';

Menu.Label = MenuLabel;
Menu.List  = MenuList;

Menu.propTypes = {
  className: PropTypes.string
};

export default Menu;

export { Menu, MenuProps, MenuComponent }