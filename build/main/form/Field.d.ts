import React from 'react';
import { Alignment } from "../helpers/constants";
import { FieldLabelProps } from "./FieldLabel";
import { FieldBodyProps } from "./FieldBody";
declare type FieldProps = React.ComponentPropsWithoutRef<'div'> & {
    alignment?: Alignment;
    grouped?: boolean;
    addons?: boolean;
    groupedCentered?: boolean;
    groupedRight?: boolean;
    groupedMultiline?: boolean;
    horizontal?: boolean;
};
declare type FieldComponent = React.FC<FieldProps> & {
    Label: React.FC<FieldLabelProps>;
    Body: React.FC<FieldBodyProps>;
};
declare const Field: FieldComponent;
export default Field;
