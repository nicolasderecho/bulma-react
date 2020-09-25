import React from 'react';
import PropTypes from 'prop-types';
import {CheckRadioProps, CheckRadio} from "./CheckRadio";
import {COLORS, SIZES} from "../helpers/constants";

type RadioProps = Omit<CheckRadioProps, 'type'>;

const Radio: React.FC<RadioProps> = (props) => {
  return <CheckRadio type={'radio'} {...props} />;
};

Radio.displayName = 'Radio';

Radio.propTypes = {
  inputClass: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  color: PropTypes.oneOf(COLORS),
  size: PropTypes.oneOf(SIZES),
  rtl: PropTypes.bool,
  circle: PropTypes.bool,
  block: PropTypes.bool,
  hasNoBorder: PropTypes.bool,
  hasBackgroundColor: PropTypes.bool
};

export default Radio;

export {Radio, RadioProps}