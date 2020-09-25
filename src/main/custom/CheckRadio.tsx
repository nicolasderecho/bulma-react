import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {checkEnabledProperties, colorClassFor, sizeClassFor} from "../helpers/util";
import {CHECK_RADIOS, CheckRadio, Color, COLORS, Size, SIZES} from "../helpers/constants";

type RegularInput = React.ComponentPropsWithRef<'input'>;

type CheckRadioProps = {
  type: CheckRadio;
  inputClass?: any;
  color?: Color;
  size?: Size;
  text?: string;
  htmlSize?: number | string;
  rtl?: boolean;
  circle?: boolean;
  block?: boolean;
  hasNoBorder?: boolean;
  hasBackgroundColor?: boolean;
  id: string;
} & Omit<RegularInput, 'size'>;

const CheckRadio: React.FC<CheckRadioProps> = forwardRef( (originalProps, ref) => {
  const { inputClass, text, id, name, type, color, size, rtl, circle, block, hasNoBorder, hasBackgroundColor, htmlSize, ...props } = originalProps;
  const classes = classNames(inputClass, 'is-checkradio', colorClassFor(color), sizeClassFor(size), checkEnabledProperties(originalProps, ['rtl', 'circle', 'block']), checkEnabledProperties(originalProps, ['hasNoBorder', 'hasBackgroundColor'], { prefix: ''} ));
  return <React.Fragment>
    <input id={id} type={type} className={classes} name={name} ref={ref} {...props} { ...!!htmlSize ? { size: Number(htmlSize) } : null } />
    <label htmlFor={id}>{text}</label>
  </React.Fragment>;
});

CheckRadio.displayName = 'CheckRadio';

CheckRadio.propTypes = {
  inputClass: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  type: PropTypes.oneOf(CHECK_RADIOS).isRequired,
  color: PropTypes.oneOf(COLORS),
  size: PropTypes.oneOf(SIZES),
  rtl: PropTypes.bool,
  circle: PropTypes.bool,
  block: PropTypes.bool,
  hasNoBorder: PropTypes.bool,
  hasBackgroundColor: PropTypes.bool
};

export default CheckRadio;

export { CheckRadio, CheckRadioProps }