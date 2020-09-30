import React from 'react';
import { CardFooterComponent } from "./CardFooter";
import { CardHeaderComponent } from "./CardHeader";
import { CardImageProps } from "./CardImage";
import { CardContentProps } from "./CardContent";
declare type CardProps = React.ComponentPropsWithoutRef<'div'>;
declare type CardComponent = React.FC<CardProps> & {
    Image: React.FC<CardImageProps>;
    Content: React.FC<CardContentProps>;
    Footer: CardFooterComponent;
    Header: CardHeaderComponent;
};
declare const Card: CardComponent;
export default Card;
export { Card, CardProps, CardComponent };
