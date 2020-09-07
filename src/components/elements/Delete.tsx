import * as React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {htmlElementFor, sizeClassFor} from "../helpers/util";
import {SIZES, Size, HtmlElement} from "../helpers/constants";

type DeleteProps = {
  size?: Size;
  as?: HtmlElement;
} & React.ComponentPropsWithoutRef<HtmlElement>

const Delete: React.FC<DeleteProps> = ({ className, as, size,...props }) => {
  const Element = htmlElementFor(as, 'a');
  const classes = classNames(className, 'delete', sizeClassFor(size));
  return <Element className={classes} {...props} />;
};

Delete.displayName = 'Delete';

Delete.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(SIZES)
};

export default Delete;

export {Delete, DeleteProps}