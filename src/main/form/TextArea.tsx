import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { checkEnabledProperties, colorClassFor, sizeClassFor, stateClassFor } from "../helpers/util";
import { COLORS, SIZES, ELEMENT_STATES, Color, Size, ElementState } from "../helpers/constants";

type TextAreaProps = React.ComponentPropsWithoutRef<'textarea'> & {
  color?: Color;
  size?: Size;
  state?: ElementState;
  hasFixedSize?: boolean;
}

const Textarea: React.FC<TextAreaProps> = (originalProps) => {
  const { className, color, size, state, ...props } = originalProps;
  const classes = classNames(className, 'textarea', colorClassFor(color), sizeClassFor(size), stateClassFor(state), checkEnabledProperties(originalProps, ['hasFixedSize'], {prefix: ''}));
  return <textarea className={classes} {...props} />;
};

Textarea.displayName = 'Textarea';

Textarea.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(COLORS),
  size: PropTypes.oneOf(SIZES),
  state: PropTypes.oneOf(ELEMENT_STATES)
};

export default Textarea;