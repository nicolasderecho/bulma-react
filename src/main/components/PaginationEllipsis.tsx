import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

type PaginationEllipsisProps = React.ComponentPropsWithoutRef<'li'> & {
  text?: string;
}

const PaginationEllipsis: React.FC<PaginationEllipsisProps> = ({ className, text, ...props }) => {
  const ellipsisText = text || '...';
  const classes = classNames(className, 'pagination-ellipsis');
  return <li><span className={classes} {...props}>{ellipsisText}</span></li>;
};

PaginationEllipsis.displayName = 'PaginationEllipsis';

PaginationEllipsis.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string
};

export default PaginationEllipsis;

export { PaginationEllipsis, PaginationEllipsisProps }