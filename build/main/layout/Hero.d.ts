import React from 'react';
import { Color, HeroSize, HtmlElement } from "../helpers/constants";
import { HeroHeadProps } from "./HeroHead";
import { HeroFootProps } from "./HeroFoot";
import { HeroBodyProps } from "./HeroBody";
declare type HeroProps = React.ComponentPropsWithoutRef<'section'> & {
    as?: HtmlElement;
    size?: HeroSize;
    color?: Color;
    bold?: boolean;
    fullheightWithNavbar?: boolean;
};
declare type HeroComponent = React.FC<HeroProps> & {
    Head: React.FC<HeroHeadProps>;
    Body: React.FC<HeroBodyProps>;
    Foot: React.FC<HeroFootProps>;
};
declare const Hero: HeroComponent;
export default Hero;
export { Hero, HeroProps, HeroComponent };
