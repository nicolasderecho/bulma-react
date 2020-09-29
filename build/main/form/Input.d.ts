import React from 'react';
import { Color, ElementState, Size } from "../helpers/constants";
declare type RegularInput = React.ComponentPropsWithoutRef<'input'>;
declare type InputProps = {
    color?: Color;
    size?: Size;
    state?: ElementState;
    expanded?: boolean;
    rounded?: boolean;
    static?: boolean;
    htmlSize?: number | string;
} & Omit<RegularInput, 'size'>;
declare const Input: React.FC<InputProps>;
export default Input;
export { Input, InputProps };
