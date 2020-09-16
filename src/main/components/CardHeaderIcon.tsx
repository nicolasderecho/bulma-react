import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {htmlElementFor} from "../helpers/util";
import {HtmlElement} from "../helpers/constants";

type CardHeaderIconProps = React.ComponentPropsWithoutRef<'p' | 'span'> & {
  as?: HtmlElement;
}

const CardHeaderIcon: React.FC<CardHeaderIconProps> = ({ className, as, ...props }) => {
  const Element = htmlElementFor(as, 'span');
  const classes = classNames(className, 'card-header-icon');
  return <Element className={classes} {...props} />;
};

CardHeaderIcon.displayName = 'CardHeaderIcon';

CardHeaderIcon.propTypes = {
  className: PropTypes.string
};

export default CardHeaderIcon;

export { CardHeaderIcon, CardHeaderIconProps }