import React from 'react';
import { HtmlElement } from "../helpers/constants";
declare type MenuListProps = React.ComponentPropsWithoutRef<'ul'> & {
    as?: HtmlElement;
};
declare const MenuList: React.FC<MenuListProps>;
export default MenuList;
export { MenuList, MenuListProps };
