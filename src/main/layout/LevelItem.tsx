import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {htmlElementFor, isEnabled} from "../helpers/util";
import {HtmlElement} from "../helpers/constants";

type LevelItemProps = React.ComponentPropsWithoutRef<'div'> & {
  as?: HtmlElement;
  centered?: boolean;
}

const LevelItem: React.FC<LevelItemProps> = (originalProps) => {
  const { className, as, centered, ...props } = originalProps;
  const Element    = htmlElementFor(as, 'div');
  const classes = classNames(className, 'level-item', { 'has-text-centered': isEnabled(originalProps, 'centered') });
  return <Element className={classes} {...props} />;
};

LevelItem.displayName = 'LevelItem';

LevelItem.propTypes = {
  className: PropTypes.string,
  centered: PropTypes.bool
};

export default LevelItem;

export {LevelItem, LevelItemProps}