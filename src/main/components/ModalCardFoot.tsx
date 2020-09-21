import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

type ModalCardFootProps = React.ComponentPropsWithoutRef<'footer'>;

const ModalCardFoot: React.FC<ModalCardFootProps> = ({ className, ...props }) => {
  const classes = classNames(className, 'modal-card-foot');
  return <footer className={classes} {...props} />;
};

ModalCardFoot.displayName = 'ModalCardFoot';

ModalCardFoot.propTypes = {
  className: PropTypes.string
};

export default ModalCardFoot;

export {ModalCardFoot, ModalCardFootProps}