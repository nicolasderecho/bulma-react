import React from 'react';
import { HtmlElement, Size } from "../helpers/constants";
declare type FieldLabelProps = React.ComponentPropsWithoutRef<'div'> & {
    as?: HtmlElement;
    size?: Size;
};
declare const FieldLabel: React.FC<FieldLabelProps>;
export default FieldLabel;
export { FieldLabel, FieldLabelProps };
