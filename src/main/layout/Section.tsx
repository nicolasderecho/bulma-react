import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {htmlElementFor} from "../helpers/util";
import {HtmlElement} from "../helpers/constants";

type SectionProps = React.ComponentPropsWithoutRef<'footer'> & {
  as?: HtmlElement;
  spacing?: string;
}

const Section: React.FC<SectionProps> = ({ className, as, spacing, ...props }) => {
  const Element    = htmlElementFor(as, 'section');
  const classes = classNames(className, 'section', { [`is-${spacing}`]: ['medium', 'large'].includes(spacing as string) });
  return <Element className={classes} {...props} />;
};

Section.displayName = 'Section';

Section.propTypes = {
  className: PropTypes.string
};

export default Section;

export {Section, SectionProps}