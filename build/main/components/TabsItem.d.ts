import React from 'react';
declare type TabsItemProps = React.ComponentPropsWithoutRef<'li'> & {
    active?: boolean;
    includeLink?: boolean;
};
declare const TabsItem: React.FC<TabsItemProps>;
export default TabsItem;
export { TabsItem, TabsItemProps };
