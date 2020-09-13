import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { checkEnabledProperties, colorClassFor, sizeClassFor, stateClassFor } from "../helpers/util";
import {Color, ElementState, Size, COLORS, SIZES, ELEMENT_STATES} from "../helpers/constants";

type RegularInput = React.ComponentPropsWithoutRef<'input'>;

type InputProps = {
  color?: Color;
  size?: Size;
  state?: ElementState;
  expanded?: boolean;
  rounded?: boolean;
  htmlSize?: any;
} & Omit<RegularInput, 'size'>

const Input: React.FC<InputProps> = (originalProps) => {
  const { className, color, size, state, expanded, rounded,...props } = originalProps;
  const classes = classNames(className, 'input', colorClassFor(color), checkEnabledProperties(originalProps, ['expanded', 'rounded']), sizeClassFor(size), stateClassFor(state));
  return <input className={classes} {...props} />;
};

Input.displayName = 'Input';

Input.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(COLORS),
  size: PropTypes.oneOf(SIZES),
  state: PropTypes.oneOf(ELEMENT_STATES),
  expanded: PropTypes.bool,
  rounded: PropTypes.bool
};

export default Input;

export { Input, InputProps }