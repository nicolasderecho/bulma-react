import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { positionClassFor, isColor, checkEnabledProperties } from "../helpers/util";
import {POSITIONS, COLORS, Color, ElementPosition} from "../helpers/constants";

type TooltipProps = React.ComponentPropsWithoutRef<'div'> & {
  text: string;
  position?: ElementPosition;
  positionMobile?: ElementPosition;
  positionTablet?: ElementPosition;
  positionTouch?: ElementPosition;
  positionDesktop?: ElementPosition;
  positionWidescreen?: ElementPosition;
  positionFullhd?: ElementPosition;
  color?: Color;
  active?: boolean;
  multiline?: boolean;
  positionMobileOnly?: ElementPosition;
  positionTabletOnly?: ElementPosition;
  positionTouchOnly?: ElementPosition;
  positionDesktopOnly?: ElementPosition;
  positionWidescreenOnly?: ElementPosition;
  positionFullhdOnly?: ElementPosition;
}

const Tooltip: React.FC<TooltipProps> = (originalProps) => {
  const {className, text, color, position, positionMobile, positionTablet, positionTouch, positionDesktop, positionWidescreen, positionFullhd, positionMobileOnly, positionTabletOnly, positionTouchOnly, positionDesktopOnly, positionWidescreenOnly, positionFullhdOnly, children, active, multiline, ...props} = originalProps
  const classes = classNames(className, 'tooltip', positionClassFor(position), positionClassFor(positionMobile, {device: 'mobile'}), positionClassFor(positionTablet, {device: 'tablet'}), positionClassFor(positionTouch, {device: 'touch'}), positionClassFor(positionDesktop, {device: 'desktop'}), positionClassFor(positionWidescreen, {device: 'widescreen'}), positionClassFor(positionFullhd, {device: 'fullhd'}), positionClassFor(positionMobileOnly, {device: 'mobile', suffix: 'only'}), positionClassFor(positionTabletOnly, {device: 'tablet', suffix: 'only'}), positionClassFor(positionTouchOnly, {device: 'touch', suffix: 'only'}), positionClassFor(positionDesktopOnly, {device: 'desktop', suffix: 'only'}), positionClassFor(positionWidescreenOnly, {device: 'widescreen', suffix: 'only'}), positionClassFor(positionFullhdOnly, {device: 'fullhd', suffix: 'only'}) , checkEnabledProperties(originalProps, ['active', 'multiline'], {prefix: 'is-tooltip'}), {[`is-tooltip-${color}`]: isColor(color)});
  return <div className={classes} {...props} data-tooltip={text}>
    {children}
  </div>;
};

Tooltip.displayName = 'Tooltip';

Tooltip.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  position: PropTypes.oneOf(POSITIONS),
  positionMobile: PropTypes.oneOf(POSITIONS),
  positionTablet: PropTypes.oneOf(POSITIONS),
  positionTouch: PropTypes.oneOf(POSITIONS),
  positionDesktop: PropTypes.oneOf(POSITIONS),
  positionWidescreen: PropTypes.oneOf(POSITIONS),
  positionFullhd: PropTypes.oneOf(POSITIONS),
  color: PropTypes.oneOf(COLORS),
  active: PropTypes.bool,
  multiline: PropTypes.bool,
  positionMobileOnly: PropTypes.oneOf(POSITIONS),
  positionTabletOnly: PropTypes.oneOf(POSITIONS),
  positionTouchOnly: PropTypes.oneOf(POSITIONS),
  positionDesktopOnly: PropTypes.oneOf(POSITIONS),
  positionWidescreenOnly: PropTypes.oneOf(POSITIONS),
  positionFullhdOnly: PropTypes.oneOf(POSITIONS)
};

export default Tooltip;

export { Tooltip, TooltipProps }