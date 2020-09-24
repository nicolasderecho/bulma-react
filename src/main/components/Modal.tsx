import React, {useCallback, useEffect} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {checkEnabledProperties} from "../helpers/util";
import { ModalBackground, ModalBackgroundProps } from "./ModalBackground";
import {ModalContent, ModalContentProps} from "./ModalContent";
import { ModalClose,ModalCloseProps } from "./ModalClose";
import {ModalCard, ModalCardComponent} from "./ModalCard";
import {addClipped, OutsideClickProvider, removeClipped, usePrevious} from "../helpers/react";

const isEscape = (event: KeyboardEvent): boolean => {
  const key = event.key || event.keyCode;
  return key === 'Escape' || key === 'Esc' || key === 27;
}

type ModalProps = React.ComponentPropsWithoutRef<'div'> & {
  active?: boolean;
  closeModal?: Function,
  onOpen?: Function,
  onClose?: Function,
  onMount?: Function,
  onUnmount?: Function,
  closeOnEscape?: boolean;
  clipped?: boolean;
  background?: boolean;
}

type ModalComponent = React.FC<ModalProps> & {
  Background: React.FC<ModalBackgroundProps>;
  Content: React.FC<ModalContentProps>;
  Close: React.FC<ModalCloseProps>;
  Card: ModalCardComponent;
}

const Modal: ModalComponent = (originalProps) => {
  const { className, active, closeModal = Function.prototype, onOpen = Function.prototype, onClose = Function.prototype, onMount = Function.prototype, onUnmount = Function.prototype, closeOnEscape = false, children, background, clipped, ...props } = originalProps
  const previousActive = usePrevious(active);
  const isOpening = active === true && previousActive !== true;
  const isClosing = active !== true && previousActive === true;
  const onKeyDown = useCallback( (event:KeyboardEvent) => {
    if( isEscape(event) && closeOnEscape && active) {
      closeModal();
    }
  }, [closeOnEscape, active]);
  const onOutsideClick = useCallback(() => closeModal(), [closeModal]);

  useEffect(() => {
    onMount();
    return () => { onUnmount(); }
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    }
  })

  if(isOpening) {
    onOpen();
    if(clipped) { addClipped(); }
  }

  if(isClosing) {
    onClose();
    if(clipped) { removeClipped(); }
  }

  const classes = classNames(className, 'modal', checkEnabledProperties(originalProps, ['active']))
  return <div className={classes} {...props}>
    <OutsideClickProvider value={{onOutsideClick: onOutsideClick, isActive: !!active}}>
      { background === false ? null :  <ModalBackground /> }
      {children}
    </OutsideClickProvider>
  </div>;
}

Modal.displayName = 'Modal';

Modal.Background  = ModalBackground;
Modal.Content     = ModalContent;
Modal.Close       = ModalClose;
Modal.Card        = ModalCard;

Modal.propTypes = {
  closeModal: PropTypes.func,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  onMount: PropTypes.func,
  onUnmount: PropTypes.func,
  closeOnEscape: PropTypes.bool,
  clipped: PropTypes.bool,
  background: PropTypes.bool
}

export default Modal;

export {Modal, ModalProps, ModalComponent}