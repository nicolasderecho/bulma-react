import * as React from 'react'
import ProgressBar, {ProgressBarProps} from './ProgressBar'
import {COLORS, SIZES} from "../helpers/constants";

export default { title: 'Elements/ProgressBar' }

export const basic = (): React.FunctionComponentElement<ProgressBarProps> => <ProgressBar className={'custom-bar'} value={25} max={100} >
  Simple Noti
</ProgressBar>

export const colored = () => <>
  { COLORS.map(color => <>
    <span>{color} Bar</span>
    <ProgressBar color={color} value={40} max={100} />
  </>) }
</>;

export const sized = () => <>
{ SIZES.map(size => <React.Fragment>
  <span>{size} Bar</span>
  <ProgressBar key={size} size={size} value={40} max={100} />
</React.Fragment>) }
</>;

export const indeterminated = () => <React.Fragment>
  { COLORS.map(color => <React.Fragment>
    <span>{color} indeterminated bar</span>
    <ProgressBar key={color} color={color} indeterminated value={40} max={100} >{color} Bar</ProgressBar>
  </React.Fragment>) }
</React.Fragment>;
