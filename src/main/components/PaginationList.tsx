import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

type PaginationListProps = React.ComponentPropsWithoutRef<'ul'>;

const PaginationList: React.FC<PaginationListProps> = ({ className, ...props }) => {
  const classes = classNames(className, 'pagination-list');
  return <ul className={classes} {...props} />;
};

PaginationList.displayName = 'PaginationList';

PaginationList.propTypes = {
  className: PropTypes.string
};

export default PaginationList;

export { PaginationList, PaginationListProps }