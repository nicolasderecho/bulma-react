import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

type CardContentProps = React.ComponentPropsWithoutRef<'div'>;

const CardContent: React.FC<CardContentProps> = ({ className, ...props }) => {
  const classes = classNames(className, 'card-content');
  return <div className={classes} {...props} />;
};

CardContent.displayName = 'CardContent';

CardContent.propTypes = {
  className: PropTypes.string
};

export default CardContent;

export { CardContent, CardContentProps }