import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

type TableBodyProps = React.ComponentPropsWithoutRef<'tbody'>;

const TableBody: React.FC<TableBodyProps> = ({ className, ...props }) => {
  return <tbody className={classNames(className)} {...props} />;
};

TableBody.displayName = 'TableBody';

TableBody.propTypes = {
  className: PropTypes.string
};

export default TableBody;

export { TableBody, TableBodyProps }