import React from 'react';
import { HtmlElement, Size } from "../helpers/constants";
declare type FieldBodyProps = React.ComponentPropsWithoutRef<'div'> & {
    as?: HtmlElement;
    size?: Size;
};
declare const FieldBody: React.FC<FieldBodyProps>;
export default FieldBody;
export { FieldBody, FieldBodyProps };
