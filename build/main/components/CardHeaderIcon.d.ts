import React from 'react';
import { HtmlElement } from "../helpers/constants";
declare type CardHeaderIconProps = React.ComponentPropsWithoutRef<'p' | 'span'> & {
    as?: HtmlElement;
};
declare const CardHeaderIcon: React.FC<CardHeaderIconProps>;
export default CardHeaderIcon;
export { CardHeaderIcon, CardHeaderIconProps };
