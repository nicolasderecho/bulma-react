import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

type TableFooterProps = React.ComponentPropsWithoutRef<'tfoot'>;

const TableFooter: React.FC<TableFooterProps> = ({ className, ...props }) => {
  return <tfoot className={classNames(className)} {...props} />;
};

TableFooter.displayName = 'TableFooter';

TableFooter.propTypes = {
  className: PropTypes.string
};

export default TableFooter;

export { TableFooter, TableFooterProps }