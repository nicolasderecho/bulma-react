import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {sizeClassFor} from "../helpers/util";
import {SIZES, Size} from "../helpers/constants";

type ModalCloseProps = React.ComponentPropsWithoutRef<'button'> & {
  size?: Size;
}

const ModalClose: React.FC<ModalCloseProps> = ({ className, size, ...props }) => {
  const classes = classNames(className, 'modal-close', sizeClassFor(size));
  return <button className={classes} {...props} aria-label={'close'} />;
};

ModalClose.displayName = 'ModalClose';

ModalClose.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(SIZES)
};

export default ModalClose;

export { ModalClose, ModalCloseProps }