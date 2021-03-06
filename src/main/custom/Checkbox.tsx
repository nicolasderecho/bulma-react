import React, {useEffect, useRef, forwardRef} from 'react';
import PropTypes from 'prop-types';
import { isEnabled } from "../helpers/util";
import { COLORS, SIZES } from "../helpers/constants";
import {CheckRadioProps, CheckRadio} from "./CheckRadio";

type CheckBoxProps = Omit<CheckRadioProps, 'type'> & {
  indeterminate?: boolean;
};

const CheckBox: React.FC<CheckBoxProps> = forwardRef((originalProps, ref: React.RefObject<HTMLInputElement>) => {
  const {indeterminate, ...props} = originalProps
  const inputRef = ref || useRef<HTMLInputElement>(null);

  useEffect(() => {
    const input = inputRef.current;
    if(!!input) {
      input.indeterminate = isEnabled(originalProps, 'indeterminate');
    }
  })

  return <CheckRadio type={'checkbox'} ref={inputRef} {...props} />;
})

CheckBox.displayName = 'CheckBox';

CheckBox.propTypes = {
  inputClass: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  color: PropTypes.oneOf(COLORS),
  size: PropTypes.oneOf(SIZES),
  rtl: PropTypes.bool,
  circle: PropTypes.bool,
  block: PropTypes.bool,
  hasNoBorder: PropTypes.bool,
  hasBackgroundColor: PropTypes.bool,
  indeterminate: PropTypes.bool
};

export default CheckBox;

export { CheckBox, CheckBoxProps }