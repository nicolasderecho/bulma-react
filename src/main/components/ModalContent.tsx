import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {OutsideAlerter} from "../helpers/react";

type ModalContentProps = React.ComponentPropsWithoutRef<'div'> & {
  closeOnClickOutside?: boolean;
};

const ModalContent: React.FC<ModalContentProps> = ({ className, closeOnClickOutside= true, ...props }) => {
  const classes = classNames(className, 'modal-content');
  return <OutsideAlerter closeOnClickOutside={closeOnClickOutside}>
    <div className={classes} {...props} />
  </OutsideAlerter>;
};

ModalContent.displayName = 'ModalContent';

ModalContent.propTypes = {
  className: PropTypes.string,
  closeOnClickOutside: PropTypes.bool
};

export default ModalContent;

export { ModalContent, ModalContentProps }