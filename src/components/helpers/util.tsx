import {Color, ClassNameProp, Size, ICheckPropertyOptions, ElementState, HtmlElement} from "../../../types/bulma-react";
import {COLORS, ELEMENT_STATES, SIZES, HTML_CONVERSIONS} from "./constants";
import {dashCase} from "./generic_helpers";
import React from "react";

export const isNil= <T,>(value: T): boolean => value === null || value === undefined;
export const isNotNil = <T,>(value: T): boolean => !isNil(value);
export const isColor = (value: any): value is Color => COLORS.includes(value);
export const isElementState = (value: any): value is ElementState =>  ELEMENT_STATES.includes(value);
export const isSize = (value: any): value is Size => SIZES.includes(value);

export const isEnabled = <T extends object>(props: T, key: string): boolean => props.hasOwnProperty(key) && props[key] !== false && props[key] !== 'false';

export const buildSingularClassNameProp = <T extends object>(props: T, name: string): ClassNameProp => ({ [`is-${name}`]: isEnabled(props, name) });
//export const lightClassFor = <T extends object>(props: T): ClassNameProp => buildSingularClassNameProp(props, 'light');
//export const outlinedClassFor = <T extends object>(props: T): ClassNameProp => buildSingularClassNameProp(props, 'outlined');
export const colorClassFor = (color: Color | string | undefined): ClassNameProp => ({ [`is-${color}`]: isColor(color) })
export const sizeClassFor = (size: Size | string | undefined): ClassNameProp => ({ [`is-${size}`]: isSize(size) })
export const elementStateClassFor = (state: ElementState | unknown) => ({ [`is-${state}`]: isElementState(state) });

export const htmlElementFor = (tag: string, defaultIfNil: string | unknown): typeof React.Component => HTML_CONVERSIONS[tag] || tag || defaultIfNil || 'div';

export const isRenderedAs = <T extends object>(htmlElement: HtmlElement, props: T, propName: string): boolean => (props['as'] === htmlElement) && !!props[propName];

export const checkEnabledProperty = <T extends object>(props: T, property: string, { prefix = 'is' }: ICheckPropertyOptions= { prefix: 'is' }) => {
  const selector = !!prefix ? `${prefix}-${dashCase(property)}` : dashCase(property);
  return { [selector]: isEnabled(props, property) };
};

export const checkEnabledProperties = <T extends object>(props: T, properties: string[], options?: ICheckPropertyOptions) => {
  return properties.reduce((classes, property) => Object.assign({}, classes, checkEnabledProperty(props, property, options)), {});
};