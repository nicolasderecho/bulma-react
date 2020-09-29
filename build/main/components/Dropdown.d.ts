import React from 'react';
import { DropdownTriggerProps } from "./DropdownTrigger";
import { DropdownMenuProps } from "./DropdownMenu";
import { DropdownContentProps } from "./DropdownContent";
import { DropdownDividerProps } from "./DropdownDivider";
import { DropdownItemProps } from "./DropdownItem";
declare type DropdownProps = React.ComponentPropsWithoutRef<'div'> & {
    active?: boolean;
    up?: boolean;
    right?: boolean;
    hoverable?: boolean;
};
declare type DropdownComponent = React.FC<DropdownProps> & {
    Trigger: React.FC<DropdownTriggerProps>;
    Menu: React.FC<DropdownMenuProps>;
    Content: React.FC<DropdownContentProps>;
    Divider: React.FC<DropdownDividerProps>;
    Item: React.FC<DropdownItemProps>;
};
declare const Dropdown: DropdownComponent;
export default Dropdown;
export { Dropdown, DropdownProps, DropdownComponent };
