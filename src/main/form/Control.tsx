import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {checkEnabledProperties, sizeClassFor} from "../helpers/util";
import {Size, SIZES} from "../helpers/constants";

type ControlProps = React.ComponentPropsWithoutRef<'div'> & {
  hasIconsLeft? :boolean;
  hasIconsRight? :boolean;
  expanded?: boolean;
  loading?: boolean;
  size?: Size;
}

const Control: React.FC<ControlProps> = (originalProps) => {
  const { className, hasIconsLeft, hasIconsRight, expanded, loading, size, ...props } = originalProps;
  const classes = classNames(className, 'control', checkEnabledProperties(originalProps, ['expanded', 'loading']), checkEnabledProperties(originalProps, ['hasIconsLeft', 'hasIconsRight'], {prefix: ''}), sizeClassFor(size));
  return <div className={classes} {...props} />;
};

Control.displayName = 'Control';

Control.propTypes = {
  className: PropTypes.string,
  hasIconsLeft: PropTypes.bool,
  hasIconsRight: PropTypes.bool,
  expanded: PropTypes.bool,
  loading: PropTypes.bool,
  size: PropTypes.oneOf(SIZES)
};

export default Control;

export { Control, ControlProps }