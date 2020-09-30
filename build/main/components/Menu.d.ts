import React from 'react';
import { MenuLabelProps } from "./MenuLabel";
import { MenuListProps } from "./MenuList";
declare type MenuProps = React.ComponentPropsWithoutRef<'aside'>;
declare type MenuComponent = React.FC<MenuProps> & {
    Label: React.FC<MenuLabelProps>;
    List: React.FC<MenuListProps>;
};
declare const Menu: MenuComponent;
export default Menu;
export { Menu, MenuProps, MenuComponent };
