import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

type PaginationPreviousProps = React.ComponentPropsWithoutRef<'a'>;

const PaginationPrevious: React.FC<PaginationPreviousProps> = ({ className, ...props }) => {
  const classes = classNames(className, 'pagination-previous');
  // eslint-disable-next-line
  return <a className={classes} {...props} />;
};

PaginationPrevious.displayName = 'PaginationPrevious';

PaginationPrevious.propTypes = {
  className: PropTypes.string
};

export default PaginationPrevious;

export { PaginationPrevious, PaginationPreviousProps }