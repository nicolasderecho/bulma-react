import * as React from 'react'
import Field from './Field'
import Label from "./Label";
import Control from "./Control";
import Input from "./Input";
import {IconWrapper} from "../../index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCheck } from '@fortawesome/free-solid-svg-icons'
import {COLORS, ELEMENT_STATES, SIZES} from "../helpers/constants";

export default { title: 'Form/Input' }

export const basic = () => {
  return <React.Fragment>
    <Field>
      <Input placeholder={'Basic input'} />
    </Field>
  </React.Fragment>
}

export const color = () => {
  return <React.Fragment>
    <h1>Colors</h1> <br/>
    { COLORS.map(color => <Field key={color}>
      <Input color={color} placeholder={`${color} Input`} />
    </Field>) }
  </React.Fragment>
}

export const size = () => {
  return <React.Fragment>
    <h1>Sizes</h1> <br/>
    { SIZES.map(size => <Field key={size}>
      <Input size={size} placeholder={`${size} Input`} />
    </Field>) }
  </React.Fragment>
}

export const options = () => {
  return <React.Fragment>
    <h1>Rounded</h1> <br/>
    <Field>
      <Input rounded placeholder={`Rounded Input`} />
    </Field>
    <h1>States</h1> <br/>
    { ELEMENT_STATES.map(state => <Field key={state}>
      <Input state={state} placeholder={`${state} state Input`} />
    </Field> ) }
    <h1>Loading</h1> <br/>
    <Field>
      <Control loading>
        <Input placeholder={`loading input`} />
      </Control>
    </Field>
    { SIZES.map(size => <Field key={size}>
      <Control loading size={size}>
        <Input size={size} placeholder={`${size} Input`} />
      </Control>
    </Field>) }
    <br/><h1>Read-Only</h1> <br/>
    <Field>
      <Input value={'Dominic Thiem'} readOnly />
    </Field>
    <br/><h1>Static</h1> <br/>
    <Field horizontal>
      <Field.Label size={'normal'}><Label>From</Label></Field.Label>
      <Field.Body>
        <Field>
          <Control>
            <Input value={'alexander@gmail.com'} static />
          </Control>
        </Field>
      </Field.Body>
    </Field>
    <br/><h1>html options</h1> <br/>
    <Field>
      <Input id={'dni'} name={'form-dni'} maxLength={4} htmlSize={'4'} placeholder={'This input contains the html props maxLength and size configured'} />
    </Field>
    <br/><h1>With Icons</h1> <br/>
    { SIZES.map(size => <Field key={size}>
      <Control hasIconsLeft hasIconsRight>
        <Input placeholder={`${size} input with icons`} size={size} />
        <IconWrapper size={size} position={'left'} ><FontAwesomeIcon icon={faUser} /></IconWrapper>
        <IconWrapper size={size} position={'right'} ><FontAwesomeIcon icon={faCheck} /></IconWrapper>
      </Control>
    </Field> ) }
  </React.Fragment>
}