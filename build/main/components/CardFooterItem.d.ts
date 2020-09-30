import React from 'react';
import { HtmlElement } from "../helpers/constants";
declare type CardFooterItemProps = React.ComponentPropsWithoutRef<'p' | 'div'> & {
    as?: HtmlElement;
};
declare const CardFooterItem: React.FC<CardFooterItemProps>;
export default CardFooterItem;
export { CardFooterItem, CardFooterItemProps };
