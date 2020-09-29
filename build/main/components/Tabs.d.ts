import React from 'react';
import { TabsItemProps } from "./TabsItem";
import { Alignment, Size } from "../helpers/constants";
declare type TabsProps = React.ComponentPropsWithoutRef<'div'> & {
    size?: Size;
    alignment?: Alignment;
    ulClassName?: string | object | undefined;
    boxed?: boolean;
    rounded?: boolean;
    fullwidth?: boolean;
    toggle?: boolean;
    toggleRounded?: boolean;
};
declare type TabsComponent = React.FC<TabsProps> & {
    Item: React.FC<TabsItemProps>;
};
declare const Tabs: TabsComponent;
export default Tabs;
export { Tabs, TabsComponent, TabsProps };
