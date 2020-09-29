import React from 'react';
import { Color } from "../helpers/constants";
declare type TableCellProps = {
    color?: Color;
} & React.ComponentPropsWithoutRef<'td'>;
declare const TableCell: React.FC<TableCellProps>;
export default TableCell;
export { TableCell, TableCellProps };
