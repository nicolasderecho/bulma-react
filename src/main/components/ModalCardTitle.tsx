import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

type ModalCardTitleProps = React.ComponentPropsWithoutRef<'p'>;

const ModalCardTitle: React.FC<ModalCardTitleProps> = ({ className, ...props }) => {
  const classes = classNames(className, 'modal-card-title');
  return <p className={classes} {...props} />;
};

ModalCardTitle.displayName = 'ModalCardTitle';

ModalCardTitle.propTypes = {
  className: PropTypes.string
};

export default ModalCardTitle;

export { ModalCardTitle, ModalCardTitleProps }