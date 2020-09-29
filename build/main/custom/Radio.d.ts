import React from 'react';
import { CheckRadioProps } from "./CheckRadio";
declare type RadioProps = Omit<CheckRadioProps, 'type'>;
declare const Radio: React.FC<RadioProps>;
export default Radio;
export { Radio, RadioProps };
