import React from 'react';
import { Color, Size } from "../helpers/constants";
declare type TagsProps = {
    color?: Color;
    size?: Size;
    as?: HTMLElement;
    addons?: boolean;
} & React.ComponentPropsWithoutRef<'div'>;
declare const Tags: React.FC<TagsProps>;
export default Tags;
export { Tags };
