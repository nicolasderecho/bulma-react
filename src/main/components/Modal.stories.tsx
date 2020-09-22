import * as React from 'react'
import Modal from "./Modal";
import {useCallback, useState} from "react";
import {Box, Button, Content, Control, Delete, Field, IconWrapper, Image, SimpleCheckbox} from "../../index";
import Media from "../layout/Media";
import Level from "../layout/Level";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faReply, faRetweet} from "@fortawesome/free-solid-svg-icons";

export default { title: 'Components/Modal' }

export const basic = () => {
  const [isActive, updateIsActive] = useState(false);
  const openModal = useCallback(() => updateIsActive(true), [] );
  const closeModal = useCallback(() => updateIsActive(false), [] );

  return <React.Fragment>
    <Modal active={isActive}>
      <Modal.Content>
        <Box>
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
          </Media>
        </Box>
      </Modal.Content>
      <Modal.Close onClick={closeModal} />
    </Modal>
    <Button onClick={openModal}>Open modal</Button>
  </React.Fragment>
}

export const explicitBackground = () => {
  const [isActive, updateIsActive] = useState(false);
  const openModal = useCallback(() => updateIsActive(true), [] );
  const closeModal = useCallback(() => updateIsActive(false), [] );

  return <React.Fragment>
    <Modal active={isActive} background={false}>
      <Modal.Background />
      <Modal.Content>
        <Box>
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
          </Media>
        </Box>
      </Modal.Content>
      <Modal.Close onClick={closeModal} />
    </Modal>
    <Button onClick={openModal}>Open modal</Button>
  </React.Fragment>
}

export const mountEvents = () => {
  const [isActive, updateIsActive] = useState(false);
  const openModal = useCallback(() => updateIsActive(true), [] );
  const closeModal = useCallback(() => updateIsActive(false), [] );
  const onMount = () => { console.log('mounting modal'); }
  const onUnmount = () => { console.log('Unmounting modal'); }

  return <React.Fragment>
    <Modal active={isActive} onMount={onMount} onUnmount={onUnmount}>
      <Modal.Content>
        <Box>
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
          </Media>
        </Box>
      </Modal.Content>
      <Modal.Close onClick={closeModal} />
    </Modal>
    <Button onClick={openModal}>Open modal</Button>
  </React.Fragment>
}

export const closeOptions = () => {
  const [isActive, updateIsActive] = useState(false);
  const openModal = useCallback(() => updateIsActive(true), [] );
  const closeModal = useCallback(() => updateIsActive(false), [] );
  const [closeOnEscape, updateCloseOnEscape] = useState(true);
  const toggleCloseOnEscape = useCallback(() => updateCloseOnEscape(prevState => !prevState), []);

  const [closeOnClickingOutside, updateCloseOnClickingOutside] = useState(true);
  const toggleCloseOnClickingOutside = useCallback(() => updateCloseOnClickingOutside(prevState => !prevState), []);

  return <React.Fragment>
    <Button onClick={openModal}>Open modal</Button>
    <Field>
      <Control>
        <SimpleCheckbox checked={closeOnEscape} onChange={toggleCloseOnEscape}> Close on Escape</SimpleCheckbox>
      </Control>
      <Control>
        <SimpleCheckbox checked={closeOnClickingOutside} onChange={toggleCloseOnClickingOutside}> Close on Clicking outside</SimpleCheckbox>
      </Control>
    </Field>
    <Modal active={isActive} closeModal={closeModal} closeOnEscape={closeOnEscape} >
      <Modal.Content closeOnClickOutside={closeOnClickingOutside}>
        <Box>
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
          </Media>
        </Box>
      </Modal.Content>
      <Modal.Close onClick={closeModal} />
    </Modal>
  </React.Fragment>
}

export const openAndCloseCallbacks = () => {
  const [isActive, updateIsActive] = useState(false);
  const openModal = useCallback(() => updateIsActive(true), [] );
  const closeModal = useCallback(() => updateIsActive(false), [] );
  const onOpen = () => console.log('opening modal');
  const onClose = () => console.log('closing modal');

  return <React.Fragment>
    <Modal active={isActive} onOpen={onOpen} onClose={onClose}>
      <Modal.Content>
        <Box>
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
          </Media>
        </Box>
      </Modal.Content>
      <Modal.Close onClick={closeModal} />
    </Modal>
    <Button onClick={openModal}>Open modal</Button>
  </React.Fragment>
}

export const modalCard = () => {
  const [isActive, updateIsActive] = useState(false);
  const openModal = useCallback(() => updateIsActive(true), [] );
  const closeModal = useCallback(() => updateIsActive(false), [] );
  const [closeOnEscape, updateCloseOnEscape] = useState(true);
  const toggleCloseOnEscape = useCallback(() => updateCloseOnEscape(prevState => !prevState), []);

  const [closeOnClickingOutside, updateCloseOnClickingOutside] = useState(true);
  const toggleCloseOnClickingOutside = useCallback(() => updateCloseOnClickingOutside(prevState => !prevState), []);

  return <React.Fragment>
    <Button onClick={openModal}>Open Card modal</Button>
    <Field>
      <Control>
        <SimpleCheckbox checked={closeOnEscape} onChange={toggleCloseOnEscape}> Close on Escape</SimpleCheckbox>
      </Control>
      <Control>
        <SimpleCheckbox checked={closeOnClickingOutside} onChange={toggleCloseOnClickingOutside}> Close on Clicking outside</SimpleCheckbox>
      </Control>
    </Field>
    <Modal active={isActive} closeModal={closeModal} closeOnEscape={closeOnEscape} >
      <Modal.Card closeOnClickOutside={closeOnClickingOutside}>
        <Modal.Card.Head>
          <Modal.Card.Title>Modal Title</Modal.Card.Title>
          <Delete onClick={closeModal} />
        </Modal.Card.Head>
        <Modal.Card.Body>
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
          </Media>
        </Modal.Card.Body>
        <Modal.Card.Foot>
          <Button color={'primary'}>Success</Button>
          <Button color={'link'} onClick={closeModal}>Cancel</Button>
        </Modal.Card.Foot>
      </Modal.Card>
    </Modal>
  </React.Fragment>
}

export const clipped = () => {
  const [isActive, updateIsActive] = useState(false);
  const openModal = useCallback(() => updateIsActive(true), [] );
  const closeModal = useCallback(() => updateIsActive(false), [] );

  return <React.Fragment>
    <Modal active={isActive} clipped closeModal={closeModal}>
      <Modal.Content>
        <Box>
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
          </Media>
        </Box>
      </Modal.Content>
      <Modal.Close onClick={closeModal} />
    </Modal>
    <Button onClick={openModal}>Open Clipped modal</Button>
  </React.Fragment>
}
