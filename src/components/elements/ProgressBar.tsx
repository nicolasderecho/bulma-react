import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {sizeClassFor, isEnabled, colorClassFor} from "../helpers/util";
import {Color, COLORS, HtmlElement, Size, SIZES} from "../helpers/constants";
import {checkEnabledProperties} from "../helpers/util";

type ProgressBarProps = {
  as?: HtmlElement;
  color?: Color;
  size?: Size;
  indeterminated?: boolean;
} & React.ComponentPropsWithoutRef<"progress">

const INDETERMINATED_PROP_NAME = 'indeterminated';

const ProgressBar: React.FC<ProgressBarProps> = ({ ...originalProps}) => {
  const { className, color, size, value, ...props  } = originalProps;
  const classes = classNames(className, 'progress', sizeClassFor(size), colorClassFor(color), checkEnabledProperties(originalProps, [INDETERMINATED_PROP_NAME]));
  const finalProps = isEnabled(originalProps, INDETERMINATED_PROP_NAME) ? ({...props}) : ({...props, value}) ;
  return <progress className={classes} {...finalProps} />;
};

ProgressBar.displayName = 'ProgressBar';

ProgressBar.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(COLORS),
  size: PropTypes.oneOf(SIZES),
  [INDETERMINATED_PROP_NAME]: PropTypes.bool,
  value: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
  max: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ])
};

export default ProgressBar;

export { ProgressBar, ProgressBarProps }