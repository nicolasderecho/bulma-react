import * as React from 'react'
import {Column, Columns, IconWrapper, Tabs} from "../../index";
import {SIZES} from "../helpers/constants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic, faImage, faFilm, faFileAlt } from '@fortawesome/free-solid-svg-icons'

export default { title: 'Components/Tabs' }

export const basic = () => {
  return <React.Fragment>
    <Tabs>
      <Tabs.Item active>Pictures</Tabs.Item>
      <Tabs.Item>Music</Tabs.Item>
      <Tabs.Item>Video</Tabs.Item>
      <Tabs.Item>Documents</Tabs.Item>
    </Tabs>
  </React.Fragment>
}

export const centered = () => {
  return <React.Fragment>
    <Tabs alignment={'centered'}>
      <Tabs.Item active>Pictures</Tabs.Item>
      <Tabs.Item>Music</Tabs.Item>
      <Tabs.Item>Video</Tabs.Item>
      <Tabs.Item>Documents</Tabs.Item>
    </Tabs>
  </React.Fragment>
}

export const right = () => {
  return <React.Fragment>
    <Tabs alignment={'right'}>
      <Tabs.Item active>Pictures</Tabs.Item>
      <Tabs.Item>Music</Tabs.Item>
      <Tabs.Item>Video</Tabs.Item>
      <Tabs.Item>Documents</Tabs.Item>
    </Tabs>
  </React.Fragment>
}

export const sizes = () => {
  return <React.Fragment>
    { SIZES.map(size => <Columns key={size}>
      <Column>
        <Tabs size={size}>
          <Tabs.Item active>{size}</Tabs.Item>
          <Tabs.Item>Music</Tabs.Item>
          <Tabs.Item>Video</Tabs.Item>
          <Tabs.Item>Documents</Tabs.Item>
        </Tabs>
      </Column>
    </Columns>) }
  </React.Fragment>
}

export const rounded = () => {
  return <React.Fragment>
    <Tabs rounded>
      <Tabs.Item active>Pictures</Tabs.Item>
      <Tabs.Item>Music</Tabs.Item>
      <Tabs.Item>Video</Tabs.Item>
      <Tabs.Item>Documents</Tabs.Item>
    </Tabs>
  </React.Fragment>
}

export const toggle = () => {
  return <React.Fragment>
    <Tabs toggle>
      <Tabs.Item active>Pictures</Tabs.Item>
      <Tabs.Item>Music</Tabs.Item>
      <Tabs.Item>Video</Tabs.Item>
      <Tabs.Item>Documents</Tabs.Item>
    </Tabs>
  </React.Fragment>
}

export const toggleRounded = () => {
  return <React.Fragment>
    <Tabs toggle toggleRounded>
      <Tabs.Item active>Pictures</Tabs.Item>
      <Tabs.Item>Music</Tabs.Item>
      <Tabs.Item>Video</Tabs.Item>
      <Tabs.Item>Documents</Tabs.Item>
    </Tabs>
  </React.Fragment>
}

export const fullwidth = () => {
  return <React.Fragment>
    <Tabs fullwidth>
      <Tabs.Item active>Pictures</Tabs.Item>
      <Tabs.Item>Music</Tabs.Item>
      <Tabs.Item>Video</Tabs.Item>
      <Tabs.Item>Documents</Tabs.Item>
    </Tabs>
  </React.Fragment>
}

export const icons = () => {
  return <React.Fragment>
    <Tabs>
      <Tabs.Item active>
        <IconWrapper><FontAwesomeIcon icon={faImage} /></IconWrapper>
        <span>Pictures</span>
      </Tabs.Item>
      <Tabs.Item>
        <IconWrapper><FontAwesomeIcon icon={faMusic} /></IconWrapper>
        <span>Music</span>
      </Tabs.Item>
      <Tabs.Item>
        <IconWrapper><FontAwesomeIcon icon={faFilm} /></IconWrapper>
        <span>Video</span>
      </Tabs.Item>
      <Tabs.Item>
        <IconWrapper> <FontAwesomeIcon icon={faFileAlt} /> </IconWrapper>
        <span>Documents</span>
      </Tabs.Item>
    </Tabs>
  </React.Fragment>
}

export const withCustomLinkComponent = () => {
  const LinkComponent = ({to, ...props}: any) => <a className={'custom-link'} {...props} /> //This could also be the react router Link component
  return <React.Fragment>
    <Tabs>
      <Tabs.Item active includeLink={false} >
        <LinkComponent to={'/some-path'}>
          Pictures
        </LinkComponent>
      </Tabs.Item>
      <Tabs.Item includeLink={false} >
        <LinkComponent to={'/some-path'}>
          Music
        </LinkComponent>
      </Tabs.Item>
      <Tabs.Item includeLink={false} >
        <LinkComponent to={'/some-path'}>
          Video
        </LinkComponent>
      </Tabs.Item>
      <Tabs.Item includeLink={false} >
        <LinkComponent to={'/some-path'}>
          Documents
        </LinkComponent>
      </Tabs.Item>
    </Tabs>
  </React.Fragment>
}