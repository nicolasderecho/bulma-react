import React from 'react';
import { HtmlElement } from "../helpers/constants";
declare type DropdownItemProps = React.ComponentPropsWithoutRef<'a' | 'div'> & {
    active?: boolean;
    as?: HtmlElement;
};
declare const DropdownItem: React.FC<DropdownItemProps>;
export default DropdownItem;
export { DropdownItem, DropdownItemProps };
