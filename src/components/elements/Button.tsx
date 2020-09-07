import * as React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { colorClassFor, sizeClassFor, checkEnabledProperties, elementStateClassFor, htmlElementFor, isRenderedAs } from "../helpers/util";
import {COLORS, ELEMENT_STATES, SIZES, BUTTON_ELEMENTS, BUTTON_TYPES, ButtonElement, Color, ElementState, Size} from "../helpers/constants";

type ButtonProps = {
  color?: Color;
  size?: Size;
  state?: ElementState;
  as?: ButtonElement;
  light?: boolean;
  outlined?: boolean;
  inverted?: boolean;
  fullwidth?: boolean;
  rounded?: boolean;
  loading?: boolean;
  text?: boolean;
  static?: boolean;
} & React.ComponentPropsWithoutRef<"button">

const Button: React.FC<ButtonProps> = ({ ...originalProps}) => {
  const {color, light, className, outlined, size, inverted, fullwidth, rounded, loading, text, static: isStatic, state, as = 'button', type = 'button', value,...props} = originalProps;
  const classes = classNames(className,'button', colorClassFor(color), sizeClassFor(size), elementStateClassFor(state), checkEnabledProperties(originalProps, [ 'light', 'outlined', 'inverted', 'rounded', 'fullwidth', 'link', 'loading', 'active', 'text', 'static']));
  const Element = htmlElementFor(as, 'button');
  const finalProps = ['input', 'button'].includes(as) ? { ...props, type, value } : props;
  return <Element className={classes} {...finalProps} />
}

Button.displayName = 'Button';

Button.propTypes = {
  className: PropTypes.string,
  as: PropTypes.oneOf(BUTTON_ELEMENTS),
  children: (props: ButtonProps, propName: string) => {
    if (isRenderedAs('input', props, propName)) {
      return new Error('Button cannot receive children prop if it\'s an input. You should pass the content in \'value\' prop instead.');
    }
    return null;
  },
  type: PropTypes.oneOf(BUTTON_TYPES),
  color: PropTypes.oneOf(COLORS),
  size: PropTypes.oneOf(SIZES),
  state: PropTypes.oneOf(ELEMENT_STATES)
};

export default Button

export { Button, ButtonProps }