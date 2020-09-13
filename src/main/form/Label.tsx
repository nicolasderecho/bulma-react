import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {sizeClassFor} from "../helpers/util";
import {Size, SIZES} from "../helpers/constants";

type LabelProps = React.ComponentPropsWithoutRef<'label'> & {
  size?: Size;
}

const Label: React.FC<LabelProps> = ({ className, size, ...props }) => {
  const classes = classNames(className, 'label', sizeClassFor(size));
  return <label className={classes} {...props} />;
};

Label.displayName = 'Label';

Label.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(SIZES)
};

export default Label;