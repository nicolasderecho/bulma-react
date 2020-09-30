import React from 'react';
import { HtmlElement } from "../helpers/constants";
declare type CardHeaderTitleProps = React.ComponentPropsWithoutRef<'p' | 'div'> & {
    as?: HtmlElement;
    centered?: boolean;
};
declare const CardHeaderTitle: React.FC<CardHeaderTitleProps>;
export default CardHeaderTitle;
export { CardHeaderTitle, CardHeaderTitleProps };
