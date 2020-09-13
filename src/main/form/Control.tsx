import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {checkEnabledProperties} from "../helpers/util";

type ControlProps = React.ComponentPropsWithoutRef<'div'> & {
  hasIconsLeft? :boolean;
  hasIconsRight? :boolean;
  expanded?: boolean;
  loading?: boolean;
}

const Control: React.FC<ControlProps> = (originalProps) => {
  const { className, hasIconsLeft, hasIconsRight, expanded, loading, ...props } = originalProps;
  const classes = classNames(className, 'control', checkEnabledProperties(originalProps, ['expanded', 'loading']), checkEnabledProperties(originalProps, ['hasIconsLeft', 'hasIconsRight'], {prefix: ''}));
  return <div className={classes} {...props} />;
};

Control.displayName = 'Control';

Control.propTypes = {
  className: PropTypes.string,
  hasIconsLeft: PropTypes.bool,
  hasIconsRight: PropTypes.bool,
  expanded: PropTypes.bool,
  loading: PropTypes.bool
};

export default Control;

export { Control, ControlProps }