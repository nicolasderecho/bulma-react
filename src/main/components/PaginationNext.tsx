import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

type PaginationNextProps = React.ComponentPropsWithoutRef<'a'>;

const PaginationNext: React.FC<PaginationNextProps> = ({ className, ...props }) => {
  const classes = classNames(className, 'pagination-next');
  // eslint-disable-next-line
  return <a className={classes} {...props} />;
};

PaginationNext.displayName = 'PaginationNext';

PaginationNext.propTypes = {
  className: PropTypes.string
};

export default PaginationNext;

export { PaginationNext, PaginationNextProps }