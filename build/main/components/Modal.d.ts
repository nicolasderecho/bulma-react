import React from 'react';
import { ModalBackgroundProps } from "./ModalBackground";
import { ModalContentProps } from "./ModalContent";
import { ModalCloseProps } from "./ModalClose";
import { ModalCardComponent } from "./ModalCard";
declare type ModalProps = React.ComponentPropsWithoutRef<'div'> & {
    active?: boolean;
    closeModal?: Function;
    onOpen?: Function;
    onClose?: Function;
    onMount?: Function;
    onUnmount?: Function;
    closeOnEscape?: boolean;
    clipped?: boolean;
    background?: boolean;
};
declare type ModalComponent = React.FC<ModalProps> & {
    Background: React.FC<ModalBackgroundProps>;
    Content: React.FC<ModalContentProps>;
    Close: React.FC<ModalCloseProps>;
    Card: ModalCardComponent;
};
declare const Modal: ModalComponent;
export default Modal;
export { Modal, ModalProps, ModalComponent };
