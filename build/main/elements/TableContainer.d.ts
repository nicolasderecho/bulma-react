import React from 'react';
import { HtmlElement } from "../helpers/constants";
declare type TableContainerProps = {
    as?: HtmlElement;
} & React.ComponentPropsWithoutRef<"div">;
declare const TableContainer: React.FC<TableContainerProps>;
export default TableContainer;
export { TableContainer, TableContainerProps };
