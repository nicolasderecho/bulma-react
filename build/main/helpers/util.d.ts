import { ClassNameProp, ICheckPropertyOptions } from "../../../types/bulma-react";
import { Color, Size, ElementState, HtmlElement, SizePrefix, SizeNumber, ButtonPosition, Alignment, HeroSize, Hierarchy, Separator } from "./constants";
import React from "react";
export declare const isNil: <T>(value: T) => boolean;
export declare const isNotNil: <T>(value: T) => boolean;
export declare const isColor: (value: any) => value is Color;
export declare const isElementState: (value: any) => value is "normal" | "hovered" | "focused" | "active";
export declare const isSize: (value: any) => value is "small" | "medium" | "large" | "normal";
export declare const isHeroSize: (value: any) => value is HeroSize;
export declare const isSizeNumber: (value: any) => value is 6 | 2 | 3 | 1 | 4 | 5 | "1" | "2" | "3" | "4" | "5" | "6";
export declare const isIconPosition: (value: any) => value is "left" | "right";
export declare const isButtonPosition: (value: any) => value is "right" | "centered";
export declare const isEnabled: <T extends object>(props: T, key: string) => boolean;
export declare const isDefined: <X extends {}, Y extends string | number | symbol>(obj: X, prop: Y) => obj is X & Record<Y, unknown>;
export declare const isAlignment: (value: any) => value is "right" | "centered";
export declare const isState: (value: any) => value is "normal" | "hovered" | "focused" | "active";
export declare const isHierarchy: (value: any) => value is "ancestor" | "parent" | "child";
export declare const isSeparator: (value: any) => value is "arrow" | "bullet" | "dot" | "succeeds";
export declare const buildSingularClassNameProp: <T extends object>(props: T, name: string) => ClassNameProp;
export declare const colorClassFor: (color: Color | string | undefined) => ClassNameProp;
export declare const sizeClassFor: (size: Size | string | undefined, prefix?: SizePrefix) => ClassNameProp;
export declare const heroSizeClassFor: (size: HeroSize | string | undefined, prefix?: SizePrefix) => ClassNameProp;
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
export declare const separatorClassFor: (separator: Separator | unknown) => ClassNameProp;
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
export declare const alignmentClassFor: (alignment: Alignment | unknown, { prefix }?: ICheckPropertyOptions) => ClassNameProp;
export declare const groupedClassFor: <T extends object>(props: T, propsName?: string) => ClassNameProp;
export declare const stateClassFor: (state: ElementState | unknown) => ClassNameProp;
export declare const hierarchyClassFor: (hierarchy: Hierarchy | unknown) => ClassNameProp;
