import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {buttonPositionClassFor, addonsClassFor, sizeClassFor} from "../helpers/util";
import {SIZES, BUTTON_POSITIONS, Size, ButtonPosition} from "../helpers/constants";

type ButtonsProps = {
  size?: Size;
  position?: ButtonPosition;
  addons?: boolean;
} & React.ComponentPropsWithoutRef<'div'>

const Buttons: React.FC<ButtonsProps> = ({ ...originalProps }) => {
  const { className, size, position, ...props } = originalProps;
  const classes = classNames(className, 'buttons', sizeClassFor(size, 'are'), buttonPositionClassFor(position), addonsClassFor(props));
  return <div className={classes} {...props} />;
};

Buttons.displayName = 'Buttons';

Buttons.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(SIZES),
  addons: PropTypes.bool,
  position: PropTypes.oneOf(BUTTON_POSITIONS)
};

export default Buttons;

export {Buttons, ButtonsProps}