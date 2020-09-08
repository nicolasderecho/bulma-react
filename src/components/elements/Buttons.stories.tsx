import * as React from 'react'
import Buttons, {ButtonsProps} from './Buttons'
import {SIZES} from "../helpers/constants";
import Button from "./Button";

export default { title: 'Buttons' }

export const basic = (): React.FunctionComponentElement<ButtonsProps> => <Buttons className={'custom-container'} >
  <Button>a button</Button>
  <Button>another button</Button>
</Buttons>

export const size = () => <React.Fragment>{
  SIZES.map(size => <div key={size}>
    <div>{size} buttons</div><br/>
    <Buttons size={size}>
      <Button>a button</Button>
      <Button>another button</Button>
    </Buttons>
    <br/>
  </div>)
}</React.Fragment>

export const position = (): React.FunctionComponentElement<ButtonsProps> => <Buttons position={'right'} >
  <Button>a button</Button>
  <Button>another button</Button>
</Buttons>

export const addons = () => <div>
  <Buttons addons>
    <Button>Yes</Button>
    <Button>Maybe</Button>
    <Button>No</Button>
  </Buttons>
</div>