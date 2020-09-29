import React from 'react';
declare type BreadcrumbItemProps = React.ComponentPropsWithoutRef<'li'> & {
    active?: boolean;
};
declare const BreadcrumbItem: React.FC<BreadcrumbItemProps>;
export default BreadcrumbItem;
export { BreadcrumbItem, BreadcrumbItemProps };
