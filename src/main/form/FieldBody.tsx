import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {htmlElementFor, sizeClassFor} from "../helpers/util";
import {SIZES, HtmlElement, Size} from "../helpers/constants";

type FieldBodyProps = React.ComponentPropsWithoutRef<'div'> & {
  as?: HtmlElement;
  size?: Size;
}

const FieldBody: React.FC<FieldBodyProps> = ({ className,  as, size, ...props }) => {
  const classes = classNames(className, 'field-body', sizeClassFor(size));
  const Element = htmlElementFor(as, 'div');
  return <Element className={classes} {...props} />;
};

FieldBody.displayName = 'FieldBody';

FieldBody.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(SIZES)
};

export default FieldBody;

export { FieldBody, FieldBodyProps }