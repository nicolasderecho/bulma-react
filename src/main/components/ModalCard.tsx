import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {ModalCardHead, ModalCardHeadProps} from "./ModalCardHead";
import {ModalCardTitle, ModalCardTitleProps} from "./ModalCardTitle";
import {ModalCardBody, ModalCardBodyProps} from "./ModalCardBody";
import {ModalCardFoot, ModalCardFootProps} from "./ModalCardFoot";
import {OutsideAlerter} from "../helpers/react";

type ModalCardProps = React.ComponentPropsWithoutRef<'div'> & {
  closeOnClickOutside?: boolean;
};

type ModalCardComponent = React.FC<ModalCardProps> & {
  Head: React.FC<ModalCardHeadProps>;
  Title: React.FC<ModalCardTitleProps>;
  Body: React.FC<ModalCardBodyProps>;
  Foot: React.FC<ModalCardFootProps>;
}

const ModalCard: ModalCardComponent = ({ className, closeOnClickOutside, ...props }) => {
  const classes = classNames(className, 'modal-card');
  return <OutsideAlerter closeOnClickOutside={closeOnClickOutside}>
    <div className={classes} {...props} />;
  </OutsideAlerter>
};

ModalCard.displayName = 'ModalCard';

ModalCard.Head  = ModalCardHead;
ModalCard.Title = ModalCardTitle;
ModalCard.Body  = ModalCardBody;
ModalCard.Foot  = ModalCardFoot;

ModalCard.propTypes = {
  className: PropTypes.string,
  closeOnClickOutside: PropTypes.bool
};

export default ModalCard;

export {ModalCard, ModalCardProps, ModalCardComponent}