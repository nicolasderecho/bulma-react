import React from 'react';
import { PanelTabsItemProps } from "./PanelTabsItem";
declare type PanelTabsProps = React.ComponentPropsWithoutRef<'p'>;
declare type PanelTabsComponent = React.FC<PanelTabsProps> & {
    Item: React.FC<PanelTabsItemProps>;
};
declare const PanelTabs: PanelTabsComponent;
export default PanelTabs;
export { PanelTabs, PanelTabsProps, PanelTabsComponent };
