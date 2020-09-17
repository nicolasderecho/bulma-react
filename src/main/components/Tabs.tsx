import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { sizeClassFor, alignmentClassFor } from "../helpers/util";
import { ALIGNMENTS, SIZES } from "../helpers/constants";
import {TabsItem, TabsItemProps} from "./TabsItem";
import {checkEnabledProperties} from "../helpers/util";
import {Alignment, Size} from "../helpers/constants";

type TabsProps = React.ComponentPropsWithoutRef<'div'> & {
  size?: Size;
  alignment?: Alignment;
  ulClassName?: string | object | undefined;
  boxed?: boolean;
  rounded?: boolean;
  fullwidth?: boolean;
  toggle?: boolean;
  toggleRounded?: boolean;
}

type TabsComponent = React.FC<TabsProps> & {
  Item: React.FC<TabsItemProps>;
}

const Tabs: TabsComponent = (originalProps) => {
  const { className, size, alignment, ulClassName, children, boxed, rounded, fullwidth, toggle, toggleRounded, ...props } = originalProps;
  const classes = classNames(className, 'tabs', sizeClassFor(size), alignmentClassFor(alignment), checkEnabledProperties(originalProps, ['boxed', 'rounded', 'fullwidth', 'toggle', 'toggleRounded']));
  const ulClasses = classNames(ulClassName);
  return <div className={classes} {...props}><ul className={ulClasses}>{children}</ul></div>;
};

Tabs.displayName = 'Tabs';

Tabs.Item = TabsItem;

Tabs.propTypes = {
  className: PropTypes.string,
  ulClassName: PropTypes.string,
  alignment: PropTypes.oneOf(ALIGNMENTS),
  size: PropTypes.oneOf(SIZES),
  boxed: PropTypes.bool,
  rounded: PropTypes.bool,
  fullwidth: PropTypes.bool,
  toggle: PropTypes.bool,
  toggleRounded: PropTypes.bool
};

export default Tabs;

export { Tabs, TabsComponent, TabsProps }