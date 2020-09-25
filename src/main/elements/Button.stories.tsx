import * as React from 'react'
import Button, {ButtonProps} from './Button'
import {Color, Size} from "../helpers/constants";
import ButtonGroup from "./ButtonGroup";
import Buttons from "./Buttons";

export default { title: 'Elements/Button' }

export const basic = (): React.FunctionComponentElement<ButtonProps> => <Button className={'pepe'} color={undefined}>Simple Button</Button>

export const colored = () => <>
{ ['primary', 'link', 'info', 'danger', 'success', 'warning', 'white', 'light', 'dark', 'black', 'sarlanga'].map( (color: Color): React.FunctionComponentElement<ButtonProps> => <div key={color}> <Button className={'boton'} color={color}>{color} button</Button></div> ) }
</>

export const lighted = () => <>
  { ['primary', 'link', 'info', 'danger', 'success', 'warning', 'white', 'light', 'dark', 'black'].map( (color: Color): React.FunctionComponentElement<ButtonProps> => <div key={color}> <Button className={'boton'} color={color} light >{color} button</Button></div> ) }
</>

export const outlined = () => <>
  <Button className={'boton'} color={'primary'} outlined>outlined button</Button>
  <Button className={'boton'} color={'primary'} outlined={true}>outlined button</Button>
  <Button className={'boton'} color={'primary'} outlined={false}>NOT outlined button</Button>
</>

export const sized = () => <>
  { ['small', 'normal', 'medium', 'large'].map( (size: Size): React.FunctionComponentElement<ButtonProps> => <div key={size}> <Button size={size} >{size} button</Button></div> ) }
</>

export const inverted = () => <>
  <Button className={'boton'} color={'primary'} inverted>inverted button</Button>
  <Button className={'boton'} color={'primary'} inverted={true}>inverted button</Button>
  <Button className={'boton'} color={'primary'} inverted={false}>NOT inverted button</Button>
</>


export const fullwidth = () => <>
  <Button className={'boton'} color={'primary'} fullwidth>fullwidth button</Button>
  <Button className={'boton'} color={'primary'} fullwidth={true}>fullwidth button</Button>
  <Button className={'boton'} color={'primary'} fullwidth={false}>NOT fullwidth button</Button>
</>

export const rounded = () => <>
  <Button color={'primary'} rounded>rounded button</Button>
  <Button color={'success'} rounded={true}>rounded button</Button>
  <Button color={'danger'} rounded={false}>NOT rounded button</Button>
</>

export const AdditionalProps = () => <>
  <Button color={'success'} static={true}>static button</Button>
  <Button color={'danger'} loading={true}>loading button</Button>
  <Button color={'danger'} text={true}>text button</Button>
</>

export const state = () => <>
  <Button  state={'normal'}>normal button</Button>
  <Button  state={'focused'}>focused button</Button>
  <Button  state={'hovered'}>hovered button</Button>
  <Button  state={'active'}>active button</Button>
</>

export const asElement = () => <>
  <Button  as={'div'} value={'button'}>div button</Button>
  <Button  as={'input'} value={'Input Button'} />
</>

export const grouped = () => {
  return <ButtonGroup>
    <Buttons addons>
      <Button>First Option</Button>
      <Button>Second Option</Button>
      <Button>Third Option</Button>
    </Buttons>
  </ButtonGroup>
}