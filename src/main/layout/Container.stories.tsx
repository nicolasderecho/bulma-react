import * as React from 'react'
import Container from "./Container";
import {Notification} from "../../index";

export default { title: 'Layout/Container' }

export const basic = () => {

  return <React.Fragment>
    <Container>
      <Notification>This container is centered on desktop.</Notification>
    </Container>
  </React.Fragment>
}

export const fluid = () => {
  return <React.Fragment>
    <Container fluid>
      <Notification>This container is fluid: it will have a 32px gap on either side, on any viewport size.</Notification>
    </Container>
  </React.Fragment>
}

export const breakpoins = () => {
  return <React.Fragment>
    <Container widescreen>
      <Notification>
        This container is <strong>fullwidth</strong> <em>until</em> the <code>$widescreen</code> breakpoint.
      </Notification>
    </Container>
    <br/>
    <Container fullhd>
      <Notification>
        This container is <strong>fullwidth</strong> <em>until</em> the <code>$fullhd</code> breakpoint.
      </Notification>
    </Container>
  </React.Fragment>
}