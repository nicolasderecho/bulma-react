import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {htmlElementFor} from "../helpers/util";
import {HtmlElement} from "../helpers/constants";

type TableContainerProps = {
  as?: HtmlElement;
} & React.ComponentPropsWithoutRef<"div">

const TableContainer: React.FC<TableContainerProps> = ({ className, as, ...props }) => {
  const Element = htmlElementFor(as, 'div');
  const classes = classNames(className, 'table-container');
  return <Element className={classes} {...props} />;
};

TableContainer.displayName = 'TableContainer';

TableContainer.propTypes = {
  className: PropTypes.string
};

export default TableContainer;

export { TableContainer, TableContainerProps }