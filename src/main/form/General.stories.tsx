import * as React from 'react'
import Field from './Field'
import Label from "./Label";
import Control from "./Control";
import Input from "./Input";
import {Button, IconWrapper, SelectWrapper, SimpleCheckbox, SimpleRadio} from "../../index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCheck, faEnvelope, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import Help from "./Help";
import Textarea from "./TextArea";

export default { title: 'Form/General' }

export const basic = () => {
  return <React.Fragment>
    <Field>
      <Label>Name</Label>
      <Control>
        <Input placeholder={'text input'} />
      </Control>
    </Field>
    <Field>
      <Label>Username</Label>
      <Control hasIconsLeft hasIconsRight>
        <Input color={'success'} placeholder={'Text input'} />
        <IconWrapper size={'small'} position={'left'} ><FontAwesomeIcon icon={faUser} /></IconWrapper>
        <IconWrapper size={'small'} position={'right'} ><FontAwesomeIcon icon={faCheck} /></IconWrapper>
        <Help color={'success'}>This is a help text for the previos input</Help>
      </Control>
    </Field>
    <Field>
      <Label>Email</Label>
      <Control hasIconsLeft hasIconsRight>
        <Input color={'danger'} placeholder={'Text input'} />
        <IconWrapper size={'small'} position={'left'} ><FontAwesomeIcon icon={faEnvelope} /></IconWrapper>
        <IconWrapper size={'small'} position={'right'} ><FontAwesomeIcon icon={faExclamationTriangle} /></IconWrapper>
        <Help color={'danger'}>This is a help text with error styling</Help>
      </Control>
    </Field>
    <Field>
      <Label>Subject</Label>
      <Control>
        <SelectWrapper>
          <select>
            <option>Select dropdown</option>
            <option>With options</option>
          </select>
        </SelectWrapper>
      </Control>
    </Field>
    <Field>
      <Label>Message</Label>
      <Control>
        <Textarea placeholder={'text area'} />
      </Control>
    </Field>
    <Field>
      <Control>
        <SimpleCheckbox> I agree to the <a href="#">terms and conditions</a></SimpleCheckbox>
      </Control>
    </Field>
    <Field>
      <Control>
        <SimpleRadio name={'question'}> Yes</SimpleRadio>
        <SimpleRadio name={'question'}> No</SimpleRadio>
      </Control>
    </Field>
    <Field grouped>
      <Control><Button color={'link'}>Submit</Button></Control>
      <Control><Button color={'link'} light>Cancel</Button></Control>
    </Field>
  </React.Fragment>
}
