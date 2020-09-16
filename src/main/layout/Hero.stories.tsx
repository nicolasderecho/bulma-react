import * as React from 'react'
import Container from "./Container";
import {Subtitle, Title} from "../../index";
import Hero from "./Hero";
import {COLORS, HERO_SIZES} from "../helpers/constants";

export default { title: 'Layout/Hero' }

export const basic = () => {
  return <React.Fragment>
    <Hero>
      <Hero.Body>
        <Container>
          <Title>Hero title</Title>
          <Subtitle>Hero Subtitle</Subtitle>
        </Container>
      </Hero.Body>
    </Hero>
  </React.Fragment>
}

export const colors = () => {
  return <React.Fragment>
    { COLORS.map(color => <div key={color}>
      <Hero color={color}>
        <Hero.Body>
          <Container>
            <Title>{color} Hero title</Title>
            <Subtitle>{color} Hero Subtitle</Subtitle>
          </Container>
        </Hero.Body>
      </Hero>
    </div>) }

  </React.Fragment>
}

export const bold = () => {
  return <React.Fragment>
    { COLORS.map(color => <div key={color}>
      <Hero color={color} bold>
        <Hero.Body>
          <Container>
            <Title>{color} bold Hero title</Title>
            <Subtitle>{color} bold Hero Subtitle</Subtitle>
          </Container>
        </Hero.Body>
      </Hero>
    </div>) }

  </React.Fragment>
}

export const sizes = () => {
  return <React.Fragment>
    { HERO_SIZES.map(heroSize => <div key={heroSize}>
      <Hero color={'primary'} size={heroSize}>
        <Hero.Body>
          <Container>
            <Title>{heroSize} Hero title</Title>
            <Subtitle>{heroSize} Hero Subtitle</Subtitle>
          </Container>
        </Hero.Body>
      </Hero>
      <br /> <br />
    </div>) }
  </React.Fragment>
}

export const fullheight = () => {
  return <React.Fragment>
    <Hero color={'success'} bold fullheightWithNavbar>
      <Hero.Body>
        <Container>
          <Title>Hero title</Title>
          <Subtitle>Hero Subtitle</Subtitle>
        </Container>
      </Hero.Body>
    </Hero>
  </React.Fragment>
}