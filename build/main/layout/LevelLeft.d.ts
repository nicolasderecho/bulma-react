import React from 'react';
import { HtmlElement } from "../helpers/constants";
declare type LevelLeftProps = React.ComponentPropsWithoutRef<'div'> & {
    as?: HtmlElement;
};
declare const LevelLeft: React.FC<LevelLeftProps>;
export default LevelLeft;
export { LevelLeft, LevelLeftProps };
