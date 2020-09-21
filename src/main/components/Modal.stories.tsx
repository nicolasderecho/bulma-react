import * as React from 'react'
import Modal from "./Modal";
import {useCallback, useState} from "react";
import {Box, Button, Content, IconWrapper, Image} from "../../index";
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