import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

type TableCellHeaderProps = React.ComponentPropsWithoutRef<"th">

const TableCellHeader: React.FC<TableCellHeaderProps> = ({ className, ...props }) => {
  return <th className={classNames(className)} {...props} />;
};

TableCellHeader.displayName = 'TableCellHeader';

TableCellHeader.propTypes = {
  className: PropTypes.string
};

export default TableCellHeader;

export {TableCellHeader, TableCellHeaderProps}