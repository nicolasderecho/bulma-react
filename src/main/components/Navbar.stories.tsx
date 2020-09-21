import * as React from 'react'
import {Navbar, Columns, Column, Buttons, Button} from "../../index";
import {useCallback, useState} from "react";

export default { title: 'Components/Navbar' }

const Link: React.FC<React.ComponentPropsWithoutRef<'div'>> = (props) => <div {...props} />;

export const basic = () => {
  const [isActive, updateIsActive] = useState(false);
  const toggleIsActive = useCallback(() => updateIsActive(prevState => !prevState), []);

  return <React.Fragment>
    <Columns>
      <Column>
        <Navbar>
          <Navbar.Brand>
            <Navbar.Item>
              <img src={'https://bulma.io/images/bulma-logo.png'} />
            </Navbar.Item>
            <Navbar.Burger active={isActive} onClick={toggleIsActive} />
          </Navbar.Brand>
          <Navbar.Menu active={isActive}>
            <Navbar.Start>
              <Navbar.Item component={Link} >Home</Navbar.Item>
              <Navbar.Item>Documentation</Navbar.Item>
              <Navbar.Item dropdown hoverable>
                <Navbar.Link>More</Navbar.Link>
                <Navbar.Dropdown>
                  <Navbar.Item>About</Navbar.Item>
                  <Navbar.Item>Jobs</Navbar.Item>
                  <Navbar.Item>Contact</Navbar.Item>
                  <Navbar.Divider />
                  <Navbar.Item>Report an issue</Navbar.Item>
                </Navbar.Dropdown>
              </Navbar.Item>
            </Navbar.Start>
            <Navbar.End>
              <Navbar.Item>
                <Buttons>
                  <Button color={'primary'}><strong>Sign up</strong></Button>
                  <Button light>Log in</Button>
                </Buttons>
              </Navbar.Item>
            </Navbar.End>
          </Navbar.Menu>
        </Navbar>
      </Column>
    </Columns>
  </React.Fragment>
}