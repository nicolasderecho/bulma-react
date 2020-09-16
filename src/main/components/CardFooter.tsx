import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CardFooterItem from "./CardFooterItem";
import {CardFooterItemProps} from "./CardFooterItem";

type CardFooterProps = React.ComponentPropsWithoutRef<'footer'>;

type CardFooterComponent = React.FC<CardFooterProps> & {
  Item: React.FC<CardFooterItemProps>
}

const CardFooter: CardFooterComponent = ({ className, ...props }) => {
  const classes = classNames(className, 'card-footer');
  return <footer className={classes} {...props} />;
};

CardFooter.displayName = 'CardFooter';

CardFooter.Item = CardFooterItem;

CardFooter.propTypes = {
  className: PropTypes.string
};

export default CardFooter;

export { CardFooter, CardFooterProps, CardFooterComponent }