import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {htmlElementFor} from "../helpers/util";
import {HtmlElement} from "../helpers/constants";

type HeroFootProps = React.ComponentPropsWithoutRef<'div'> & {
  as?: HtmlElement;
}

const HeroFoot: React.FC<HeroFootProps> = ({ className, as, ...props }) => {
  const Element    = htmlElementFor(as, 'div');
  const classes = classNames(className, 'hero-foot');
  return <Element className={classes} {...props} />;
};

HeroFoot.displayName = 'HeroFoot';

HeroFoot.propTypes = {
  className: PropTypes.string
};

export default HeroFoot;

export { HeroFoot, HeroFootProps }