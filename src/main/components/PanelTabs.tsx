import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {PanelTabsItemProps, PanelTabsItem} from "./PanelTabsItem";

type PanelTabsProps = React.ComponentPropsWithoutRef<'p'>;

type PanelTabsComponent = React.FC<PanelTabsProps> & {
  Item: React.FC<PanelTabsItemProps>
}

const PanelTabs: PanelTabsComponent = ({ className, ...props }) => {
  const classes = classNames(className, 'panel-tabs');
  return <p className={classes} {...props} />;
};

PanelTabs.displayName = 'PanelTabs';

PanelTabs.Item = PanelTabsItem;

PanelTabs.propTypes = {
  className: PropTypes.string
};

export default PanelTabs;

export { PanelTabs, PanelTabsProps, PanelTabsComponent }