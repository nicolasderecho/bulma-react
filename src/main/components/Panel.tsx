import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {PanelHeading, PanelHeadingProps} from "./PanelHeading";
import {PanelBlock, PanelBlockProps} from "./PanelBlock";
import {PanelIcon, PanelIconProps} from "./PanelIcon";
import {PanelTabs, PanelTabsProps} from "./PanelTabs";

type PanelProps = React.ComponentPropsWithoutRef<'nav'>;

type PanelComponent = React.FC<PanelProps> & {
  Heading: React.FC<PanelHeadingProps>;
  Block: React.FC<PanelBlockProps>;
  Icon: React.FC<PanelIconProps>;
  Tabs: React.FC<PanelTabsProps>;
};

const Panel: PanelComponent = ({ className, ...props }) => {
  const classes = classNames(className, 'panel');
  return <nav className={classes} {...props} />;
};

Panel.displayName = 'Panel';

Panel.Heading = PanelHeading;
Panel.Block   = PanelBlock;
Panel.Icon    = PanelIcon;
Panel.Tabs    = PanelTabs;

Panel.propTypes = {
  className: PropTypes.string
};

export default Panel;

export { Panel, PanelProps, PanelComponent }