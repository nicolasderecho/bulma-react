import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

type CardImageProps = React.ComponentPropsWithoutRef<'div'>;

const CardImage: React.FC<CardImageProps> = ({ className, ...props }) => {
  const classes = classNames(className, 'card-image');
  return <div className={classes} {...props} />;
};

CardImage.displayName = 'CardImage';

CardImage.propTypes = {
  className: PropTypes.string
};

export default CardImage;

export { CardImage, CardImageProps }