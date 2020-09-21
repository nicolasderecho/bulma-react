import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

type ModalBackgroundProps = React.ComponentPropsWithoutRef<'div'>;

const ModalBackground: React.FC<ModalBackgroundProps> = ({ className, ...props }) => {
  const classes = classNames(className, 'modal-background');
  return <div className={classes} {...props} />;
};

ModalBackground.displayName = 'ModalBackground';

ModalBackground.propTypes = {
  className: PropTypes.string
};

export default ModalBackground;

export {ModalBackground, ModalBackgroundProps}