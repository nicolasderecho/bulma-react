import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {checkEnabledProperties} from "../helpers/util";

type BreadcrumbItemProps = React.ComponentPropsWithoutRef<'li'> & {
  active?: boolean;
}

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = (originalProps) => {
  const { className, active, ...props } = originalProps;
  const classes = classNames(className, checkEnabledProperties(originalProps, ['active']));
  return <li className={classes} {...props} />;
};

BreadcrumbItem.displayName = 'BreadcrumbItem';

BreadcrumbItem.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool
};

export default BreadcrumbItem;

export { BreadcrumbItem, BreadcrumbItemProps }