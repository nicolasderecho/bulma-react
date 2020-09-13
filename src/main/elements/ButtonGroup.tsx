import React from 'react';
import PropTypes from 'prop-types';
import Field, { FieldProps } from "../form/Field";

type ButtonGroupProps = FieldProps;

const ButtonGroup: React.FC<ButtonGroupProps> = (props) => {
  return <Field grouped={true} {...props} />;
};

ButtonGroup.displayName = 'ButtonGroup';

ButtonGroup.propTypes = {
  className: PropTypes.string
};

export default ButtonGroup;

export { ButtonGroup, ButtonGroupProps }