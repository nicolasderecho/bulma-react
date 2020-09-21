import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {PanelHeading, PanelHeadingProps} from "./PanelHeading";
import {PanelBlock, PanelBlockProps} from "./PanelBlock";
import {PanelIcon, PanelIconProps} from "./PanelIcon";
import {PanelTabs, PanelTabsComponent } from "./PanelTabs";
import {Color, COLORS} from "../helpers/constants";
import {colorClassFor} from "../helpers/util";

type PanelProps = React.ComponentPropsWithoutRef<'nav'> & {
  color?: Color;
};

type PanelComponent = React.FC<PanelProps> & {
  Heading: React.FC<PanelHeadingProps>;
  Block: React.FC<PanelBlockProps>;
  Icon: React.FC<PanelIconProps>;
  Tabs: PanelTabsComponent;
};

const Panel: PanelComponent = ({ className, color, ...props }) => {
  const classes = classNames(className, 'panel', colorClassFor(color));
  return <nav className={classes} {...props} />;
};

Panel.displayName = 'Panel';

Panel.Heading = PanelHeading;
Panel.Block   = PanelBlock;
Panel.Icon    = PanelIcon;
Panel.Tabs    = PanelTabs;

Panel.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(COLORS)
};

export default Panel;

export { Panel, PanelProps, PanelComponent }