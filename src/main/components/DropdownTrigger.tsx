import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

type DropdownTriggerProps = React.ComponentPropsWithoutRef<'div'>

const DropdownTrigger: React.FC<DropdownTriggerProps> = ({ className, ...props }) => {
  const classes = classNames(className, 'dropdown-trigger');
  return <div className={classes} {...props} />;
};

DropdownTrigger.displayName = 'DropdownTrigger';

DropdownTrigger.propTypes = {
  className: PropTypes.string
};

export default DropdownTrigger;

export { DropdownTrigger, DropdownTriggerProps }