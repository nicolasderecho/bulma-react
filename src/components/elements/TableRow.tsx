import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TableCell, {TableCellProps} from "./TableCell";
import TableCellHeader, {TableCellHeaderProps} from "./TableCellHeader";
import {isEnabled} from "../helpers/util";

type TableRowProps = {
  selected?: boolean;
} & React.ComponentPropsWithoutRef<'tr'>;

interface TableRowComponent extends React.FC<TableRowProps> {
  Cell: React.FC<TableCellProps>;
  CellHeader: React.FC<TableCellHeaderProps>;
}

const TableRow: TableRowComponent = ({ ...originalProps }) => {
  const { className, ...props } = originalProps;
  const classes = classNames(className, {'is-selected': isEnabled(originalProps, 'selected')});
  return <tr className={classes} {...props} />;
};

TableRow.displayName = 'TableRow';

TableRow.propTypes = {
  className: PropTypes.string,
  selected: PropTypes.bool
};

TableRow.Cell         = TableCell;
TableRow.CellHeader   = TableCellHeader;

export default TableRow;

export { TableRow, TableRowProps }