import * as React from 'react'
import {
  Button,
  Content,
  Control,
  Delete,
  Field,
  IconWrapper,
  Image,
  Notification,
  SimpleCheckbox,
  Textarea
} from "../../index";
import Media from "./Media";
import Level from "./Level";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReply, faRetweet, faHeart } from '@fortawesome/free-solid-svg-icons'

export default { title: 'Layout/Media' }

export const basic = () => {
  return <React.Fragment>
    <Notification>The media object is a UI element perfect for repeatable and nestable content.</Notification>
    <Media>
      <Media.Left>
        <Image is={'64x64'} src={"https://bulma.io/images/placeholders/128x128.png"} />
      </Media.Left>
      <Media.Content>
        <Content>
          <p>
            <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
          </p>
        </Content>
        <Level mobile>
          <Level.Left>
            <Level.Item><IconWrapper><FontAwesomeIcon icon={faReply} /></IconWrapper></Level.Item>
            <Level.Item><IconWrapper><FontAwesomeIcon icon={faRetweet} /></IconWrapper></Level.Item>
            <Level.Item><IconWrapper><FontAwesomeIcon icon={faHeart} /></IconWrapper></Level.Item>
          </Level.Left>
        </Level>
      </Media.Content>
      <Media.Right>
        <Delete>Delete</Delete>
      </Media.Right>
    </Media>
    <br/><br/><br/>
    <Notification>You can include any other Bulma element, like inputs, textareas, icons, buttons... or even a <strong>nav bar.</strong></Notification>
    <Media>
      <Media.Left>
        <Image is={'64x64'} src={"https://bulma.io/images/placeholders/128x128.png"} />
      </Media.Left>
      <Media.Content>
        <Field>
          <Control><Textarea placeholder={'Add a comment'}/></Control>
        </Field>
        <Level>
          <Level.Left>
            <Level.Item><Button color={'info'}>Submit</Button></Level.Item>
          </Level.Left>
          <Level.Right>
            <Level.Item><SimpleCheckbox> Accept Terms</SimpleCheckbox></Level.Item>
          </Level.Right>
        </Level>
      </Media.Content>
    </Media>
  </React.Fragment>
}

export const nested = () => {
  return <React.Fragment>
    <Media>
      <Media.Left>
        <Image is={'64x64'} src={"https://bulma.io/images/placeholders/128x128.png"} />
      </Media.Left>
      <Media.Content>
        <Content>
          <p>
            <strong>Barbara Middleton</strong>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit non. Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
            <br />
            <small><a>Like</a> · <a>Reply</a> · 3 hrs</small>
          </p>
        </Content>
        <Media>
          <Media.Left>
            <Image is={'64x64'} src={"https://bulma.io/images/placeholders/128x128.png"} />
          </Media.Left>
          <Media.Content>
            <Content>
              <p>
                <strong>Sean Brown</strong>
                <br />
                Donec sollicitudin urna eget eros malesuada sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam blandit nisl a nulla sagittis, a lobortis leo feugiat.
                <br />
                <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
              </p>
            </Content>
            <Media>
              Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu lorem cursus ullamcorper sit amet nec massa.
            </Media>
            <Media>
              Morbi vitae diam et purus tincidunt porttitor vel vitae augue. Praesent malesuada metus sed pharetra euismod. Cras tellus odio, tincidunt iaculis diam non, porta aliquet tortor.
            </Media>
          </Media.Content>
        </Media>
      </Media.Content>
    </Media>
  </React.Fragment>
}