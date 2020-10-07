import * as React from 'react'
import {CheckBox, Control, Field} from "../../index";
import {COLORS, SIZES} from "../helpers/constants";
import {useRef} from "react";

export default { title: 'Custom/Checkbox' }

export const basic = () => {
  return <React.Fragment>
    <Field>
      <Control>
        <h1>Horizontal</h1>
        <CheckBox id={'blue'} text={'Blue'} color={'info'} />
        <CheckBox id={'red'}  text={'Red'}  color={'danger'} />
        <CheckBox id={'other'}  text={'Other'} color={'primary'} />
      </Control>
    </Field>
    <br/>
    <Field>
      <h1>Vertical</h1>
      <Control>
        <CheckBox id={'blue'} text={'Blue'}  color={'info'} />
      </Control>
      <Control>
        <CheckBox id={'red'}  text={'Red'}  color={'danger'} />
      </Control>
      <Control>
        <CheckBox id={'other'}  text={'Other'}  color={'primary'} />
      </Control>
    </Field>
    <br />
    <Field>
      <Control>
        <h1>rtl</h1>
        <CheckBox rtl id={'rtl-blue'} text={'Blue'}  color={'info'} />
        <CheckBox rtl id={'rtl-red'}  text={'Red'}   color={'danger'} />
        <CheckBox rtl id={'rtl-other'}  text={'Other'}  color={'primary'} />
      </Control>
    </Field>
    <br />
    <Field>
      <Control>
        <h1>block</h1>
        <CheckBox block id={'block-blue'} text={'Blue'} color={'info'} />
        <CheckBox block id={'block-red'}  text={'Red'} color={'danger'} />
        <CheckBox block id={'block-other'}  text={'Other'} color={'primary'} />
      </Control>
    </Field>
    <br />
    <Field>
      <Control>
        <h1>No border</h1>
        <CheckBox hasNoBorder id={'hasNoBorder-blue'} text={'Blue'} color={'info'} />
        <CheckBox hasNoBorder id={'hasNoBorder-red'}  text={'Red'} color={'danger'} />
        <CheckBox hasNoBorder id={'hasNoBorder-other'}  text={'Other'} color={'primary'} />
      </Control>
    </Field>
    <br />
    <Field>
      <Control>
        <h1>Background Color</h1>
        <CheckBox hasBackgroundColor id={'hasBackgroundColor-blue'} text={'Blue'} color={'info'} />
        <CheckBox hasBackgroundColor id={'hasBackgroundColor-red'}  text={'Red'} color={'danger'} />
        <CheckBox hasBackgroundColor id={'hasBackgroundColor-other'}  text={'Other'} color={'primary'} />
      </Control>
    </Field>
  </React.Fragment>
}

export const colored = () => {
  return <React.Fragment>
    <Field>
      <Control>
        { COLORS.map(color => <div key={color}>
          <CheckBox id={color} name={'color'} color={color} text={`${color} Checkbox`} />
        </div>) }
      </Control>
    </Field>
  </React.Fragment>
}

export const size = () => {
  return <React.Fragment>
    <Field>
      <Control>
        { SIZES.map(size => <div key={size}>
          <CheckBox id={size} name={'size'} size={size} text={`${size} Checkbox`} />
        </div>) }
      </Control>
    </Field>
  </React.Fragment>
}

export const indeterminate = () => {
  const ref = useRef(null);
  return <React.Fragment>
    <Field>
      <Control>
        <h1>Indeterminate</h1>
        <CheckBox id={'blue'} indeterminate text={'Blue'} color={'info'} />
      </Control>
    </Field>
    <Field>
      <Control>
        <h1>Indeterminate with custom ref</h1>
        <CheckBox id={'red'} indeterminate text={'Red'} color={'danger'} ref={ref} />
      </Control>
    </Field>
  </React.Fragment>
}