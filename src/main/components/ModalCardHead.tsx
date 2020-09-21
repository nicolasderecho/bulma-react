import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

type ModalCardHeadProps = React.ComponentPropsWithoutRef<'header'>;

const ModalCardHead: React.FC<ModalCardHeadProps> = ({ className, ...props }) => {
  const classes = classNames(className, 'modal-card-head');
  return <header className={classes} {...props} />;
};

ModalCardHead.displayName = 'ModalCardHead';

ModalCardHead.propTypes = {
  className: PropTypes.string
};

export default ModalCardHead;

export { ModalCardHead, ModalCardHeadProps }