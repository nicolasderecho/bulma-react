import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { colorClassFor, htmlElementFor, stateClassFor, sizeClassFor, checkEnabledProperties } from "../helpers/util";
import { SIZES, Size, COLORS, Color, ELEMENT_STATES, ElementState, HtmlElement } from '../helpers/constants';

type SelectWrapperProps = React.ComponentPropsWithoutRef<'div'> & {
  size?: Size;
  color?: Color;
  state?: ElementState;
  as?: HtmlElement;
  fullwidth?: boolean;
  multiple?: boolean;
};

const SelectWrapper: React.FC<SelectWrapperProps> = (originalProps) => {
  const { className, as, color, size, state, ...props } = originalProps;
  const Element = htmlElementFor(as, 'div');
  const classes = classNames(className, 'select', checkEnabledProperties(originalProps, ['fullwidth', 'multiple']), colorClassFor(color), sizeClassFor(size), stateClassFor(state));
  return <Element className={classes} {...props} />;
};

SelectWrapper.displayName = 'SelectWrapper';

SelectWrapper.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(SIZES),
  color: PropTypes.oneOf(COLORS),
  state: PropTypes.oneOf(ELEMENT_STATES),
  fullwidth: PropTypes.bool,
  multiple: PropTypes.bool
};

export default SelectWrapper;

export { SelectWrapper, SelectWrapperProps }