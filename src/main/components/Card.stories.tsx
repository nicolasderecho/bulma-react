import * as React from 'react'
import {Card, Content, Image, Media, Title, Subtitle, Column, Columns, IconWrapper} from "../../index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

export default { title: 'Components/Card' }

export const basic = () => {
  return <React.Fragment>
    <Columns>
      <Column columnSize={'one-third'} offset={'one-third'}>
        <Card>
          <Card.Image>
            <Image is={'4by3'} src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
          </Card.Image>
          <Card.Content>
            <Media>
              <Media.Left>
                <Image is={'48x48'} src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
              </Media.Left>
              <Media.Content>
                <Title sizeNumber={4}>John Smith</Title>
                <Subtitle sizeNumber={6}>@johnsmith</Subtitle>
              </Media.Content>
            </Media>
            <Content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nec iaculis mauris. <a>@bulmaio</a>.
              <a href="#">#css</a> <a href="#">#responsive</a>
              <br />
              <span>11:09 PM - 1 Jan 2016</span>
            </Content>
          </Card.Content>
        </Card>
      </Column>
    </Columns>
  </React.Fragment>
}

export const card = () => {

  return <React.Fragment>
    <Columns>
      <Column columnSize={'one-third'} offset={'one-third'}>
        <Card>
          <Card.Header>
            <Card.Header.Title centered>
              Component
            </Card.Header.Title>
            <Card.Header.Icon>
              <IconWrapper><FontAwesomeIcon icon={faAngleDown} /></IconWrapper>
            </Card.Header.Icon>
          </Card.Header>
          <Card.Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris. <a>@bulmaio</a>.
            <a href="#">#css</a> <a href="#">#responsive</a>
            <br />
            <span>11:09 PM - 1 Jan 2016</span>
          </Card.Content>
          <Card.Footer>
            <Card.Footer.Item>Save</Card.Footer.Item>
            <Card.Footer.Item>Edit</Card.Footer.Item>
            <Card.Footer.Item>Delete</Card.Footer.Item>
          </Card.Footer>
        </Card>
      </Column>
    </Columns>
  </React.Fragment>
}