import * as React from 'react';
import { HtmlElement, Size } from "../helpers/constants";
declare type ContentProps = {
    size?: Size;
    as?: HtmlElement;
    centered?: boolean;
} & React.ComponentPropsWithoutRef<HtmlElement>;
declare const Content: React.FC<ContentProps>;
export default Content;
export { Content, ContentProps };
