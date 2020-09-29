import React from 'react';
import { Alignment, Separator, Size } from "../helpers/constants";
import { BreadcrumbItemProps } from "./BreadcrumbItem";
declare type BreadrcumbProps = React.ComponentPropsWithoutRef<'nav'> & {
    ulClassName?: string | object | undefined;
    alignment?: Alignment;
    size?: Size;
    separator?: Separator;
};
declare type BreadrcumbComponent = React.FC<BreadrcumbProps> & {
    Item: React.FC<BreadcrumbItemProps>;
};
declare const Breadcrumb: BreadrcumbComponent;
export default Breadcrumb;
export { Breadcrumb, BreadrcumbProps, BreadrcumbComponent };
