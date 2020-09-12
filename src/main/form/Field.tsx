import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { addonsClassFor, alignmentClassFor, checkEnabledProperty, groupedClassFor, isEnabled } from "../helpers/util";
import { ALIGNMENTS, Alignment } from "../helpers/constants";
import FieldLabel, {FieldLabelProps} from "./FieldLabel";
import FieldBody, {FieldBodyProps} from "./FieldBody";

type FieldProps = React.ComponentPropsWithoutRef<'div'> & {
  alignment?: Alignment;
  grouped?: boolean;
  addons?: boolean;
  groupedCentered?: boolean;
  groupedRight?: boolean;
  groupedMultiline?: boolean;
  horizontal?: boolean;
}

type FieldComponent = React.FC<FieldProps> & {
  Label: React.FC<FieldLabelProps>;
  Body: React.FC<FieldBodyProps>;
}

const Field: FieldComponent = (originalProps) => {
  const { className, alignment, grouped, addons, groupedCentered, groupedRight, groupedMultiline, horizontal,...props } = originalProps;
  const classes = classNames(className, 'field', groupedClassFor(originalProps), addonsClassFor(originalProps), {'is-grouped-centered': isEnabled(originalProps, 'groupedCentered')}, {'is-grouped-right': isEnabled(originalProps, 'groupedRight')}, {'is-grouped-multiline': isEnabled(originalProps, 'groupedMultiline')}, checkEnabledProperty(originalProps, 'horizontal'), alignmentClassFor(alignment, {prefix: 'has-addons'}));
  return <div className={classes} {...props} />;
};

Field.displayName = 'Field';

Field.propTypes = {
  className: PropTypes.string,
  alignment: PropTypes.oneOf(ALIGNMENTS)
};

Field.Label = FieldLabel;
Field.Body  = FieldBody;

export default Field;

export { Field, FieldProps, FieldComponent }