import React from 'react';
import { CheckRadioProps } from "./CheckRadio";
declare type CheckBoxProps = Omit<CheckRadioProps, 'type'> & {
    indeterminate?: boolean;
};
declare const CheckBox: React.FC<CheckBoxProps>;
export default CheckBox;
export { CheckBox, CheckBoxProps };
