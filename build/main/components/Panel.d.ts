import React from 'react';
import { PanelHeadingProps } from "./PanelHeading";
import { PanelBlockProps } from "./PanelBlock";
import { PanelIconProps } from "./PanelIcon";
import { PanelTabsComponent } from "./PanelTabs";
import { Color } from "../helpers/constants";
declare type PanelProps = React.ComponentPropsWithoutRef<'nav'> & {
    color?: Color;
};
declare type PanelComponent = React.FC<PanelProps> & {
    Heading: React.FC<PanelHeadingProps>;
    Block: React.FC<PanelBlockProps>;
    Icon: React.FC<PanelIconProps>;
    Tabs: PanelTabsComponent;
};
declare const Panel: PanelComponent;
export default Panel;
export { Panel, PanelProps, PanelComponent };
