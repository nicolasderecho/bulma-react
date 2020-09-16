import * as React from 'react'
import Container from "./Container";
import Level from "./Level";
import {Box, Button, Control, Field, Input, Notification, Subtitle, Title} from "../../index";

export default { title: 'Layout/Level' }

export const basic = () => {
  return <React.Fragment>
    <Container>
      <Level title={'Level'}>
        <Level.Left>
          <Level.Item>
            <Subtitle sizeNumber={5}><strong>123</strong> posts</Subtitle>
          </Level.Item>
          <Level.Item>
            <Field addons>
              <Control><Input placeholder={'Find a Post'} /></Control>
              <Control><Button>Search</Button></Control>
            </Field>
          </Level.Item>
        </Level.Left>
        <Level.Right>
          <Level.Item><strong>All</strong></Level.Item>
          <Level.Item><a href={'#'}>Published</a></Level.Item>
          <Level.Item><a href={'#'}>Drafts</a></Level.Item>
          <Level.Item><a href={'#'}>Deleted</a></Level.Item>
          <Level.Item><Button color={'success'}>New</Button></Level.Item>
        </Level.Right>
      </Level>
    </Container>
  </React.Fragment>
}

export const centered = () => {
  return <React.Fragment>
    <Box>
      <Level>
        <Level.Item centered>
          <div>
            <p className={'heading'}>Tweets</p>
            <Title as={'p'}>3,456</Title>
          </div>
        </Level.Item>
        <Level.Item centered>
          <div>
            <p className={'heading'}>Following</p>
            <Title as={'p'}>123</Title>
          </div>
        </Level.Item>
        <Level.Item centered>
          <div>
            <p className={'heading'}>Followers</p>
            <Title as={'p'}>456K</Title>
          </div>
        </Level.Item>
        <Level.Item centered>
          <div>
            <p className={'heading'}>Likes</p>
            <Title as={'p'}>789</Title>
          </div>
        </Level.Item>
      </Level>
    </Box>
  </React.Fragment>
}

export const mobile = () => {
  return <React.Fragment>
    <Notification>
      By default, for space concerns, the level is vertical on mobile. If you want the level to be horizontal on mobile as well, add the is-mobile modifier on the level container.
    </Notification>
    <Box>
      <Level mobile>
        <Level.Item centered>
          <div>
            <p className={'heading'}>Tweets</p>
            <Title as={'p'}>3,456</Title>
          </div>
        </Level.Item>
        <Level.Item centered>
          <div>
            <p className={'heading'}>Following</p>
            <Title as={'p'}>123</Title>
          </div>
        </Level.Item>
        <Level.Item centered>
          <div>
            <p className={'heading'}>Followers</p>
            <Title as={'p'}>456K</Title>
          </div>
        </Level.Item>
        <Level.Item centered>
          <div>
            <p className={'heading'}>Likes</p>
            <Title as={'p'}>789</Title>
          </div>
        </Level.Item>
      </Level>
    </Box>
  </React.Fragment>
}