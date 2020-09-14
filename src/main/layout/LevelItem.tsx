import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {htmlElementFor} from "../helpers/util";
import {HtmlElement} from "../helpers/constants";

type LevelItemProps = React.ComponentPropsWithoutRef<'div'> & {
  as?: HtmlElement;
}

const LevelItem: React.FC<LevelItemProps> = ({ className, as, ...props }) => {
  const Element    = htmlElementFor(as, 'div');
  const classes = classNames(className, 'level-item');
  return <Element className={classes} {...props} />;
};

LevelItem.displayName = 'LevelItem';

LevelItem.propTypes = {
  className: PropTypes.string
};

export default LevelItem;

export {LevelItem, LevelItemProps}