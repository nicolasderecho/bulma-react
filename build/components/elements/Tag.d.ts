import React from 'react';
import { Color, HtmlElement, Size } from "../helpers/constants";
declare type TagProps = {
    as?: HtmlElement;
    size?: Size;
    color?: Color;
    grouped?: boolean;
    addons?: boolean;
    isDelete?: boolean;
    rounded?: boolean;
    light?: boolean;
} & React.ComponentPropsWithoutRef<'span'>;
declare const Tag: React.FC<TagProps>;
export default Tag;
export { Tag, TagProps };
