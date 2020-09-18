import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {checkEnabledProperties} from "../helpers/util";

type PanelTabsItemProps = React.ComponentPropsWithoutRef<'a'> & {
  active?: boolean;
}

const PanelTabsItem: React.FC<PanelTabsItemProps> = (originalProps) => {
  const { className, active, ...props } = originalProps;
  const classes = classNames(className, checkEnabledProperties(originalProps, ['active']));
  // eslint-disable-next-line
  return <a className={classes} {...props} />;
};

PanelTabsItem.displayName = 'PanelTabsItem';

PanelTabsItem.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool
};

export default PanelTabsItem;

export { PanelTabsItem, PanelTabsItemProps }