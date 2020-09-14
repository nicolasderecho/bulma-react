import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {htmlElementFor} from "../helpers/util";
import {HtmlElement} from "../helpers/constants";

type LevelLeftProps = React.ComponentPropsWithoutRef<'div'> & {
  as?: HtmlElement;
}

const LevelLeft: React.FC<LevelLeftProps> = ({ className, as, ...props }) => {
  const Element    = htmlElementFor(as, 'div');
  const classes = classNames(className, 'level-left');
  return <Element className={classes} {...props} />;
};

LevelLeft.displayName = 'LevelLeft';

LevelLeft.propTypes = {
  className: PropTypes.string
};

export default LevelLeft;

export { LevelLeft, LevelLeftProps }