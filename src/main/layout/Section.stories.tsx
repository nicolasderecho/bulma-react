import * as React from 'react'
import Container from "./Container";
import {Notification, Subtitle, Title} from "../../index";
import Section from "./Section";

export default { title: 'Layout/Section' }

export const basic = () => {
  return <React.Fragment>
    <Notification>Use sections as direct children of <code>body</code>.</Notification>
    <Section>
      <Container>
        <Title>Title</Title>
        <Subtitle>A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading</Subtitle>
      </Container>
    </Section>
  </React.Fragment>
}

export const spacing = () => {
  return <React.Fragment>
    <Notification>You can use the modifiers <code>is-medium</code> and <code>is-large</code> to change the spacing.</Notification>
    <Section spacing={'large'}>
      <Container>
        <Title>Title</Title>
        <Subtitle>A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading</Subtitle>
      </Container>
    </Section>
  </React.Fragment>
}