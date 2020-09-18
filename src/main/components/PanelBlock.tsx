import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {htmlElementFor} from "../helpers/util";
import {HtmlElement} from "../helpers/constants";
import {checkEnabledProperties} from "../helpers/util";

type PanelBlockProps = React.ComponentPropsWithoutRef<'div'> & {
  as?: HtmlElement;
  active?: boolean
}

const PanelBlock: React.FC<PanelBlockProps> = (originalProps) => {
  const { className, as, active, ...props } = originalProps;
  const Element = htmlElementFor(as, 'div');
  const classes = classNames(className, 'panel-block', checkEnabledProperties(originalProps, ['active']));
  return <Element className={classes} {...props} />;
};

PanelBlock.displayName = 'PanelBlock';

PanelBlock.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool
};

export default PanelBlock;

export { PanelBlock, PanelBlockProps }