import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

type DropdownDividerProps = React.ComponentPropsWithoutRef<'hr'>

const DropdownDivider: React.FC<DropdownDividerProps> = ({ className, ...props }) => {
  const classes = classNames(className, 'dropdown-divider');
  return <hr className={classes} {...props} />;
};

DropdownDivider.displayName = 'DropdownDivider';

DropdownDivider.propTypes = {
  className: PropTypes.string
};

export default DropdownDivider;

export { DropdownDivider, DropdownDividerProps }