import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {htmlElementFor} from "../helpers/util";
import {HtmlElement} from "../helpers/constants";

type FooterProps = React.ComponentPropsWithoutRef<'footer'> & {
  as?: HtmlElement;
}

const Footer: React.FC<FooterProps> = ({ className, as, ...props }) => {
  const Element = htmlElementFor(as, 'footer');
  const classes = classNames(className, 'footer');
  return <Element className={classes} {...props} />;
};

Footer.displayName = 'Footer';

Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;

export { Footer, FooterProps }