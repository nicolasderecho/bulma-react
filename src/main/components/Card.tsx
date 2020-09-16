import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CardImage from "./CardImage";
import CardContent from "./CardContent";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";
import {CardImageProps} from "./CardImage";
import {CardContentProps} from "./CardContent";
import {CardFooterProps} from "./CardFooter";
import {CardHeaderProps} from "./CardHeader";

type CardProps = React.ComponentPropsWithoutRef<'div'>;

type CardComponent = React.FC<CardProps> & {
  Image: React.FC<CardImageProps>;
  Content: React.FC<CardContentProps>;
  Footer: React.FC<CardFooterProps>;
  Header: React.FC<CardHeaderProps>;
}

const Card: CardComponent = ({ className, ...props }) => {
  const classes = classNames(className, 'card');
  return <div className={classes} {...props} />;
};

Card.displayName = 'Card';

Card.Image   = CardImage;
Card.Content = CardContent;
Card.Footer  = CardFooter;
Card.Header  = CardHeader;

Card.propTypes = {
  className: PropTypes.string
};

export default Card;

export { Card, CardProps, CardComponent }