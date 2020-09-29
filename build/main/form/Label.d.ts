import React from 'react';
import { Size } from "../helpers/constants";
declare type LabelProps = React.ComponentPropsWithoutRef<'label'> & {
    size?: Size;
};
declare const Label: React.FC<LabelProps>;
export default Label;
