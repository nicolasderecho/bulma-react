import React from 'react';
import { TableCellProps } from "./TableCell";
import { TableCellHeaderProps } from "./TableCellHeader";
declare type TableRowProps = {
    selected?: boolean;
} & React.ComponentPropsWithoutRef<'tr'>;
interface TableRowComponent extends React.FC<TableRowProps> {
    Cell: React.FC<TableCellProps>;
    CellHeader: React.FC<TableCellHeaderProps>;
}
declare const TableRow: TableRowComponent;
export default TableRow;
export { TableRow, TableRowProps };
