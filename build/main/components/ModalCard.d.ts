import React from 'react';
import { ModalCardHeadProps } from "./ModalCardHead";
import { ModalCardTitleProps } from "./ModalCardTitle";
import { ModalCardBodyProps } from "./ModalCardBody";
import { ModalCardFootProps } from "./ModalCardFoot";
declare type ModalCardProps = React.ComponentPropsWithoutRef<'div'> & {
    closeOnClickOutside?: boolean;
};
declare type ModalCardComponent = React.FC<ModalCardProps> & {
    Head: React.FC<ModalCardHeadProps>;
    Title: React.FC<ModalCardTitleProps>;
    Body: React.FC<ModalCardBodyProps>;
    Foot: React.FC<ModalCardFootProps>;
};
declare const ModalCard: ModalCardComponent;
export default ModalCard;
export { ModalCard, ModalCardProps, ModalCardComponent };
