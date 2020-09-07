import * as React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {htmlElementFor, sizeClassFor, textClassFor, iconPositionClassFor} from "../helpers/util";
import {SIZES, ICON_POSITIONS, HtmlElement, IconPosition, Size} from "../helpers/constants";

type IconWrapperProps = {
  size?: Size;
  as?: HtmlElement;
  position?: IconPosition;
  hasText?: any;
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
  position: PropTypes.oneOf(ICON_POSITIONS)
};

export default IconWrapper;

export {IconWrapper, IconWrapperProps}