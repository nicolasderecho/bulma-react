import React from 'react';
import { Size } from "../helpers/constants";
declare type ControlProps = React.ComponentPropsWithoutRef<'div'> & {
    hasIconsLeft?: boolean;
    hasIconsRight?: boolean;
    expanded?: boolean;
    loading?: boolean;
    size?: Size;
};
declare const Control: React.FC<ControlProps>;
export default Control;
export { Control, ControlProps };
