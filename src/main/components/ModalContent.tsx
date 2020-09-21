import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

type ModalContentProps = React.ComponentPropsWithoutRef<'div'>;

const ModalContent: React.FC<ModalContentProps> = ({ className, ...props }) => {
  const classes = classNames(className, 'modal-content');
  return <div className={classes} {...props} />;
};

ModalContent.displayName = 'ModalContent';

ModalContent.propTypes = {
  className: PropTypes.string
};

export default ModalContent;

export { ModalContent, ModalContentProps }