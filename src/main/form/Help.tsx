import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {colorClassFor} from "../helpers/util";
import {COLORS, Color} from "../helpers/constants";

type HelpProps = React.ComponentPropsWithoutRef<'p'> & {
  color?: Color;
}

const Help: React.FC<HelpProps> = (originalProps) => {
  const { className, color, ...props } = originalProps;
  const classes = classNames(className, 'help', colorClassFor(color));
  return <p className={classes} {...props} />;
};

Help.displayName = 'Help';

Help.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(COLORS)
};

export default Help;

export { Help, HelpProps }