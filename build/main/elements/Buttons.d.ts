import React from 'react';
import { Size, ButtonPosition } from "../helpers/constants";
declare type ButtonsProps = {
    size?: Size;
    position?: ButtonPosition;
    addons?: boolean;
} & React.ComponentPropsWithoutRef<'div'>;
declare const Buttons: React.FC<ButtonsProps>;
export default Buttons;
export { Buttons, ButtonsProps };
