import React from 'react';
import { HtmlElement } from "../helpers/constants";
declare type HeroFootProps = React.ComponentPropsWithoutRef<'div'> & {
    as?: HtmlElement;
};
declare const HeroFoot: React.FC<HeroFootProps>;
export default HeroFoot;
export { HeroFoot, HeroFootProps };
