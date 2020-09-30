import React from 'react';
import { Color } from "../helpers/constants";
declare type HelpProps = React.ComponentPropsWithoutRef<'p'> & {
    color?: Color;
};
declare const Help: React.FC<HelpProps>;
export default Help;
export { Help, HelpProps };
