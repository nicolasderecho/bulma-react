import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {htmlElementFor} from "../helpers/util";
import {HtmlElement} from "../helpers/constants";

type HeroHeadProps = React.ComponentPropsWithoutRef<'div'> & {
  as?: HtmlElement;
}

const HeroHead: React.FC<HeroHeadProps> = ({ className, as, ...props }) => {
  const Element    = htmlElementFor(as, 'div');
  const classes = classNames(className, 'hero-head');
  return <Element className={classes} {...props} />;
};

HeroHead.displayName = 'HeroHead';

HeroHead.propTypes = {
  className: PropTypes.string
};

export default HeroHead;

export {HeroHead, HeroHeadProps}