import React from 'react';
import { HtmlElement } from "../helpers/constants";
declare type HeroBodyProps = React.ComponentPropsWithoutRef<'div'> & {
    as?: HtmlElement;
};
declare const HeroBody: React.FC<HeroBodyProps>;
export default HeroBody;
export { HeroBody, HeroBodyProps };
