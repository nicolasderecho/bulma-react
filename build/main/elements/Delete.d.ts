import * as React from 'react';
import { Size, HtmlElement } from "../helpers/constants";
declare type DeleteProps = {
    size?: Size;
    as?: HtmlElement;
} & React.ComponentPropsWithoutRef<HtmlElement>;
declare const Delete: React.FC<DeleteProps>;
export default Delete;
export { Delete, DeleteProps };
