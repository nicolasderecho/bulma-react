import * as React from 'react'
import {Control, Field, Radio} from "../../index";
import {COLORS, SIZES} from "../helpers/constants";

export default { title: 'Custom/Radio' }

export const basic = () => {
  return <React.Fragment>
    <Field>
      <Control>
        <h1>Horizontal</h1>
        <Radio id={'blue'} text={'Blue'}  name={'color'} color={'info'} />
        <Radio id={'red'}  text={'Red'}  name={'color'} color={'danger'} />
        <Radio id={'other'}  text={'Other'}  name={'color'} color={'primary'} />
      </Control>
    </Field>
    <br/>
    <Field>
      <h1>Vertical</h1>
      <Control>
        <Radio id={'blue'} text={'Blue'}  name={'color'} color={'info'} />
      </Control>
      <Control>
        <Radio id={'red'}  text={'Red'}  name={'color'} color={'danger'} />
      </Control>
      <Control>
        <Radio id={'other'}  text={'Other'}  name={'color'} color={'primary'} />
      </Control>
    </Field>
    <br />
    <Field>
      <Control>
        <h1>rtl</h1>
        <Radio rtl id={'rtl-blue'} text={'Blue'}  name={'rtl-color'} color={'info'} />
        <Radio rtl id={'rtl-red'}  text={'Red'}  name={'rtl-color'} color={'danger'} />
        <Radio rtl id={'rtl-other'}  text={'Other'}  name={'rtl-color'} color={'primary'} />
      </Control>
    </Field>
    <br />
    <Field>
      <Control>
        <h1>block</h1>
        <Radio block id={'block-blue'} text={'Blue'}  name={'block-color'} color={'info'} />
        <Radio block id={'block-red'}  text={'Red'}  name={'block-color'} color={'danger'} />
        <Radio block id={'block-other'}  text={'Other'}  name={'block-color'} color={'primary'} />
      </Control>
    </Field>
    <br />
    <Field>
      <Control>
        <h1>No border</h1>
        <Radio hasNoBorder id={'hasNoBorder-blue'} text={'Blue'}  name={'hasNoBorder-color'} color={'info'} />
        <Radio hasNoBorder id={'hasNoBorder-red'}  text={'Red'}  name={'hasNoBorder-color'} color={'danger'} />
        <Radio hasNoBorder id={'hasNoBorder-other'}  text={'Other'}  name={'hasNoBorder-color'} color={'primary'} />
      </Control>
    </Field>
    <br />
    <Field>
      <Control>
        <h1>Background Color</h1>
        <Radio hasBackgroundColor id={'hasBackgroundColor-blue'} text={'Blue'}  name={'hasBackgroundColor-color'} color={'info'} />
        <Radio hasBackgroundColor id={'hasBackgroundColor-red'}  text={'Red'}  name={'hasBackgroundColor-color'} color={'danger'} />
        <Radio hasBackgroundColor id={'hasBackgroundColor-other'}  text={'Other'}  name={'hasBackgroundColor-color'} color={'primary'} />
      </Control>
    </Field>
  </React.Fragment>
}

export const colored = () => {
  return <React.Fragment>
    <Field>
      <Control>
        { COLORS.map(color => <div key={color}>
          <Radio id={color} name={'color'} color={color} text={`${color} Radio`} />
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
          <Radio id={size} name={'size'} size={size} text={`${size} Radio`} />
        </div>) }
      </Control>
    </Field>
  </React.Fragment>
}