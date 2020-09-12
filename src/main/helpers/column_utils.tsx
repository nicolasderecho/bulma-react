import {ClassNameProp, ElementType} from "../../../types/bulma-react";
import {capitalize} from "./generic_helpers";

export const ONE_THIRD_ALIAS = '1/3' as const;
export const TWO_THIRDS_ALIAS = '2/3' as const;
export const ONE_QUARTER_ALIAS = '1/4' as const;
export const HALF_ALIAS = '1/2' as const;
export const THREE_QUARTERS_ALIAS = '3/4' as const;
export const ONE_FIFTH_ALIAS = '1/5' as const;
export const TWO_FIFTHS_ALIAS = '2/5' as const;
export const THREE_FIFTHS_ALIAS = '3/5' as const;
export const FOURT_FIFTHS_ALIAS = '4/5' as const;

export const THREE_QUARTERS = 'three-quarters' as const;
export const TWO_THIRDS = 'two-thirds' as const;
export const HALF = 'half' as const;
export const ONE_THIRD = 'one-third' as const;
export const ONE_QUARTER = 'one-quarter' as const;
export const FULL = 'full' as const;
export const FOURT_FIFTHS = 'four-fifths' as const;
export const THREE_FIFTHS = 'three-fifths' as const;
export const TWO_FIFTHS = 'two-fifths' as const;
export const ONE_FIFTH = 'one-fifth' as const;

export const COLUMN_SIZE_NUMBERS = ['1', 1, '2', 2, '3', 3, '4', 4, '5', 5, '6', 6, '7', 7, '8', 8, '9', 9, '10', 10, '11', 11, '12', 12] as const;
export const ORIGINAL_COLUMN_SIZES = [ ...COLUMN_SIZE_NUMBERS, ...[THREE_QUARTERS, TWO_THIRDS, HALF, ONE_THIRD, ONE_QUARTER, FULL, FOURT_FIFTHS, THREE_FIFTHS, TWO_FIFTHS, ONE_FIFTH] ] as const;
export const COLUMN_SIZES_ALIASES = [ONE_THIRD_ALIAS, TWO_THIRDS_ALIAS, ONE_QUARTER_ALIAS, HALF_ALIAS, THREE_QUARTERS_ALIAS, ONE_FIFTH_ALIAS, TWO_FIFTHS_ALIAS, THREE_FIFTHS_ALIAS, FOURT_FIFTHS_ALIAS] as const;
export const COLUMN_SIZES = [...ORIGINAL_COLUMN_SIZES, ...COLUMN_SIZES_ALIASES] as const;
//export type ColumnSize = ElementType<typeof COLUMN_SIZES>;
export type ColumnSize = typeof COLUMN_SIZES[number];

export const MOBILE     = 'mobile' as const;
export const TABLET     = 'tablet' as const;
export const TOUCH      = 'touch' as const;
export const DESKTOP    = 'desktop' as const;
export const WIDESCREEN = 'widescreen' as const;
export const FULLHD     = 'fullhd' as const;
export const DEVICES    = [MOBILE, TABLET, TOUCH, DESKTOP, WIDESCREEN, FULLHD] as const;
export type Device = ElementType<typeof DEVICES>;

export const GAP_SIZES = [ 0, '0', 1, '1', 2, '2', 3, '3', 4, '4', 5, '5', 6, '6', 7, '7', 8, '8' ] as const;
export type GapSize = ElementType<typeof GAP_SIZES>;

export const COLUMN_SIZES_ALIASES_HASH = {
  [ONE_THIRD_ALIAS]: ONE_THIRD,
  [TWO_THIRDS_ALIAS]: TWO_THIRDS,
  [ONE_QUARTER_ALIAS]: ONE_QUARTER,
  [HALF_ALIAS]: HALF,
  [THREE_QUARTERS_ALIAS]: THREE_QUARTERS,
  [TWO_FIFTHS_ALIAS]: TWO_FIFTHS,
  [THREE_FIFTHS_ALIAS]: THREE_FIFTHS,
  [FOURT_FIFTHS_ALIAS]: FOURT_FIFTHS,
  [ONE_FIFTH_ALIAS]: ONE_FIFTH
} as const;
export const ORIGINAL_COLUMN_SIZES_HASH = ORIGINAL_COLUMN_SIZES.reduce((hash, columnSize) => Object.assign({}, hash, { [columnSize]: columnSize }), {});
export const COLUMN_SIZES_HASH = Object.assign({}, ORIGINAL_COLUMN_SIZES_HASH, COLUMN_SIZES_ALIASES_HASH);

export const columnDimensionClassFor = (columnSize: ColumnSize | unknown, prefix: string, suffix = ''): ClassNameProp => {
  const key = `${prefix}-${COLUMN_SIZES_HASH[columnSize as string]}`;
  const finalKey = !!suffix ? `${key}-${suffix}` : key;
  return { [finalKey]: !!COLUMN_SIZES_HASH[columnSize as string] };
};

export const columnSizeClassFor = (columnSize: ColumnSize  | unknown, suffix = ''): ClassNameProp => columnDimensionClassFor(columnSize, 'is', suffix);
export const columnOffsetlassFor = (columnSize: ColumnSize | unknown, suffix = ''): ClassNameProp => columnDimensionClassFor(columnSize, 'is-offset', suffix);
export const isDevice = (value: any): value is Device => DEVICES.includes(value);
export const isValidGap = (value: any): value is GapSize => GAP_SIZES.includes(value);

export const gapSizeFor = (gap: GapSize | unknown) => ({ [`is-${gap}`]: isValidGap(gap)});
export const gapSizeForDevices = <T extends object>(props: T): ClassNameProp[] => {
  return DEVICES.map((device: Device) => {
    const gap = props[`gap${capitalize(device)}`];
    return { [`is-${gap}-${device}`]: isValidGap(gap) };
  });
};
export const variableGapClassFor = <T extends object>(gap: GapSize | unknown, props: T): ClassNameProp => {
  const deviceGapValidations = DEVICES.map((device: Device) => isValidGap(props[`gap${capitalize(device)}`])).reduce((acum: boolean, value: boolean) => acum || value);
  return { 'is-variable': isValidGap(gap) || deviceGapValidations };
};
export const deviceActiveClassFor = (fromDevice: Device | unknown): ClassNameProp => ({ [`is-${fromDevice}`]: isDevice(fromDevice) });