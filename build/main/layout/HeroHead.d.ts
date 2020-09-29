import React from 'react';
import { HtmlElement } from "../helpers/constants";
declare type HeroHeadProps = React.ComponentPropsWithoutRef<'div'> & {
    as?: HtmlElement;
};
declare const HeroHead: React.FC<HeroHeadProps>;
export default HeroHead;
export { HeroHead, HeroHeadProps };
