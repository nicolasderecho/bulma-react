import React from 'react';
import { CardHeaderTitleProps } from "./CardHeaderTitle";
import { CardHeaderIconProps } from "./CardHeaderIcon";
declare type CardHeaderProps = React.ComponentPropsWithoutRef<'header'>;
declare type CardHeaderComponent = React.FC<CardHeaderProps> & {
    Title: React.FC<CardHeaderTitleProps>;
    Icon: React.FC<CardHeaderIconProps>;
};
declare const CardHeader: CardHeaderComponent;
export default CardHeader;
export { CardHeader, CardHeaderProps, CardHeaderComponent };
