import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {htmlElementFor, isEnabled} from "../helpers/util";
import {HtmlElement} from "../helpers/constants";
import LevelLeft, {LevelLeftProps} from "./LevelLeft";
import LevelRight, {LevelRightProps} from "./LevelRight";
import LevelItem, {LevelItemProps} from "./LevelItem";

type LevelProps = React.ComponentPropsWithoutRef<'nav'> & {
  as?: HtmlElement;
  mobile?: boolean;
}

type LevelComponent = React.FC<LevelProps> & {
  Left: React.FC<LevelLeftProps>,
  Right: React.FC<LevelRightProps>,
  Item: React.FC<LevelItemProps>,
}

const Level: LevelComponent = (originalProps) => {
  const { className, as, mobile,...props } = originalProps;
  const Element    = htmlElementFor(as, 'nav');
  const classes = classNames(className, 'level', { 'is-mobile': isEnabled(originalProps, 'mobile') });
  return <Element className={classes} {...props} />;
};

Level.displayName = 'Level';

Level.propTypes = {
  className: PropTypes.string,
  mobile: PropTypes.bool
};

Level.Left  = LevelLeft;
Level.Right = LevelRight;
Level.Item  = LevelItem;

export default Level;

export { Level, LevelProps, LevelComponent }