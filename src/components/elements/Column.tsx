import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {camelCase} from "../helpers/generic_helpers";
import {htmlElementFor, isEnabled} from "../helpers/util";
import { COLUMN_SIZES, columnOffsetlassFor, columnSizeClassFor, DEVICES, Device, ColumnSize } from "../helpers/column_utils";
import { HtmlElement } from "../helpers/constants";
import {ClassNameProp} from "../../../types/bulma-react";

type ColumnProps = React.ComponentPropsWithoutRef<'div' | 'span'> & {
  as?: HtmlElement;

  columnSize?: ColumnSize;
  offset?: ColumnSize;

  mobileColumnSize?: ColumnSize;
  tabletColumnSize?: ColumnSize;
  touchColumnSize?: ColumnSize;
  desktopColumnSize?: ColumnSize;
  widescreenColumnSize?: ColumnSize;
  fullhdColumnSize?: ColumnSize;

  mobileOffset?: ColumnSize;
  tabletOffset?: ColumnSize;
  touchOffset?: ColumnSize;
  desktopOffset?: ColumnSize;
  widescreenOffset?: ColumnSize;
  fullhdOffset?: ColumnSize;

  narrow?: boolean;
  mobileNarrow?: boolean;
  tabletNarrow?: boolean;
  touchNarrow?: boolean;
  desktopNarrow?: boolean;
  widescreenNarrow?: boolean;
  fullhdNarrow?: boolean;

  mobile?: boolean;
  tablet?: boolean;
  touch?: boolean;
  desktop?: boolean;
  widescreen?: boolean;
  fullhd?: boolean;
}

type DeviceClassProps = {
  narrow: ClassNameProp[];
  device: ClassNameProp[];
  deviceColumnSizes: ClassNameProp[];
  deviceOffsets: ClassNameProp[];
}

const checkDerivedClasses = (props: ColumnProps, object: DeviceClassProps, device: Device): DeviceClassProps => Object.assign({}, {
  narrow:  object.narrow.concat({[`is-narrow-${device}`]: isEnabled(props, `${device}Narrow`)}),
  device: object.device.concat({[`is-${device}`]: isEnabled(props, `${camelCase(device)}`)}),
  deviceColumnSizes: object.deviceColumnSizes.concat(columnSizeClassFor(props[`${device}ColumnSize`], device)),
  deviceOffsets: object.deviceOffsets.concat(columnOffsetlassFor(props[`${device}Offset`], device))
});

const Column: React.FC<ColumnProps> = ({ ...originalProps }) => {
  const { className, as, columnSize, offset, mobileColumnSize, tabletColumnSize, touchColumnSize, desktopColumnSize, widescreenColumnSize, fullhdColumnSize, mobileOffset, tabletOffset, touchOffset, desktopOffset, widescreenOffset, fullhdOffset, narrow, mobileNarrow, tabletNarrow, touchNarrow, desktopNarrow, widescreenNarrow, ...props } = originalProps;
  const Element = htmlElementFor(as, 'div');
  const derivedClasses = DEVICES.reduce((object: DeviceClassProps, device: Device): DeviceClassProps => checkDerivedClasses(originalProps, object, device), { narrow: [], device: [], deviceColumnSizes: [], deviceOffsets: []});
  const classes = classNames(className, 'column', columnSizeClassFor(columnSize), columnOffsetlassFor(offset), {'is-narrow': isEnabled(originalProps, 'narrow')}, ...derivedClasses.narrow, ...derivedClasses.device, ...derivedClasses.deviceColumnSizes, ...derivedClasses.deviceOffsets);
  return <Element className={classes} {...props} />;
};

Column.displayName = 'Column';

Column.propTypes = {
  className: PropTypes.string,
  columnSize: PropTypes.oneOf(COLUMN_SIZES),
  offset: PropTypes.oneOf(COLUMN_SIZES),

  mobileColumnSize: PropTypes.oneOf(COLUMN_SIZES),
  tabletColumnSize: PropTypes.oneOf(COLUMN_SIZES),
  touchColumnSize: PropTypes.oneOf(COLUMN_SIZES),
  desktopColumnSize: PropTypes.oneOf(COLUMN_SIZES),
  widescreenColumnSize: PropTypes.oneOf(COLUMN_SIZES),
  fullhdColumnSize: PropTypes.oneOf(COLUMN_SIZES),

  mobileOffset: PropTypes.oneOf(COLUMN_SIZES),
  tabletOffset: PropTypes.oneOf(COLUMN_SIZES),
  touchOffset: PropTypes.oneOf(COLUMN_SIZES),
  desktopOffset: PropTypes.oneOf(COLUMN_SIZES),
  widescreenOffset: PropTypes.oneOf(COLUMN_SIZES),
  fullhdOffset: PropTypes.oneOf(COLUMN_SIZES),

  narrow: PropTypes.bool,
  mobileNarrow: PropTypes.bool,
  tabletNarrow: PropTypes.bool,
  touchNarrow: PropTypes.bool,
  desktopNarrow: PropTypes.bool,
  widescreenNarrow: PropTypes.bool,
  fullhdNarrow: PropTypes.bool,

  mobile: PropTypes.bool,
  tablet: PropTypes.bool,
  touch: PropTypes.bool,
  desktop: PropTypes.bool,
  widescreen: PropTypes.bool,
  fullhd: PropTypes.bool
};

export default Column;

export { Column, ColumnProps };