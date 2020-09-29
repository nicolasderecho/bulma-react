import React from 'react';
import { HtmlElement } from "../helpers/constants";
declare type PanelBlockProps = React.ComponentPropsWithoutRef<'div'> & {
    as?: HtmlElement;
    active?: boolean;
};
declare const PanelBlock: React.FC<PanelBlockProps>;
export default PanelBlock;
export { PanelBlock, PanelBlockProps };
