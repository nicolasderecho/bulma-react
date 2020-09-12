import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {colorClassFor} from "../helpers/util";
import {Color, COLORS} from "../helpers/constants";

type TableCellProps = {
  color?: Color;
} & React.ComponentPropsWithoutRef<'td'>;

const TableCell: React.FC<TableCellProps> = ({ className, color, ...props }) => {
  const classes = classNames(className, colorClassFor(color));
  return <td className={classes} {...props} />;
};

TableCell.displayName = 'TableCell';

TableCell.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(COLORS),
};

export default TableCell;

export { TableCell, TableCellProps }