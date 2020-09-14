import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {htmlElementFor} from "../helpers/util";
import {HtmlElement} from "../helpers/constants";

type LevelRightProps = React.ComponentPropsWithoutRef<'div'> & {
  as?: HtmlElement;
}

const LevelRight: React.FC<LevelRightProps> = ({ className, as, ...props }) => {
  const Element    = htmlElementFor(as, 'div');
  const classes = classNames(className, 'level-right');
  return <Element className={classes} {...props} />;
};

LevelRight.displayName = 'LevelRight';

LevelRight.propTypes = {
  className: PropTypes.string
};

export default LevelRight;

export {LevelRight, LevelRightProps}