import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {checkEnabledProperties, htmlElementFor} from "../helpers/util";
import {HtmlElement} from "../helpers/constants";


type CardHeaderTitleProps = React.ComponentPropsWithoutRef<'p' | 'div'> & {
  as?: HtmlElement;
  centered?: boolean;
}

const CardHeaderTitle: React.FC<CardHeaderTitleProps> = (originalProps) => {
  const { className, as, centered, ...props } = originalProps;
  const Element = htmlElementFor(as, 'p');
  const classes = classNames(className, 'card-header-title', checkEnabledProperties(originalProps, ['centered']));
  return <Element className={classes} {...props} />;
};

CardHeaderTitle.displayName = 'CardHeaderTitle';

CardHeaderTitle.propTypes = {
  className: PropTypes.string,
  centered: PropTypes.bool
};

export default CardHeaderTitle;

export { CardHeaderTitle, CardHeaderTitleProps }