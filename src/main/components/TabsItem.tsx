import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {checkEnabledProperties} from "../helpers/util";

type TabsItemProps = React.ComponentPropsWithoutRef<'li'> & {
  active?: boolean;
}

const TabsItem: React.FC<TabsItemProps> = (originalProps) => {
  const { className, children, active, ...props } = originalProps;
  const classes = classNames(className, checkEnabledProperties(originalProps, ['active']));
  // eslint-disable-next-line
  return <li className={classes} {...props} ><a>{children}</a></li>;
};

TabsItem.displayName = 'TabsItem';

TabsItem.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool
};

export default TabsItem;

export { TabsItem, TabsItemProps }