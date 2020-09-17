import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

type DropdownMenuProps = React.ComponentPropsWithoutRef<'div'>

const DropdownMenu: React.FC<DropdownMenuProps> = ({ className, ...props }) => {
  const classes = classNames(className, 'dropdown-menu');
  return <div className={classes} {...props} role={'menu'} />;
};

DropdownMenu.displayName = 'DropdownMenu';

DropdownMenu.propTypes = {
  className: PropTypes.string
};

export default DropdownMenu;

export { DropdownMenu, DropdownMenuProps }