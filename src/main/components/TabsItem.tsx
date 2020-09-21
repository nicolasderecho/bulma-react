import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {checkEnabledProperties} from "../helpers/util";

type TabsItemProps = React.ComponentPropsWithoutRef<'li'> & {
  active?: boolean;
  includeLink?: boolean;
}

const TabsItem: React.FC<TabsItemProps> = (originalProps) => {
  const { className, children, active, includeLink = true, ...props } = originalProps;
  const classes = classNames(className, checkEnabledProperties(originalProps, ['active']));
  // eslint-disable-next-line
  const element = includeLink
    ? <li className={classes} {...props} > <a>{children}</a> </li>
    : <li className={classes} {...props} children={children} />
  return element;
};

TabsItem.displayName = 'TabsItem';

TabsItem.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool,
  includeLink: PropTypes.bool
};

export default TabsItem;

export { TabsItem, TabsItemProps }