import { ClassNameProp, ICheckPropertyOptions } from "../../../types/bulma-react";
import { Color, Size, ElementState, HtmlElement, SizePrefix, SizeNumber, ButtonPosition } from "./constants";
import React from "react";
export declare const isNil: <T>(value: T) => boolean;
export declare const isNotNil: <T>(value: T) => boolean;
export declare const isColor: (value: any) => value is Color;
export declare const isElementState: (value: any) => value is "hovered" | "focused" | "normal" | "active";
export declare const isSize: (value: any) => value is "normal" | "small" | "medium" | "large";
export declare const isSizeNumber: (value: any) => value is "1" | "2" | "3" | "4" | "5" | "6";
export declare const isIconPosition: (value: any) => value is "left" | "right";
export declare const isButtonPosition: (value: any) => value is "right" | "centered";
export declare const isEnabled: <T extends object>(props: T, key: string) => boolean;
export declare const isDefined: <X extends {}, Y extends string | number | symbol>(obj: X, prop: Y) => obj is X & Record<Y, unknown>;
export declare const buildSingularClassNameProp: <T extends object>(props: T, name: string) => ClassNameProp;
export declare const colorClassFor: (color: Color | string | undefined) => ClassNameProp;
export declare const sizeClassFor: (size: Size | string | undefined, prefix?: SizePrefix) => ClassNameProp;
export declare const elementStateClassFor: (state: ElementState | unknown) => {
    [x: string]: boolean;
};
export declare const textClassFor: (textClassName: Color | unknown) => {
    [x: string]: boolean;
};
export declare const iconPositionClassFor: (position: any) => {
    [x: string]: boolean;
};
export declare const htmlElementFor: (tag: unknown, defaultIfNil: unknown) => typeof React.Component;
export declare const isRenderedAs: <T extends object>(htmlElement: HtmlElement, props: T, propName: string) => boolean;
export declare const checkEnabledProperty: <T extends object>(props: T, property: string, { prefix }?: ICheckPropertyOptions) => {
    [x: string]: boolean;
};
export declare const checkEnabledProperties: <T extends object>(props: T, properties: string[], options?: ICheckPropertyOptions | undefined) => {};
export declare const addonsClassFor: <T extends object>(props: T, propsName?: string) => {};
export declare const sizeNumberClassFor: (sizeNumber: SizeNumber | unknown) => {
    [x: string]: boolean;
};
export declare const buttonPositionClassFor: (position: ButtonPosition | unknown) => {
    [x: string]: boolean;
};
