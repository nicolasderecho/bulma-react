import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {addonsClassFor, htmlElementFor, sizeClassFor} from "../helpers/util";
import {Color, COLORS, Size, SIZES} from "../helpers/constants";

type TagsProps = {
  color?: Color;
  size?: Size;
  as?: HTMLElement;
  addons?: boolean;
} & React.ComponentPropsWithoutRef<'div'>

const Tags: React.FC<TagsProps> = ({ ...originalProps }) => {
  const { className, as, size, addons, ...props } = originalProps;
  const Element = htmlElementFor(as, 'div');
  const classes = classNames(className, 'tags', addonsClassFor(originalProps), sizeClassFor(size, 'are'));
  return <Element className={classes} {...props} />;
};

Tags.displayName = 'Tags';

Tags.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(SIZES),
  color: PropTypes.oneOf(COLORS),
  addons: PropTypes.bool
};

export default Tags;

export { Tags }