import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {htmlElementFor, isEnabled, hierarchyClassFor } from "../helpers/util";
import {HIERARCHIES, HtmlElement} from "../helpers/constants";
import {COLUMN_SIZE_NUMBERS, ColumnSizeNumber, horizontalClassFor} from "../helpers/column_utils";

type TileProps = React.ComponentPropsWithoutRef<'div'> & {
  as?: HtmlElement;
  hierarchy?: any;
  horizontalSize?: ColumnSizeNumber;
  vertical?: boolean;
}

const Tile: React.FC<TileProps> = (originalProps) => {
  const { className, as, hierarchy, horizontalSize, vertical, ...props } = originalProps;
  const Element    = htmlElementFor(as, 'div');
  const classes = classNames(className, 'tile', {'is-vertical': isEnabled(originalProps, 'vertical')}, hierarchyClassFor(hierarchy), horizontalClassFor(horizontalSize));
  return <Element className={classes} {...props} />;
};

Tile.displayName = 'Tile';

Tile.propTypes = {
  className: PropTypes.string,
  hierarchy: PropTypes.oneOf(HIERARCHIES),
  horizontalSize: PropTypes.oneOf(COLUMN_SIZE_NUMBERS),
  vertical: PropTypes.bool
};

export default Tile;

export { Tile, TileProps }