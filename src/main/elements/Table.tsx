import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {checkEnabledProperties} from "../helpers/util";
import TableRow, {TableRowProps} from "./TableRow";
import TableHead, {TableHeadProps} from "./TableHead";
import TableFooter, {TableFooterProps} from "./TableFooter";
import TableBody, {TableBodyProps} from "./TableBody";
import TableCell from "./TableCell";
import TableCellHeader, {TableCellHeaderProps} from "./TableCellHeader";
import TableContainer, {TableContainerProps} from "./TableContainer";

type TableProps = {
  hoverable?: boolean;
  bordered?: boolean;
  striped?: boolean;
  narrow?: boolean;
  fullwidth?: boolean;
} & React.ComponentPropsWithoutRef<'table'>;

type TableComponent = {
  Row: React.FC<TableRowProps>;
  Head: React.FC<TableHeadProps>;
  Footer: React.FC<TableFooterProps>;
  Body: React.FC<TableBodyProps>;
  Cell: React.FC<TableCellHeaderProps>;
  CellHeader: React.FC<TableCellHeaderProps>;
  Container: React.FC<TableContainerProps>;
} & React.FC<TableProps>;

const Table: TableComponent = ({ ...originalProps }) => {
  const { className, hoverable, bordered, striped, narrow, fullwidth, ...props } = originalProps;
  const classes = classNames(className, 'table', checkEnabledProperties(originalProps, ['hoverable', 'bordered', 'striped', 'narrow', 'fullwidth']));
  return <table className={classes} {...props} />;
};

Table.displayName = 'Table';

Table.propTypes = {
  className: PropTypes.string
};

Table.Row         = TableRow;
Table.Head        = TableHead;
Table.Footer      = TableFooter;
Table.Body        = TableBody;
Table.Cell        = TableCell;
Table.CellHeader  = TableCellHeader;
Table.Container   = TableContainer;

export default Table;

export { Table, TableProps }