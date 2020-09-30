import React from 'react';
import { ColumnProps } from "./Column";
import { HtmlElement } from '../helpers/constants';
import { Device, GapSize } from "../helpers/column_utils";
declare type ColumnsProps = React.ComponentPropsWithoutRef<'div' | 'span'> & {
    gapless?: boolean;
    multiline?: boolean;
    centered?: boolean;
    vcentered?: boolean;
    from?: Device;
    as?: HtmlElement;
    gap?: GapSize;
    gapMobile?: GapSize;
    gapTablet?: GapSize;
    gapTouch?: GapSize;
    gapDesktop?: GapSize;
    gapWidescreen?: GapSize;
    gapFullhd?: GapSize;
};
declare type ColumnsComponent = React.FC<ColumnsProps> & {
    Column: React.FC<ColumnProps>;
};
declare const Columns: ColumnsComponent;
export default Columns;
export { Columns, ColumnsProps };
