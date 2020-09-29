import React from 'react';
import { HtmlElement, SizeNumber } from "../helpers/constants";
declare type HeadingElementProps = {
    as?: HtmlElement;
    sizeNumber?: SizeNumber;
    spaced?: boolean;
} & React.ComponentPropsWithoutRef<'h1'>;
declare const HeadingElement: React.FC<HeadingElementProps>;
export default HeadingElement;
export { HeadingElement, HeadingElementProps };
