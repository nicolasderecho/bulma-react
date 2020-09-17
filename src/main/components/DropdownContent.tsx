import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

type DropdownContentProps = React.ComponentPropsWithoutRef<'div'>

const DropdownContent: React.FC<DropdownContentProps> = ({ className, ...props }) => {
  const classes = classNames(className, 'dropdown-content');
  return <div className={classes} {...props} />;
};

DropdownContent.displayName = 'DropdownContent';

DropdownContent.propTypes = {
  className: PropTypes.string
};

export default DropdownContent;

export { DropdownContent, DropdownContentProps }