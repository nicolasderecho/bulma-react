import * as React from 'react';
import { HtmlElement, Size, Color } from "../helpers/constants";
declare type IconWrapperProps = {
    size?: Size;
    as?: HtmlElement;
    hasText?: Color;
} & React.ComponentPropsWithoutRef<HtmlElement>;
declare const IconWrapper: React.FC<IconWrapperProps>;
export default IconWrapper;
export { IconWrapper, IconWrapperProps };
