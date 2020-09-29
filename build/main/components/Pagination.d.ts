import React from 'react';
import { Size, Alignment } from "../helpers/constants";
import { PaginationPreviousProps } from "./PaginationPrevious";
import { PaginationNextProps } from "./PaginationNext";
import { PaginationListProps } from "./PaginationList";
import { PaginationLinkProps } from "./PaginationLink";
import { PaginationEllipsisProps } from "./PaginationEllipsis";
declare type PaginationProps = React.ComponentPropsWithoutRef<'nav'> & {
    size?: Size;
    alignment?: Alignment;
    rounded?: boolean;
};
declare type PaginationComponent = React.FC<PaginationProps> & {
    Previous: React.FC<PaginationPreviousProps>;
    Next: React.FC<PaginationNextProps>;
    List: React.FC<PaginationListProps>;
    Link: React.FC<PaginationLinkProps>;
    Ellipsis: React.FC<PaginationEllipsisProps>;
};
declare const Pagination: PaginationComponent;
export default Pagination;
export { Pagination, PaginationComponent, PaginationProps };
