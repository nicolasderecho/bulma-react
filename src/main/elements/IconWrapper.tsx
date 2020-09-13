import * as React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {htmlElementFor, sizeClassFor, textClassFor, iconPositionClassFor} from "../helpers/util";
import {SIZES, HtmlElement, Size, Color, COLORS, IconPosition, ICON_POSITIONS} from "../helpers/constants";

type IconWrapperProps = {
  size?: Size;
  as?: HtmlElement;
  hasText?: Color;
  position?: IconPosition;
} & React.ComponentPropsWithoutRef<HtmlElement>

const IconWrapper: React.FC<IconWrapperProps> = ({ className, as, size, hasText, position, ...props }) => {
  const Element = htmlElementFor(as, 'span');
  const classes = classNames(className, 'icon', sizeClassFor(size), textClassFor(hasText), iconPositionClassFor(position));
  return <Element className={classes} {...props} />;
};

IconWrapper.displayName = 'IconWrapper';

IconWrapper.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(SIZES),
  hasText: PropTypes.oneOf(COLORS),
  position: PropTypes.oneOf(ICON_POSITIONS)
};

export default IconWrapper;

export {IconWrapper, IconWrapperProps}