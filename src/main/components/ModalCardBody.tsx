import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

type ModalCardBodyProps = React.ComponentPropsWithoutRef<'section'>;

const ModalCardBody: React.FC<ModalCardBodyProps> = ({ className, ...props }) => {
  const classes = classNames(className, 'modal-card-body');
  return <section className={classes} {...props} />;
};

ModalCardBody.displayName = 'ModalCardBody';

ModalCardBody.propTypes = {
  className: PropTypes.string
};

export default ModalCardBody;

export { ModalCardBody, ModalCardBodyProps }