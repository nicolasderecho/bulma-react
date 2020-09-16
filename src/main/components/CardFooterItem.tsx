import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {htmlElementFor} from "../helpers/util";
import {HtmlElement} from "../helpers/constants";

type CardFooterItemProps = React.ComponentPropsWithoutRef<'p' | 'div'> & {
  as?: HtmlElement;
}

const CardFooterItem: React.FC<CardFooterItemProps> = ({ className, as, ...props }) => {
  const classes = classNames(className, 'card-footer-item');
  const Element = htmlElementFor(as, 'p');
  return <Element className={classes} {...props} />;
};

CardFooterItem.displayName = 'CardFooterItem';

CardFooterItem.propTypes = {
  className: PropTypes.string
};

export default CardFooterItem;

export { CardFooterItem, CardFooterItemProps }