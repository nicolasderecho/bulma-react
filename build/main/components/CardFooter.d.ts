import React from 'react';
import { CardFooterItemProps } from "./CardFooterItem";
declare type CardFooterProps = React.ComponentPropsWithoutRef<'footer'>;
declare type CardFooterComponent = React.FC<CardFooterProps> & {
    Item: React.FC<CardFooterItemProps>;
};
declare const CardFooter: CardFooterComponent;
export default CardFooter;
export { CardFooter, CardFooterProps, CardFooterComponent };
