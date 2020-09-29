import React from 'react';
import { HtmlElement } from "../helpers/constants";
import { ColumnSizeNumber } from "../helpers/column_utils";
declare type TileProps = React.ComponentPropsWithoutRef<'div'> & {
    as?: HtmlElement;
    hierarchy?: any;
    horizontalSize?: ColumnSizeNumber;
    vertical?: boolean;
};
declare const Tile: React.FC<TileProps>;
export default Tile;
export { Tile, TileProps };
