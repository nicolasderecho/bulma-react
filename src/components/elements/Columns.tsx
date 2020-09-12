import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {htmlElementFor} from "../helpers/util";
import Column, {ColumnProps} from "./Column";
import {deviceActiveClassFor, variableGapClassFor, gapSizeForDevices, gapSizeFor, DEVICES, GAP_SIZES} from "../helpers/column_utils";
import {HtmlElement} from '../helpers/constants';
import {Device, GapSize} from "../helpers/column_utils";
import {checkEnabledProperties} from "../helpers/util";

type ColumnsProps = React.ComponentPropsWithoutRef<'div' | 'span'> & {
  gapless?: boolean;
  multiline?: boolean;
  centered?: boolean;
  vcentered?: boolean;
  from?: Device;
  as?: HtmlElement;
  gap?: GapSize;
  gapMobile?: GapSize;
  gapTablet?: GapSize;
  gapTouch?: GapSize;
  gapDesktop?: GapSize;
  gapWidescreen?: GapSize;
  gapFullhd?: GapSize;
}

type ColumnsComponent = React.FC<ColumnsProps> & {
  Column: React.FC<ColumnProps>
};

const Columns: ColumnsComponent = ({ ...originalProps }) => {
  const { className, as, from, gap, gapless, multiline, centered, vcentered, ...props } = originalProps;
  const Element = htmlElementFor(as, 'div');
  const classes = classNames(className, 'columns', checkEnabledProperties(originalProps, ['gapless', 'multiline', 'centered', 'vcentered']), deviceActiveClassFor(from), gapSizeFor(gap), variableGapClassFor(gap, originalProps), ...gapSizeForDevices(originalProps));
  return <Element className={classes} {...props} />;
};

Columns.displayName = 'Columns';

Columns.propTypes = {
  className: PropTypes.string,
  from: PropTypes.oneOf(DEVICES),
  gapless: PropTypes.bool,
  multiline: PropTypes.bool,
  centered: PropTypes.bool,
  vcentered: PropTypes.bool,
  gap: PropTypes.oneOf(GAP_SIZES),
  gapMobile: PropTypes.oneOf(GAP_SIZES),
  gapTablet: PropTypes.oneOf(GAP_SIZES),
  gapTouch: PropTypes.oneOf(GAP_SIZES),
  gapDesktop: PropTypes.oneOf(GAP_SIZES),
  gapWidescreen: PropTypes.oneOf(GAP_SIZES),
  gapFullhd: PropTypes.oneOf(GAP_SIZES)
};

Columns.Column = Column;

export default Columns;

export { Columns, ColumnsProps }