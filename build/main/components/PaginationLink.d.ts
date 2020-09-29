import React from 'react';
import { HtmlElement } from "../helpers/constants";
declare type PaginationLinkProps = React.ComponentPropsWithoutRef<'li'> & {
    as?: HtmlElement;
    current?: boolean;
};
declare const PaginationLink: React.FC<PaginationLinkProps>;
export default PaginationLink;
export { PaginationLink, PaginationLinkProps };
