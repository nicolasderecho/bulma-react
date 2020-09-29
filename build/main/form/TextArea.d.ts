import React from 'react';
import { Color, Size, ElementState } from "../helpers/constants";
declare type TextAreaProps = React.ComponentPropsWithoutRef<'textarea'> & {
    color?: Color;
    size?: Size;
    state?: ElementState;
    hasFixedSize?: boolean;
};
declare const Textarea: React.FC<TextAreaProps>;
export default Textarea;
