import * as React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {HtmlElement, Size} from "../helpers/constants";
import {htmlElementFor, isEnabled, sizeClassFor} from "../helpers/util";

type ContentProps = {
  size?: Size;
  as?: HtmlElement;
  centered?: boolean;
} & React.ComponentPropsWithoutRef<HtmlElement>

const Content: React.FC<ContentProps> = (originalProps) => {
  const {className, size, as, centered, ...props} = originalProps;
  const Element = htmlElementFor(as, 'div');
  const classes = classNames(className, 'content', sizeClassFor(size), { 'has-text-centered': isEnabled(originalProps, 'centered') });
  return <Element className={classes} {...props} />;
}

Content.displayName = 'Content';

Content.propTypes = {
  className: PropTypes.string,
  centered: PropTypes.bool
};

export default Content;

export {Content, ContentProps};