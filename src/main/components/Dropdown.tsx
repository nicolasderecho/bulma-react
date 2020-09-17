import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {checkEnabledProperties} from "../helpers/util";
import {DropdownTrigger, DropdownTriggerProps} from "./DropdownTrigger";
import {DropdownMenu, DropdownMenuProps} from "./DropdownMenu";
import {DropdownContent, DropdownContentProps} from "./DropdownContent";
import {DropdownDivider, DropdownDividerProps} from "./DropdownDivider";
import {DropdownItem, DropdownItemProps} from "./DropdownItem";

type DropdownProps = React.ComponentPropsWithoutRef<'div'> & {
  active?: boolean;
  up?: boolean;
  right?: boolean;
  hoverable?: boolean;
}

type DropdownComponent = React.FC<DropdownProps> & {
  Trigger: React.FC<DropdownTriggerProps>;
  Menu: React.FC<DropdownMenuProps>;
  Content: React.FC<DropdownContentProps>;
  Divider: React.FC<DropdownDividerProps>;
  Item: React.FC<DropdownItemProps>;
}

const Dropdown: DropdownComponent = (originalProps) => {
  const { className, active, up, right, hoverable, ...props } = originalProps;
  const classes = classNames(className, 'dropdown', checkEnabledProperties(originalProps, ['active', 'up', 'right', 'hoverable']));
  return <div className={classes} {...props} />;
};

Dropdown.displayName = 'Dropdown';

Dropdown.Trigger = DropdownTrigger;
Dropdown.Menu    = DropdownMenu;
Dropdown.Content = DropdownContent;
Dropdown.Divider = DropdownDivider;
Dropdown.Item    = DropdownItem;

Dropdown.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool,
  up: PropTypes.bool,
  right: PropTypes.bool,
  hoverable: PropTypes.bool
};

export default Dropdown;

export { Dropdown, DropdownProps, DropdownComponent }