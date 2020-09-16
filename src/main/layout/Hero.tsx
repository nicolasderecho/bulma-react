import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { colorClassFor, htmlElementFor, heroSizeClassFor, isEnabled } from "../helpers/util";
import {Color, COLORS, HERO_SIZES, HeroSize, HtmlElement} from "../helpers/constants";
import HeroHead, {HeroHeadProps} from "./HeroHead";
import HeroFoot, {HeroFootProps} from "./HeroFoot";
import HeroBody, {HeroBodyProps} from "./HeroBody";

type HeroProps = React.ComponentPropsWithoutRef<'section'> & {
  as?: HtmlElement;
  size?: HeroSize;
  color?: Color;
  bold?: boolean;
  fullheightWithNavbar?: boolean;
}

type HeroComponent = React.FC<HeroProps> & {
  Head: React.FC<HeroHeadProps>;
  Body: React.FC<HeroBodyProps>;
  Foot: React.FC<HeroFootProps>;
}

const Hero: HeroComponent = (originalProps) => {
  const { className, as, color, size, bold, fullheightWithNavbar, ...props } = originalProps;
  const Element    = htmlElementFor(as, 'section');
  const classes = classNames(className, 'hero', colorClassFor(color), heroSizeClassFor(size), {'is-bold': isEnabled(originalProps, 'bold')}, {'is-fullheight-with-navbar': isEnabled(originalProps, 'fullheightWithNavbar')});
  return <Element className={classes} {...props} />;
};

Hero.displayName = 'Hero';

Hero.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(COLORS),
  size: PropTypes.oneOf(HERO_SIZES),
  bold: PropTypes.bool,
  fullheightWithNavbar: PropTypes.bool
};

Hero.Head = HeroHead;
Hero.Body = HeroBody;
Hero.Foot = HeroFoot;

export default Hero;

export {Hero, HeroProps, HeroComponent}