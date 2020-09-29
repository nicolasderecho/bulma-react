import * as React from 'react';
import { ButtonElement, Color, ElementState, Size } from "../helpers/constants";
declare type ButtonProps = {
    color?: Color;
    size?: Size;
    state?: ElementState;
    as?: ButtonElement;
    light?: boolean;
    outlined?: boolean;
    inverted?: boolean;
    fullwidth?: boolean;
    rounded?: boolean;
    loading?: boolean;
    text?: boolean;
    static?: boolean;
} & React.ComponentPropsWithoutRef<"button">;
declare const Button: React.FC<ButtonProps>;
export default Button;
export { Button, ButtonProps };
