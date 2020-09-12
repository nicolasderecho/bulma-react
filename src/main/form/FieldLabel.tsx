import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {htmlElementFor, sizeClassFor} from "../helpers/util";
import {SIZES, HtmlElement, Size} from "../helpers/constants";

type FieldLabelProps = React.ComponentPropsWithoutRef<'div'> & {
  as?: HtmlElement;
  size?: Size;
}

const FieldLabel: React.FC<FieldLabelProps> = ({ className,  as, size, ...props }) => {
  const classes = classNames(className, 'field-label', sizeClassFor(size));
  const Element = htmlElementFor(as, 'div');
  return <Element className={classes} {...props} />;
};

FieldLabel.displayName = 'FieldLabel';

FieldLabel.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(SIZES)
};

export default FieldLabel;

export { FieldLabel, FieldLabelProps }