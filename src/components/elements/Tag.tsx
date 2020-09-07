import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Color, COLORS, HtmlElement, Size, SIZES} from "../helpers/constants";
import {checkEnabledProperties, colorClassFor, htmlElementFor, isEnabled, sizeClassFor} from "../helpers/util";

type TagProps = {
  as?: HtmlElement;
  size?: Size;
  color?: Color;
  grouped?: boolean;
  addons?: boolean;
  isDelete?: boolean;
  rounded?: boolean;
  light?: boolean;
} & React.ComponentPropsWithoutRef<'span'>;

const Tag: React.FC<TagProps> = ({ ...originalProps }) => {
  const { className, as, size, color, grouped, addons, isDelete, rounded, light, ...props } = originalProps;
  const Element = htmlElementFor(as, 'span');
  const classes = classNames(className, 'tag', sizeClassFor(size), colorClassFor(color), checkEnabledProperties(originalProps, ['delete', 'rounded', 'light']), {'is-delete': isEnabled(originalProps, 'isDelete')});
  return <Element className={classes} {...props} />;
};

Tag.displayName = 'Tag';

Tag.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(SIZES),
  color: PropTypes.oneOf(COLORS),
  grouped: PropTypes.bool,
  addons: PropTypes.bool,
  isDelete: PropTypes.bool,
  rounded: PropTypes.bool,
  light: PropTypes.bool,
};

export default Tag;

export { Tag, TagProps }