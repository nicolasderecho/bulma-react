import React from 'react';
import { HtmlElement } from "../helpers/constants";
declare type LevelItemProps = React.ComponentPropsWithoutRef<'div'> & {
    as?: HtmlElement;
    centered?: boolean;
};
declare const LevelItem: React.FC<LevelItemProps>;
export default LevelItem;
export { LevelItem, LevelItemProps };
