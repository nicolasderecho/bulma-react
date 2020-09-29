import React from 'react';
import { HtmlElement } from "../helpers/constants";
declare type NavbarItemProps = React.ComponentPropsWithoutRef<'a' | 'div'> & {
    as?: HtmlElement;
    component?: React.FC<React.ComponentProps<any>>;
    expanded?: boolean;
    tab?: boolean;
    active?: boolean;
    hoverable?: boolean;
    dropdown?: boolean;
    dropdownUp?: boolean;
};
declare const NavbarItem: React.FC<NavbarItemProps>;
export default NavbarItem;
export { NavbarItem, NavbarItemProps };
