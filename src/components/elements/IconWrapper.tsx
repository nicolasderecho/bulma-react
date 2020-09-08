import * as React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {htmlElementFor, sizeClassFor, textClassFor} from "../helpers/util";
import {SIZES, HtmlElement, Size, Color, COLORS} from "../helpers/constants";

type IconWrapperProps = {
  size?: Size;
  as?: HtmlElement;
  hasText?: Color;
} & React.ComponentPropsWithoutRef<HtmlElement>

const IconWrapper: React.FC<IconWrapperProps> = ({ className, as, size, hasText, ...props }) => {
  const Element = htmlElementFor(as, 'span');
  const classes = classNames(className, 'icon', sizeClassFor(size), textClassFor(hasText));
  return <Element className={classes} {...props} />;
};

IconWrapper.displayName = 'IconWrapper';

IconWrapper.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(SIZES),
  hasText: PropTypes.oneOf(COLORS)
};

export default IconWrapper;

export {IconWrapper, IconWrapperProps}