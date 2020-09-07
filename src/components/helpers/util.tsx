import {ClassNameProp, ICheckPropertyOptions} from "../../../types/bulma-react";
import {
  COLORS,
  ELEMENT_STATES,
  SIZES,
  HTML_CONVERSIONS,
  ICON_POSITIONS,
  Color,
  Size,
  ElementState,
  HtmlElement,
  SizePrefix, SizeNumber, SIZE_NUMBERS
} from "./constants";
import {dashCase} from "./generic_helpers";
import React from "react";

export const isNil= <T,>(value: T): boolean => value === null || value === undefined;
export const isNotNil = <T,>(value: T): boolean => !isNil(value);
export const isColor = (value: any): value is Color => COLORS.includes(value);
export const isElementState = (value: any): value is ElementState =>  ELEMENT_STATES.includes(value);
export const isSize = (value: any): value is Size => SIZES.includes(value);
export const isSizeNumber = (value: any): value is SizeNumber => SIZE_NUMBERS.includes(value);
export const isIconPosition = (value: any) => ICON_POSITIONS.includes(value);
export const isEnabled = <T extends object>(props: T, key: string): boolean => props.hasOwnProperty(key) && props[key] !== false && props[key] !== 'false';

export const buildSingularClassNameProp = <T extends object>(props: T, name: string): ClassNameProp => ({ [`is-${name}`]: isEnabled(props, name) });
//export const lightClassFor = <T extends object>(props: T): ClassNameProp => buildSingularClassNameProp(props, 'light');
//export const outlinedClassFor = <T extends object>(props: T): ClassNameProp => buildSingularClassNameProp(props, 'outlined');
export const colorClassFor = (color: Color | string | undefined): ClassNameProp => ({ [`is-${color}`]: isColor(color) })
export const sizeClassFor = (size: Size | string | undefined, prefix: SizePrefix = 'is'): ClassNameProp => ({ [`${prefix}-${size}`]: isSize(size) })
export const elementStateClassFor = (state: ElementState | unknown) => ({ [`is-${state}`]: isElementState(state) });
export const textClassFor = (textClassName: Color | unknown) => ({ [`has-text-${textClassName}`]: isColor(textClassName) });
export const iconPositionClassFor = (position: any) => ({ [`is-${position}`]: isIconPosition(position) });
export const htmlElementFor = (tag: unknown, defaultIfNil: unknown): typeof React.Component => HTML_CONVERSIONS[tag as string] || tag || defaultIfNil || 'div';

export const isRenderedAs = <T extends object>(htmlElement: HtmlElement, props: T, propName: string): boolean => (props['as'] === htmlElement) && !!props[propName];

export const checkEnabledProperty = <T extends object>(props: T, property: string, { prefix = 'is' }: ICheckPropertyOptions= { prefix: 'is' }) => {
  const selector = !!prefix ? `${prefix}-${dashCase(property)}` : dashCase(property);
  return { [selector]: isEnabled(props, property) };
};

export const checkEnabledProperties = <T extends object>(props: T, properties: string[], options?: ICheckPropertyOptions) => {
  return properties.reduce((classes, property) => Object.assign({}, classes, checkEnabledProperty(props, property, options)), {});
};

export const addonsClassFor = <T extends object>(props: T, propsName = 'addons') => checkEnabledProperties(props, [propsName], {prefix: 'has'});

export const sizeNumberClassFor = (sizeNumber: SizeNumber | unknown) => ({ [`is-${sizeNumber}`]: !!sizeNumber && isSizeNumber(sizeNumber) });