import * as React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';

type BoxProps = React.ComponentPropsWithoutRef<"div">

const Box: React.FC<BoxProps> = ({className, ...props}) => {
  const classes = classNames(className, 'box');
  return <div className={classes} {...props} />;
}

Box.displayName = 'Box';

Box.propTypes = {
  className: PropTypes.string
};

export default Box;

export {Box, BoxProps};