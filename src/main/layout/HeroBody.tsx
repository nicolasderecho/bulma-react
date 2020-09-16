import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {htmlElementFor} from "../helpers/util";
import {HtmlElement} from "../helpers/constants";

type HeroBodyProps = React.ComponentPropsWithoutRef<'div'> & {
  as?: HtmlElement;
}

const HeroBody: React.FC<HeroBodyProps> = ({ className, as, ...props }) => {
  const Element    = htmlElementFor(as, 'div');
  const classes = classNames(className, 'hero-body');
  return <Element className={classes} {...props} />;
};

HeroBody.displayName = 'HeroBody';

HeroBody.propTypes = {
  className: PropTypes.string
};

export default HeroBody;

export { HeroBody, HeroBodyProps }