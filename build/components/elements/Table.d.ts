import React from 'react';
import { TableRowProps } from "./TableRow";
import { TableHeadProps } from "./TableHead";
import { TableFooterProps } from "./TableFooter";
import { TableBodyProps } from "./TableBody";
import { TableCellHeaderProps } from "./TableCellHeader";
import { TableContainerProps } from "./TableContainer";
declare type TableProps = {
    hoverable?: boolean;
    bordered?: boolean;
    striped?: boolean;
    narrow?: boolean;
    fullwidth?: boolean;
} & React.ComponentPropsWithoutRef<'table'>;
declare type TableComponent = {
    Row: React.FC<TableRowProps>;
    Head: React.FC<TableHeadProps>;
    Footer: React.FC<TableFooterProps>;
    Body: React.FC<TableBodyProps>;
    Cell: React.FC<TableCellHeaderProps>;
    CellHeader: React.FC<TableCellHeaderProps>;
    Container: React.FC<TableContainerProps>;
} & React.FC<TableProps>;
declare const Table: TableComponent;
export default Table;
export { Table, TableProps };
