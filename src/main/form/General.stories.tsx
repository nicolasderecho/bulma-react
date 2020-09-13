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
import DisabledFieldset from "./DisableFieldSet";

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

export const formField = () => {
  return <React.Fragment>
    <Field>
      <Label>Name</Label>
      <Control>
        <Input placeholder={'e.g Alex Smit'} />
        <Help>This is a help text</Help>
      </Control>
    </Field>
    <Field>
      <Label>Email</Label>
      <Control>
        <Input placeholder={'e.g Alex@gmail.com'} />
      </Control>
    </Field>
  </React.Fragment>
}

export const formControl = () => {
  return <React.Fragment>
    <Field>
      <Control hasIconsLeft hasIconsRight>
        <Input placeholder={'Text input'} />
        <IconWrapper size={'small'} position={'left'} ><FontAwesomeIcon icon={faUser} /></IconWrapper>
        <IconWrapper size={'small'} position={'right'} ><FontAwesomeIcon icon={faCheck} /></IconWrapper>
      </Control>
    </Field>
    <Field>
      <Control hasIconsLeft hasIconsRight>
        <Input size={'small'} placeholder={'Smal input'} />
        <IconWrapper size={'small'} position={'left'} ><FontAwesomeIcon icon={faUser} /></IconWrapper>
        <IconWrapper size={'small'} position={'right'} ><FontAwesomeIcon icon={faCheck} /></IconWrapper>
      </Control>
    </Field>
  </React.Fragment>
}

export const formAddons = () => {
  return <React.Fragment>
    <Field addons>
      <Control> <Input placeholder={'find a repository'} /> </Control>
      <Control> <Button color={'link'}>Search</Button> </Control>
    </Field>
    <h1>Static</h1>
    <Field addons>
      <Control> <Input placeholder={'email'} /> </Control>
      <Control> <Button static>@gmail.com</Button> </Control>
    </Field>
    <h1>Expanded</h1>
    <Field addons>
      <Control>
        <SelectWrapper>
          <select>
            <option>$</option>
            <option>£</option>
            <option>€</option>
          </select>
        </SelectWrapper>
      </Control>
      <Control> <Input placeholder={'Amount of money not expanded'} /> </Control>
      <Control> <Button>Transfer</Button> </Control>
    </Field>
    <Field addons>
      <Control>
        <SelectWrapper>
          <select>
            <option>$</option>
            <option>£</option>
            <option>€</option>
          </select>
        </SelectWrapper>
      </Control>
      <Control expanded> <Input placeholder={'Amount of money expanded'} /> </Control>
      <Control> <Button>Transfer</Button> </Control>
    </Field>
  </React.Fragment>
}

export const horizontalForm = () => {
  return <React.Fragment>
    <Field horizontal>
      <Field.Label size={'normal'}>
        <Label>From</Label>
      </Field.Label>
      <Field.Body>
        <Field>
          <Control expanded hasIconsLeft>
            <Input placeholder={'Text input'} />
            <IconWrapper size={'small'} position={'left'}>
              <FontAwesomeIcon icon={faUser}/>
            </IconWrapper>
          </Control>
        </Field>
        <Field>
          <Control expanded hasIconsLeft>
            <Input placeholder={'Email'} />
            <IconWrapper size={'small'} position={'left'}>
              <FontAwesomeIcon icon={faEnvelope}/>
            </IconWrapper>
          </Control>
        </Field>
      </Field.Body>
    </Field>
    <Field horizontal>
      <Field.Label size={'normal'}>
      </Field.Label>
      <Field.Body>
        <Field>
          <Field addons>
            <Control>
              <Button static>+44</Button>
            </Control>
            <Control expanded>
              <Input placeholder={'your phone number'} type={'tel'} />
            </Control>
          </Field>
          <Help>Do not enter the first zero</Help>
        </Field>
      </Field.Body>
    </Field>
    <Field horizontal>
      <Field.Label size={'normal'}>
        <Label>Department</Label>
      </Field.Label>
      <Field.Body>
        <Field>
          <Control>
            <SelectWrapper fullwidth>
              <select>
                <option>Business development</option>
                <option>Marketing</option>
                <option>Sales</option>
              </select>
            </SelectWrapper>
          </Control>
        </Field>
      </Field.Body>
    </Field>
  </React.Fragment>
}

export const disabledForm = () => {

  return <React.Fragment>
    <DisabledFieldset>
      <Field horizontal>
        <Field.Label size={'normal'}>
          <Label>From</Label>
        </Field.Label>
        <Field.Body>
          <Field>
            <Control expanded hasIconsLeft>
              <Input placeholder={'Text input'} value={'John Johnson'}/>
              <IconWrapper size={'small'} position={'left'}>
                <FontAwesomeIcon icon={faUser}/>
              </IconWrapper>
            </Control>
          </Field>
          <Field>
            <Control expanded hasIconsLeft>
              <Input placeholder={'Email'} value={'john@gmail.com'} />
              <IconWrapper size={'small'} position={'left'}>
                <FontAwesomeIcon icon={faEnvelope}/>
              </IconWrapper>
            </Control>
          </Field>
        </Field.Body>
      </Field>
      <Field horizontal>
        <Field.Label size={'normal'}>
        </Field.Label>
        <Field.Body>
          <Field>
            <Field addons>
              <Control>
                <Button static>+44</Button>
              </Control>
              <Control expanded>
                <Input placeholder={'your phone number'} type={'tel'} />
              </Control>
            </Field>
            <Help>Do not enter the first zero</Help>
          </Field>
        </Field.Body>
      </Field>
    </DisabledFieldset>
  </React.Fragment>
}
