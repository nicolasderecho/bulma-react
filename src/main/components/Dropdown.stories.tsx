import * as React from 'react'
import {Dropdown, Button, IconWrapper, Level, Notification} from "../../index";
import {useCallback, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

export default { title: 'Components/Dropdown' }

export const basic = () => {
  const [isActive, updateIsActive] = useState<boolean>(false);
  const toggleIsActive = useCallback(() => updateIsActive(previosState => !previosState ), []);
  return <React.Fragment>
    <Dropdown active={isActive}>
      <Dropdown.Trigger>
        <Button onClick={toggleIsActive}>
          <span>Dropdown Button</span>
          <IconWrapper>
            <FontAwesomeIcon icon={faAngleDown} />
          </IconWrapper>
        </Button>
      </Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Content>
          <Dropdown.Item active={true}>Comedy</Dropdown.Item>
          <Dropdown.Item>Drama</Dropdown.Item>
          <Dropdown.Item>Sci-Fi</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Other</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown.Menu>
    </Dropdown>
  </React.Fragment>
}

export const hoverable = () => {
  const [isActive, updateIsActive] = useState<boolean>(false);
  const toggleIsActive = useCallback(() => updateIsActive(previosState => !previosState ), []);
  return <React.Fragment>
    <Dropdown active={isActive} hoverable={true}>
      <Dropdown.Trigger>
        <Button onClick={toggleIsActive}>
          <span>Dropdown Button</span>
          <IconWrapper>
            <FontAwesomeIcon icon={faAngleDown} />
          </IconWrapper>
        </Button>
      </Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Content>
          <Dropdown.Item active={true}>Comedy</Dropdown.Item>
          <Dropdown.Item>Drama</Dropdown.Item>
          <Dropdown.Item>Sci-Fi</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Other</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown.Menu>
    </Dropdown>
  </React.Fragment>
}

export const right = () => {
  const [isActive, updateIsActive] = useState<boolean>(false);
  const toggleIsActive = useCallback(() => updateIsActive(previosState => !previosState ), []);
  return <React.Fragment>
    <Level>
      <Level.Left>
        <Dropdown hoverable>
          <Dropdown.Trigger>
            <Button onClick={toggleIsActive}>
              <span>Left Dropdown</span>
              <IconWrapper>
                <FontAwesomeIcon icon={faAngleDown} />
              </IconWrapper>
            </Button>
          </Dropdown.Trigger>
          <Dropdown.Menu>
            <Dropdown.Content>
              <Dropdown.Item>Comedy</Dropdown.Item>
              <Dropdown.Item>Drama</Dropdown.Item>
              <Dropdown.Item>Sci-Fi</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Other</Dropdown.Item>
            </Dropdown.Content>
          </Dropdown.Menu>
        </Dropdown>
      </Level.Left>
      <Level.Right>
        <Dropdown active={isActive} right>
          <Dropdown.Trigger>
            <Button onClick={toggleIsActive}>
              <span>Right Dropdown</span>
              <IconWrapper>
                <FontAwesomeIcon icon={faAngleDown} />
              </IconWrapper>
            </Button>
          </Dropdown.Trigger>
          <Dropdown.Menu>
            <Dropdown.Content>
              <Dropdown.Item active={true}>Comedy</Dropdown.Item>
              <Dropdown.Item>Drama</Dropdown.Item>
              <Dropdown.Item>Sci-Fi</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Other</Dropdown.Item>
            </Dropdown.Content>
          </Dropdown.Menu>
        </Dropdown>
      </Level.Right>
    </Level>
  </React.Fragment>
}

export const up = () => {
  return <React.Fragment>
    <Notification>
      You can use the <code>up</code> prop to have a dropdown menu that appears above the dropdown button.
    </Notification>
    <br/><br/><br/><br/><br/><br/>
    <Dropdown hoverable up>
      <Dropdown.Trigger>
        <Button>
          <span>Dropdown</span>
          <IconWrapper>
            <FontAwesomeIcon icon={faAngleDown} />
          </IconWrapper>
        </Button>
      </Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Content>
          <Dropdown.Item active={true}>Comedy</Dropdown.Item>
          <Dropdown.Item>Drama</Dropdown.Item>
          <Dropdown.Item>Sci-Fi</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Other</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown.Menu>
    </Dropdown>
  </React.Fragment>
}