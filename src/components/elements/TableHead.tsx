import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

type TableHeadProps = React.ComponentPropsWithoutRef<'thead'>;

const TableHead: React.FC<TableHeadProps> = ({ className, ...props }) => {
  return <thead className={classNames(className)} {...props} />;
};

TableHead.displayName = 'TableHead';

TableHead.propTypes = {
  className: PropTypes.string
};

export default TableHead;

export { TableHead, TableHeadProps }