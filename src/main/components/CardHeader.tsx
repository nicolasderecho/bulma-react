import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CardHeaderTitle from "./CardHeaderTitle";
import CardHeaderIcon from "./CardHeaderIcon";
import {CardHeaderTitleProps} from "./CardHeaderTitle";
import {CardHeaderIconProps} from "./CardHeaderIcon";

type CardHeaderProps = React.ComponentPropsWithoutRef<'header'>

type CardHeaderComponent = React.FC<CardHeaderProps> & {
  Title: React.FC<CardHeaderTitleProps>;
  Icon: React.FC<CardHeaderIconProps>
}

const CardHeader: CardHeaderComponent = ({ className, ...props }) => {
  const classes = classNames(className, 'card-header');
  return <header className={classes} {...props} />;
};

CardHeader.displayName = 'CardHeader';

CardHeader.Title = CardHeaderTitle;
CardHeader.Icon  = CardHeaderIcon;

CardHeader.propTypes = {
  className: PropTypes.string
};

export default CardHeader;

export { CardHeader, CardHeaderProps, CardHeaderComponent }