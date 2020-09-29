import React from 'react';
import { Size, Color, ElementState, HtmlElement } from '../helpers/constants';
declare type SelectWrapperProps = React.ComponentPropsWithoutRef<'div'> & {
    size?: Size;
    color?: Color;
    state?: ElementState;
    as?: HtmlElement;
    fullwidth?: boolean;
    multiple?: boolean;
};
declare const SelectWrapper: React.FC<SelectWrapperProps>;
export default SelectWrapper;
export { SelectWrapper, SelectWrapperProps };
