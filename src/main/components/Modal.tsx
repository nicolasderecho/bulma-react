import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {checkEnabledProperties} from "../helpers/util";
import { ModalBackground, ModalBackgroundProps } from "./ModalBackground";
import {ModalContent, ModalContentProps} from "./ModalContent";
import { ModalClose,ModalCloseProps } from "./ModalClose";
import { ModalCard, ModalCardProps } from "./ModalCard";

type ModalProps = React.ComponentPropsWithoutRef<'div'> & {
  active?: boolean;
  closeFunction?: Function,
  onOpen?: Function,
  onClose?: Function,
  onMount?: Function,
  onUnmount?: Function,
  closeOnEscape?: boolean;
  closeOnDocumentClick?: boolean;
  clipped?: boolean;
}

type ModalComponent = React.FC<ModalProps> & {
  Background: React.FC<ModalBackgroundProps>;
  Content: React.FC<ModalContentProps>;
  Close: React.FC<ModalCloseProps>;
  Card: React.FC<ModalCardProps>;
}

const Modal: ModalComponent = (originalProps) => {
  const { className, active, closeFunction, onOpen, onClose, onMount, onUnmount, closeOnDocumentClick, closeOnEscape, ...props } = originalProps
  const classes = classNames(className, 'modal', checkEnabledProperties(originalProps, ['active']))
  return <div className={classes} {...props} />;
}

Modal.displayName = 'Modal';

Modal.Background  = ModalBackground;
Modal.Content     = ModalContent;
Modal.Close       = ModalClose;
Modal.Card        = ModalCard;

Modal.propTypes = {
  closeFunction: PropTypes.func,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  onMount: PropTypes.func,
  onUnmount: PropTypes.func,
  closeOnEscape: PropTypes.bool,
  closeOnDocumentClick: PropTypes.bool,
  clipped: PropTypes.bool
}

export default Modal;

export {Modal, ModalProps, ModalComponent}