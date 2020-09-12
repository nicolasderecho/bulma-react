import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {checkEnabledProperties, htmlElementFor, sizeNumberClassFor} from "../helpers/util";
import {HtmlElement, SIZE_NUMBERS, SizeNumber} from "../helpers/constants";

type HeadingElementProps = {
  as?: HtmlElement;
  sizeNumber?: SizeNumber;
  spaced?: boolean;
} & React.ComponentPropsWithoutRef<'h1'>;

const HeadingElement: React.FC<HeadingElementProps> = ({ ...originalProps }) => {
  const { className, as, sizeNumber, spaced, ...props } = originalProps;
  const Element = htmlElementFor(as, 'h1');
  const classes = classNames(className, checkEnabledProperties(originalProps, ['spaced']), sizeNumberClassFor(sizeNumber));
  return <Element className={classes} {...props} />;
};

HeadingElement.displayName = 'HeadingElement';

HeadingElement.propTypes = {
  className: PropTypes.string,
  spaced: PropTypes.bool,
  sizeNumber: (props: HeadingElementProps, propName: string) => {
    const value = props[propName];
    const isInvalidSizeNumber = !!value && SIZE_NUMBERS.indexOf(value.toString()) === -1;
    if(isInvalidSizeNumber) {
      return new Error(`${value} is an invalid size number. must be one of ${SIZE_NUMBERS.join(', ')}`);
    }
    return null;
  }
};

export default HeadingElement;

export { HeadingElement, HeadingElementProps }