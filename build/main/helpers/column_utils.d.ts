import { ClassNameProp, ElementType } from "../../../types/bulma-react";
export declare const ONE_THIRD_ALIAS: "1/3";
export declare const TWO_THIRDS_ALIAS: "2/3";
export declare const ONE_QUARTER_ALIAS: "1/4";
export declare const HALF_ALIAS: "1/2";
export declare const THREE_QUARTERS_ALIAS: "3/4";
export declare const ONE_FIFTH_ALIAS: "1/5";
export declare const TWO_FIFTHS_ALIAS: "2/5";
export declare const THREE_FIFTHS_ALIAS: "3/5";
export declare const FOURT_FIFTHS_ALIAS: "4/5";
export declare const THREE_QUARTERS: "three-quarters";
export declare const TWO_THIRDS: "two-thirds";
export declare const HALF: "half";
export declare const ONE_THIRD: "one-third";
export declare const ONE_QUARTER: "one-quarter";
export declare const FULL: "full";
export declare const FOURT_FIFTHS: "four-fifths";
export declare const THREE_FIFTHS: "three-fifths";
export declare const TWO_FIFTHS: "two-fifths";
export declare const ONE_FIFTH: "one-fifth";
export declare const COLUMN_SIZE_NUMBERS: readonly ["1", 1, "2", 2, "3", 3, "4", 4, "5", 5, "6", 6, "7", 7, "8", 8, "9", 9, "10", 10, "11", 11, "12", 12];
export declare const ORIGINAL_COLUMN_SIZES: readonly ["1", 1, "2", 2, "3", 3, "4", 4, "5", 5, "6", 6, "7", 7, "8", 8, "9", 9, "10", 10, "11", 11, "12", 12, "three-quarters", "two-thirds", "half", "one-third", "one-quarter", "full", "four-fifths", "three-fifths", "two-fifths", "one-fifth"];
export declare const COLUMN_SIZES_ALIASES: readonly ["1/3", "2/3", "1/4", "1/2", "3/4", "1/5", "2/5", "3/5", "4/5"];
export declare const COLUMN_SIZES: readonly ["1", 1, "2", 2, "3", 3, "4", 4, "5", 5, "6", 6, "7", 7, "8", 8, "9", 9, "10", 10, "11", 11, "12", 12, "three-quarters", "two-thirds", "half", "one-third", "one-quarter", "full", "four-fifths", "three-fifths", "two-fifths", "one-fifth", "1/3", "2/3", "1/4", "1/2", "3/4", "1/5", "2/5", "3/5", "4/5"];
export declare type ColumnSize = typeof COLUMN_SIZES[number];
export declare const MOBILE: "mobile";
export declare const TABLET: "tablet";
export declare const TOUCH: "touch";
export declare const DESKTOP: "desktop";
export declare const WIDESCREEN: "widescreen";
export declare const FULLHD: "fullhd";
export declare const DEVICES: readonly ["mobile", "tablet", "touch", "desktop", "widescreen", "fullhd"];
export declare type Device = ElementType<typeof DEVICES>;
export declare const GAP_SIZES: readonly [0, "0", 1, "1", 2, "2", 3, "3", 4, "4", 5, "5", 6, "6", 7, "7", 8, "8"];
export declare type GapSize = ElementType<typeof GAP_SIZES>;
export declare const COLUMN_SIZES_ALIASES_HASH: {
    readonly "1/3": "one-third";
    readonly "2/3": "two-thirds";
    readonly "1/4": "one-quarter";
    readonly "1/2": "half";
    readonly "3/4": "three-quarters";
    readonly "2/5": "two-fifths";
    readonly "3/5": "three-fifths";
    readonly "4/5": "four-fifths";
    readonly "1/5": "one-fifth";
};
export declare const ORIGINAL_COLUMN_SIZES_HASH: {};
export declare const COLUMN_SIZES_HASH: {
    readonly "1/3": "one-third";
    readonly "2/3": "two-thirds";
    readonly "1/4": "one-quarter";
    readonly "1/2": "half";
    readonly "3/4": "three-quarters";
    readonly "2/5": "two-fifths";
    readonly "3/5": "three-fifths";
    readonly "4/5": "four-fifths";
    readonly "1/5": "one-fifth";
};
export declare const columnDimensionClassFor: (columnSize: ColumnSize | unknown, prefix: string, suffix?: string) => ClassNameProp;
export declare const columnSizeClassFor: (columnSize: ColumnSize | unknown, suffix?: string) => ClassNameProp;
export declare const columnOffsetlassFor: (columnSize: ColumnSize | unknown, suffix?: string) => ClassNameProp;
export declare const isDevice: (value: any) => value is "mobile" | "tablet" | "touch" | "desktop" | "widescreen" | "fullhd";
export declare const isValidGap: (value: any) => value is 0 | "1" | 1 | "2" | 2 | "3" | 3 | "4" | 4 | "5" | 5 | "6" | 6 | "7" | 7 | "8" | 8 | "0";
export declare const gapSizeFor: (gap: GapSize | unknown) => {
    [x: string]: boolean;
};
export declare const gapSizeForDevices: <T extends object>(props: T) => ClassNameProp[];
export declare const variableGapClassFor: <T extends object>(gap: GapSize | unknown, props: T) => ClassNameProp;
export declare const deviceActiveClassFor: (fromDevice: Device | unknown) => ClassNameProp;
